require("dotenv").config();

const http = require("http");
const mongodb = require("mongodb");

const connectionString = process.env.MONGODB_URI;

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {

        if (err) {
            console.log("ERROR on connection");
            console.log(err);
        } else {

            console.log("MongoDb connection succeed!");

            const db = client.db("Reja");

            module.exports = db;

            const app = require("./app");

            const server = http.createServer(app);

            const PORT = 7004;

            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);