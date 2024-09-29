import React, { Fragment } from 'react';
import Button from './Button';

export default function AnecdoteForm() {
  return (
    <Fragment>
      <form>
        <input value="content" />
        <Button text="create" />
      </form>
    </Fragment>
  );
}
