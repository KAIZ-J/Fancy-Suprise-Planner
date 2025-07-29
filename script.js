const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
},{})
const cards = document.querySelectorAll(".card")
cards.forEach(el=>observer.observe(el))
const videos = document.querySelectorAll(".video")
videos.forEach(el=>observer.observe(el))