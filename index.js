const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/home'))
//   .get('/aboutme', (req, res) => res.render('pages/aboutme'))
//   .get('/dictionary', (req, res) => res.render('pages/dictionary'))
//   .get('/tactics2001', (req, res) => res.render('pages/tactics2001'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

const app = express();
app.use('/', router);
app.listen(PORT);

console.log(`Running at Port ${PORT}`);

