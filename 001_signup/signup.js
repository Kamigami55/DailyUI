$(document).ready(function(){
  var joinus_btn = $("#joinus");
  var agent = $("#agent");
  var user = $("#user");
  var chat = $("#chat");
  var i_am_agent = $("#i-am-agent");
  var what_is_your_name = $("#what-is-your-name");
  var my_name_is = $("#my-name-is");
  var username_input = $("#username-input");
  var nice_to_meet_you = $("#nice-to-meet-you");
  var username_display = $("#username-display");
  var username_val = null;
  var what_email = $("#what-email");
  var my_email = $("#my-email");
  var email_input = $("#email-input");
  var what_pw = $("#what-pw");
  var what_pw2 = $("#what-pw2");
  var my_pw = $("#my-pw");
  var pw_input = $("#pw-input");
  var what_pw3 = $("#what-pw3");
  var my_pw2 = $("#my-pw2");
  var pw2_input = $("#pw2-input");
  var please_check = $("#please-check");
  var detail = $("#detail");
  var username_check = $("#username-check");
  var email_check = $("#email-check");
  var pw_check = $("#pw_check");
  var is_correct = $("#is-correct");
  var yes_no = $("#yes-no");
  var yes = $("#yes");
  var no = $("#no");
  var welcome = $("#welcome");
  var welcome_username = $("#welcome-username");


  joinus_btn.click(function(){
    joinus_btn.animate({top: "9em", opacity: 0}, 300, function(){
      joinus_btn.css("visibility", "hidden");
      charAppear();
    });
  });

  function charAppear() {
    agent.animate({left: "15vw"}, 500);
    user.animate({right: "15vw"}, 500, function() {
      formAppear();
    });
  }

  function formAppear() {
    chat.css("visibility", "visible");
    chat.animate({opacity: 1}, 500, function(){
      iamagentAppear();
    });
  }

  function iamagentAppear() {
    i_am_agent.css("visibility", "visible");
    i_am_agent.animate({opacity: 1}, 500, function(){
      setTimeout(whatisyournameAppear, 1000);
    });
  }

  function whatisyournameAppear() {
    i_am_agent.animate({bottom: "+=9vh"}, 250);
    what_is_your_name.css("visibility", "visible");
    what_is_your_name.animate({opacity: 1}, 500, function(){
      setTimeout(mynameisAppear, 1000);
    });
  }

  function mynameisAppear() {
    i_am_agent.animate({bottom: "+=10vh"}, 250);
    what_is_your_name.animate({bottom: "+=10vh"}, 250);

    my_name_is.css("visibility", "visible");
    my_name_is.animate({opacity: 1}, 500);
  }

  username_input.keypress(function(e){
    if(e.which === 13){
      updateUsername();
    }
  });

  function updateUsername() {
    username_val = username_input.val();
    username_display.html(username_val);
    if (nice_to_meet_you.css("visibility") == "hidden") {
      nicetomeetyouAppear();
    }
  }

  function nicetomeetyouAppear() {
    i_am_agent.animate({bottom: "+=10vh"}, 250);
    what_is_your_name.animate({bottom: "+=10vh"}, 250);
    my_name_is.animate({bottom: "+=10vh"}, 250);

    nice_to_meet_you.css("visibility", "visible");
    nice_to_meet_you.animate({opacity: 1}, 500, function(){
      setTimeout(whatEmailAppear, 1000);
    });
  }

  function whatEmailAppear() {
    i_am_agent.animate({bottom: "+=9vh"}, 250);
    what_is_your_name.animate({bottom: "+=9vh"}, 250);
    my_name_is.animate({bottom: "+=9vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=9vh"}, 250);

    what_email.css("visibility", "visible");
    what_email.animate({opacity: 1}, 500, function(){
      setTimeout(myEmailAppear, 1000);
    });
  }

  function myEmailAppear() {
    i_am_agent.animate({bottom: "+=10vh"}, 250);
    what_is_your_name.animate({bottom: "+=10vh"}, 250);
    my_name_is.animate({bottom: "+=10vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=10vh"}, 250);
    what_email.animate({bottom: "+=10vh"}, 250);

    my_email.css("visibility", "visible");
    my_email.animate({opacity: 1}, 500);
  }

  email_input.keypress(function(e){
    if(e.which === 13){
      updateEmail();
    }
  });

  function updateEmail() {
    if (what_pw.css("visibility") == "hidden") {
      whatPwAppear();
    }
  }

  function whatPwAppear() {
    i_am_agent.animate({bottom: "+=10vh"}, 250);
    what_is_your_name.animate({bottom: "+=10vh"}, 250);
    my_name_is.animate({bottom: "+=10vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=10vh"}, 250);
    what_email.animate({bottom: "+=10vh"}, 250);
    my_email.animate({bottom: "+=10vh"}, 250);

    what_pw.css("visibility", "visible");
    what_pw.animate({opacity: 1}, 500, function(){
      setTimeout(whatPw2Appear, 1000);
    });
  }

  function whatPw2Appear() {
    i_am_agent.animate({bottom: "+=9vh"}, 250);
    what_is_your_name.animate({bottom: "+=9vh"}, 250);
    my_name_is.animate({bottom: "+=9vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=9vh"}, 250);
    what_email.animate({bottom: "+=9vh"}, 250);
    my_email.animate({bottom: "+=9vh"}, 250);
    what_pw.animate({bottom: "+=9vh"}, 250);

    what_pw2.css("visibility", "visible");
    what_pw2.animate({opacity: 1}, 500, function(){
      setTimeout(myPwAppear, 1000);
    });
  }

  function myPwAppear() {
    i_am_agent.animate({bottom: "+=9vh"}, 250);
    what_is_your_name.animate({bottom: "+=9vh"}, 250);
    my_name_is.animate({bottom: "+=9vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=9vh"}, 250);
    what_email.animate({bottom: "+=9vh"}, 250);
    my_email.animate({bottom: "+=9vh"}, 250);
    what_pw.animate({bottom: "+=9vh"}, 250);
    what_pw2.animate({bottom: "+=9vh"}, 250);

    my_pw.css("visibility", "visible");
    my_pw.animate({opacity: 1}, 500);
  }


  pw_input.keypress(function(e){
    if(e.which === 13){
      if (what_pw3.css("visibility") == "hidden") {
        whatPw3Appear();
      }
    }
  });

  function whatPw3Appear() {
    i_am_agent.animate({bottom: "+=10vh"}, 250);
    what_is_your_name.animate({bottom: "+=10vh"}, 250);
    my_name_is.animate({bottom: "+=10vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=10vh"}, 250);
    what_email.animate({bottom: "+=10vh"}, 250);
    my_email.animate({bottom: "+=10vh"}, 250);
    what_pw.animate({bottom: "+=10vh"}, 250);
    what_pw2.animate({bottom: "+=10vh"}, 250);
    my_pw.animate({bottom: "+=10vh"}, 250);

    what_pw3.css("visibility", "visible");
    what_pw3.animate({opacity: 1}, 500, function(){
      setTimeout(myPw2Appear, 1000);
    });
  }

  function myPw2Appear() {
    i_am_agent.animate({bottom: "+=9vh"}, 250);
    what_is_your_name.animate({bottom: "+=9vh"}, 250);
    my_name_is.animate({bottom: "+=9vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=9vh"}, 250);
    what_email.animate({bottom: "+=9vh"}, 250);
    my_email.animate({bottom: "+=9vh"}, 250);
    what_pw.animate({bottom: "+=9vh"}, 250);
    what_pw2.animate({bottom: "+=9vh"}, 250);
    my_pw.animate({bottom: "+=9vh"}, 250);
    what_pw3.animate({bottom: "+=9vh"}, 250);

    my_pw2.css("visibility", "visible");
    my_pw2.animate({opacity: 1}, 500);
  }

  pw2_input.keypress(function(e){
    if(e.which === 13){
      if (please_check.css("visibility") == "hidden") {
        pleaseCheckAppear();
      }
    }
  });

  function pleaseCheckAppear() {
    i_am_agent.animate({bottom: "+=13vh"}, 250);
    what_is_your_name.animate({bottom: "+=13vh"}, 250);
    my_name_is.animate({bottom: "+=13vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=13vh"}, 250);
    what_email.animate({bottom: "+=13vh"}, 250);
    my_email.animate({bottom: "+=13vh"}, 250);
    what_pw.animate({bottom: "+=13vh"}, 250);
    what_pw2.animate({bottom: "+=13vh"}, 250);
    my_pw.animate({bottom: "+=13vh"}, 250);
    what_pw3.animate({bottom: "+=13vh"}, 250);
    my_pw2.animate({bottom: "+=13vh"}, 250);

    please_check.css("visibility", "visible");
    please_check.animate({opacity: 1}, 500, function(){
      setTimeout(detailAppear, 1000);
    });
  }

  function detailAppear() {
    i_am_agent.animate({bottom: "+=16vh"}, 250);
    what_is_your_name.animate({bottom: "+=16vh"}, 250);
    my_name_is.animate({bottom: "+=16vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=16vh"}, 250);
    what_email.animate({bottom: "+=16vh"}, 250);
    my_email.animate({bottom: "+=16vh"}, 250);
    what_pw.animate({bottom: "+=16vh"}, 250);
    what_pw2.animate({bottom: "+=16vh"}, 250);
    my_pw.animate({bottom: "+=16vh"}, 250);
    what_pw3.animate({bottom: "+=16vh"}, 250);
    my_pw2.animate({bottom: "+=16vh"}, 250);
    please_check.animate({bottom: "+=16vh"}, 250);

    username_check.html(username_input.val());
    email_check.html(email_input.val());

    detail.css("visibility", "visible");
    detail.animate({opacity: 1}, 500, function(){
      setTimeout(isCorrectAppear, 1000);
    });
  }

  function isCorrectAppear() {
    i_am_agent.animate({bottom: "+=9vh"}, 250);
    what_is_your_name.animate({bottom: "+=9vh"}, 250);
    my_name_is.animate({bottom: "+=9vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=9vh"}, 250);
    what_email.animate({bottom: "+=9vh"}, 250);
    my_email.animate({bottom: "+=9vh"}, 250);
    what_pw.animate({bottom: "+=9vh"}, 250);
    what_pw2.animate({bottom: "+=9vh"}, 250);
    my_pw.animate({bottom: "+=9vh"}, 250);
    what_pw3.animate({bottom: "+=9vh"}, 250);
    my_pw2.animate({bottom: "+=9vh"}, 250);
    please_check.animate({bottom: "+=9vh"}, 250);
    detail.animate({bottom: "+=9vh"}, 250);

    is_correct.css("visibility", "visible");
    is_correct.animate({opacity: 1}, 500, function(){
      setTimeout(yesNoAppear, 1000);
    });
  }

  function yesNoAppear() {
    i_am_agent.animate({bottom: "+=10vh"}, 250);
    what_is_your_name.animate({bottom: "+=10vh"}, 250);
    my_name_is.animate({bottom: "+=10vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=10vh"}, 250);
    what_email.animate({bottom: "+=10vh"}, 250);
    my_email.animate({bottom: "+=10vh"}, 250);
    what_pw.animate({bottom: "+=10vh"}, 250);
    what_pw2.animate({bottom: "+=10vh"}, 250);
    my_pw.animate({bottom: "+=10vh"}, 250);
    what_pw3.animate({bottom: "+=10vh"}, 250);
    my_pw2.animate({bottom: "+=10vh"}, 250);
    please_check.animate({bottom: "+=10vh"}, 250);
    detail.animate({bottom: "+=10vh"}, 250);
    is_correct.animate({bottom: "+=10vh"}, 250);

    yes_no.css("visibility", "visible");
    yes_no.animate({opacity: 1}, 500);
  }

  yes.click(function(){
    welcomeAppear();
  });

  function welcomeAppear() {
    i_am_agent.animate({bottom: "+=10vh"}, 250);
    what_is_your_name.animate({bottom: "+=10vh"}, 250);
    my_name_is.animate({bottom: "+=10vh"}, 250);
    nice_to_meet_you.animate({bottom: "+=10vh"}, 250);
    what_email.animate({bottom: "+=10vh"}, 250);
    my_email.animate({bottom: "+=10vh"}, 250);
    what_pw.animate({bottom: "+=10vh"}, 250);
    what_pw2.animate({bottom: "+=10vh"}, 250);
    my_pw.animate({bottom: "+=10vh"}, 250);
    what_pw3.animate({bottom: "+=10vh"}, 250);
    my_pw2.animate({bottom: "+=10vh"}, 250);
    please_check.animate({bottom: "+=10vh"}, 250);
    detail.animate({bottom: "+=10vh"}, 250);
    is_correct.animate({bottom: "+=10vh"}, 250);
    yes_no.animate({bottom: "+=10vh"}, 250);

    welcome_username.html(username_input.val());

    welcome.css("visibility", "visible");
    welcome.animate({opacity: 1}, 500, function(){
      setTimeout(madeByEason, 2000);
    });
  }

  function madeByEason() {
    chat.fadeOut(500, function(){
      chat.css("visibility", "hidden");
      agent.animate({left: "110vw"}, 1000);
      user.animate({right: "-10vw"}, 1000);
    });

  }

});


// Is all correct?

// Yes, No

// OK! Welcome, ____!!
