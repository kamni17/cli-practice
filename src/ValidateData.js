  
   function ValidateData(amount, initialCurrency, targetCurrency) {
   if (amount === undefined || initialCurrency === undefined || targetCurrency === undefined) {
    console.log('You did not provide the amount, initial currency or target currency.');
    process.exit();
   }
  }

  module.exports = {
    ValidateData,
  };
