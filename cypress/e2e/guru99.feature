Feature: Registered Insurance Customer Login Validation

Background: Login to Guru99 Website
Given Visit Guru99 website

Scenario: 1. Verify login failure functionality
# Given Visit Guru99 website
Then User enters invalid username and password
And User clicks on Login button
Then Validate login failure message

Scenario: 2. Verify login success functionality
# Given Visit Guru99 website
Then User enters a valid username and password
And User clicks on Login button
Then Validate login success message

Scenario: 3. Verify Request Quotation page
Given Visit Guru99 website
Then User enters a valid username and password
And User clicks on Login button
And User navigates to Request Quotation page

Scenario: 4. Verify Retrieve Quotation page
Given Visit Guru99 website
Then User enters a valid username and password
And User clicks on Login button
And User navigates to Retrieve Quotation page

Scenario: 5. Verify Profile page
Given Visit Guru99 website
Then User enters a valid username and password
And User clicks on Login button
And User navigates to Profile page

Scenario: 6. Verify Edit Profile page
Given Visit Guru99 website
Then User enters a valid username and password
And User clicks on Login button
And User navigates to Edit Profile page

Scenario: 7. Verify Logout functionality
Given Visit Guru99 website
Then User enters a valid username and password
And User clicks on Login button
And User clicks on Logout button
