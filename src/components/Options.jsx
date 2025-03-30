import styles from './Options.module.css';

function Options({ updateFeedback, resetFeedback, total }) {
    return (
         <div className={styles.container}>
        <button onClick={() => updateFeedback("good")}>Good</button>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
        {total > 0 && <button onClick={resetFeedback}>Reset</button>}
      </div>
    );
  }
  
  export default Options;