About the project

A request to /api/whoami returns a JSON object with your:
-   IP address in the ipaddress key
-   preferred language in the language key.
-   software in the software key.

The result should look like this: 
```{"ipaddress":"::1","language":"en-US,en;q=0.9","software":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"}```


Built with

- Node.js
- Express.js
- body-parser


Getting Started
To get a local copy up and running, follow these simple steps.


Prerequisites

- npm


Installation & Usage

- Clone the repo: git clone https://github.com/SaheedLawanson/Request-Parser-Header.git

- Install node: run in cmd
    
    ```npm install node```

- Open cmd in the project root folder and run 
    
    ```node index.js```

- On your preferred browser, visit "localhost:3000"

- Use the API as specified
