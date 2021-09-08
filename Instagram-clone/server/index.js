const express = require('express');
// const file_upload = require('express-fileupload');
// const path = require('path');

const authRouter = require('./routes/auth');

const postRouter = require('./routes/post');





const app = express();

// app.use( file_upload({
//     useTempFiles : true,
//     tempFileDir : path.join(__dirname,'uploads/images'),
// }));

app.use(express.json());

app.use('/',authRouter);
app.use('/',postRouter);

app.listen(5000, ()=> console.log("our app is running on 5k"));