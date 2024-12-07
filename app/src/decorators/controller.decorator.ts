import router from '../router';
import diContainer from '../utilities/di';

export default function Controller(routePrefix: string) {
    return function (Class: any) {
        const deps = Reflect.getMetadata('design:paramtypes', Class);
        const endpoints = Reflect.getMetadata('endpoints', Class);
        const guards = Reflect.getMetadata('guards', Class);
        diContainer.register(Class, deps);

        const instance = diContainer.resolve(Class);

        // (variable || []) --> (variable == null ? [] : variable)
        for (const endpoint of endpoints) {
            const guardsObject = (guards || []).find(
                ({ methodName }) => endpoint.handler === methodName
            );
            const guardsHandlers =
                guardsObject != null ? guardsObject.guards : [];

            router[endpoint.method](
                `${routePrefix}${endpoint.path}`,
                ...guardsHandlers,
                instance[endpoint.handler].bind(instance)
            );
        }
    };
}
