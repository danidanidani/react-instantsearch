/* eslint-disable no-console */

import metalsmith from 'metalsmith';
import {rootPath} from './path.js';

export default function builder({
  clean = true,
  middlewares,
  destination = 'docs/',
}, cb) {
  console.time('metalsmith build');
  // default source directory is join(__dirname, 'src');
  // https://github.com/metalsmith/metalsmith#sourcepath
  metalsmith(__dirname)
    .clean(clean)
    .destination(rootPath(destination))
    .use(middlewares)
    .build(err => {
      console.timeEnd('metalsmith build');
      cb(err);
    });
}