# Turndown SSML
A [Turndown](https://github.com/domchristie/turndown) plugin to convert [SSML](https://en.wikipedia.org/wiki/Speech_Synthesis_Markup_Language) into markdown files, useful for bots that utilize both voice and text chat

## Installation

NPM
```bash
    npm i --save turndown-ssml
```

Yarn
```bash
    yarn add turndown-ssml
```

## Usage
Node
```js
    const turndownSsmlPlugin = require('turndown-ssml');
    turndownService.use(turndownSsmlPlugin.ssml);
```

ES6+
```js
    import turndownSsmlPlugin from 'turndown-ssml';
    turndownService.use(turndownSsmlPlugin.ssml);
```

## Tag support
- *speak*, Replaced with nothing
- *s*, Adds a new line before and after content
- *break*, Depending on strength attribute replaces with nothing, a comma, or ellipsis. [See here](https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html#break)

If there is a tag not yet supported it just means we haven't got around to adding an implementation yet. Contributions and maintainers welcome.
