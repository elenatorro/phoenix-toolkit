'use strict';

/* Yes, this is simple vanilla js. Don't worry. */

function ColorPalette(container) {
  this.container = document.getElementById(container);
}

ColorPalette.prototype.addColor = function(color, number) {
  return {
    tag: 'article',
    text: color + number,
    attr: {
      class: 'pk-box-cnt pk-pdd-s-all pk-bg-' + color + number
    }
  };
};

ColorPalette.prototype.addPalette = function(palette, color, col, paletteArray) {
  var column = Look.create({
    tag: 'div',
    attr: {
      class: 'pk-col pk-' + col
    }
  }, palette);

  paletteArray.forEach(function (paletteNumber) {
    Look.create(ColorPalette.prototype.addColor(color, paletteNumber), column);
  });
};

var colorPalette = new ColorPalette('components-colors');

var palette1 = Look.create({
  tag: 'section',
  attr: {
    class: 'pk-grid'
  }
}, colorPalette.container);

var palette2 = Look.create({
  tag: 'section',
  attr: {
    class: 'pk-row'
  }
}, colorPalette.container);

var palette3 = Look.create({
  tag: 'section',
  attr: {
    class: 'pk-row'
  }
}, colorPalette.container);

var palette4 = Look.create({
  tag: 'section',
  attr: {
    class: 'pk-row'
  }
}, colorPalette.container);

var palette5 = Look.create({
  tag: 'section',
  attr: {
    class: 'pk-row'
  }
}, colorPalette.container);

var palette6 = Look.create({
  tag: 'section',
  attr: {
    class: 'pk-row'
  }
}, colorPalette.container);

var paletteArray = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
];

var paletteArrayPlus = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  'A100',
  'A200',
  'A400',
  'A700'
];

colorPalette.addPalette(palette1, 'red', '2',  paletteArrayPlus);
colorPalette.addPalette(palette1, 'pink', '2', paletteArrayPlus);
colorPalette.addPalette(palette1, 'purple', '2', paletteArrayPlus);

colorPalette.addPalette(palette2, 'deep-purple', '2', paletteArrayPlus);
colorPalette.addPalette(palette2, 'indigo', '2', paletteArrayPlus);
colorPalette.addPalette(palette2, 'blue', '2', paletteArrayPlus);

colorPalette.addPalette(palette3, 'light-blue', '2', paletteArrayPlus);
colorPalette.addPalette(palette3, 'cyan', '2', paletteArrayPlus);
colorPalette.addPalette(palette3, 'teal', '2', paletteArrayPlus);

colorPalette.addPalette(palette4, 'green', '2', paletteArrayPlus);
colorPalette.addPalette(palette4, 'light-green', '2', paletteArrayPlus);
colorPalette.addPalette(palette4, 'lime', '2', paletteArrayPlus);

colorPalette.addPalette(palette5, 'yellow', '2', paletteArrayPlus);
colorPalette.addPalette(palette5, 'amber', '2', paletteArrayPlus);
colorPalette.addPalette(palette5, 'orange', '2', paletteArrayPlus);

colorPalette.addPalette(palette6, 'deep-orange', '2', paletteArrayPlus);
colorPalette.addPalette(palette6, 'brown', '1', paletteArray);
colorPalette.addPalette(palette6, 'grey', '1', paletteArray);
colorPalette.addPalette(palette6, 'blue-grey', '2', paletteArray);
