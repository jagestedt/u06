$(() => {
  console.log('jQ rdy');

  // SORTABLE
  $('#sortable1, #sortable2, #sortable3')
    .sortable({
      connectWith: '.connectedSortable',
    })
    .disableSelection();

  // DIALOG 1
  let numberOfCards = $('.task-list').children().length;
  console.log('numberOfCards: ' + numberOfCards);

  function createDialogWidgets() {
    for (let i = 0; i < numberOfCards + 1; i++) {
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
  //   create html-elements
  let dialogElement;
  const dialogContainer = $('.dialog-container');

  for (let i = 0; i < numberOfCards + 1; i++) {
    dialogElement = `<div id="dialog-${i}" class="has-background-light" title="Static dialog">
            <p class="dialog-text">Info about task ${i}</p>
        </div>`;
    dialogContainer.append(dialogElement);
  }

  createDialogWidgets();

  // TABS
  $('#tabs').tabs();

  // DATEPICKER
  $('#datepicker').datepicker({
    altField: '#deadline',
    altFormat: 'DD, d MM, yy',
    showOtherMonths: true,
    selectOtherMonths: false,
  });

  // WIDGET
  let taskCounterElement = $('#task-counter');
  const ulElement = $('.task-list');
  let listLength = ulElement.children().length;

  $.widget('u06.taskCounter', {
    options: {
      value: 0,
    },

    _create: function () {
      this.element.addClass('taskCounter');
      this._update();
    },

    _setOption: function (key, value) {
      this.options[key] = value;
      this._update();
    },
    // uppdaterar elementet
    _update: function () {
      const progress = `Contains: ${this.options.value} tasks`;
      this.element.text(progress);
      if (this.options.value === 100) {
        this._trigger('complete', null, {value: 100});
      }
    },

    value: function (value) {
      if (value === undefined) {
        return this.options.value;
      } else {
        this.options.value = this._constrain(value);
        this._update();
      }
    },

    _destroy: function () {
      this.element.removeClass('taskCounter').text('');
    },
  });

  taskCounterElement.taskCounter({value: listLength});

  console.log(listLength);
});
