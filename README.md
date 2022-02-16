# Business Framework Middelware : Tigris

This project evolved due to an assignment at a university.

Before depolying to the development server the following commands need to be executed:

- `npm install -g @angular/cli`
- `ng add @angular/material`
- `npm i highcharts-angular --save`
- `npm i highcharts --save`
- `npm i @angular/flex-layout @angular/cdk`
- `npm install ng-circle-progress --save`
- `npm install bootstrap`

npm is used with the version: 8.1.2 and Node.js with the version 16.13.1

Highcharts is used to plot serveral charts (e.g. area, bar and pie charts).

The structure of the project is as follows:

- layouts/ modules
    - used to store each component for each subpages (e.g. business partner or dasboard)
    - the data folder to build the connection to the backend (services for each component)
- shared
    - used to store the components which can be accesed by the pages-components
        - each chart-componenet
        - header/ footer and sidebar-navigation pannel
- default
    - used to build the main foundation with the header/ footer and sidebar-navigation
    - route to each subpage

## Structure of the data traffic

The main construct is always the same and differs only in the associated classes.

1. HTML file is to show the data and get the data from the corresponding ts-file
2. TS receives the data from the connceted service class
3. If the data is static the service class is the provider of the data but if the service class (e.g. login and dashboard) is connected to the corresponding backend the backend is the provider of the data. In the second case the data is transfered dynamically through the layers to the html file

## Contributors in the frontend

- @MiriamTrautmann
    - Miriam Trautmann
- @kaanst00
    - Kaja Annika Steinbring
- @ThorLinus
    - Frederik Schröder
- Florian Kühner

## Used configuration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
