var cart = '';
var cartAct = '';
var cartClose = '';
var map = '';
var mapAct = '';
var mapClose = '';

$(document).ready(function(){ 
    indexInit();
    btnActive(cart, cartAct, cartClose);
    btnActive(map, mapAct, mapClose);
    gnbActive();
    gnbMobileActive();
    bannerMove();
    cartTotalPrice();
});

function indexInit(){
    cart = $('aside.cartArea');
    cartAct = $('header div span button');
    cartClose = $('aside.cartArea div > button');
    map = $('footer .mapPopup');
    mapAct = $('footer div:nth-child(2) ul li button.popupBtn');
    mapClose = $('footer .mapPopup button');    
}

function btnActive(object, activeBtn, closeBtn){
    $(activeBtn).click(function(){
        object.addClass('active');
    });
    $(closeBtn).click(function(){
        object.removeClass('active');
    });
}

function gnbActive(){
    $('header nav > ul').click(function(){
        var mediaQuery = $(window).width();
        if(767 < mediaQuery < 1280){
            $(this).toggleClass("active");
        }
    });
}
function gnbMobileActive(){
    var mobileQuery = $(window).width();
    if(mobileQuery < 768){
        navActive();
        lnbActive();
    }
}
function navActive(){
    $('header div > button.navMui').click(function(){
        $('header nav').toggleClass('active');
    });
}
function lnbActive(){
    $('header nav > ul > li').click(function(){
        $(this).toggleClass('active');
    });
}

function bannerMove(){
    var $bannerSelect = $('header > ul:first-child li');
    var numb = 0;
    setInterval(function(){
        if(numb < 2){
            $bannerSelect.eq(numb).fadeOut(500);
            $bannerSelect.eq(numb+1).fadeIn(1000);
            numb++
        }else{
            $bannerSelect.eq(numb).fadeOut(500);
            $bannerSelect.eq(0).fadeIn(1000);
            numb = 0;
        }
    },3500);
}

function cartTotalPrice(){
    $('aside.cartArea div form ul li fieldset button').click(function(){
        var cartOperator = $(this).text();
        var cartPriceName = $(this).attr('class');
        var cartPrice = Number($('aside.cartArea div form ul li fieldset a span.'+cartPriceName).text());
        
        if(cartOperator == "＋"){
            var cartAddQuantity = Number($(this).prev().val());
            cartAddQuantity += 1;
            $(this).prev().val(cartAddQuantity);
            $('#'+cartPriceName).val(cartAddQuantity * cartPrice);
        }else if(cartOperator == "－"){
            var cartSubQuantity = Number($(this).next().val());
            cartSubQuantity -= 1;
            $(this).next().val(cartSubQuantity);
            $('#'+cartPriceName).val(cartSubQuantity * cartPrice);
            if(cartSubQuantity < 1){
                cartSubQuantity = 1;
                $(this).next().val(cartSubQuantity);
            }
            $('#'+cartPriceName).val(cartSubQuantity * cartPrice);
        }
        
        var firstPrice = Number($('aside.cartArea div form ul li:first-child fieldset > input[id$="_Price"]').val());
        var lastPrice = Number($('aside.cartArea div form ul li:last-child fieldset > input[id$="_Price"]').val());
        $('aside.cartArea div form > input[type="text"]').val(firstPrice + lastPrice);
    });
}