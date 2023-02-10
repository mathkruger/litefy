# Litefy

<img src="src/assets/logo.png" alt="drawing" width="200"/>

![GitHub language count](https://img.shields.io/github/languages/count/mathkruger/litefy)
[![Open Source Love](https://firstcontributions.github.io/open-source-badges/badges/open-source-v1/open-source.svg)](https://github.com/firstcontributions/open-source-badges)
[![Open Source Helpers](https://www.codetriage.com/mathkruger/litefy/badges/users.svg)](https://www.codetriage.com/mathkruger/litefy)

Wanna support me? <a href="https://www.buymeacoffee.com/mathkruger">Buy me a coffee!</a>


A lightweight Spotify client for low-end smartphones (KaiOS included [not yet]) and computers.
The project is being designed with Angular 10, using the [Spotify API](https://developer.spotify.com/documentation/web-api/reference-beta/) and [Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk/quick-start/).

We believe that you don't need a super device to enjoy your music. We believe you don't need to keep up with all new tech to get entertained. That's why Litefy exists.



## Development Server

Before making any contributions, fork and clone the repo. 

If you want to run your own instance of Litefy, run the following commands in a terminal for a dev server:
```
cd litefy
```
```
npm install
```
```
ng serve
```
If you don't already have Angular installed, be sure to install that before running 'ng serve.' Instructions to do so can be found <a href="https://angular.io/guide/setup-local">here</a> on Angular's tutorial for setting up your local environment.

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The local server will display the home page as shown where users will be prompted to login using their Spotify account:

<img width="1436" alt="Screen Shot 2023-02-10 at 1 50 06 PM" src="https://user-images.githubusercontent.com/60016548/218176733-806f709c-c5de-4fe2-a8c2-dd695da4b27c.png">


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

The ng build command is intentionally for building the apps and deploying the build artifacts.

## Contribute

If you wanna contribute with this project, just fork it, create a new branch with your modification and submit a pull request.

## Folder Structure
```
├── .github/workflows
├── e2e
├── src               
│   ├── app
│   │   └── components
│   │   └── models
│   │   └── pages
│   │   └── pipes
│   │   └── services
│   │   └── app-routing.modules.ts
│   │   └── app.component.css
│   │   └── app.component-html
│   ├── assets  
│   │   └── i18n
│   │   └── icons   
│   ├── environments
│   ├── reports         
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── login-callback.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── .browserslistrc          
├── .editorconfig 
├── .gitignore 
├── LICENSE
├── README.md
├── angular.json
├── index.html
├── karma.conf.js
├── ngsw-config.json
├── package-lock.json
├── sonar-project.properties
├── tsconfig.json
├── tslint.json
└── yarn.lock
```
