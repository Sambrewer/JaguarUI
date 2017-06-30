$(document).ready((e) => {
  $('#slide-out-nav').hide()
  $('.search-wrapper').hide()
  $('.save-search-modal-wrapper').hide()
  $('.sort-wrapper').hide()

  //Side Menu

  $('#nav-button').on('click', () => {
    $('#slide-out-nav').show()
    $('body').css('overflow-y', 'hidden')
  });

  $('#slide-out-nav').on('click', () => {
    $('#slide-out-nav').hide()
    $('body').css('overflow-y', 'auto')
  });

  $('.slide-out-buttons').click((event) => {
    event.stopPropagation();
  });

  //Search Screen

  $('#search-button').click(() => {
    $('.search-wrapper').show()
    $('.categories-wrapper').hide()
  });

  $('.save-search button').click(() => {
    $('.save-search-modal-wrapper').show()
    $('html, body').animate({
      scrollTop: $('.save-search-modal-wrapper').offset().top
    })
    $('body').css('overflow', 'hidden')
  })

  $('#cancel-save').click(() => {
    $('body').css('overflow-y', 'auto')
    $('.save-search-modal-wrapper').hide()
  })

  $('#search-close').click(() => {
    $('.search-wrapper').hide()
    $('.categories-wrapper').show()
  });

  $('#result-limit').change(() => {
    $('#range-limit-value').text($('#result-limit').val())
  })

  $('#min-volume').change(() => {
    $('#range-volume-value').text($('#min-volume').val())
  })

  //Sort Screen

  $('#sort-show').click(() => {
    $('.sort-wrapper').show()
    $('body').css('overflow-y', 'hidden')
  })

  $('#avg-revenue').click(() => {
    if ($('#avg-revenue').parent().children().length === 1) {
      $('#avg-revenue').css('color', 'dodgerblue')

      $('#avg-revenue').parent().append('<i class="fa fa-check" style="color: dodgerblue;"></i>')

      $('#avg-revenue').parent().css({'display': 'flex', 'justify-content': 'space-between', 'align-items': 'center'})
    } else {
      $('#avg-revenue').parent().children('i').remove()

      $('#avg-revenue').css('color', 'black')
    }
    console.log($('#avg-revenue').parent().children().length);
    // if ($('#avg-revenue').parent())
  })

  $('#num-products').click(() => {
    if ($('#num-products').parent().children().length === 1) {
      $('#num-products').css('color', 'dodgerblue')

      $('#num-products').parent().append('<i class="fa fa-check" style="color: dodgerblue;"></i>')

      $('#num-products').parent().css({'display': 'flex', 'justify-content': 'space-between', 'align-items': 'center'})
    } else {
      $('#num-products').parent().children('i').remove()

      $('#num-products').css('color', 'black')
    }
  })

  $('#avg-price').click(() => {
    if ($('#avg-price').parent().children().length === 1) {
      $('#avg-price').css('color', 'dodgerblue')

      $('#avg-price').parent().append('<i class="fa fa-check" style="color: dodgerblue;"></i>')

      $('#avg-price').parent().css({'display': 'flex', 'justify-content': 'space-between', 'align-items': 'center'})
    } else {
      $('#avg-price').parent().children('i').remove()

      $('#avg-price').css('color', 'black')
    }
  })

  $('#avg-volume').click(() => {
    if ($('#avg-volume').parent().children().length === 1) {
      $('#avg-volume').css('color', 'dodgerblue')

      $('#avg-volume').parent().append('<i class="fa fa-check" style="color: dodgerblue;"></i>')

      $('#avg-volume').parent().css({'display': 'flex', 'justify-content': 'space-between', 'align-items': 'center'})
    } else {
      $('#avg-volume').parent().children('i').remove()

      $('#avg-volume').css('color', 'black')
    }
  })

  $('#page-space').click(() => {
    if ($('#page-space').parent().children().length === 1) {
      $('#page-space').css('color', 'dodgerblue')

      $('#page-space').parent().append('<i class="fa fa-check" style="color: dodgerblue;"></i>')

      $('#page-space').parent().css({'display': 'flex', 'justify-content': 'space-between', 'align-items': 'center'})
    } else {
      $('#page-space').parent().children('i').remove()

      $('#page-space').css('color', 'black')
    }
   })

  $('#avg-review').click(() => {
    if ($('#avg-review').parent().children().length === 1) {
      $('#avg-review').css('color', 'dodgerblue')

      $('#avg-review').parent().append('<i class="fa fa-check" style="color: dodgerblue;"></i>')

      $('#avg-review').parent().css({'display': 'flex', 'justify-content': 'space-between', 'align-items': 'center'})
    } else {
      $('#avg-review').parent().children('i').remove()

      $('#avg-review').css('color', 'black')
    }
  })
  $('#max-revenue').click(() => {
    if ($('#max-revenue').parent().children().length === 1) {
      $('#max-revenue').css('color', 'dodgerblue')

      $('#max-revenue').parent().append('<i class="fa fa-check" style="color: dodgerblue;"></i>')

      $('#max-revenue').parent().css({'display': 'flex', 'justify-content': 'space-between', 'align-items': 'center'})
    } else {
      $('#max-revenue').parent().children('i').remove()

      $('#max-revenue').css('color', 'black')
    }
  })

  $('#sort-cancel').click(() => {
    $('.sort-wrapper').hide()
    $('body').css('overflow-y', 'auto')
  })
  $('#sort-done').click(() => {
    $('.sort-wrapper').hide()
    $('body').css('overflow-y', 'auto')
  })
})
