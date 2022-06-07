# React module federation template
This is a monorepo template that allows you to build app with microfrontend architecture.

## Apps
- Child, that exposes button component
- Base, that imorts button component
- Shared, that allows to sync apps types

## Usage
First of all, install all dependencies with yarn / npm

    yarn

Then cd to base, child apps and type

    yarn dev

## Production
To run apps in production mode you have to follow these instructions:

    yarn build #builds app in build folder
    yarn serve #serves build directory