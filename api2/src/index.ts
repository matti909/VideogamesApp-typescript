import 'reflect-metadata';

import { app } from './app';
import { appDataSource } from './ormconfig';

require('dotenv').config();
const PORT = process.env.PORT || 5002;

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
