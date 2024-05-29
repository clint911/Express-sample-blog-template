import express, { Request, Response } from 'express';
import morgan, { Morgan } from "morgan"

const app = express();
const PORT = 3000

app.use(express.static('public');///setting the public folder to provide static content
app.use(express.urlencoded({ extended: true }))

const server = app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
})

///Very advanced logging middleware
app.use(morgan('dev'));

//Declaring the 3 basic routes for our app {auth,user,blogs}')

app.use('/auth', require('./routes/authHandler'));
app.use('/user', require('./routes/userHandler'));
app.use('/blogs', require('./blogs/authHandler'));

app.use((req, res) => {
  res.status(404).send('Page not Found');
})
