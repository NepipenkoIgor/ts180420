let anyType: any = null;
anyType.a = 1;
anyType['a'] = 'asda';
anyType = 1;
anyType();


let unkType: unknown = null;
unkType.a = 1;
unkType['a'] = 'asda';
unkType = 1;
unkType();

let objType: object = 1;
objType.a = 1;
objType['a'] = 'asda';
objType = 1;
objType();

let obj: object = {}
Object.create(obj)


let v: void = undefined;

function f(): void {

}
