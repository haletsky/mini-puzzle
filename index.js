const { resolve } = require('path')
const app = require('express')()

app.use((req, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')))

app.listen(8000, (e) => {
  if (e) return console.error(e)
  else return console.log('Server started.')
})
