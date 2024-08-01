## Developing

To get working on this repo, first fork the repository to your personal GitHub account. Clone that repository in your local development environment.
Run `npm install` to install the project dependencies. Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Linting and auto-formatting settings are defined in the `.vscode` folder. Add new preferences there, or tell us why we should change existing settings.

### Database

#### Source of Truth

The shape of our data is defined with Prisma, in `schema.prisma`. It generates many things:

1. TypeScript ORM client for interacting with our chosen database
1. Zod types for runtime type validation
1. ERD (Entity Relationship Diagram)
1. DBML (DataBase Markup Language)
1. SQL migrations

When you want to change the shape of data in our code and our database simultaneously, you change the Prisma file, and then do some Prisma things to apply the changes.

```bash
npx prisma generate     # Generates client, ERD, DBML, TS types, and Zod types
npx prisma migrate dev  # Creates and applies SQL migration to development database
```

#### Connecting to a local development database

This project is set up for PostgreSQL, which you can install and run on your computer. To create a test database, you can use pgAdmin, which should be bundled in the PG installer. To connect to that database, create/update your `.env` file in the TLD (top level directory) to define PG_URL as this database's [connection string](https://www.prisma.io/docs/orm/overview/databases/postgresql#connection-details).

The abstraction that Prisma provides makes it easy to switch to a different database if we decide to at any point. There are just some features in the schema file that are specifically for PostgreSQL, which would need to be changed to suit the desired DB. PG is a good database though.

Some changes to existing data can be made non-destructively, but others require manual SQL migrations.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
