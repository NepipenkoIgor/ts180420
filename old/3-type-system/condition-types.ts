// Type / Interface/ Function /Class
interface IGeneralInfo {
    phone: number,
    male: boolean
}

interface IUser<GeneralInfo extends IGeneralInfo,  Id = string> {
    id: Id;
    name: string;
    info: GeneralInfo
}

let user: IUser<IGeneralInfo & { age: number }> = {
    id: '1231asdasd1qw',
    name: 'Igor',
    info: {
        male: true,
        phone: 123123123,
        age: 34
    }
}

let admin: IUser<IGeneralInfo & { subjects: string[] }, number> = {
    id: 1,
    name: 'Eugen',
    info: {
        male: true,
        phone: 123123123,
        subjects: ['ts', 'js']
    }
}
// T extends T1 ? T2: T3

// type nonUndefined<T> = T extends undefined ? never :  T;
//
// type snub = undefined | number ;
//
// let a: nonUndefined<snub> = undefined;
//
//
// const arr: [() => boolean | null, () => null | number] = [() => true, () => 2];
//
// type FirstFnReturnedType<T> = T extends [infer U, ...unknown[]]
//       ? U extends (...args: unknown[]) => infer R
//             ? R
//             : never
//       : never
//
// const a: FirstFnReturnedType<typeof arr> = 'sd';
//
// let a: Exclude<any, any>

function fn(_a: number, _b: string, _c: bigint): boolean {
    return true;
}
type A = (_a: number, _b: string, _c: bigint) => boolean;

type NoNFunction<T> = T extends Function ? never : T
type FunctionParamsAndReturnType<T> = T extends (...args: infer Args) => infer R // Args => [number,string,bigint ]
    ? NoNFunction<Args[keyof Args]>| R
    : never;

const c1: FunctionParamsAndReturnType<typeof fn> = 1;
const c2: FunctionParamsAndReturnType<typeof fn> = true;
const c3: FunctionParamsAndReturnType<typeof fn> = 'str';
const c4: FunctionParamsAndReturnType<typeof fn> = Symbol('key');
