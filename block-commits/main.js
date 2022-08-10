const {getInput, setFailed} = require('@actions/core');

const PullRequestChecker = require('./pullRequestChecker');

async function run() {
    try {
        await new PullRequestChecker(
            getInput('repo-token', {required: true}),
            getInput('action-merge'),
            getInput('action-fixup'),
        ).process();
    } catch (error) {
        setFailed(error.message);
    }
}

run();
