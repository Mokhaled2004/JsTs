import { Task } from '../entities/task.entity';

export class GetTaskListResponseDto {
    id: string;
    title: string;

    static fromTask(data: Task): GetTaskListResponseDto {
        const result = new GetTaskListResponseDto();

        result.id = data.id;
        result.title = data.title;

        return result;
    }
}
