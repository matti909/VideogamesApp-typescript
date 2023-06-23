import { useEffect, useRef, useState } from "react";
import style from "./Select.module.scss";

export type SelectOptions = {
  name: string;
  id: string | number;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOptions[];
  onChange: (value: SelectOptions[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
};

type SelectProps = {
  options: SelectOptions[];
} & (SingleSelectProps | MultipleSelectProps);

export const Select = ({ multiple, value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOptions(option: SelectOptions) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOpenSelected(option: SelectOptions) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={style.container}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span className={style.value}>
        {multiple
          ? value.map((v) => (
              <button
                key={v.id}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  selectOptions(v);
                }}
                className={style["option-badge"]}
              >
                {v.name}
                <span className={style["remove-btn"]}>&times;</span>
              </button>
            ))
          : value?.name}
      </span>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          clearOptions();
        }}
        className={style["clear-btn"]}
      >
        &times;
      </button>
      <div className={style.divider}></div>
      <div className={style.caret}></div>
      <ul className={`${style.options} ${isOpen ? style.show : null}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOptions(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.id}
            className={`${style.option} ${
              isOpenSelected(option) ? style.selected : ""
            }${index === highlightedIndex ? style.highlighted : ""}`}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
