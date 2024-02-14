// packages/ui-library/src/index.js
import { init } from 'snabbdom/build/package/init';
import { h } from 'snabbdom/build/package/h';

// Initialize Snabbdom
const patch = init([]);

// UI Library State
let state = { count: 0 };
let listeners = [];

// Template function
export function createTemplate(state, props) {
  return h('div', [
    h('h1', `Count: ${state.count}`),
    h('button', { on: { click: () => handleClick() } }, 'Add'),
  ]);
}

// Update state function
export function updateState(newState) {
  state = { ...state, ...newState };
  listeners.forEach((listener) => listener());
}

// Mount function
export function mount(rootElement) {
  const vnode = createTemplate(state, {});
  patch(rootElement, vnode);

  // Execute lifecycle event - component mounted
  console.log('Component mounted');
}

// Lifecycle event - useEffect equivalent
export function useEffect(callback, dependencies) {
  listeners.push(callback);

  // Cleanup function
  return () => {
    const index = listeners.indexOf(callback);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  };
}

// Handle button click
function handleClick() {
  updateState({ count: state.count + 1 });

  // Execute lifecycle event - state changed
  console.log('State changed:', state);
}
