const cancels = document.querySelectorAll(".cancel");
const adds = document.querySelectorAll(".add");
const filterList = document.querySelector(".filterlist");
const cards = document.querySelectorAll('.card');
const clear = document.querySelector(".clear");
const filterContainer = document.querySelector(".filter");
const main = document.querySelector("main");

let filterArray = [];


clear.addEventListener('click', (e) => {
    filterArray = [];
    doFiltering();
    hideEl(filterContainer);
    filterList.innerHTML = '';
    main.classList.contains("margin") && main.classList.remove("margin")
})

filterList.addEventListener("click" , (e) => {
    let parent = e.target.parentNode

    if (parent.classList.contains("cancel")) {
        let toBeRemovedLi = e.target.parentNode.parentNode
        let toBeRemovedFilter = toBeRemovedLi.querySelector("p").innerHTML
        toBeRemovedLi.remove();
        filterArray = filterArray.filter(e => e!== toBeRemovedFilter);
        doFiltering();
    }

    if (filterList.innerHTML == '') {
        hideEl(filterContainer)
        main.classList.contains("margin") && main.classList.remove("margin")
    }
})

adds.forEach((add) => {
    add.addEventListener("click", (e) => {
        let filter = document.querySelector(".filter")
        showEl(filter);
        appendToFilter(e)
        doFiltering()
        screen.width <= 540 && main.classList.add("margin")
    })
})

function hideEl (el) {
    !el.classList.contains("hide") && el.classList.add("hide");
}

function showEl (el) {
    el.classList.contains("hide") && el.classList.remove("hide")
}

function appendToFilter (e) {
    let content = e.target.innerHTML;

    if (filterArray.includes(content)) {
        return
    } else {
        filterArray.push(content)

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
    }
}

function doFiltering () {
    cards.forEach((card) => {

        if (filterArray.length == 0) {
            showEl(card)
            return;
        }
        let rightArr = [];
        let rights = card.querySelector('.right-card')
        let buttons = rights.querySelectorAll('.add')
        buttons.forEach((el) => {
            rightArr.push(el.innerHTML)
        })

        for (let element of filterArray) {
            console.log(element)
            if (rightArr.includes(element)) {
                showEl(card)
            } else {
                hideEl(card)
                break;
            }
        }
    })
}

