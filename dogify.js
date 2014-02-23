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
    /*
     * You can uncomment the line below to use dogify in chrome 33- console,
     * but feel the difference: http://jsperf.com/dogify
     */

    //return this.constructor.name === 'CommandLineAPI' ? window : this;
    return this;
  });
  dogifyGetter(term, [String, Number, Boolean], function () {
    return this.valueOf();
  });

});

/*
 * call dogify(), if it doesn't work in chrome console
 */
function dogify() {
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

  terms.forEach(function (term) {
    Object.defineProperty(console._commandLineAPI.constructor.prototype, term, {
      get: function () {
        return window;
      }
    });
  });
}
