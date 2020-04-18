function sleep(ms: number) {
    return new Promise<void>((resolve => {
        setTimeout(resolve, ms)
    }))
}


async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(1500);
        yield item;
    }
}

async function speakLikeSloth(items: string[]) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}


speakLikeSloth(['TS', 'is', 'Awesome', '!','!'])
