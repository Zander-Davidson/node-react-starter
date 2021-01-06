# node-react-starter
A starter project for a Node.js API and React front end. Can be easily deployed to Heroku.

1. Make changes in app.json and package.json according to your project details

2. Add a .env file in the root project folder to specify database environment variables used by server/db.js

3. Start the Node.js server on port 5000 with
```
npm install
npm test
```
Navigate to http://localhost:5000/api/example/hello to ensure the API server is listening

4. In another terminal, start the React app on localhost:3000 with
```
cd ui
npm install
npm start
```
Navigate to http://localhost:3000 to view the React app

5. To deploy to Heroku, link your app to the GitHub repo and point to master branch
