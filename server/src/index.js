import { app } from './app.js';
import { connectDB } from './db/connection.js';
import dotenv from "dotenv"



dotenv.config();
const PORT = process.env.PORT || 3000;
console.log(PORT)
connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is running on port: ${PORT}`)
    })
    app.on("error",(err)=>{
        console.log("Error Occured while starting application");
    })
})
.catch(err=>{
    console.log("Error Occured while establing the connection")
})