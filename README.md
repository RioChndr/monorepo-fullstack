# Monorepo Fullstack

This is Weightlight Starterpack Fullstack Monorepo that I use to setup a project using nodejs environment.

## Techstack

**Frontend**
- Reactjs
- React router
- Tailwindcss
- Shadcn ui

**Backend**
- Nestjs
- Prisma

## Feature Backend

**Authentication & Authorization**

I have setup authentication API login and SSO Google as starter authentication.

**Health API**

To show your backend health

**Swagger**

API Documentation using swagger in nestjs

## Installation

`yarn install`

## Run

```sh
# Run backend
$ nx serve backend
$ nx build backend

# Run client
$ nx serve client
$ nx build client

# Run prisma migration
$ nx prisma:migrate:dev backend
$ nx prisma:migrate:deploy backend
```