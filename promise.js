const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let promiseIXX = await promiseTheaterIXX();
  let promiseVGC = await promiseTheaterVGC();
  let gabung = promiseIXX.concat(promiseVGC);
  let totalEmosi = 0;
  gabung.map(promiseIXX => promiseIXX.hasil === emosi && (totalEmosi += 1) )
  return totalEmosi
};
// console.log()
// promiseOutput("marah")
module.exports = {
  promiseOutput,
};
