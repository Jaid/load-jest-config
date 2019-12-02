# load-jest-config


Loads Jest configs from jest.config.js or package.json#jest.

## Installation
<a href='https://npmjs.com/package/load-jest-config'><img alt='npm logo' src='https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png' height=16/></a>
```bash
npm install --save load-jest-config@^
```
<a href='https://yarnpkg.com/package/load-jest-config'><img alt='Yarn logo' src='https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png' height=24/></a>
```bash
yarn add load-jest-config@^
```


## Try it out
Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.setAttribute("src","https://unpkg.com/load-jest-config@1.0.3");
document.querySelector("head").appendChild(scriptElement);
```

The module is now loaded in a variable.

```javascript
typeof load-jest-config.default
```

## Documentation
## Functions

<dl>
<dt><a href="#default">default([options])</a> ⇒ <code><a href="#result">result</a></code> | <code>false</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#options">options</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#result">result</a> : <code>object</code></dt>
<dd></dd>
</dl>

**Kind**: global function  
**Returns**: [<code>result</code>](#result) \| <code>false</code> - Result (or `false` if no config is found)  

| Param | Type | Description |
| --- | --- | --- |
| [options] | [<code>options</code>](#options) | Options |

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [cwd] | <code>string</code> | <code>&quot;process.cwd()&quot;</code> | Directory to search in |
| [findUp] | <code>boolean</code> | <code>true</code> | If `true`, also search in parent folders |

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The absolute path where the config got loaded from |
| jestConfig | <code>object</code> | Jest config data |



## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
