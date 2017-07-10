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
    $('section').css('overflow-y', 'hidden');
  });

  $('#edit-search').click((e) => {
    $('.search-wrapper').show()

    $('#range-limit-value').html($(e.target).parent().parent().parent().prev().find($('.limit')).text())
    $('#result-limit').val($(e.target).parent().parent().parent().prev().find($('.limit')).text())

    $('#range-volume-value').html($(e.target).parent().parent().parent().prev().find($('.mnvol')).text())
    $('#min-volume').val($(e.target).parent().parent().parent().prev().find($('.mnvol')).text())

    $('#price-min').val($(e.target).parent().parent().parent().prev().find($('.mnprc')).text())

    $('#price-max').val($(e.target).parent().parent().parent().prev().find($('.mxprc')).text())

    $('#review-min').val($(e.target).parent().parent().parent().prev().find($('.mnrvw')).text())

    $('#review-max').val($(e.target).parent().parent().parent().prev().find($('.mxrvw')).text())

    // $('#sort-by').val($(e.target).parent().parent().parent().prev().find($('.sort-by')).text())

    $('#keywords').val($(e.target).parent().parent().parent().prev().find($('.kywrd')).text())

    console.log($(e.target).parent().parent().parent().prev().find($('.limit')).text())
  });

  $('.save-search button').click(() => {
    $('.save-search-modal-wrapper').show()
    $('html, body').animate({
      scrollTop: $('.save-search-modal-wrapper').offset().top
    })
    $('body').css('overflow', 'hidden')
  });

  $('#cancel-save').click(() => {
    $('body').css('overflow-y', 'auto')
    $('.save-search-modal-wrapper').hide()
  });

  $('#search-close').click(() => {
    $('.search-wrapper').hide()
    $('body').css('overflow-y', 'auto')
  });

  $('#result-limit').change(() => {
    $('#range-limit-value').text($('#result-limit').val())
  });

  $('#min-volume').change(() => {
    $('#range-volume-value').text($('#min-volume').val())
  });

  //Sort Screen

  $('#sort-show').click(() => {
    $('.sort-wrapper').show()
    $('body').css('overflow-y', 'hidden')
  });

  $('#sort-cancel').click(() => {
    $('.sort-wrapper').hide()
    $('body').css('overflow-y', 'auto')
  });

  $('#sort-done').click(() => {
    $('.sort-wrapper').hide()
    $('body').css('overflow-y', 'auto')
  });

  //Results Page

  var fave = false;

  $('.product-results-fave').click((e) => {
    if (!fave){
      $(e.target).closest('i').css('color', 'gold')
      fave = !fave
    } else if (fave) {
      $(e.target).closest('i').css('color', '#aaa')
      fave  = !fave
    }
  });
})
