type Constructable = new (...args: any[]) => {}

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamped = new Date();
    }
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass, tags: string[]) {
    return class extends BC {
        public tags = tags;
    }
}

class Subject {
    constructor(
        public readonly teacher: string
    ) {
    }
}


class User extends Timestamped(Tagged(Subject, ['ts', 'js'])) {

}

const u = new User('Igor Nepipenko');


class Table extends Unsubcriber{}
