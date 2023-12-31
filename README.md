
# readme.md.js

[![NPM Version](https://img.shields.io/npm/v/readme-generator.svg)](https://www.npmjs.com/package/readme-generator)
[![License](https://img.shields.io/npm/l/readme-generator.svg)](https://www.npmjs.com/package/readme-generator)

A Node.js module to easily generate README.md files for your projects.

## Installation

To use this module in your Node.js project, you can install it via npm:

```bash
npm install readme-generator
```

## Usage

Follow these steps to generate a README.md file for your project using the "readme-generator" module:

1. **Install the Module:**

   First, install the "readme-generator" module in your Node.js project by running the following command:

   ```bash
   npm install readme-generator
   ```

2. **Create a JavaScript File:**

   Create a JavaScript file in your project directory where you want to generate the README file. You can name it `generate-readme.js` or any other suitable name.

3. **Write Code to Generate README:**

   In your JavaScript file (`generate-readme.js`), import the "readme-generator" module and use the `generateReadme` function to generate the README content. Here's an example code snippet:

   ```javascript
   const generateReadme = require('readme-generator');

   // Define your project details
   const projectName = 'My Awesome Project';
   const projectDescription = 'A description of my project.';
   const projectInstallation = 'Installation instructions.';
   const projectUsage = 'Usage information.';
   const projectLicense = 'License information.';
   const projectContributing = 'Contributing guidelines.';
   const projectTests = 'Test instructions.';
   const projectQuestions = 'Contact information for questions.';

   // Generate README content
   const readmeContent = generateReadme(
     projectName,
     projectDescription,
     projectInstallation,
     projectUsage,
     projectLicense,
     projectContributing,
     projectTests,
     projectQuestions
   );

   // Output the generated README content to a file
   const fs = require('fs');
   fs.writeFileSync('README.md', readmeContent, 'utf8');

   console.log('README.md generated successfully!');
   ```

4. **Run the Script:**

   In your terminal, run the script you created:

   ```bash
   node generate-readme.js
   ```

   This will execute the script, generate the README content based on your project details, and save it as `README.md` in your project directory.

## API

### `generateReadme(projectName, projectDescription, projectInstallation, projectUsage, projectLicense, projectContributing, projectTests, projectQuestions)`

Generates a README.md file content based on the provided project details.

- `projectName`: The name of your project.
- `projectDescription`: A brief description of your project.
- `projectInstallation`: Installation instructions.
- `projectUsage`: Information on how to use your project.
- `projectLicense`: License information for your project.
- `projectContributing`: Guidelines for contributing to your project.
- `projectTests`: Instructions for running tests.
- `projectQuestions`: Contact information for questions.

## Author

Lakhan Sharma

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Issues

Please report any issues or suggest improvements by opening an issue on the [GitHub repository](https://github.com/izroth/readme-generator).
