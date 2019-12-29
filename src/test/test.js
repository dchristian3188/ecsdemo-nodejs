var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../server');
  });
  after(function (done) {
    server.close(done);
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('responds to /health', function testSlash(done) {
  request(server)
    .get('/health')
    .expect(200, done);
  });
  it('correctly doubles the number 3 /double?input=3',function testSlash(done){
    request(server)
    .get('/double?input=3')
    .expect(200,JSON.stringify({result: 6}),done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
