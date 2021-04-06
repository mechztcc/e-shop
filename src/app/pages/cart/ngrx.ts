import { Product } from 'src/app/types';
import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export const add = createAction('[Add Item] Add', props<{ payload: Product }>());
export const remove = createAction('[Remove Item] Remove', props<{ payload: Product }>());

const initialState: Product = {
    name: '',
    price: 0,
    url: ''
};


const _counterReducer = createReducer(
    initialState,
    on(add, (state, { payload }) => (
        {
            ...state,
            name: payload.name,
            price: payload.price,
            url: payload.url

        })),
    on(remove, (state, { payload }) => (
        {
            ...state,
            name: '',
            price: 0,
            url: ''

        })),



    


);


export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}