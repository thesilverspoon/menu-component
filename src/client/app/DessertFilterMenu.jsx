import React from 'react';
import MenuItem from './MenuItem';
import styles from './styles/DessertFilterStyles.css';

const DessertFilterMenu = (props) => {
  const dessertHeader = 'Dolce';
  const filterHeader = `${props.type} – ${[props.tag]}`;

  const header = props.tag === 'none' ? dessertHeader : filterHeader;
  if (props.menu.length === 0) {
    return (
      <div />
    );
  }
  return (
    <div className={styles.itemBox}>
      <div className={styles.header}>{header}</div>
      {
        props.menu.map(data => <MenuItem item={data} />)
      }
    </div>
  );
};

export default DessertFilterMenu;