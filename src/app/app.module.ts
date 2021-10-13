import { Module } from '@nestjs/common';
import {studentController} from "../student/student.controller";
import {teacherController} from "../teacher/teacher.controller";
import {studentTeacherController} from "../teacher/student.controller";
import {StudentService} from "../student/student.service";

@Module({
  imports: [],
  controllers: [studentController, teacherController, studentTeacherController],
  providers: [StudentService]
})
export class AppModule {}
