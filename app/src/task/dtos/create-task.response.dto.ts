import { Task } from '../entities/task.entity';

export class CreateTaskResponseDto {
    task: Task;
    message: string;
    status: string;

    static factory(data: Task): CreateTaskResponseDto {
        const result = new CreateTaskResponseDto();

        result.task = data;
        result.message = 'Task created';
        result.status = 'OK';

        return result;
    }
}
