import { useRef, useState } from 'react';
import styles from './select.module.scss';

type Select = {
  className: string;
  options: string[];
  placeholder?: string;
  onSelect?: (event?: string) => void;
}

export const SelectComponent = ({ className, options, placeholder, onSelect }: Select): JSX.Element => {
  const inputEl = useRef(null);
  const ulEl = useRef(null);
  const [status, setStatus] = useState(false);
  const [search, setSearch] = useState<string[]>(options);

  const beforeFormSubmit = () => {
    const val = inputEl.current.value;
    const index = search.findIndex(item => item == val);
    (index > -1) && search.splice(index, 1);
    setSearch([inputEl.current.value, ...search].splice(0, 5));
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSelect(inputEl.current.value);
    beforeFormSubmit();
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
      // ulEl.current.classList.remove(styles.active);
      setStatus(false);
    }, 400);
  }

  const show = () => {
    setTimeout(() => {
      // ulEl.current.classList.add(styles.active);
      setStatus(true);
    }, 0);
  }

  return (
    <div className={`${className} ${styles.host}`}>
      <form onSubmit={onFormSubmit}>
        <label>
          <input className={styles.input} placeholder={placeholder} autoComplete="off" ref={inputEl} onBlur={hide} onFocus={show} />
          <ul className={`${styles.datalist} ${status ? styles.active : ''}`} ref={ulEl}>
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
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}
