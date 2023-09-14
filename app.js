require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const indexRouter = require('./routes/index.route');
const ssr = require('./middleware/renderComponent');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.use(ssr);
app.use(morgan('dev'));
app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Quiz started');
});

// app.get('/', (req, res) => {
//   res.send('Hello, world');
// });

// app.get('/form', (req, res) => {
//   const home = React.createElement(AddForm, {
//     title: 'Addform',
//   });
//   const html = ReactDOMServer.renderToStaticMarkup(home);
//   const document = '<!DOCTYPE html>' + html;
//   res.send(document);
// });

// app.get('/buyers', async (req, res) => {
//   const buyers = await Buyer.findAll();

//   const home = React.createElement(CardList, {
//     title: 'CardList',
//     buyers,
//   });

//   const html = ReactDOMServer.renderToStaticMarkup(home);
//   const document = '<!DOCTYPE html>' + html;
//   res.send(document);
// });
