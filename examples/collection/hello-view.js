import Woowahan from '../../index';
import CollectionFirst from './collection-first';
import CollectionSecond from './collection-second';

export default Woowahan.View.create('Hello', {
  template: '<h1>Hello, WoowahanJs</h1><button id="btnUpdateFirst">UPDATE</button><div id="collectionFirst"></div><button id="btnUpdateSecond">UPDATE</button><div id="collectionSecond"></div>',

  firstItems: [
    { name: 'firstItem0' },
    { name: 'firstItem1' },
    { name: 'firstItem2' },
    { name: 'firstItem3' },
    { name: 'firstItem4' }
  ],

  secondItems: [
    { name: 'secondItem0' },
    { name: 'secondItem1' },
    { name: 'secondItem2' },
    { name: 'secondItem3' },
    { name: 'secondItem4' },
  ],

  events: {
    'click #btnUpdateFirst': 'onClickUpdateFirst',
    'click #btnUpdateSecond': 'onClickUpdateSecond'
  },

  viewDidMount() {
    this.collectionFirst = this.updateView('#collectionFirst', CollectionFirst, { items: this.firstItems });
    this.collectionSecond = this.updateView('#collectionSecond', CollectionSecond, { items: this.secondItems });
  },

  onClickUpdateFirst() {
    this.firstItems = this.collectionFirst.getCollection();
    this.firstItems.push({ name: `firstItem${this.firstItems.length}` });

    this.updateView('#collectionFirst', CollectionFirst, { items: this.firstItems });
  },

  onClickUpdateSecond() {
    this.secondItems = this.collectionSecond.getCollection();
    this.secondItems.push({ name: `secondItem${this.secondItems.length}` });

    this.updateView('#collectionSecond', CollectionSecond, { items: this.secondItems });
  }
});
