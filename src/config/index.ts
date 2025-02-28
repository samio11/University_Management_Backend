import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database: process.env.DATABASE,
  bcrypt_salt: process.env.BCRYPT_SALT,
  default_pass_student: process.env.DEFAULT_STUDENT_PASSWORD,
};
