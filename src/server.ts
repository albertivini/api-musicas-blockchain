import express from "express"
import web3 from "web3"
import contract from "truffle-contract"
import routes from "./routes"


const app = express()

app.use(express.json())

app.listen(3000)