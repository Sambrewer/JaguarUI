$(document).ready((e) => {
  $('#slide-out-nav').hide()
  $('#search-screen').hide()

  $('#nav-button').on('click', () => {
    $('#slide-out-nav').show()
    $('body').css('overflow-y', 'hidden')
  });

  $('#search-button').click(() => {
    $('#search-screen').show()
    $('.categories-wrapper').hide()
  });

  $('#slide-out-nav').on('click', () => {
    $('#slide-out-nav').hide()
    $('body').css('overflow-y', 'auto')
  });

  $('.slide-out-buttons').click((event) => {
    event.stopPropagation();
  });

  $('#search-close').click(() => {
    $('#search-screen').hide()
    $('.categories-wrapper').show()
  });

  $('#result-limit').change(() => {
    $('#range-limit-value').text($('#result-limit').val())
  })

  $('#min-volume').change(() => {
    $('#range-volume-value').text($('#min-volume').val())
  })
})
