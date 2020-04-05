import AuthenticationClient from '../AuthenticationClient'
import CrudClient from '../CrudClient'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import nock from 'nock'

const API_URL = process.env.API_URL

axios.defaults.adapter = httpAdapter;

describe('Authentication Client', ()=>{
  it('should inherit from Crud Client', ()=>{
    const client = new AuthenticationClient({
      apiURI: API_URL,
      storage: jest.fn(),
      storageId: 'storageId'
    })
    expect(client).toBeInstanceOf(CrudClient)
  })

  describe('#authenticate', ()=>{
    let storage, client, storageId, scope;
    beforeEach(()=>{
      storage = {
          getItem: jest.fn().mockImplementation(()=>{
            return 'abc123'
          }),
          setItem: jest.fn()
      }

      scope = nock(API_URL, { allowUnmocked: false })

      client = new AuthenticationClient({
        apiURI: API_URL,
        storage: storage,
        storageId: 'storageId'
      })
    })

    it('sends the authentication request', async ()=>{
      const body = {
        email: 'user@test.com',
        password: 'password',
      }

      scope.post('/users/login')
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

      await client.authenticate(body)
      
      expect(scope.isDone()).toBe(true)
    })

    it('saves the received authentication token', async ()=>{
      const body = {
        email: 'user@test.com',
        password: 'password',
      }

      scope.post('/users/login')
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

      await client.authenticate(body)

      expect(storage.setItem).toBeCalledWith(storageId, 'abcd1234')
      expect(scope.isDone()).toBe(true)
    })
  })
})