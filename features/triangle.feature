# features/triangle.feature
Feature: Triangle
  In order to do geometry
  As a student
  I want to double check my homeworks about the triangle.

  Scenario Outline: 1 - Calculate angles.
    Given a triangle without any angle
    When the student insert the first angle <alpha>
    And after it the second angle <beta>
    And ask for calculate
    Then the last angle should contain <result>

    Examples:
      | alpha | beta  | result |
      | 100   | 70    | 10     |
      | 90    | 45    | 45     |
      | 16    | 82    | 82     |

  Scenario Outline: 2 - Angles more than 180 degrees.
    Given a triangle without any angle
    When the student insert an angle <alpha>
    And after it the second angle <beta>
    And the sum of them is equal or more than 180 degrees
    And ask for calculate
    Then the last angle should contain <result>

    Examples:
      | alpha | beta | result |
      | 200   | 70   | ERROR  |
      | 90    | 300  | ERROR  |
      | 181   | 82   | ERROR  |

  Scenario Outline: 3 - Angles less than 0 degrees.
    Given a triangle without any angle
    When the student insert an angle <alpha>
    And after it the second angle <beta>
    And one of them is equal or less than 0 degrees
    And ask for calculate
    Then the last angle should contain <result>

    Examples:
      | alpha | beta | result |
      | 0     | 70   | ERROR  |
      | -90   | 300  | ERROR  |
      | 81    | -82  | ERROR  |
      | -13   | -27  | ERROR  |