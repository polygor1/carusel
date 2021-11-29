import countSomTmpl from '../templates/countSomTmpl';
// <ul></ul> в якому шукатимемо кляц <li></li>

export default function counterSomething(startCount, currentCount, endCount) {
  if (startCount < 1 || currentCount < 1 || endCount < 1) return;
  let targetCount = currentCount;

  markupCounter('.pagenator');

  const list = document.querySelector(".count__list");
  
  makeupCounter(startCount, currentCount, endCount, list);
  
  list.addEventListener("click", (event) => { // чекаємо на кляц
      event.preventDefault();
      const target = event.target; // приходить кляц
      if (target.nodeName !== "LI") return;
      // знаходимо номер кляцу у списку
      switch (([...list.childNodes].indexOf(target, 0) - 1) / 2) {
        case 0: {
          targetCount = currentCount-5;
          break;
        };
        case 1: {
          targetCount = startCount;
          break;
        };
        case 2: {
          break;
        };        
        case 3: {
          targetCount = currentCount-2;
          break;
        };
        case 4: {
          targetCount = currentCount-1;
          break;
        };
        case 5: {
          targetCount = currentCount;
          break;
        };
        case 6: {
          targetCount = currentCount+1;
          break;
        };
        case 7: {
          targetCount = currentCount+2;
          break;
        };
        case 8: {
          break;
        };               
        case 9: {
          targetCount = endCount;
          break;
        };         
        case 10: {
          targetCount = currentCount+5;
          break;
        };
      };
    console.log(targetCount)
    if (targetCount < 1) targetCount = 1;
    return targetCount;
    });
};

function makeupCounter(startCount, targetCont, endCount, list) {
  const arrowLeft = '<-'; // вставити щось краще
  const arrowRight = '->';

  list.querySelector('.count__start').textContent = startCount;
  list.querySelector('.count__up').textContent = arrowLeft;
  (targetCont - 2 < 1) ?
    list.querySelector('.count__minus-two').classList.add('is-hidden') :
    list.querySelector('.count__minus-two').textContent = targetCont - 2;
  (targetCont - 1 < 1) ?
    list.querySelector('.count__minus-one').classList.add('is-hidden') :
    list.querySelector('.count__minus-one').textContent = targetCont - 1;
  list.querySelector('.count__current').textContent = targetCont;
  list.querySelector('.count__plus-one').textContent = targetCont + 1;
  list.querySelector('.count__plus-two').textContent = targetCont + 2 ;
  list.querySelector('.count__down').textContent = arrowRight;
  list.querySelector('.count__end').textContent = endCount;
};

function markupCounter(classLink) {
  const element = document.querySelector(classLink)
  // если разметки нет то
  if (element !== null) {
    // вставляем разметку индикатора в HTML 
    element.insertAdjacentHTML('beforeend', countSomTmpl());
  };
}