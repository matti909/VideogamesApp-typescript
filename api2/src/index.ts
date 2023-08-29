import 'reflect-metadata';

import { AppDS } from './config/ormconfig';
import app from './app';

require('dotenv').config();
const PORT = process.env.PORT || 4002;

async function boostrap() {
  try {
    await AppDS.initialize();
    console.log('Database connected on port: ', process.env.POSTGRES_PORT);

    app.listen(PORT, () => {
      console.log('Server running OK!!');
    });

    console.log('Server is listening on port: ', PORT);
  } catch (err) {
    console.log(err);
  }
}
boostrap();
