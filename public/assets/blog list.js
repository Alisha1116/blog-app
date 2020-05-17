$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var blog = {item: item.val()};
  
        $.ajax({
          type: 'POST',
          url: '/blog',
          data: blog,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
});