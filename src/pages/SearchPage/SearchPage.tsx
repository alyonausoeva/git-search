import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SearchInput } from 'common/components/SearchInput';
import { SearchResult } from 'common/components/SearchResult';
import { block, classNames } from 'common/utils/classNames';
import { getAllRepositories, getCurrentUserRepositories } from 'common/sources/pages';
import { URLS } from 'common/constants/urls';
import { IRepository } from 'common/models/repository';
import { getActionCreators } from 'store/actions';
import { Pagination } from 'common/components/Pagination/Pagination';
import { Spinner } from 'common/components/Spinner';
import { getNewCurrentRepositories } from 'common/utils/data';
import { NO_RESULTS_TEXT, PLACEHOLDER } from 'common/constants/text';
import { CURRENT_USER } from 'common/constants/user';

import { IHandlePagination, IOnRepositoryNameClick, IOnSearch, IUpdateCurrentSearchResults } from './types';
import './SearchPage.less';

const cnSearchPage = block('search-page');

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const actionCreators = getActionCreators();

  const [currentSearchResults, setCurrentSearchResults] = useState([]);
  const [value, setValue] = useState(location.state?.value);
  const [activePage, setActivePage] = useState(1);

  const allSearchResults = value
    ? getAllRepositories(value) : getCurrentUserRepositories(CURRENT_USER);

  if (allSearchResults && !currentSearchResults?.length) {
    setCurrentSearchResults(allSearchResults?.slice(0, 10));
  }

  const updateCurrentSearchResults: IUpdateCurrentSearchResults = (page) => {
    const newCurrentSearchResults = allSearchResults && getNewCurrentRepositories(allSearchResults, page);

    setCurrentSearchResults(newCurrentSearchResults);
  };

  const handlePagination: IHandlePagination = (page) => {
    updateCurrentSearchResults(page);

    setActivePage(page);
  };

  const onRepositoryNameClick: IOnRepositoryNameClick = (repository) => {
    actionCreators.setCurrentRepository(repository);

    navigate(URLS.repositoryPage, { state: { id: repository.id } });
  };

  const onSearch: IOnSearch = (q) => {
    setValue(q);

    navigate(URLS.search, { state: { value: q } });
  };

  useEffect(() => {
    if (value) {
      updateCurrentSearchResults(1);
    }
  }, [value]);

  const Results = allSearchResults?.length
    ? currentSearchResults?.map((repositoryInfo: IRepository) => (
      <SearchResult
        key={repositoryInfo.id}
        name={repositoryInfo.name}
        url={repositoryInfo.url}
        updatedAt={repositoryInfo.updatedAt}
        stargazerCount={repositoryInfo.stargazerCount}
        onNameClick={() => onRepositoryNameClick(repositoryInfo)}
      />
    ))
    : NO_RESULTS_TEXT;

  return (
    <div className={classNames(cnSearchPage(), 'page')}>
      <SearchInput
        className={cnSearchPage('input')}
        onSearch={onSearch}
        placeholder={PLACEHOLDER}
        fixedValue={value}
      />
      {!currentSearchResults?.length
        ? (<Spinner className={cnSearchPage('spinner')} />)
        : (
          <div className={cnSearchPage('results')}>
            {Results}
          </div>
        )}
      <Pagination
        activePage={activePage}
        total={allSearchResults?.length}
        onClick={handlePagination}
      />
    </div>
  );
};
