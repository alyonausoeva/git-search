import React, { KeyboardEventHandler, useRef, useState } from 'react';

import { block, classNames } from 'common/utils/classNames';
import { Button, ButtonSize, ButtonType } from 'common/components/Button';
import { KeyboardKey } from 'common/constants/keyCode';
import { Icon } from 'common/components/Icon';
import { useViewport } from 'common/hooks/useViewport';

import { ISearchInputProps } from './types';
import './SearchInput.less';

const cnSearchInput = block('search-input');

export const SearchInput = ({ className, placeholder, fixedValue, onSearch }: ISearchInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isMobile } = useViewport();

  const [value, setValue] = useState<string>(fixedValue || '');

  const handleChange = () => {
    const newValue = inputRef.current?.value;

    setValue(newValue || '');
  };

  const clearInput = () => {
    inputRef.current?.focus();

    setValue('');
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (evt) => {
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
          onKeyUp={handleKeyUp}
          onChange={handleChange}
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
