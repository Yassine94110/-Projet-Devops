const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;

const app = express();

// Ici, vous devriez importer ou définir votre routeur/app Express
// Par exemple :
app.get('/', (req, res) => {
  res.send('Hello');
});

describe('GET /', function() {
  it('responds with Hello', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.text).to.equal('Hello');
        done();
      });
  });
});
