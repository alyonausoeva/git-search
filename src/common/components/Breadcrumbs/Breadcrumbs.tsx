import React from 'react';

import { Icon } from 'common/components/Icon';
import { block, classNames } from 'common/utils/classNames';

import { IBreadcrumbsProps, IRenderBreadcrumb } from './types';
import './Breadcrumbs.less';

const cnBreadcrumbs = block('breadcrumbs');

const renderBreadcrumb: IRenderBreadcrumb = ({ title, onClick }) => (
  <div className={cnBreadcrumbs('breadcrumb')} key={title}>
    <Icon.Arrow width="20" height="20" />
    {onClick
      ? (
        <span
          onClick={onClick}
          aria-hidden="true"
        >
          {title}
        </span>
      )
      : title}
  </div>
);

export const Breadcrumbs = ({ className, items }: IBreadcrumbsProps) => (
  <div className={classNames(className, cnBreadcrumbs())}>
    {items.map((item) => renderBreadcrumb(item))}
  </div>
);
