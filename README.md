# Math Portal
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/987faff4c687472a81483c6e015b38b5)](https://www.codacy.com/manual/undeadgrishnackh/MathPortal?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=undeadgrishnackh/MathPortal&amp;utm_campaign=Badge_Grade)
[![BCH compliance](https://bettercodehub.com/edge/badge/undeadgrishnackh/MathPortal?branch=master)](https://bettercodehub.com/)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=undeadgrishnackh_MathPortal&metric=alert_status)](https://sonarcloud.io/dashboard?id=undeadgrishnackh_MathPortal)

### Training Kata

This simple kata is an exercise to help developers to practice on the double loop approach, using the Outside-IN way to develop from the BDD loop into the TDD loop.
The Math Portal is designed to provide a set tools to solve specific math scenarios. Each scenario is described via one or more US where the UAT are defined in BDD language (Gherkin) so that the development should be fully focused to practice in a double loop implementation from the OUTSIDE to the IN:
- creating the BDD test skeleton with cucumber
- define the user centric flow to use the marth portal (Event Storming)
- collect from the event storming the aggregates, sketches, and commands
- discuss the commands API dictionary and define the API Mock (to provide to the Front End developers)
- Back End:
- refine the BDD test cases (npm run test-cucumber) to check the API flow
- create the Integration Test cases (npm run test-API) to check the API dictionary is compliant
- create the UNIT test cases (npm run test-jest) to let the algorithum emerge


## License

MIT © [UndeadGrishnackh](https://github.com/)
