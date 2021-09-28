$(document).ready(function() {
    $('#downloadBtn').click(() => {
      $.print(".page__content-col-md");
  });
});



$(document).ready(function() {
  $('#completeBtn').click(() => {
    $('#notificationModal').modal('show');
    $('#completeBtn').html('დასრულება')
});
});
