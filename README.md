# home-accounts
This is a web app that allows users to track their financial activities. Any user can create and account and start tracking their money. This is very user friendly and easy to use. There is only one form with multiple option to enter any transaction. The app makes graphical analysis of all user transactions and it is easier for users to see the status of their finances in statistic page. The aim of this app is to give users a simple interface that is easy to use.   

## Api Documentation
[home-accounts-api](https://documenter.getpostman.com/view/14864737/2s93XyTi3i)

## Project Display
![screenshot](./images/image1.png)
![screenshot](./images/image2.png)
![screenshot](./images/image3.png)
![screenshot](./images/image4.png)
![screenshot](./images/image5.png)
![screenshot](./images/image6.png)
![screenshot](./images/image7.png)

## Built With

- Express
- MongoDB
- Mongoose
- Node JS 
- React
- React Icons
- Fushion Charts
- Tailwind 

# Getting Started

### Requirements

- Own mongodb account to run the app with valid database.

To get a local copy of the repository please run the following commands on your terminal:

```bash

$ git clone `https://github.com/ajkacca457/home_accounts.git`
$ create config.env file in env folder
$ Add the following variables in config.env file: 
    - PORT (preferablly 5000 for backend server)
    - MONGO_URI (own connection string that for mongodb)
    - JWT_SECRET (it could be anything but it is preferable to use encryption key generator to get a good key)
    - JWT_EXPIRE (any range from 1h to 1y)
$ cd home_accounts 
$ Run `npm install` to install the necessary modules for backend
$ Run `npm start` to start backend server.
$ cd client
$ Run `npm install` to install the necessary modules for front end
$ Run `npm run start` to start frontend server.
$ Start using and modifying the app.

```

# Testing Project

To run test in your terminal:

```bash
$ No tests available for the backend codebase.
$ Run `react-scripts test` to run basic tests for front-end
```

# Limitations

- Right now the app doenst have a live link.
- Time based transactions filter is yet to be added.
- Time based stats filtering is yet to be added.

# Future development pipeline

- Adding timeline based filtering to both transactions and statistics data fetch. 
- Adding option for user to generate pdf report/sharable link.

# Authors

👤 **Avijit Karmaker**

- [LinkedIn](https://www.linkedin.com/in/avijit-karmaker-8738a54)
- [Portfolio](https://avijitkarmaker.netlify.app/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## Copyright
This is a project developed by Avijit.
