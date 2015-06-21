function ColorPalette(container) {
  this.container = document.getElementById(container);
}

ColorPalette.prototype.addColor = function(color, number) {
  return {'tag': 'article', 'text' : color + number, 'attr': {'class': 'content-area bg-' + color + number}};
}

ColorPalette.prototype.addPalette = function(palette,color, number) {
	var colorPalette = this;
	var column = Look.create(
		{'tag': 'div', 'attr': {'class': 'col one'}}, palette);
	var i = 1;
	for (i;i <= number; i++) {
		Look.create(ColorPalette.prototype.addColor(color, i), column);
	}
}

var colorPalette = new ColorPalette('components-colors')
Look.create({'tag': 'h2', 'text': 'Colors'}, colorPalette.container);

var palette1 = Look.create({'tag': 'section', 'attr': {'class': 'grid group'}}, colorPalette.container);
colorPalette.addPalette(palette1, 'gray', 14);
colorPalette.addPalette(palette1, 'orange', 14);
colorPalette.addPalette(palette1, 'red', 14);
colorPalette.addPalette(palette1, 'lime', 14);
colorPalette.addPalette(palette1, 'yellow', 7);
colorPalette.addPalette(palette1, 'pastel', 7);

var palette2 = Look.create({'tag': 'section', 'attr': {'class': 'grid group'}}, colorPalette.container);
colorPalette.addPalette(palette2, 'green', 14);
colorPalette.addPalette(palette2, 'sea', 14);
colorPalette.addPalette(palette2, 'blue', 14);
colorPalette.addPalette(palette2, 'purple', 14);
colorPalette.addPalette(palette2, 'pink', 14);