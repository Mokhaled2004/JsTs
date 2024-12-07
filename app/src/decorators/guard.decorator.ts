import { NextFunction, Request, Response } from 'express';

const Guard = (
    ...guardsHandlers: Array<
        (req: Request, res: Response, next: NextFunction) => void
    >
) => {
    return function (classPrototype: any, propertyKey: string) {
        const guards =
            Reflect.getMetadata('guards', classPrototype.constructor) || [];

        guards.push({
            guards: guardsHandlers,
            methodName: propertyKey,
        });

        Reflect.defineMetadata('guards', guards, classPrototype.constructor);
    };
};

export default Guard;
