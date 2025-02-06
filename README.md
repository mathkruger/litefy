# ATTENTION - THIS PROJECT IS DISCONTINUED, THIS MEANS I DON'T HAVE ANY TIME OR WILLING TO CONTINUE DEVELOPING IT. FEEL FREE TO FORK IT AND MAKE YOUR FIXES/CHANGES.

# Litefy

<img src="src/assets/logo.png" alt="drawing" width="200"/>

![GitHub language count](https://img.shields.io/github/languages/count/mathkruger/litefy)
[![Open Source Love](https://firstcontributions.github.io/open-source-badges/badges/open-source-v1/open-source.svg)](https://github.com/firstcontributions/open-source-badges)
[![Open Source Helpers](https://www.codetriage.com/mathkruger/litefy/badges/users.svg)](https://www.codetriage.com/mathkruger/litefy)

## Support <a name="support"></a>

If you wish to support the me (mathkruger), <a href="https://www.buymeacoffee.com/mathkruger">buy me a coffee!</a>

## Table of Contents
1. [Project Description](#description)
2. [Project Technologies](#technologies)
3. [Running the Application](#application)
    1. [Starting a Development Server](#application1)
    2. [Creating a Build](#application2)
4. [Contribution Instructions](#contribution)
    1. [Initial Project Setup](#contribution1)
    2. [Making Changes to the Application](#contribution2)
        1. [Generating Code Scaffolding](#contribution2.1)
    3. [Submitting Your Changes](#contribution3)
5. [Current Issues](#issues)
6. [License](#license)

## Project Description <a name="description"></a>
Litefy is a lightweight version of the Spotify client that is made for memory and processing restricted smartphone and computer users.        

(Note: Some operating systems, such as KaiOS, are not yet supported).    

To see the current deployment of the application, visit [https://mathkruger.github.io/litefy](https://mathkruger.github.io/litefy).

## Project Technologies <a name="technologies"></a>
The project is being designed with the following technologies:

[Angular 10](https://angular.io)     
[Node.js](https://nodejs.org/en/)     
[Spotify API](https://developer.spotify.com/documentation/web-api/reference-beta/)     
[Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk/quick-start/)     

## Running the Application <a name="application"></a>

After you've completed the [initial project setup](#contribution1), use the following commands to start the application.

1. Install [Node.js](https://nodejs.org/en/)
2. Within the litefly directory, run the command `npm install` to install the appropriate node modules

### Starting a Development Server <a name="application1"></a>

1. Run the command `ng serve`
2. Navigate to `http://localhost:4200/` to see your local version of the site

The application will automatically reload if you change any of the source files.

### Creating a Build <a name="application2"></a>

1. Run the command `ng build`     

The build artifacts will be stored in the `dist/` directory.     
For a production build, use the command `ng build --prod` instead.

## Contribution Instructions <a name="contribution"></a>

### Initial Project Setup <a name="contribution1"></a>

1. Create a [fork](https://github.com/mathkruger/litefy/fork) of the main repo to your GitHub account       
2. Create a new folder somewhere on your device
3. Launch a command terminal and change your directory to the newly created folder
4. Run the command `https://github.com/yourGitHubName/litefy.git`       
    &emsp;(NOTE: Replace yourGitHubName with your GitHub username (e.g. mathkruger))
5. Open the newly created litefly folder with your IDE of choice (such as [Visual Studio Code](https://code.visualstudio.com/))     
6. From the IDE's terminal, run the command `git checkout -b your-new-branch-name` to create and switch to your new branch

### Making Changes to the Application <a name="contribution2"></a>

For a beginner's guide to Angular, visit Angular's [tutorial](https://angular.io/tutorial/tour-of-heroes) page or its [getting started](https://angular.io/start) page.      
To find out more about other Angular command line instructions, visit [this link](https://angular.io/cli).         
To find out more about the Spotify API and Web Playback SDK, see their respecitve pages under the [project technologies](#technologies) tab.     

#### Generating Code Scaffolding <a name="contribution2.1"></a>

1. Run the command `ng generate component component-name` in the appropriate project directory to generate a new component

`ng generate directive|pipe|service|class|guard|interface|enum|module` can be used to generate various other file schematics.      
More information on the `ng generate` command can be found [here](https://angular.io/cli/generate).

### Submitting Your Changes <a name="contribution3"></a>

1. On your IDE's command terminal, run the command `git add .` to stage all your changes      
2. Run the command `git commit -m ""` to commit your changes. Within the double quotations, include a brief statement that reflects what changes you made (e.g. `git commit -m "fix: fixed routing bug in app-routing.module.ts"`)
3. Run the command `git push` to push your changes to your remote branch on GitHub
4. On your forked repository's GitHub page, click on the Pull Requests tab followed by the green New pull request button
5. Compare the branch with your changes to mathkruger's main branch
6. Add a brief message to your pull request that reflects the changes you made (e.g. step 2) and add more details about the changes in the description box
7. Submit your pull request for review    

## Current Issues <a name="issues"></a>

[Click here](https://github.com/mathkruger/litefy/issues) to see Litefy's issues that need fixing.

## License <a name="license"></a>

Litefy is [MIT licensed](./LICENSE).
