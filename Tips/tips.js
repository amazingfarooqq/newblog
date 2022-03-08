let tips = document.getElementById('tips')

const Items = [
    {
        stack: 'HTML',
        title: 'Add Tooltip',
        desc: 'With title Attribute, you can easily add a Tooltip to provide extra information to your user.',
        imgUrl: 'tips imgs/html/tooltip.png'
    },
    {
        stack: 'HTML',
        title: 'Download',
        desc: 'The download attribute is used when you want your user download the link instead of navigation to the file.',
        imgUrl: 'tips imgs/html/download.png'
    },
    {
        stack: 'HTML',
        title: 'Text-direction',
        desc: 'With Dir="auto" , the browser will text alignment as per the language of the content.',
        imgUrl: 'tips imgs/html/text-direction.png'
    },
    {
        stack: 'HTML',
        title: 'Content editable',
        desc: 'You can make any content editable by setting contenteditable attribute to true.',
        imgUrl: 'tips imgs/html/Content Editable.png'
    },
    {
        stack: 'HTML',
        title: 'Basic Accordion',
        desc: 'Wrap your accordion element with details element and for the title use the summary element and "p" tag for main content.',
        imgUrl: 'tips imgs/html/basic accordion.png'
    },
    {
        stack: 'JAVASCRIPT',
        title: 'Fixed Number',
        desc: 'this is how you find fixed decimal number',
        imgUrl: 'tips imgs/js/js1.png'
    },
    {
        stack: 'JAVASCRIPT',
        title: 'Reverse String',
        desc: 'this is how you can reverse string',
        imgUrl: 'tips imgs/js/js2.jpg'
    },
    {
        stack: 'JAVASCRIPT',
        title: 'Includes Method',
        desc: 'Check if all elements justify the following condition',
        imgUrl: 'tips imgs/js/js3.jpg'
    },
    {
        stack: 'JAVASCRIPT',
        title: 'Sum of An array',
        desc: 'Find Sum of an array by following condition',
        imgUrl: 'tips imgs/js/js5.png'
    },
    {
        stack: 'CHEATSHEET',
        title: 'Sum of An array',
        desc: 'Find Sum of an array by following condition',
        imgUrl: 'tips imgs/js/js5.png'
    },
    {
        stack: 'CHEATSHEET',
        title: 'Sum of An array',
        desc: 'Find Sum of an array by following condition',
        imgUrl: 'tips imgs/js/js5.png'
    },
    {
        stack: 'CHEATSHEET',
        title: 'Sum of An array',
        desc: 'Find Sum of an array by following condition',
        imgUrl: 'tips imgs/js/js5.png'
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

    tips.innerHTML = ''
    Items.map(item => {
        tips.innerHTML += `<div class="col-8 col-md-5 m-1 h-100 px-0 pt-3 text-light" style="border-radius: 13px;background-color: #0e121d;overflow: hidden;">
        <h6 class="stack m-0 px-4 text-primary" style="font-size: 13px;">${item.stack}</h6>
        <h5 class="m-0 px-4">${item.title}</h5>
        <p class="m-0 px-4 text-warning">${item.desc}</p>
        <img class="img-fluid p-2" src="${item.imgUrl}" alt="img">
        <div/>`
    })
}

ALL()


const HTML_btn = () => {
    tips.innerHTML = ''
    let HTML_filter = Items.filter(item => item.stack === 'HTML')
    HTML_filter.map(item => {
        tips.innerHTML += `<div class="col-8 col-md-5 m-1 h-100 px-0 pt-3 text-light" style="border-radius: 13px;background-color: #0e121d;overflow: hidden;">
        <h6 class="stack m-0 px-4 text-primary" style="font-size: 13px;">${item.stack}</h6>
        <h5 class="m-0 px-4">${item.title}</h5>
        <p class="m-0 px-4 text-warning">${item.desc}</p>
        <img class="img-fluid p-2" src="${item.imgUrl}" alt="img">
        <div/>`
    })
}
const CSS_btn = () => {
    tips.innerHTML = ''
    let CSS_filter = Items.filter(item => item.stack === 'CSS')
    CSS_filter.map(item => {
        tips.innerHTML += `<div class="col-8 col-md-5 m-1 h-100 px-0 pt-3 text-light" style="border-radius: 13px;background-color: #0e121d;overflow: hidden;">
        <h6 class="stack m-0 px-4 text-primary" style="font-size: 13px;">${item.stack}</h6>
        <h5 class="m-0 px-4">${item.title}</h5>
        <p class="m-0 px-4 text-warning">${item.desc}</p>
        <img class="img-fluid p-2" src="${item.imgUrl}" alt="img">
        <div/>`
    })
}
const JAVASCRIPT_btn = () => {
    tips.innerHTML = ''
    let JAVASCRIPT_filter = Items.filter(item => item.stack === 'JAVASCRIPT')
    JAVASCRIPT_filter.map(item => {
        tips.innerHTML += `<div class="col-8 col-md-5 m-1 h-100  px-0 pt-3 text-light" style="border-radius: 13px;background-color: #0e121d;overflow: hidden;">
        <h6 class="stack m-0 px-4 text-primary" style="font-size: 13px;">${item.stack}</h6>
        <h5 class="m-0 px-4">${item.title}</h5>
        <p class="m-0 px-4 text-warning">${item.desc}</p>
        <img class="img-fluid p-2" src="${item.imgUrl}" alt="img">
        <div/>`
    })
}