import styles from './select.module.scss';

export const SelectComponent = ({ className, placeholder }: { className: string; placeholder?: string }): JSX.Element => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('form submited');
  }

  return (
    <div className={`${className} ${styles.host}`}>
      <form onSubmit={onFormSubmit}>
        <label>
          <input list="browsers" name="browser" id="browser" className={styles.input} placeholder={placeholder} autoComplete="off" />
          <datalist id="browsers">
            <option value="Edge" />
            <option value="Firefox" />
            <option value="Chrome" />
            <option value="Opera" />
            <option value="Safari" />
          </datalist>
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}
