# Handle Errors in Asynchronous Functions

[[watch the lesson]](https://egghead.io/lessons/javascript-handle-errors-in-asynchronous-functions)

This lesson shows how regular control flow statements such as `try`/`catch` blocks can be used to properly handle errors in asynchronous functions. Oftentimes, the resulting code is easier to read than complex promise chains with `.catch()` methods.

```
cd lesson-4
node async.js
```

## Lesson Code

```js
const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    const json = await response.json();

    if (response.status !== 200)
        throw Error(json.message);

    return json;
}

async function showGitHubUser(handle) {
    try {
        const user = await fetchFromGitHub(`/users/${handle}`);
        console.log(user.name);
        console.log(user.location);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

showGitHubUser("mariusschulz");
```
