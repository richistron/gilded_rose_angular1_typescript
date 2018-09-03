import createComponent from '../app/createComponent'

export default createComponent('appComponent', [])({
  bindings: {
    msg: '@'
  },
  controller: [function (this : {msg:string})  {
    return this;
  }],
  template: `
      <div> {{ $ctrl.msg }}!! </div>
  `
}).name