let rows = document.querySelectorAll(".points");
let results = document.querySelectorAll(".result");

let pointsTab = [];
let resultTab = [];

if (window.localStorage.getItem("points")) {
  for (let i = 0; i < rows.length; i++) {
    rows[i].children[0].value = window.localStorage
      .getItem("points")
      .split(",")[i];
  }
}

if (window.localStorage.getItem("results")) {
  for (let i = 0; i < results.length; i++) {
    results[i].innerHTML = window.localStorage.getItem("results").split(",")[i];
  }
  if (
    window.localStorage.getItem("results").split(",")[0] <
    window.localStorage.getItem("results").split(",")[1]
  ) {
    results[0].innerHTML = window.localStorage.getItem("results").split(",")[1];
    results[0].previousElementSibling.innerHTML = "Mahmoud";
    results[1].innerHTML = window.localStorage.getItem("results").split(",")[0];
    results[1].previousElementSibling.innerHTML = "Sayed";
  } else {
    results[0].innerHTML = window.localStorage.getItem("results").split(",")[0];
    results[0].previousElementSibling.innerHTML = "Sayed";
    results[1].innerHTML = window.localStorage.getItem("results").split(",")[1];
    results[1].previousElementSibling.innerHTML = "Mahmoud";
  }
}

rows.forEach((td) => {
  pointsTab.push(td.children[0].value);
  td.children[0].onblur = function (e) {
    pointsTab[td.id - 1] = td.children[0].value;
    window.localStorage.setItem("points", pointsTab);
    let sumMahmoud = 0;
    let sumSayed = 0;
    rows.forEach((td) => {
      if (td.previousElementSibling.innerHTML === "Mahmoud") {
        sumMahmoud += parseInt(td.children[0].value);
      } else {
        sumSayed += parseInt(td.children[0].value);
      }
    });

    resultTab[0] = sumSayed;
    resultTab[1] = sumMahmoud;

    window.localStorage.setItem("results", resultTab);

    if (sumMahmoud > sumSayed) {
      results[0].innerHTML = sumMahmoud;
      results[0].previousElementSibling.innerHTML = "Mahmoud";
      results[1].innerHTML = sumSayed;
      results[1].previousElementSibling.innerHTML = "Sayed";
    } else {
      results[0].innerHTML = sumSayed;
      results[0].previousElementSibling.innerHTML = "Sayed";
      results[1].innerHTML = sumMahmoud;
      results[1].previousElementSibling.innerHTML = "Mahmoud";
    }
  };
});

let resetBtn = document.querySelector("[type = 'reset']");

resetBtn.onclick = function (e) {
  window.localStorage.clear();
  rows.forEach((td) => {
    td.children[0].value = 0;
  });
  results.forEach((td) => {
    td.innerHTML = 0;
  });
};
