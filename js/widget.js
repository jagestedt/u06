// // WIDGET
// $(function () {
//   $.widget('u06.testWidget', {
//     // default options
//     options: {
//       color: '#fff',
//       backgroundColor: '#000',
//     },
//     // constructor
//     _create: function () {
//       this.listItemElement.addClass('testWidget');
//       console.log($.u06);
//     },

//     // sätt konfiguration efter init
//     _setOption: function (key, value) {},

//     // hur elementet vi kopplar vår widget på ska uppdateras
//     _refresh: function () {},

//     // hur elementet som har widgeten applicerad på sig ska tas bort

//     _destroy: function () {},
//   });

//   $('.widgetElement').myWidget({
//     backgroundColor: '#fff',
//     color: '#000',
//   });
// });

$(() => {
  $.widget('chas.progressbar', {
    options: {
      value: 0,
    },

    _create: function () {
      this.element.addClass('progressbar');
      this._update();
    },

    _setOption: function (key, value) {
      this.options[key] = value;
      this._update();
    },

    _update: function () {
      const progress = `${this.options.value} %`;
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

    _constrain: function (value) {
      if (value > 100) {
        value = 100;
      }
      if (value < 0) {
        value = 0;
      }
      return value;
    },

    _destroy: function () {
      this.element.removeClass('progressbar').text('');
    },
  });

  const bar = $('#chuckdiv p').progressbar({value: 20});

  bar.progressbar('value', 50);

  bar.progressbar({
    complete: function (event, data) {
      alert('callback');
    },
  });

  bar.progressbar('value', 100);
});
