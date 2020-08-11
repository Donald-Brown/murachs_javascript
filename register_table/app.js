let $ = function (id) {
  return document.getElementById(id);
};

let processData = function () {
  let header = "";
  let html = "";
  let required = "<span>Required Field</span>";
  let msg = "Please review your entries and complete all required fields";

  let email = $("email_address").value;
  let phone = $("phone").value;
  let country = $("country").value;
  let regex = /^\n+?/;

  let contact = "text";
  if ($("email").checked) {
    contact = "email";
  }
  if ($("none").checked) {
    contact = "none";
  }
  if($('mobile_phone').checked){
    contact = 'mobile';
  }

  let terms = $("terms").checked;

  let textArea = $('text_area').value;

  if (email === "") {
    email = required;
    header = msg;
  }
  if (phone === "") {
    phone = required;
    header = msg;
  }
  if (country === "") {
    country = required;
    header = msg;
  }
  if (terms === false) {
    terms = required;
    header = msg;
  }

  if(textArea === '' || textArea.match(regex)){
    textArea = 'Comments are optional'
  }

  $("registration_header").firstChild.nodeValue = header;
  if (header === msg) {
    html = html + `<tr><td>Email:</td><td>${email}</td></tr>`;
    html = html + `<tr><td>Phone:</td><td>${phone}</td></tr>`;
    html = html + `<tr><td>Country:</td><td>${country}</td></tr>`;
    html = html + `<tr><td>Contact:</td><td>${contact}</td></tr>`;
    html = html + `<tr><td>Terms:</td><td>${terms}</td></tr>`;
    html = html + `<tr><td>Comments:</td><td>${textArea}</td></tr>`
    $("registration_info").innerHTML = html;
  } else {
    $("registration_info").innerHTML = "";
    $("registration_form").submit();
  }
};

let resetForm = function () {
  $("registration_form").reset();
  $("registration_header").firstChild.nodeValue = "";
  $("registration_info").innerHTML = "";
  $("email_address").focus();
};

window.onload = function () {
  $("register").onclick = processData;
  $("reset_form").onclick = resetForm;
  $("email_address").focus();
};
