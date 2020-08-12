let $ = function (id) {
  return document.getElementById(id);
};

let btnArr = [];

let getText = function () {
  let textArea = $("textArea").value;
  btnArr.push(textArea);
  console.log(btnArr);
  console.log(textArea == "\n");
};

window.onload = function () {
  $("btn").onclick = getText;
};
