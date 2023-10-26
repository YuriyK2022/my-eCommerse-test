describe('E-commerce Test Suite', function () {
    before(function () {
      // Visit the home page
      cy.visit('http://demo-store.seleniumacademy.com/');
    });

    it('should navigate to the Men page', function () {
        // Navigate to the Men page
        cy.visit('http://demo-store.seleniumacademy.com/men.html');
    
        // Assertions to confirm you are on the Men page
        cy.url().should('eq', 'http://demo-store.seleniumacademy.com/men.html');
        cy.contains('Men').should('exist');
    });

    it('should navigate to the Women page', function () {
        // Navigate to the Women page
        cy.visit('http://demo-store.seleniumacademy.com/women.html');
    
        // Assertions to confirm you are on the Women page
        cy.url().should('eq', 'http://demo-store.seleniumacademy.com/women.html');
        cy.contains('Women').should('exist');
    });
    
    it('should navigate to the New Arrivals page for Women', function () {
        // Navigate to the New Arrivals page for Women
        cy.visit('http://demo-store.seleniumacademy.com/women/new-arrivals.html');
    
        // Assertions to confirm you are on the New Arrivals page for Women
        cy.url().should('eq', 'http://demo-store.seleniumacademy.com/women/new-arrivals.html');
        cy.contains('New Arrivals').should('exist');
    });

    it('should navigate to the Accessories page', function () {
        // Navigate to the New Accessories page
        cy.visit('http://demo-store.seleniumacademy.com/accessories.html');
    
        // Assertions to confirm you are on the Accessories page
        cy.url().should('eq', 'http://demo-store.seleniumacademy.com/accessories.html');
        cy.contains('Accessories').should('exist');
    });

    it('should navigate to the Accessories/Eyewear page', function () {
        // Navigate to the New Accessories/Eyewear page
        cy.visit('http://demo-store.seleniumacademy.com/accessories/eyewear.html');
    
        // Assertions to confirm you are on the Accessories/Eyewear
        cy.url().should('eq', 'http://demo-store.seleniumacademy.com/accessories/eyewear.html');
        cy.contains('Eyewear').should('exist');
    });

    it('should navigate to the Accessories/Jewlery page', function () {
        // Navigate to the New Accessories/Jewelry page
        cy.visit('http://demo-store.seleniumacademy.com/accessories/jewelry.html');
    
        // Assertions to confirm you are on the Jwelry page
        cy.url().should('eq', 'http://demo-store.seleniumacademy.com/accessories/jewelry.html');
        cy.contains('Jewelry').should('exist');
    });

    it('should navigate to the Accessories/Shoes page', function () {
        // Navigate to the New Accessories/Shoes page
        cy.visit('http://demo-store.seleniumacademy.com/accessories/shoes.html');
    
        // Assertions to confirm you are on the Shoes page
        cy.url().should('eq', 'http://demo-store.seleniumacademy.com/accessories/shoes.html');
        cy.contains('Shoes').should('exist');
    });

    

  
    it('should navigate to registration page', function () {
      // Click the registration link
      cy.get('.skip-account').click();
      cy.contains('Register').click();
  
      // Assertions to ensure you are on the registration page
      cy.url().should('include', 'customer/account/create/');
      cy.contains('Create an Account').should('exist');
    });
  
    it('should register a new user', function () {
      // Fill out the registration form (replace with your own details)
      cy.get('#firstname').type('John');
      cy.get('#lastname').type('Doe');
      cy.get('#email_address').type('john.doe@example.com');
      cy.get('#password').type('password123');
      cy.get('#confirmation').type('password123');
      cy.get('button[title="Register"]').click();
  
    });
  
    it('should go to the Men > Shirts page', function () {
        // Visit the Men > Shirts page
        cy.visit('http://demo-store.seleniumacademy.com/men/shirts.html');
    
        // Assertions to ensure you are on the Shirts page
        cy.url().should('eq', 'http://demo-store.seleniumacademy.com/men/shirts.html');
        cy.contains('Shirts').should('exist');
    });

    
    // Add more tests specific to the Shirts page as needed
});
  