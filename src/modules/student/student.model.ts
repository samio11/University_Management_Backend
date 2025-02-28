import { Schema, model, connect } from 'mongoose';
import { TGuardian, TStudent } from './student.interface';

const guardianSchema = new Schema<TGuardian>({
  name: { type: String, required: true },
  relation: { type: String, required: true },
  contactNo: { type: String, required: true },
});

const studentSchema = new Schema<TStudent>(
  {
    id: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true, unique: true },
    name: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: guardianSchema,
    localGuardian: guardianSchema,
    profileImage: { type: String, required: true },
    academicDepartment: { type: Schema.Types.ObjectId, required: true },
    isDeleted: { type: Boolean, required: true },
  },
  { timestamps: true },
);

const Student = model<TStudent>('Student', studentSchema);
export default Student;
