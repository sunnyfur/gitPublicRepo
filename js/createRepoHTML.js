class Repo {
    static _numAll = 0;
    constructor(dateCreate, name, description, url, languages) {
        this.dateCreate = dateCreate;
        this.name = name;
        this.description = description;
        this.url = url;
        this.languages = languages;
        this.num = ++Repo._numAll;
    }
    RepoPrint() {
        const row = document.createElement("tr");
        const num = document.createElement("th");
        num.innerHTML = this.num;
        row.appendChild(num);

        let col = document.createElement("td");
        // TODO format date
        col.innerHTML = this.dateCreate;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerHTML = `<a href=${this.url}>${this.name}</a>`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerHTML = this.description;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerHTML = this.languages;
        row.appendChild(col);



        document.querySelector("#idBodyTable").appendChild(row);

    }



}