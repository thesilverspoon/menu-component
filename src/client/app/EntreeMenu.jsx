import React from 'react';
import MenuItem from './MenuItem';
import styles from './styles/EntreeMenuStyles.css';

const EntreeMenu = (props) => {
  const lunchHeaders = ['Aperitivi', 'Antipasti', 'Primi', 'Secondi'];
  const dinnerHeaders = ['Antipasti', 'Primi', 'Paste', 'secondi'];
  const items = [
    props.menu.slice(0, 6),
    props.menu.slice(6, 12),
    props.menu.slice(12, 16),
    props.menu.slice(16, 20),
  ];
    // console.log(this.state.items[0][0]);
  const headers = props.type === 'lunch' ? lunchHeaders : dinnerHeaders;
  if (props.menu.length === 0) {
    return (
      <div></div>
    );
  }
  return (
    <section>
      <section className={styles.itemList}>
        <section className={styles.itemBox}>
          <div className={styles.header}>{headers[0]}</div>
          {
            items[0].map(data => <MenuItem item={data} />)
          }
        </section>
        <div>
          <div className={`${styles.header} ${styles.pad}`}>{headers[1]}</div>
          {
            items[1].map(data => <MenuItem item={data} />)
          }
        </div>
        <div>
          <div className={`${styles.header} ${styles.pad}`}>{headers[2]}</div>
          {
            items[2].map(data => <MenuItem item={data} />)
          }
        </div>
        <div>
          <div className={`${styles.header} ${styles.pad}`}>{headers[3]}</div>
          {
            items[3].map(data => <MenuItem item={data} />)
          }
        </div>
      </section>
    </section>
  );
};

export default EntreeMenu;
