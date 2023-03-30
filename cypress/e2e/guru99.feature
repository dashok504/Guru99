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
