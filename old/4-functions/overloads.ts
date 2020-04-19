function isString(item: string | number): item is string {
    return typeof item === 'string';
}

//
type sn = string | number;


function average(a: string, b: number): string;
function average(a: number, b: string): string;
function average(a: number, b: number, c: number): string;
// function average(a: sn, b: sn, c?: number): string {
function average(...items: sn[]): string {
    let total: number = 0;
    for (const item of items) {
        if (isString(item)) {
            total += parseInt(item, 10);
            continue;
        }
        total += item;
    }
    const avg: number = total / items.length;
    return `Avg is ${avg}`;
}


average(1,'s');
average('1',1);
average(1, 1, 2);

average(1);
average(1, 1);
average(1, '1', 4);
average(1, 1, '4', 1, 2, 3, 4);
average(1, 1, 2, 3, 4);
average('1', '2m', 3);

let avg1: number = average(1);
