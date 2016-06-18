import Template from './user.hbs';
import { ListViewRow } from '../../../../';

export default ListViewRow.extend({
  namespace: 'View:Users:User',
  tagName: 'tr',
  template: Template,

  initialize(data) {
    this.super();
    this.model = data;
    this.render();
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  onSelectedRow(event, trigger) {
    trigger({ id: this.model.get('id') });
  }
});