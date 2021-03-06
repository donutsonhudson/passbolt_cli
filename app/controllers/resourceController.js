/**
 * Resource Controller
 *
 * @copyright (c) 2016-onwards Bolt Softwares pvt. ltd.
 * @licence AGPL-3.0 http://www.gnu.org/licenses/agpl-3.0.en.html
 */
"use strict";

var AppController = require('./appController.js');

class ResourceController extends AppController {

  getName() {
    return 'resources';
  }

}

module.exports = ResourceController;