import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common'


@Controller('teachers/:teacherId/students')
export class studentTeacherController {


    @Get()
    getStudents() {
        return 'return all students belong to a teacher'
    }

    @Put('/:studentId')
    updateStudentTeacher(@Param(':studentId') studentId: string, @Body() body) {
        return `update student teacher  ${studentId} with of ${JSON.stringify(body)}`
    }



}