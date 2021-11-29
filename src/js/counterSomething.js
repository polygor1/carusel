import countSomTmpl from '../templates/countSomTmpl';
// <ul></ul> в якому шукатимемо кляц <li></li>

export default function counterSomething(startCount, currentCount, endCount, foo) {
  if (startCount < 1 || currentCount < 1 || endCount < 1) return;

  markupCounter('.pagenator');
  const list = document.querySelector(".count__list");
  makeupCounter(startCount, currentCount, endCount, list);

  list.addEventListener("click", (event) => { // чекаємо на кляц
    let count = 0;
    event.preventDefault();
    const target = event.target; // приходить кляц
    if (target.nodeName !== "LI") return;
    // знаходимо номер у списку по кляцу
    switch (([...list.childNodes].indexOf(target, 0) - 1) / 2) {
      case 0: {
        count = currentCount-5;
        break;
      };
      case 1: {
        count = startCount;
        break;
      };
      case 2: {
        break;
      };        
      case 3: {
        count = currentCount-2;
        break;
      };
      case 4: {
        count = currentCount-1;
        break;
      };
      case 5: {
        count = currentCount;
        break;
      };
      case 6: {
        count = currentCount+1;
        break;
      };
      case 7: {
        count = currentCount+2;
        break;
      };
      case 8: {
        break;
      };               
      case 9: {
        count = endCount;
        break;
      };         
      case 10: {
        count = currentCount+5;
        break;
      };
    };
    if (count < startCount) count = startCount;
    if (count > endCount) count = endCount;
    if (currentCount !== count) {
      foo(count);
    }
    currentCount = count;
    makeupCounter(startCount, currentCount, endCount, list);
  });
};

function makeupCounter(start, target, end, list) {
  const arrowLeft = '<-'; // вставити щось краще
  const arrowRight = '->';

  list.querySelector('.count__up').textContent = arrowLeft;

  if (target <= start + 2)
  { list.querySelector('.count__start').classList.add('is-hidden') } else {
    list.querySelector('.count__start').classList.remove('is-hidden');
    list.querySelector('.count__start').textContent = start
  };

  if (target - 2 < start)
  { list.querySelector('.count__minus-two').classList.add('is-hidden') } else {
    list.querySelector('.count__minus-two').classList.remove('is-hidden');
    list.querySelector('.count__minus-two').textContent = target - 2
  };
  
  if (target - 1 < start)
  { list.querySelector('.count__minus-one').classList.add('is-hidden') } else {
    list.querySelector('.count__minus-one').classList.remove('is-hidden');
    list.querySelector('.count__minus-one').textContent = target - 1
  };

  list.querySelector('.count__current').textContent = target;

  if (target + 1 > end)
  { list.querySelector('.count__plus-one').classList.add('is-hidden') } else {
    list.querySelector('.count__plus-one').classList.remove('is-hidden');
    list.querySelector('.count__plus-one').textContent = target + 1
  };
  
  if (target + 2 > end)
  { list.querySelector('.count__plus-two').classList.add('is-hidden') } else {
    list.querySelector('.count__plus-two').classList.remove('is-hidden');
    list.querySelector('.count__plus-two').textContent = target + 2
  };

  if (target >= end-2)
  { list.querySelector('.count__end').classList.add('is-hidden') } else {
    list.querySelector('.count__end').classList.remove('is-hidden');
    list.querySelector('.count__end').textContent = end
  };

  list.querySelector('.count__down').textContent = arrowRight;
};

function markupCounter(classLink) {
  const element = document.querySelector(classLink)
  // если разметки нет то
  if (element !== null) {
    // вставляем разметку индикатора в HTML 
    element.insertAdjacentHTML('beforeend', countSomTmpl());
  };
}