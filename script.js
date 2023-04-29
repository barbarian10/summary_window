
fetch('things.json')
    .then(rep => rep.json())

    .then(data => {
        console.log(data);
        let placeholder = document.querySelector("#points");
        let out = "";
        for (let elems of data) {
            out +=
                `
        <article class="elements">
        <img src='${elems.icon}'>
        ${elems.category}
        <span class="resultnumber"><span>${elems.score}</span>/100</span>
        </article>
        `;
        }
        placeholder.innerHTML = out;
    })