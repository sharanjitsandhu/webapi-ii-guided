# Web API II Notes

/listAllHubs > /hubs GET
/createHub > /hubs POST
/getHubMessages > /hubs/:id/messages GET
/getHubByID > /hubs/:id { ...hub information }
/countHubMessages > /hubs/:id add the count as extra property { ..hub info including count of messages}

`/hubs/${hub.id}/count`

Review how to use postman.

## Hubs Router

- add hubs-router.js to /hubs
- move all the /api/hubs endpoints to hubs-router
- import router in server.js
- create a router express.Router() inside hubs-router
- export the router
- move endpoints from server. to router.
- remove the /api/hubs from the urls inside hubs-router
- move require of Hubs from server to router and update path

MAKE SURE TO SAVE ALL FILES!

## The client can send data to the server

- inside the request body.
- in the URL params
- in the query string

https://www.google.com/search
? <<<<< marks the beginning of the query string
newwindow = 1 <== key/value pair
& <<<<<<<< = separates key/value pairs
source = hp
&
ei = Bk2_XJeULIXUtQXco6agBA
&
q = lambda+school

```js
req.query = {
  newwindow: "1",
  source: "hp",
  q: "lambda+school"
};
```
