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

`- creates a new database`

```
use bapp-listings
```

ex. save command via docker cli

```
db.listings.save({
    category: "restaurants",
    review: 5
    name: "Blazin' Steaks",
    address: "1010 University Ave, Honolulu, HI 96826",
    city: "Honolulu",
    state: "HI",
    zip: 96826,
    phone_number: "808-942-1111"
    website: ""
})
```

- `note: what if there are multiple locations`

- utilize CRUD (CREATE, READ, UPDATE, DELETE)
