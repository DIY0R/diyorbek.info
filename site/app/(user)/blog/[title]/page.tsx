import React from 'react';

import BlogPost from '@/components/blog/BlogPost';
const OnePost = ({ params }: { params: { title: string } }) => {
  return <BlogPost params={params} />;
};

export default OnePost;
