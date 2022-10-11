import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(document).ready(function () {
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
});
