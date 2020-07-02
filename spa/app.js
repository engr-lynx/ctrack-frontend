$(document).ready(function() {

  $.ajax({
    url: 'https://9kxxoe5qhh.execute-api.ap-southeast-1.amazonaws.com/sb/',
    method: 'get',
    crossDomain: true,
    dataType: 'json',
    success: function(data) {
      const bar = $('#notification-bar');
      data.forEach((item) => {
        bar.append('<h2 class="location">'+item.location+'</h2><span class="count">'+item.count+'</span>');
      })
    },
    error: function() {
      $('#notification-bar').text('An error occurred');
    }
  });
});
