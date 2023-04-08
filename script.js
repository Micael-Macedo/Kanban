const columns = document.querySelectorAll(".column");
document.addEventListener('dragstart', (e) =>{
    e.target.classList.add("dragging");
})
document.addEventListener('dragend', (e) =>{
    e.target.classList.remove("dragging");
})
columns.forEach((column) =>{
    column.addEventListener("dragover", (e) =>{
        const dragging =  document.querySelector(".dragging");
        const applyAfter = getNewPosition(column, e.clientY);

        if(applyAfter){
            applyAfter.insertAdjacentElement("afterend", dragging);
        }else{
            column.prepend(dragging)
        }
    })
})

function getNewPosition(column, posY){
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect()
        const boxCenterY = box.y + box.height / 2;

        if(posY >= boxCenterY) result  =refer_card;
        
    }

    return result;
}