let tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(() => {
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.getElementById("loader").textContent = a+"%"
        }else{
            a = 100
            document.getElementById("loader").textContent = a+"%"
        }
    }, 100);
}

tl.to("#loader",{
    onStart: time(),
    duration: 1,
    delay: 0.5
})

tl.to("#loader",{
    top: "-100vh",
    duration: 1.5,
    delay: 1
})

tl.to("#main h1",{
    Transform: "translateX(-100%)",
    fontWeight: 100,
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top 0%",
        end: "top -400%",
        scrub:true,
        pin:true
    }
})