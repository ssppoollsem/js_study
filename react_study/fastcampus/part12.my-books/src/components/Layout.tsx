import styles from './Layout.module.css';

const Layout: React.FC = ({ children }: { children: React.ReactDOM }) => <div className={styles.layout}>{children}</div>;

export default Layout;
