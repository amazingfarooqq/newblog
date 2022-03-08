let cheatsheets = document.getElementById('cheatsheets')

const Items = [
    {
        stack: 'JAVASCRIPT',
        title: 'Add Tooltip',
        desc: 'With title Attribute, you can easily add a Tooltip to provide extra information to your user.',
        imgUrl: 'cheatsheet imgs/array methods.jpg'
    },
    {
        stack: 'JAVASCRIPT',
        title: 'Download',
        desc: 'The download attribute is used when you want your user download the link instead of navigation to the file.',
        imgUrl: 'cheatsheet imgs/String Methods CheatSheet.jpg'
    },
]

function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
    progressBarScroll();
};

window.addEventListener('scroll', () => {
    let header = document.querySelector('.headnav')
    header.classList.toggle('scroll_headnav_active', window.scrollY > 0)
    intro_section = document.querySelector('.intro_section')
    intro_section.classList.toggle('scroll_intro_active', window.scrollY > 300)
})

let sideNav_btn = document.querySelector('.sideNav_btn')

sideNav_btn.addEventListener('click', () => {
    let side_nav = document.querySelector('.side_nav')
    side_nav.classList.toggle('side_nav_out')

})


const d = 'farooq'

const ALL = () => {

    cheatsheets.innerHTML = ''
    Items.map(item => {
        cheatsheets.innerHTML += `<div class="col-8 col-md-5 m-1 h-100 px-0 pt-3 text-light" style="border-radius: 13px;background-color: #0e121d;overflow: hidden;">
        <h6 class="stack m-0 px-4 text-primary" style="font-size: 13px;">${item.stack}</h6>
        <h5 class="m-0 px-4">${item.title}</h5>
        <p class="m-0 px-4 text-warning">${item.desc}</p>
        <img class="img-fluid p-2" src="${item.imgUrl}" alt="img">
        <div/>`
    })
}

ALL()


const HTML_btn = () => {
    cheatsheets.innerHTML = ''
    let HTML_filter = Items.filter(item => item.stack === 'HTML')
    HTML_filter.map(item => {
        cheatsheets.innerHTML += `<div class="col-8 col-md-5 m-1 h-100 px-0 pt-3 text-light" style="border-radius: 13px;background-color: #0e121d;overflow: hidden;">
        <h6 class="stack m-0 px-4 text-primary" style="font-size: 13px;">${item.stack}</h6>
        <h5 class="m-0 px-4">${item.title}</h5>
        <p class="m-0 px-4 text-warning">${item.desc}</p>
        <img class="img-fluid p-2" src="${item.imgUrl}" alt="img">
        <div/>`
    })
}
const CSS_btn = () => {
    cheatsheets.innerHTML = ''
    let CSS_filter = Items.filter(item => item.stack === 'CSS')
    CSS_filter.map(item => {
        cheatsheets.innerHTML += `<div class="col-8 col-md-5 m-1 h-100 px-0 pt-3 text-light" style="border-radius: 13px;background-color: #0e121d;overflow: hidden;">
        <h6 class="stack m-0 px-4 text-primary" style="font-size: 13px;">${item.stack}</h6>
        <h5 class="m-0 px-4">${item.title}</h5>
        <p class="m-0 px-4 text-warning">${item.desc}</p>
        <img class="img-fluid p-2" src="${item.imgUrl}" alt="img">
        <div/>`
    })
}
const JAVASCRIPT_btn = () => {
    cheatsheets.innerHTML = ''
    let JAVASCRIPT_filter = Items.filter(item => item.stack === 'JAVASCRIPT')
    JAVASCRIPT_filter.map(item => {
        cheatsheets.innerHTML += `<div class="col-8 col-md-5 m-1 h-100  px-0 pt-3 text-light" style="border-radius: 13px;background-color: #0e121d;overflow: hidden;">
        <h6 class="stack m-0 px-4 text-primary" style="font-size: 13px;">${item.stack}</h6>
        <h5 class="m-0 px-4">${item.title}</h5>
        <p class="m-0 px-4 text-warning">${item.desc}</p>
        <img class="img-fluid p-2" src="${item.imgUrl}" alt="img">
        <div/>`
    })
}