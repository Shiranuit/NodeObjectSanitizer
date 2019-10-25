# NodeObjectSanitizer
Just a library to sanitize object in node.

```js
const f={}
// {}
index = 'constructor'
f[index]
// [Function: Object]
```

Could lead to some vulnerability if the index can be controlled by user input.

Easy fix:
```js
const sanitizeObject = require('ObjectSanitizer')
const f=sanitizeObject({})
// [Object: null prototype] {}
f['constructor']
// undefined
```

## THIS IS JUST FOR TROLLING PURPOSE
