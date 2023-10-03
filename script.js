let cn=document.getElementById("close");
let bar=document.querySelector(".offer-bar");
let side_active=document.querySelector("#side-navbar-active");
let side_nav=document.querySelector(".side-navbar");
let side_close=document.querySelector("#side-close");

let left=document.getElementById("left");
let right=document.getElementById("right");
let container=document.querySelector(".carousal-container");

cn.addEventListener("click",()=>{
    bar.remove();
})
side_active.addEventListener("click",()=>{
    side_nav.classList.add("open");
})
side_close.addEventListener("click",()=>{
    side_nav.classList.remove("open");
})
var marginLeft=0;
right.addEventListener("click",()=>{
if(marginLeft==200){
    marginLeft=0;
container.style.marginLeft="-"+marginLeft+"vw";
}
else{
    marginLeft=marginLeft+100;
    container.style.marginLeft="-"+marginLeft+"vw";
}

})
left.addEventListener("click",()=>{
    if(marginLeft==0){
        marginLeft=200;
        container.style.marginLeft="-"+marginLeft+"vw";
    }
    else{
        marginLeft=marginLeft-100;
        container.style.marginLeft="-"+marginLeft+"vw";
    }
})

setInterval(()=>{
    if(container&&marginLeft==200){
      marginLeft=0;
    container.style.marginLeft="-"+marginLeft+"vw";
    }
    else{
        marginLeft=marginLeft+100;
    
    container.style.marginLeft="-"+marginLeft+"vw";
    }
    },3000)
// scrollbar

let rightactive=document.getElementById("brands-right-activate" );
let leftactive=document.getElementById("brands-left-activate");
let brandcontainer=document.querySelector(".brands-container");

rightactive.addEventListener("click",()=>{
brandcontainer.scrollBy({
top:0,
left:200,
behavior:"smooth"
})
    
})

leftactive.addEventListener("click",()=>{
    brandcontainer.scrollBy({
    top:0,
    left:-200,
    behavior:"smooth"
    })
        
    })

    var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="images/icons/redheart.png"
        }
        else{
            e.target.src="images/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})


})

var new_arrive=document.querySelector(".link2");
new_arrive.addEventListener("click",()=>{
var reached2=document.querySelector(".reached2");
reached2.scrollIntoView({
    behavior:"smooth"
}

)

})

var new_arrive=document.querySelector(".link3");
new_arrive.addEventListener("click",()=>{
var reached1=document.querySelector(".reached1");
reached1.scrollIntoView({
    behavior:"smooth"
}

)

})


//Collections