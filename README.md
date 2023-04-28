## Blocking of Event Loop

- If event loop blocked then it can't serve other requests until previous request is completed
- Suppose a request takes 10s then other requests will take even more than 10s

## Real Life Blocking function

- JSON.stringify()
- JSON.parse()
- Sorting functions for very large objects or arrays

## How to improve node performances

- Need to devide the work and spread the load
- Node follows single thread apporach
- Instead handling multiple requests into one node process we can divide all the requests into multiple node servers (each having copy of our server code)
- Need to share the loads accross the multiple servers
