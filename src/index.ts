import { Range, Validate } from './decorators';

export class Calculator {
    @Validate
    public updatePercentage(
        @Range(20, 70)  oldValue: number,
        @Range(40, 50)  newValue: number
    ) {
        console.log(oldValue, newValue)
    }
}

const calc = new Calculator();

calc.updatePercentage(40, 45);

setTimeout(() => {
    calc.updatePercentage(45, 80);
}, 5000)
