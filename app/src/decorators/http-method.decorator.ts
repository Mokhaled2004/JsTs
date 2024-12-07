const HttpMethod = (method: string) => {
    return (route: string) => {
        return function (classPrototype: any, propertyKey: string) {
            const routes =
                Reflect.getMetadata('endpoints', classPrototype.constructor) ||
                [];

            routes.push({
                method,
                path: route,
                handler: propertyKey,
            });

            Reflect.defineMetadata(
                'endpoints',
                routes,
                classPrototype.constructor
            );
        };
    };
};

export const Get = HttpMethod('get');
export const Post = HttpMethod('post');
export const Put = HttpMethod('put');
export const Delete = HttpMethod('delete');
export const Patch = HttpMethod('patch');
