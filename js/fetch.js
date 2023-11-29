"use strict";

    function getLastCommit(username, repository) {
        const lastCommitEvent = fetch(`https://api.github.com/repos/${username}/${repository}` , {headers: {'Authorization': `GH_KEY ${GH_KEY}`}}).then(response => response.json()).then(data => console.log(data.pushed_at))
        return lastCommitEvent
    }

