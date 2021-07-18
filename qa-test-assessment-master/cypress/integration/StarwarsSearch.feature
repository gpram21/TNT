
Feature: Verify the search results with star wars characters
  
 
  Scenario Outline: Search with a valid character which leads to multiple result
      Given I navigate to StarWarssearchpage
      When I search for "<Name>" as "<searchType>"
      Then I see results1 "<Row1>" and "<Row2>" and "<Row3>" and "<Row4>"
      And I see results2 "<Row5>" and "<Row6>" and "<Row7>" and "<Row8>"
      

       Examples:
     |    Name        |searchType| Row1|Row2|Row3|Row4|Row5|Row6|Row7|Row8|
     |    Darth |   people |    Gender: male |Birth year: 41.9BBY|Eye color: yellow|Skin color: white|Gender: male|Birth year: 54BBY|Eye color: yellow|Skin color: red|       

  
  Scenario Outline: Search with a valid characters and Planets
    Given I navigate to StarWarssearchpage
    When I search for "<Name>" as "<searchType>"
    Then I see details "<Row1>" and "<Row2>" and "<Row3>" and "<Row4>" and "<searchType>"
    

    Examples:
     |    Name        |searchType| Row1|Row2|Row3|Row4|
     |    Darth vader |   people |    Gender: male |Birth year: 41.9BBY|Eye color: yellow|Skin color: white|
     |    Yoda        |   people |    Gender: male |Birth year: 896BBY|Eye color: brown|Skin color: green|
     |    Hoth        |   planets|    Population: unknown|Climate: frozen|Gravity: 1.1 standard|         |
     |    Naboo       |   planets|    Population: 4500000000|Climate: temperate|Gravity: 1 standard     |         |

  

  Scenario Outline: Search with a invalid characters and planets
      Given I navigate to StarWarssearchpage
      When I search for "<Name>" as "<searchType>"
      Then I see no result "<noresults>"
      

      Examples:
      |    Name        |searchType|    noresults |
      |    Test        |   people |    Not found.|
      |    Test        |   planets|    Not found.|

  Scenario Outline: Search with a valid characters and empty Planets
    Given I navigate to StarWarssearchpage
    When I search for "<Name>" as "<searchType>"
    When I search for "" as "planets"
    Then I see no result "<noresults>"
    

    Examples:
     |    Name        |searchType| noresults|
     |    Darth vader |   people |    Not found.|

  
 


  


         
    