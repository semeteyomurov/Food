let tabcontent = document.querySelectorAll(".tabcontent")
let i = 0;
let x = 0;

for(let i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = 'none'
}

tabcontent[0].style.display = 'block'

let tabheader__item = document.querySelectorAll(".tabheader__item")

for(let i = 0; i < tabheader__item.length; i++){
    tabheader__item[i].addEventListener("click", () => {
        for(let x = 0; x < tabcontent.length; x++){
            tabcontent[x].style.display = 'none'
            tabheader__item[x].classList.remove("tabheader__item_active")
        }
        tabcontent[i].style.display = 'block'
        tabheader__item[i].classList.add("tabheader__item_active") 
    })
}
let offer__slide = document.querySelectorAll(".offer__slide")
let prev = document.querySelector(".offer__slider-prev") 
let next = document.querySelector(".offer__slider-next")
let current = document.querySelector("#current")

for(let i = 0; i < offer__slide.length; i++){
    offer__slide[i].style.display = "none"
}

offer__slide[0].style.display = "block"

next.addEventListener('click', () =>{
    if(i < 3 ){
        offer__slide[i].style.display = "none"
        i++; x++;
        offer__slide[i].style.display = "block"
        current.innerHTML = `0${x}`
    }else{
        offer__slide[i].style.display = "none"
        i = 0; x = 0;
        offer__slide[i].style.display = "block"
        current.innerHTML = `0${x}`
    }
})
prev.addEventListener('click', () =>{
    if(i > 0 ){
        offer__slide[i].style.display = "none"
        i--; x--; 
        offer__slide[i].style.display = "block"
        current.innerHTML = `0${x}`
    }else{
        offer__slide[i].style.display = "none"
        i = 3; x = 4;
        offer__slide[i].style.display = "block"
        current.innerHTML = `0${x}`
    }
})

    let modal = document.querySelector(".modal")
    let model = document.querySelector(".modal__close")
    let btn = document.querySelectorAll(".btn")

    btn[0].addEventListener('click', () =>{
        modal.style.display = "block"
        model.addEventListener("click", () =>{
            modal.style.display = "none"

        })
    })
    btn[1].addEventListener('click', () =>{
        modal.style.display = "block"
        model.addEventListener("click", () =>{
            modal.style.display = "none"

        })
    })
