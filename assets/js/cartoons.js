$(".slyder").slick();
//1
const avatar = document.querySelector(".btn-one");
const holop = document.querySelector(".btn-two");
const cheburashka = document.querySelector(".btn-three");
const dw = document.querySelector(".btn-for");
const otvet = document.querySelector(".otvet");

avatar.onclick = function () {
  avatar.classList.add("red");
  dw.classList.add("green");
  otvet.classList.remove("hidden");
};
holop.onclick = function () {
  holop.classList.add("red");
  dw.classList.add("green");
  otvet.classList.remove("hidden");
};
cheburashka.onclick = function () {
  dw.classList.add("green");
  cheburashka.classList.add("red");
  otvet.classList.remove("hidden");
};
dw.onclick = function () {
  dw.classList.add("green");
  otvet.classList.remove("hidden");
};

// 2
const santa = document.querySelector(".btn-five");
const greench = document.querySelector(".btn-six");
const gnom = document.querySelector(".btn-seven");
const alf = document.querySelector(".btn-eight");
const otvettwo = document.querySelector(".otvet-two");

santa.onclick = function () {
  santa.classList.add("red");
  greench.classList.add("green");
  otvettwo.classList.remove("hidden");
};
greench.onclick = function () {
  greench.classList.add("green");
  otvettwo.classList.remove("hidden");
};
gnom.onclick = function () {
  gnom.classList.add("red");
  greench.classList.add("green");
  otvettwo.classList.remove("hidden");
};
alf.onclick = function () {
  greench.classList.add("green");
  alf.classList.add("red");
  otvettwo.classList.remove("hidden");
};

//3
const newyork = document.querySelector(".three-one");
const chikago = document.querySelector(".three-two");
const la = document.querySelector(".three-three");
const maimi = document.querySelector(".three-for");
const otvetthree = document.querySelector(".otvet-three");

newyork.onclick = function () {
  newyork.classList.add("red");
  maimi.classList.add("green");
  otvetthree.classList.remove("hidden");
};
chikago.onclick = function () {
  chikago.classList.add("red");
  maimi.classList.add("green");
  otvetthree.classList.remove("hidden");
};
la.onclick = function () {
  la.classList.add("red");
  maimi.classList.add("green");
  otvetthree.classList.remove("hidden");
};
maimi.onclick = function () {
  maimi.classList.add("green");
  otvetthree.classList.remove("hidden");
};
//4
const kevin = document.querySelector(".kevin");
const stiven = document.querySelector(".stiven");
const djeyk = document.querySelector(".djeyk");
const mayk = document.querySelector(".mayk");
const otvetfor = document.querySelector(".otvetfor");

kevin.onclick = function () {
  kevin.classList.add("red");
  stiven.classList.add("green");
  otvetfor.classList.remove("hidden");
};
stiven.onclick = function () {
  stiven.classList.add("green");
  otvetfor.classList.remove("hidden");
};
djeyk.onclick = function () {
  djeyk.classList.add("red");
  stiven.classList.add("green");
  otvetfor.classList.remove("hidden");
};
mayk.onclick = function () {
  mayk.classList.add("red");
  stiven.classList.add("green");
  otvetfor.classList.remove("hidden");
};
//5
const lev = document.querySelector(".lev");
const titan = document.querySelector(".titan");
const msf = document.querySelector(".msf");
const avatard = document.querySelector(".avatar");
const otvetfive = document.querySelector(".otvet-five");

lev.onclick = function () {
  lev.classList.add("red");
  msf.classList.add("green");
  otvetfive.classList.remove("hidden");
};
titan.onclick = function () {
  titan.classList.add("red");
  msf.classList.add("green");
  otvetfive.classList.remove("hidden");
};
msf.onclick = function () {
  msf.classList.add("green");
  otvetfive.classList.remove("hidden");
};
avatard.onclick = function () {
  avatard.classList.add("red");
  msf.classList.add("green");
  otvetfive.classList.remove("hidden");
};
//6
const mayls = document.querySelector(".mayls");
const max = document.querySelector(".max");
const djeykf = document.querySelector(".djeyks");
const layl = document.querySelector(".layl");
const otvetsix = document.querySelector(".otvet-six");

