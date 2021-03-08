$(function () {
  $.widget('my.widget', {
    // definiera inställningar
    options: {},

    // definiera logiken
    _create: function () {},

    // sätt konfiguration efter init
    _setOption: function (key, value) {},

    // hur elementet vi kopplar vår widget på ska uppdateras
    _refresh: function () {},

    // hur elementet som har widgeten applicerad på sig ska tas bort

    _destroy: function () {},
  });
});
