import { TStudent } from './student.interface';
import Student from './student.model';

const findAllStudents = async () => {
  const result = await Student.find();
  return result;
};

const findAStudent = async (id) => {
  const result = await Student.findById(id);
  return result;
};

const updateAStudent = async (id, updateData: TStudent) => {
  const result = await Student.findByIdAndUpdate(id, updateAStudent);
  return result;
};

const deleteAStudent = async (id) => {
  const result = await Student.findByIdAndDelete(id);
  return result;
};

export const studentServices = {
  findAllStudents,
  findAStudent,
  updateAStudent,
  deleteAStudent,
};
