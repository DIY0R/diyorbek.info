# How I Created a Blog Page (A Story of Laziness)

Recently, I wondered how I could simplify my blog workflow. Instead of building a database and API, I decided to use GitHub as a storage solution for posts in Markdown format. By adding a Node.js server using Express and deploying it on Vercel, I created a simple tool for managing my blog.

### Static Server

I set up a basic server that serves Markdown files and returns a list of them:

```js
app.use(pathContents, express.static(pathContents));
app.use('/titles', async (req, res) => {
  const fileList = await fsp.readdir(path.join(__dirname, pathContents));
  res.json(fileList);
});
```

### React Component for Rendering Markdown

To display the posts, I use React with the **react-markdown** library:

```js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function BlogPost({ filename }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`https://your-vercel-app.vercel.app/${filename}.md`)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [filename]);

  return <ReactMarkdown>{content}</ReactMarkdown>;
}
```

You can find the full source code [here](https://github.com/DIY0R/diyorbek.info).
