import { useRef, useState } from 'react';
import styles from './select.module.scss';

type Select = {
  className: string;
  options: string[];
  placeholder?: string;
  onSelect?: (event?: string) => void;
  max?: number;
  button: boolean;
}

export const SelectComponent = ({ className, options, placeholder, onSelect, max, button }: Select): JSX.Element => {
  const inputEl = useRef(null);
  const ulEl = useRef(null);
  const [status, setStatus] = useState(false);
  const [search, setSearch] = useState<string[]>(options);

  const addToList = () => {
    const val = inputEl.current.value;
    const index = search.findIndex(item => item == val);
    (index > -1) && search.splice(index, 1);
    const merge = [inputEl.current.value, ...search];
    setSearch(max ? merge.splice(0, max) : merge);
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
      setStatus(false);
    }, 400);
  }

  const show = () => {
    setTimeout(() => {
      setStatus(true);
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
          className={`${1} ${styles.datalist} ${status ? styles.active : ''}`}
          ref={ulEl}
        >
          {
            search && search.map((option, index) => (
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
