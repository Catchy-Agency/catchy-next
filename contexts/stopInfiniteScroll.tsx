// StopInfiniteScrollContext.tsx

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface StopInfiniteScrollContextType {
  stopInfiniteScroll: boolean;
  setStopInfiniteScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StopInfiniteScrollContext = createContext<
  StopInfiniteScrollContextType | undefined
>(undefined);

export const useStopInfiniteScroll = (): StopInfiniteScrollContextType => {
  const context = useContext(StopInfiniteScrollContext);
  if (context === undefined) {
    // return a dummy value if context is not available yet or has been unmounted
    // this will prevent errors in the console
    return {
      stopInfiniteScroll: false,
      setStopInfiniteScroll: () => undefined,
    };
  }
  return context;
};

export const StopInfiniteScrollProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [stopInfiniteScroll, setStopInfiniteScroll] = useState<boolean>(false);

  return (
    <StopInfiniteScrollContext.Provider
      value={{ stopInfiniteScroll, setStopInfiniteScroll }}
    >
      {children}
    </StopInfiniteScrollContext.Provider>
  );
};
