import React from "react";
import styles from "./Card.module.scss";
interface Card {
  card: {
    id: any;
    title: any;
    description: any;
    icon: any;
  };
}
const Card = ({ card }: Card) => {
  const { id, title, description, icon } = card;
  console.log(icon);
  const Icon = icon;
  return (
    <div className={styles.Card} id={id}>
      <p className={styles.Title}>{title}</p>
      <Icon className={styles.Image} />
      {/* <div className={styles.Description}> */}
      <p className={styles.Description}>{description}</p>
      {/* </div> */}
    </div>
  );
};

export default Card;
