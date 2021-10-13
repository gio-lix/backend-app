import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common'
import {CreateStudentDto, FindStudentDto, StudentResponseDto, UpdateStudentDto} from "./dto/student.dto";
import {StudentService} from "./student.service";

@Controller('students')
export class studentController {

    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(): FindStudentDto[] {
        return this.studentService.getStudents()
    }

    @Get('/:studentId')
    getStudentById(@Param('studentId') studentId: string): FindStudentDto {
        return this.studentService.getStudentById(studentId)
    }

    @Post()
    creatStudent(@Body() body: CreateStudentDto): StudentResponseDto {
        return this.studentService.creatStudent(body)
    }

    @Put('/:studentId')
    updateStudent(@Param('studentId') studentId: string , @Body() body: UpdateStudentDto): StudentResponseDto {
        return this.studentService.updateStudent(body, studentId)
    }
}