// parent
class Shape {
  constructor(text, textColor, bgColor, coords) {
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
    this.coords = coords;
  }
}

// children
class Circle extends Shape {
  constructor(text, textColor, bgColor, coords) {
    super(text, textColor, bgColor, coords);
  }
}

class Triangle extends Shape {
  constructor(text, textColor, bgColor, coords) {
    super(text, textColor, bgColor, coords);
  }
}

class Square extends Shape {
  constructor(text, textColor, bgColor, coords) {
    super(text, textColor, bgColor, coords);
  }
}

const generateLogo = (answers) => {
  let logo = new Shape(answers.text, answers.textColor, answers.bgColor);
  switch (answers.shape) {
    case "Circle": // creates circle logo
      logo = new Circle(answers.text, answers.textColor, answers.bgColor);
      logo.coords = `<circle cx="50" cy="50" r="50" width="300" height="300" fill="${answers.bgColor}"/>`;
      break;
    case "Triangle": // creates triangle logo
      logo = new Triangle(answers.text, answers.textColor, answers.bgColor);
      logo.coords = `<polygon points="150, 18 244, 182 56, 182" width="300" height="300" fill="${answers.bgColor}"/>`;
      break;
    case "Square": // creates square logo
      logo = new Square(answers.text, answers.textColor, answers.bgColor);
      logo.coords = `<rect x="0" y="0" width="300" height="300" fill="${answers.bgColor}"/>`;
      break;
    default:
      throw new Error("Something went wrong!");
  }
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:300px;height:300px;">
    ${logo.coords}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${logo.textColor}" style="text-align:center;">${logo.text}</text>
</svg>`;
};

module.exports = generateLogo;
