# Śivadharma Database Project

**Śivadharma Database** is a [Neo4j](https://neo4j.com/) web application built in [Node.js](https://nodejs.org/en/). 
The project is ongoing and under development.

## Quick start

Clone this repository using the URL https://github.com/martinadellobuono/shivadharma-neo4j.git
or download the folder.

The project works with:

- [**Node.js**](https://nodejs.org/en/) v16.14.2
- [**Express**](https://www.npmjs.com/package/express) @4.17.1
```
npm i express
```
- [**bcrypt**](https://www.npmjs.com/package/bcrypt) @^5.1.0
```
npm i bcrypt@^5.1.0
```
- [**body-parser**](https://www.npmjs.com/package/body-parser) @*
```
npm i body-parser
```
- [**bootstrap**](https://www.npmjs.com/package/bootstrap) @^5.1.3
```
npm i bootstrap@^5.1.3
```
- [**bootstrap-icons**](https://www.npmjs.com/package/bootstrap-icons) @^1.8.3
```
npm i bootstrap-icons@^1.8.3
```
- [**cookie-parser**](https://www.npmjs.com/package/cookie-parser) @^1.4.6
```
npm i cookie-parser@^1.4.6
```
- [**dotenv**](https://www.npmjs.com/package/dotenv) @^16.0.3
```
npm i dotenv@^16.0.3
```
- [**ejs**](https://www.npmjs.com/package/ejs) @>=3.1.7
```
npm i ejs@>=3.1.7
```
- [**express**](https://www.npmjs.com/package/express) @*
```
npm i express
```
- [**express-flash**](https://www.npmjs.com/package/express-flash) @^0.0.2
```
npm i express-flash@^0.0.2
```
- [**express-session**](https://www.npmjs.com/package/express-session) @^1.17.3
```
npm i express-session@^1.17.3
```
- [**express-validator**](https://www.npmjs.com/package/express-validator) @*
```
npm i express-validator
```
- [**formidable**](https://www.npmjs.com/package/formidable) @*
```
npm i formidable
```
- [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken) @^8.5.1
```
npm i jsonwebtoken@^8.5.1
```
- [**mammoth**](https://www.npmjs.com/package/mammoth) @^1.5.1
```
npm i mammoth@^1.5.1
```
- [**method-override**](https://www.npmjs.com/package/method-override) @^3.0.0
```
npm i method-override
```
- [**neo4j-driver**](https://www.npmjs.com/package/neo4j-driver) @*
```
npm i neo4j-driver
```
- [**nodemon**](https://www.npmjs.com/package/nodemon) @*
```
npm i nodemon
```
- [**npm**](https://www.npmjs.com/package/npm) @^8.13.1
```
npm i npm@^8.13.1
```
- [**npm-local**](https://www.npmjs.com/package/npm-local) @^0.0.1
```
npm i npm-local@^0.0.1
```
- [**passport**](https://www.npmjs.com/package/passport) @^0.6.0
```
npm i passport@^0.6.0
```
- [**passport-cookie**](https://www.npmjs.com/package/passport-cookie) @^1.0.9
```
npm i passport-cookie@^1.0.9
```
- [**passport-local**](https://www.npmjs.com/package/passport-local) @^1.0.0
```
npm i passport-local@^1.0.0
```
- [**tinymce**](https://www.npmjs.com/package/tinymce) @^6.0.3
```
npm i tinymce@^6.0.3
```

Packages can be installed with [**NPM**](https://www.npmjs.com/).

After installing the required packages:

- Download **Neo4j Desktop**: https://neo4j.com/download/
- Create a new **Project**
- Click on the **Add** button
- Select **Local DBMS**
- Set **bolt://localhost:7687** as **Connect URL**
- Choose a **user** and a **password**
- Insert the credentials in .env:
  **Username**: NEO4J_USER = insert the user set in the db
  **Password**: NEO4J_PW = insert the password set in the db
- Run the application locally: **nodemon app.js**
- Open the application in your browser: **http://0.0.0.0:8080/**

## Neo4j Graph
In the application it is possible to create and store data in the Neo4j database, where they are structured as a graph. To create data and check the resulting graph, it is necessary to:

- Click on **Create an edition** in the navbar of the application.
- Follow the required steps.
- Open the database accessed via **Remote connection** in Neo4j Desktop.
- Click on **Database Information** (first icon on the top of the sidebar on the left).
- Click on one of the **Node Labels** or **Relationship Types**.
- A graph automatically appears in the body of the page.

To browse the graph, it is possible to:

- Use the tools provided by Neo4j on the user-side.
- Run a [CYPHER](https://neo4j.com/developer/cypher/) query by inserting it in the bar above the graph and clicking on the rerun icon.
