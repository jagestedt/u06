// WIDGET
$(function () {
  $.widget('u06.testWidget', {
    // default options
    options: {
      color: '#fff',
      backgroundColor: '#000',
    },
    // constructor
    _create: function () {
      this.listItemElement.addClass('testWidget');
      console.log($.u06);
    },

    // sätt konfiguration efter init
    _setOption: function (key, value) {},

    // hur elementet vi kopplar vår widget på ska uppdateras
    _refresh: function () {},

    // hur elementet som har widgeten applicerad på sig ska tas bort

    _destroy: function () {},
  });

  $('.widgetElement').myWidget({
    backgroundColor: '#fff',
    color: '#000',
  });
});
