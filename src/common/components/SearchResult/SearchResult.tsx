import React from 'react';
import moment from 'moment';

import { block, classNames } from 'common/utils/classNames';
import { Icon } from 'common/components/Icon';

import { ISearchResultProps } from './types';
import './SearchResult.less';

const cnSearchResult = block('search-result');

export const SearchResult = ({ className, name, url, updatedAt, stargazerCount, onNameClick }: ISearchResultProps) => (
  <div className={classNames(className, cnSearchResult())}>
    <h3
      className={classNames('link', cnSearchResult('title'))}
      onClick={onNameClick}
      aria-hidden="true"
    >
      {name}
    </h3>
    <a
      className={cnSearchResult('url')}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {url}
    </a>
    <span>
      Дата последнего коммита:
      {` ${moment(updatedAt).format('DD MMMM, HH:mm')}`}
    </span>
    <div className={cnSearchResult('rating')}>
      <Icon.Star width="8" height="8" />
      {' '}
      {stargazerCount}
    </div>
  </div>
);
