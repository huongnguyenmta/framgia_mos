// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require ckeditor/init
//= require jquery-ui
//= require bootstrap-sprockets
//= require bootstrap.min
//= require bootstrap-select
//= require_tree .

$(document).on('turbolinks:load', function() {
  $('.sidebar-toggle').click(function() {
    $('#body-admin').toggleClass('sidebar-collapse')
  });

  $('.treeview').click(function() {
    if($(this).hasClass('active')){
      $(this).children('.treeview-menu').slideUp()
      $(this).removeClass('active')
      $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-left')
    }
    else {
      $('.treeview-menu').slideUp()
      $('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-left')
      $('.treeview').removeClass('active')
      $(this).children('.treeview-menu').slideDown()
      $(this).addClass('active')
      $(this).find('.fa-angle-left').removeClass('fa-angle-left').addClass('fa-angle-down')
    }
  });

    $('#checkedAll').change(function(){
    if(this.checked){
      $('.checkSingle').each(function(){
        this.checked=true;
      })
    }else{
      $('.checkSingle').each(function(){
        this.checked=false;
      })
    }
  });

  $('.checkSingle').click(function () {
    if ($(this).is(':checked')){
      var isAllChecked = 0;
      $('.checkSingle').each(function(){
        if(!this.checked)
           isAllChecked = 1;
      })
      if(isAllChecked == 0){ $('#checkedAll').prop('checked', true); }
    }
    else {
      $('#checkedAll').prop('checked', false);
    }
  });

});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=1055559407866364';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
$(document).ready(function() {
});
