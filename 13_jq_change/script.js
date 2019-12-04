$(() => {
 $('#selector').change(() => {
    $(".choice").slideUp(800)
    $('#' + $('#selector').val()).slideDown(800)
    
  })
})