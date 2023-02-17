// Product Quantity calculation

function phoneUpdateQuantity(isIncrease) {
  const phoneQuantityField = document.getElementById("phone-quantity-field");
  const phoneQuantityFieldString = phoneQuantityField.value;
  const phonePreviousQuantityFieldValue = parseInt(phoneQuantityFieldString);

  let phoneNewQuantity;

  if (isIncrease) {
    phoneNewQuantity = phonePreviousQuantityFieldValue + 1;
  } else {
    phoneNewQuantity = phonePreviousQuantityFieldValue - 1;
  }

  phoneQuantityField.value = phoneNewQuantity;

  if (phoneNewQuantity <= 0) {
    phoneQuantityField.value = 1;
  }

  return phoneNewQuantity;
}



// function for decrease and increase button both

function updatePhneTotalPrice(phoneNewQuantity) {
  const totalPhonePrice = phoneNewQuantity * 1219;
  const phonePriceElement = document.getElementById("phone-price");
  phonePriceElement.innerText = totalPhonePrice;
}





// product increases event
document
  .getElementById("phone-increase-btn")
  .addEventListener("click", function () {
    const phoneNewQuantity = phoneUpdateQuantity(true);
    updatePhneTotalPrice(phoneNewQuantity);

    // Calculate product total
    calculateSubTotal();
  });



// product decreases event
document
  .getElementById("phone-decrease-btn")
  .addEventListener("click", function () {
    const phoneNewQuantity = phoneUpdateQuantity(false);
    updatePhneTotalPrice(phoneNewQuantity);

    // Calculate product total
    calculateSubTotal();
  });
