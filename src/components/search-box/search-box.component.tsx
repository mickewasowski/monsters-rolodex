import { ChangeEventHandler, ChangeEvent } from 'react';
import './search-box.styles.css';
import React from 'react';

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  // onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; //the same as the above, different syntax
}


const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}
  />
);

export default SearchBox;
