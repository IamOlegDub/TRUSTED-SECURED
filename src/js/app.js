import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(document).ready(function () {
    // language select ================================================================
    $(".language-select").click(function () {
        $(this).toggleClass("open");
        $(".header__nav__right__contacts").toggleClass("pos");
        var open = $(this).attr("class");
    });
    $(".language-select .language-option").click(function () {
        var setLang = $(".language-select").data("location"),
            dataLangSelect = $(this).data("lang");
        $(".language-select").data("location", dataLangSelect);
        $(".language-select .language-option").removeClass("active");
        $(this).toggleClass("active");
    });

    // burger ====================================================================
    $(".header__burger, .burger-menu_overlay").click(function (e) {
        e.preventDefault();
        $(".header__burger, .header__nav, .burger-menu_overlay").toggleClass(
            "active"
        );

        // ще розібратися
        $("body").toggleClass("lock");
        if ($("body").hasClass("lock")) {
            $("body").removeClass("lock");
        }
    });

    // переходи по сторінці і сторінках ================================================

    const currUrl = `${location.protocol}//${window.location.host}/`;

    $("#explore-company, #link-to-services").click(function (e) {
        if ($(location)[0].href === currUrl) {
            e.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: $("#services").offset().top - 72,
                },
                1000
            );
        } else {
            e.preventDefault();
            $(location).attr("href", "/#services");
        }
        $(".header__burger, .header__nav, .burger-menu_overlay").removeClass(
            "active"
        );
        $("body").removeClass("lock");
    });
    // $("#link-to-projects").click(function (e) {
    //     if ($(location)[0].href === currUrl) {
    //         e.preventDefault();
    //         $("html, body").animate(
    //             {
    //                 scrollTop: $("#projects").offset().top - 72,
    //             },
    //             1000
    //         );
    //     } else {
    //         e.preventDefault();
    //         $(location).attr("href", "/#projects");
    //     }
    //     $(".header__burger, .header__nav, .burger-menu_overlay").removeClass(
    //         "active"
    //     );
    //     $("body").removeClass("lock");
    // });

    $("#link-to-contacts, #get-in-touch, #start-project").click(function (e) {
        if ($(location)[0].href === currUrl) {
            e.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: $("#contacts").offset().top - 72,
                },
                1000
            );
        } else {
            e.preventDefault();
            $(location).attr("href", "/#contacts");
        }
        $(".header__burger, .header__nav, .burger-menu_overlay").removeClass(
            "active"
        );
        $("body").removeClass("lock");
    });

    $("#link-to-hero, #link-to-hero-from-footer, #burger-link-to-hero").click(
        function (e) {
            if ($(location)[0].href === currUrl) {
                e.preventDefault();
                $("html, body").animate(
                    {
                        scrollTop: $("#hero").offset().top - 72,
                    },
                    1000
                );
            } else {
                e.preventDefault();
                $(location).attr("href", "/#hero");
            }
            $(
                ".header__burger, .header__nav, .burger-menu_overlay"
            ).removeClass("active");
            $("body").removeClass("lock");
        }
    );
    $("#link-to-project-page").click(function () {
        $(location).attr("href", "/project.html");
    });
    $("#link-to-projects").click(function () {
        $(location).attr("href", "/project-list.html");
    });

    history.pushState("", document.title, window.location.pathname);

    // about us list =============================================================
    $(".burger__open__toggler").click(function (e) {
        e.preventDefault();
        $(
            ".burger__open__toggler, .burger__open__list, .burger__open__arrow, .burger__open"
        ).toggleClass("list-open");
    });

    // buttons click effect =====================================================
    $(".btn-outlined").on("click", function (e) {
        e.preventDefault();
        $('<div class="cursor">')
            .css({
                top: "50%",
                left: "50%",
            })

            .appendTo($(this))
            .on("animationend webkitAnimationEnd", function (e) {
                $(this).remove();
            });
    });
    $(".btn-filled").on("click", function (e) {
        e.preventDefault();
        $('<div class="cursor filled">')
            .css({
                top: "50%",
                left: "50%",
            })

            .appendTo($(this))
            .on("animationend webkitAnimationEnd", function (e) {
                $(this).remove();
            });
    });
    $(".donat-link").on("click", function () {
        $('<div class="cursor filled">')
            .css({
                top: "50%",
                left: "50%",
            })

            .appendTo($(this))
            .on("animationend webkitAnimationEnd", function (e) {
                $(this).remove();
            });
    });

    // sliders ==================================================================

    $(".block-slider").slick({
        dots: true,
        infinite: false,
        arrows: true,
    });
    // $(".block-slider__center-mode.block-tech__slider.tablet-visible").slick({
    //     dots: true,
    //     infinite: false,
    //     variableWidth: true,
    //     centerMode: false,
    // });
    $(window).resize(function () {
        let width = $("body").innerWidth();
        if (width < 1440) {
            $(".block-slider__center-mode.block-tech__slider").addClass(
                "two-slides"
            );
        } else {
            $(".block-slider__center-mode.block-tech__slider").removeClass(
                "two-slides"
            );
        }
    });
    $(".absolute .block-slider__center-mode").slick({
        dots: true,
        infinite: true,
        // centerMode: true,
        variableWidth: true,
        slidesToScroll: 3,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 922,
                settings: {
                    slidesToScroll: 1,
                    // centerMode: true,
                },
            },
        ],
    });
    $(".page-technologies .block-tech__slider__cards__card").click(function (
        e
    ) {
        e.preventDefault;
        $(this).toggleClass("open");
    });

    $(".absolute .block-slider__center-mode.two-slides").slick({
        dots: true,
        infinite: false,
        variableWidth: true,
        slidesToScroll: 2,
    });

    // close-button cookies ===================================================
    $("#cookies-close-btn").click(function () {
        $(".banner-cookies").addClass("js-hidden");
    });

    // service tabs ==============================================================
    $(".block-services__list li h3").click(function () {
        $(".block-services__list li h3").removeClass("js-pressed");
        $(this).addClass("js-pressed");
    });

    $("#block-services__list-1").click(function () {
        $(".block-services div").removeClass("active");
        $(".block-services__slider-wrapper.tablet-visible").removeClass(
            "active"
        );
        $("#block-services__desc-1").addClass("active");
        $("#block-services__desc__tablet-1").addClass("active");
        $("#block-services__auto-slider__1").addClass("active");
    });
    $("#block-services__list-2").click(function () {
        $(".block-services div").removeClass("active");
        $(".block-services__slider-wrapper.tablet-visible").removeClass(
            "active"
        );
        $("#block-services__desc-2").addClass("active");
        $("#block-services__desc__tablet-2").addClass("active");
        $("#block-services__auto-slider__2").addClass("active");
    });
    $("#block-services__list-3").click(function () {
        $(".block-services div").removeClass("active");
        $(".block-services__slider-wrapper.tablet-visible").removeClass(
            "active"
        );
        $("#block-services__desc-3").addClass("active");
        $("#block-services__desc__tablet-3").addClass("active");
        $("#block-services__auto-slider__3").addClass("active");
    });
    $("#block-services__list-4").click(function () {
        $(".block-services div").removeClass("active");
        $(".block-services__slider-wrapper.tablet-visible").removeClass(
            "active"
        );
        $("#block-services__desc-4").addClass("active");
        $("#block-services__desc__tablet-4").addClass("active");
        $("#block-services__auto-slider__4").addClass("active");
    });
    $("#block-services__list-5").click(function () {
        $(".block-services div").removeClass("active");
        $(".block-services__slider-wrapper.tablet-visible").removeClass(
            "active"
        );
        $("#block-services__desc-5").addClass("active");
        $("#block-services__desc__tablet-5").addClass("active");
        $("#block-services__auto-slider__5").addClass("active");
    });
    $("#block-services__list-6").click(function () {
        $(".block-services div").removeClass("active");
        $(".block-services__slider-wrapper.tablet-visible").removeClass(
            "active"
        );
        $("#block-services__desc-6").addClass("active");
        $("#block-services__desc__tablet-6").addClass("active");
        $("#block-services__auto-slider__6").addClass("active");
    });

    // auto-slider ==============================================================

    $(".auto-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        variableWidth: true,
    });

    // email-validation
    // $("#start-project-form input[type=email]").on("blur", function () {
    //     let email = $(this).val();

    //     if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) {
    //         $("#label-email").css({
    //             color: "#B00020",
    //         });
    //         $("#email").css({
    //             "border-bottom": "3px solid #B00020",
    //         });
    //         $("#wrong-email").show();
    //     } else {
    //         $("#label-email").css({
    //             color: "#0D0D0D",
    //         });
    //         $("#email").css({
    //             "border-bottom": "3px solid #0d0d0d",
    //         });
    //         $("#wrong-email").hide();
    //     }

    //     if (email.length === 0) {
    //         $("#label-email").css({
    //             color: "#B00020",
    //         });
    //         $("#email").css({
    //             "border-bottom": "3px solid #B00020",
    //         });
    //         $("#require-email").show();
    //     } else {
    //         $("#require-email").hide();
    //     }
    // });

    // Ukraine pop-up =========================================================
    $(".show_popup").click(function (e) {
        e.preventDefault();
        var popup_id = $("#" + $(this).attr("rel"));
        $(popup_id).css({
            opacity: "1",
            visibility: "visible",
        });
        $(".overlay_popup").css({
            opacity: "1",
            visibility: "visible",
        });
        $("body").addClass("lock");
    });

    // start project pop-up ===================================================
    // $(".show_popup__form").click(function (e) {
    //     e.preventDefault();
    //     let nameProject = $("#name").val();
    //     let emailProject = $("#email").val();
    //     if (
    //         (emailProject.match(/.+?\@.+/g) || []).length == 1 &&
    //         nameProject.length > 0 &&
    //         emailProject.length > 0
    //     ) {
    //         var popup_id = $("#" + $(this).attr("rel"));
    //         $(popup_id).css({
    //             opacity: "1",
    //             visibility: "visible",
    //         });
    //         $(".overlay_popup").css({
    //             opacity: "1",
    //             visibility: "visible",
    //         });
    //         $("body").addClass("lock");
    //     }
    // });

    // pop-up close actions ================================================
    $(".overlay_popup").click(function () {
        $(".overlay_popup, .popup").css({
            opacity: "0",
            visibility: "hidden",
        });
        $("body").removeClass("lock");
    });
    $(".close-x").click(function () {
        $(".overlay_popup, .popup").css({
            opacity: "0",
            visibility: "hidden",
        });
        $("body").removeClass("lock");
    });

    // socials actions ==========================================================
    $("#side-button-right").mouseenter(function () {
        $(".social-icons").css({
            right: "-4px",
            visibility: "visible",
        });
    });
    $(".social-icons").mouseleave(function () {
        $(".social-icons").css({
            right: "-80px",
            visibility: "hidden",
        });
    });

    // name-field require
    // $("#start-project-form input[type=text]").on("blur", function () {
    //     let name = $(this).val();
    //     if (!name.length > 0) {
    //         $("#label-name").css({
    //             color: "#B00020",
    //         });
    //         $("#name")
    //             .css({
    //                 "border-bottom": "3px solid #B00020",
    //             })
    //             .append(`<span>This field is required!</span>`);
    //         $("#require-name").show();
    //     } else {
    //         $("#label-name").css({
    //             color: "#0D0D0D",
    //         });
    //         $("#name").css({
    //             "border-bottom": "3px solid #0d0d0d",
    //         });
    //         $("#require-name").hide();
    //     }
    // });
});

