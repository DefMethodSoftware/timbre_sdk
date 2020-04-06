import MembershipRequestsClient from '../MembershipRequestsClient'

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
describe('MembershipRequests Client', ()=>{
  // these tests will hit the Apiary mock server, so I'm expecting the responses to be
  // the data that we've put in there. Probably not best practice to have the tests 
  // rely on Apiary, but meh...
  let storageId = 'storageId'
  let storage, client
  beforeEach(()=>{
    storage = new mockStorage()
    client = new MembershipRequestsClient({
      apiURI: API_URL,
      config: { 
        storage: storage,
        storageId: storageId,
      }
    })
  })
  describe('#create', ()=>{
    it('sends the request to join the band', async ()=>{
      const body = {
        bandId: "abcd1234"
      }
      const { result } = await client.create(body)

      expect(result.status).toBe(201)
      expect(result.statusText).toBe("Created")
      expect(result.data).toBe(null)
    })

    it('Returns errors', async ()=>{
      client = new MembershipRequestsClient({
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

  describe('#get', ()=>{
    storage = new mockStorage('abcd1234')
    client = new MembershipRequestsClient({
      apiURI: API_URL,
      config: { 
        storage: storage,
        storageId: storageId,
      }
    })
    it('requests to view membership requests', async ()=>{
      const { result } = await client.view()

      expect(result.status).toBe(200)
      expect(result.statusText).toBe("OK")
      expect(result.data).toHaveProperty('membershipRequests')
    })

    it('Returns errors', async ()=>{
    client = new MembershipRequestsClient({
      apiURI: API_URL,
      config: { 
        storage: new mockStorage(),
        storageId: storageId,
      }
    })
      const body = {
        wrong: "body"
      }

      const { result } = await client.view({ headers: {
          prefer: "status=400"
        } })
        
      expect(result.status).toBe(400)
      expect(result.statusText).toBe("Bad Request")
      expect(result).not.toHaveProperty('data')
    })
  })

  describe('#respond', ()=>{
    storage = new mockStorage('abcd1234')
    client = new MembershipRequestsClient({
      apiURI: API_URL,
      config: { 
        storage: storage,
        storageId: storageId,
      }
    })
    it('sends the membership request response', async ()=>{
      const body = {
        accepted: true,
        bandId: 'abcd1234', 
        membershipRequestId: 'abcd1234' 
      }

      const { result } = await client.respond(body)

      expect(result.status).toBe(204)
      expect(result.statusText).toBe("No Content")
      expect(result.data).toBe(null)
    })

    it('Returns errors', async ()=>{
    client = new MembershipRequestsClient({
      apiURI: API_URL,
      config: { 
        storage: new mockStorage(),
        storageId: storageId,
      }
    })
      const body = {
        wrong: "body"
      }

      const { result } = await client.view({ headers: {
          prefer: "status=400"
        } })
        
      expect(result.status).toBe(400)
      expect(result.statusText).toBe("Bad Request")
      expect(result).not.toHaveProperty('data')
    })
  })
})