# API-Testing
🚀 Restful Booker API Testing Collection


## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Included Scripts](#included-scripts)
- [Usage](#usage)
- [Report Generation](#report-generation)


## Introduction
A collection of API testing scripts and documentation for the Restful Booker API.
This repository houses a collection of API testing scripts, including pre-request and test scripts, and a postman request collection and environment  designed to simplify and streamline API testing workflows.
These tests ensure the booking system's functionality, reliability, and security.

## Getting Started
### Prerequisites
Before using these scripts, make sure to install Java and Postman.
- [JAVA](https://www.oracle.com/java/technologies/downloads/)
- [Postman](https://www.postman.com/downloads/)
### Installation
- Clone this repository to your local machine:

   ```
   git clone https://github.com/your-username/api-testing-scripts.git
   ```
- Run these commands in the command prompt
  <br>
  ```npm install -g newman```
  <br>
  `npm install -g newman-reporter-htmlextra`
   
- import postman collection and postman Environment to Postman
### Included Scripts 
There are test scripts in the test_scripts folder.
Use test scripts from the subfolder dynamic_variable_test_scripts and pre-request scripts from the pre_req_scripts folder to use dynamic variables provided by the postman.

### Usage
Script documentation contains full usage instructions and examples for every request. Each script is documented to help one understand its purpose and how to use it effectively.

### Documentation 
Go to this [link](https://documenter.getpostman.com/view/29102085/2s9YC7SB9H) for complete documentation.

### Report Generation 
- Save the *postman collection* and *postman environment* in the same folder 
- Now open the command prompt on that folder
- Run this command to generate a test report in HTML <br>
```newman run CollectionName.json -e EnvironmentName.json -r cli,htmlextra``` <br>
for e.g., <br>
 ```newman run Restful_Hotel_Booking_API_collection.json -e Hotel_Booking_environment.json -r cli,htmlextra```

















