# nextjs-custom-server-params

Test case for Next.js custom server. Nested paths and nested parameterized routes appear to be broken. Routing those each forces the page to refresh, rather than handling the routing within the client.

## Steps to Reproduce

1.  Clone this repository.
1.  `yarn dev`
1.  Open http://localhost:3000
1.  Click the provided links.

## Expected Result

The Next.js client router manages rendering pages for all linked routes.

## Actual Result

The browser refreshes for nested static routes and nested parameterized routes.
