'use strict';

/**
 * side-om service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::side-om.side-om');
