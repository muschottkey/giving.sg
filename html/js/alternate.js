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
    $('.carousel-indicators').hide();

    $('#btnStartYes').click(function(){
        $(this).closest('.carousel').carousel('next');
        $('.carousel-indicators').delay(1000).slideDown();

    });

    $('#btnDonate').click(function(){
        $('#donateModal').modal();
    })


    $('#selectAmount').selectOrDie({
        prefix: "DOLLARS"
    })
    $('#selAmount .sod_list').append('<span class="sod_option custom"><small>Enter Your own amount</small><input class="customAmt" type="text"><small>dollars</small></span>');
    
    $('.sod_list').on('change','.customAmt',function(){
        var amtvalue = $(this).val();
        var length = amtvalue.length;
        console.log("changed");
        if(length >= 5 ){
            $('#selAmount').addClass('long_input');
        }
        $('#selectAmount').append('<option value="'+amtvalue+'" selected>'+amtvalue+'</option>').selectOrDie("update");
        $('#selAmount .sod_list').append('<span class="sod_option custom"><small>Enter Your own amount</small><input class="customAmt" type="text"><small>dollars</small></span>');
    });

    $('.select-giving').selectOrDie();

    $('#donateLoggedModal').modal('show');

    $('.Anon .yes').click(function(){
        $(this).closest('div').find('button.active').removeClass('active');
        $(this).addClass('active');
        $('.Tax .no').addClass('active');

        var isFirst = $('.Tax > .widget.active').next().length;
        if(isFirst == 1){
            // do nothing
            $('.Anon .box-footer > .widget.active').removeClass('active').next().addClass('active')
            $('.Tax .box-footer > .widget.active').removeClass('active').next().addClass('active')
        }else{
            $('.Tax > .widget.active').removeClass('active').prev().addClass('active')
        }
    })

     $('.Anon .no').click(function(){
        $(this).closest('div').find('button.active').removeClass('active');
        $(this).addClass('active');
        $('.Tax .no').removeClass('active')
        var isFirst = $('.Tax > .widget.active').next().length;
        if(isFirst == 1){
            $('.Tax > .widget.active').removeClass('active').next().addClass('active')
        }else{
            $('.Tax > .widget.active').removeClass('active').prev().addClass('active')
            $('.Anon .box-footer > .widget.active').removeClass('active').prev().addClass('active')
        }
    })


})

