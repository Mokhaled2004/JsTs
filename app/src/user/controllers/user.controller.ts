import bcryptjs from 'bcryptjs';
import { Request, Response } from 'express';

import Controller from '../../decorators/controller.decorator';
import { IUser, UserDbService } from '../services/user-db.service';
import {
    getAccessToken,
    getRefreshToken,
    verifyRefreshToken,
} from '../../utilities/jwt';
import { RefreshTokenResponseDto } from '../dtos/refresh-token.response.dto';
import { Post } from '../../decorators';
import User from '../entities/user.entity';

interface ILoginResponseDto {
    access_token: string;
    refresh_token: string;
}

function loginResponseDto(
    access_token: string,
    refresh_token: string
): ILoginResponseDto {
    return {
        access_token,
        refresh_token,
    };
}

@Controller('/user')
export class UserController {
    constructor(private userDbService: UserDbService) {}

    @Post('/login') // POST http://localhost:3000/user/login
    async login(req: Request, res: Response): Promise<void> {
        const credentials = req.body;
        const user = await User.findOne({
            where: { email: credentials.email },
        });
        // const user = this.userDbService.findByEmail(credentials.email);
        if (!user) {
            res.status(401).send({ message: 'Wrong email or password' });
            return;
        }

        const isValidPassword = await bcryptjs.compare(
            credentials.password,
            user.toJSON().password
        );
        if (!isValidPassword) {
            res.status(401).send({ message: 'Wrong email or password' });
            return;
        }

        // Identity (Card)
        // const identity = encrypt(JSON.stringify({ email: user.email }));
        const access_token = getAccessToken({ email: user.toJSON().email });
        const refresh_token = getRefreshToken({ email: user.toJSON().email });
        res.status(200).send(loginResponseDto(access_token, refresh_token));
    }

    @Post('/') // POST http://localhost:3000/user
    async createUser(req: Request, res: Response): Promise<void> {
        const password = req.body.password;
        const hashedPassword = await bcryptjs.hash(password, 5);
        const userObject = {
            ...req.body,
            password: hashedPassword,
        };
        const user = await User.findOne({ where: { email: userObject.email } });
        // const user = this.userDbService.findByEmail(userObject.email);
        if (user) {
            // 409 Conflict
            res.status(409).send({ message: 'User already exists' });
            return;
        }

        await User.create(userObject);
        // this.userDbService.insert(userObject);

        // 201 Created
        res.status(201).send({ message: 'User created successfully' });
    }

    @Post('/refresh-token') // POST http://localhost:3000/user/refresh-token
    refreshToken(req: Request, res: Response) {
        const { refresh_token } = req.body;

        let user: Pick<IUser, 'email'>;
        try {
            user = verifyRefreshToken(refresh_token) as Pick<IUser, 'email'>;
        } catch (exc) {
            console.error('refresh token verification error', exc);
            return res.status(401).send({ message: 'Unauthorized' });
        }

        const access_token = getAccessToken({ email: user.email });
        const new_refresh_token = getRefreshToken({ email: user.email });
        res.status(200).send(
            RefreshTokenResponseDto.factory({
                access_token,
                refresh_token: new_refresh_token,
            })
        );
    }
}
