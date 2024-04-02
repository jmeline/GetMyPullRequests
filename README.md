# GetMyPullRequests
Uses github api to get all pull requests for an individual user across all repos


## Getting a token
1) Head on to tokens: https://github.com/settings/tokens
2) Create a classic token with permissions to repos
3) Authorize token to be used with your company's github account

## Usage
1) Clone the repo. No need to install any dependencies. Use a node version that supports built-in fetch (v18+)
2) Add github token to your env or paste it in your script: `export GITHUB_TOKEN=your_token`
3) `node index.js`

