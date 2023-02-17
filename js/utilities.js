// Calculate total price with function

function getTextElementValueById(elementId) {
  const productTotalPrice = document.getElementById(elementId);
  const productTotalPriceString = productTotalPrice.innerText;

  const productTotalPriceValue = parseInt(productTotalPriceString);

  return productTotalPriceValue;
}



function setTextElementValueById (elementId, value) {
    
    const subTotal = document.getElementById(elementId, value);
    subTotal.innerText = value;

}





// Calculate subtotal

function calculateSubTotal() {
  const currentPhoneTotalPrice = getTextElementValueById("phone-price");
  const currentCaseTotalPrice = getTextElementValueById("case-price");

  const currentSubTotal = currentCaseTotalPrice + currentPhoneTotalPrice;

  setTextElementValueById('sub-total', currentSubTotal);


  // calculate tax

  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById('tax', taxAmount)


  // final Total 
  const finalTotal = currentSubTotal + taxAmount;
  setTextElementValueById('final-total', finalTotal);

}


