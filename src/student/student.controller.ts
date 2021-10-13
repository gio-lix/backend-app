import {Controller, Get, Post, Put} from '@nestjs/common'

@Controller('students')
export class studentController {

    @Get()
    getStudents() {
        return 'all students'
    }

    @Get('/:studentId')
    getStudentById() {
        return 'get student by id'
    }

    @Post()
    creatStudent() {
        return 'Create student'
    }

    @Put('/:studentId')
    updateStudent() {
        return 'Update student By Id'
    }
}