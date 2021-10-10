const http = require('http');
const fs = require('fs')                                                                                                                             
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
const params = querystring.parse(url.parse(req.url).query);
const page = url.parse(req.url).pathname;

console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    if ('question' in params && 'answer' in params) { //answers
        if (params['question'] == 1) {
            if (params['answer'] == 'Winter') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Winter',
                    name: 'Fro'
                }
                res.end(JSON.stringify(objToJson));
            }else if (params['answer'] == 'Spring') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Spring',
                    name: 'Drip'
                }
                res.end(JSON.stringify(objToJson));
            }else if (params['answer'] == 'Summer') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Summer',
                    name: 'Blaze'
                }
                res.end(JSON.stringify(objToJson));
            }else if (params['answer'] == 'Fall') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Fall',
                    name: 'Drop'
                }
                res.end(JSON.stringify(objToJson));
            }
        }else if (params['question'] == 2) {
            if (params['answer'] == 'Water') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Water',
                    name: 'Slip'
                }
                res.end(JSON.stringify(objToJson));
            }else if (params['answer'] == 'Coffee') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Coffee',
                    name: 'Stank'
                }
                res.end(JSON.stringify(objToJson));
            }else if (params['answer'] == 'Tea') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Tea',
                    name: 'Kettle'
                }
                res.end(JSON.stringify(objToJson));
            }else if (params['answer'] == 'Soda/Juice') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Soda/Juice',
                    name: 'Spark'
                }
                res.end(JSON.stringify(objToJson));
            }
        }else if (params['question'] == 3) {
            if (params['answer'] == 'Stay in') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Stay in',
                    name: 'Flock'
                }
                res.end(JSON.stringify(objToJson));
            }else if (params['answer'] == 'Go out') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Go out',
                    name: 'Dash'
                }
                res.end(JSON.stringify(objToJson));
            }
        }else if (params['question'] == 4) {
            if (params['answer'] == 'Night owl') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Night owl',
                    name: 'Who'
                }
                res.end(JSON.stringify(objToJson));
            }else if (params['answer'] == 'Early bird') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Early bird',
                    name: 'Won'
                }
                res.end(JSON.stringify(objToJson));
            }
        }else if (params['question'] == 5) {
            if (params['answer'] == 'City') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'City',
                    name: 'Avenue'
                }
                res.end(JSON.stringify(objToJson));
            }else if (params['answer'] == 'Country') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    answer: 'Country',
                    name: 'Ville'
                }
                res.end(JSON.stringify(objToJson));
            }
        }
    }
    else if ('question' in params) { //questions
        if (params['question'] == 1) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                question: 'What season were you born in?',
                a: 'Winter',
                b: 'Spring',
                c: 'Summer', 
                d: 'Fall'
            }
            res.end(JSON.stringify(objToJson));
        }else if (params['question'] == 2) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                question: 'Which would you prefer to drink?',
                a: 'Water',
                b: 'Coffee',
                c: 'Tea', 
                d: 'Soda/Juice'
            }
            res.end(JSON.stringify(objToJson));
        }else if (params['question'] == 3) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                question: 'Which would you prefer to do on Friday night?',
                a: 'Stay in',
                b: 'Go out',
            }
            res.end(JSON.stringify(objToJson));
        }else if (params['question'] == 4) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                question: 'Which describes you better?',
                a: 'Night owl',
                b: 'Early bird',
            }
            res.end(JSON.stringify(objToJson));
        }else if (params['question'] == 5) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                question: 'Which do you prefer?',
                a: 'City',
                b: 'Country',
            }
            res.end(JSON.stringify(objToJson));
        }
    }
  }else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
