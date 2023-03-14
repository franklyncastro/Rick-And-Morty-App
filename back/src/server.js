
const express = require('express');
const app = express();
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');
const PORT = 3001;



app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/rickandmorty', router);






app.listen(PORT, ()=>{
    console.log(`Server On in port ${PORT}`)
})













    //!Este es el anterior servidor con http 
    // const http = require("http");
    
    // const server = http
    //   .createServer((req, res) => {
    //     res.setHeader("Access-Control-Allow-Origin", "*");
    //     let id = req.url.split("/").at(-1);
    
    //     if (req.url.includes("onSearch")) {
    //         getCharById(res, id)
    //     }
    
    //     if(req.url.includes('detail')){
    //         getCharByDetail(res, id)
    //     }
        
    //   })
    //   .listen(PORT, "localhost");