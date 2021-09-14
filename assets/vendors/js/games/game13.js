$(document).ready(function() {
    $('#downloadBtn').click(() => {
      $.print(".page__content-col-md");
  });
});