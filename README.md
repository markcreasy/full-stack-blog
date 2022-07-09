# Full Stack Blog

Full Stack blog is a MySQL/Express/React/Node sample blog. This project contains:
- A ReactJS front end where users can view all blog posts by all users, or
sign in/login to create a new post, update/delete an existing post, or comment on a post.
- Sequelize to create and interact with a mysql db
- express-session and connect-session-sequelize to manage sessions via the mysql db

## Technologies

- react
- bcrypt
- express
- express-handlebars
- express-session
- sequelize 
- mysql2

## Setup

1. download source and from root run `npm run install`
2. to populate db with some fake data `npm run seed`
3. to run client and server via concurrently `npm run start`

## Hosting
This app is deployed to Heroku so you can view a live example: [full-stack-blog](https://infinite-ocean-98029.herokuapp.com/
