$(function() {

  'use strict';

  $(".countdown").countdown();

  $("#countdown-add-options").countdown({
    date: new Date(2020, 11, 31)
  });

  // Methods
  var $countdownMethods = $("#countdown-methods");

  $countdownMethods.countdown({
    autoStart: false
  });

  $("#countdown-start").click(function() {
    $countdownMethods.countdown("start");
  });

  $("#countdown-stop").click(function() {
    $countdownMethods.countdown("stop");
  });

  $("#countdown-end").click(function() {
    $countdownMethods.countdown("end");
  });

  $("#countdown-destroy").click(function() {
    $countdownMethods.countdown("destroy");
  });

  // Options: end
  var $countdownOptionEnd = $("#countdown-option-end");

  $countdownOptionEnd.countdown({
    date: (new Date()).getTime() + 60 * 1000, // 1 minute later
    fast: true,
    end: function() {
      $countdownOptionEnd.text("Countdown end!");
    }
  });
});
