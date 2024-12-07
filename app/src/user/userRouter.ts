import express from 'express';

import handleAsync from '../utilities/handle-async.function';
import validateUser from './validateUser';
import diContainer from '../utilities/di';
import { UserController } from './controllers/user.controller';

const userRouter = express.Router();
const userController = diContainer.resolve(UserController);

userRouter.post(
    ``,
    validateUser,
    handleAsync(userController.createUser.bind(userController))
);
userRouter.post(
    `/login`,
    handleAsync(userController.login.bind(userController))
);
userRouter.post(
    '/refresh-token',
    handleAsync(userController.refreshToken.bind(userController))
);

export default userRouter;
