#Author: jyala.harsha@gmail.com

@tag
Feature: To run the login feataure
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Title of your scenario outline
    Given the website is running in chrome
    When User enters the registered "<Username>"
    And User enters the password "<password>"
    Then clicks on sign in button

    Examples: 
      | Username | password | 
      | teest    | abc      | 
      | batman   | batman   | 
