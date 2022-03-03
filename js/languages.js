const getRepo = (repo) => {
    fetch(repo.languages_url)
        .then(response1 => response1.json())
        .then(rezult1 => {
            const sum = Object.values(rezult1).reduce((a, b) => a + b, 0);


            let langs = (Object.entries(rezult1)
                    .map(([key, val]) => key + ": " + Math.round(val * 100 / sum) + "%"))
                .join(", ");
            const repoView = new Repo(repo.created_at, repo.name, repo.description, repo.svn_url, langs);
            repoView.RepoPrint();
        })
        .catch(err => console.log(err));


}