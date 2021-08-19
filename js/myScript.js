function myFunction() {
    const header = document.querySelector("header");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
        navbar.classList.add("show");
        menuBtn.classList.add("hide");
        header.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
        header.classList.remove("disabled");
        navbar.classList.remove("show");
        menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
        this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }
}
