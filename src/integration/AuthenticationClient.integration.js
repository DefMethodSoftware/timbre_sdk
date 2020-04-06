import AuthenticationClient from '../AuthenticationClient'

const API_URL = process.env.API_URL

describe('Authentication Client', ()=>{
  // these tests will hit the Apiary mock server, so I'm expecting the responses to be
  // the data that we've put in there. Probably not best practice to have the tests 
  // rely on Apiary, but meh...

  // I'm implementing a little storage constructor here to store / retrieve the token
  // as the user authenticates, allowing us to run expectations against the whole thing
  // end to end
  function mockStorage(){
    this.container = {
      storageId: null
    }
    this.getItem = (id)=>{
      return this.container[id]
    }
    this.setItem = (id, value)=>{
      this.container[id] = value
    }
  }
  let storageId = 'storageId'
  let storage
  describe('#authenticate', ()=>{
    storage = new mockStorage()
    const client = new AuthenticationClient({
      apiURI: API_URL,
      config: { 
        storage: storage,
        storageId: storageId,
      }
    })
    it('sends the authentication request', async ()=>{
      const body = {
        email: "london@london.com",
        password: 'password',
      }

      const { result } = await client.authenticate(body)

      expect(result.status).toBe(200)
      expect(result.statusText).toBe("OK")
      expect(result.data.email).toBe("london@london.com")
      expect(result.data.userId).toBe("abcd1234")
      expect(result.data.token).toBe("abcd1234")
      expect(storage.getItem(storageId)).toBe("abcd1234")
    })

    it('Returns errors', async ()=>{
    const client = new AuthenticationClient({
      apiURI: API_URL,
      config: { 
        storage: new mockStorage(),
        storageId: storageId,
      }
    })
      const body = {
        wrong: "body"
      }

      const { result } = await client.authenticate({ body,  headers: {
          prefer: "status=400"
        } })

      expect(result.status).toBe(400)
      expect(result.statusText).toBe("Bad Request")
      expect(result).not.toHaveProperty('data')
    })
  })
})