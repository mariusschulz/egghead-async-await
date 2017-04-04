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
