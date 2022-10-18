let totalScore = (...scores) => {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total.toFixed(2) / scores.length;
};

document.querySelector("#btnKhoi1").onclick = () => {
  let toan = document.querySelector("#inpToan").value * 1;
  let ly = document.querySelector("#inpLy").value * 1;
  let hoa = document.querySelector("#inpHoa").value * 1;

  document.querySelector("#tbKhoi1").innerHTML = totalScore(toan, ly, hoa);
};

document.querySelector("#btnKhoi2").onclick = () => {
  let van = document.querySelector("#inpVan").value * 1;
  let su = document.querySelector("#inpSu").value * 1;
  let dia = document.querySelector("#inpDia").value * 1;
  let anh = document.querySelector("#inpEnglish").value * 1;

  document.querySelector("#tbKhoi2").innerHTML = totalScore(van, su, dia, anh);
};