mayls.onclick = function () {
  mayls.classList.add("red");
  max.classList.add("green");
  otvetsix.classList.remove("hidden");
};
max.onclick = function () {
  max.classList.add("green");
  otvetsix.classList.remove("hidden");
};
djeykf.onclick = function () {
  djeykf.classList.add("red");
  max.classList.add("green");
  otvetsix.classList.remove("hidden");
};
layl.onclick = function () {
  max.classList.add("green");
  layl.classList.add("red");
  otvetsix.classList.remove("hidden");
};
//7
const forbtn = document.querySelector(".for-btn");
const fivebtn = document.querySelector(".five-btn");
const sixbtn = document.querySelector(".six-btn");
const sevenbtn = document.querySelector(".seven-btn");
const otvetseven = document.querySelector(".otvet-seven");

forbtn.onclick = function () {
  forbtn.classList.add("green");
  otvetseven.classList.remove("hidden");
};
fivebtn.onclick = function () {
  fivebtn.classList.add("red");
  forbtn.classList.add("green");
  otvetseven.classList.remove("hidden");
};
sixbtn.onclick = function () {
  sixbtn.classList.add("red");
  forbtn.classList.add("green");
  otvetseven.classList.remove("hidden");
};
sevenbtn.onclick = function () {
  forbtn.classList.add("green");
  sevenbtn.classList.add("red");
  otvetseven.classList.remove("hidden");
};
//8
const billi = document.querySelector(".eight-one");
const veryki = document.querySelector(".eight-two");
const mayka = document.querySelector(".eight-three");
const charli = document.querySelector(".eight-for");
const otveteight = document.querySelector(".otvet-eight");

billi.onclick = function () {
  billi.classList.add("red");
  charli.classList.add("green");
  otveteight.classList.remove("hidden");
};
veryki.onclick = function () {
  veryki.classList.add("red");
  charli.classList.add("green");
  otveteight.classList.remove("hidden");
};
mayka.onclick = function () {
  charli.classList.add("green");
  mayka.classList.add("red");
  otveteight.classList.remove("hidden");
};
charli.onclick = function () {
  charli.classList.add("green");
  otveteight.classList.remove("hidden");
};
//9
const garri = document.querySelector(".nine-one");
const djon = document.querySelector(".nine-two");
const piter = document.querySelector(".nine-three");
const sten = document.querySelector(".nine-for");
const otvetnine = document.querySelector(".otvet-nine");

garri.onclick = function () {
  garri.classList.add("red");
  djon.classList.add("green");
  otvetnine.classList.remove("hidden");
};
djon.onclick = function () {
  djon.classList.add("green");
  otvetnine.classList.remove("hidden");
};
piter.onclick = function () {
  djon.classList.add("green");
  piter.classList.add("red");
  otvetnine.classList.remove("hidden");
};
sten.onclick = function () {
  sten.classList.add("red");
  djon.classList.add("green");
  otvetnine.classList.remove("hidden");
};
//10
const vakanda = document.querySelector(".ten-one");
const pandora = document.querySelector(".ten-two");
const vatikan = document.querySelector(".ten-three");
const almin = document.querySelector(".ten-for");
const otvetten = document.querySelector(".otvet-ten");

vakanda.onclick = function () {
  vakanda.classList.add("green");
  otvetten.classList.remove("hidden");
};
pandora.onclick = function () {
  pandora.classList.add("red");
  vakanda.classList.add("green");
  otvetten.classList.remove("hidden");
};
vatikan.onclick = function () {
  vakanda.classList.add("green");
  vatikan.classList.add("red");
  otvetten.classList.remove("hidden");
};
almin.onclick = function () {
  almin.classList.add("red");
  vakanda.classList.add("green");
  otvetten.classList.remove("hidden");
};
