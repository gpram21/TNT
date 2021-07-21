Feature: Verify the search results with star wars characters
   
  
  Scenario Outline: Search with a valid characters
    Given I navigate to StarWarssearchpage
    When I search for "<Name>" as "<searchType>"
    Then I see peopledetails "<Name>" and "<Row1>" and "<Row2>" and "<Row3>" and "<Row4>" and "<searchType>"
    
    Examples:
     |    Name        |searchType| Row1|Row2|Row3|Row4|
     |    Darth Vader |peopleRadio|male|41.9BBY|yellow|white|
  
  Scenario Outline: Search with a valid Planets
    Given I navigate to StarWarssearchpage
    When I search for "<Name>" as "<searchType>"
    Then I see planetdetails "<Name>" and "<Row1>" and "<Row2>" and "<Row3>" and "<searchType>"
    
    Examples:
     |    Name        |searchType| Row1|Row2|Row3|
     |    Hoth  |planetRadio|unknown|frozen|1.1 standard|

  