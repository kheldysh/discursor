This is a simple proof-of-concept project for learning React, Redux and Node.js in a limited timeframe.

To try in development mode, type this in first terminal:

```
npm install
npm run start
```
And this in another terminal:
  ```
cd app/
npm run start
```

Finally, head to localhost:3000, unless the script has already taken you there.

## Status

* A simple, non-persisted WebSocket-based chat. Has no sessions, no channels, just one page showing the messages.
* Practically no tests.
* No error handling.
* No security concerns addressed.
* Has to be started manually.
* Only tested in dev mode.

## Next steps

* Finish build and start scripts to make everything go from one command
* Try on top of Heroku
* Re-evaluate application of immutable.js through the app code
* Enforce Redux best practices

* Implement channels/chatrooms
* Implement user sessions (so as not to lose chat history upon reload at the very least)
* Thunks/Promises look nice...
