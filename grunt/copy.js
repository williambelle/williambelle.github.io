'use strict';

module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['icons/**', 'css/**', 'index.html'],
      dest: 'www/',
      nonull: true
    }]
  }
};
