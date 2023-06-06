import React, { KeyboardEventHandler, useRef, useState } from 'react';

import { block, classNames } from 'common/utils/classNames';
import { Button, ButtonSize, ButtonType } from 'common/components/Button';
import { KeyboardKey } from 'common/constants/keyCode';
import { Icon } from 'common/components/Icon';
import { useViewport } from 'common/hooks/useViewport';

import { ISearchInputProps } from './types';
import './SearchInput.less';

const cnSearchInput = block('search-input');

export const SearchInput = ({ className, placeholder, fixedValue, switchSuggestions, onSearch }: ISearchInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isMobile } = useViewport();

  const [value, setValue] = useState<string>(fixedValue || '');

  const handleChange = () => {
    const newValue = inputRef.current?.value;

    setValue(newValue || '');
  };

  const handleFocus = () => {
    if (value && switchSuggestions) {
      switchSuggestions(true);
    }
  };

  const clearInput = () => {
    inputRef.current?.focus();

    setValue('');
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }

    if (switchSuggestions) {
      switchSuggestions(false);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.key === KeyboardKey.arrowUp || evt.key === KeyboardKey.arrowDown) {
      evt.preventDefault();
    }
  };

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.key === KeyboardKey.arrowUp || evt.key === KeyboardKey.arrowDown) {
      evt.preventDefault();
    }

    if (evt.key === KeyboardKey.enter) {
      handleSearch();
    }

    if (evt.key === KeyboardKey.esc) {
      clearInput();
    }
  };

  return (
    <div className={classNames(className, cnSearchInput())}>
      <div className={cnSearchInput('field-wrapper', { 'has-value': !!value })}>
        <input
          className={cnSearchInput('field',)}
          ref={inputRef}
          value={value}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <button
          className={cnSearchInput('clear', { visible: !!value })}
          type="button"
          onClick={clearInput}
          aria-label="Очистить"
        >
          <Icon.CrossGray className={cnSearchInput('clear-icon')} />
        </button>
      </div>
      {isMobile ? (
        <Button
          className={cnSearchInput('lens')}
          type={ButtonType.invisible}
          onClick={handleSearch}
        >
          <Icon.Lens
            width={35}
            height={35}
          />
        </Button>
      ) : (
        <Button
          size={ButtonSize.l}
          onClick={handleSearch}
        >
          Найти
        </Button>
      )}
    </div>
  );
};
