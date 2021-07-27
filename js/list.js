
$(document).ready(function(){
    wishHeart();
});

function wishHeart(){
    $('section.listArea ul.listLine li button.material-icons').click(function(){
        var heartText = $(this).text()
        if(heartText=='favorite_border'){
            $(this).text('favorite');
        }else{
            $(this).text('favorite_border');
        }
    });
}