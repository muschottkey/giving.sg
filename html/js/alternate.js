$(function(){
    $('#btn-login').click(function(){ $('#loginModal').modal(); })
    $('#btn-signup').click(function(){ $('#signupModal').modal(); })
    $('#btn-addLeaders').click(function(){ $('#addLeadersModal').modal(); })
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
    $('#selAmount .sod_list').append('<span class="sod_option custom"><small>Type Your Own Amount</small><input class="customAmt" type="text"><small>dollars</small></span>');
    
    $('.sod_list').on('change','.customAmt',function(){
        var amtvalue = $(this).val();
        var length = amtvalue.length - 2;
        var dynamic_width = 160 + 15*length;
        $('#selAmount').css('width', dynamic_width);
        $('#selectAmount').append('<option value="'+amtvalue+'" selected>'+amtvalue+'</option>').selectOrDie("update");
        $('#selAmount .sod_list').append('<span class="sod_option custom"><small>Type Your Own Amount</small><input class="customAmt" type="text"><small>dollars</small></span>');
    });

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



    $('.select-giving').selectOrDie();

    $('#selectAmount').selectOrDie({
        prefix: "DOLLARS",
        onChange: function(){
            var amtvalue = $(this).val();
            var length = amtvalue.length - 2;
            var dynamic_width = 160 + 15*length;
            $('#selAmount').css('width', dynamic_width);
        }
    })

    $('.select-giving-autofit').selectOrDie({
        onChange: function(){
            var amtvalue = $(this).val();
            var length = amtvalue.length;
            if(length >= 8){
                var dynamic_width = 14*length;
            }
            else{
                length = length + 2;
                var dynamic_width = 30 + 15*length;
            }
            $(this).closest('.sod_select').css('width', dynamic_width);
        }
    });

    $('.select-giving-autofit-text').selectOrDie({
         onChange: function(){
            var amtvalue = $(this).val();
            var length = amtvalue.length ;
            var dynamic_width = 50 + 10*length*1.05;
            $(this).closest('.sod_select').css('width', dynamic_width);
        }
    });

    // $('.sod_select')

    var winWidth = $(window).innerWidth();
    var $things = $('.acc-section');

    $things.waypoint(function(direction) {
      if (direction === 'down') {
        if(winWidth > 979 ){
            $('.donation-wrapper').find('.focused').removeClass('focused');
            $('donation-wrapper').find('.has-focused').removeClass('has-focused');
            $(this.element).addClass('focused').closest('.collapse').addClass('has-focused');
        }
      }
    }, {
      offset: '40%'
    });

    $things.waypoint(function(direction) {
      if (direction === 'up') {
        if(winWidth > 979 ){
            $('.donation-wrapper').find('.focused').removeClass('focused');
            $('donation-wrapper').find('.has-focused').removeClass('has-focused');
            $(this.element).addClass('focused');
            $(this.element).addClass('focused').closest('.collapse').addClass('has-focused');
            
        }
      }
    }, {
      offset: '0%'
    });


    // Creating accordions on body resize
    $('.acc-toggle').click(function(e){
      if ($(window).width() >= 768) {  
        e.stopPropagation();
      }    
    });

    if($('.gf-bkt').length){
        $('.gf-bkt').editableTableWidget();
    }

    $('#setup-dtn-carousel').carousel();

    $('#setup-dtn-conf-submission').click(function(){
        $(this).closest('.boxed.span12').next('.boxed.span12').removeClass('hide').addClass('animated fadeIn');
        $(this).closest('.boxed.span12').addClass('animated fadeOutLeft').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
           $(this).removeClass('animated fadeOutLeft').addClass('hide').css('opacity','0');
        });
    })

    $('.donate-trig').click(function(){
        $('#donationAmt').modal();
    });

    function createMobSlider(){
        //initialize campaign suggestions swiper when mobile ready  
        var mobswiper;
        var winWidth = $(window).innerWidth();
        $('#causes-mobile').removeClass('swiper-no-swiping');
        $('#causes-mobile .swiper-wrapper').removeClass('reset');
        $('#causes-mobile .swiper-slide').removeClass('reset');
        if(winWidth < 767){
            mobswiper = new Swiper($('.swiper-container-4'), {
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
        }

        if(winWidth > 767 ){

           $('#causes-mobile').addClass('swiper-no-swiping');
           $('#causes-mobile .swiper-wrapper').addClass('reset');
           $('#causes-mobile .swiper-slide').addClass('reset');

        }
        
    }
    createMobSlider();

    /* FOR MODALS */
    $('.modal').on("shown", function(){ 
         $('.swiper-auto').each(function(){
            mswiper = new Swiper($(this)[0], {
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
    })

    /* For normal swiper */
    $('.swiper-auto').each(function(){
        new Swiper($(this)[0], {
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

    /* For swiper with scrollbars */
    $('.swiper-container-3').each(function(){
        new Swiper($(this)[0], {
            pagination: $(this).find('.swiper-pagination'),
            paginationClickable: $(this).find('.swiper-pagination'),
            nextButton: $(this).find('.swiper-button-next'),
            prevButton: $(this).find('.swiper-button-prev'),
            loop: true,
            scrollbar: $(this).find('.swiper-scrollbar') ,
            scrollbarHide: false,
            slidesPerView:"auto",
            spaceBetween:20,
            mode: 'horizontal',
            freeMode: true
        });
    });

     // Initiate swiper for Carousel when document ready  
    var campaignLandingSwiper = new Swiper ('.landing-cpn-slider-wrapper', {
        pagination: '.swiper-pagination',
        sliderPerView: 1,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop:true
    })  

    if($('.home-slider').length){

        campaignLandingSwiper.destroy(false,false);

        var homeSwiper = new Swiper ('.home-slider', {
            pagination: '.swiper-pagination',
            sliderPerView: 1,
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop:true,
            autoplay: 3000,
            speed: 800,
            autoplayDisableOnInteraction: false
        })  
    }
          
    

    $(window).on("resize",function(){
        var winWidth = $(window).innerWidth();
        createMobSlider();
        showSidebar(winWidth);
    })

    $('#custom-amt-input-modal>input').change(function(){
        amt = $(this).val();
        $('#user-input-holder').text("ADDED "+amt+" DOLLARS TO");
        $('#user-input-holder').closest('button').addClass('with-amount').next().addClass('hide');
        $('#donationAmt').modal('hide');
    })

    $('#donationAmt .dtn-amt-item').click(function(){
        amt = parseInt($(this).find('.dtn-amt h3').text());
        $('#user-input-holder').text("ADDED "+amt+" DOLLARS TO");
        $('#user-input-holder').closest('button').addClass('with-amount').next().addClass('hide');
        $('#donationAmt').modal('hide');
       
    });

    $('#donationAmt .modal-volunteer').click(function(){
        position = $(this).closest('.vpos-wrapper').find('.vpos-details h6').text();
        $('.user-input-holder').text("VOLUNTEER as "+position);
        $('#donationAmt').modal('hide');
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

    /* refine search inputs */
    $('#close-more-causes').click(function(){
        $('#select-more-causes').modalPopover('hide');
        $('#causes-holder').find('.checkbox-clone.hidden').removeClass('hidden').fadeIn(400);
        $('#causes-holder').find('.checkbox-clone.to-hide').fadeOut(400).detach();
    })
    
    $('#close-more-camp').click(function(){
        $('#select-more-camp').modalPopover('hide');
        $('#camp-holder').find('.checkbox-clone.hidden').removeClass('hidden').fadeIn(400);
        $('#camp-holder').find('.checkbox-clone.to-hide').fadeOut(400).detach();
    })

    $('.refine-inputs input[type=checkbox]').prop('checked',true);
    $('#ref_allcauses').change(function(){
        var checked = $(this).prop('checked');
        if(checked == true){
            $(this).closest('.span12').find('input[type=checkbox]:checked').prop("checked",false);
            $('#causes-holder').find('.checkbox-clone').addClass('to-hide');
            $(this).prop('checked',true);
        }
        else{
            $('#causes-toggle').removeClass('checked');
        }
    })
    

    $('#select-more-causes').on('change','input', function(){
        var checked = $(this).prop('checked');
        var parent = $(this).attr('id');
        var content = $(this).next('label').text(); 
        if(checked == true){
            $('#causes-holder').append('<span class="checkbox-clone checked hidden" data-parent="'+parent+'" >' + content + '</span>');
            if(parent != "ref_allcauses"){
                $("#ref_allcauses").prop('checked',false);
                $('#causes-holder').find('span[data-parent=ref_allcauses]').addClass('to-hide');
            }
        }
        else{
            $('#causes-holder').find('span[data-parent='+parent+']').addClass('to-hide');
        }
    })
    $('#select-more-camp').on('change','input', function(){
        var checked = $(this).prop('checked');
        var parent = $(this).attr('id');
        var content = $(this).next('label').text(); 
        if(checked == true){
            $('#camp-holder').append('<span class="checkbox-clone checked hidden" data-parent="'+parent+'" >'+content+'</span>');
            if(parent != "ref_allcauses"){
                $("#ref_allcamp").prop('checked',false);
                $('#camp-holder').find('span[data-parent=ref_allcamp]').addClass('to-hide');
            }
        }
        else{
            $('#camp-holder').find('span[data-parent='+parent+']').addClass('to-hide');
        }
    })


    $('.cpn-holder .btn-close').click(function(e){e.preventDefault();})
    $('#causes-holder').on('click', '.checkbox-clone',function(){
        $('#select-more-causes').modalPopover({
            target: $(this),
            placement: 'bottom'
        });

        $('#select-more-causes').modalPopover('show')
    })
    
    $('#camp-holder').on('click', '.checkbox-clone',function(){
        $('#select-more-camp').modalPopover({
            target: $(this),
            placement: 'bottom'
        });

        $('#select-more-camp').modalPopover('show')
    })

    /* DONATE BUTTONS LOGIC*/

    $('#donate-buttons').on('change','.button-input', function(){
        $('#donate-buttons').find('.btn.active').removeClass('active');
    });
        
    /* READ MORE */
    $('#cpn-body').readmore({
        speed:400,
        collapsedHeight: 250,
        lessLink: '<a class="small text-left toggle-readmore" href="javascript:;"> - LESS DETAILS</a>',
        moreLink: '<a class="small text-left toggle-readmore" href="javascript:;"> + MORE DETAILS</a>',
        beforeToggle: function(trigger, element, expanded){
           if(expanded) { // The "Close" link was clicked
              $('#cpn-body').removeClass('open').addClass('closed');
            }
            else{
              $('#cpn-body').removeClass('closed').addClass('open');
            }
        },
        afterToggle: function(trigger, element, expanded) {
            
          }
    });
    
    


    /*  COPY TO CLIPBOARD     ------*/
    var cp_client = new ZeroClipboard($("#copy-url"));

    /* Navigation Menu Toggle */
    $('.nav-menu-toggle').click(function(e){
        e.preventDefault();
            if(!$(this).hasClass('active')){
                $('#sidebar').removeClass('hide').addClass('animated slideInLeft show');
                $(this).addClass('active');  
            }
            else{
                $('#sidebar').addClass('animated slideOutLeft');
                $(this).removeClass('active');  
            }
       
    })

    $('#sidebar').on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
        if($(this).hasClass('slideInLeft')){
            $(this).removeClass('slideInLeft');
        }
        else if($(this).hasClass('slideOutLeft')){
            $(this).removeClass('slideOutLeft show').addClass('hide');
        }
    })

    function showSidebar(winWidth){
        console.log('resizing');
        console.log(winWidth);
        if(winWidth >= 980){
            if(!$('.nav-menu-toggle').hasClass('active')){
                // $('#sidebar').css('display','initial');
            }
        }
    }


    $(document).click(function(e){
        if($(e.target).is('.row-fluid') ){
            console.log('outside clicked');
            if ($('#sidebar').hasClass('show')) {
                $('#sidebar').addClass('animated slideOutLeft');
                $('.nav-menu-toggle').removeClass('active');  
            }

        }
    })

    /* Date Pickers*/
   
    $(document).on("focus", ".date-picker", function(){
        $('.date-picker').datepicker({
            dateFormat: "dd-mm-yy"
        });
    })

    $('.time-fields-wrapper').on("click",".delete-row", function(e){
        e.preventDefault();
        $(this).closest('.can-clone').detach();
        console.log("detached");
    })

    /* Character count*/

    $('.hasCounter').on("keypress keydown keyup", function(){
        maxLen = 500; // max number of characters allowed

        if ($(this).val().length >= maxLen) {
            $(this).parent().find('.char-count').text(0);
            $(this).val($(this).val().substring(0, maxLen));
         }
        else{ // Maximum length not reached so update the value of my_text counter
            $(this).parent().find('.char-count').text(maxLen - $(this).val().length);
        }
    })

    /* 353 time inputs adding and deletion */

    $('.add-row').on("click", function(e){
        e.preventDefault();
        var cloneHTML = '<div class="span3">'+
                            '<label class="control-label small span12 hidden-desktop">DATE</label><input type="text" class="span12 m-right5 date-picker"></div>'+
                        '<div class="span6">'+
                            '<label class="control-label small span12 hidden-desktop">TIME</label><input type="text" class="span12 m-right5" placeholder="e.g. 10am -4pm"></div>'+
                        '<div class="span3 relative">'+
                            '<label class="control-label small span12 hidden-desktop">Activity Hours</label><input type="text" class="span12 m-right5" placeholder="placeholder text">'+
                            '<button href="#" class="btn btn-ghost btn-minimal delete-row"><i class="fa fa-trash-o"></i></button></div>';

        var insertHTML = '<div class="row-fluid breakpoint-override can-clone cloned">'+cloneHTML+"</div>";
        $(this).parent().find('.time-fields-wrapper').append(insertHTML);
    })

    $('#actTypeCheckboxes input[type=checkbox]').on("change", function(){
        var checked = parseInt($('#actTypeCheckboxes').find('input[type=checkbox]:checked').length);
        $('#actTypeCheckboxes').find('input[type=checkbox]').removeAttr("disabled");
        if(checked > 1){
           $('#actTypeCheckboxes').find('input[type=checkbox]:not(:checked)').attr("disabled","disabled"); 
        }
    })

    $('#volsNum').on("keyup input", function(){
        var valid_Val = $(this).val().replace(/[^0-9]/g, '');
         $(this).val(valid_Val);
    })

    /* Dashboard */

    $('.show-more').on("click", function(e){
        e.preventDefault();
        $(this).closest('.person-actions').find('.more-details').collapse('toggle');
    })
    $('.more-details').on('hide', function () {
      $(this).closest('.person-actions').find('.show-more').text("+ MORE DETAILS")
    })
     $('.more-details').on('show', function () {
      $(this).closest('.person-actions').find('.show-more').text("- LESS DETAILS")
    })

     /* MULTI STATE CHECKBOXES */

    /* Master checkbox */
    $('.master.checkbox')
      .checkbox({
        // check all children
        onChecked: function() {
            var $childCheckbox  = $(this).closest('.checkbox-parent').find('.checkbox-children').children('.data-list-item').find('.checkbox');
                $childCheckbox.checkbox('check');
                console.log($childCheckbox);
            },
        // uncheck all children
        onUnchecked: function() {
            var $childCheckbox  = $(this).closest('.checkbox-parent').find('.checkbox-children').children('.data-list-item').find('.checkbox');
                $childCheckbox.checkbox('uncheck');
        }
      })
    ;

    /* Child Checkboxes */
    $('.data-list-item .child.checkbox')
      .checkbox({
        // Fire on load to set parent value
        fireOnInit : true,
        // Change parent state on each child checkbox change
        onChange   : function() {
          var
            $listGroup      = $(this).closest('.data-list'),
            $listParent     = $(this).closest('.data-list-item'),
            $parentCheckbox = $(this).closest('.checkbox-parent').find('.checkbox.master'),
            $checkbox       = $listGroup.find('.checkbox'),
            allChecked      = true,
            allUnchecked    = true
          ;
          // check to see if all other siblings are checked or unchecked
          $checkbox.each(function() {
            if( $(this).checkbox('is checked') ) {
              allUnchecked = false;
            }
            else {
              allChecked = false;
            }
          });
          // set parent checkbox state, but dont trigger its onChange callback
          if(allChecked) {
            $parentCheckbox.checkbox('set checked');
          }
          else if(allUnchecked) {
            $parentCheckbox.checkbox('set unchecked');
          }
          else {
            $parentCheckbox.checkbox('set indeterminate');
          }
        },
      })
    ;

    /* 478 table interactions */
    $('.paginate-me').pageMe({
        pagerSelector:'#myPager',
        showPrevNext:true,
        hidePageNumbers:false,
        perPage:10
    });

    /* Sorting */
    $('#sortable').jplist({             
        itemsBox: '.data-list',
        itemPath: '.data-list-item',
        panelPath: '.jplist-panel' 
    });

    $('.data-list-item').find('input[type=checkbox]').change(function(){
        var box = $(this),
            checked = box.prop("checked");
        if(checked == true){
            box.closest('.data-list-item').addClass('active');
        }else{
            box.closest('.data-list-item').removeClass('active');
        }
    })

    /* Typeahead for 479 */
    var s = [
            {
                name: "Andrea Schlieker",
                email: "andreaschliker@hotmail.com",
                img: "images/img-avatar-05.png",
                icon:"fa-star"
            },
            {
                name: "Alvin Heng",
                email: "alvinheng@yahoo.com",
                img: "images/img-avatar-05.png",
                icon:"fa-star"
            },
            {
                name: "Joey Wong",
                email: "wongjoey@gmail.com",
                img: "images/img-avatar-05.png",
                icon: "fa-star"
            },
            {
                name: "Jacelyn Chow",
                email: "jacelyntree3@gmail.com",
                img: "images/img-avatar-05.png",
                icon:"fa-star"
            },
            {
                name: "Louis Eskay",
                email: "louis9987@hotmail.com",
                img: "images/img-avatar-04.png",
                icon:"fa-bomb"
            }
            ,{
                name: "Aster Ng",
                email: "asterng@gmail.com",
                img: "images/img-avatar-12.png",
                icon:"fa-bomb"
            }
            ,{
                name: "Justin Siow",
                email: "justinsiowtt@hotmail.com",
                img: "images/img-avatar-11.png",
                icon:""
            }
            ,{
                name: "Danny Hee",
                email: "danheecs@hotmail.com",
                img: "images/img-avatar-14.png",
                icon:"fa-star"
            }
            ,{
                name: "Wendy Sonia",
                email: "wendysocd@hotmail.com",
                img: "images/img-avatar-08.png",
                icon:"fa-bomb"
            }
            ,{
                name: "Judy Tan",
                email: "judytan11@yahoo.com.sg",
                img: "images/img-avatar-07.png",
                icon:"fa-bomb"
            }
        ];

        var states = new Bloodhound({
            datumTokenizer: function (data) {
                return Bloodhound.tokenizers.whitespace(data.name);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            local: s
        });

        states.initialize();

        $('#searchLeaders').typeahead({
            minLength: 2,
            highlight: true,
            classNames:{
                input: 'typeahead-input',
                hint: 'typeahead-hint',
                selectable: 'typeahead-result-li'
            }
        },
        {
            name: 'hobokin',
            displayKey: 'name',
            source: states.ttAdapter(),
            templates: {
                suggestion: function(data){
                return '<div class="result-li clearfix"><div class="pull-left">'+
                    '<img src='+data.img+' class="img-circle alt="'+data.name+'"></img></div>'+
                    '<div class="pull-left"><span class="volunteer-name">'+data.name+'<i class="fa '+data.icon+'"></i></span><span class="volunteer-email">'+data.email+'</span></div></div>';
                }
            }
        });

        $('#searchLeaders').bind('typeahead:select', function(ev, suggestion) {
            var insertHTML =    '<li class="animated fadeIn">'+
                                    '<img class="img-circle" src="'+suggestion.img+'" alt="'+suggestion.name+'">'+
                                    '<span class="volunteer-name">'+suggestion.name+'</span>'+
                                    '<i class="fa '+suggestion.icon+' volunteer-icon"></i>'+
                                    '<a href="javascript:;" class="pull-right remove-volunteer">'+
                                        '<i class="fa fa-trash-o"></i>'+
                                    '</a>'+
                                '</li>';
            $('.search-results ul').append(insertHTML);
            $('.typeahead-hint').val(" ");
            $('#searchLeaders').val(" ");
        });

        $('.search-results').on("click", '.remove-volunteer', function(e){
            e.preventDefault();
            $(this).closest('li').addClass("animated fadeOut");
        })

        $('.search-results').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend','li',function(){
            $(this).removeClass('animated fadeIn');
           
            if($(this).hasClass('fadeOut')){
                $(this).remove();
            }
        });

        /*      480      */

        $('#searchList').keyup(function () {
            var valThis = this.value.toLowerCase(),
                lenght  = this.value.length;

            $('.data-list > li').each(function () {
                var text  = $(this).find('.volunteer-name').text(),
                    textL = text.toLowerCase();
                (textL.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();
            });

        });


        $('#searchList481').keyup(function () {
            var valThis = this.value.toLowerCase(),
                lenght  = this.value.length;

            $('.data-list > li').each(function () {
                var text  = $(this).find('.name').text(),
                    textL = text.toLowerCase();
                (textL.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();
            });

        });

        $('.volunteer-check').on("change", function(){
            var checked = $(this).prop("checked");

            if(checked == true){
                $(this).closest('li').addClass('active');
            }
            if(checked == false){
                $(this).closest('li').removeClass('active');
                $(this).removeClass('selected');
            }
        });

        $('#saveAttendees').click(function(){
            $('.volunteers-list').find('.volunteer-check:checked').addClass('selected');
        });

        $('#btn-subAttendance').click(function(e){
            e.preventDefault();
            $('.volunteers-list li').find('.volunteer-check').prop("checked","checked").addClass("selected");
            $('#confirmModal').modal("show");
        })

        $('#li-subAll').click(function(e){
            e.preventDefault();
            $('#confirmModal').modal("show");
        })

        $('.action-btn .dropdown-menu li a').click(function(e){
            e.preventDefault();
            var actn = $(this).text();
            var action = $(this).text().toLowerCase();
            console.log(action);
            $(this).closest('.dropdown-menu').find('li.active').removeClass('active');
            $(this).parent().addClass('active');

            $(this).closest('.action-btn').find('button:first-child').attr("value",actn);

            if( action == "reject"){
                $(this).closest('.action-btn').find('button:first-child').text("Rejected");
            }
            if(action == "make leader"){
                $(this).closest('.action-btn').find('button:first-child').text("Leader");
                $targetDiv = $(this).closest('.data-list-item').find('.person > div');
                $leaderTag = '<span class="label label-success m-left45">LEADER</span>';
                $targetDiv.append($leaderTag);
            }
            
            $(this).closest('.action-btn').addClass("deactivated").find('button').attr("disabled","disabled");
        })

        $('.action-btn button:first-child').click(function(){
            var action = $(this).attr("value").toLowerCase();
            console.log(action);
            $(this).attr("disabled","disabled").next('button').attr("disabled","disabled");
            $(this).parent().addClass("deactivated");
            if( action == "reject"){
                $(this).text("Rejected");
            }
            if(action == "accept"){
                $(this).text("Accepted");
            }
        })

         $('#saveAttendance').selectOrDie({
            onChange: function(){
                var val = $(this).val();
                $('.volunteers-list li').find('input[type=text]').attr("disabled","disabled");

                if(val="subAll"){
                    $('.volunteers-list li').find('.volunteer-check').prop("checked","checked").addClass("selected");
                }

                $('#confirmModal').modal("show");
                
            }
        })


    /* ----------------------------------------------------
                MATCHING HEIGHTS OF ELEMENTS
     ----------------------------------------------------*/
    $('.cpn-slide-right').matchHeight({
         target: $('.cpn-slide-left')
    });

     $('.dtn-vacs').matchHeight({
         target: $('.dtn-desc')
    });

    if($(window).innerWidth() > 979){
        $('#dateNAdd').matchHeight({
            target: $('#actDescWrapper')
        });
    }
    $('.person-actions .span6').matchHeight();

    $('.match-height-abt-impact').matchHeight();

    $('.landing-cpn-slider-wrapper .swiper-slide').matchHeight();

    $('.volunteer-header.p481 div[class*="span"]').matchHeight();
    

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




/* PAGINATION PLUGIN */

$.fn.pageMe = function(opts){
    var $this = this,
        defaults = {
            perPage: 7,
            showPrevNext: false,
            hidePageNumbers: false
        },
        settings = $.extend(defaults, opts);
    
    var listElement = $this;
    var perPage = settings.perPage; 
    var children = listElement.children();
    var pager = $('.mpager');
    var meta = $(this).next('.meta-footer').find('.meta_info');
    
    if (typeof settings.childSelector!="undefined") {
        children = listElement.find(settings.childSelector);
    }
    
    if (typeof settings.pagerSelector!="undefined") {
        pager = $(settings.pagerSelector);
    }

    if (typeof settings.metaSelector!="undefined") {
        meta = $(settings.metaSelector);
    }
    
    var numItems = children.size();
    var numPages = Math.ceil(numItems/perPage);

    pager.data("curr",0);
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);
    }
    
    var curr = 0;
    while(numPages > curr && (settings.hidePageNumbers==false)){
        $('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
        curr++;
    }
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);
    }
    
    pager.find('.page_link:first').addClass('active');
    pager.find('.prev_link').parent().addClass("disabled");
    if (numPages<=1) {
        pager.find('.next_link').parent().addClass("disabled");
    }
    pager.children().eq(1).addClass("active");
    
    children.hide();
    children.slice(0, perPage).show();
    
    pager.find('li .page_link').click(function(e){
        e.preventDefault();
        if($(this).parent().hasClass("disabled")){
           return false; 
        }
        else{
             var clickedPage = $(this).html().valueOf()-1;
        goTo(clickedPage,perPage);
        return false;
        }
    });
    pager.find('li .prev_link').click(function(){
        if($(this).parent().hasClass("disabled")){
           return false; 
        }
        else{
            previous();
            return false;
        }
    });
    pager.find('li .next_link').click(function(){
        if($(this).parent().hasClass("disabled")){
           return false; 
        }
        else{
            next();
            return false;
        }
    });
    
    function previous(){
        var goToPage = parseInt(pager.data("curr")) - 1;
        goTo(goToPage);
    }
     
    function next(){
        goToPage = parseInt(pager.data("curr")) + 1;
        goTo(goToPage);
    }
    
    function goTo(page){
        var startAt = page * perPage,
            endOn = startAt + perPage;
        
        children.css('display','none').slice(startAt, endOn).show();
        
        if (page>=1) {
            pager.find('.prev_link').parent().removeClass('disabled');
        }
        else {
            pager.find('.prev_link').parent().addClass("disabled");
        }
        
        if (page<(numPages-1)) {
            pager.find('.next_link').parent().removeClass('disabled');
        }
        else {
            pager.find('.next_link').parent().addClass("disabled");
        }
        
        pager.data("curr",page);
        pager.children().removeClass("active");
        pager.children().eq(page+1).addClass("active");
        showMeta(startAt,endOn);
    
    }

    function showMeta(start,end){
        if(end > numItems){
            end = numItems;
        }
        if(start == 0){
            start = 1;
        }
        meta.find('.count').text(start+"-"+end);
        meta.find('.total').text(numItems)
    }
};
