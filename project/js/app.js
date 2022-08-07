
    let screenHeight = $(window).height();
    console.log(screenHeight);

    $(window).scroll(function (){
        let current = $(document).scrollTop();
        if (current >= screenHeight-100){
            $(".site-nav").addClass("site-nav-scroll");
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home")
        }
    });

    $(".navbar-toggler").click(function (){
        let result = $(".menu-item").hasClass("fa-bars");
        if(result){
            $(".menu-item").addClass("fa-close");
            $(".menu-item").removeClass("fa-bars");
        }else{
            $(".menu-item").removeClass("fa-close");
            $(".menu-item").addClass("fa-bars");
        }
    });

    function setActive(current){
        $(`.nav-link`).removeClass("current-section");

        $(`.nav-link[href="#${current}"]`).addClass("current-section");
    }

    function navScroll() {
        let currentSection = $("section[id]");
        currentSection.waypoint(function (direction) {
            if (direction === "down") {
                let currentSectionId = $(this.element).attr('id');
                console.log(currentSectionId);
                setActive(currentSectionId);
            }
        },{offset: "150px"});

        currentSection.waypoint(function (direction) {
            if (direction === "up") {
                let currentSectionId = $(this.element).attr('id');
                console.log(currentSectionId);
                setActive(currentSectionId);
            }
        },{offset: "150px"});
    }

    navScroll();

let wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();

$('.multiple-items').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:3,
    responsive:[
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll:2,
                infinite: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                infinite: true
            }
        }
    ],
});
$(window).on("load",function(){
    $(".loader-container").fadeOut(500,function (){
        $(this).remove()
    })
})