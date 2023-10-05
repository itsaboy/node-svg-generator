const generateLogo = require("./shapes");

testAnswersOne = {
    text: "SVG",
    textColor: "white",
    shape: "Circle",
    bgColor: "blue"
}

testAnswersTwo = {
    text: "SVG",
    textColor: "red",
    shape: "Square",
    bgColor: "yellow"
}

testAnswersThree = {
    text: "SVG",
    textColor: "green",
    shape: "Triangle",
    bgColor: "white"
}

test("create circle logo with white text and blue background", () => {
  expect(generateLogo(testAnswersOne))
    .toEqual(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:300px;height:300px;">
    <circle cx="50" cy="50" r="50" width="300" height="300" fill="blue"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" style="text-align:center;">SVG</text>
</svg>`);
});

test("create square logo with red text and yellow background", () => {
expect(generateLogo(testAnswersTwo))
    .toEqual(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:300px;height:300px;">
    <rect x="0" y="0" width="300" height="300" fill="yellow"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red" style="text-align:center;">SVG</text>
</svg>`);
});

test("create triangle logo with green text and white background", () => {
expect(generateLogo(testAnswersThree))
    .toEqual(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:300px;height:300px;">
    <polygon points="150, 18 244, 182 56, 182" width="300" height="300" fill="white"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="green" style="text-align:center;">SVG</text>
</svg>`);
}); 