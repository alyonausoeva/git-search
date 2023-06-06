import React from 'react';

import { block, classNames } from 'common/utils/classNames';

import { ISpinner } from './types';
import './Spinner.less';

const cnSpinner = block('spinner');

export const Spinner = ({ className }: ISpinner) => (
  <div className={classNames(className, cnSpinner())}>
    <div className={cnSpinner('wrapper')}>
      <div className={cnSpinner('view')} />
      <div className={cnSpinner('view')} />
      <div className={cnSpinner('view')} />
    </div>
  </div>
);
