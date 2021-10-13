import { Module } from '@nestjs/common';
import {studentController} from "../student/student.controller";

@Module({
  imports: [],
  controllers: [studentController]
})
export class AppModule {}
