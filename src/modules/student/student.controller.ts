import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { studentServices } from './student.service';

const findAllStudents = catchAsync(async (req, res, next) => {
  const result = await studentServices.findAllStudents();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Successfully getting all student data',
    data: result,
  });
});

const findAStudent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const result = await studentServices.findAStudent(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Successfully getting all student data',
    data: result,
  });
});

const updateAStudent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await studentServices.updateAStudent(id, updateData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Student Data Update Successfully',
    data: result,
  });
});

const deleteAStudent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await studentServices.deleteAStudent(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Student deleted Done',
    data: result,
  });
});

export const studentControllers = {
  findAStudent,
  findAllStudents,
  updateAStudent,
  deleteAStudent,
};
