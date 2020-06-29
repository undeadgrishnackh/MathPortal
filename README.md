# Math Portal

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c652ade0612a4a84badb7b9e2e0ef405)](https://app.codacy.com/manual/undeadgrishnackh/MathPortal?utm_source=github.com&utm_medium=referral&utm_content=undeadgrishnackh/MathPortal&utm_campaign=Badge_Grade_Settings)
[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/boilerplate-nodejs.svg?style=flat-square)](https://npmjs.org/package/boilerplate-nodejs)
[![Build Status](https://travis-ci.org/undeadgrishnackh/MathPortal.svg?branch=master)](https://travis-ci.org/undeadgrishnackh/MathPortal) 
[![Coverage Status](https://codecov.io/gh/undeadgrishnackh/MathPortal/branch/master/graphs/badge.svg?)](https://codecov.io/gh/undeadgrishnackh/MathPortal/branch/master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=undeadgrishnackh_CarParkEscape&metric=alert_status)](https://sonarcloud.io/dashboard?id=undeadgrishnackh_CarParkEscape)

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
