/********************Show SIDEBAR****************************** */

/*******************SIDEBAR Show ****************************** */
/****************VARIABLE IF CONSTANT EXIST***************************** */

/*************************SIDEBAR HIDDEN****************************** */
/****************VARIABLE IF CONSTANT EXIST***************************** */




/******************SKILLS TABLS****************************** */
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener("click", () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContent => {
            tabContent.classList.remove('skills_active')
        })
        target.classList.add('skills_active')

        tabs.forEach(tab => {
            tabContent.classList.remove('skills_active')
        })
        tab.classList.add('skills_active')
    })
})


/******************MIXITUP FILTER FORTFOLIO****************************** */
let mixerPortfolio = mixitup('.work_container',{
    selectors:{
        target: '.work_card '
    },
    animation:{
        duration:300
    }
});

/******************LINK ACTIVIVE WORK****************************** */
const linkwork = document.querySelectorAll('.work_item')

function activeWork(){
    linkwork.forEach(i=>I.classList.remove('active_work'))
    this.classList.add('active_work')
}
linkwork.forEach(i=>i.addEventListener("click", activeWork))

/******************WORK POPUP****************************** */
document.addEventListener("click", (e) =>{
    if (e.target.classList.contains("work_button")) {
        togglePortfolioPupup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPupup(){
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPupup)

function portfolioItemDetails(portfolioItem){
    document.querySelector("pp_thumbmail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-subtitle body").innerHTML = portfolioItem.querySelector(".portfolio item-details").innerHTML;
}
/******************SERVICE MODAL****************************** */
const   modalView = document.querySelectorAll('.services_modal'),
        modalIBtns = document.querySelectorAll('.services_button'),
        modalCloses = document.querySelectorAll('.services_modal-close')

        let modal = function(modalClick){
            modalView[modalClick].classList.add('active-modal')
        }

        modalIBtns.forEach((modelBtn, i) =>{
            modelBtn.addEventListener('click', () =>{
                modal(i)
            })
        })
        modalCloses.forEach((modalClose) =>{
            modalClose.addEventListener("click", () =>{
                modalView.classList.remove('active-modal')
            })
        })
        /*****************SWIPER TESTIMINIAL************************ */
        let swiper = new Swiper(".testimonial_container", {
            spaceBetween: 24,
            loop:true,
            grabCursor:true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });