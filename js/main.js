$(() => {
  console.log('jQ rdy');
});

// SORTABLE
$(function () {
  $('#sortable1, #sortable2, #sortable3')
    .sortable({
      connectWith: '.connectedSortable',
    })
    .disableSelection();
});

// DIALOG 1
$(function () {
  $('#dialog-1').dialog({
    autoOpen: false,
    show: {
      effect: 'fade',
      duration: 200,
    },
    hide: {
      effect: 'fade',
      duration: 200,
    },
  });

  $('#opener-1').on('click', function () {
    $('#dialog-1').dialog('open');
  });
});

// DIALOG 2
$(function () {
  $('#dialog-2').dialog({
    autoOpen: false,
    show: {
      effect: 'fade',
      duration: 200,
    },
    hide: {
      effect: 'fade',
      duration: 200,
    },
  });

  $('#opener-2').on('click', function () {
    $('#dialog-2').dialog('open');
  });
});

// TABS
$(function () {
  $('#tabs').tabs();
});