// анімація при скролі до елемента =============================================================================
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint =
                    window.innerHeight - window.innerHeight / animStart;
            }

            if (
                pageYOffset > animItemOffset - animItemPoint &&
                pageXOffset < animItemOffset + animItemHeight
            ) {
                animItem.classList.add("_active");
                // $(".slick-dots, .slick-arrow").addClass("_active");
            } else {
                animItem.classList.remove("_active");
                // $(".slick-dots, .slick-arrow").addClass("_active");
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}
("use strict");

// форма без капчі ======================================================================================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("start-project-form");
    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        if (error === 0) {
            $(".page-contacts").addClass("_sending");

            // тут перевірка на бота
            let tk = "";
            grecaptcha.ready(function () {
                grecaptcha
                    .execute("6LcrEbwiAAAAAEb0f4mfQIBCYtL79cAYE8xtyu9w", {
                        action: "homepage",
                    })
                    .then(function (token) {
                        tk = token;
                        document.getElementById("token").value = token;
                        const data = new URLSearchParams();
                        for (const pair of new FormData(
                            document.querySelector("#start-project-form")
                        )) {
                            data.append(pair[0], pair[1]);
                        }
                        fetch("send.php", {
                            method: "post",
                            body: data,
                        })
                            .then((response) => response.json())
                            .then(async (result) => {
                                if (result["om_score"] >= 0.5) {
                                    console.log("Людина");
                                    let response = await fetch("sendmail.php", {
                                        method: "POST",
                                        body: formData,
                                    });

                                    if (response.ok) {
                                        let result = await response.json();
                                        console.log(result.message);
                                        form.reset();
                                        $(".page-contacts").removeClass(
                                            "_sending"
                                        );
                                        // тут вставити поп ап з донейшнс

                                        $("#popup2").css({
                                            opacity: "1",
                                            visibility: "visible",
                                        });
                                        $(".overlay_popup").css({
                                            opacity: "1",
                                            visibility: "visible",
                                        });
                                        $("body").addClass("lock");
                                    } else {
                                        console.log("Помилка");
                                        $(".page-contacts").removeClass(
                                            "_sending"
                                        );
                                    }
                                } else {
                                    console.log("Бот");
                                }
                            });
                    });
            });
        } else {
            console.log("Fill required inputs");
        }
        function formValidate(form) {
            let error = 0;
            let formReq = document.querySelectorAll("._req");
            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);

                if (input.classList.contains("_email")) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else {
                    if (input.value === "") {
                        formAddError(input);
                        error++;
                    }
                }
            }
            return error;
        }

        function formAddError(input) {
            input.parentElement.classList.add("_error");
            input.classList.add("_error");
        }
        function formRemoveError(input) {
            input.parentElement.classList.remove("_error");
            input.classList.remove("_error");
        }

        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
                input.value
            );
        }
    }
});

// капча =========================================================================================================

// document.querySelector(".form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     let tk = "";
//     grecaptcha.ready(function () {
//         grecaptcha
//             .execute("6LcrEbwiAAAAAEb0f4mfQIBCYtL79cAYE8xtyu9w", {
//                 action: "homepage",
//             })
//             .then(function (token) {
//                 tk = token;
//                 document.getElementById("token").value = token;
//                 const data = new URLSearchParams();
//                 for (const pair of new FormData(
//                     document.querySelector("form")
//                 )) {
//                     data.append(pair[0], pair[1]);
//                 }
//                 fetch("send.php", {
//                     method: "post",
//                     body: data,
//                 })
//                     .then((response) => response.json())
//                     .then((result) => {
//                         if (result["om_score"] >= 0.5) {
//                             console.log("Гомосапіенс");
//                             console.log(data);
//                             sendForm();
//                         } else {
//                             console.log("Бот");
//                         }
//                     });
//             });
//     });
// });
