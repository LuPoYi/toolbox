export const chains = [
  {
    id: "0x1",
    token: "ETH",
    label: "Ethereum Mainnet",
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    blockExplorerUrl: "https://etherscan.io/",
  },
  {
    id: "0x89",
    label: "Polygon",
    token: "MATIC",
    rpcUrl: `https://polygon-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    blockExplorerUrl: "https://polygonscan.com/",
  },
  {
    id: "0xa86a",
    label: "Avalanche",
    token: "AVAX",
    rpcUrl: "https://rpc.ankr.com/avalanche",
    blockExplorerUrl: "https://snowtrace.io/",
  },
  {
    id: "0xa",
    label: "Optimism",
    token: "ETH",
    rpcUrl: "https://rpc.ankr.com/optimism",
    blockExplorerUrl: "https://optimistic.etherscan.io/",
  },
  {
    id: "0xa4b1",
    label: "Arbitrum",
    token: "ETH",
    rpcUrl: `https://arbitrum-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    blockExplorerUrl: "https://arbiscan.io/",
  },
  {
    id: "0xaa36a7",
    token: "ETH",
    label: "Ethereum testnet",
    rpcUrl: "https://ethereum-sepolia.publicnode.com",
  },
];
