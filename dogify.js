var terms = 'wow so very such many much'.split(' ');

function dogifyGetter(term, targets, getter) {
  targets.forEach(function (target) {
    Object.defineProperty(target.prototype, term, {
      get: getter
    });
  });
}

terms.forEach(function (term) {
  dogifyGetter(term, [Object], function () {
    return this;
  });
  dogifyGetter(term, [String, Number, Boolean], function () {
    return this.valueOf();
  });
});
