import { ICurrentUser } from '../../utilities/auth.middleware';
import { Injectable } from '../../decorators';
import { Task } from '../entities/task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor(private TaskRepository: TaskRepository) {}

    insert(task: Partial<Task>, currentUser: ICurrentUser): Task {
        const existingTask = this.TaskRepository.findOne({
            user: currentUser.email,
            title: task.title,
        });
        if (existingTask) {
            throw new Error('Task already exists');
        }

        return this.TaskRepository.insert(task);
    }

    updateById(
        id: string,
        task: Partial<Task>,
        currentUser: ICurrentUser
    ): Task {
        const existingTask = this.TaskRepository.findById(id);
        if (!existingTask) {
            throw new Error('Task not found');
        }

        if (existingTask.user !== currentUser.email) {
            throw new Error('Task does not belong to you');
        }

        return this.TaskRepository.updateById(id, { title: task.title });
    }

    search(searchConditions, currentUser: ICurrentUser) {
        return this.TaskRepository.findAll({
            ...searchConditions,
            user: currentUser.email,
        });
    }

    deleteById(id: string, currentUser: ICurrentUser) {
        const existingTask = this.TaskRepository.findById(id);
        if (!existingTask) {
            throw new Error('Task not found');
        }

        if (existingTask.user !== currentUser.email) {
            throw new Error('Task does not belong to you');
        }

        return this.TaskRepository.deleteById(id);
    }
}
