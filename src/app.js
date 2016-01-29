/*
  Application configuration
*/

// Styles
import 'material-design-lite/material.min.css';
import './styles/app.min.css';
import './styles/custom.css';
import 'material-design-icons/iconfont/material-icons.css';

// Material Design Scripts
import 'material-design-lite/material.min.js';

// Angular
import angular from 'angular';
import ngRoute from 'angular-route';

// Config
import config from './app.config';

angular.module('app', [ngRoute])
  .config(config);