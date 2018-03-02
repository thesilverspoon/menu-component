import React from 'react';
import get from '../ajaxHelper';

class MenuView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restId: 90976,
      menuType: 'lunch',
      tag: 'vegan',
    };
  }
  componentDidMount() {
    this.fetch();
  }
  fetch() {
    const { restId, menuType, tag } = this.state;
    get(restId, menuType, tag);
  }
  render() {
    return <div>Hello from React!</div>;
  }
}

export default MenuView;
