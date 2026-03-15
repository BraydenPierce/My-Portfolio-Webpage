const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.ATLAS_URI;

let _db;

module.exports = {
  connectToServer: function (callback) {
    console.log("Attempting to connect...");
    // Create a MongoClient with a MongoClientOptions object to set the Stable API Version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    async function run() {
      try {
        // Connect the client to the server
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 }); // TODO: Check if admin is okay for deployment
        console.log(
          "Pinged your deployment. You successfully connected to MongoDB!",
        );
        _db = client.db("portfolio");
        console.log("Successfully connected to portfolio collection");
      } finally {
        // Ensures that the client will close when you finish/error
        // console.log("Closing the client");
        // await client.close();
      }
    }
    run().catch(console.dir);
  },

  getDb: function () {
    return _db;
  },
};
