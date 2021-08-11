# Example how to use SAFE stack with Parcel

## **Big disclaimer first**
This repository is not meant as some kind of replacement of the original SAFE Stack! It is just a simple example and reference point for me on how to use SAFE stack with an alternative javascript bundler. It is not meant for production purposes and there is no support provided for it.

I want to thank and give credit to all the creators of the original SAFE Template.

---

And now to the more interesting stuff :)

The migration to use Parcel instead of Webpack was quite straight forward and can be seen as a diff between the two first commits in this repository.

```bash
    git diff 01599fd 2fc1be9
```

**There were few "problems"**
* I didn't find out how to use index.html the way it is used in the original SAFE stack so I had to make it as an entry point for Parcel. That means there is a `<scrip>` element added to it with reference to the `App.fs.js` file.
* Images like favicon.png has to be loaded using the `require` function and I've created a helper function `Client.HtmlHelpers.importImage` that takes a path to the file.
* I had to create one config file `.proxyrc.js` for the configuration of the dev proxy server with redirect to the backend service and also to reset some CORS settings because Parcel in its default configuration didn't allow usage of custom `background-image`s from a third party service as _unsplash.it_
* I did not try to make client unit tests work and because of that I deleted that part from the build. This is just because of the lack of time and interest.

All these issues are probably solvable some other way using some plugins or something but for me this solution is now good enough.


# SAFE Template

This template can be used to generate a full-stack web application using the [SAFE Stack](https://safe-stack.github.io/). It was created using the dotnet [SAFE Template](https://safe-stack.github.io/docs/template-overview/). If you want to learn more about the template why not start with the [quick start](https://safe-stack.github.io/docs/quickstart/) guide?

## Install pre-requisites

You'll need to install the following pre-requisites in order to build SAFE applications

* [.NET Core SDK](https://www.microsoft.com/net/download) 5.0 or higher
* [Node LTS](https://nodejs.org/en/download/)

## Starting the application

Before you run the project **for the first time only** you must install dotnet "local tools" with this command:

```bash
dotnet tool restore
```

To concurrently run the server and the client components in watch mode use the following command:

```bash
dotnet run
```

Then open `http://localhost:8080` in your browser.

The build project in root directory contains a couple of different build targets. You can specify them after `--` (target name is case-insensitive).

To run concurrently server and client tests in watch mode (you can run this command in parallel to the previous one in new terminal):

```bash
dotnet run -- RunTests
```

Client tests are available under `http://localhost:8081` in your browser and server tests are running in watch mode in console.

Finally, there are `Bundle` and `Azure` targets that you can use to package your app and deploy to Azure, respectively:

```bash
dotnet run -- Bundle
dotnet run -- Azure
```

## SAFE Stack Documentation

If you want to know more about the full Azure Stack and all of it's components (including Azure) visit the official [SAFE documentation](https://safe-stack.github.io/docs/).

You will find more documentation about the used F# components at the following places:

* [Saturn](https://saturnframework.org/)
* [Fable](https://fable.io/docs/)
* [Elmish](https://elmish.github.io/elmish/)
