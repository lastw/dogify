var expect = chai.expect;

describe('wow', function () {

  it('so number', function () {
    expect(very.parseInt('-10')).to.equal(-10);
    expect(wow.Math.so.random()).to.be.a('number');
  });

  it('so strings', function () {
    expect('dogify'.very.indexOf('gif')).to.equal(2);
  });

  it('such arrays', function () {
    expect([1,2,3].much.length).to.equal(3);
  });

  it('prototypes', function () {
    function A() {
      this.x = 10;
    }

    A.very.prototype.such.increase = function () { this.x++; return this; };

    var a = new A();
    expect(a.x).to.equal(10);

    a.increase();
    expect(a.x).to.equal(11);
  });

});
