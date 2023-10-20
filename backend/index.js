import express from "express";
import mysql from "mysql"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection(process.env.DATABASE_URL)




connection.connect((err) => {
     if (err) {
         console.log('Error connecting to MYSQL database = ', err)
         return;
     }
     console. log( 'MYSQL successfully connected!');
})

app.post("/create", async(req,res)=>{
  const {name , score} = req.body;
  try {
    connection.query (
      "INSERT INTO score_game(name , score) VALUES(?, ?)",
      [name,score],
      (err , results, fields) => {
        if (err){
          console.log("Err insert to database" , err);
          return res.status(400).send()
        }
        return res.status(201).json({ message: "New socre"})
      }
    )
  } catch(err){
    console.log(err)
    return res.status(500).send();
  }
})

app.get("/score" , async (req , res) => {
  try {
    connection.query("SELECT * FROM score_game ORDER BY score DESC" , (err , results , fields) => {
      if(err){
        console.log(err);
        return res.status(400).send()
      }
      res.status(200).json(results)
    })
  } catch(err){
    console.log(err)
    return res.status(500).send();
  }
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });