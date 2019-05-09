Feature: As a user I want to open CNN page and search some terms

	Scenario: User Search “NFL" and get some news
  	  Given I open up the application "http://www.cnn.com/"
	   When I search "NFL"
	   Then  I should see some results in the search grid

	Scenario: User Search "NFLFake" and get an error message
  	  Given I open up the application "http://www.cnn.com/"
	   When I search "NFLFake"
	   Then I should see "Your search for NFLFake did not match any documents." in the search grid