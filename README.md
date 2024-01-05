# Astro Starter Kit - Basic

This is my course work for James Quick's course "Build Modern Websites with Astro"

[Link to Course](https://learn.jamesqquick.com/view/courses/astro-course/)

TODO: fix image issue for og tags

Error: Sentry CLI binary for this platform/architecture not found!

```
It seems like none of the "@sentry/cli" package's optional dependencies got installed. Please make sure your package manager is configured to install optional dependencies. If you are using npm to install your dependencies, please don't set the "--no-optional" or "--omit=optional" flags. Sentry CLI needs the "optionalDependencies" feature in order to install its binary.
    at getBinaryPath (/var/task/node_modules/@sentry/cli/js/helper.js:116:13)
    at Object.<anonymous> (/var/task/node_modules/@sentry/cli/js/helper.js:129:18)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at r.<computed>.e._load (/var/task/___vc/__launcher/bridge-server-72TT5FOD.js:1:1574)
    at Module.require (node:internal/modules/cjs/loader:1143:19)
    at require (node:internal/modules/cjs/helpers:119:18)
    at Object.<anonymous> (/var/task/node_modules/@sentry/cli/js/index.js:4:16)
```

Fixed above by adding all optional dependencies from @sentry/cli to the project package.json


Worked great and then a couple of deploys later this happened


```
[23:45:03.766] 04:45:03 [build] Building server entrypoints...
[23:45:06.449] 04:45:06 [astro-icon] Loaded icons from src/icons
[23:45:07.293] 04:45:07 [ERROR] [vite] [31m[sentry-debug-id-upload-plugin] Command failed: /vercel/path0/node_modules/@sentry/cli/node_modules/@sentry/cli-linux-x64/bin/sentry-cli releases new 183bedc150ab48a969f9dea191848dcead3864e7
[23:45:07.293] error: project not found
[23:45:07.293]
[23:45:07.293] Add --log-level=[info|debug] or export SENTRY_LOG_LEVEL=[info|debug] to see more output.
[23:45:07.293] Please attach the full debug log to all bug reports.
[23:45:07.293] [39m
[23:45:07.297] TypeError: possibleFilePath?.replace is not a function
[23:45:07.297]     at collectInfoFromStacktrace (file:///vercel/path0/node_modules/astro/dist/core/errors/dev/utils.js:109:38)
[23:45:07.298]     at file:///vercel/path0/node_modules/astro/dist/core/errors/dev/utils.js:17:25
[23:45:07.298]     at Array.forEach (<anonymous>)
[23:45:07.299]     at collectErrorMetadata (file:///vercel/path0/node_modules/astro/dist/core/errors/dev/utils.js:15:7)
[23:45:07.299]     at throwAndExit (file:///vercel/path0/node_modules/astro/dist/cli/throw-and-exit.js:16:29)
[23:45:07.299]     at cli (file:///vercel/path0/node_modules/astro/dist/cli/index.js:155:11)
[23:45:07.338] Error: Command "npm run build" exited with 1
[23:45:07.466] > Found 136 files
[23:45:07.468] > Analyzing 136 sources
[23:45:07.474] > Adding source map references
[23:45:07.538] error: project not found
[23:45:07.538]
[23:45:07.538] Add --log-level=[info|debug] or export SENTRY_LOG_LEVEL=[info|debug] to see more output.
[23:45:07.539] Please attach the full debug log to all bug reports.
[23:45:07.679]

```

Remove sentry again and all is fine

## I'm a dummy
I had changed the name of my organization on sentry so it couldn't find the project any more. The name is encoded in the token so I had to generate a new token. Since it is in the token I don't think I needed to add to the plugin config but for good measure I added the 'org' property in sourceMapsUpload options.

```js
sentry({
      dsn: "https://920f25fcf2b10d5a9514fac38287ab10@o1078821.ingest.sentry.io/4506504598192128",
      sourceMapsUploadOptions: {
        org: "tha-deciders",
        project: "astro-course-demo",
        authToken: process.env.SENTRY_AUTH_TOKEN,
        telemetry: false,
      },
    }),
```
## encrypting/encoding cookies
New in Astro 4, the option to override encoding of the cookie.
See in signup.astro the commented out cookie set and decode in index.astro.
I know this is "security through obscurity" in other words not really secure but it makes it difficult for someone to glance at the cookies if you walk away without locking your computer and see personal info like username and email. 

Best solution would be to not store anything but the users id so a db call can be made to get the user info for use in the site. If other info has to be included, maybe real encryption/decryption should be used. This is really for physical security as csrf and cookie settings httpOnly and secure will protext against cross site forgery or harvesting user info. 