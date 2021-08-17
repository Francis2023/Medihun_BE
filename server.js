const app = require('./api/api.js');
const admin = require('firebase-admin');

const PORT = process.env.PORT || 8000

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`)
// });

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server"});

// });

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});
  
const db = admin.firestore();
app.timeout = 60 * 10 * 1000;