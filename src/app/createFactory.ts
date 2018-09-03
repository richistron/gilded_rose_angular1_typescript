import * as angular from 'angular'
import appName from "./appName";

interface __createFactory__ {
  (name: string, deps: string[]) : __angular_factory__
}

interface __angular_factory__ {
  (options: (string|Function)[]) : {name:string}
}

const createFactory:__createFactory__ = (name, deps) => (options) => angular.module(appName + '.' + name, deps).factory(name, options)

export default createFactory;