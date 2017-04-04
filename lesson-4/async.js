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
