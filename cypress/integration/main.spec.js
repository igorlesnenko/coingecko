it('should render the home page', () => {
  cy.visit('/');
  cy.contains('coingecko');
});

it('should render exchange page', () => {
  cy.visit('/exchange/binance');
  cy.contains('Binance');
});
