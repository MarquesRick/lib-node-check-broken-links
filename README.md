<a href="https://www.linkedin.com/in/henri-marques/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/37425086?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Henrique Marques</b></sub></a> <a href="https://www.linkedin.com/in/henri-marques/" title="Linkedin">🧑🏻‍💻
 </a>


Made with ❤️ by Henrique Marques 👋🏽 Say hello!

[![Twitter Badge](https://img.shields.io/badge/-@Henrimarques18-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/Henrimarques18)](https://twitter.com/Henrimarques18) [![Linkedin Badge](https://img.shields.io/badge/-Henrique_Marques-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henri-marques/)](https://www.linkedin.com/in/henri-marques/) 
[![Gmail Badge](https://img.shields.io/badge/-henmarques-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:henmarques2009@gmail.com)](mailto:henmarques2009@gmail.com)

---
<h1 align="center">Lib Check Broken Link</h1>

<h3 align="center">
    <a href="https://www.npmjs.com/package/checkbrokenlink">🔗 Click here to download</a>
</h3>
<p align="center">🚀 simple library developed with NodeJs for  check broken urls on markdown(.MD) files</p>

###  🏗 Creating and add packages in the project
```bash
# create package.json
npm init -y

# install chalk - use this version for to use require('')
npm i chalk@4.1.2

# install jest on version 27.0.6
npm i --save-dev jest@27.0.6 

# install jest intellisense to work on vscode
npm i @types/jest
```

### 💿 Technologies

- [fs nodejs](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
- [regex101](https://regex101.com/)
- [node fetch](https://www.npmjs.com/package/node-fetch)
- [jest](https://jestjs.io/pt-BR/)
- [shebang](https://mateusmuller.me/2019/08/14/shebang-declarar-o-compilador-em-shell-script/#:~:text=O%20shebang%20como%20%C3%A9%20conhecido,a%20declara%C3%A7%C3%A3o%20do%20seu%20compilador.)
- [SPDX License List](https://spdx.org/licenses/)
- [package json exemples for lib nodejs](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

### 🆙 Publish your lib
#### Preparing the lib files

Before publishing, we have to add the environment to run the lib.
On line 1 of the cli.js file, first of all (including imports), add the following code:
```
#!/usr/bin/env node
```
It will appear in the code as a comment, which is normal.

This line, which always starts with the characters #!, is what we call a shebang. When we add this line to a file that will be executed through the terminal, we are instructing the operating system about the type of file that will be executed and in what way (in this case, we are talking about NodeJS).

The shebang is only interpreted by Unix-like systems such as Linux distributions and MacOs. Windows systems ignore this type of command, but even so it is necessary for the installation of the lib and the necessary NodeJS files to be done correctly.

#### Publishing to NPM
1. Create an account on NPM

2. Login via terminal command line with npm add-user. You will need your NPM registered username and the password you used to create the account (step 1). If all goes well, you will see the message Logged in as <your username> on https://registry.npmjs.org/ in the terminal.

3. You will need to update the package.json with all the necessary information:

``name:`` You will need a unique name to identify your lib in the NPM repository. The recommendation is that it be a short name (if possible) and easy to remember that does not have js in the name, since this is implicit - since we are using the Node Package Manager. You can check which names are already in use by searching the NPM website itself;<br/>
``version:`` For the first publication, the version must be 1.0.0. For the next ones - if you want to make updates - see more instructions below;<br/>
``description:`` String with description of the functionality. It serves to help other people looking for libs in NPM;<br/>
``keywords:`` an array of strings with keywords related to the lib, also to facilitate the search. For example: 
```json 
['markdown', 'URL']
```
``homepage:`` String with the project's URL on GitHub, or another page you want to inform (your personal portfolio page, for example);<br/>
``bugs:`` An object with the contact for users to report bugs. It must follow the format:
```json
"bugs": {
   "url" : "https://github.com/<your-user>/<project-name>/issues",
   "email" : "email@your-email.com"
 },
```
If you want to inform only the url or the email, you don't need the object, just a string: ”bugs”: “string with the email or GitHub link”,

``license:`` Permissions and usage restrictions that you want to apply to your lib. You can refer to the list or leave the default, ISC.<br/>
``author:`` String with your information, according to the model: "Your Name <email@your-email.com> (http://yoursite.com/)". Email and website are optional;<br/>
``main:`` String with the path of your application's entry point. In this case, it will be ./cli.js.<br/>
``bin:`` This field does not appear by default in package.json, you will have to create it. It is an object in which you must define as a key the term that will be used to execute your lib from the command line, and as a value the path to the entrypoint, that is, the file that is the entry point of the application - in this case, the ``./cli.js`` For example:

```json
"bin": {
   "<nome-da-lib>": "./cli.js"
 },
```

Following the example above, to execute the lib on the command line, the user must enter the command ``lib-name ./path/to/file.md``.

Instead of lib-name you can use another term, but by default it is the same as the lib name to avoid confusion and make it easier to remember.

``"preferGlobal": true``: Boolean with the value true. Since the purpose of this lib is to run from the terminal and query lists of files that can be in any directory, it makes the most sense for it to be installed globally by default. This way, you can run it from any directory, not just the directory where it was installed.

### 🆕 New versions
NPM works with the concept of semantic versioning. You may have already seen that the version number sequences of all the dependencies we use (including NodeJS itself and NPM) follow the same pattern of three numbers separated by dots, for example ``1.0.0`` (the initial version that package. json creates) or ``14.17.5`` (latest recommended version of NodeJS at the time of this writing). What does each number in this sequence mean?

#### Semantic versioning uses the following criteria:

The first number in the sequence (the 14 in 14.17.5) refers to breaking changes, that is, version updates that have the potential to “break” code that uses previous versions. That is, an application that uses codes (methods, functions, etc) from version 13.X.X of a given lib may not work with version 14.X.X, as there will be significant differences between versions. These updates are known as major.<br/><br/>
The middle number (the 17 in 14.17.5) refers to new functionality added, but not “breaking” in relation to codes from previous versions. This type of update is known as a minor.<br/><br/>
The last number (the 5 in 14.17.5) refers to code ``fixes`` bug fixes, performance improvements or similar changes that do not change current functionality (or bug fix exception) nor introduce new ones. It is known as a patch.
### 🚀 Updating the lib in NPM
If you make changes to your lib code after the course and want to update the version in NPM, check the type of update according to the list above and run the command npm version ``<patch | minor | major>``, choosing only one of the three options according to the type of update. For example, if you are currently on version ``1.0.0``, after running npm version patch you should receive the message v.1.0.1 in the terminal and the value will also be changed in package.json.
<br/><br/>
After this process, you can update the NPM repository with the npm publish command.