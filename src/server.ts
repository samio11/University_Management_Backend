import app from './app';
import mongoose from 'mongoose';
import config from './config';

async function main() {
  await mongoose.connect(config.database as string);
  app.listen(config.port, () => {
    console.log(`server runs at:- ${config.port}`);
  });
}

main();
