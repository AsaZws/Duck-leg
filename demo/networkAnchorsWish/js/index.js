$(".ui-whitespace .tab_button").click(function() {
  $(this).addClass("tab_button_active").siblings().removeClass("tab_button_active");
  $(".tab_content .tab_contenter").hide().eq($(".ui-whitespace .tab_button").index(this)).show();
})