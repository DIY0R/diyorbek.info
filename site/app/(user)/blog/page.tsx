'use client';
import SectionContainer from '@/components/utils/SectionContainer';
import { useEffect, useState } from 'react';
import post from '@/api/posts';
import Link from 'next/link';

const Blog = () => {
  const [titles, setTitles] = useState<string[]>([]);
  const getTitles = async () => {
    const allTitles = await post.getTitles();
    setTitles(allTitles);
  };
  useEffect(() => {
    getTitles();
  }, []);
  return (
    <SectionContainer>
      <div
        className="w-full self-center  flex flex-col gap-6"
        style={{ height: '100vh' }}
      >
        <div className="blog-container">
          {titles.length ? (
            titles.map((title, index) => (
              <Link
                key={index}
                href={`/blog/${title}.md`}
                className="blog-title"
              >
                <h2>{title}</h2>
              </Link>
            ))
          ) : (
            <span className="blog-title">
              <h2> 🌪 Loading...</h2>
            </span>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Blog;
