# Use the await Operator with Any Thenable

The `await` operator is not restricted to ES2015 promises. It can be used to await any *thenable* — that is, any object with a `.then()` method. This lesson illustrates how to await promises that have been created using a promise library.

```
cd lesson-7
node async.js
```

## Lesson Code

```js
const Bluebird = require("bluebird");

async function main() {
    console.log("Working ...");
    await Bluebird.delay(2000);
    console.log("Done.");
}

main();
```
