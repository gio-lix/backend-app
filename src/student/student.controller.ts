import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common'
import {CreateStudentDto, UpdateStudentDto} from "./dto/student.dto";

@Controller('students')
export class studentController {

    @Get()
    getStudents() {
        return 'all students'
    }

    @Get('/:studentId')
    getStudentById(@Param('studentId') studentId: string) {
        console.log(studentId)
        return `get student with id of ${studentId}`
    }

    @Post()
    creatStudent(@Body() body: CreateStudentDto) {
        console.log(body)
        return `Create student with following data ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(@Param('studentId') studentId: string , @Body() body: UpdateStudentDto) {
        return `Update student with id of ${studentId} with data of ${JSON.stringify(body)}`
    }
}