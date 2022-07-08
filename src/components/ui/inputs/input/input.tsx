import React, { ChangeEventHandler } from 'react';
import s from './input.module.scss';

type Props = {
  onChange: ChangeEventHandler;
  value: string;
  label?: string;
  name: string;
};

const Input: React.FC<Props> = ({ onChange, value, name, label = '' }) => {
  return (
    <div className={s.root}>
      {label && <span>{label}</span>}
      <input type="text" value={value} onChange={onChange} name={name} />
    </div>
  );
};

export default Input;
