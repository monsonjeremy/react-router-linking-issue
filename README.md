# Steps To Reproduce

First run the app to see that it works without linking
```sh
npm install
npm start
```

go to `localhost:3000` and see the app rendered

Now link to the component library and see that it will not work

```sh
cd component-lib
npm install
npm run build
npm link
cd ..
npm link jeremy-test-lib
npm start
```

Now when navigating to `localhost:3000` there will be an invariant error

`Error: Invariant failed: You should not use <Link> outside a <Router>`
