function caseUpdateQuantity(isIncrease) {
  const caseQuantityField = document.getElementById("case-quantity-field");
  const caseQuantityFieldString = caseQuantityField.value;
  const casePreviousQuantityField = parseInt(caseQuantityFieldString);

  let caseNewQuantity;

  if (isIncrease === true) {
    caseNewQuantity = casePreviousQuantityField + 1;
  } else {
    caseNewQuantity = casePreviousQuantityField - 1;
  }

  caseQuantityField.value = caseNewQuantity;

  if (caseNewQuantity <= 1) {
    caseQuantityField.value = 1;
  }

  return caseNewQuantity;
}



function updateCaseTotalPrice(caseNewQuantity) {
  const totalCasePrice = caseNewQuantity * 59;
  const casePriceElement = document.getElementById("case-price");
  casePriceElement.innerText = totalCasePrice;
}



document
  .getElementById("case-increase-btn")
  .addEventListener("click", function () {
    const caseNewQuantity = caseUpdateQuantity(true);

    updateCaseTotalPrice(caseNewQuantity);

    // Calculate product total
    calculateSubTotal();
  });



document
  .getElementById("case-decrease-btn")
  .addEventListener("click", function () {
    const caseNewQuantity = caseUpdateQuantity(false);

    updateCaseTotalPrice(caseNewQuantity);

    // Calculate product total
    calculateSubTotal();
  });