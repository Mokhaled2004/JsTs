import cors from 'cors';
import express from 'express';

import router from './router';
import diContainer from './utilities/di';
import { TaskController } from './task/controllers/task.controller';
import { UserController } from './user/controllers/user.controller';

const app = express();

// SOLID Principles
// Single Responsibility
// Open for extension closed for modification
// Liskove Substitution --> !Important
// Interface segregation
// Dependency Inversion

// Database + ORMs

diContainer.resolve(TaskController);
diContainer.resolve(UserController);

app.use(express.json());
app.use(cors());

app.use('/public', express.static('public'));
app.use(router);

export default app;
