import { gql, useQuery } from '@apollo/client';

import { IRepository } from 'common/models/repository';

export const getAllRepositories = (value: string) => {
  const allRepositories = gql`
  query ($value: String = "is:public") { 
  search( type: REPOSITORY, query: $value, first: 100) {
    repos: edges{
      repo:node{
        ... on Repository {
          id,
          url,
          name,
          updatedAt,
          stargazerCount,
          languages(first: 100) {
          nodes {
            name
          }
          },
          owner {
            login,
            url,
            avatarUrl
          },
          description
        },
      }
    },
  }
}
`;

  const { data } = useQuery(allRepositories, { variables: { value } });

  return data?.search?.repos?.map(({ repo } : {repo: IRepository}) => repo);
};

export const getCurrentRepository = (id: string) => {
  const currentRepository = gql`
  query repository($id:  ID!){ 
    node(id: $id){
    ... on Repository {
          id,
          url,
          name,
          updatedAt,
          stargazerCount,
          languages(first: 100) {
          nodes {
            name
          }
          },
          owner {
            login,
            url,
            avatarUrl
          },
          description
    }
  }
}  
`;

  const { data } = useQuery(currentRepository, { variables: { id } });

  return data?.node;
};

export const getCurrentUserRepositories = (owner: string) => {
  const currentUserRepositories = gql`
  query Repos($owner: String!) {
    repositoryOwner(login: $owner) {
      repositories(
              first: 100
      ownerAffiliations: OWNER
      privacy: PUBLIC
      orderBy: { field: NAME, direction: ASC }
    ) {
        nodes {
          id,
          url,
          name,
          updatedAt,
          stargazerCount,
          languages(first: 100) {
          nodes {
            name
          }
          },
          owner {
            login,
            url,
            avatarUrl
          },
          description
        }
      }
    }
  }
`;

  const { data } = useQuery(currentUserRepositories, { variables: { owner } });

  return data?.repositoryOwner?.repositories?.nodes;
};
