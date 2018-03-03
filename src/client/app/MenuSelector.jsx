import React from 'react';
import EntreeMenu from './EntreeMenu';
import DessertFilterMenu from './DessertFilterMenu';

const MenuType = ((props) => {
  if (props.tag === 'none' && props.type !== 'dessert') {
    return <EntreeMenu tag={props.tag} type={props.type} menu={props.menu} />;
  }
  return <DessertFilterMenu tag={props.tag} type={props.type} menu={props.menu} />;
});

export default MenuType;
