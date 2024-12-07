export class DeleteTaskByIdResponseDto {
    message: string;
    taskId: string;

    static fromTaskId(taskId: string): DeleteTaskByIdResponseDto {
        const result = new DeleteTaskByIdResponseDto();

        result.message = 'Task deleted successfully';
        result.taskId = taskId;

        return result;
    }
}