# github-graphql-template

A step by step guide to creating bit Scope for GitHub’s GraphQL API like this one:
https://bitsrc.io/giladshoham/github-graphql

From this Scope, any user can easily install these components using NPM or import them into their own projects using Bit to quickly modify them to suit their own use case.


# 1. Generate GitHub access token

To run this project you will have to generate a github token to access GitHub’s API.  
[creating-a-personal-access-token-for-the-command-line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

Then, copy the generated token into `./src/App.js` instead of the 'YOUR TOEKN HERE' string.

# 2. Running the project

```bash
npm i
npm start
```

# Workflow

This project is based on simple create react app.
Make sure to run `npm install` before starting the process.

Also, please [create a user and a free Scope](https://bitsrc.io) with Bit.
You can learn more about Bit in this [getting started guide](https://docs.bitsrc.io/).

1. First, let’s [install Bit](https://docs.bitsrc.io/docs/installation.html).

```bash
$ npm install bit-bin -g
```

2. Let’s [initialize Bit](https://docs.bitsrc.io/docs/initializing-bit.html) for the project.

```bash
$ cd github-graphql-template 
$ bit init
```

3. Let’s [add the components](https://docs.bitsrc.io/docs/isolating-and-tracking-components.html) to be tracked by Bit.

```bash
$ bit add src/*/*  -t src/{PARENT}/{FILE_NAME}.spec.js  # use a glob pattern to track multiple components in the same path or a single path to track a single component.
```

4. Let’s add [build](https://docs.bitsrc.io/docs/building-components.html) and [test](https://docs.bitsrc.io/docs/testing-components.html) environments. Here is an example.

```bash
$ bit import bit.envs/compilers/react -c
the following component environments were installed
- bit.envs/compilers/react@0.0.7

$ bit import bit.envs/testers/mocha -t
the following component environments were installed
- bit.envs/testers/jest@0.0.7

``` 

5. Now let’s [lock a version](https://docs.bitsrc.io/docs/versioning-tracked-components.html) and isolate the components from the project.

```bash
bit tag --all 1.0.0
```

6. Now let’s [share](https://docs.bitsrc.io/docs/organizing-components-in-scopes.html) the components to a remote [Scope](https://bitsrc.io).

```bash
$ bit export username.scopename  # Share components to this Scope
```
Note that using the `--eject` flag you can also remove an exported component from your source-code and add it as a package dependency in your project’s `package.json` file.

That’s it. You can now [install the components](https://docs.bitsrc.io/docs/installing-components-using-package-managers.html) using your favorite package manager, or use `bit import` to [bring their source code](https://docs.bitsrc.io/docs/importing-components.html) into any repository, make changes and sync them across your codebase.


