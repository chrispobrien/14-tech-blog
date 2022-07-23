# Tech Blog [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

[![Tech Blog][screenshot]](./public/assets/images/screenshot.png)

Deployed application:

https://sheltered-wave-14149.herokuapp.com/

Week 14 of Columbia Engineering Coding Bootcamp challenges us to create a tech blog, the first full-stack application of this course. This is an MVC Model-View-Controller application utilizing the following node packages:

* bcrypt
* connect-session-sequelize
* dotenv
* express
* express-handlebars
* express-session
* mysql2
* sequelize

Express is the web server, express-handlebars is the MVC mechanism, express-session allows us to persist a session, via connect-session-sequelize (session stored within the database) so we can log in and out. The password is hashed with bcrypt so it is stored securely within the database.  Sequelize and mysql2 provide the database connection, dotenv the secret environment variables.

## Installation

```sh
git clone https://github.com/chrispobrien/14-tech-blog.git
```

This creates the folder 14-tech-blog, use the following to install all node packages:

```sh
cd 14-tech-blog
npm i
```

Create or recreate the MySQL database:

```sh
mysql -u root -p
source db/schema.sql
exit
```

Create a .env file in the root folder with contents:

```
DB_NAME='tech_blog_db'
DB_USER='root'
DB_PASSWORD='your_root_password'
SECRET='your_secret'
```

## Usage

There are no seeds. Simply start the server

```sh
npm start
```

and browse to http://localhost:3001/ to use the site.

# Credits

A lot of the code is similar to the week 14 lesson, the rest is my implementation of this challenge.

## License

MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- MARKDOWN LINKS & IMAGES -->
[screenshot]: ./public/assets/images/screenshot.png