import { WalletSlice, createWalletSlice } from './walletSlice';
import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';

export type RootStore = WalletSlice;

export const useRootStore = create<RootStore>()(
  subscribeWithSelector(
    devtools((...args) => {
      return {
        ...createWalletSlice(...args),
      };
    })
  )
);
useRootStore.subscribe(
  (state) => state.wallet?.accounts[0],
  () => useRootStore.getState().setupEthersProvider()
);
