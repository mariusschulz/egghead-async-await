# Iterate Asynchronously with the for-await-of Loop

[[watch the lesson]](https://egghead.io/lessons/javascript-iterate-asynchronously-with-the-for-await-of-loop)

We finish the course by looking at asynchronous iterators, a generic data access protocol for asynchronous data sources. This asynchronous iteration scheme is built on top of a new `for`-`await`-`of` loop and async generator functions.

```
cd lesson-8
npm run build:8
node dist/async.js
```

## Lesson Code

```js
Symbol.asyncIterator = Symbol.asyncIterator || Symbol("asyncIterator");

const delay = (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});

async function* someGenerator() {
    await delay(1000);
    yield 1;
    await delay(1000);
    yield 2;
    await delay(1000);
    yield 3;
}

async function main() {
    for await (const value of someGenerator()) {
        console.log(value);
    }
}

main();
```
