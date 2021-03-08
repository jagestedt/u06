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

// DATEPICKER
$(function () {
  $('#datepicker').datepicker({
    altField: '#deadline',
    altFormat: 'DD, d MM, yy',
    showOtherMonths: true,
    selectOtherMonths: false,
  });
});

const heading = $('h1');
// WIDGET
$(function () {
  $.widget('u06.testWidget', {
    // default options
    options: {
      color: '#fff',
      backgroundColor: '#000',
      someValue: 0,
    },
    // constructor
    _create: function () {
      const someValue = `testing options: ${this.options.someValue}`;
      this.element.addClass('testWidget').find('p').text(someValue);
    },

    // // sätt konfiguration efter init
    // _setOption: function (key, value) {},

    // // hur elementet vi kopplar vår widget på ska uppdateras
    // _refresh: function () {},

    // // hur elementet som har widgeten applicerad på sig ska tas bort

    // _destroy: function () {},
  });
  console.log($.u06);

  $('#chuckdiv').testWidget();

  //   $('.widgetElement').myWidget({
  //     backgroundColor: '#fff',
  //     color: '#000',
  //   });
});
