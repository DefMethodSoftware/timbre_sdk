import BandsClient from '../BandsClient'
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

    client = new BandsClient({
      apiURI: API_URL,
      storage: storage,
      storageId: 'storageId'
    })
  })

  it('should inherit from Crud Client', ()=>{
    const client = new BandsClient({
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
    it('sends the create Band request', async ()=>{
      const body = {
        bandName: "The Tests",
        missingInstruments: { guitar: 2, vocals: 1 },
        bio: "Test Band"
      }

      scope.post('/bands')
        .reply((uri, requestBody)=>{
          expect(JSON.stringify(requestBody)).toBe(JSON.stringify(body))
          return [
            201,
            "Band created successfully"
          ]
        })

      await client.create({body: body})
      
      expect(scope.isDone()).toBe(true)
    })
  })

  describe('#view', ()=>{
    it('sends the view bands request', async ()=>{
      scope.get('/bands')
        .reply((uri, requestBody)=>{
          return [
            200,
            {
              bands: [
                {
                    membershipRequests: [],
                    _id: "5e87fad740b98d1ca41265dd",
                    bandName: "The Tests",
                    missingInstruments: {
                        guitar: 2,
                        vocals: 1
                    },
                    bio: "Test 5 Band",
                    location: "5e87facd40b98d1ca41265dc",
                    user: "5e87fa6e40b98d1ca41265da",
                    createdAt: "2020-04-04T03:11:19.346Z",
                    updatedAt: "2020-04-04T03:11:19.346Z",
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
})