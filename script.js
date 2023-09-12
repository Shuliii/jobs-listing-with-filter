const cancels = document.querySelectorAll(".cancel");
const adds = document.querySelectorAll(".add");
const filterList = document.querySelector(".filterlist");

filterList.addEventListener("click" , (e) => {
    console.log(e.target)
    let parent = e.target.parentNode

    if (parent.classList.contains("cancel")) {
        const toBeRemovedLi = e.target.parentNode.parentNode
        toBeRemovedLi.remove();
    }
})

adds.forEach((add) => {
    add.addEventListener("click", (e) => {
        let content = e.target.innerHTML;
        let img = new Image();
        img.src = "./img/icon-remove.svg";
        let button = document.createElement("button");
        button.classList.add('cancel');
        button.appendChild(img);


        let li = document.createElement("li");
        let p = document.createElement("p");
        p.innerHTML = content;

        li.appendChild(p)
        li.appendChild(button)

        filterList.appendChild(li)
    })
})


