# Await Multiple Promises Sequentially or Concurrently

[[watch the lesson]](https://egghead.io/lessons/javascript-await-multiple-promises-sequentially-or-concurrently)

You can await multiple promises either sequentially or concurrently, depending on where you put the `await` operators. This lesson shows both approaches and compares the performance characteristics.

```
cd lesson-5
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

async function showUserAndRepos(handle) {
    const userPromise = fetchFromGitHub(`/users/${handle}`);
    const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);

    const user = await userPromise;
    const repos = await reposPromise;

    console.log(user.name);
    console.log(`${repos.length} repos`);
}

showUserAndRepos("mariusschulz");
```
