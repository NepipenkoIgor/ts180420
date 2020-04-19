function getFullName(this: { name: string, surname: string }, subject: string) {
    return `${this.name} ${this.surname} ${subject}`
}


let account = {
    // name: 'Ihor',
    // surname: 'Nepipenko',
    getFullName
}
account.getFullName('typescript');

type CB = (this: void, e: Event) => void

class MyElement {
    addClickListener(_onClick: CB): void {

    }
}

class Handler {
    subject = 'ts';

    onClickBad( _e: Event) {
        this.subject = '_e.message'
    }
}

const el = new MyElement();
const handler = new Handler();
el.addClickListener(handler.onClickBad)


/**This with extends**/
function fn<T extends { name: string, age: number }>(this: T, a: keyof T): void


let account = {
    name: 'Ihor',
    age: 33,
    surname: 'Nepipenko',
    getFullName: fn
}
account.getFullName('surname1');
