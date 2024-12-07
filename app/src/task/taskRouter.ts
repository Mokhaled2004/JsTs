import express from 'express';

import validateCreateTaskRequest from './validateCreateTaskRequestDto';
import diContainer from '../utilities/di';
import { TaskController } from './controllers/task.controller';

const taskController = diContainer.resolve(TaskController);
console.log({ taskController });
const taskRouter = express.Router();
taskRouter.post(
    '',
    validateCreateTaskRequest,
    taskController.createTask.bind(taskController)
);
taskRouter.put('/:id', taskController.updateTask.bind(taskController));
taskRouter.delete('/:id', taskController.deleteTask.bind(taskController));
taskRouter.get('', taskController.getTasksList.bind(taskController));

export default taskRouter;
