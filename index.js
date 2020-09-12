let bars = [];
let noOfBars = 0;
let boxwidth, stop = false;
let container = document.getElementById("box");
let start = document.getElementById("start");
let resett = document.getElementById("reset");

let btn = document.getElementsByClassName('buttons');
let number = document.getElementById("input");

const submit = () => {
  noOfBars = document.getElementById("num").value;
if(noOfBars <= 3){
  modal.style.display = 'flex';
  return;
}
  container.classList.remove('hide');
  start.classList.remove('hide');
  resett.classList.remove('hide');
  number.classList.add('hide');
 

  boxwidth = noOfBars*50;
  container.style.width = `${boxwidth}px`;
  generateBars();
 };
 

const generateBars = () => {
   for (let i = 0; i < noOfBars; i++) {
    let barEl = document.createElement("div");
    barEl.className = "bar";
    barEl.setAttribute("id", i.toString());
    let ran = 120 + Math.ceil(Math.random() * 300);
    barEl.style.height = `${ran}px`;
    barEl.innerHTML = ran;
    let mar = 500 - ran;
    barEl.style.marginTop = `${mar}px`;
    bars[i] = barEl;
    container.appendChild(barEl);
  }
};

const reset = () => {
  for (let i = 0; i < noOfBars; i++){
bars[i].style.display = 'none';
  }
  generateBars();
  stop = true;
}

const StartSorting = () => {
stop = false;
Starter();
}

const Starter = () => {
 let intervalId = setInterval(() => {
    if(stop === true){
      clearInterval(intervalId);
      return;
    }

    bubbleSorting();
  }, 700);
};

// const sort1 = () =>{
//   if(bars[1].innerHTML > bars[2].innerHTML){
//   let id1 = bars[1];
// let id2 = bars[2];
// exchange1(id1, id2);

// swap(1, 2);

// }
// }

// const sort2 = () =>{
//   if(bars[2].innerHTML > bars[3].innerHTML){
//     let id1 = bars[2];
//    let id2 = bars[3];

//   exchange1(id1, id2);
//   swap(2,3);
//   }
//   }

//   const sort3 = () =>{
//     if(bars[3].innerHTML > bars[4].innerHTML){
//       let id1 = bars[3];
//      let id2 = bars[4];

//     exchange1(id1, id2);
//     swap(3,4);
//     }
//   }
//     const sort4 = () =>{
//       if(bars[4].innerHTML > bars[5].innerHTML){
//         let id1 = bars[4];
//        let id2 = bars[5];

//       exchange1(id1, id2);
//       swap(4,5);

//       }
//     }
