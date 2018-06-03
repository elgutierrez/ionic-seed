import 'angular/angular';
import 'angular-animate/angular-animate';
import 'angular-sanitize/angular-sanitize';
import 'angular-ui-router/release/angular-ui-router';
import 'ionic-angular/release/js/ionic';
import 'ionic-angular/release/js/ionic-angular';
import 'angular-mocks';

const testsContext = require.context('../src', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
