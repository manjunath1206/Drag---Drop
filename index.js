let leftbox = document.getElementById("left");
let lists = document.getElementsByClassName("list");
let rightbox = document.getElementById("right");

let draggedItem = null;

for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
        draggedItem = e.target;
    });
}

rightbox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

rightbox.addEventListener("drop", function (e) {
    rightbox.appendChild(draggedItem);
});


leftbox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

leftbox.addEventListener("drop", function (e) {
    leftbox.appendChild(draggedItem);
});
