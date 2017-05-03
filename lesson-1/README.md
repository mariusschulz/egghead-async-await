# Write an Asynchronous Function with async/await

[[watch the lesson]](https://egghead.io/lessons/javascript-write-an-asynchronous-function-with-async-await)

This lesson introduces the ES2017 `async` and `await` keywords. It shows how to write a short asynchronous function that makes an HTTP request and parses the response.

```
cd lesson-1
node async.js
```

## Lesson Code

```js
const fetch = require("node-fetch");

async function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    const user = await response.json();
    console.log(user.name);
    console.log(user.location);
}

showGitHubUser("mariusschulz");
```
