'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';

const allProjectsInfo = [
  {
    id: '1',
    title: '@diy0r/nestjs-rabbitmq',
    des: 'Advanced RabbitMQ module for building NestJS microservices 🐇',
    categories: ['Nest.js', 'RabbitMQ'],
    repo: 'https://github.com/DIY0R/nestjs-rabbitmq',
    link: 'https://npmjs.com/package/@diy0r/nestjs-rabbitmq'
  },
  {
    id: '2',
    title: 'file-graph',
    des: 'Library for storing graphs in files and making queries to them.🔗',
    categories: ['Node.js', 'Graph theory'],
    repo: 'https://github.com/DIY0R/file-graph',
    link: 'https://npmjs.com/package/file-graph'
  },
  {
    id: '3',
    title: 'kucheza',
    des: `Messaging via terminal 🗯.
      TCP is used as the protocol. 
     Used in the /server clean architecture`,
    categories: ['Node.js', 'TCP', ' Typescript'],
    repo: 'https://github.com/DIY0R/kucheza',
    link: 'https://github.com/DIY0R/kucheza'
  },
  {
    id: '4',
    title: 'tacca 🌺',
    des: 'SSR in Nest.js solves the problems that arise during the development of such websites',
    categories: ['Nest.js', 'SSR'],

    repo: 'https://github.com/DIY0R/tacca',
    link: 'https://github.com/DIY0R/tacca'
  }
];

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch = allProjectsInfo.filter((project) =>
    project.categories.some((category) =>
      category.includes(projectSearch.toLowerCase())
    )
  );

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch.map(
          ({ id, title, des, categories: categorys, repo, link }) => (
            <CardProject
              key={id}
              title={title}
              des={des}
              categorys={categorys}
              repo={repo}
              link={link}
            />
          )
        )}
      </article>
    </>
  );
};

export default SearchAllProjects;
