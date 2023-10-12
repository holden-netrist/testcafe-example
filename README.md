# TestCafe Setup and Usage Guide

This guide will help you set up and use TestCafe for our end-to-end testing.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Writing Your First Test](#writing-your-first-test)
5. [Running Tests](#running-tests)
6. [Modular Tests](#modular-tests)
7. [Integration with GitLab Pipelines](#integration-with-gitlab-pipelines)
8. [Resources](#resources)

## Introduction

TestCafe is a powerful, open-source tool to automate end-to-end web testing. It allows you to write tests in JavaScript or TypeScript, run them and view results.


### Why TestCafe?

#### Pros:

1. **No WebDriver**: TestCafe doesn't rely on WebDriver. This means you don't have to manage browser drivers, and it can run tests on browsers without native WebDriver support.

2. **Concurrency**: TestCafe supports concurrent test execution out-of-the-box. You can run tests in multiple browsers simultaneously.

3. **Cross-browser Support**: TestCafe works in various browsers, including Chrome, Firefox, Safari, and Edge without additional plugins.

4. **Integrated Test Runner**: TestCafe provides its own test runner, so you don’t need a separate tool like Mocha or Jasmine.

5. **Automatic Waiting**: TestCafe automatically waits for page elements to load, eliminating the need for manual timeouts or waits.

6. **Easy Setup**: Installation and setup are straightforward with just an npm install.

7. **Role Management**: TestCafe provides an easy way to manage user roles and authentication.

8. **API Testing**: TestCafe has builtin API testing capability. This can be used in conjunction with UI testing for data verification or for test standup and teardown procedures.

9. **Easy Reporting**: TestCafe provides simple to use test reporting and can record test results with videos and images

#### Cons:

1. **Language Limitation**: TestCafe tests can only be written in JavaScript or TypeScript, which might be limiting for teams using other languages.

2. **Not as Widely Adopted**: TestCafe is new(ish) and not used as widespread as tools like Selenium.

## Prerequisites

- Node.js (version 10 or newer) and npm. If not installed, [download here](https://nodejs.org/).

## Installation

1. Open your terminal or command prompt.
2. Install TestCafe globally:

```bash
npm install -g testcafe
```

3. Verify the installation:

```bash
testcafe -v
```

## Writing Your First Test

1. Create a new file named `first-test.js`.
2. Add the following content:

```javascript
import { Selector } from 'testcafe';

fixture `My First Test`
    .page `http://example.com`;

test('Check Example Domain', async t => {
    await t.expect(Selector('h1').innerText).eql('Example Domain');
});
```

## Running Tests

1. In the terminal, navigate to the directory containing your test.
2. Run the test using the following command:

```bash
testcafe chrome first-test.js
```

Replace `chrome` with your preferred browser (e.g., `firefox`, `safari`).

## Modular Tests

As you get familiar with TestCafe, consider modularizing your tests to make them more maintainable. Split your tests into utility functions, page models, and test functions.

## Tips and Best Practices

1. **Use Page Models:** Page models encapsulate selectors and actions for specific pages or components, making tests easier to maintain.
2. **Descriptive Test Names:** Use clear and descriptive test and fixture names to make it easy to identify the purpose of each test.
3. **Isolation:** Ensure each test case is independent of others. Tests are often run in parrallel and should never be written in a way where one test relies on state or data from another test.
4. **Use `beforeEach` and `afterEach` wisely:** While these hooks can be helpful, avoid heavy setups that can slow down the entire test suite.

## Integration with GitLab Pipelines

Integrating TestCafe with GitLab CI/CD allows you to automatically run tests every time you push changes to your repository. Below is a step-by-step guide on how to set it up.

### Prerequisites

- A GitLab account and a project repository.
- A `.gitlab-ci.yml` configuration file in the root of your project.

### Configuration

1. **Docker Image:** For simplicity, we'll use the TestCafe Docker image. It has TestCafe, browsers, and everything else you need to run tests without any additional setup.

2. **Define the Pipeline in `.gitlab-ci.yml`:** 

```yaml
image: testcafe/testcafe

stages:
  - test

testcafe_run:
  stage: test
  script:
    - /opt/testcafe/docker/testcafe-docker.sh "firefox:headless,chrome:headless" tests/*.js
```

In the configuration above:
- We set the Docker image to `testcafe/testcafe`.
- We define a single stage called `test`.
- Within the `test` stage, we run TestCafe tests using the provided script in the Docker image. The tests are executed in both Firefox and Chrome in headless mode.

3. **Push the Configuration to GitLab:**

```bash
git add .gitlab-ci.yml
git commit -m "Add TestCafe tests to GitLab CI/CD"
git push
```

4. **Monitor the Pipeline:** After pushing, GitLab CI/CD will automatically trigger the pipeline. You can monitor the progress and view results directly in the GitLab interface under the "CI/CD" tab.

### Tips for GitLab CI/CD with TestCafe

- **Caching:** Consider using GitLab's caching to save node modules or other dependencies to speed up the test execution.
- **Artifacts:** If you want to store screenshots or videos of the tests, you can save them as artifacts in your pipeline.
- **Parallel Execution:** GitLab CI/CD supports parallel job execution. Split your TestCafe tests into multiple parts and run them in parallel to reduce the total test execution time.

## Resources

- [Official TestCafe Documentation](https://devexpress.github.io/testcafe/documentation/getting-started/)
- [Best Practices](https://testcafe.io/documentation/402836/guides/best-practices/best-practices)
- [Gitlab Integration](https://testcafe.io/documentation/402816/guides/continuous-integration/gitlab)