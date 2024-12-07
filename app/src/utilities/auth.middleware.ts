import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from './jwt';

export interface ICurrentUser {
    email: string;
}

export default function authorize(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const access_token = req.headers.authorization;

    if (!access_token) {
        console.log('access_token not found');
        res.status(401).send({ message: 'Unauthorized' });
        return;
    }

    let currentUser: unknown = null;
    try {
        currentUser = verifyAccessToken(access_token);
    } catch (exc) {
        console.error(exc);
        res.status(401).send({ message: 'Unauthorized' });
        return;
    }

    req['currentUser'] = currentUser as ICurrentUser;
    next();
}
