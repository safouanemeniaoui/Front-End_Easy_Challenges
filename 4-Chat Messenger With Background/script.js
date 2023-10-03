let msg = document.querySelectorAll(".msgs");
let senderName = document.querySelector(".sender-name");
let msgSend = document.querySelectorAll(".sent");
let lastMsgRecieved = document.querySelector(".last");
let dateTime = document.querySelector(".day-time");

if (localStorage.getItem("sender")) {
  for (let i = 0; i < msg.length; i++) {
    if (
      msg[i].children[1].children[0].innerHTML == localStorage.getItem("sender")
    ) {
      senderName.innerHTML = localStorage.getItem("sender");
      msg.forEach((e) => e.classList.remove("selected"));
      msgSend[0].children[0].innerHTML = `${msg[i].children[1].children[0].innerHTML}?`;
      msgSend[0].children[0].style.textTransform = "capitalize";
      msg[i].classList.add("selected");
      lastMsgRecieved.children[0].innerHTML =
        msg[i].children[1].children[1].innerHTML;
    }
  }
}

for (let i = 0; i < msg.length; i++) {
  msg[i].onclick = function () {
    msg.forEach((e) => e.classList.remove("selected"));
    msg[i].classList.toggle("selected");
    senderName.innerHTML = msg[i].children[1].children[0].innerHTML;
    msgSend[0].children[0].innerHTML = `${msg[i].children[1].children[0].innerHTML}?`;
    msgSend[0].children[0].style.textTransform = "capitalize";
    lastMsgRecieved.children[0].innerHTML =
      msg[i].children[1].children[1].innerHTML;
    dateTime.children[0].children[0].innerHTML = msg[i].children[2].innerHTML;
    window.localStorage.setItem(
      "sender",
      msg[i].children[1].children[0].innerHTML
    );
  };
}

/* Start Enable and Disable search */

let search = document.querySelector(".input-search");
let searchDiv = document.querySelector(".search");
let btn = document.querySelector(".material-symbols-outlined");

let att = document.createAttribute("disabled");
btn.onclick = function () {
  if (btn.innerHTML === "toggle_off") {
    btn.innerHTML = "toggle_on";
    btn.style.color = "#00b0ff";
    search.style.backgroundColor = "#d6d6d6";
    search.removeAttributeNode(att);
  } else {
    btn.innerHTML = "toggle_off";
    btn.style.color = "#9f9f9f";
    search.setAttributeNode(att);
    search.style.backgroundColor = "#eee";
  }
};

/* End Enable and Disable search */

/* Start Profile Search  */

search.addEventListener("input", function () {
  const inputValue = search.value;
  if (search.value === "") {
    msg.forEach((e) => (e.style.display = "flex"));
  } else {
    msg.forEach((e) => (e.style.display = "none"));
    msg.forEach((e) => {
      if (e.children[1].children[0].innerHTML.includes(inputValue)) {
        e.style.display = "flex";
      }
    });
  }
});

/* End Profile Search  */

/*Start Msgs Typing */

let chat = document.querySelector(".chat");
let myMsg = document.querySelector(".conv-field");
let sendBtn = document.querySelector(".send");

myMsg.onkeypress = function (e) {
  if (e.keyCode == 13) {
    let topMsg = document.querySelectorAll(".txt");
    let currentMsg = document.createElement("div");
    let currentMsgP = document.createElement("p");
    currentMsgP.innerHTML = myMsg.value;
    currentMsg.className = "sent txt";
    currentMsg.appendChild(currentMsgP);
    chat.appendChild(currentMsg);
    if (topMsg[0].children.length - 1 <= 0) {
      topMsg[0].remove();
    } else {
      topMsg[0].children[0].remove();
    }
    myMsg.value = "";
    if (dateTime) {
      dateTime.remove();
    }
    if (topMsg[0].children.length === 0) {
      topMsg[1].style.marginTop = "65px";
    } else {
      topMsg[1].children[0].style.marginTop = "65px";
    }
  }
};

/*End Msgs Typing */
