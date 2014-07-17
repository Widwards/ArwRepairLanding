// JavaScript Document

$(document).ready( function(){
	
	$(function(){
		$('input[placeholder], textarea[placeholder]').placeholder();
	});
	
	/* PIE */
	if (window.PIE) {
		$('nav').each(function() {
		PIE.attach(this);
		});
	}
    var ff;
    $('input[type=text]').focus(function() {
        if($(this).attr('data-place')==$(this).val()) {
            $(this).val('');
        }
        $(this).addClass('active');
        $(this).addClass('ac');
    });
    $('input[type=text]').blur(function() {
        if($(this).val()=='') {
            $(this).val($(this).attr('data-place'));
            $(this).removeClass('ac');
        }
        $(this).removeClass('active');
    });
    $('textarea').focus(function() {
        if($(this).attr('data-place')==$(this).val()) {
            $(this).val('');
        }
    });
    $('textarea').blur(function() {
        ff=$(this).attr('data-place');
        if($(this).val().length==0) {
            $(this).val(ff);
        }
    });
    var ef;
    function ress() {
        $('.bf').each(function() {
            ef=$(this).width()/2;
            $(this).css({'margin-left':-ef});
            ef=$(this).height()/2;
            $(this).css({'margin-top':-ef});
        });
        $('.content1').height((($(window).height())/100)*90-50);
    }
    $(window).load(function() {
        $('input[type=text]').each(function() {
            $(this).attr('data-place',$(this).val());
        });
        $('textarea').each(function() {
            $(this).attr('data-place',$(this).val());
        });
        $('.fl1').flexslider({
            slideshow: false,
            animation: "slide"
        });
        $('.fl2').flexslider({
            animation: "slide",
            animationLoop: false,
            slideshow: false,
            itemWidth: 250
        });
        ress();
    });
    $(window).resize(function() {
        ress();
    });
    var fr=0;
    $('.polt').click(function(e) {
        $('.modal-one').fadeIn(300);
        e.preventDefault();
        if($(".content1").length>0 && fr==0) {
            $(".content1").mCustomScrollbar({
                scrollInertia:550,
                horizontalScroll:false
            });
            fr=1;
        }
    });
    $('.ord').click(function(e) {
        e.preventDefault();
        $('.modal-two').fadeIn(300);
    });
    $('.close,.bg-modal').click(function() {
        $('.modal-one').fadeOut(200);
        $('.modal-two').fadeOut(200);
        $('.modal-tree').fadeOut(200);
    });
    $("a[rel=ex1]").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none'
    });
});//end ready
function showFormCall() {
    $('.fixedfog').fadeIn();
    $('.formcall').fadeIn();
}
function hideFormCall() {
    $('.fixedfog').fadeOut();
    $('.formcall').fadeOut();
}


function sendOrderCall() {
    var sendfrm = true;
    var data1 = $('.formcall form').serialize() + "@FastComputers";
    if (sendfrm) {
        $.ajax({
            type: 'POST',
            url: $('.formcall form').attr('action'),
            data: data1,
            success: function() {
                $('input[type=text]').each(function() {
                    $(this).val($(this).attr('data-place')).removeClass('ac');
                });
                $('.modal-two').fadeOut(200);
                $('.none').removeClass('none');
                $('.black').remove();
                alerta();
                yaCounterXXXXX.reachGoal('ORDER-FORM');
            }
        });
    }
}
function sendOrderCall2() {
    var sendfrm = true;
    var data2 = $('.formcall2 form').serialize() + "@FastComputers";
    if (sendfrm) {
        $.ajax({
            type: 'POST',
            url: $('.formcall2 form').attr('action'),
            data: data2,
            success: function() {
                $('input[type=text]').each(function() {
                    $(this).val($(this).attr('data-place')).removeClass('ac');
                });
                $('.modal-two').fadeOut(200);
                $('.none').removeClass('none');
                $('.black').remove();
                alerta();
                yaCounterXXXXX.reachGoal('ORDER-FORM');
            }
        });
    }
}
function sendOrderCall3() {
    var sendfrm = true;
    var data3 = $('.formcall3 form').serialize() + "@FastComputers";
    if (sendfrm) {
        $.ajax({
            type: 'POST',
            url: $('.formcall3 form').attr('action'),
            data: data3,
            success: function() {
                $('input[type=text]').each(function() {
                    $(this).val($(this).attr('data-place')).removeClass('ac');
                });
                $('.modal-two').fadeOut(200);
                $('.none').removeClass('none');
                $('.black').remove();
                alerta();
                yaCounterXXXXX.reachGoal('ORDER-FORM');
            }
        });
    }
}
function sendOrderCall4() {
    var sendfrm = true;
    var data4 = $('.formcall4 form').serialize() + "@FastComputers";
    if (sendfrm) {
        $.ajax({
            type: 'POST',
            url: $('.formcall4 form').attr('action'),
            data: data4,
            success: function() {
                $('input[type=text]').each(function() {
                    $(this).val($(this).attr('data-place')).removeClass('ac');
                });
                $('.modal-two').fadeOut(200);
                $('.none').removeClass('none');
                $('.black').remove();
                alerta();
                yaCounterXXXXX.reachGoal('ORDER-FORM');
            }
        });
    }
}
function proper1() {
    $('.none').removeClass('none');
    if($('input[name=name]').val()=='Ваше имя'||$('input[name=telef]').val()=='Телефон') {
        if($('input[name=name]').val()=='Ваше имя') {
            $('input[name=name]').addClass('none');
        }
        if($('input[name=telef]').val()=='Телефон') {
            $('input[name=telef]').addClass('none');
        }
    }
    else {
        sendOrderCall();
        $('.btns').append('<span class="black"></span>');
    }
}
function proper2() {
    $('.none').removeClass('none');
    if($('input[name=name2]').val()=='Ваше имя'||$('input[name=telef2]').val()=='Телефон') {
        if($('input[name=name2]').val()=='Ваше имя') {
            $('input[name=name2]').addClass('none');
        }
        if($('input[name=telef2]').val()=='Телефон') {
            $('input[name=telef2]').addClass('none');
        }
    }
    else {
        sendOrderCall2();
        $('.btns').append('<span class="black"></span>');
    }
}
function proper3() {
    $('.none').removeClass('none');
    if($('input[name=name3]').val()=='Ваше имя'||$('input[name=telef3]').val()=='Телефон') {
        if($('input[name=name3]').val()=='Ваше имя') {
            $('input[name=name3]').addClass('none');
        }
        if($('input[name=telef3]').val()=='Телефон') {
            $('input[name=telef3]').addClass('none');
        }
    }
    else {
        sendOrderCall3();
        $('.btns').append('<span class="black"></span>');
    }
}
function proper4() {
    $('.none').removeClass('none');
    if($('input[name=name4]').val()=='Ваше имя'||$('input[name=telef4]').val()=='Телефон') {
        if($('input[name=name4]').val()=='Ваше имя') {
            $('input[name=name4]').addClass('none');
        }
        if($('input[name=telef4]').val()=='Телефон') {
            $('input[name=telef4]').addClass('none');
        }
    }
    else {
        sendOrderCall4();
        $('.btns').append('<span class="black"></span>');
    }
}
function alerta() {
    $('.modal-tree').fadeIn();
    setTimeout(function() {
        $('.modal-tree').fadeOut();
    },5000);
}