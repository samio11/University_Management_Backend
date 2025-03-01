import { Router } from 'express';
import { userRoutes } from '../modules/user/user.routes';
import { studentRoutes } from '../modules/student/student.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/user',
    element: userRoutes,
  },
  {
    path: '/student',
    element: studentRoutes,
  },
];

moduleRoutes.forEach((x) => router.use(x.path, x.element));
export default router;
