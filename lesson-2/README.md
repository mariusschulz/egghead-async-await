# Call an Asynchronous Function in a Promise Chain

[[watch the lesson]](https://egghead.io/lessons/javascript-call-an-asynchronous-function-in-a-promise-chain)

In this lesson, we’re exploring how asynchronous functions can be seamlessly called within a promise chain — just like any other function that returns a promise.

```
cd lesson-2
node async.js
```

## Lesson Code

```js
const fetch = require("node-fetch");

async function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
}

showGitHubUser("mariusschulz")
    .then(user => {
        console.log(user.name);
        console.log(user.location);
    });
```
