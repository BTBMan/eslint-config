import { type Component, createEffect } from 'solid-js';

console.log(createEffect);

const Comp: Component = () => {
  return (
    <div>
      <h1 style='' {...{ style: '' }}>
        Hello Solid.
      </h1>
    </div>
  );
};

const a = 'a';

export default Comp;
