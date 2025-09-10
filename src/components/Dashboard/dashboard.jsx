import styles from "./dashboard.module.css"

const dashboard = () => {
  return (
    <div className={styles.dashboard}>
        <div className={styles.dashboardheader}>
            <h3>Dashboard</h3>
        </div>
  <div className={styles.dashboard0}>
    <div className={styles.dashboard1}>Bank Accounts</div>
    <div className={styles.dashboard1}>Income vs Expenses</div>
    <div className={styles.dashboard1}>Expenses</div>
  </div>
</div>
  );
};

export default dashboard;