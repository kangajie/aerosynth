const search = document.querySelector(".search-box input"),
    gallery = document.querySelectorAll(".person");

search.addEventListener("keyup", e => {
    if(e.key == "Enter"){
        let searcValue = search.value,
            value = searcValue.toLowerCase();
            gallery.forEach((image) => {
                if (value === image.dataset.name) {
                    return image.style.display = "block";
                }
                return image.style.display = "none";
            })
    }
    
})

search.addEventListener("keyup", () =>{
    if(search.value != "") return;

    gallery.forEach(image =>{
        image.style.display = "block";
    })
})


// JavaScript untuk menampilkan menu hamburger
const hamburger = document.getElementById('hamburger-icon'); 
const navbar = document.getElementById('navbar'); 

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active'); 
});

