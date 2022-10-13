import styles from './Itens.module.scss';

interface Props {
  title: string;
  description: string;
  photo: string;
  price: number;
  id: number;
}


export default function Itens(props: Props) {
  const { id, title, description, price, photo } = props;

  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
        </div>
        <div className={styles.item__imagem}>
          <p>
            <img src={`${photo}`} alt={title} />
            {description}
          </p>
        </div>
        <div className={styles.item__valor}> R$ {price.toFixed(2)}</div>
      </div>
    </>
  );
}