import 'reflect-metadata';
import app from './app';
import { appDataSource } from './db';

require('dotenv').config();
const PORT = process.env.PORT || 4002;

async function boostrap() {
  try {
    await appDataSource.initialize();
    console.log('Database connected!');
    app.listen(PORT, () => {
      console.log('Server running OK!!');
    });

    console.log('Server is listening on port:', PORT);
  } catch (err) {
    console.log(err);
  }
}

boostrap();
function db() {
  throw new Error('Function not implemented.');
}
