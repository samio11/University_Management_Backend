import express from 'express';
import { studentControllers } from './student.controller';
const router = express.Router();

router.get('/get-all-student', studentControllers.findAllStudents);
router.get('/get-a-student/:id', studentControllers.findAStudent);
router.put('/update-student/:id', studentControllers.updateAStudent);
router.delete('/delete-student/:id', studentControllers.deleteAStudent);

export const studentRoutes = router;
