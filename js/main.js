$(() => {
  console.log('jQ rdy');
});

$(function () {
  $('#sortable1, #sortable2, #sortable3')
    .sortable({
      connectWith: '.connectedSortable',
    })
    .disableSelection();
});
