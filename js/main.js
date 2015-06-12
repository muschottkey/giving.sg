YUI().use(
  'aui-modal','widget-anim','anim',
  function(Y) {
    var modalLogin = new Y.Modal(
      {
        bodyContent: '<div class="form-wrapper">'+
                      '<form id="LoginForm"><div class="form-group"><label class="control-label" for="email">Email</label>'+
                      '<div class="controls"><input name="email" id="email" class="form-control field-required field-email" type="text">'+
                      '</div> </div>'+
                      '<div class="form-group"><label class="control-label" for="password">Password</label>'+
                      '<div class="controls"><input name="password" id="name" class="form-control field-required" type="password">'+
                      '</div> </div>'+
                      '<div class="form-group">'+
                      '<div class="controls"><input name="remember" value="Remember Me" id="remember" class="form-control" type="checkbox"> Remember Me'+
                      '</div> </div>'+
                      '<br><div id="captchabox">Captcha</div><div id="login-btn"></div>'+
                      '</form></div></div>',
        centered: true,
        headerContent: '<h3>LOGIN</h3>',
        modal: true,
        destroyOnHide: false,
        render: '#modal',
        draggable: true,
        resizable: false

      }
    ).render();
    modalLogin.hide();
    modalLogin.plug(Y.Plugin.WidgetAnim,
      {
            duration: 1,
            animHide: new Y.Anim(
                {
                    duration: 0.6,
                    easing: Y.Easing.easeOut,
                    node: modalLogin.get('boundingBox'),
                    to: { xy: [modalLogin.get('boundingBox').getXY(), -300], opacity:0 }
                }
            ),
            animShow: new Y.Anim(
                {
                    duration: 0.6,
                    easing: Y.Easing.easeOut,
                    from: { xy: [modalLogin.get('boundingBox').getXY(), -300], opacity:0 },
                    node: modalLogin.get('boundingBox'),
                    to: { xy: [modalLogin.get('boundingBox').getXY(), 60], opacity:1 }
                }
            )
        });
    var modalSignup = new Y.Modal(
        {
          bodyContent: '<div class="row-fluid">'+
          '<div class="span6">'+
          '<div class="social-media-signup">'+
          '<a href="" class="facebook"><i class="fa fa-facebook-square"></i>Login with Facebook</a>'+
          '<a href="" class="linkedin"><i class="fa fa-linkedin-square"></i>Sign Up with LinkedIn</a>'+
          '</div>'+
          '</div><div class="span6">'+
          '<div class="form-wrapper signup">'+
                        '<form id="LoginForm"><div class="form-group"><label class="control-label" for="email">Email:</label>'+
                        '<div class="controls"><input name="email" id="email" class="form-control field-required field-email" type="text">'+
                        '</div> </div>'+
                        '<div class="form-group"><label class="control-label" for="password">Password:</label>'+
                        '<div class="controls"><input name="password" id="name" class="form-control field-required" type="password">'+
                        '</div> </div>'+
                        '<div class="form-group">'+
                        '<div class="controls"><input name="remember" value="Remember Me" id="remember" class="form-control" type="checkbox"> Remember Me'+
                        '</div> </div>'+
                        '<br><div id="login-btn"></div>'+
                        '</form></div></div></div></div>',
          centered: true,
          css_prefix: 'signup-modal',
          headerContent: '<h3>Sign Up</h3>',
          modal: true,
          destroyOnHide: false,
          render: '#modal',
          resizable:false,
          draggable: true
        }
      ).render();
    modalSignup.hide();

    modalSignup.plug(Y.Plugin.WidgetAnim,
      {
            duration: 1,
            animHide: new Y.Anim(
                {
                    duration: 0.6,
                    easing: Y.Easing.easeOut,
                    node: modalSignup.get('boundingBox'),
                    to: { xy: [modalSignup.get('boundingBox').getXY(), -300], opacity:0 }
                }
            ),
            animShow: new Y.Anim(
                {
                    duration: 0.6,
                    easing: Y.Easing.easeOut,
                    from: { xy: [modalSignup.get('boundingBox').getXY(), -300], opacity:0 },
                    node: modalSignup.get('boundingBox'),
                    to: { xy: [modalSignup.get('boundingBox').getXY(), 60], opacity:1 }
                }
            )
        });
    
    Y.one('#btn-login').on(
      'click',
      function() {
        modalLogin.show();
        Y.one('.yui3-widget-mask').addClass('fade in')
      }
      );
    Y.one('#btn-signup').on(
      'click',
      function() {
        modalSignup.show();
      }
    );
    Y.one('.yui3-widget-mask').on(
      'click',
      function() {
        modalLogin.hide();
        modalSignup.hide();
      }
    );

    modalLogin.addToolbar(
      [
        {
          label: 'Dont have an account? Sign Up',
          cssClass: 'footer-action',
          on: {
            click: function() {
              modalLogin.hide();
              setTimeout(function(){
                 modalSignup.show();
               }, 1000);
             
            }
          }
        }
      ]
    );
  }
);

YUI().use(
  'aui-form-validator',
  function(Y) {
    new Y.FormValidator(
      {
        boundingBox: '#LoginForm'
      }
    );
  }
);

YUI().use(
  'aui-button',
  function(Y) {
    new Y.Button(
      {
        label: 'Login',
        srcNode: '#login-btn',
        cssClass: 'submit-action'
      }
    ).render();
  }
);

YUI().use(
  'aui-viewport'
);