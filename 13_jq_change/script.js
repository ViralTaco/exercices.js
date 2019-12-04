$(() => {
 $('#selector').change(() => {
    $('.choice').slideUp(800)
    const selection = $('#selector').val()
    
    if ($('.choice:visible').length > 0) {
      $('#' + selection).delay(1000).slideDown(800)
    } else {
      $('#' + selection).slideDown(800)
    }
  })
})