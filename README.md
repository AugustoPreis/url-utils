# url-utils

### Simple node.js url creator and parser

#### Basic usage
```
// NOTE: this project is not in npm
import { createUrl, parseUrl } from 'url-utils';

createUrl('/user/find', { orderBy:  'name', filterBy:  'minAge', filter:  35 });

parseUrl('/user/find?orderBy=name&filterBy=minAge&filter=35');
```