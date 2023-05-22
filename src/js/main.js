'use strict';
$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $(function(){
        $('.mask_ph').mask("+7 (999) 999-9999");
    });

    $('.mag-pop-image').magnificPopup({
        type: 'image'
    });

    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.slider').slick({
        slidesToShow: 1,
        centerMode: true,
        dots: true,
        centerPadding: "15%",
        speed: 500
    });

    $(".nav-link").click(function () {
        if (!$(this).is('.nav-link-active')) {
            $('.nav-link').removeClass('nav-link-active');
            $(this).addClass("nav-link-active");
        }
    });

    $(".btn_thi").click(function () {
        if (!$(this).next().is('.thi_a')) {
            $('.btn_thi').next().removeClass('thi_a');
            $(this).next().addClass("thi_a");
        }
    })


    let loader = $('.loader');
    let buttonSPop = $('#order-button-popup');
    let buttonS = $('#order-submit');

    function checkInput(checkSib) {
        let check2span = $(this).parent().children().children('.check2span');
        let check2 = $(this).parent().children().children('.custom-checkbox-a');
        let name = $(this).parent().find('.butName');
        let phone = $(this).parent().find('.butPhone');
        let parentO = $('.massBtn').parent();
        let hasError = false;
        let thanks = $('.thanks');
        loader.css('display', 'flex');
        name.css('border-color', 'white');
        phone.css('border-color', 'white');
        check2span.css('color', 'white');
        check2.css('color', 'white');
        $('.error-input').hide();

        if (!check2.is(":checked"))  {
                    window.alert('Дайте свое согласие на обработку данных!');
                    check2span.css('color', 'red');
                    hasError = true;
                    loader.hide();

                }

        if (!name.val()) {
            name.next().show();
            name.css('border-color', 'red');
            hasError = true;
            loader.hide();

        }
        if (!phone.val()) {
            phone.next().show();
            phone.css('border-color', 'red');
            hasError = true;
            loader.hide();

        }
        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "http://testologia.site/checkout",
                data: { name: name.val(), phone: phone.val() }
            })
                .done(function( msg ) {
                    loader.hide();
                    console.log(msg)
                    if (msg.success) {
                        parentO.parent().children('.h5_popup').hide();
                        parentO.parent().children('.feedback-right-h2').hide();
                        parentO.hide();
                        thanks.css('display', 'flex');

                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');

                    }

                });
        }

    }

    buttonS.click(checkInput);
    buttonSPop.click(checkInput);




});