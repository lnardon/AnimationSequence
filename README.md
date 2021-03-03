# Animation Sequence

Package to apply a css animation to a group of elements with delay

[![NPM](https://img.shields.io/npm/v/animationsequence.svg)](https://www.npmjs.com/package/animationsequence) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install animationsequence
```

## Usage

```ts
import useOnScreen from "reactanimationonscreen";

useEffect(() => {
  const sections = useOnScreen(targetClassNames: string[], animationClassNames: string[]);
}, []);
```

## Example

```jsx
import useOnScreen from "reactanimationonscreen";

useEffect(() => {
  const sections = useOnScreen(
    ["subtitle", "paragraph"],
    ["subtitleAnimation", "paragraphAnimation"]
  );
}, []);
```
