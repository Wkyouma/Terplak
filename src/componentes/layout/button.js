import styles from './button.module.css';

function Button(props) {
  return (<>
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button></>
  );
}

export default Button;
