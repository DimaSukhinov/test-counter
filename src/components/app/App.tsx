import React, {ChangeEvent, useCallback, useState} from 'react';
import './App.scss';
import {Counter} from "../counter/Counter";
import {Button} from "../common/button/Button";
import {useAppSelector} from "../../store/store";
import {useDispatch} from "react-redux";
import {addCounterAC} from "../../store/counter-reducer";

export const App = () => {

  const dispatch = useDispatch()
  const counters = useAppSelector(state => state.counters)

  const [maxValue, setMaxValue] = useState<number>(10)
  const [minValue, setMinValue] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)

  const onMaxValueChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => setMaxValue(+e.currentTarget.value), [])
  const onMinValueChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => setMinValue(+e.currentTarget.value), [])

  const CreateCounter = useCallback(() => {
    if(maxValue > minValue) {
      dispatch(addCounterAC(minValue, maxValue))
      setMinValue(0)
      setMaxValue(10)
      setError(false)
    } else setError(true)
  }, [dispatch, maxValue, minValue])

  return <div className={'app'}>
    <div className={'app__create'}>
      <div>
        <span>min value: </span>
        <input type="number" placeholder={'min value'} value={minValue} onChange={onMinValueChangeHandler}/>
      </div>
      <div>
        <span>max value: </span>
        <input type="number" placeholder={'max value'} value={maxValue} onChange={onMaxValueChangeHandler}/>
      </div>
      {error && <span className={'error'}>{`min value <= max value`}</span>}
      <Button onClick={CreateCounter}>add new counter</Button>
    </div>
    {counters.map(c => <Counter key={c.id} counter={c}/>)}
  </div>
}
