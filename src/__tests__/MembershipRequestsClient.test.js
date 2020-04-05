import MembershipRequestsClient from '../MembershipRequestsClient'
import CrudClient from '../CrudClient'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import nock from 'nock'

const API_URL = process.env.API_URL

axios.defaults.adapter = httpAdapter;

describe('Bands Client', ()=>{
  let storage, client, storageId, scope;
  beforeEach(()=>{
    storage = {
        getItem: jest.fn().mockImplementation(()=>{
          return 'abc123'
        }),
        setItem: jest.fn()
    }

    scope = nock(API_URL, { allowUnmocked: false })

    client = new MembershipRequestsClient({
      apiURI: API_URL,
      storage: storage,
      storageId: 'storageId'
    })
  })

  it('should inherit from Crud Client', ()=>{
    const client = new MembershipRequestsClient({
      apiURI: API_URL,
      storage: {
        getItem: jest.fn().mockImplementation(()=>{
          return 'token'
        })
      },
      storageId: 'storageId'
    })
    expect(client).toBeInstanceOf(CrudClient)
  })

  describe('#create', ()=>{
    it('sends the create Membership Request request', async ()=>{
      scope.post('/bands/abcd1234/membership_requests')
        .reply((uri, requestBody)=>{
          return [
            201
          ]
        })

      await client.create({ bandId: 'abcd1234' })
      
      expect(scope.isDone()).toBe(true)
    })
  })

  describe('#view', ()=>{
    it('sends the view Membership Requests request', async ()=>{
      scope.get('/membership_requests')
        .reply((uri, requestBody)=>{
          return [
            200,
            {
              membershipRequests: [
                {
                    accepted: false,
                    declined: false,
                    _id: "5e88004040b98d1ca41265df",
                    user: "5e87fa6e40b98d1ca41265da",
                    band: "5e87fad740b98d1ca41265dd",
                    __v: 0
                }
              ]
            }
          ]
        })

      await client.view()
      
      expect(scope.isDone()).toBe(true)
    })
  })

  describe('#respond', ()=>{
    it('sends the Membership Request Response', async ()=>{
      const body = {
        accepted: true
      }

      scope.patch('/bands/abcd1234/membership_requests/abcd1234')
        .reply((uri, requestBody)=>{
          expect(JSON.stringify(requestBody)).toBe(JSON.stringify(body))
          return [
            204
          ]
        })

      await client.respond({ bandId: 'abcd1234', membershipRequestId: 'abcd1234' , body: body })
      
      expect(scope.isDone()).toBe(true)
    })
  })
})