const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
var timeout;
function firstpageAnim() {
    var t1 = gsap.timeline();
    t1.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,

        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            stagger: .2,
            duration: 2,
            ease: Expo.easeInOut,
            delay: -1

        })
        .from("#headfooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInOut,
            delay: -1

        })
}
function circlesquij() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xscale = gsap.utils.clamp(.8, 1.2, xdiff)
        yscale = gsap.utils.clamp(.8, 1.2, ydiff)

        xprev = dets.clientX;
        yprev = dets.clienty;

        circlemousefollow(xscale, yscale)
        timeout = setTimeout(function () {
            document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)scale(1,1) `;

        }, 100)
    });

}

function circlemousefollow(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        // console.log(dets.clientX)
        document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)scale(${xscale},${yscale}) `;
    })
}


circlesquij()
circlemousefollow();
firstpageAnim();
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrence = 0;
// elem.addEventListener("mouseleave", function (dets){
//     gsap.to(elem.querySelector("img"), {
//         opacity: 0,
//         ease: Power1,
//         // duration: 1.5,
        
//     });
// });
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrence = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top:" diff",
            left: rotate,
            rotate:  gsap.utils.clamp(-20,20, diffrence * 0.5 )
       
        })
    });
});

