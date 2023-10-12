## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation and Test Execution](#installation-and-test-execution)
4. [Reports and Screenshots](#reports-and-screenshots)


## Introduction

TestCafe is a powerful, open-source tool to automate end-to-end web testing. It allows you to write tests in JavaScript or TypeScript, run them and view results.

## Prerequisites

- Node.js (version 10 or newer) and npm. If not installed, [download here](https://nodejs.org/).

## Installation and Test Execution

1. From the project directory run the following command

```bash
npm install
```

2. Execute test:

```bash
npm test
```

## Reports and Screenshots

This node project's test script is configured to create html reports after each test run: 

`/reports/report.html`

If a test has failed it will create a screenshot of the page where the fail occurs:

`/reports/screenshots`