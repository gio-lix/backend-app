import { Controller, Get } from '@nestjs/common'

@Controller('students')
export class studentController {

    @Get()
    getStudents() {
        return 'all students'
    }
}