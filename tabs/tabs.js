const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tabContent = document.getElementById("tabContent");

const tab1Content = `<div class='tab1'><div class='tab1-content'><h1 class='tab1-header'>Header</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nulla veniam soluta in quia culpa eaque adipisci minus modi est iste, facilis eos repudiandae? Voluptatem doloribus sint tempore ab quis.</p><a href='#'>Chat with us</a></div><img class='tab1-img' src='./images/social.jpg'/></div>`;

const tab2Content = `<div class='tab2'><div class='tab2-content'><div class='tab2-header'><h1>Header</h1><button class='tab2-button'>Try for free</button></div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nulla veniam soluta in quia culpa eaque adipisci minus modi est iste, facilis eos repudiandae? Voluptatem doloribus sint tempore ab quis.</p></div><div>`;


tabContent.innerHTML = tab1Content;


tab1.addEventListener("click", () => {
    tab1.classList.add("active-button");
    tab1.classList.remove("inactive-button");
    tab2.classList.add("inactive-button");
    tab2.classList.remove("active-button");
    tabContent.innerHTML = tab1Content;
});

tab2.addEventListener("click", () => {
    tab2.classList.add("active-button");
    tab2.classList.remove("inactive-button");
    tab1.classList.add("inactive-button");
    tab1.classList.remove("active-button");
    tabContent.innerHTML = tab2Content;
});

