### Place examples on how to use this function in examples.md.

```javascript
import request from 'axios'

// The base URL you can find in the Settings page
const baseUrl = process.env.BASE_URL

// The API key you can find in the Access page
const apiKey = process.env.API_KEY

// Setup the HTTP request
const headers = {'x-api-key': apiKey}
const url = `${baseUrl}/hello-world`

// Send the HTTP request
request.get(url, {headers}).then((res) => {
  const {message} = res.data
  console.log(message) // outputs 'Hello world!'
})
```
