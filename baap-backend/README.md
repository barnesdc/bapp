# BAPP-BACKEND

### Start a MongoDB Server instance Docker

runs a container

```
$ docker run -d -p 27017-27019:27017-27019 --name bapp-mongodb mongo
```

`- Runs the mongo container in detached mode(in background)` \
`- maps container ports with host ports for host level access` \
`- port mapping only necessary to access it view host machine` \

```
docker exec -it mongodb bash
```

`- allows for connection to docker container via terminal`

```
mongo
```

```
show dbs
```

```
use [database name]
```

`- creates a new database`
