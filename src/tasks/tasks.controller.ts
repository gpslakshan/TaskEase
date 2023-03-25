import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(
        private tasksService: TasksService,
    ) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

}
