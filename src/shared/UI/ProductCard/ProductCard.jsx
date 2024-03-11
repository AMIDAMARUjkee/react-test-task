import styles from './ProductCard.module.scss';

export const ProductCard = ({ item }) => {
  return (
    <div key={item.id} className={styles.product__card}>
      <h3 className={styles.product__card_name}>{item.product}</h3>
      {item.brand !== null && <p className={styles.product__card_brand}>{item.brand}</p>}
      <p className={styles.product__card_price}>$ {item.price}</p>
    </div>
  );
};
