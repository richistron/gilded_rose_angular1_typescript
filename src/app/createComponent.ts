import * as angular from 'angular'
import appName from './appName';

interface __bindings__ {
  [index : string] : string
}

interface __options__ {
  template: string
  bindings?: __bindings__
  controller?: string[]
}


interface __createComponent__ {
  (name : string, deps : string[]) : __component__
}

interface __component__ {
  (options: __options__) : {name: string}
}

const createComponent:__createComponent__ = (name, deps) => (options) => angular.module(appName + '.' + name, deps).component(name, options)

export default createComponent