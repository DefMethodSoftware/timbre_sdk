import BandsClient from '../BandsClient'

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
describe('Bands Client', ()=>{
  // these tests will hit the Apiary mock server, so I'm expecting the responses to be
  // the data that we've put in there. Probably not best practice to have the tests 
  // rely on Apiary, but meh...
  let storageId = 'storageId'
  let storage, client
  beforeEach(()=>{
    storage = new mockStorage()
    client = new BandsClient({
      apiURI: API_URL,
      config: { 
        storage: storage,
        storageId: storageId,
      }
    })
  })
  describe('#create', ()=>{
    it('sends the band creation request', async ()=>{
      const body = {
        bandName: "The Tests",
        missingInstruments: { guitar: 2, vocals: 1 },
        bio: "Test Bands"
      }

      const { result } = await client.create(body)

      expect(result.status).toBe(201)
      expect(result.statusText).toBe("Created")
      expect(result.data).toBe("Band created successfully")
    })

    it('Returns errors', async ()=>{
    client = new BandsClient({
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
    client = new BandsClient({
      apiURI: API_URL,
      config: { 
        storage: storage,
        storageId: storageId,
      }
    })
    it('requests to view bands', async ()=>{
      const { result } = await client.view()

      expect(result.status).toBe(200)
      expect(result.statusText).toBe("OK")
      expect(result.data).toHaveProperty('bands')
    })

    it('Returns errors', async ()=>{
    client = new BandsClient({
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