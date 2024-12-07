import { NextFunction, Request, Response } from 'express';

export default function validateCreateTaskRequestDto(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.body.title == null) {
        res.status(400).send({
            message: 'Title is required',
            status: 'BAD_REQUEST',
        });
        return;
    }
    next();
}
