// let digit: 1 | true;
//
// digit = 1.2

// enum ANIMATION {
//     'EASE_IN' = 'ease-in',
//     'EASE_OUT' = 'ease-oyt',
// }
//
// enum Size {
//     S = 42,
//     M = 44,
//     XL = 52
// }
//
// interface IAnimation {
//     delay: number;
//     easing: ANIMATION;
// }
//
// function animation(_options: IAnimation) {
//
// }

// animation({delay: 1000, easing: ANIMATION.EASE_IN})

interface IFact {
    factId: number;
    useFrom: string;
    value: string;
}

const dataList: { action: string, data: IFact }[] = [];

const uniqueValue = (): keyof IFact => { //  'factId' | 'useFrom' | 'value'
    return 'factId';
}


dataList.map((item) => {
    if (item.data[uniqueValue()]) {

    }
    return item
})


enum Size {
    S = 42,
    M = 44,
    XL = 52
}

let size: keyof  typeof Size = 'asd'
