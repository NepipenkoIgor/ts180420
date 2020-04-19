class Singleton {
    private static _instance: Singleton;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!Singleton._instance) {
            console.log(this.#p);
            Singleton._instance = new Singleton()
        }
        return Singleton._instance;
    }
}

class A {
    readonly #p = 1;
    constructor() {
        console.log(this.#p)
    }

    setP(){
        this.#p = 1;
    }
}

const inst1 =  Singleton.getInstance();
const inst2 =  Singleton.getInstance();
const inst3 =  Singleton.getInstance();
const inst4 =  Singleton.getInstance();
console.log(inst1 === inst3);
const inst5 = new A();
console.log( (inst5 as any).#p )
