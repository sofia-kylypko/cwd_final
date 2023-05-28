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

            let upHeight = $(window).height() - 120;
            if ($ (window).scrollTop () > upHeight) {
                document.getElementById("upButton").style.paddingBottom="90px";
                $(document.getElementById("upButton")).addClass('scrollFixButton');
            } else if ($ (window).scrollTop () < upHeight){
                document.getElementById("upButton").style.paddingBottom="0px";
                $(document.getElementById("upButton")).removeClass('scrollFixButton');
            }
        });
    });
    //scroll
    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
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
    




    // Gallery & contact us Scripts Start
    // Card animation
    let cards = document.getElementsByClassName("cards");
    
    var counter = 0;                        // counter 

    function myLoop() {                     //  function to loop
        setTimeout(function() {             //  call every 100ms
            cards[counter].style.bottom = "0";
            cards[counter].style.opacity = "1"; 
            counter++;                    //  increment the counter
            if (counter < 5) {           //  if the counter < 5, loop back
              myLoop();       
            }  
        }, 100)
    }
    if(cards.length > 0) {  // check that the items exist in the page before runing the function to avoid errors
        myLoop(); 
    }
        

     
    // Gallery Scripts end

    // FORM CHECKING SCRIPTS FOR CONTACT US PAGE
    let submitBtn = document.getElementById("submitButton");
    if(submitBtn){           // check the items exist in the page before runing the function to avoid errors
        submitBtn.addEventListener("click" , validateForm);
    }
    function validateForm() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let errorMessage = document.getElementById("errorMessage");
        if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
          errorMessage.innerHTML = "Please fill in all fields.";
          return false;
        }

        // Email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.innerHTML ="Please enter a valid email address.";
            return false;
        }
        errorMessage.innerHTML ="";
        let sentMessage = document.getElementById("sentMessage");
        let sentMessageContainer = document.getElementById("sentMessageContainer");
        sentMessageContainer.style.display = "block";
        sentMessage.innerHTML = message;
        document.getElementById("contactUsBody").style.filter = "blur(4px)";
        return true;
      }
      document.getElementById("messageClose").addEventListener("click" , closeMessage)
      function closeMessage(){
        sentMessageContainer.style.display = "none";
        document.getElementById("contactUsBody").style.filter ="none";
      }
}
