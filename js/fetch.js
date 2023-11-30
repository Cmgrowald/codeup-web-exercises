"use strict";

function getLastCommit(username, key) {
    return fetch(`https://api.github.com/users/${username}/events/public`, { headers: { 'Authorization': `token ${key}` } })
        .then(response => response.json())
        .then(data => {
            const lastCommit = data.find(event => event.type === 'PushEvent');
            return lastCommit ? lastCommit.created_at : 'No commit found.';
        })

}

getLastCommit('cmgrowald', GH_KEY)
    .then(lastCommitDate => {
        console.log('Last commit date:', lastCommitDate);
    });