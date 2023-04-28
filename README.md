## Blocking of Event Loop

- If event loop blocked then it can't serve other requests until previous request is completed
- Suppose a request takes 10s then other requests will take even more than 10s

## Real Life Blocking function

- JSON.stringify()
- JSON.parse()
- Sorting functions for very large objects or arrays
