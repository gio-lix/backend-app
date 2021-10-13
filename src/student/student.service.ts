import { Injectable } from '@nestjs/common';
import {students} from "../db";
import {v4 as uuid} from "uuid"
import {CreateStudentDto, FindStudentDto, StudentResponseDto, UpdateStudentDto} from "./dto/student.dto";

@Injectable()
export class StudentService {

    students = students
    getStudents(): FindStudentDto[] {
        return this.students
    }

    getStudentById(studentId: string): FindStudentDto {
        return this.students.find(student => {
            return student.id === studentId
        })
    }
    creatStudent(payload: CreateStudentDto): StudentResponseDto {
        let newStudent = {
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent)
        return newStudent
    }
    updateStudent(payload: UpdateStudentDto, studentId: string) {
        let updateStudent: StudentResponseDto
        const upDateStudentList = this.students.map(student => {
            if (student.id === studentId) {
                updateStudent = {
                    id: studentId,
                    ...payload
                }
            }else return student
        });
        this.students = upDateStudentList;
        return updateStudent
    }
}
