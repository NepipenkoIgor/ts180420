function sleep(ms: number) {
    return new Promise<void>((resolve => {
        setTimeout(resolve, ms)
    }))
}
function a(){
    throw new Error('Custom error')
}
a();

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(1500);
        yield item;
    }
}

export async function speakLikeSloth4(items: string[]) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}



