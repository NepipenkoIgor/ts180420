export function savePersistence(target: any, key: string): void {
    // console.log(target, key)
    let _val = target[key];
    const localStorageKey = `${target.constructor.name}_${key}`;
    const getter = () => {
        // console.log(`Get ${key} => ${_val}`);
        return localStorage.getItem(localStorageKey) || _val;
    }

    const setter = (newValue: string) => {
        // console.log(`Set ${key} => ${newValue}`);
        _val = newValue;
        localStorage.setItem(localStorageKey, newValue);
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
}
