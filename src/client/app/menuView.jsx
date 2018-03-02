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
    return (
      <section className="menuViewBox">
        <div className="title">
          <h2>Menu</h2>
        </div>
        <div className="menuNav">
          <button className="lunchBtn">Lunch</button>
          <button className="dinnerBtn">Dinner</button>
          <button className="dessertBtn">Dessert</button>
          <select className="filterBox">
            <option value="gluten-free">gluten-free</option>
            <option value="vegan">vegan</option>
            <option value="vegetarian">vegetarian</option>r
          </select>
        </div>
      </section>);
  }
}

export default MenuView;
