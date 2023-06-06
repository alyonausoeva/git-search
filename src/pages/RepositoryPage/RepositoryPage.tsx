import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { RepositoryCard } from 'common/components/RepositoryCard';
import { block, classNames } from 'common/utils/classNames';
import { Breadcrumbs } from 'common/components/Breadcrumbs';
import { selectCurrentRepository } from 'store/selectors/selectors';
import { URLS } from 'common/constants/urls';
import { getCurrentRepository } from 'common/sources/pages';

import './RepositoryPage.less';

const cnRepositoryPage = block('repository-page');

export const RepositoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentRepository = useSelector(selectCurrentRepository) || getCurrentRepository(location.state?.id);

  const breadcrumbs = [{
    title: 'поиск',
    onClick: () => navigate(URLS.search)
  },
  {
    title: 'страница репозитория',
  }];

  return (
    <div className={classNames(cnRepositoryPage(), 'page')}>
      <Breadcrumbs
        className={cnRepositoryPage('breadcrumbs')}
        items={breadcrumbs}
      />
      {currentRepository && (
      <RepositoryCard
        name={currentRepository.name}
        url={currentRepository.url}
        stargazerCount={currentRepository.stargazerCount}
        updatedAt={currentRepository.updatedAt}
        languages={currentRepository.languages.nodes}
        owner={currentRepository.owner.login}
        avatarUrl={currentRepository.owner.avatarUrl}
        ownerUrl={currentRepository.owner.url}
        description={currentRepository.description}
      />
      )}
    </div>
  );
};
