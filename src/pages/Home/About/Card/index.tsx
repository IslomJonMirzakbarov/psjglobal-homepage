import { motion } from "framer-motion";

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

  const Icon = icon;
  return (
    <motion.div whileHover={{ y: -10 }} className={styles.Card} id={id}>
      <p className={styles.Title}>{title}</p>
      <Icon className={styles.Image} />
      <p className={styles.Description}>{description}</p>
    </motion.div>
  );
};

export default Card;
