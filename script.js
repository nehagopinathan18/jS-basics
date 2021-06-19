//get html element
const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const orange = document.querySelector(".orange");
const violet = document.querySelector(".violet");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

const getBgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
    
};

// console.log("color", getBgColor(red));
// var color = getBgColor(red);
// red.addEventListener('mouseenter', () => {
//     center.style.background = color;
// });

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    });
}
magicColorChanger(red, getBgColor(red));
magicColorChanger(cyan, getBgColor(cyan));
magicColorChanger(violet, getBgColor(violet));
magicColorChanger(orange, getBgColor(orange));
magicColorChanger(pink, getBgColor(pink));

