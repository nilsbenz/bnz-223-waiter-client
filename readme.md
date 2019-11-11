# M223 Waiter Application Client

This is the Client of my application. It was realized with [StencilJS](https://stenciljs.com/docs/introduction) and uses a caddy reverse proxy. 

This app is intended for untrained waiters at an event such as an evening entertainment. Different users can be created, altered and deleted. These users can make orders for a specified table, and the price of the order is calculated automatically. An administrator can create tables and items, and also verify that a user is indeed a waiter.

First, users have to register, where the first registered user is admin by default. This user can then grant permissions to later registered users.

## Getting Started

First, install [caddy](https://caddyserver.com/) and [npm](https://www.npmjs.com/get-npm) if it's not already installed.

When installed, the caddyserver can be started by typing the following command in the terminal:

```bash
caddy
```

Then install the npm dependencies:

```bash
npm i
```

To start the client, run:

```bash
npm start
```

Open [localhost:3030](http://localhost:3030) (and not localhost:3333) to start browsing.