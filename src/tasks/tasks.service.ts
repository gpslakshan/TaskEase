import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) { }

    async getAllTasks(): Promise<Task[]> {
        return await this.tasksRepository.find();
    }

    async getTaskById(id: string): Promise<Task> {
        const found = await this.tasksRepository.findOne({ where: { id: id } });

        if (!found) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }

        return found;
    }


}
