import styles from './title.module.css';

const Title = ({label}) => (
    <h1 className={styles.title}>{label}</h1>
);

export default Title;
