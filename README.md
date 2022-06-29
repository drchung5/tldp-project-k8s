# TLDP Project Part 2 - Docker
In this portion of the project you will take the React client and Node.js server from part 1 and run them in separate Docker containers. To keep things manageable you will run MongoDB as a service in the VM just like before.

## Server

`docker build -t tldp-server .`  
`docker run -d --net=host --name server tldp-server`

Test with postman at `http://localhost:8000/ap1/<resoiurce>`

## Client
`docker build -t tldp-client .`  
`docker run -d --net=host --name client tldp-client`

Connect with browser at `http://localhost:80`