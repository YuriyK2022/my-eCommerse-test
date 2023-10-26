# eCommerse-test by Cypress
Test functionality http://demo-store.seleniumacademy.com by Cypress framework:
- navigate all project pages
- navigate to registration page
- register a new user
- arbitrary functionality of the student's choice

## Installation
1. In the command line create new project directory my-eCommerse-test:

```sh
$ mkdir my-eCommerse-test
$ cd my-eCommerse-test
```

2. Initialize project with npm by running the following command:
```sh
$ npm init -y
```
This will create a package.json file for your project.

3. Install Cypress (I use Cypress 8.3.0) as a development dependency:
```sh
$ npm install cypress@8.3.0 --save-dev
```
## Open Cypress Test Runner and create test file
4. Open the Cypress Test Runner using the following command:
```sh
$ npx cypress open
```
5. Cypress Test Runner will open interactively:

![image](https://github.com/YuriyK2022/my-eCommerse-test/assets/118524489/b98cdd83-48dc-4ca8-af1d-01a19e4d2158)

6. In the "Integration" folder (path ...\my-eCommerse-test\cypress\integration) create test file eCommerse-test-suite.js:
```js
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

});
```
## Run Cypress Test
7. Go back into the Cypress Runner and click on the file eCommerse-test-suite.js:

![image](https://github.com/YuriyK2022/my-eCommerse-test/assets/118524489/5c5aea6d-a41b-47bd-aa00-0effb1b0f8ff)

8. The browser is open (my default is Firefox) and test will execute, automating the actions on the webpages:

![image](https://github.com/YuriyK2022/my-eCommerse-test/assets/118524489/b423209a-96b2-4c2b-86e2-71f5f6b7bd68)

## Test Results

9. All tests is passing!

![image](https://github.com/YuriyK2022/my-eCommerse-test/assets/118524489/e72c43d4-9368-4854-a0c4-d9822ab4aaf2)




