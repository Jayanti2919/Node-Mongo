# Node-Mongo

I have created a connection between MongoDB and Node using `mongoose` module. The cluster is hosted on MongoDB Atlas and can be accessed through the private MongoDB URI. 

## To run this project locally:

1. Clone this repository
2. Run the following command to install all dependencies:
```
npm install
```
3. Create a MongoDB Atlas Cluster and copy its URI
4. Create `.env` file in the root directory and add the copied URI as
```
MONGO_URI=your_mongo_uri
```
5. Optionally, add the port number on which the server has to be run. By default, it will be port 5000.
6. Run the following command to run `index.js` and create the connection:
```
npm run dev
```

## Dependencies:

1. cors: ^2.8.5
2. dotenv: ^16.2.0
3. express: ^4.18.2
4. mongoose: ^7.3.0
5. nodemon: ^2.0.22
