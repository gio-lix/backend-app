import { Injectable } from '@nestjs/common';
import {students} from "../db";

@Injectable()
export class StudentService {
    students = students
    getStudents() {
        return this.students
    }
}
