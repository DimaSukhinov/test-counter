import {v1} from "uuid";

const initialState: CounterType[] = [];

export const counterReducer = (state: CounterType[] = initialState, action: ActionsType): CounterType[] => {
  switch (action.type) {
    case 'ADD-COUNTER':
      return [...state, {id: v1(), value: action.minValue, minValue: action.minValue, maxValue: action.maxValue}]
    case 'INCREMENT-VALUE':
      return state.map(c => c.id === action.id ? {...c, value: c.value + 1} : c)
    case "DECREMENT-VALUE":
      return state.map(c => c.id === action.id ? {...c, value: c.value - 1} : c)
    default:
      return state;
  }
};

export const addCounterAC = (minValue: number, maxValue: number) => {
  return {type: 'ADD-COUNTER', minValue, maxValue} as const;
};
export const incrementValueAC = (id: string) => {
  return {type: 'INCREMENT-VALUE', id} as const;
};
export const decrementValueAC = (id: string) => {
  return {type: 'DECREMENT-VALUE', id} as const;
};

type ActionsType =
  ReturnType<typeof addCounterAC>
  | ReturnType<typeof incrementValueAC>
  | ReturnType<typeof decrementValueAC>

export type CounterType = {
  id: string
  value: number
  minValue: number
  maxValue: number
}