function addElementsByArray(arr, id, cssClass){

    localStorage.setItem("selected", "");
    var tableBody = document.createElement('tbody');
    arr.forEach(function(name) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.className = cssClass;
        cell.addEventListener("click", function() {
            rezeptAnzeigen(name);
        });
        cell.appendChild(document.createTextNode(name));
        row.appendChild(cell);
        tableBody.appendChild(row);
    });
    document.getElementById(id).appendChild(tableBody);

    function rezeptAnzeigen(key){
        console.log(key);
        localStorage.setItem("selected", key);
        window.location = 'rezept.html';
    };
}

function rezeptLöschen(name){
    var rezepte = JSON.parse(localStorage.getItem("Keys") || "[]");
    if(rezepte.indexOf(name) == -1)
        return;
    console.log("Es wurde wirklich: " + name + " gelöscht");
    rezepte.splice(rezepte.indexOf(name), 1);
    localStorage.setItem("Keys", JSON.stringify(rezepte));
    localStorage.removeItem(name);
    console.log(JSON.stringify(rezepte) + "nach der löschung");
}