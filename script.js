(() => {

    let clicked = false
    let active = false
    let hasActive = false
    let navbarActive = false
    let activeID = false

    const slides = [
        'header',
        'o-projektu',
        'radionica1',
        'radionica2',
        'datingAndPanel',
        'agenda',
        'faq',
        'generalni-pokrovitelj',
        'partneri',
        'tim-i-footer',
    ]




    //Caroussel panel

    var panel;


    //Carousel radionica JS

    const r2 = new Swiper('.swiper-r2', {
        speed: 2000,
        spaceBetween: 50,
        initialSlide: 2,
        autoHeight: false,
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        loopedSlides: 0,

        effect: 'slide',
        slidesPerView: 'auto',
        centeredSlides: true,
        grabCursor: true,
    })


    // Tim

    // PopUp prozor

    // Get the modal
    var modal = document.getElementById("popUpRadionica");
    var modal2 = document.getElementById("popUpRadionica2");
    var modal3 = document.getElementById("popUpPanel");

    // Get the button that opens the modal
    var btn = document.getElementById("btn1R1");
    var btn2 = document.getElementById("btn1R2");
    var btn3 = document.getElementById("btnPanel");


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close1")[0];
    var span2 = document.getElementsByClassName("close2")[0];
    var span3 = document.getElementsByClassName("close3")[0];


    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "flex";
        // startTyping('naslovPredavac', 100)
        // startTyping('tekstPredavac', 20)
    }

    btn2.onclick = function() {
        modal2.style.display = "flex";
        // startTyping('naslovPredavac2', 100)
        // startTyping('tekstPredavac2', 20)

    }

    btn3.onclick = function() {
            modal3.style.display = "flex";
            if (!panel) {
                panel = new Swiper('.swiper-panel', {
                    speed: 2000,
                    spaceBetween: 50,
                    initialSlide: 2,
                    autoHeight: false,
                    direction: 'horizontal',
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    loopedSlides: 0,
                    simulateTouch: false,
                    allowSwipeToNext: false,
                    effect: 'slide',
                    slidesPerView: 'auto',
                })
                $('#panelista' + panel.activeIndex).fadeIn();

            }
            if (panel)
                panel.on('transitionEnd', function() {
                    if (window.innerWidth > 900) {


                        for (let index = 5; index <= 8; index++) {
                            if (panel.activeIndex === 4) {
                                if (index !== 8) {
                                    $('#panelista' + index).hide();

                                }
                            } else {
                                $('#panelista' + index).hide();

                            }
                        }
                        if (panel.activeIndex === 5) {
                            $('#panelista8').hide();
                        }
                        console.log(panel.activeIndex)
                        if (panel.activeIndex !== 4) {
                            $('#panelista' + panel.activeIndex).fadeIn(1750);
                        }
                    }
                });
        }
        //
        // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        clicked = true;

    }

    span2.onclick = function() {
        modal2.style.display = "none";
        clicked = true;
    }

    span3.onclick = function() {
        modal3.style.display = "none";
        clicked = true;
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }

        if (event.target == modal2) {
            modal2.style.display = "none";
        }

        if (event.target == modal3) {
            modal3.style.display = "none";
        }

    }



    new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 3,
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },

    })

    // Skrol po sekcijama

    const swiper = new Swiper('.main-container', {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 0,
        mousewheel: true,
        autoHeight: false,
        allowTouchMove: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    })

    // Caroussel generalni

    const generalni = new Swiper('.swiper-generalni', {
            speed: 2000,
            spaceBetween: 0,
            initialSlide: 2,
            autoHeight: false,
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            loop: true,
            loopedSlides: 50,

            effect: 'slide',
            slidesPerView: 'auto',
            centeredSlides: true,
            grabCursor: true,
        })
        // Caroussel naturalni

    const naturalni = new Swiper('.swiper-naturalni', {
            speed: 1000,
            spaceBetween: 0,
            initialSlide: 3,
            autoHeight: false,
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            loop: true,
            loopedSlides: 50,

            effect: 'slide',
            slidesPerView: 2,
            centeredSlides: true,
            grabCursor: true,
        })
        // Caroussel medijski

    const medijski = new Swiper('.swiper-medijski', {
        speed: 1500,
        spaceBetween: 0,
        initialSlide: 1,
        autoHeight: false,
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        loop: true,
        loopedSlides: 50,

        effect: 'slide',
        slidesPerView: 'auto',
        centeredSlides: true,
        grabCursor: true,
    })

    $('.swiper-generalni').hover(function() {

        generalni.autoplay.stop();

    }, function() {
        generalni.autoplay.start();
    });
    $('.swiper-naturalni').hover(function() {
        naturalni.autoplay.stop();

    }, function() {
        naturalni.autoplay.start();
    });
    $('.swiper-medijski').hover(function() {
        medijski.autoplay.stop();

    }, function() {
        medijski.autoplay.start();
    });
    $('.swiper-panel').hover(function() {
        panel.autoplay.stop();

    }, function() {
        panel.autoplay.start();
    });

    const hamburger_menu = document.querySelector('.hamburger-menu')
    const mainContainer = document.querySelector('.main-container')

    hamburger_menu.addEventListener('click', () => {
        console.log('eej')
        if ($('.main-container').hasClass('active')) navbarActive = false
        else navbarActive = true
        mainContainer.classList.toggle('active')
        console.log(navbarActive)
    })

    $('.hamburger-menu').click(function(e) {
        e.preventDefault()

        const containerWrapper1 = document.querySelector('.container-wrapper')
        const containerWrapper2 = document.querySelector('.container-wrapper-2')
        const containerWrapper3 = document.querySelector('.container-wrapper-3')
        const containerWrapper4 = document.querySelector('.container-wrapper-4')
        const containerWrapper5 = document.querySelector('.container-wrapper-5')
        const containerWrapper6 = document.querySelector('.container-wrapper-6')
        const containerWrapper7 = document.querySelector('.container-wrapper-7')
        const containerWrapper8 = document.querySelector('.container-wrapper-8')
        const containerWrapper9 = document.querySelector('.container-wrapper-9')
        const containerWrapper10 = document.querySelector('.container-wrapper-10')

        if (containerWrapper1.classList.contains('should-change'))
            containerWrapper1.classList.remove('should-change')
        if (containerWrapper2.classList.contains('should-change'))
            containerWrapper2.classList.remove('should-change')
        if (containerWrapper3.classList.contains('should-change'))
            containerWrapper3.classList.remove('should-change')
        if (containerWrapper4.classList.contains('should-change'))
            containerWrapper4.classList.remove('should-change')
        if (containerWrapper5.classList.contains('should-change'))
            containerWrapper5.classList.remove('should-change')
        if (containerWrapper6.classList.contains('should-change'))
            containerWrapper6.classList.remove('should-change')
        if (containerWrapper7.classList.contains('should-change'))
            containerWrapper7.classList.remove('should-change')
        if (containerWrapper8.classList.contains('should-change'))
            containerWrapper8.classList.remove('should-change')
        if (containerWrapper9.classList.contains('should-change'))
            containerWrapper9.classList.remove('should-change')
        if (containerWrapper10.classList.contains('should-change'))
            containerWrapper10.classList.remove('should-change')

        switch (swiper.activeIndex) {
            case 0:
                !containerWrapper1.classList.contains('should-change') &&
                    containerWrapper1.classList.add('should-change')
                break
            case 1:
                !containerWrapper2.classList.contains('should-change') &&
                    containerWrapper2.classList.add('should-change')
                break
            case 2:
                !containerWrapper3.classList.contains('should-change') &&
                    containerWrapper3.classList.add('should-change')
                break
            case 3:
                !containerWrapper4.classList.contains('should-change') &&
                    containerWrapper4.classList.add('should-change')
                break
            case 4:
                !containerWrapper5.classList.contains('should-change') &&
                    containerWrapper5.classList.add('should-change')
                break
            case 5:
                !containerWrapper6.classList.contains('should-change') &&
                    containerWrapper6.classList.add('should-change')
                break
            case 6:
                !containerWrapper7.classList.contains('should-change') &&
                    containerWrapper7.classList.add('should-change')
                break
            case 7:
                !containerWrapper8.classList.contains('should-change') &&
                    containerWrapper8.classList.add('should-change')
                break
            case 8:
                !containerWrapper9.classList.contains('should-change') &&
                    containerWrapper9.classList.add('should-change')
                break
            case 9:
                !containerWrapper10.classList.contains('should-change') &&
                    containerWrapper10.classList.add('should-change')
                break
            default:
                break
        }
        hasActive = false
        $('.navbar-active-logo').css(
            'transform',
            `translateY(${100 * swiper.activeIndex}vh)`
        )
        $('.navbar-active-links').css(
            'transform',
            `translateY(${100 * swiper.activeIndex}vh)`
        )
        $('.navbar-active-social-media').css(
            'transform',
            `translateY(${100 * swiper.activeIndex}vh)`
        )
        toggleNavigation();
        if (!navbarActive && active) {
            console.log(active);
            let currentlyActiveWrapper;
            let currentlyActiveSection;
            currentlyActiveWrapper = $('body').find('.should-change')
            currentlyActiveSection = currentlyActiveWrapper.find('.main')
            currentlyActiveSection.html(active)
        }
    })

    function toggleNavigation() {
        console.log($('.navbar-active').css('display'))
        $('.navbar-active').css('display') == 'none' ?
            $('.navbar-active').css('display', 'block') :
            $('.navbar-active').css('display', 'none');
        swiper.allowTouchMove = !swiper.allowTouchMove
        swiper.mousewheel.enabled ? swiper.mousewheel.disable() : swiper.mousewheel.enable();
        swiper.keyboard.enabled ? swiper.keyboard.disable() : swiper.keyboard.enable();
        $('.swiper-pagination').hasClass('swiper-button-lock') ?
            $('.swiper-pagination').removeClass('swiper-button-lock') :
            $('.swiper-pagination').addClass('swiper-button-lock');
    }

    function gotoSlide(numberPage) {
        swiper.slideTo(numberPage, 0, false)
    }

    $('.navbar-active-link').hover(function(e) {
        e.preventDefault()

        if (navbarActive) {
            const currentlyActiveWrapper = $('body').find('.should-change')
            const currentlyActiveSection = currentlyActiveWrapper.find('.main')
            if (!hasActive) {
                active = currentlyActiveSection.html()
                console.log(currentlyActiveSection.find('section').attr('id'))
                activeID = currentlyActiveWrapper.find('section').attr('id')
                console.log(active)
                hasActive = true
            }
            const hoveredSectionID = $(this).attr('should-show')
            let sectionToShow = $(`#${hoveredSectionID}`).parent().html()
            if ($(this).attr('should-show') == activeID) sectionToShow = active

            currentlyActiveSection.html(sectionToShow)
        }
    })

    $('.navbar-active-link').click(function(e) {
        e.preventDefault()
        toggleNavigation();
        navbarActive = false
        hasActive = false
        mainContainer.classList.toggle('active')
        if ($(this).attr('should-show') == activeID) sectionToShow = active

        setTimeout(() => {
            const clickedSectionID = $(this).attr('should-show')
            const currentlyActiveWrapper = $('body').find('.should-change')
            const currentlyActiveSection = currentlyActiveWrapper.find('.main')
            currentlyActiveSection.html(active)
            gotoSlide(slides.indexOf(clickedSectionID))
        }, 600)

    })

    document.onscroll = () => scanDocument()

    const left = document.querySelector('.left')
    const right = document.querySelector('.right')

    const slider = document.querySelector('.slider')

    const indicatorParent = document.querySelector('.control ul')
    const indicators = document.querySelectorAll('.control li')
    index = 0

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            document.querySelector('.control .selected').classList.remove('selected')
            indicator.classList.add('selected')
            slider.style.transform = 'translateX(' + i * -20 + '%)'
            index = i
        })
    })

    left.addEventListener('click', function() {
        index = index > 0 ? index - 1 : 0
        document.querySelector('.control .selected').classList.remove('selected')
        indicatorParent.children[index].classList.add('selected')
        slider.style.transform = 'translateX(' + index * -20 + '%)'
    })

    right.addEventListener('click', function() {
        index = index < 5 - 1 ? index + 1 : 4
        document.querySelector('.control .selected').classList.remove('selected')
        indicatorParent.children[index].classList.add('selected')
        slider.style.transform = 'translateX(' + index * -20 + '%)'
    })

    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
    const firstAccordionItemBodies = document.querySelectorAll(".accordion-item-body");


    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {
            firstAccordionItemBodies[0].style.maxHeight = 0;
            const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
                currentlyActiveAccordionItemHeader.classList.toggle("active");
                currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            }

            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }

        });
    });

    document.addEventListener('dblclick', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
    })


    /* function startTyping(textId, speed) {
       setTimeout(addNextLetterToTextBox, speed);
       let text = $('#' + textId).html().replace(/\s+/g, ' ').trim();
       var i = 0;
       $('#' + textId).text("");

       function addNextLetterToTextBox() {

         console.log(clicked)

         if (!clicked && i < text.length) {

           $('#' + textId).append(text[i]);
           i += 1;
           setTimeout(addNextLetterToTextBox, speed);
         }
         if (clicked) {
           $('#' + textId).html(text);
         }
         clicked = false;
       }
     }*/
    // const panelisti = $('.panelistiTekst');

    var slideIndex = 0;
    showSlideForR2();

    function showSlideForR2() {
        var i;
        var slide1 = $('.cardR21')
        var slide2 = $('.cardR22')
        console.log(window.innerWidth)
        if (window.innerWidth < 800) {
            slide1.hide();
            slide2.hide();

        } else {
            if (slide1.css('display') == 'none') {
                slide1.fadeIn(3000);
                slide2.hide();
            } else if (slide2.css('display') == 'none') {
                slide2.fadeIn(3000);
                slide1.hide();
            } else {}
        }
        setTimeout(showSlideForR2, 6000);
    }
})()