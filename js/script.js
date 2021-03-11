$(() => {
  console.log('jQ rdy');

  // SORTABLE
  $('#todo, #doing, #done')
    .sortable({
      connectWith: '.connectedSortable',
      create: function (event, ui) {
        const numberOfCards = $('.task-list').children().length;
        const output = `Contains: ${numberOfCards} tasks`;
        $('#task-counter').text(output);
      },
      update: function (event, ui) {
        const numberOfCards = $('.task-list').children().length;
        const output = `Contains: ${numberOfCards} tasks`;
        $('#task-counter').text(output);
      },
    })
    .disableSelection();
});
