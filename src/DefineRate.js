function DefineRate(rates, initialCurrency, targetCurrency) {
    return rates[initialCurrency][targetCurrency];
}

module.exports = {
    DefineRate,
};
