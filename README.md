Desco platform data env is aset of docker services running influx, neo4j and the node REST API.   
Both influx and and neo4j are loaded with all UPP data.  
Each service is accessible on it's default ports:
- influx:8086
- neo4j:7474
- desco-rest-api:4000
- grafana:3000

Start with `docker-compose up --build`
or `docker-compose up --build -d` to run in detached mode (background)
