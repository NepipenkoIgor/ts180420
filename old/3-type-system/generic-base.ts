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


