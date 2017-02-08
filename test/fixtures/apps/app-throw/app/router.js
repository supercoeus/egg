'use strict';

module.exports = app => {
  app.get('/throw', function* () {
    this.body = 'foo';
    setTimeout(() => {
      a.b = c;
    }, 1);
  });
};
