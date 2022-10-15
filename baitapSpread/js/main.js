let spanBuild = () => {
  let text = document.querySelector(".heading").innerHTML;

  let chars = [...text];
  let contentHTML = ``;
  for (const char of chars) {
    contentHTML += `
    <span>${char}</span>
    `;
  }
  document.querySelector(".heading").innerHTML = contentHTML;
};

spanBuild();
