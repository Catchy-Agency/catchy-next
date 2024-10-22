// StopInfiniteScrollContext.tsx

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface StopInfiniteScrollContextType {
  stopInfiniteScroll: boolean;
  setStopInfiniteScroll: React.Dispatch<React.SetStateAction<boolean>>;
  handleStopInfiniteScroll: (triggerItemSelector: string) => void;
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
      handleStopInfiniteScroll: () => undefined,
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

  const handleStopInfiniteScroll = (triggerItemSelector: string) => {
    if (!triggerItemSelector) return;
    const triggerItem = document.querySelector(triggerItemSelector);
    if (triggerItem) {
      setStopInfiniteScroll(true);
    }
  };

  return (
    <StopInfiniteScrollContext.Provider
      value={{
        stopInfiniteScroll,
        setStopInfiniteScroll,
        handleStopInfiniteScroll,
      }}
    >
      {children}
    </StopInfiniteScrollContext.Provider>
  );
};
