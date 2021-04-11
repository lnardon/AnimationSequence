# Animation Sequence

An npm module to apply animation with delay to a group of elements

[![NPM](https://img.shields.io/npm/v/animationsequence.svg)](https://www.npmjs.com/package/animationsequence) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install animationsequence
```

## Usage

```ts
import setSequence from "animationsequence";

setSequence(classNameToTrack : string, keyframesName : string, duration: number, delay : number)
```

## Example

```js
import setSequence from "animationsequence";

setSequence("userCard", "slideUp", 1000, 500);
```
