window.onload=function(){
    console.log("dot");
    //initializing
    let btnMenuOpen=document.getElementById("menuOpen");
    let btnMenuClose=document.getElementById("menuClose");
    //scroll and fix header logic
    $(document).ready(function() {
        $(window).bind('scroll', function() {
            let navHeight = $(window).height() - 109;
            if ($ (window).scrollTop () > navHeight) {
                document.getElementById("top").style.paddingBottom="90px";
                $('header').addClass('scrollFix');
            } else {
                document.getElementById("top").style.paddingBottom="0px";
                $('header').removeClass('scrollFix');
            }
        });
    });
    // working event listeners
    btnMenuOpen.addEventListener("click", function(){
        console.log("1");
        let height = $(window).height()+"px";
        // btnMenuOpen.style.animation="ani 4s";
        btnMenuOpen.classList.add("buttonHide");
        btnMenuOpen.classList.remove("buttonShow");
        document.getElementById("asideNav").classList.remove("asideHide");
        document.getElementById("asideNav").classList.add("asideShow");
        document.getElementById("asideNav").style.height=height;
        btnMenuClose.classList.add("buttonShow");
        btnMenuClose.classList.remove("buttonHide");
    });

    btnMenuClose.addEventListener("click", function(){
        console.log("2");
        btnMenuClose.classList.add("buttonHide");
        btnMenuClose.classList.remove("buttonShow");
        btnMenuOpen.classList.add("buttonShow");
        btnMenuOpen.classList.remove("buttonHide");
        document.getElementById("asideNav").classList.add("asideHide");
    });
    
}
