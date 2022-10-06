const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const clicker = document.getElementById("clicker");
const tracker = document.getElementById("tracker");
const mousetracker = document.getElementById("mousetracker");

let cookieCount = 0;
let bonus = 1;
let cost = 100;
let clickerCost = 25;
let perSecond = 0;

cookie.onclick = () => {
  cookieCount += bonus;
  counter.innerHTML = `Cookies: ${cookieCount}`;
};

upgrade.onclick = () => {
  if (cookieCount >= cost) {
    cookieCount -= cost;
    bonus++;
    cost *= 2;
    counter.innerHTML = `Cookies: ${cookieCount}`;
    upgrade.innerHTML = `Mouse Upgrade<br>Cost: ${cost}`;
    mousetracker.innerHTML = `Cookies Per Click: ${bonus}`;
  }
};

clicker.onclick = () => {
  if (cookieCount >= clickerCost) {
    if (perSecond == 0) {
      setInterval(() => {
        cookieCount += perSecond;
        counter.innerHTML = `Cookies: ${cookieCount}`;
      }, 1000);
    }
    cookieCount -= clickerCost;
    perSecond++;
    clickerCost += 25;
    counter.innerHTML = `Cookies: ${cookieCount}`;
    clicker.innerHTML = `Clicker Upgrade<br>Cost: ${clickerCost}`;
    tracker.innerHTML = `Cookies Per Second: ${perSecond}`;
  }
};
