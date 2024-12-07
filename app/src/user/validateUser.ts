import { Request, Response, NextFunction } from 'express';

export default function validateUser(req: Request, res: Response, next: NextFunction) {
    const userObject = req.body;
    if (userObject.firstName === '') {
        res.status(400).send({ message: 'First Name is required' });
        return;
    }
    if (userObject.lastName === '') {
        res.status(400).send({ message: 'Last Name is required' });
        return;
    }
    if (userObject.email === '') {
        res.status(400).send({ message: 'Email is required' });
        return;
    }
    if (userObject.password === '') {
        res.status(400).send({ message: 'Password is required' });
        return;
    }
    
    next();
}