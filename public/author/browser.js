
console.log("browser js ishga tushdi");

function itemTemplate(item) {
    return `
    <li class="reja-item">

                    <span class="reja-text">
                        ${item.reja}
                    </span>

                    <button 
                        data-id="${item.id}"
                        class="btn btn-secondary btn-sm me-1">
                        O'zgartirish
                    </button>

                    <button
                        data-id="${item.id}"
                        class="btn btn-danger btn-sm">
                        O'chirish
                    </button>

    </li>`;
}


let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();


    axios
    .post("/create-item", { reja: createField.value })
    .then( response => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Please try again!")
    });
});