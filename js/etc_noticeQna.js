$(document).ready(function(){
    noticeQnaTab();
    qnaAccordion();
});

function noticeQnaTab(){
    $('section.etcNotice_qnaBox ul:first-of-type li').click(function(){
        var activeTab = $(this).attr('data-tabNumb');
        $('section.etcNotice_qnaBox ul:first-of-type li').removeClass('active');
        $(this).addClass('active');

        $('section.etcNotice_qnaBox ul:not(:first-of-type)').removeClass('active');
        $('#'+activeTab).addClass('active');
        $('section.etcNotice_qnaBox .pager').removeClass('active');
        $('.'+activeTab).addClass('active');
    });
}

function qnaAccordion(){
    $('section.etcNotice_qnaBox ul#qnaTab li p span').hide();
    $('section.etcNotice_qnaBox ul#qnaTab li p strong').click(function(){
        $(this).next().stop().slideToggle(500, 'linear');
    });
}