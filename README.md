# Have your cake and eat it too

#### create-react-app access to webpack configurations without ejecting

I have used create-react-app and a few other build tools to mostly avoid webpack configurations in the past. Usually this is ideal, however there are cases when you want to configure & do not want to permanently eject.

I wish to demonstrate mastery of this potential tradeoff and what better way than getting the benefits, without most of the flaws, with an example.

Instead of ejecting create-react-app I learned about a new way to access the webpack.config.js It requires a bit of setup, but it is worth it.

- Starting with forking the original facebook repo

  `git clone git@github.com:facebook/create-react-app.git`

- Then clone a local copy

  `git clone git@github.com:jasonleonhard/create-react-app.git`

- Setup an upstream to facebooks repo

  `git remote add upstream git@github.com:facebook/create-react-app.git`

- Install required node_modules

  `cd packages/react-scripts` and `npm i styled-components babel-plugin-styled-components`

- This forked copy will have access to the webpack.config.js

- Or webpack.config.dev.js and webpack.config.prod.js

- Where we add a line for a babel-plugin-styled-components
  under the section about Process application JS with Babel and the line

  `presets: [require.resolve('babel-preset-react-app')],`

- Add the plugin

  `plugins: [require.resolve('babel-plugin-styled-components')],`

- Which previously we would have needed to eject to access.

- The new trade off is the need to `git fetch upstream` and `git rebase upstream/master`

- We then update package.json to reflect the name of my npm account

- Navigate back to our project root and

- And `npm link ../create-react-app/packages/react-scripts`

- Verify you have correctly linked

  `npx link-status -s -p`

    npx: installed 2 in 2.071s

	✔ @jasonleonhard/react-scripts
	  ╚═══ ../../../../../../.nvm/versions/node/v11.0.0/lib/node_modules/@jasonleonhard/react-scripts

- Create an npm account and login

  `npm login`

    Username:

    Password:

    Email:

    Logged in as .... on https://registry.npmjs.org/.

- Back in /packages/react-scripts

- `npm publish --access public`

- And are good to go. Now you can use those modifications when creating a new create-react-app.

## Create a new app/repo using the npm repo we created above

- Choose a name for your new app, I will call mine not-ejected-webpack-config-demo
in this case we will avoid installing create-react-app using npx

  `npx create-react-app not-ejected-webpack-config-demo --scripts-version @jasonleonhard/react-scripts`

- cd into your new apps name

  `npm start`

Find more in the create-react-app docs and I hope you enjoyed!

Jason
