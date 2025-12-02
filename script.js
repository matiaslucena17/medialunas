function modoOscuro(){
    document.body.style.backgroundColor = "black"
    document.getElementById("header").style.backgroundColor = "black"
    document.querySelectorAll("li").forEach(li =>{
        li.style.color = "black"
        li.style.backgroundColor = "aliceblue"
    })
     document.getElementById("ul").style.backgroundColor = "black"
    document.querySelectorAll("ul").forEach(ul =>{
        ul.style.backgroundColor = "aliceblue"
    })
    document.getElementById("ol").style.backgroundColor = "black"
    document.querySelectorAll("ol").forEach(ol =>{
        ol.style.backgroundColor = "aliceblue"
    })
    document.getElementById("h1").style.backgroundColor = "aliceblue"
    document.getElementById("h1").style.color = "black"
    document.getElementById("h2").style.backgroundColor = "aliceblue"
    document.getElementById("h2").style.color = "black"
    document.getElementById("h3").style.backgroundColor = "aliceblue"
    document.getElementById("h3").style.color = "black"
    document.getElementById("h4").style.backgroundColor = "aliceblue"
    document.getElementById("h4").style.color = "black"
    document.getElementById("p").style.backgroundColor = "aliceblue"
    document.getElementById("p").style.color = "black"
}