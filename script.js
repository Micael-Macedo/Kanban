const cards = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".dropzone")
function log(message){
    console.log(message)
}

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
    card.addEventListener('drag', drag)
});

function dragstart(){
    log("Drag start")
    dropzones.forEach((dropzone) => {dropzone.classList.add("highlight")})
    this.classList.add('is-dragging')
}
function dragend(){
    log("Drag end")
    dropzones.forEach((dropzone) => {dropzone.classList.remove("highlight")})
    this.classList.remove('is-dragging')
}
function drag(){
    log("Dragging")
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter',dragenter)
    dropzone.addEventListener('dragleave',dragleave)
    dropzone.addEventListener('dragover',dragover)
    dropzone.addEventListener('drop',drop)
})

function dragenter(){
    log("Enter dropzone")

}
function dragleave(){
    log("Leave dropzone")
}
function dragover(){
    log("Over dropzone")
}
function drop(){
    log("Drop dropzone")
}