const app = require('./app')




// app.get('/', (req, res) => res.send('Hoem page'))

// app.post('/login', (req, res) => {
//     if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
//             res.status(200).json('dang nhap thanh cong')
//     } else {
//             res.status(404).json('dang nhap khong thanh cong')
//     }
// })

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

