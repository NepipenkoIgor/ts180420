import 'reflect-metadata'

const RANGE_KEY: unique symbol = Symbol('RANGE_KEY');

export function Validate(target: object, key: string, desc: PropertyDescriptor): void {
    const originalFn = desc.value;
    desc.value = (...args: unknown[]) => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        for (const [paramIndex, range] of Object.entries(existingRange)) {
            const [min, max] = range as [number, number];
            const paramValue = args[Number(paramIndex)];
            if (Number(paramValue) < min || Number(paramValue) > max) {
                throw new Error(`Error in ${target.constructor.name} instance.
            Parameter for method ${key} on position ${paramIndex} out of range ${[min, max]}    
             Current value ${paramValue}
                `)
            }
        }
        return originalFn(...args)
    }
}

export function Range(min: number, max: number): ParameterDecorator {
    return (target: object, key: string | symbol, index: number) => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) || {}
        existingRange[index] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key)
    };
}
