import React from 'react';
import EntreeMenu from './EntreeMenu';
import DessertFilterMenu from './DessertFilterMenu';

const MenuType = ((props) => {
  // const { tag, type, menu } = props;
  console.log('MT ===> ', props.menu);
  if (props.tag === 'none' && props.type !== 'dessert') {
    // console.log(props.menu);
    // console.log(menu);
    return <EntreeMenu tag={props.tag} type={props.type} menu={props.menu} />;
  }
  return <DessertFilterMenu tag={props.tag} type={props.type} menu={props.menu} />;
});

export default MenuType;
