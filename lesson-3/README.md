# Convert Any Function into an Asynchronous Function

[[watch the lesson]](https://egghead.io/lessons/javascript-convert-any-function-into-an-asynchronous-function)

Any function can be made asynchronous, including function expressions, arrow functions, and methods. This lesson shows the syntax for each of the function types.

```
cd lesson-3
node async.js
```

## Lesson Code

```js
const fetch = require("node-fetch");

class GitHubApiClient {
    async fetchUser(handle) {
        const url = `https://api.github.com/users/${handle}`;
        const response = await fetch(url);
        return await response.json();
    }
}

(async () => {
    const client = new GitHubApiClient();
    const user = await client.fetchUser("mariusschulz");
    console.log(user.name);
    console.log(user.location);
})();
```
