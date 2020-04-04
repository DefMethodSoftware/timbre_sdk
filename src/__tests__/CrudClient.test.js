import CrudClient from '../CrudClient'
import RequestManager from '../RequestManager'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import nock from 'nock'

const API_URI = process.env.API_URI

axios.defaults.adapter = httpAdapter;

describe('Crud Client', ()=>{
  describe('#get', ()=>{
    let storage, client, storageId, scope;
    beforeEach(()=>{
      storage = {
          getItem: jest.fn().mockImplementation(()=>{
            return 'abc123'
          })
      }

      scope = nock(API_URI, { allowUnmocked: false })

      storageId = 'storageId'
      client = new CrudClient({
        apiURI: API_URI,
        storage: storage,
        storageId: storageId
      })
    })
    it('inherits from RequestManager', async ()=>{
      expect(client).toBeInstanceOf(RequestManager)
    })
    it('sends a GET request', async ()=>{
      scope.get('/endpoint')
        .reply((uri, requestBody)=>{
          return [
            200,
            {
              statusText: "statusText",
              config: "config",
              data: "data"
            }
          ]
        })
      
      await client.get({url: 'endpoint' })

      expect(scope.isDone()).toBe(true)
    })

    it('sends a POST request', async ()=>{
      scope.post('/endpoint')
        .reply((uri, requestBody)=>{
          return [
            201,
            {
              statusText: "statusText",
              config: "config",
              data: "data"
            }
          ]
        })
      await client.post({ url: 'endpoint', body: {}})

      expect(scope.isDone()).toBe(true)
    })

    it('sends a PATCH request', async ()=>{
      scope.patch('/endpoint')
        .reply((uri, requestBody)=>{
          return [
            204,
            {
              statusText: "statusText",
              config: "config",
              data: "data"
            }
          ]
        })

      await client.patch({ url: 'endpoint', body: {}})

      expect(scope.isDone()).toBe(true)
    })
  })
})