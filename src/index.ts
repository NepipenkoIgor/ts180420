import { checkTypeInRuntime } from './decorators';


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
