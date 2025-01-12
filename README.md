# Documentation for echo

## Tech used

- Next.js, because it's one of the fastest and most efficient ways to deploy SaaS applications quickly

- TailwindCSS, because it helps in creating responsive designs for applications and is highly customizable in comparison to frameworks like
  bootstrap

- We'll also use shadcn ui library to get modern components for the application so that we don't have to build them from scratch and waste time
  on that.

- I wanted to try a new technology like convex since it was essentially created by keeping tech founders' needs in mind. I especially liked the
  fact that all database mutations are treated as database transactions, which required me some looking up when I was using mongoDB. Also all
  queries are in real-time since they're listening to a web-socket server. This feature isn't included in mongoDB by default so I had to use
  polling over there for simplicity.

- I'll also be using clerk as a user management platform
