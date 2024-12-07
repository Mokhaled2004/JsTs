import { Request, Response } from 'express';

import uniqueId from '../../utilities/uniqueId';
import { Controller, Delete, Get, Guard, Post, Put } from '../../decorators';
import { TaskService } from '../services/task.service';
import {
    CreateTaskResponseDto,
    DeleteTaskByIdResponseDto,
    GetTaskListResponseDto,
} from '../dtos';
import authorize from '../../utilities/auth.middleware';

const log = (req: Request, res, next) => {
    console.log(req.originalUrl);
    next();
};

@Controller('/task')
export class TaskController {
    tasksCount = 100;

    constructor(private taskService: TaskService) {}

    @Post('/')
    createTask(req: Request, res: Response) {
        const task = req.body;

        const createdTask = this.taskService.insert(
            { title: task.title, user: req['currentUser'].email },
            req['currentUser']
        );

        res.send(CreateTaskResponseDto.factory(createdTask));
    }

    @Put('/:id')
    updateTask(req: Request, res: Response): void {
        try {
            const { body, params } = req;
            const { id } = params;
            const { newTitle } = body;

            const updatedTask = this.taskService.updateById(
                id,
                { title: newTitle },
                req['currentUser']
            );
            res.status(200).send({
                message: 'Task updated successfully',
                data: updatedTask,
            });
        } catch (exc) {
            if (exc.message === 'Task not found') {
                res.status(404).send({ message: 'Task not found' });
                return;
            }
            if (exc.message === 'Task does not belong to you') {
                res.status(409).send({
                    message: 'Task does not belong to you',
                });
                return;
            }
            res.status(500).send({
                message: 'Internal server error',
                error: exc,
            });
        }
    }

    @Guard(authorize, log)
    @Get('/')
    getTasksList(req: Request, res: Response) {
        // /task?title=task1
        const tasks = this.taskService.search(req.query, req['currentUser']);

        res.status(200).send(
            tasks.map((task) => GetTaskListResponseDto.fromTask(task))
        );
    }

    @Delete('/:id')
    deleteTask(req: Request, res: Response) {
        try {
            const taskId = req.params.id;
            const taskToDelete = this.taskService.deleteById(
                taskId,
                req['currentUser']
            );
            res.status(200).send(DeleteTaskByIdResponseDto.fromTaskId(taskId));
        } catch (exc) {
            if (exc.message === 'Task not found') {
                res.status(404).send({ message: 'Task not found' });
                return;
            }
            if (exc.message === 'Task does not belong to you') {
                res.status(409).send({
                    message: 'Task does not belong to you',
                });
                return;
            }
            res.status(500).send({
                message: 'Internal server error',
                error: exc,
            });
        }
    }
}
