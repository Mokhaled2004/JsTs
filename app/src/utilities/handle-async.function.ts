import { NextFunction, Request, Response } from 'express';

export default function handleAsync(callback) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await callback(req, res, next);
        } catch (exc) {
            res.status(exc.status || exc.statusCode || 500).send({
                message: exc.message || 'Internal server error',
            });
        }
    };
}
