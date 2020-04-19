interface IBasePoint {
    x: number;

    ngOnInit(): this;
}

class BasePoint implements IBasePoint {

    #d: number = 1;

    public constructor(
        public readonly x: number,
        protected readonly y: number,
        private z: number,
    ) {
    }

    public ngOnInit(): this {
        this.z = this.#d;
        return this
    }

}

const p = new BasePoint(1, 2, 3);
const a = p.z;


class Point extends BasePoint {
    public constructor(x: number, y: number, z: number) {
        super(x, y, z);
    }

    public ngOnInit(): this {
        // do something
        return super.ngOnInit();
    }

}

const p1 = new Point(1, 2, 3);
