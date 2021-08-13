import $ from 'jquery';



$('.players__chouse').click (function() {
    $(this).siblings().removeClass('players__chouse-activ');
    $(this).addClass('players__chouse-activ');
})