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
    category: "restaurant",
    review: ""
    name: "KC Cajun",
    address: "201 N. Forest Ave. Suite 130",
    city: "Independence",
    state: "MO",
    zip: 64050,
    phone_number: "(816) 337-0207"
    website: "kansascitycajun.com"
},
{
    category: "restaurant",
    review: ""
    name: "Peachtree Buffet",
    address: "6800 Eastwood Trafficway",
    city: "Kansas City",
    state: "MO",
    zip: 64129,
    phone_number: "(816) 923-0099"
    website: "places.singleplatform.com"
},
{
    category: "restaurant",
    review: ""
    name: "Geaux Catering, LLC",
    address: "1221 West 103rd Suite 143",
    city: "Kansas City",
    state: "MO",
    zip: 64114,
    phone_number: "(816) 878-9798"
    website: "geauxcatering.com"
},
{
    category: "restaurant",
    review: ""
    name: "Simply The Best Cuisine",
    address: "5440 Blue Ridge Cut Off",
    city: "Raytown",
    state: "MO",
    zip: 64133,
    phone_number: "(816) 699-4244"
    website: ""
}{
    category: "restaurant",
    review: ""
    name: "KC Daiquiri Shop",
    address: "1116 Grand Blvd",
    city: "Kansas City",
    state: "MO",
    zip: 64106,
    phone_number: "(816) 974-3275"
    website: "kcdaiquirishop.com"
})
```

- `note: what if there are multiple locations`

- utilize CRUD (CREATE, READ, UPDATE, DELETE)
