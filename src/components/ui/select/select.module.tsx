import { useEffect, useRef, useState } from 'react';
import styles from './select.module.scss';

type Select = {
  className: string;
  options: string[];
  placeholder?: string;
  onSelect?: (event?: string) => void;
  max?: number;
  button?: boolean;
  add?: boolean;
}

export const SelectComponent = ({ className, options, placeholder, onSelect, max, button, add }: Select): JSX.Element => {
  const inputEl = useRef(null);
  const ulEl = useRef(null);
  const [opener, setOpenerStatus] = useState(false);

  const addToList = () => {
    if (add) {
      const val = inputEl.current.value;
      const index = options.findIndex(item => item == val);
      (index > -1) && options.splice(index, 1);
      options = [inputEl.current.value, ...options];
    }
    submit();
  }

  const submit = () => {
    event.preventDefault();
    onSelect(inputEl.current.value);
    inputEl.current.value = '';
  }

  const selectItem = (value: string) => {
    inputEl.current.value = value;
    setTimeout(() => {
      inputEl.current.blur();
    }, 0)
  }

  const hide = () => {
    setTimeout(() => {
      setOpenerStatus(false);
    }, 400);
  }

  const show = () => {
    setTimeout(() => {
      setOpenerStatus(true);
    }, 0);
  }

  const enter = (e) => {
    e.keyCode == 13 && addToList();
  }

  return (
    <div className={`${className} ${styles.host}`}>
      <label>
        <input className={styles.input} placeholder={placeholder} autoComplete="off" ref={inputEl}
          onBlur={hide} onFocus={show} onKeyDown={enter}
        />
        <ul
          className={`${1} ${styles.datalist} ${opener ? styles.active : ''}`}
          ref={ulEl}
        >
          {
            options && (max ? options.slice(0, max) : options).map((option, index) => (
              <li
                key={index}
                className={styles.option}
                onClick={() => selectItem(option)}
              >
                {option}
              </li>
            ),
            )
          }
        </ul>
      </label>
      <input type="submit" value="Search" hidden={!button} onClick={submit} />
    </div>
  )
}
