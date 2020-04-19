function isString(item: string | number): item is string {
    return typeof item === 'string';
}

//
export type sn = string | number;


export function average(a: string, b: number): string;
export function average(a: number, b: string): string;
export function average(a: number, b: number, c: number): string;
// function average(a: sn, b: sn, c?: number): string {
export function average(...items: sn[]): string {
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
