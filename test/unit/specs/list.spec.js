import List from '@/components/List';
import Vue from 'vue';

describe('List.vue', () => {
  it('displays items from the list', () => {
    // build component
    const Constructor = Vue.extend(List);
    const ListComponent = new Constructor().$mount();

    expect(ListComponent.$el.textContent).to.contain('play games');
  });

  it('adds a new item to the list on click', () => {
    // build the component
    const Constructor = Vue.extend(List);
    const ListComponent = new Constructor().$mount();

    // add a new item
    ListComponent.newItem = 'moss & unicorns';

    // find the button to submit and create a clickEvent
    const button = ListComponent.$el.querySelector('button');
    const clickEvent = new window.Event('click');

    // Click it & reload the page
    button.dispatchEvent(clickEvent);
    ListComponent._watcher.run();

    // test it!
    expect(ListComponent.$el.textContent).to.contain('moss & unicorns');
    expect(ListComponent.listItems).to.contain('moss & unicorns');
  });
});
