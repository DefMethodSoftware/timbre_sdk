import UsersClient from '../UsersClient'

const API_URL = process.env.API_URL
// I'm implementing a little storage constructor here to store / retrieve the token
// as the user authenticates, allowing us to run expectations against the whole thing
// end to end
function mockStorage(token){
  this.container = {
    storageId: token
  }
  this.getItem = (id)=>{
    return this.container[id]
  }
  this.setItem = (id, value)=>{
    this.container[id] = value
  }
}
describe('Users Client', ()=>{
  // these tests will hit the Apiary mock server, so I'm expecting the responses to be
  // the data that we've put in there. Probably not best practice to have the tests 
  // rely on Apiary, but meh...
  let storageId = 'storageId'
  let storage, client
  beforeEach(()=>{
    storage = new mockStorage()
    client = new UsersClient({
      apiURI: API_URL,
      config: { 
        storage: storage,
        storageId: storageId,
      }
    })
  })
  describe('#create', ()=>{
    it('sends the user creation request', async ()=>{
      const body = {
        email: "london@london.com",
        username: "london",
        password: 'password'
      }

      const { result } = await client.create(body)

      expect(result.status).toBe(201)
      expect(result.statusText).toBe("Created")
      expect(result.data.email).toBe("london@london.com")
      expect(result.data.userId).toBe("abcd1234")
      expect(result.data.token).toBe("abcd1234")
      expect(storage.getItem(storageId)).toBe("abcd1234")
    })

    it('Returns errors', async ()=>{
    client = new UsersClient({
      apiURI: API_URL,
      config: { 
        storage: new mockStorage(),
        storageId: storageId,
      }
    })
      const body = {
        wrong: "body"
      }

      const { result } = await client.create({ body,  headers: {
          prefer: "status=400"
        } })
        
      expect(result.status).toBe(400)
      expect(result.statusText).toBe("Bad Request")
      expect(result).not.toHaveProperty('data')
    })
  })

  describe('#updateProfile', ()=>{
    storage = new mockStorage('abcd1234')
    client = new UsersClient({
      apiURI: API_URL,
      config: { 
        storage: storage,
        storageId: storageId,
      }
    })
    it('sends the new profile information', async ()=>{
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
          }
      }

      const { result } = await client.updateProfile(body)

      expect(result.status).toBe(204)
      expect(result.statusText).toBe("No Content")
      expect(result.data).toBe(null)
    })

    it('Returns errors', async ()=>{
    client = new UsersClient({
      apiURI: API_URL,
      config: { 
        storage: new mockStorage(),
        storageId: storageId,
      }
    })
      const body = {
        wrong: "body"
      }

      const { result } = await client.updateProfile({ body,  headers: {
          prefer: "status=400"
        } })
        
      expect(result.status).toBe(400)
      expect(result.statusText).toBe("Bad Request")
      expect(result).not.toHaveProperty('data')
    })
  })
})