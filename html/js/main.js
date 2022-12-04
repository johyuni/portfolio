$(document).ready(function(){
  var typing = document.getElementById('typewriter');
  var typewriter = new Typewriter(typing, {
    loop: true,
    cursor:'∣'
});
  typewriter.typeString('2022, jo hyunhee portfolio')
    .pauseFor(2500)
    .deleteAll()
    .start();

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
              event.preventDefault();
              $(this).ekkoLightbox();
          });






});
