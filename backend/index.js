import express from 'express';
import sequelize from './db/index.js'

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!!!!');
});


app.listen(3001, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    console.log('Server is running on port 3001');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});