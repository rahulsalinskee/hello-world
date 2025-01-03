The `useEffect` Hook in React is a powerful tool for handling side effects in your components. Side effects can include tasks like fetching data, directly updating the DOM, and setting up timers. Here's a quick overview of how `useEffect` works:

### Basic Syntax
```javascript
useEffect(() => {
  // Your side effect code here
}, [dependencies]);
```
- The first argument is a function where you write your side effect code.
- The second argument is an optional array of dependencies. The effect will only re-run if one of these dependencies changes.

### Examples

1. **Run on Every Render**
```javascript
useEffect(() => {
  console.log('This runs on every render');
});
```

2. **Run Only Once (on Mount)**
```javascript
useEffect(() => {
  console.log('This runs only on the first render');
}, []);
```

3. **Run When Dependencies Change**
```javascript
useEffect(() => {
  console.log('This runs when count changes');
}, [count]);
```

### Cleanup Function
If your effect creates resources that need to be cleaned up, you can return a cleanup function from `useEffect`:
```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    console.log('This runs after 1 second');
  }, 1000);

  return () => clearTimeout(timer); // Cleanup function
}, []);
```

### Practical Example
Here's a simple example of a counter that updates every second:
```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return <h1>Count: {count}</h1>;
}

export default Timer;
```

This example sets up a timer that increments the count every second and cleans up the timer when the component unmounts