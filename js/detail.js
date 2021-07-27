var mainImg = '';
var pngImg = '';
var jpgImg = '';
var styleImg = '';
var styleArea = '';

$(document).ready(function(){
    foldFlex();
    detailInit();
    btnSelect(".information li:nth-of-type(2) input[type='button']",".information li input[type='button']");
    btnSelect("ul.information li:nth-child(3) input[type='button']","ul.information li:nth-child(3) input[type='button']")
    totalPrice();
    imgChange();
    detailTab();
    colorChange();
});

function detailInit(){
    mainImg = $('.detailContainer > img');
    pngImg = $('.detailContainer .info img');
    jpgImg = $('.detailContainer .point img');
    styleImg = $('.detailContainer .style img');
    styleArea = $('.style');
}

function btnSelect(selectBtn, classChange){
    $(selectBtn).click(function(){
        $(classChange).removeClass('active');
        $(this).addClass('active');
    });
}

function foldFlex(){
    var foldWidth = $(window).width();
    if(foldWidth < 320){
        $('section.detailContainer .wrap form fieldset ul.information li[class="fiveColor"]').addClass('fold');
        window.onresize = function(){
            document.location.reload();
        }
    }else if(foldWidth > 320){
        $('section.detailContainer .wrap form fieldset ul.information li[class="fiveColor"]').removeClass('fold');
        window.onresize = function(){
            document.location.reload();
        }
    }
}

function totalPrice(){
    var probQuantity = Number($('section.detailContainer .wrap form fieldset ul.information li:nth-child(4) input[type="text"]').val());
    var price = Number($('section.detailContainer .wrap form fieldset ul.information li:last-child input[type="text"]').val());

    $('section.detailContainer .wrap form fieldset ul.information li:nth-child(4) button').click(function(){
        var operator = $(this).text();
        
        switch(operator){
            case "+":
                probQuantity += 1;
                break;
            case "-":
                probQuantity -= 1;
                if(probQuantity < 1){
                    probQuantity = 1;
                }
                break;
        }
        $('section.detailContainer .wrap form fieldset ul.information li:nth-child(4) input[type="text"]').val(probQuantity);
        $('section.detailContainer .wrap form fieldset ul.information li:last-child input[type="text"]').val(price * probQuantity);
    });
}

function imgChange(){
    $('.information li:nth-of-type(2) input[type="button"]').click(function(){
        var color = $(this).attr('value');
        var currentFileName = document.URL.substring(document.URL.lastIndexOf("/") + 8, document.URL.lastIndexOf("."));
        var pngFrontName = "images/ld_" + currentFileName + "_" + color + "_f.png";
        var pngBackName = "images/ld_" + currentFileName + "_" + color + "_b.png";
        var jpgName = "images/d_" + currentFileName + "_" + color + "_detail0";
        var styleName = "images/d_" + currentFileName + "_" + color + "_style0";
        var styleHave = $(this).attr('name');

        mainImg.attr("src", pngFrontName);
        
        for(var i = 0; i < pngImg.length; i++){
            pngNumb = pngImg.eq(i);
            if(i == 1){
                pngNumb.attr("src",pngBackName);
            }else{
                pngNumb.attr("src",pngFrontName);
            }
        }
        
        for(var j = 0; j < jpgImg.length; j++){
            jpgNumb = jpgImg.eq(j);
            jpgNumb.attr("src", jpgName + (j+1) + '.jpg');
        }
        
        if(styleHave == 'styleHave'){
            var img = new Image();
            img.src = "images/d_" + currentFileName + "_" + color + "_style01.png";
            img.onload = function have(){
                styleArea.removeClass('active');
                styleArea.addClass('active');
                for(var k = 0; k < styleImg.length; k++){
                    styleNumb = styleImg.eq(k);
                    styleNumb.attr("src",styleName + (k+1) + '.png');
                }
            }
        }else{
            styleArea.removeClass('active');
        }
    });
}

function colorChange(){
    var defaultClass = $('.information li:nth-of-type(2) input[type="button"]').attr('class');
    color(defaultClass);
    $('.information li:nth-of-type(2) input[type="button"]').click(function(){
        activeBtn = $(this).attr('class');
        color(activeBtn);
    });
}

function color(colorClass){
    if(colorClass == 'blueBlack active'){
        $('.info.page > figure').css('background-color','rgba(2,0,23,0.3)');
        $('.info.page > p:last-of-type').css('background-color','rgba(2,0,23,0.1)');
    }else if(colorClass == 'pink active'){
        $('.info.page > figure').css('background-color','rgba(247,143,175,0.3)');
        $('.info.page > p:last-of-type').css('background-color','rgba(247,143,175,0.1)');
    }else if(colorClass == 'blue active'){
        $('.info.page > figure').css('background-color','rgba(108,202,183,0.3)');
        $('.info.page > p:last-of-type').css('background-color','rgba(108,202,183,0.1)');
    }else if(colorClass == 'ivory active'){
        $('.info.page > figure').css('background-color','rgba(180,159,136,0.3)');
        $('.info.page > p:last-of-type').css('background-color','rgba(180,159,136,0.1)');
    }else if(colorClass == 'gray active'){
        $('.info.page > figure').css('background-color','rgba(54,54,54,0.3)');
        $('.info.page > p:last-of-type').css('background-color','rgba(54,54,54,0.1)');
    }else if(colorClass == 'yellow active'){
        $('.info.page > figure').css('background-color','rgba(150,164,0,0.3)');
        $('.info.page > p:last-of-type').css('background-color','rgba(150,164,0,0.1)');
    }else if(colorClass == 'khaki active'){
        $('.info.page > figure').css('background-color','rgba(75,90,0,0.3)');
        $('.info.page > p:last-of-type').css('background-color','rgba(75,90,0,0.1)');
    }else if(colorClass == 'red active'){
        $('.info.page > figure').css('background-color','rgba(255,60,0,0.3)');
        $('.info.page > p:last-of-type').css('background-color','rgba(255,60,0,0.1)');
    }else{
        $('.info.page > figure').css('background-color','rgba(124,66,3,0.3)');
        $('.info.page > p:last-of-type').css('background-color','rgba(124,66,3,0.1)');
    }
}



function detailTab(){
    $('section.detailContainer > .tabMenu li').click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        $('section.detailContainer > .tabMenu li').removeClass('btn_b active');
        $('section.detailContainer > .tabMenu li').removeClass('btn_w');
        $(this).addClass('btn_b');
        $(this).siblings().addClass('btn_w');
        $(this).addClass('active');
        
        $("section.detailContainer > table, form fieldset").removeClass('active');
        $("#"+activeTab).addClass('active');
    });
}


