// ширина окна браузера меняется по F5
let intViewportWidth = window.innerWidth;
console.log(intViewportWidth);
// // доступный размер окна экрана монитора
// let lWidth = window.screen.width
// console.log(lWidth)
// let widthL = window.screen.availWidth;

console.log('Размер монитора (или дисплея)')
let screenWidth = window.screen.width
let screenHeight = window.screen.height
console.log(screenWidth)
console.log(screenHeight)
console.log(' Доступный размер экрана')
let availableScreenWidth = window.screen.availWidth
let availableScreenHeight = window.screen.availHeight
console.log(availableScreenWidth)
console.log(availableScreenHeight)
console.log('Размер внешнего окна (или внешний размер окна)')
let windowOuterWidth = window.outerWidth
let windowOuterHeight = window.outerHeight
console.log(windowOuterWidth)
console.log(windowOuterHeight)
console.log('Внутренний размер окна (или размер внутреннего окна)')
let windowInnerWidth = window.innerWidth
let windowInnerHeight = window.innerHeight
console.log(windowInnerWidth)
console.log(windowInnerHeight)
console.log('Размер веб-страницы')
let pageWidth = document.documentElement.scrollWidth
let pageHeight = document.documentElement.scrollHeight
console.log(pageWidth)
console.log(pageHeight)

const breakpoints = {
  mobile: 320, // 4
  tablet: 768, // 8
  desktop: 1024, // 9
}

function cardPerPage() {
  // const items = 4;
  const widthScreen = window.innerWidth;
  if (widthScreen >= breakpoints.tablet && widthScreen < breakpoints.desktop) 
    return 8;
  if (widthScreen >= breakpoints.desktop) 
    return 9;
  return 4; // mobile
}
console.log(cardPerPage(breakpoints))