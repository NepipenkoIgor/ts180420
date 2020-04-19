export function debounce(ms: number) {
    let timeId: number | null;
    return (_target: object, _key: string, descriptor: PropertyDescriptor) => {
        const originalFn = descriptor.value;
        return {
            ...descriptor,
            value: (...args: unknown[]) => {
                if (timeId) {
                    clearTimeout(timeId);
                }
                timeId = setTimeout(() => {
                    originalFn(...args)
                }, ms)
            }
        }
    };
}


export function logValue(_target: object, _key: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    return {
        ...descriptor,
        value: (e: Event) => {
            const inputRef = e.target as HTMLInputElement;
            console.log(inputRef.value);
            originalFn(e);
        }
    }
}

export function sentToSentry(_target: object, _key: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    return {
        ...descriptor,
        value: (e: Event) => {
            try {
                originalFn(e);
            } catch (err) {
                // http to sentry
                console.log(err);
            }
        }
    }
}

class Search {
    constructor(
        private readonly inputEl: HTMLInputElement
    ) {
        this.inputEl.addEventListener('input', this.onSearch.bind(this))
    }

    @debounce(300)
    @logValue
    @sentToSentry
    public onSearch(_e: Event) {
        console.log(('s' as any)())
    }
}

const el = document.querySelector('input') as HTMLInputElement;
const search = new Search(el);
console.log(search);
