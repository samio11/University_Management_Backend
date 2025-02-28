import { Types } from 'mongoose';

export type TGuardian = {
  name: string;
  relation: string;
  contactNo: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: string;
  gender: 'male' | 'female';
  dateOfBirth: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TGuardian;
  profileImage: string;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};
