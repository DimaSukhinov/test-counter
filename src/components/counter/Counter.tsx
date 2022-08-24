import React, {useCallback} from 'react';
import './Counter.scss';
import {Button} from "../common/button/Button";
import {useDispatch} from "react-redux";
import {decrementValueAC, incrementValueAC} from "../../store/counter-reducer";

type ComponentPropsType = {
  counter: CounterType
}

type CounterType = {
  id: string
  value: number
  minValue: number
  maxValue: number
}

export const Counter = React.memo(({counter}: ComponentPropsType) => {

  const dispatch = useDispatch()

  const IncrementValue = useCallback(() => dispatch(incrementValueAC(counter.id)), [counter.id, dispatch])
  const DecrementValue = useCallback(() => {
    if (counter.value > 0) {
      dispatch(decrementValueAC(counter.id))
    }
  }, [counter.id, counter.value, dispatch])

  return (
    <div className={'counter'}>
      <div className={'counter__block'}>
        <Button onClick={DecrementValue} isDisabled={counter.value === counter.minValue}>-</Button>
        <Button onClick={IncrementValue} isDisabled={counter.value === counter.maxValue}>+</Button>
        <span>value: {counter.value}</span>
      </div>
      <span>min: {counter.minValue} max: {counter.maxValue}</span>
    </div>
  );
})
