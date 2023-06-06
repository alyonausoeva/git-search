import React from 'react';

import { block, classNames } from 'common/utils/classNames';

import { IPagination } from './types';
import './Pagination.less';

const cnPagination = block('pagination');

export const Pagination = ({ className, activePage, total, onClick }: IPagination) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(total / 10); i++) {
    pages.push(i);
  }

  return (
    <div className={classNames(className, cnPagination())}>
      {pages.map((page) => (
        <div
          key={page}
          className={cnPagination('page', { active: page === activePage })}
          onClick={() => onClick(page)}
          aria-hidden="true"
        >
          {page}
        </div>
      ))}
    </div>
  );
};
