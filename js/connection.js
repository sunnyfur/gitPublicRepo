fetch("https://api.github.com/users/sunnyfur/repos")
    .then(response => response.json())
    .then(rezult => {

        const repos = [...rezult].sort((prev, next) => (new Date(prev.created_at)).getTime() - (new Date(next.created_at)).getTime());
        console.log(repos);
        for (repo of repos) {
            const lang = getLang(repo.languages_url);
            console.log(lang);
            const repoView = new Repo(repo.created_at, repo.name, repo.description, repo.svn_url, lang);
            repoView.RepoPrint();
        };


    })
    .catch(err => console.log(err));