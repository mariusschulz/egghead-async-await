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
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

showGitHubUser("mariusschulz");
