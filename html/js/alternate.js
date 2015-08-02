$(function(){
    $('#btn-login').click(function(){ $('#loginModal').modal(); })
    $('#btn-signup').click(function(){ $('#signupModal').modal(); })
    $('#toSignin').click(function(){
        $('#loginModal').modal('hide');
        setTimeout(function(){
            $('#signupModal').modal('show');
        }, 1000);
    })
    $('#toLogin').click(function(){
        $('#signupModal').modal('hide');
        setTimeout(function(){
            $('#loginModal').modal('show');
        }, 1000);
    })

    $('#LoginForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            'password': {
                required: "Please enter your password"
            },
            'email': {
                required: "Please enter a valid email address",
                email: "Please enter a valid email address"
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
            $(element).closest('.control-group').find('.validation-feedback').find('i').removeClass('fa-check-circle').addClass('fa-minus-circle');
            $(element).closest('.control-group').find('.validation-feedback').show();
            $(element).closest('.modal').delay(1000).find('.error-feedback').slideDown();
        },
        success: function (element) {
            element.hide().addClass('valid').closest('.control-group').removeClass('error').addClass('success');
            $(element).closest('.control-group').find('.validation-feedback').find('i').removeClass('fa-minus-circle').addClass('fa-check-circle');
            $(element).closest('.control-group').find('.validation-feedback').show();
            $(element).closest('.modal').find('.error-feedback').delay(1000).slideUp();
        }
    });

    $('#signupForm').validate({
        rules: {
            username: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            spassword: {
                required: true
            },
            'conf_password': {
                required: true,
                equalTo: "#spassword"
            }
        },
        messages: {
            'conf_password': {
                equalTo: "Passwords are not same"
            },
            'username': {
                required: "Please enter your name"
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
            $(element).closest('.control-group').find('.validation-feedback').find('i').removeClass('fa-check-circle').addClass('fa-minus-circle');
            $(element).closest('.control-group').find('.validation-feedback').show();
            $(element).closest('.modal').find('.error-feedback').slideDown();
        },
        success: function (element) {
            element.hide().addClass('valid').closest('.control-group').removeClass('error').addClass('success');
            $(element).closest('.control-group').find('.validation-feedback').find('i').removeClass('fa-minus-circle').addClass('fa-check-circle');
            $(element).closest('.control-group').find('.validation-feedback').show();
            $(element).closest('.modal').find('.error-feedback').delay(1000).slideUp();
        }
    });

    $('#respwdForm').validate({
        rules: {
            
            spassword: {
                required: true
            },
            'conf_password': {
                required: true,
                equalTo: "#spassword"
            }
        },
        messages: {
            'conf_password': {
                equalTo: "Passwords are not same"
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
            $(element).closest('.control-group').find('.validation-feedback').find('i').removeClass('fa-check-circle').addClass('fa-minus-circle');
            $(element).closest('.control-group').find('.validation-feedback').show();
            $(element).closest('.modal').find('.error-feedback').slideDown();
        },
        success: function (element) {
            element.hide().addClass('valid').closest('.control-group').removeClass('error').addClass('success');
            $(element).closest('.control-group').find('.validation-feedback').find('i').removeClass('fa-minus-circle').addClass('fa-check-circle');
            $(element).closest('.control-group').find('.validation-feedback').show();
            $(element).closest('.modal').find('.error-feedback').delay(1000).slideUp();
        }
    });

    $('#resendEmail').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#emailFeedback').text("Sending Another Email...").delay(1500).text("We've sent another email to you");
    });

    $('.carousel').carousel('pause');
    $('#npoCarousel .carousel-indicators').hide();

    $('#btnStartYes').click(function(){
        $(this).closest('.carousel').carousel('next');
        $('.carousel-indicators').delay(1000).slideDown();

    });

    $('#btnDonate').click(function(){
        $('#donateModal').modal();
    })


    $('#selectAmount').selectOrDie({
        prefix: "DOLLARS",
        onChange: function(){
            var amtvalue = $(this).val();
            var length = amtvalue.length - 2;
            var dynamic_width = 160 + 15*length;
            $('#selAmount').css('width', dynamic_width);
        }
    })
    $('#selAmount .sod_list').append('<span class="sod_option custom"><small>Type Your Own Amount</small><input class="customAmt" type="text"><small>dollars</small></span>');
    
    $('.sod_list').on('change','.customAmt',function(){
        var amtvalue = $(this).val();
        var length = amtvalue.length - 2;
        var dynamic_width = 160 + 15*length;
        $('#selAmount').css('width', dynamic_width);
        $('#selectAmount').append('<option value="'+amtvalue+'" selected>'+amtvalue+'</option>').selectOrDie("update");
        $('#selAmount .sod_list').append('<span class="sod_option custom"><small>Type Your Own Amount</small><input class="customAmt" type="text"><small>dollars</small></span>');
    });

    $('.select-giving').selectOrDie();

    $('#donateLoggedModal').modal('show');

     $('.widget').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            if($(this).hasClass('fadeIn')){$(this).removeClass('animated fadeIn')}
            if($(this).hasClass('fadeOut')){$(this).removeClass('animated fadeOut')}
        });
     

    $('.Anon .yes').click(function(){
        $(this).closest('div').find('button.active').removeClass('active');
        $(this).addClass('active');
        $('.Tax .no').addClass('active');

        var isFirst = $('.Tax > .widget.active').next().length;
        if(isFirst == 1){

            $('.Anon .box-footer > .widget.active').removeClass('active').next().addClass('active animated fadeIn');
            $('.Tax .box-footer > .widget.active').removeClass('active').next().addClass('active');
        }else{
            if($('.Anon .box-footer > .widget.active').prev().length == 1){
                $('.Anon .box-footer > .widget.active').removeClass('active').prev().addClass('active animated fadeIn');
            }else{
                $('.Anon .box-footer > .widget.active').removeClass('active').next().addClass('active animated fadeIn');
            }
            $('.Tax > .widget.active').removeClass('active').prev().addClass('active animated fadeIn');
        }
    })

    $('.Anon .no').click(function(){
        $(this).closest('div').find('button.active').removeClass('active');
        $(this).addClass('active');
        $('.Tax .no').removeClass('active')
        var isFirst = $('.Tax > .widget.active').next().length;
        console.log(isFirst);
        $('.Tax > .widget.active').removeClass('active').next().addClass('active animated fadeIn');
        if($('.Anon .box-footer > .widget.active').prev().length == 1){
            $('.Anon .box-footer > .widget.active').removeClass('active').prev().addClass('active animated fadeIn');
        }else if(isFirst == 1){
            //do nothing
        }
        else{
            $('.Anon .box-footer > .widget.active').removeClass('active').next().addClass('active animated fadeIn');
        }
    })

     $('.Tax .yes').click(function(){
        // $('.Anon .choice-buttons').find('button.active').removeClass('active').addClass('active');
        // $(this).addClass('active');
        $('.Anon .choice-buttons').find('button.active').removeClass('active');

        $('.Anon .no').addClass('active');

        $('.Tax > .widget.active').removeClass('active').next().addClass('active animated fadeIn');
    })

    $('.switch').bootstrapSwitch({
        offColor: "danger",
        onColor:  "success",
        offText: "NO",
        onText:  "YES"

    });

    //Adds titles to custom checkboxes in set-up-donation
    $('.cause-box').each(function(){
        label = $(this).find('label');
        chkBox = $(this).find('input[type=checkbox]');
        content = label.attr('data-content');
        inputId =   chkBox.attr('id');
        addRule(".cause-box input[type=checkbox]#"+inputId+" + label:before", {
        content: content
        });
    })

     $('#ipc_status').bootstrapSwitch({
        offColor: "danger",
        onColor:  "success",
        offText: "NO",
        onText:  "YES",
        onSwitchChange: function(event, state){
            message_elem = $('#ipc_data');

            if(state == true)
            {
                message_elem.text("Minimum Amount");
            }
            else{
                message_elem.text("Charity Status");
            }
        }
     });

    $('.select-giving-autofit').selectOrDie({
         onChange: function(){
            var amtvalue = $(this).val();
            var length = amtvalue.length - 2;
            var dynamic_width = 70 + 15*length;
            $(this).closest('.sod_select').css('width', dynamic_width);
        }
    });

    var winWidth = $(window).innerWidth();

    var $things = $('.acc-section');

    $things.waypoint(function(direction) {
      if (direction === 'down') {
        if(winWidth > 979 ){
            $('.donation-wrapper').find('.focused').removeClass('focused');
            $(this.element).addClass('focused');
        }
      }
    }, {
      offset: '40%'
    });

    $things.waypoint(function(direction) {
      if (direction === 'up') {
        if(winWidth > 979 ){
            $('.donation-wrapper').find('.focused').removeClass('focused');
            $(this.element).addClass('focused');
        }
      }
    }, {
      offset: '0%'
    });


    $(window).resize(function(){
        var winWidth = $(window).innerWidth();
        createMobSlider(winWidth)
    })
    createMobSlider(winWidth);

    // Creating accordions on body resize

    $('.acc-toggle').click(function(e){
      if ($(window).width() >= 768) {  
        e.stopPropagation();
      }    
    });

    $('.refine-inputs input[type=checkbox]').prop('checked',true);

    if($('.gf-bkt').length){
        $('.gf-bkt').editableTableWidget();
    }

    $('#setup-dtn-carousel').carousel();

    $('#setup-dtn-conf-submission').click(function(){
        $(this).closest('.boxed.span12').addClass('animated fadeOutLeft').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
           $(this).removeClass('animated fadeOutLeft').addClass('hide').next('.boxed.span12').removeClass('hide').addClass('animated fadeInRight');
        });
    })

    $('.donate-trig').click(function(){
        $('#donationAmt').modal();
    });

    function createMobSlider(winWidth){
        //initialize campaign suggestions swiper when document ready  
        if(winWidth < 768){
            console.log(winWidth)
            var causesSwiper = new Swiper ('#causes-mobile', {
              // parameters
                slidesPerView:'auto',
                spaceBetween:15,
                mode: 'horizontal',
                freeMode: true
            })  
        }
    }

    $('.swiper-container').each(function(){
        new Swiper($(this), {
            pagination: $(this).find('.swiper-pagination'),
            paginationClickable: $(this).find('.swiper-pagination'),
            nextButton: $(this).find('.swiper-button-next'),
            prevButton: $(this).find('.swiper-button-prev'),
            loop: true,
            slidesPerView:'auto',
            spaceBetween:15,
            mode: 'horizontal',
            freeMode: true
        });
    });
    $('.swiper-container-3').each(function(){
        new Swiper($(this), {
            pagination: $(this).find('.swiper-pagination'),
            paginationClickable: $(this).find('.swiper-pagination'),
            nextButton: $(this).find('.swiper-button-next'),
            prevButton: $(this).find('.swiper-button-prev'),
            loop: true,
            scrollbar: $(this).find('.swiper-scrollbar') ,
            scrollbarHide: true,
            slidesPerView:"auto",
            spaceBetween:20,
            mode: 'horizontal',
            freeMode: true
        });
    });

     //initialize Campaign Landing swiper when document ready  
    var campaignLandingSwiper = new Swiper ('.landing-cpn-slider-wrapper', {
        pagination: '.swiper-pagination',
        sliderPerView: 1,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })        
    
    $('#custom-amt-input-modal>input').change(function(){
        amt = $(this).val();
        console.log('cnahbed to '+amt);
        $('#user-input-holder').text("ADDED "+amt+" DOLLARS TO");
        $('#user-input-holder').closest('button').addClass('with-amount').next().addClass('hide');
        $('#donationAmt').modal('hide');
    })

     $('#donationAmt .dtn-amt-item').click(function(){
        amt = parseInt($(this).find('.dtn-amt h3').text());
        console.log('Clicked amount '+amt);
        $('#user-input-holder').text("ADDED "+amt+" DOLLARS TO");
        $('#user-input-holder').closest('button').addClass('with-amount').next().addClass('hide');
        $('#donationAmt').modal('hide');
    });
     
    $('#toggleReadmore').click(function(){
        content = $('#cpn-body');
        if(content.hasClass('closed')){
            content.removeClass('closed').addClass('open');
            $(this).text('+ HIDE DETAILS');
        }
        else{
            content.removeClass('open').addClass('closed');
            $(this).text('+ MORE DETAILS');
        }
    });

    $('.open-more').each(function(){
        $(this).click(function(){
            target = $(this).attr('data-target');
            if($(target).hasClass('open')){
                $('html, body').animate( { scrollTop: $(target).offset().top-180 }, {duration: 500 } );
                $(target).removeClass('open').addClass('closed');
                $(this).text('MORE');
            }
            else{
                $(target).removeClass('closed').addClass('open');
                $(this).text('LESS');
            }
        })
    })
    var cp_client = new ZeroClipboard($("#copy-url"));


    /* ----------------------------------------------------
            MATCHING HEIGHTS OF ELEMENTS
     ----------------------------------------------------*/

   $('.cpn-slide-right').matchHeight({
    target: $('.cpn-slide-left')
    });

   $('.match-height-abt-impact').matchHeight();
   // $('.cpn-suggestions .cpn-sgtn-item').matchHeight();
   // $('.cpn-wrapper').matchHeight({
   //  target: $('.cpn-suggestions .cpn-sgtn-item')
   // });

})


/* This function inserts css to head section of html dynamically.Being used to set content
for pseudo elements in the custom checkboxes*/

var addRule = (function (style) {
    var sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
        var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
            return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    };
})(document.createElement("style"));


