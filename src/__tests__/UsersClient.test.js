import UsersClient from '../UsersClient'
import CrudClient from '../CrudClient'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import nock from 'nock'

const API_URL = process.env.API_URL

axios.defaults.adapter = httpAdapter;

describe('Users Client', ()=>{
  let storage, client, storageId, scope;
  beforeEach(()=>{
    storage = {
        getItem: jest.fn().mockImplementation(()=>{
          return 'abc123'
        }),
        setItem: jest.fn()
    }
    storageId = 'storageId'

    scope = nock(API_URL, { allowUnmocked: false })
    
    client = new UsersClient({
      apiURI:  API_URL,
      config: {
        storage: storage,
        storageId: storageId
      }
    })
  })

  it('should inherit from Crud Client', ()=>{
    expect(client).toBeInstanceOf(CrudClient)
  })

  describe('#create', ()=>{
    it('sends the create user request', async ()=>{
      const body = {
        email: 'user@test.com',
        password: 'password',
        username: 'testuser'
      }

      scope.post('/users')
        .reply((uri, requestBody)=>{
          expect(JSON.stringify(requestBody)).toBe(JSON.stringify(body))
          return [
            201,
            {
              email: 'user@test.com',
              userId: 'abcd1234',
              token: 'abcd1234'
            }
          ]
        })

      await client.create(body)
      
      expect(scope.isDone()).toBe(true)
    })

    it('saves the received authentication token', async ()=>{
      const body = {
        email: 'user@test.com',
        password: 'password',
        username: 'testuser'
      }

      scope.post('/users')
        .reply((uri, requestBody)=>{
          return [
            201,
            {
              email: 'user@test.com',
              userId: 'abcd1234',
              token: 'abcd1234'
            }
          ]
        })

      await client.create(body)

      expect(storage.setItem).toBeCalledWith(storageId, 'abcd1234')
      expect(scope.isDone()).toBe(true)
    })
  })

  describe('#updateProfile', ()=>{
    it('sends the update profile request', async ()=>{
      const body = {
          firstName: "Bob",
          lastName: "Friendly",
          bio: "No",
          instruments: [
              {
                  instrument: "guitar",
                  rating: 3
              },
              {
                  instrument: "drums",
                  rating: 5
              }
          ],
          location: {
              coords: [55.509865,-0.118092],
              friendlyLocation: "London, UK"
          },
          userId: 'abcd1234'
      }

      scope.patch('/users/abcd1234')
        .reply((uri, requestBody)=>{
          expect(requestBody.firstName).toBe(body.firstName)
          expect(requestBody.lastName).toBe(body.lastName)
          expect(requestBody.bio).toBe(body.bio)
          expect(requestBody).toHaveProperty('instruments')
          expect(requestBody).toHaveProperty('location')
          return [
            204
          ]
        })

      await client.updateProfile(body)
      
      expect(scope.isDone()).toBe(true)
    })
  })
})