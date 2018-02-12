# github-graphql-template
A step by step guide to create bit scope similar to https://bitsrc.io/giladshoham/github-graphql

This project is a template project aimed to guide you in the process of creating new bit components which you can easily require and modify from other projects.

The full steps can be found here: 

# Generate GitHub access token
To run this project you will have to generate a github token to access GitHub API.  
Read here: [creating-a-personal-access-token-for-the-command-line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
# Running the project
Copy the generated token into `./src/App.js` instead of the 'YOUR TOEKN HERE' string  

```bash
npm i
npm start
```

TODO: remove this once we publish the post
# Example workflow
This project is based on simple create react app.
Make sure to run `npm install` before starting the process.
In order to be able to install those components from other projects and install them using npm / yarn, you will have to create a user in bitsrc.io and then create scope.  
read here how to do it: TODO: link to docs
TODO: add picture of the src files tree

```bash
# init new bit scope
bit init
# adding compiler to make sure we can compile our code from any project
bit import bit.envs/compilers/react -c
# adding mocha as tester enviorment so we can run tests from any project (and get CI automatically)
bit import bit.envs/testers/mocha -t
# tracking all components by bit
bit add src/*/*  -t src/{PARENT}/{FILE_NAME}.spec.js
# see which component we are tracking
bit status
# lock a version for all components
bit tag --all 1.0.0
# see the tagged components waiting to be export
bit status
# export the components to your own scope
bit export [USERNAME.SCOPENAME]
```

Now you can create a new react app and install your component using npm.
If you want you can easily just import a component, change it from the other project and re-export it to your remote scope again.