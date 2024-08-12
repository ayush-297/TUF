import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host:process.env.host,
    user: process.env.user,
    password: process.env.pass,
    database: process.env.database,
    port: process.env.PORT
}).promise()





export async function getquestions(){
    const [temp] = await pool.query("SELECT * FROM cards.questions");
    return temp;
}

export async function delquestion(id){
    const data = await pool.query(
        'DELETE FROM cards.questions WHERE id =?',[id])
    return data;
}

export async function createQuestion(question,answer){
    const result = await pool.query('INSERT INTO cards.questions (question,answer) VALUES(?,?)',[question,answer]);
    return result[0];
}

export async function updateQuestion(id,question,answer){
    const result = await pool.query('Update cards.questions SET question = ?, answer = ? WHERE id = ?',[question,answer,id])
    return result[0];
} 


