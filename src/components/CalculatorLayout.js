import Calculator from './Calculator';
import styles from '../styles/CalculatorLayout.module.css';

const CalculatorLayout = () => (
  <div className={styles.calculatorLayout}>
    <h1 className={styles.calculatorLayoutTitle}>
      Let&apos;s do some math!
    </h1>
    <Calculator className={styles.Calculator} />
  </div>

);

export default CalculatorLayout;
