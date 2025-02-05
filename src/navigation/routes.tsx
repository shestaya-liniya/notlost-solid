import type { Component } from 'solid-js';

interface Route {
  path: string;
  Component: Component;
  title?: string;
  Icon?: Component;
}

const Hello: Component = () => {
  return <div>Hello</div>;
};

export const routes: Route[] = [
  { path: '/', Component: Hello },
  { path: '/try', Component: Hello },
  { path: '/folders', Component: Hello },
];
