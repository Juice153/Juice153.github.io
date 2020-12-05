$(document).ready(function() {
    let button = $('button');
    let notice = $('.notice');
    button.click(function() {
        if (notice.css('display') === 'none') {
            notice.css('display', 'block');
            notice.addClass('magictime tinLeftIn');
        } else {
            notice.removeClass('tinLeftIn');
            notice.css('display', 'none');
        }
    });
});



$(document).ready(function() {
    let buttoon = $('buttono');
    let noticee = $('.noticee');
    button.click(function() {
        if (noticee.css('display') === 'none') {
            noticee.css('display', 'block');
            noticee.addClass('magictime tinLeftIn');
        } else {
            noticee.removeClass('tinLeftIn');
            noticee.css('display', 'none');
        }
    });
});