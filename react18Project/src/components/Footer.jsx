import styles from "./footer.module.css";
export default function Footer({ count, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.footerItem}>Total Todos : {totalTodos}</span>
      <span className={styles.footerItem}>Completed Todos : {count}</span>
    </div>
  );
}
