const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

lab.experiment('math', () => {
  lab.test('returns true when 1 + 1 equals 2', { plan: 1 }, (done) => {
    Code.expect(1 + 1).to.equal(2);
  });
});