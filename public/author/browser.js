console.log("browser js ishga tushdi");

function itemTemplate(item) {
    return `
    <li class="reja-item">

        <span class="reja-text">
            ${item.reja}
        </span>

        <button 
            data-id="${item._id}"
            class="edit-me btn btn-secondary btn-sm me-1">
            O'zgartirish
        </button>

        <button
            data-id="${item._id}"
            class="delete-me btn btn-danger btn-sm">
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

document.addEventListener("click", function(e) {
    //delete operations
    console.log(e.target);
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Aniq o`chirmoqchimisiz")){
            axios
            .post("/delete-item", {id: e.target.getAttribute("data-id") })
            .then((response) =>{
                console.log(response.data);
                e.target.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qayta harakat qilib ko`ring");
            });   
        }
    }
    if(e.target.classList.contains("edit-me")){
        alert("siz edit buttonni bosdingiz");
    } 
});