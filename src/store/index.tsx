import { configureStore } from '@reduxjs/toolkit';

import { IReducer, reducer } from './reducers';

export const store = configureStore<IReducer>({ reducer });
