import { RootStore } from "./root";
import { StateCreator } from "zustand";
import type { WalletState } from "@web3-onboard/core";
import { ethers } from "ethers";

export interface WalletSlice {
  address?: string;
  wallet: WalletState | null;
  provider?: ethers.BrowserProvider;
  signer?: ethers.JsonRpcSigner;
  setWallet: (wallet: WalletState | null) => void;
  setupEthersProvider: () => Promise<void>;
}

const walletInitState = {
  wallet: null,
  address: undefined,
  provider: undefined,
  signer: undefined,
};

export const createWalletSlice: StateCreator<
  RootStore,
  [["zustand/subscribeWithSelector", never], ["zustand/devtools", never]],
  [],
  WalletSlice
> = (set, get) => ({
  ...walletInitState,
  setWallet: (wallet) => {
    if (wallet) set({ wallet });
  },
  setupEthersProvider: async () => {
    const { wallet } = get();
    let provider: ethers.BrowserProvider | undefined = undefined;
    let signer: ethers.JsonRpcSigner | undefined = undefined;
    console.log(wallet?.accounts);
    if (wallet) {
      (async () => {
        provider = new ethers.BrowserProvider(wallet.provider, "any");
        signer = await provider.getSigner(wallet.accounts[0].address);
        set({ provider, signer });
      })();
    }
  },
});
