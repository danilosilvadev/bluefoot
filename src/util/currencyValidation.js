const convertCurrency = value => new Intl.NumberFormat('pt', {
  style: 'currency',
  currency: 'BRL'
}).format(value);

export default convertCurrency