$(document).ready((e) => {
  $('#slide-out-nav').hide()

  $('#nav-button').on('click', () => {
    $('#slide-out-nav').show()
    $('body').css('overflow-y', 'hidden')
  })

  $('#slide-out-nav').on('click', () => {
    $('#slide-out-nav').hide()
    $('body').css('overflow-y', 'auto')
  })
  $('.slide-out-buttons').click((event) => {
    event.stopPropagation();
  })
})
