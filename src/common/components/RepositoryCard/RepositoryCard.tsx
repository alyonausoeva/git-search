import React from 'react';
import moment from 'moment';

import { block, classNames } from 'common/utils/classNames';
import { Icon } from 'common/components/Icon';
import { Button, ButtonSize, ButtonStyle, ButtonType } from 'common/components/Button';
import { ILanguage } from 'common/models/repository';

import { IRepositoryCardProps } from './types';
import './RepositoryCard.less';

const cnRepositoryCard = block('repository-card');

export const RepositoryCard = ({ className, name, url, avatarUrl, stargazerCount, updatedAt, languages, owner, ownerUrl, description }: IRepositoryCardProps) => {
  const programmingLanguages = languages.length
            && `Используемые языки: ${languages.map((language: ILanguage) => ` ${language.name}`)}`;

  return (
    <div className={classNames(className, cnRepositoryCard())}>
      <h1 className={cnRepositoryCard('title')}>{name}</h1>
      <div className={cnRepositoryCard('header')}>
        <div>
          <div className={cnRepositoryCard('img')}>
            {avatarUrl
              ? (
                <img
                  src={avatarUrl}
                  alt="repository owner"
                />
              ) : (
                <Icon.RepositoryOwner
                  width={200}
                  height={200}
                />
              )}
          </div>
          <Button
            className={cnRepositoryCard('button')}
            type={ButtonType.link}
            size={ButtonSize.l}
            style={ButtonStyle.secondary}
            href={url}
          >
            git-hub
          </Button>
        </div>
        <div className={cnRepositoryCard('info')}>
          <div>
            Владелец:
            <a
              className="link"
              href={ownerUrl}
              target="_blank"
              rel="noreferrer"
            >
              {` ${owner}`}
            </a>
          </div>
          <div>
            {updatedAt && `Последний коммит: ${moment(updatedAt).format('DD MMMM, HH:mm')}`}
          </div>
          <div>
            {programmingLanguages}
          </div>
          <div className={cnRepositoryCard('stargazer-count')}>
            <Icon.Star width="8" height="8" />
            {` ${stargazerCount}`}
          </div>
        </div>
      </div>
      <div className={cnRepositoryCard('description')}>
        <h4>Описание</h4>
        <p>
          {description || 'Владелец репозитория не оставил описания'}
        </p>
      </div>
    </div>
  );
};
