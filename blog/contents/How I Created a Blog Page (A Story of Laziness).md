# HTML in markdown

![logo](https://github.com/DIY0R/nestjs-rabbitmq/raw/main/img/logo.png)

⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
use [`rehype-raw`](https://github.com/rehypejs/rehype-raw).
You should probably combine it with
[`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize).

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>

## Components

You can pass components to change thingsu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to changeu can pass components to change

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import MyFancyRule from './components/my-fancy-rule.js';

const markdown = `dsdsdsd
# Your markdown here
`;

ReactDOM.render(
  <Markdown
    components={{
      // Use h2s instead of h1s
      h1: 'h2',
      // Use a component instead of hrs
      hr(props) {
        const { node, ...rest } = props;
        return <MyFancyRule {...rest} />;
      },
    }}
  >
    {markdown}
  </Markdown>,
  document.querySelector('#content')
);
```

/server

```js
const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const pathContents = '/contents';
app.use(cors());
app.use(pathContents, express.static('contents'));

app.use('/titles', async (req, res) => {
  const fileList = await fs.readdir(path.join(__dirname, pathContents));
  res.json(fileList);
});
app.use('/', (_, response) => response.send('<h1>get out!</h1>'));

app.listen(process.env.PORT || 5000, () => {
  console.log('server started');
});
```

A block quote with ~strikethrough~ and a URL:

https://reactjs.org
