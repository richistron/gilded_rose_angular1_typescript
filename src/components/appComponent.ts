import createComponent from '../app/createComponent'
import gildedRose, {Ifactory, item} from '../factories/gildedRose'

export default createComponent('appComponent', [gildedRose])({
  bindings: {
    msg: '@'
  },
  controller: ['gildedRoseFactory', function (this : {handleClick: Function, msg:string, items: item[]}, gildedRose : Ifactory)  {
    this.items = gildedRose.getItems()
    this.handleClick = () => gildedRose.updateItems()
    return this;
  }],
  template: `
    <div> {{ $ctrl.msg }}!! </div>
    <div ng-repeat="item in $ctrl.items">
      <p> {{ item }} </p>
    </div>
    <button ng-click="$ctrl.handleClick()"> Update </button>
    `
}).name