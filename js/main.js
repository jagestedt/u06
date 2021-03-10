$(() => {
  console.log('jQ rdy');

  // SORTABLE
  $('#todo, #doing, #done')
    .sortable({
      connectWith: '.connectedSortable',
    })
    .disableSelection();

  // DIALOG
  let numberOfCards = $('.task-list').children().length;
  //   console.log('Contains: ' + numberOfCards + ' tasks');

  function createDialogWidgets() {
    for (let i = 0; i < numberOfCards; i++) {
      $(`#dialog-${i}`).dialog({
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
      $(`#opener-${i}`).on('click', function () {
        $(`#dialog-${i}`).dialog('open');
      });
      console.log(i);
    }
  }
  //   create dialog-html
  let dialogElement;
  const dialogContainer = $('.dialog-container');

  for (let i = 0; i < 6; i++) {
    dialogElement = `<div id="dialog-${i}" class="dialog has-background-light" title="Static dialog">
    <div id="tabs" class="tabs my-tabs">
              <ul>
                <li><a href="#tabs-1">First Man</a></li>
                <li><a href="#tabs-2">Second breakfast</a></li>
              </ul>
              <section id="tabs-1" class="has-background-success p-2">
                <p>1</p>
              </section>
              <section id="tabs-2" class="has-background-primary p-2">
                <p>2</p>
              </section>
            </div>
            <p class="dialog-text">Info about task ${i}</p>
        </div>`;
    dialogContainer.append(dialogElement);
  }

  $(function () {
    $('.dialog').dialog({
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
  });

  createDialogWidgets();

  // $('.btn').on('click', function () {
  //   let id = $(this).attr('data-id');
  //   console.log(id);
  //   $(id).dialog('open');
  // });
  // TABS
  //   $('#tabs').tabs();
  $('.dialog').tabs();

  // DATEPICKER
  $('#datepicker').datepicker({
    altField: '#deadline',
    altFormat: 'DD, d MM, yy',
    showOtherMonths: true,
    selectOtherMonths: false,
  });

  // Generalisera, lägg till mouseup-event
  // WIDGET
  let taskCounterElement = $('#task-counter');
  const ulElement = $('.task-list');

  $.widget('u06.taskCounter', {
    // default
    options: {
      value: 0,
      //   output: `Contains: ${listLength} tasks`,
      output: $('.task-list').children().length + ' tasks',
      x: console.log('options:' + $('.task-list').children().length),
    },

    _create: function () {
      this.element.addClass('taskCounter');
      this._update();
      this._refresh();
    },

    _setOption: function (key, value) {
      this.options[key] = value;
      this._update();
    },
    // uppdaterar elementet
    _update: function () {
      console.log('update');
      $('.card').mouseup(function () {
        let listLength = ulElement.children().length;
        const output = `${listLength} tasks`;
        console.log(output);
        taskCounterElement.text(output);
      });
    },

    value: function (value) {
      if (value === undefined) {
        return this.options.value;
      } else {
        this.options.value = this._constrain(value);
        this._update();
      }
    },

    _refresh: function () {
      console.log('refresh');
    },

    _destroy: function () {
      this.element.removeClass('taskCounter');
    },
  });

  taskCounterElement.taskCounter();
});
//   let taskCounterElement = $('#task-counter');
//   const ulElement = $('.task-list');

//   $('#theme-switch').click(() => {
//     if ($(this).prop('checked') == true) {
//       console.log('checked');
//     } else {
//       console.log('un-checked');
//     }
//   });

//   $('#theme-switch').click(function () {
//     if ($(this).prop('checked') == true) {
//       console.log('Checkbox is checked.');
//       $('body').addClass('dark-mode');
//     } else {
//       console.log('Checkbox is unchecked.');
//       $('body').removeClass('dark-mode');
//     }
//   });

//   //   $('.card').mouseup().taskCounter();

//   $.widget('u06.themeSwitch', {
//     options: {
//       value: false,
//     },

//     _create: function () {
//       this.element.addClass('dark-mode');
//       console.log(this);
//       this._update();
//     },

//     _setOption: function (key, value) {
//       this.options[key] = value;
//       this._update();
//     },
//     // uppdaterar elementet
//     _update: function () {
//       $('.card').mouseup(function () {
//         let listLength = ulElement.children().length;
//         const text = `Contains: ${listLength} tasks`;
//         console.log(this);
//         // this.element.text(text);
//       });
//     },

//     value: function (value) {
//       if (value === undefined) {
//         return this.options.value;
//       } else {
//         this.options.value = this._constrain(value);
//         this._update();
//       }
//     },

//     _destroy: function () {
//       this.element.removeClass('.dark-mode');
//     },
//   });
//   $('#theme-switch').click().themeSwitch();
//   taskCounterElement.taskCounter();
// });
