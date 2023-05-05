import 'reflect-metadata';
import app from './app';
import { appDataSource } from './db';

require('dotenv').config();
const PORT = process.env.PORT || 3001;

async function main() {
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

main();
