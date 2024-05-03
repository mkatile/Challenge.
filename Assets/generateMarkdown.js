// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license.toLowerCase()) {
      case 'boost software 1.0':
          return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      case 'apache 2.0':
          return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'gpl 3.0':
          return '[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      default:
          return ''; // Return an empty string if the license is not recognized
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license.toLowerCase()) {
    case 'boost 1.0':
        return '[Boost License 1.0](https://opensource.org/licenses/Boost-1.0)';
    case 'apache 2.0':
        return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'gpl 3.0':
        return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
    default:
        return ''; // Return an empty string if the license is not recognized
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license.toLowerCase()) {
    case 'boost 1.0':
        return `
## License

This project is licensed under the [Boost License 1.0](https://opensource.org/licenses/Boost-1.0).
`;
    case 'apache 2.0':
        return `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).
`;
    case 'gpl 3.0':
        return `
## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).
`;
    default:
        return ''; // Return an empty string if the license is not recognized
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title

${data.title}
${renderLicenseBadge(data.license)}


## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please feel free to contact me:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;

