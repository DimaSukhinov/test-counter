import React from 'react';
import './Button.scss';

type ButtonPropsType = {
  children: React.ReactNode
  onClick: () => void
  isDisabled?: boolean
}

export const Button =  React.memo(({children, onClick, isDisabled}: ButtonPropsType) => {
  return <div className={isDisabled ? 'button disabledButton' : 'button'} onClick={isDisabled ? undefined : onClick}>
    {children}
  </div>
})
