import React, { ChangeEventHandler, useState } from 'react';
import cn from 'classnames';
import s from './input.module.scss';

type Props = {
  onChange: ChangeEventHandler;
  value: string;
  label?: string;
  name: string;
  className?: string;
};

const Input: React.FC<Props> = ({
  onChange,
  value,
  name,
  label = '',
  className = '',
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={cn('my-20 relative', s.root, className)}>
      {/* {label && <span>{label}</span>} */}
      <fieldset
        className={cn('p-0 pl-8', s.fieldset, { [s.active]: isActive })}
      >
        <legend>{label}</legend>
        <input
          type="text"
          value={value}
          onChange={onChange}
          name={name}
          className={cn('pl-16 d-flex ai-c absolute', s.input)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </fieldset>
    </div>
  );
};

export default Input;
