# shopsy
A sample shopping cart project to explore different database systems with Node.js

## Installation
Clone this repo to your local machine, cd into the directory and use the Node package manager [npm](https://www.npmjs.com/get-npm) to install

```
npm install
```
## Running Locally
* ### Install docker on your machine
* ### Setup Mongodb(Document database)

    1. #### Pull mogodb docker image using following command

    ```
    $docker pull mongo

    ```
    2. Run docker
    ```
    $docker run --name mongodb -p 37017:27017 -d mongo
    $docker start mongodb

    ```
    3. Connecting with mongodb database usinga client

    4. Download and install Robo3T
    5. Open Robo3T > Create Connection(use localhost:37017)


* ### Setup Redis(key-value store)
    1. #### Pull Redis docker image 
    ```
    $ docker pull redis

    ```


    2. #### Run docker image
    ```
    $ docker run --name  redis -p 7379:6379 -d redis
    $ docker start redis

    ```
    3. #### Client setup
    ```
    $ sudo npm install -g redis-commander

    $ redis-commander --redis-port 7379
    ```
    Access redis db using url from any browser - http://127.0.0.1:8081

* ### Setup MySQL(RDMS database)

    1. #### Pull MySql docker image and run container
    ```
    $ docker pull mysql
    $ docker run --name mysql -p 3406:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql 
    $ docker start mysql
    ```
    2. #### MySql Client setup

    Install MySql workbench

Once installed open workbench and create a connection to hostname 127.0.0.1:3406 enter root password(mypassword) provided earlier and 
create a schema called 'shopsy'.

## Start Shopsy application. Happy learning...
```
$ npm run
```