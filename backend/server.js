import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();


//middleware
app.use(express.json());
const PORT =process.env.PORT || 5001;

import { sql } from "./config/db.js";
async function initDB() {
   try{
        await sql`CREATE TABLE IF NOT EXISTS transactions(
           id SERIAL PRIMARY KEY,
           user_id VARCHAR(255) NOT NULL,
           title VARCHAR(255) NOT NULL,
           amount DECIMAL(10,2) NOT NULL,
           category VARCHAR(255) NOT NULL,
           created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`;
            //DECIMAL(10,2)
            //means: the max value it can store is 99999999.99(8 digits before the decimal, 2 after)
        console.log("Database initialized successfully")
   }  catch (error){
      console.log("Error initializeing DB",error)
      process.exit(1)//status code 1 means failure, 0 success



   }
}
app.get("/",(req,res) => {
   res.send("its working")
})



initDB();
/*app.post("/api/transaction",async(req,res)=>{
   //title , amount , category , user_id
   try{
      const {title,amount,category,user_id}=req.body
   } catch (error){

   }
})*/
console.log("my port:", process.env.PORT);

app.listen(5001, () => {
    console.log("server is up and running on PORT:", PORT);
});

