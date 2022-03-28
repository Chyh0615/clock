//Taiawn
const hr = document.querySelector(".hr-tpi");
const min = document.querySelector(".min-tpi");
const sec = document.querySelector(".sec-tpi");

function setDate() {
  const now = new Date();

  const getSec = now.getSeconds();
  const getMin = now.getMinutes();
  const getHr = now.getHours();

  const secDegree = (getSec / 60) * 360;
  const minDegree = ((getMin / 60) * 360) + ((getSec / 60) * 6);
  const hrDegree = (getHr / 12) * 360 + (getMin / 60) * 30 + ((getSec / 60) / 60) * 30;

  sec.style.transform = `rotate(${secDegree}deg)`;
  min.style.transform = `rotate(${minDegree}deg)`;
  hr.style.transform = `rotate(${hrDegree}deg)`;

}
setInterval(setDate, 1000);

//Kyoto
const hrKyo = document.querySelector(".hr-kyo");
const minKyo = document.querySelector(".min-kyo");
const secKyo = document.querySelector(".sec-kyo");

function setKyoDate() {
  const now = new Date();

  const getSec = now.getSeconds();
  const getMin = now.getMinutes();
  const getHr = now.getHours();

  const secDegree = (getSec / 60) * 360;
  const minDegree = ((getMin / 60) * 360) + ((getSec / 60) * 6);
  const hrDegree = ((getHr + 1) / 12) * 360 + (getMin / 60) * 30 + ((getSec / 60) / 60) * 30;

  secKyo.style.transform = `rotate(${secDegree}deg)`;
  minKyo.style.transform = `rotate(${minDegree}deg)`;
  hrKyo.style.transform = `rotate(${hrDegree}deg)`;
}
setInterval(setKyoDate, 1000);

//SyoWa Station
const hrSw = document.querySelector(".hr-sw");
const minSw = document.querySelector(".min-sw");
const secSw = document.querySelector(".sec-sw");

function setSwDate() {
  const now = new Date();

  const getSec = now.getSeconds();
  const getMin = now.getMinutes();
  const getHr = now.getHours();

  const secDegree = (getSec / 60) * 360;
  const minDegree = ((getMin / 60) * 360) + ((getSec / 60) * 6);
  const hrDegree = ((getHr - 5) / 12) * 360 + (getMin / 60) * 30 + ((getSec / 60) / 60) * 30;

  secSw.style.transform = `rotate(${secDegree}deg)`;
  minSw.style.transform = `rotate(${minDegree}deg)`;
  hrSw.style.transform = `rotate(${hrDegree}deg)`;

}
setInterval(setSwDate, 1000);

//London
const hrLdn = document.querySelector(".hr-ldn");
const minLdn = document.querySelector(".min-ldn");
const secLdn = document.querySelector(".sec-ldn");

function setLdnDate() {
  const now = new Date();

  const getSec = now.getSeconds();
  const getMin = now.getMinutes();
  const getHr = now.getHours();

  const secDegree = (getSec / 60) * 360;
  const minDegree = ((getMin / 60) * 360) + ((getSec / 60) * 6);
  const hrDegree = ((getHr - 9) / 12) * 360 + (getMin / 60) * 30 + ((getSec / 60) / 60) * 30;

  secLdn.style.transform = `rotate(${secDegree}deg)`;
  minLdn.style.transform = `rotate(${minDegree}deg)`;
  hrLdn.style.transform = `rotate(${hrDegree}deg)`;
}
setInterval(setLdnDate, 1000);

//Paris
const hrPar = document.querySelector(".hr-par");
const minPar = document.querySelector(".min-par");
const secPar = document.querySelector(".sec-par");

function setParDate() {
  const now = new Date();

  const getSec = now.getSeconds();
  const getMin = now.getMinutes();
  const getHr = now.getHours();

  const secDegree = (getSec / 60) * 360;
  const minDegree = ((getMin / 60) * 360) + ((getSec / 60) * 6);
  const hrDegree = ((getHr - 8) / 12) * 360 + (getMin / 60) * 30 + ((getSec / 60) / 60) * 30;

  secPar.style.transform = `rotate(${secDegree}deg)`;
  minPar.style.transform = `rotate(${minDegree}deg)`;
  hrPar.style.transform = `rotate(${hrDegree}deg)`;
}
setInterval(setParDate, 1000);

//Washington, D.C.
const hrDc = document.querySelector(".hr-dc");
const minDc = document.querySelector(".min-dc");
const secDc = document.querySelector(".sec-dc");

function setDcDate() {
  const now = new Date();

  const getSec = now.getSeconds();
  const getMin = now.getMinutes();
  const getHr = now.getHours();

  const secDegree = (getSec / 60) * 360;
  const minDegree = ((getMin / 60) * 360) + ((getSec / 60) * 6);
  const hrDegree = ((getHr - 13) / 12) * 360 + (getMin / 60) * 30 + ((getSec / 60) / 60) * 30;

  secDc.style.transform = `rotate(${secDegree}deg)`;
  minDc.style.transform = `rotate(${minDegree}deg)`;
  hrDc.style.transform = `rotate(${hrDegree}deg)`;
}
setInterval(setDcDate, 1000);
