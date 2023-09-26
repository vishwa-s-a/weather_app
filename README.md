# weather_app

Built using React, Bootstrap, django frameworks

## Instructions to clone the repository
* You need to clone this repository into a desired folder 
```bash
git clone https://github.com/vishwa-s-a/weather_app.git
```

* Then
```bash
cd
```
## Instructions to run the backend
* Directions to execute 
1. To install the required dependencies and packages.
```bash
pip install -r requirements.txt
```
2. Start the django server(specific for Ubuntu 22.04).
```bash
python3 manage.py runserver
```
* You may face some issues as some confidential information and keys are stored in .env file and this is .env file is not commited to this repository
* 2 main keys are: 1. SECRET_KEY of django 2. API_KEY of openweathermap organization
* You can have the API_KEY by registering yourself on openweathermap.org for developer api's



## Instructions to run the frontend(open a new Terminal in same directory)
* Directions to execute 
you need to change directory to frontend by
```bash
cd frontend
```
1. Run npm install to get the required dependencies.
```bash
npm install
```
2. Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```bash
npm start
```

### You may access this blog for further details on how to host this fullstack app on aws.
### By clicking this link [vishwa-s-a.blogspot.com](https://vishwa-s-a.blogspot.com/2023/09/test.html)

