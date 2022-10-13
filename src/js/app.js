import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(document).ready(function () {
    // language select
    $(".language-select").click(function () {
        $(this).toggleClass("open");
        var open = $(this).attr("class");
    });
    $(".language-select .language-option").click(function () {
        var setLang = $(".language-select").data("location"),
            dataLangSelect = $(this).data("lang");
        $(".language-select").data("location", dataLangSelect);
        $(".language-select .language-option").removeClass("active");
        $(this).toggleClass("active");
    });

    // buttons click effect
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

    // running text
    $(".marquee").marquee({
        duration: 7000,
        startVisible: true,
        duplicated: true,
    });

    // sliders
    $(".block-slider").slick({
        dots: true,
        infinite: true,
    });
    $(".block-slider__center-mode").slick({
        dots: true,
        infinite: false,
        // centerMode: true,
    });

    // service tabs
    $("#cookies-close-btn").click(function () {
        $(".banner-cookies").addClass("js-hidden");
    });

    $(".block-services__list li h3").click(function () {
        $(".block-services__list li h3").removeClass("js-pressed");
        $(this).addClass("js-pressed");
    });

    $("#block-services__list-1").click(function () {
        $(".block-services__desc div").removeClass("active");
        $("#block-services__desc-1").addClass("active");
    });
    $("#block-services__list-2").click(function () {
        $(".block-services__desc div").removeClass("active");
        $("#block-services__desc-2").addClass("active");
    });
    $("#block-services__list-3").click(function () {
        $(".block-services__desc div").removeClass("active");
        $("#block-services__desc-3").addClass("active");
    });
    $("#block-services__list-4").click(function () {
        $(".block-services__desc div").removeClass("active");
        $("#block-services__desc-4").addClass("active");
    });
    $("#block-services__list-5").click(function () {
        $(".block-services__desc div").removeClass("active");
        $("#block-services__desc-5").addClass("active");
    });
    $("#block-services__list-6").click(function () {
        $(".block-services__desc div").removeClass("active");
        $("#block-services__desc-6").addClass("active");
    });

    // email-validation
    $("#start-project-form input[type=email]").on("blur", function () {
        let email = $(this).val();

        if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) {
            $("#label-email").css({
                color: "#B00020",
            });
            $("#email").css({
                "border-bottom": "3px solid #B00020",
            });
            $("#wrong-email").show();
        } else {
            $("#label-email").css({
                color: "#0D0D0D",
            });
            $("#email").css({
                "border-bottom": "3px solid #0d0d0d",
            });
            $("#wrong-email").hide();
        }

        if (email.length === 0) {
            $("#label-email").css({
                color: "#B00020",
            });
            $("#email").css({
                "border-bottom": "3px solid #B00020",
            });
            $("#require-email").show();
        } else {
            $("#require-email").hide();
        }
    });

    // Ukraine pop-up
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
    });
    // start project pop-up

    $(".show_popup__form").click(function (e) {
        e.preventDefault();
        let nameProject = $("#name").val();
        let emailProject = $("#email").val();
        console.log(nameProject, emailProject);
        if (
            (emailProject.match(/.+?\@.+/g) || []).length == 1 &&
            nameProject.length > 0 &&
            emailProject.length > 0
        ) {
            var popup_id = $("#" + $(this).attr("rel"));
            $(popup_id).css({
                opacity: "1",
                visibility: "visible",
            });
            $(".overlay_popup").css({
                opacity: "1",
                visibility: "visible",
            });
        }
    });

    // pop-up inside
    $(".overlay_popup").click(function () {
        $(".overlay_popup, .popup").css({
            opacity: "0",
            visibility: "hidden",
        });
    });
    $(".close-x").click(function () {
        $(".overlay_popup, .popup").css({
            opacity: "0",
            visibility: "hidden",
        });
    });
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
    $("#start-project-form input[type=text]").on("blur", function () {
        let name = $(this).val();
        if (!name.length > 0) {
            $("#label-name").css({
                color: "#B00020",
            });
            $("#name")
                .css({
                    "border-bottom": "3px solid #B00020",
                })
                .append(`<span>This field is required!</span>`);
            $("#require-name").show();
        } else {
            $("#label-name").css({
                color: "#0D0D0D",
            });
            $("#name").css({
                "border-bottom": "3px solid #0d0d0d",
            });
            $("#require-name").hide();
        }
    });
});
