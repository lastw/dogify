var terms = 'wow so very such many'.split(' ');

terms.forEach(function (term) {
  [Object, Array, Number, String].forEach(function (target) {
    Object.defineProperty(target.prototype, term, {
      get: function () {
        return this;
      }
    });
  });
});
