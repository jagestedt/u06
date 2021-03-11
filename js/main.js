$(() => {
  console.log('jQ rdy');

  // Generalisera, lägg till mouseup-event
  // WIDGET
  $.widget('u06.taskCounter', {
    _create: function () {
      const amountOfCards = $(this.element).find(this.options.countTarget).length; //kollar antalet .cards i elementet
      console.log(this.element, 'create');
      $('.task-counter').text(`Contains ${amountOfCards} cards`);
    },

    // uppdaterar elementet
    update: function () {
      const amountOfCards = $(this.element).find(this.options.countTarget).length; //kollar antalet .cards i elementet
      console.log(this.element);
      $('.task-counter').text(`Contains ${amountOfCards} cards`);
    },

    _destroy: function () {
      this.element.removeClass('taskCounter');
    },
  });

  $('section.has-background-danger').taskCounter({countTarget: '.card'});

  //   taskCounterElement.taskCounter();
  // SORTABLE
  $('#todo, #doing, #done')
    .sortable({
      connectWith: '.connectedSortable',
      update: function (event, ui) {
        console.log(event);
        console.log(ui);
        $.u06.taskCounter().update(); // kör update funktionen i din widget
      },
    })
    .disableSelection();
  // .taskCounter();
  // create dialog-elements
  for (let i = 0; i < 6; i++) {
    const dialogContainer = $('.dialog-container');
    let dialogElement = `<div id="dialog-${i}" class="dialog has-background-light" title="Static dialog">
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

  //   createDialogWidgets();

  $('.btn').on('click', function () {
    let id = $(this).attr('data-id');
    $(`#dialog-${id}`).dialog({
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
    $(`#opener-${id}`).on('click', function () {
      $(`#dialog-${id}`).dialog('open');
    });
    console.log('data-id = ' + id);
    // $(id).dialog('open');
  });

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

  //   taskCounterElement.taskCounter();
});
//   let taskCounterElement = $('#task-counter');
//   const ulElement = $('.task-list');

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
