const colorList = require("./colorList");

class HexToName {
  constructor(language = "en") {
    this.language = language;
  }

  _computeDistance(color1, color2) {
    const red1 = parseInt(color1.slice(1, 3), 16);
    const green1 = parseInt(color1.slice(3, 5), 16);
    const blue1 = parseInt(color1.slice(5, 7), 16);
    const red2 = parseInt(color2.slice(1, 3), 16);
    const green2 = parseInt(color2.slice(3, 5), 16);
    const blue2 = parseInt(color2.slice(5, 7), 16);

    return Math.sqrt(
      Math.abs(
        (red1 - red2) ** 2 + (green1 - green2) ** 2 + (blue1 - blue2) ** 2
      )
    );
  }

  convert(hex) {
    const colorsWithDistance = colorList.map((colorFromList) => ({
      ...colorFromList,
      distance: this._computeDistance(colorFromList.hex, hex),
    }));
    const distances = colorsWithDistance.map(({ distance }) => distance);

    const minimumIndex = distances.indexOf(Math.min(...distances));

    return colorsWithDistance[minimumIndex][this.language];
  }
}

module.exports = HexToName;
