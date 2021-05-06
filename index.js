const colorList = require("./colorList");
const { rgb2lab: rgbToLab } = require("rgb-lab");
const deltaE = require("delta-e");

class HexToName {
  constructor(language = "en") {
    this.language = language;
  }

  _hexToLab(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const labArray = rgbToLab([r, g, b]);

    return { L: labArray[0], A: labArray[1], B: labArray[2] };
  }

  _computeDistance(hex1, hex2) {
    const lab1 = this._hexToLab(hex1);
    const lab2 = this._hexToLab(hex2);

    return deltaE.getDeltaE00(lab1, lab2);
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
