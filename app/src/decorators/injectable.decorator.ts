import diContainer from '../utilities/di';

export default function Injectable() {
    return function (Class: any) {
        const deps = Reflect.getMetadata('design:paramtypes', Class);
        diContainer.register(Class, deps);
    };
}
