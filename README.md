This is a simple proof-of-concept project for learning React, Redux and Node.js in a limited timeframe.

To try in development mode, type this in project directory:

```
npm install
npm run start-dev
```

Finally, head to localhost:3000, unless the script has already taken you there.

## Status

* A simple, non-persisted WebSocket-based chat. Has no sessions, no chatrooms, just one page showing the messages.
* Looks more like a single-channel IRC, really.
* Practically no tests.
* No error handling.
* No security concerns addressed.
* Has to be started manually.
* Only tested in dev mode.

## Next steps
* Build/infra:
 * Create a working production build
 * Make Travis deploy it to Heroku

* Features
 * Implement channels/chatrooms
 * Implement user sessions (to not lose chat history upon reload, at the very least)

* Code quality/practices
 * Re-evaluate application of immutable.js through the app code
 * Enforce Redux best practices
 * Thunks/Promises look nice...
