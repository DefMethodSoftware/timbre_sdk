import RequestManager from "../RequestManager"
import axios from 'axios'

jest.mock('axios')


describe('Request Manager', ()=>{
  let storage, apiURI, rm, storageId;
  beforeEach(()=>{
    storage = {
        getItem: jest.fn()
    }
    storageId = 'storageId'
    rm = new RequestManager({
      apiURI: 'https://api.test.com',
      storage: storage,
      storageId: storageId
    })
  })

  it('is constructed with an apURI, storage and storageId', ()=>{
    expect(rm.apiURI).toBe('https://api.test.com')
    expect(rm.storage).toBe(storage)
    expect(rm.storageId).toBe('storageId')
  })
  describe('#requestor', ()=>{
    it('should send a request to the given endpoint with the given parameters', async ()=>{
      const config = {
        token: 'token',
        url: 'endpoint',
        method: 'GET',
      }
      let request
      axios.request.mockImplementation((callConfig)=>{
        request = callConfig
        const response = Promise.resolve({
          status: 'status',
          statusText: 'statusText',
          config: {},
          data: {}
        })
        return response
      })
      
      await rm.requestor(config)

      expect(request.url).toBe('https://api.test.com/endpoint')
      expect(request.method).toBe('get')
      expect(request.headers.Authorization).toBe('token')
      expect(request.headers['Content-Type']).toBe('application/json')
    })
    it('should send allow unauthenticated requests to whitelisted endpoints', async ()=>{
      const config = {
        token: null,
        url: 'users',
        method: 'POST',
      }
      let request
      axios.request.mockImplementation((callConfig)=>{
        request = callConfig
        const response = Promise.resolve({
          status: 'status',
          statusText: 'statusText',
          config: {},
          data: {}
        })
        return response
      })
      
      await rm.requestor(config)

      expect(request.url).toBe('https://api.test.com/users')
      expect(request.method).toBe('post')
      expect(request.headers.Authorization).toBe(null)
      expect(request.headers['Content-Type']).toBe('application/json')
    })

    it('should return an object containing the response data', async ()=>{
      const config = {
        token: 'token',
        url: 'endpoint',
        method: 'GET',
      }

      let request
      axios.request.mockImplementation((callConfig)=>{
        request = callConfig
        const response = Promise.resolve({
          status: 'status',
          statusText: 'statusText',
          config: callConfig,
          data: 'data'
        })
        return response
      })
      
      const response = await rm.requestor(config)
      
      expect(response.result.status).toBe('status')
      expect(response.result.statusText).toBe('statusText')
      expect(response.result.request).toBe(request)
      expect(response.result.data).toBe('data')
    })

    it('should get a token from storage if none is provided', async ()=>{
      const config = {
        token: null,
        url: 'endpoint',
        method: 'GET',
      }

      let request
      axios.request.mockImplementation((callConfig)=>{
        request = callConfig
        const response = Promise.resolve({
          status: 'status',
          statusText: 'statusText',
          config: callConfig,
          data: 'data'
        })
        return response
      })

      let givenId
      storage.getItem.mockImplementation((Id)=>{
        givenId = Id
        return 'stored token'
      })
      
      await rm.requestor(config)
      
      expect(request.url).toBe('https://api.test.com/endpoint')
      expect(request.method).toBe('get')
      expect(request.headers.Authorization).toBe('stored token')
      expect(request.headers['Content-Type']).toBe('application/json')
      expect(givenId).toBe(storageId)
    })

    it('should handle error responses', async ()=>{
      const config = {
        token: 'token',
        url: 'endpoint',
        method: 'GET',
      }

      let request
      axios.request.mockImplementation((callConfig)=>{
        request = callConfig
        const response = Promise.reject({ response: {
            status: 'status',
            statusText: 'statusText',
            config: callConfig,
          }
        })
        return response
      })
      
      const response = await rm.requestor(config)
      
      expect(response.result.status).toBe('status')
      expect(response.result.statusText).toBe('statusText')
      expect(response.result.request).toBe(request)
    })

    it('should throw if required params are not provided', async ()=>{
      expect(()=>{new RequestManager({
        apiURI: null,
        storage: storage,
        storageId: storageId
      })}).toThrow('Invalid config: apiURI missing or invalid')
    })

    it('should throw if required params are not provided', async ()=>{
      expect(()=>{new RequestManager({
        apiURI: 'https://api.test.com',
        storage: null,
        storageId: storageId
      })}).toThrow('Invalid config: storage missing or invalid')
    })
    
    it('should throw if required params are not provided', async ()=>{
      expect(()=>{new RequestManager({
        apiURI: 'https://api.test.com',
        storage: storage,
        storageId: null
      })}).toThrow('Invalid config: storageId missing or invalid')
    })
  })
})