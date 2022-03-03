fetch("https://api.github.com/users/sunnyfur/repos")
    .then(response => response.json())
    .then(rezult => {

        const repos = [...rezult].sort((prev, next) => (new Date(prev.created_at)).getTime() - (new Date(next.created_at)).getTime());
        console.log(repos);
        repos.forEach(repo => getRepo(repo));

    })
    .catch(err => console.log(err));