# Recipe Angular Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.
I am constantly working and updating this project and others as well which can be seen in other repositories, however they are in different languages or technologies. This project allows you to create your own recipe, edit or delete it, add or delete ingredients, saves and retrieves data from a database, has simple authentication done in Firebase.

## Deployed App

The application is deployed in AWS and can be found in: http://myrecipe-book-deployment.s3-website-ap-southeast-2.amazonaws.com
Stil requires some work around the edges but is working for the purpose of this demo, to edit, delete or add recipes, the user needs to register or log in 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Errors

If you see the following error `Could not find module “@angular-devkit/build-angular”` it usually happens if you try to run it in a Mac and I developed it in Windows, you can fix it using the following command `npm install --save-dev @angular-devkit/build-angular`

