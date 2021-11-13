const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0xe5841838Dd7e522f217DfFBCEaef82F04EC649Cd', //FantomNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //FantomNFTFactory
  TESTNET_721_PRIVATE: '0x7faFca7587E1D288e8Ea72131B3e4348bb27154b', //FantomNFTFactoryPrivate
  TESTNET_721_PUBLIC: '0xc2BF7E379A22468d981D824D6EADED80E30377ef', //FantomNFTFactory
  MAINNET_1155_PRIVATE: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
  TESTNET_1155_PRIVATE: '0x1FcBE8523806e2AB02703C5CA7Aa503046E054Bc', //FantomArtFactoryPrivate
  TESTNET_1155_PUBLIC: '0x56Dd3039FBbc3f84F7Ca17AD2A41B004816B5436', //FantomArtFactory
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
