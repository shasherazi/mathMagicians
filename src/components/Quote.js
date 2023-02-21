import styles from '../styles/Quote.module.css';

const Quote = () => (
  <div className={styles.quoteDiv}>
    <h2 className={styles.quote}>
      If I could prove by logic that you would die in five minutes,
      I should be sorry you were going to die,
      but my sorrow would be very much mitigated by pleasure in the proof.
      <br />
      <br />
      - G. H. Hardy to Bertrand Russell
    </h2>
  </div>
);

export default Quote;
