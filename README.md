### Local Development Setup
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### GitHub SSH
You will want to authenticate your GitHub access through an SSH. You can go to the follow website and follow the guides to add either an existing or a new SSH key. https://docs.github.com/en/authentication/connecting-to-github-with-ssh

#### Node
It is recommended to use NVM for managing your local Node.js versions. This repo can be equiped with an `.nvmrc` file for automatically switching to a supported version.

1. Install NVM: https://github.com/coreybutler/nvm-windows
2. Ensure NVM is installed by running `nvm list` in a CMD window
3. Install the latest node version of Node: https://nodejs.org/en/
4. Use the latest version of Node by typing in `nvm use XX.XX.XX`

#### Yarn
This repo uses Yarn as it's primary package manager. You can follow the guide to install Yarn located here: https://yarnpkg.com

#### Setup GitHub Config for EOF
You may run into some linting issues depending on what type of machine you're using. You will want to setup your GitHub config to set autocrlf to false. You can do this by entering `git config --global core.autocrlf false`

#### Installing
1. Clone the project to a local directory
2. In the project directory use `yarn setup` to setup the project
3. `yarn start` to start the project
4. For web vist: http://localhost:3000/
5. For server visit: http://localhost:8080/graphiql
