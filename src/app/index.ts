import * as angular from 'angular'
import appComponent from '../components/appComponent'
import appName from './appName';

const app =  {
  init: () => angular.module(appName, [appComponent])
}


export default app