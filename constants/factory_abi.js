const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0xe5841838Dd7e522f217DfFBCEaef82F04EC649Cd', //FantomNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //FantomNFTFactory
  TESTNET_721_PRIVATE: '0xaE404fAf67E75479EB2afF3908D1277Ac608Ef96', //FantomNFTFactoryPrivate
  TESTNET_721_PUBLIC: '0x2D9fABDA8e7f6aDF40a7cb6fA1Fb49B64f4AD89C', //FantomNFTFactory
  MAINNET_1155_PRIVATE: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
  TESTNET_1155_PRIVATE: '0xb21242f9d8096eA014aE2F975e02341ce981cE7d', //FantomArtFactoryPrivate
  TESTNET_1155_PUBLIC: '0x448e7412946E2A71f611032B33ce90F40ACe1622', //FantomArtFactory
  ABI: [
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'exists',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function'
    }
  ]
};

module.exports = CollectionFactoryContract;
