import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(document).ready(function () {
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
    $(".marquee").marquee({
        duration: 7000,
        startVisible: true,
        duplicated: true,
    });
    $(".block-slider").slick({
        dots: true,
        infinite: true,
    });
    $(".block-slider__center-mode").slick({
        dots: true,
        infinite: false,
        // centerMode: true,
    });

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
});
