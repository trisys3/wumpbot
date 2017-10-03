'use strict';

const next = require('postcss-cssnext');
const nano = require('cssnano');

exports.plugins = [next(), nano({autoprefixer: false})];
