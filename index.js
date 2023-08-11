const hamburgerIcon = document.querySelector(".hamburgericon")
const hamburgerMenu = document.querySelector(".hamburgermenu")
const xIcon = document.querySelector(".hamburgermenu i" )

hamburgerIcon.addEventListener("click" ,() => {
    hamburgerMenu.style.display = "block";  
})

xIcon.addEventListener("click" , () =>{
    hamburgerMenu.style.display = "none";
})




