import { Module } from '@nestjs/common';
import {studentController} from "../student/student.controller";
import {teacherController} from "../teacher/teacher.controller";
import {studentTeacherController} from "../teacher/student.controller";

@Module({
  imports: [],
  controllers: [studentController, teacherController, studentTeacherController]
})
export class AppModule {}
