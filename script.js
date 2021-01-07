const resultEle = document.getElementById("result"),
      btn = document.getElementById("button");

btn.addEventListener('click', () => {
  resultEle.innerHTML = '';
  startGame();
});

const startGame = () => {
  var count = 5,
      mileage = 1,
      minStep = 0,
      maxStep = 6,
      petrol = 30,
      position = 0,
      refill = 20,
      end = 100,
      pumpsLoc = petrolPumpsLoc(mileage, count, end);

  resultEle.innerHTML =
    `Game started` +
    "\n" +
    `Petrol pumps generated at ${pumpsLoc}` + '\n';

  while (petrol > 0 && position < end) {
    let maxDistance = Math.floor(Math.random() * maxStep);
    position += maxDistance;
    petrol -= maxDistance;
    minStep++;

    if (pumpsLoc.indexOf(position) !== -1) {
      petrol += refill;
    }

    if (petrol < 0) {
      position += petrol;
      petrol = 0;
    }

    resultEle.innerHTML +=
      "\n" +
      `Move ${minStep} - Car at ${position}, petrol remaining ${petrol} `;
  }

  if (position >= end && petrol >= 0) resultEle.innerHTML += `, reached`;
  else resultEle.innerHTML += `, game over`;

};

const petrolPumpsLoc = (mileage, count, end) => {
  var arr = [];
  while (arr.length < count) {
    var res = Math.floor(Math.random() * end) + mileage;
    if (arr.indexOf(res) === -mileage) arr.push(res);
  }
  return arr.sort();
};
