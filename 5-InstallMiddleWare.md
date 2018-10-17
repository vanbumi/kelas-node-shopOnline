#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online

### #5 Install Package & Middleware

### Install body-parser

    npm install --save body-parser

#### Setup body-parser

Googling "github body parser" :

**Require pada file app.js**

    var bodyParser = require('body-parser');

**Setup body parser middleware** :

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

### Install Express Session

    npm install --save express-session

#### Setup Express Session

Googling "github express session".

**Require pada file app.js**

    var session = require('express-session')

**Setup session middleware**

    app.use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true }
    }));

### Install Express Validator

    npm install --save express-validator

#### Setup Express Session

Googling "github express validator".

**Require pada file app.js**

    var expressValidator = require('express-validator');

**Setup express validator middleware**

    app.use(expressValidator({
        errorFormatter: function (param, msg, value) {
            var namespace = param.split('.')
                    , root = namespace.shift()
                    , formParam = root;

            while (namespace.length) {
                formParam += '[' + namespace.shift() + ']';
            }
            return {
                param: formParam,
                msg: msg,
                value: value
            };
        }
    }));

### Install Express Messages

#### Setup Express Session

Googling "github express messages".

    npm install --save express-messages

Install **Connect flash** juga.

    npm install connect-flash    

**Require pada file app.js**

    ...

**Setup express Messages middleware**

    app.use(require('connect-flash')());
    app.use(function (req, res, next) {
      res.locals.messages = require('express-messages')(req, res);
      next();
    });

#### Create Custom Template

Buat file baru beri nama **"messages.ejs"** dan paste kan template dari github pada file ini:

    <div id="messages">
      <% Object.keys(messages).forEach(function (type) { %>
        <ul class="<%= type %>">
        <% messages[type].forEach(function (message) { %>
          <li><%= message %></li>
        <% }) %>
        </ul>
      <% }) %>
    </div>

Rubah ul menjadi div, kemudian refactor sedikit:

    <% Object.keys(messages).forEach(function (type) { %>
      <div class="alert alert-<%= type %>">
        <% messages[type].forEach(function (message) { %>
          <%= message %>
        <% }) %>
      </div>
    <% }) %>
   
Tambahkan "Call the message template" pada file **header.ejs** :

    <div class="container">
      <%- messages('messages', locals) %>

dan **admin header** :

    <div class="container">
      <%- messages('messages', locals) %>






























---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.