const exchange1 = (id1, id2) => {
  anime({
    targets: id1,
    translateX: "+=50",
    duration: 300,
    easing: "linear"
  });

  anime({
    targets: id2,
    translateX: "-=50",
    duration: 300,
     easing: "linear"
  });
};

const bubbleSorting = () => {
  let flag = false;
  for (let i = 0; i < noOfBars ; i++) {
    for (let j = 0; j < noOfBars - i - 1 ; j++) {
      bars[j].style.color = 'red';

      if (bars[j].innerHTML > bars[j + 1].innerHTML) {
        let id1 = bars[j];
        let id2 = bars[j + 1];
        exchange1(id1, id2);
        swap(j, j + 1);
        flag = true;
        break;
      }
      bars[j].style.color = 'green';
  }
  bars[i].style.color = 'green';
    if (flag === true) {
      break;
    }
  }
};


let temp;
const swap = (i, j) => {
  temp = bars[i];
  bars[i] = bars[j];
  bars[j] = temp;
};
