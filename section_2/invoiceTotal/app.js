let $ = function (id) {
  return document.getElementById(id);
};

let calculateDiscountPercent = function (customerType, invoiceSubtotal) {
  let discountPercent = 0;

  switch(customerType){
    case 'r':
      if (invoiceSubtotal < 100) {
        discountPercent = 0.1;
      } else if (invoiceSubtotal >= 100 && invoiceSubtotal < 250) {
        discountPercent = 0.2;
      } else if (invoiceSubtotal >= 250 && invoiceSubtotal < 500) {
        discountPercent = 0.25;
      } else if (invoiceSubtotal >= 500 && invoiceSubtotal < 1000) {
        discountPercent = 0.3;
      } else if (invoiceSubtotal >= 1000) {
        discountPercent = 0.4;
      }
      break;
    case 'l':
      discountPercent = 0.2;
      break;
    case 'h':
      if (invoiceSubtotal < 500) {
        discountPercent = 0.4;
      } else if (invoiceSubtotal >= 500) {
        discountPercent = 0.5;
      }
      break;
    case 'e':
    discountPercent = .5;
    break;
  }

  // if (customerType === "r") {
  //   if (invoiceSubtotal < 100) {
  //     discountPercent = 0.1;
  //   } else if (invoiceSubtotal >= 100 && invoiceSubtotal < 250) {
  //     discountPercent = 0.2;
  //   } else if (invoiceSubtotal >= 250 && invoiceSubtotal < 500) {
  //     discountPercent = 0.25;
  //   } else if (invoiceSubtotal >= 500 && invoiceSubtotal < 1000) {
  //     discountPercent = 0.3;
  //   } else if (invoiceSubtotal >= 1000) {
  //     discountPercent = 0.4;
  //   }
  // } else if (customerType === "l") {
  //   discountPercent = 0.3;
  // } else if (customerType === "h") {
  //   if (invoiceSubtotal < 500) {
  //     discountPercent = 0.4;
  //   } else if (invoiceSubtotal >= 500) {
  //     discountPercent = 0.5;
  //   }
  // }else if(customerType === 'e'){
  //   discountPercent = .5;
  // }
  return discountPercent;
};

let processData = function () {
  let discountAmount, invoiceTotal, discountPercent;

  // get values, reset subtotal to 2 decimal places
  let customerType = $("type").value;
  let invoiceSubtotal = parseFloat($("subtotal").value);
  $("subtotal").value = invoiceSubtotal.toFixed(2);

  // call fuction to get discount percent
  discountPercent = calculateDiscountPercent(customerType, invoiceSubtotal);

  // calculate discount amount , amount and display total
  discountAmount = invoiceSubtotal * discountPercent;
  invoiceTotal = invoiceSubtotal - discountAmount;

  $("percent").value = (discountPercent * 100).toFixed(2);
  $("discount").value = discountAmount.toFixed(2);
  $("total").value = invoiceTotal.toFixed(2);

  $("type").focus();
};

window.onload = function () {
  $("calculate").onclick = processData;
  $("type").focus();
};
