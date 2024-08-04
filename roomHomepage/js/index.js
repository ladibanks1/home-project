const slide = document.getElementById("slide");
const slideTopic = document.getElementById("slide-topic");
const slideText = document.getElementById("slide-text");
const leftClick = document.getElementById("left-click");
const rightClick = document.getElementById("right-click");
const imgSrc = {
  slideOne: {
    img: "../assets/images/desktop-image-hero-1.jpg",
    topic: "Discover innovative ways to decorate",
    text: " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  slideTwo: {
    img: "../assets/images/desktop-image-hero-2.jpg",
    topic: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business . Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  slideThree: {
    img: "../assets/images/desktop-image-hero-3.jpg",
    topic: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
};
rightClick.addEventListener("click", (e) => {
  const keys = Object.keys(imgSrc);
  let i = 0;
    switch (leftClick.value) {
      case "slide-two":
        slide.src = imgSrc[keys[i + 1]].img;
        slideTopic.innerText = imgSrc[keys[i + 1]].topic;
        slideText.innerText = imgSrc[keys[i + 1]].text;
        return (leftClick.value = "slide-three");
      case "slide-three":
        slide.src = imgSrc[keys[i + 2]].img;
        slideTopic.innerText = imgSrc[keys[i + 2]].topic;
        slideText.innerText = imgSrc[keys[i + 2]].text;
        return (leftClick.value = "slide-one");
      case "slide-one":
        slide.src = imgSrc[keys[i]].img;
        slideTopic.innerText = imgSrc[keys[i]].topic;
        slideText.innerText = imgSrc[keys[i]].text;
        return (leftClick.value = "slide-two");
    }
  
});
leftClick.addEventListener("click", (e) => {
  const keys = Object.keys(imgSrc);
  let i = 0;
    switch (leftClick.value) {
      case "slide-three":
        slide.src = imgSrc[keys[i + 2]].img;
        slideTopic.innerText = imgSrc[keys[i + 2]].topic;
        slideText.innerText = imgSrc[keys[i + 2]].text;
        return (leftClick.value = "slide-two");
      case "slide-two":
        slide.src = imgSrc[keys[i + 1]].img;
        slideTopic.innerText = imgSrc[keys[i + 1]].topic;
        slideText.innerText = imgSrc[keys[i + 1]].text;
        return (leftClick.value = "slide-one");
      case "slide-one":
        slide.src = imgSrc[keys[i]].img;
        slideTopic.innerText = imgSrc[keys[i]].topic;
        slideText.innerText = imgSrc[keys[i]].text;
        return (leftClick.value = "slide-three");
    }
});
function hambugerIcon(){
  const icon = document.getElementById("hambuger-icon");
  const nav = document.getElementById("nav");
  const navItem = document.getElementById("nav-item");
  const close = document.getElementById("close");
  const name = document.getElementById("name")
  if (innerWidth < 768){
    navItem.classList.add("hidden")
    icon.classList.remove("hidden");
    icon.addEventListener("click" , () => {
      navItem.classList.toggle("hidden");
      icon.classList.add("hidden");
      nav.classList.add("new")
      close.classList.remove("hidden");
      navItem.style.color = "black";
      name.remove();
    })
    close.addEventListener("click" , () => {
      navItem.classList.toggle("hidden");
      icon.classList.toggle("hidden");
      nav.classList.toggle("new")
      close.classList.remove("hidden")
    })
  }
  else{
    navItem.classList.remove("hidden")
    icon.classList.add("hidden")
  }
}
hambugerIcon();