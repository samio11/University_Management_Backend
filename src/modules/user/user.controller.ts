import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { userServices } from './user.service';

const createStudent = catchAsync(async (req, res, next) => {
  const { password, studentData } = req.body;
  const result = await userServices.createStudentIntoDB(password, studentData);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Student create Successfully',
    data: result,
  });
});

export const userControllers = { createStudent };
