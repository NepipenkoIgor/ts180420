import 'reflect-metadata';

export function checkTypeInRuntime(target: any, key: string): void {
    const {name: type} = Reflect.getMetadata('design:type', target, key);
    let val: any;
    Object.defineProperty(target, key, {
        get(): any {
            return val;
        },
        set(newValue: any): void {
            const realType = typeof newValue;
            if (realType !== type.toLowerCase()) {
                throw new Error(`type of ${key} is not ${type}. You tried to set ${realType} `)
            }
            val = newValue;
        }
    })
    console.log(`${key} type: ${type}`)
}


class Account {
    @checkTypeInRuntime
    public firstName!: number;
}

const user = new Account();
console.log(user);

(user.firstName as any)= 'Ihor';
setTimeout(() => {
    console.log('Get =>', user.firstName);
    (user.firstName as any) = 1231231;
}, 5000)
