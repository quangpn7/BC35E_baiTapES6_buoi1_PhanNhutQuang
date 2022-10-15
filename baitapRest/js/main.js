let avgScore = (...scores) => {
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  return parseFloat(total / scores.length).toFixed(2);
};

let renderResultK1 = () => {
  document.querySelector("#btnKhoi1").onclick = resultK1 = () => {
    let math = document.querySelector("#inpToan").value * 1;
    let phys = document.querySelector("#inpLy").value * 1;
    let chem = document.querySelector("#inpHoa").value * 1;

    let result = avgScore(math, phys, chem);

    document.querySelector("#tbKhoi1").innerHTML = result;
  };
};
let renderResultK2 = () => {
  document.querySelector("#btnKhoi2").onclick = resultK1 = () => {
    let lit = document.querySelector("#inpVan").value * 1;
    let his = document.querySelector("#inpSu").value * 1;
    let geo = document.querySelector("#inpDia").value * 1;
    let eng = document.querySelector("#inpEnglish").value * 1;

    let result = avgScore(lit, his, geo, eng);

    document.querySelector("#tbKhoi2").innerHTML = result;
  };
};
document.querySelector("#btnKhoi1").addEventListener("click", renderResultK1);
document.querySelector("#btnKhoi2").addEventListener("click", renderResultK2);
