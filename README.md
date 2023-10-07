# ALMApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

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

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## @@ %%% ^^^ %%% ###### =================
Daily Works
Create project : ng new ALM-App
	Run and Test   : ng serve 

	Install package :
			Jquery 		: npm install jquery (Bootstrap has dependency on Jquery and Popper js) 
			popper 		: npm install popper.js --save
			Bootstrap 	: npm install bootstrap  [Used for the Multi Level Nave bar creation and used JQuery and Popper JS for Bootstrap]
			ng-Bootstrap: npm install --save @ng-bootstrap/ng-bootstrap (Modal and Popup)
			Change port : by adding a port option to my project's angular.json
				Example 
					"projects": {
						"my-project": {
							"architect": {
								"serve": {
									"options": {
										"port": 4201
									}
								}
							}
						}
						
				$$**##   "port": 4201  $$**##
			
	Add Style and Scripts: angular.json
							"styles": [
								  "node_modules/bootstrap/dist/css/bootstrap.min.css",
								  "src/styles.css"
							],
							"scripts": [
								  "node_modules/jquery/dist/jquery.min.js",
								  "node_modules/popper.js/dist/popper.min.js",
								  "node_modules/bootstrap/dist/js/bootstrap.min.js"
							]

NOTE: This Application is getting data and services from  : E:\Workspaces\Spring-Boot-Applications\Spring-Boot-REST-Hibernate-Services

<<<<<<<<  PUSH the Project to Git Hub  >>>>>>>>>
Create the project in GitHub, without Create and initialize README file
	Go to the project root folder and Right Clik and open: Git Bash here
		<- git init
		<- git remote add origin https://github.com/ajitgiri/angular-restaurant-app03.git
		<- git remote -v :To check the permisions like (fetch/push)
		<- git add . : To add all the files to the index to pushed them to remore repository
		<- git commit -m "This is my initial Push to Repository"
		<- git push origin master 
		

<<<  <<<<<  END  >>>>>  >>>

*** Note :  Spring-Boot-REST-Hibernate-Services -> SERVICE IS USED AS BACKEND

## @@ %%% ^^^ %%% ###### =================