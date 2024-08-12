import express from 'express'
import {getquestions,delquestion,createQuestion, updateQuestion} from './database.js'
const app = express();
import cors from 'cors'
app.use(express.json());
app.use(cors());




app.get("/questions",async (req,res)=>{
    const questions = await getquestions();
    res.send(questions);
})

app.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id
    const result = await delquestion(id);
    res.send(result);
})


app.put('/update/:id',(req,res)=>{
    const result = updateQuestion(req.params.id,req.body.question,req.body.answer);
    res.send(result);
})

app.post('/newquestion',async (req,res)=>{
    const {question,answer} = req.body
    const result = await createQuestion(question,answer);
    res.send(result)
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.listen(8080,()=>{
    console.log("Listening on port 8080");
})