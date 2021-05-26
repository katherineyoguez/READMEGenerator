// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license == "Apache 2.0 License")
  let badge;
  switch (license){
    case "Apache 2.0 License":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "BSD 3-Clause License":
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "BSD 2-Clause License":
      badge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "Attribution 4.0 International":
      badge = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)(http://creativecommons.org/licenses/by/4.0/)";
      break;
    case "Attribution-ShareAlike 4.0 International":
      badge = "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-sa/4.0/)";
      break;
    case "Attribution-NonCommercial 4.0 International":
      badge = "[!License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc/4.0/)";
      break;
    case "Attribution-NoDerivates 4.0 International":
      badge = "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nd/4.0/)";
      break;
    case "Attribution-NonCommmercial-ShareAlike 4.0 International":
      badge = "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)";
      break;
    case "Attribution-NonCommercial-NoDerivatives 4.0 International":
      badge = "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-nd/4.0/)";
      break;
    case "Eclipse Public License 1.0":
      badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU GPL v3":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "GNU GPL v2":
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
      break;
    case "GNU AGPL v3":
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU LGPL v3":
      badge = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "GNU FDL v1.3":
      badge = "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)";
      break;
    case "IBM Public License Version 1.0":
      badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "The MIT License":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "The zlib/libpng License":
      badge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      break;
  }
  return badge

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //replace function
  return `(https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "## License \n This project was licensed under"
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
# ${data.Title}
https://github.com/${data.Username}/${data.Title}

# ⚡️ Description 
${data.Description}

# 📚 Table of Contents 
* [Installation](#installation)
* [Usage](#usage) 
* [License](#license)
* [Tools](#tools)
* [Contributing](#contributing)
* [Questions](#questions)

# ⌨️ Installation
Installation:
${data.Installation}

# Usage
Usage:
${data.Usage}

# License
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# 🛠️ Tools used
Tools used:${data.Tools}

# 🏘️ Contributing
​Contributors: 
${data.Contributing}

# 📇 Questions
If you have any questions contact ${data.Username} directly at : ${data.Email}.
`
}

module.exports = generateMarkdown;