# README

Using Visual Studio Code's [Remote Containers](https://code.visualstudio.com/docs/remote/remote-overview) features, this repository
is an example of how to utilize the VSCode functionality to run a complete development environment using containers. Please note that other
than having VSCode, the VSCode "Remote Development" plugin, and Docker installed, there are no other local dependencies.

## Prerequisites

1. Install [Visual Studio Code](https://code.visualstudio.com/).

2. Install the [Remote Development plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).

3. Install Docker Desktop:

- [Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- [macOS](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- Linux:
  - We'll assume if you're running Linux, you should know what you're doing

## Starting the Stack

1. Clone this repository and open the directory in VSCode

2. When prompted or via the Command Pallette, "Reopen" the folder "in Containers"

At this point, the Docker setup will commence. It will download the necessary images from Docker Hub, build the application container image,
start up the application stack (app container and MySQL container), and copy the necessary VSCode pieces into place within the running
application container.

Once all of that is done, the developer will be left with a VSCode window in which to develop, and the VSCode Terminal will be running within
the application container. From there, a developer should be able to do all of their normal work, including bundling new gems, installing new
NodeJS packages via yarn, running migrations and rake tasks, etc. without having to worry about interacting directly with Docker.

Once work is done, shutting down the stack is as simple as closing the folder window in VSCode.

## Application structure

This follows typical Rails application structure, plus React components located in `app/javascript/components/`. To utilize those components on a specific controller, first add a pack to `app/javascript/packs/` mimicking `home.js` in that directory. Then add a new view with the same name as your controller with `<%= javascript_pack_tag 'home' %>`.

## Benefits

- No need to install local tooling past having enough to run the VSCode editor and Docker.
- No locally running database servers.
- No language version managers: the containers set all necessary language versions, and Bundler/Yarn behave as expected based on their lock files.
- No complicated stack spin up with multiple commands and windows.
