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

## How to use built in node cluster modules

- the cluster modules
- when node server.js it is master process
  - we have fork() function and it creates a worker process, each worker contains code that is required to serve the request
  - Number of worker means number of node processes
  - These workers share the requests on round robin basis
  - For example
    - Request 1 ---> Worker 1
    - Request 2 ---> Worker 2
    - Request n ---> Worker n

### More About Cluster Modules:-

- The cluster module in Node.js provides a way to create child processes that share the same server port. This module allows developers to take advantage of multi-core systems, thereby increasing the overall performance and scalability of Node.js applications.

- When a Node.js application is started using the cluster module, a "master" process is created. This process is responsible for creating a pool of "worker" processes. Each worker process is a copy of the main application process that can handle requests independently.

- The fork() method is used to create a new worker process. When a worker process is created, it starts running the same code as the master process. However, the worker process is designed to only handle a subset of the incoming requests. When a request is received by the master process, it is passed on to one of the worker processes to handle.

- Each worker process has its own event loop and memory space, but they all share the same server port. This allows the worker processes to handle incoming requests independently, without interfering with each other.

- The master process is responsible for managing the worker processes. It monitors their health and can restart any workers that crash or fail. The master process also handles the load balancing of incoming requests to the worker processes.

- In summary, the cluster module in Node.js allows developers to take advantage of multi-core systems by creating a pool of worker processes that share the same server port. The fork() method is used to create new worker processes, while the master process manages the worker processes and handles load balancing of incoming requests.

- PLEASE NOTE:- In order to check the performance of the node worker processes you need to disable cache of network from google chrome.
