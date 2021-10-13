import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common'


@Controller('teachers')
export class teacherController {

    @Get()
    getTeachers() {
        return 'all teachers'
    }

    @Get('/:teacherId')
    getTeachersById(@Param('teacherId') teacherId: string) {
        return 'anna maria'
    }
    @Post()
    createTeacher(@Body() body) {
        return `teacher is create ${JSON.stringify(body)}`

    }




}