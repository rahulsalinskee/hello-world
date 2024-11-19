- AXIOS:
    - It is a light weight package that is used to make HTTP requests from the browser.
    - It is also used simplify the process of sending asynchronous HTTP requests to a server and also handles the response.

- Differences between Axios and Fetch API:
    - Ideally, when we get hte response from the server, we need to parse the response into JSON and then use the data, so that browser can understand it but in axios, we don't need to parse the response into JSON because axios does it for us internally.
    - Axios also has a built-in mechanism for handling errors and retries, which can be useful in certain scenarios.
    It also needs to be installed explicitly, while the Fetch API is built into the browser.

- How to install Axios:
    - npm install axios

- Where in the code Axios is used:
    - GetDataUsingAxios is injected in About page. It fetches data from the server and displays it on the page on a button click.

