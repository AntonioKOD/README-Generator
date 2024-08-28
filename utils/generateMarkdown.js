// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "BSD 3-Clause") {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else if (license === "BSD 2-Clause") {
    return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
  } else if (license === "Eclipse") {
    return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
  } else if (license === "GNU") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[Apache Licens](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "BSD 3-Clause") {
    return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "BSD 2-Clause") {
    return `[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (license === "Eclipse") {
    return `[Eclipse License](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license === "GNU") {
    return `[GNU License](https://www.gnu.org/licenses/gpl-3.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
  ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  
  # ${data.title}
  
  
  ## Description
  
  ${data.description}

  ## Table Of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribute](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation 

  ${data.installation}

  ## Usage

  ${data.usage}

  ![Usage Screenshot](${data.usageImage})

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Questions 

  [${data.email}](mailto:${data.email})

  [My Github](${data.github})

`;
}

module.exports = generateMarkdown;
