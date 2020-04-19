import app from './App'

const port = process.env.PORT || 1337

function runApp() {
  app.listen(port, (err) => {
    if (err) {
      return console.log(err)
    }
  
    return console.log(`server is listening on ${port}`)
  })  
}

// runApp()
// to build: pkg .
// pkg . --targets windows
// example: https://dev.to/jochemstoel/bundle-your-node-app-to-a-single-executable-for-windows-linux-and-osx-2c89

module.exports = function() {
  runApp()
}
