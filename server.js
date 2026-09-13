const http = require("http");
const mongodb = require("mongodb");

const connectionString =
    "mongodb+srv://alimkulovakbar8_db_user:Inventor04@cluster0.nxmdrbe.mongodb.net/?appName=Cluster0/Reja";

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

            const PORT = 3000;

            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);