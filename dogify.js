var terms = 'wow so very such many much'.split(' ');

terms.forEach(function (term) {
  [Object, Array, Number, String].forEach(function (target) {
    Object.defineProperty(target.prototype, term, {
      get: function () {
        /*
         * You can uncomment the line below
         * to use dogify in chrome console without calling dogify().
         */

        //return this.constructor.name === 'CommandLineAPI' ? window : this;
        return this;
      }
    });
  });
});

function dogify() {
  terms.forEach(function (term) {
    Object.defineProperty(console._commandLineAPI.constructor.prototype, term, {
      get: function () {
        return window;
      }
    });
  });
  var rgb = [0, 0, 0].map(function () {
    var val = Math.floor(Math.random() * 256);
    return {
      c: val,
      b: 255-val
    };
  });
  console.log(
    '%c such dogify, very useful ',
    'font: bold italic 18px Comic Sans; color: rgb(' +
      [rgb[0].c, rgb[1].c, rgb[2].c].join(',') +
      '); background: rgb(' +
      [rgb[0].b, rgb[1].b, rgb[2].b].join(',') + ')'
  );
}
