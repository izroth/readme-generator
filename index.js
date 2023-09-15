const generateReadme = (projectName, projectDescription, projectInstallation, projectUsage, projectLicense, projectContributing, projectTests, projectQuestions) => {
    return `
# ${projectName}
${projectDescription}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation
${projectInstallation}
## Usage
${projectUsage}
## License
${projectLicense}

## Contributing
${projectContributing}
## Tests
${projectTests}
## Questions
${projectQuestions}
`
}

module.exports = generateReadme;
