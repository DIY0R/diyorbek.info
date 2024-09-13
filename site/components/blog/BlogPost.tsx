'use client';
import postApi from '../../api/posts';
import SectionContainer from '../utils/SectionContainer';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../styles/blog.css';
const BlogPost = ({ params }: { params: { title: string } }) => {
  const [post, setPost] = useState<string>('Loading...');
  const getTitles = async () => {
    const post = await postApi.getPost(params.title);
    setPost(post);
  };
  useEffect(() => {
    getTitles();
  }, []);
  return (
    <SectionContainer>
      <div
        className="flex flex-col gap-5 markdown"
        style={{ height: '100%', color: 'white' }}
      >
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            a(props) {
              const { children, className, node, ...rest } = props;

              return (
                <a href={rest.href} style={{ color: 'blue' }}>
                  {children}
                </a>
              );
            },
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  style={coldarkDark}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            }
          }}
        >
          {post}
        </Markdown>
      </div>
    </SectionContainer>
  );
};
export default BlogPost;
