// main.js
import { createTemplate, mount, useEffect } from './packages/ui-library/src';

const rootElement = document.getElementById('app');

// Render the initial template
mount(rootElement);

// Example of using useEffect
useEffect(() => {
  console.log('Effect executed');
}, []);
