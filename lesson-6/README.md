# Await Multiple Promises Concurrently with Promise.all()

[[watch the lesson]](https://egghead.io/lessons/javascript-await-multiple-promises-concurrently-with-promise-all)

Oftentimes, you want to kick off multiple promises in parallel rather than awaiting them in sequence. This lesson explains how that can be achieved in a readable manner using `await`, the `Promise.all()` method, and destructuring assignment.

```
cd lesson-6
node async.js
```

## Lesson Code

```js
const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

async function fetchUserAndRepos(handle) {
    const [user, repos] = await Promise.all([
        fetchFromGitHub(`/users/${handle}`),
        fetchFromGitHub(`/users/${handle}/repos`)
    ]);

    console.log(user.name);
    console.log(`${repos.length} repos`);
}

fetchUserAndRepos("mariusschulz");
```
