const getLang = (strConnectionApi) => {
    // https: //api.github.com/repos/sunnyfur/GallerySimple/languages
    let res = "";
    fetch(strConnectionApi)
        .then(response1 => response1.json())
        .then(rezult1 => {
            // console.log(rezult);
            const sum = Object.values(rezult1).reduce((a, b) => a + b, 0);
            for (elem in rezult1) {
                rezult1[elem] = Math.round(rezult1[elem] * 100 / sum);
            }
            // console.log(rezult1);
            console.log(Object.entries(rezult1).map(([key, val]) => key + ": " + val + "%").join(", "));
            res = Object.entries(rezult1).map(([key, val]) => key + ": " + val + "%").join(", ");
        })
        .catch(err => console.log(err));
    return res;

}