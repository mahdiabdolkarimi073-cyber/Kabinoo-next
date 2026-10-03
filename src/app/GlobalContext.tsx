'use client';

import React, {createContext} from 'react';

export const GlobalContext = createContext<Partial<typeof window & Record<string, unknown>>>({});

export function GymContextProvider(props: any) {
    const {children, ...other} = props;
    return (
        <GlobalContext.Provider value={other}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;