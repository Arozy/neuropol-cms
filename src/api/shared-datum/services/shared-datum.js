'use strict';

/**
 * shared-datum service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shared-datum.shared-datum');
