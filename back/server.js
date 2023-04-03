const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes");
const film = require("./routes/route_film")

const app = express();
const port = process.env.PORT || 8000;

app
    .use(morgan("combined"))
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use(routes)
    .use(film)
    .use((req, res) => {
        res.status(404);
        res.json({
            error: "Page not found"
        })
    })
    .listen(port, () => console.log("listening on port " + port));
