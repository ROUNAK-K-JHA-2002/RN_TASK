{
    //STICKY NAVBAR
    window.onscroll = function() { sticky_nav() };
    var nav = document.getElementById("nav_bar"); //get the element

    var sticky = nav.offsetTop; //get the offset position of navbar from top

    //adding a sticky class to navbar upon reaching its scroll function
    function sticky_nav() {
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky")
        } else {
            nav.classList.remove("sticky")
        }
    }
}



// {
//     //STICKY NAVBAR SMALL SCREEN
//     window.onscroll = function() { sticky_nav1() };
//     var nav1 = document.getElementById("nav_bar_small"); //get the element

//     var sticky1 = nav1.offsetTop; //get the offset position of navbar from top

//     //adding a sticky class to navbar upon reaching its scroll function
//     function sticky_nav1() {
//         if (window.pageYOffset >= sticky1) {
//             nav1.classList.add("sticky_small")
//         } else {
//             nav1.classList.remove("sticky_small")
//         }
//     }
// }





// SIDE EFFECT IN  SIDENAV

function open_sidenav() {
    document.getElementById("side_nav").style.width = "15em"; // MAKE WIDTH 15EM WHEN SIDENAV IS NEEDED 
}

function close_sidenav() {
    document.getElementById("side_nav").style.width = "0"; //MAKE WIDTH 0 WHEN SIDENAV IS NOT NEEDED
}