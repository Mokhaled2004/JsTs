import fs from 'fs';
import { randomUUID } from 'crypto';

import { Injectable } from '../../decorators';
import { Task } from '../entities/task.entity';

// ORM --> Object Relational Mapping
// JSON Database
// SQL Database
// NoSQL Database
// 1. Establish connection: new ORM({ database: 'mongodb', uri: 'mongodb://localhost:27017' });
// 2. Define Models/Entities Schemas: ORM.define('Task', { title: String, user: String });
// ORM.TaskRepository.findAll()
// ORM.TaskRepository.deleteOne()
// ORM.TaskRepository.deleteMany()
// ORM.TaskRepository.create()
// ORM.TaskRepository.insertMany()

@Injectable()
export class TaskRepository {
    private TASKS: Task[] = [];
    private fileName = 'taskStorage.json';
    private absolutePath = `${__dirname}/${this.fileName}`;

    constructor() {
        this.TASKS = this.loadData();
    }

    private loadData() {
        const isFileExists = fs.existsSync(this.absolutePath);
        if (!isFileExists) {
            fs.writeFileSync(this.absolutePath, '[]');
        }

        const fileContent = fs.readFileSync(this.absolutePath, {
            encoding: 'utf-8',
        });
        return JSON.parse(fileContent || '[]');
    }

    private syncData(): void {
        fs.writeFileSync(
            this.absolutePath,
            JSON.stringify(this.TASKS, null, 2)
        );
    }

    insert(task: Partial<Task>): Task {
        const objectToCreate = {
            id: randomUUID(),
            title: task.title,
            user: task.user,
        };
        this.TASKS.push(objectToCreate);
        this.syncData();
        return objectToCreate;
    }

    findById(id: string): Task | undefined {
        return this.TASKS.find((task) => task.id === id);
    }

    private matchCondition(whereConditions: Partial<Task>) {
        return (task: Task): boolean => {
            let result = true;
            for (const key in whereConditions) {
                if (task[key] !== whereConditions[key]) {
                    result = false;
                    break;
                }
            }

            return result;
        };
    }

    findOne(whereConditions: Partial<Task>): Task | undefined {
        return this.TASKS.find(this.matchCondition(whereConditions));
    }

    findAll(whereConditions: Partial<Task>): Task[] {
        return this.TASKS.filter(this.matchCondition(whereConditions));
    }

    updateById(id: string, newData: Pick<Task, 'title'>): Task | null {
        const task = this.findById(id);
        if (!task) {
            return null;
        }

        task.title = newData.title;
        this.syncData();

        return task;
    }

    deleteById(id: string): boolean | null {
        const taskIndex = this.TASKS.findIndex((task) => task.id === id);
        if (taskIndex === -1) {
            return null;
        }

        this.TASKS.splice(taskIndex, 1);
        this.syncData();

        return true;
    }
}
