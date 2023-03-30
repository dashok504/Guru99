/*
Test Plan for Insurance Website Page:

Scope:
The scope of this test plan is to test the Insurance Website Page available at 
https://demo.guru99.com/insurence/v1/index.php. The objective is to ensure that the page is 
functioning as expected, and all the features and functionalities are working correctly.

Assumptions:
The website is accessible and available for testing.
The website is compatible with the latest versions of popular web browsers.
The test environment is similar to the production environment.
The website has been developed and deployed without any errors.

Tools:
Cypress to automate the test cases.
Cucumber framework for test management.
JavaScript for programming language.

*/
Feature: Registered Insurance Customer Login Validation

Background: Login to Guru99 Website
Given Visit Guru99 website

Scenario: 1. Verify login failure functionality
Then User enters invalid username and password
And User clicks on Login button
Then Validate login failure message

Scenario: 2. Verify login success functionality
Then User enters a valid username and password
And User clicks on Login button
Then Validate login success message

Scenario: 3. Verify Request Quotation page
Then User enters a valid username and password
And User clicks on Login button
And User navigates to Request Quotation page

Scenario: 4. Verify Retrieve Quotation page
Then User enters a valid username and password
And User clicks on Login button
And User navigates to Retrieve Quotation page

Scenario: 5. Verify Profile page
Then User enters a valid username and password
And User clicks on Login button
And User navigates to Profile page

Scenario: 6. Verify Edit Profile page
Then User enters a valid username and password
And User clicks on Login button
And User navigates to Edit Profile page

Scenario: 7. Verify Logout functionality
Then User enters a valid username and password
And User clicks on Login button
And User clicks on Logout button