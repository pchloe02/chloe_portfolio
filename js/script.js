document.addEventListener('mousemove', function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    var element = document.querySelector('.mouse');
    element.style.transform = 'translate(' + (mouseX / 100) + 'px, ' + (mouseY / 100) + 'px)';
});

// gsap.registerPlugin(ScrollTrigger);


// document.addEventListener('DOMContentLoaded', () => {

//     gsap.to('.title', {
    
//         fontSize:'1.5rem',
//         top: "3rem",
//         left: "11%",
//         scrollTrigger: {
    
//             trigger:'.title',
//             start:'top top',
//             end: 1000,
//             scrub: 2
//         }
//     })

//     gsap.to('.color-block', {
    
//         height: '100px',
//         width: '15%',
//         left: '3.5%',
//         opacity: 0,

//         scrollTrigger: {
    
//             trigger:'.title',
//             start:'top top',
//             end: 1000,
//             scrub: 2
//         }
//     })

// })
