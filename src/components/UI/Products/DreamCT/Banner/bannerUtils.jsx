import Web3 from 'web3'
import { ERC20_ABI_FOR_SWAP } from './ERC20_ABI_FOR_SWAP'

// const rpcUrl = 'https://klaytn-mainnet-rpc.allthatnode.com:8551'
const rpcUrl = 'https://public-en-cypress.klaytn.net'
const web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl))

export const getMaintenanceFee = async () => {
  try {
    let balance = 0
    const contractERC20 = new web3.eth.Contract(
      ERC20_ABI_FOR_SWAP,
      '0xe4a1bd45cddbbd5d9f605b08ed13a94b6b6ab5aa'
    )
    balance = await contractERC20.methods
      .balanceOf('0xeBd90774127c164d19B6Ab75d6e68E0B7F13dc1e')
      .call()

    if (balance > 0) {
      return `${balance / Math.pow(10, 18)}`
    } else {
      return '0'
    }
  } catch (error) {
    console.log(
      '🚀 ~ file: useWallet.ts:142 ~ getMaintenanceFee ~ error:',
      error
    )
  }
}

export const getBurnFee = async () => {
  try {
    let balance = 0
    const contractERC20 = new web3.eth.Contract(
      ERC20_ABI_FOR_SWAP,
      '0xe4a1bd45cddbbd5d9f605b08ed13a94b6b6ab5aa'
    )
    balance = await contractERC20.methods
      .balanceOf('0x19Add8Dce4218B9e9da6b256E7F496eC117B1960')
      .call()

    if (balance > 0) {
      return `${balance / Math.pow(10, 18)}`
    } else {
      return '0'
    }
  } catch (err) {
    console.log('🚀 ~ file: useWallet.ts:159 ~ getBurnFee ~ err:', err)
  }
}

export const getDonationFee = async () => {
  let balance = 0
  const contractERC20 = new web3.eth.Contract(
    ERC20_ABI_FOR_SWAP,
    '0xe4a1bd45cddbbd5d9f605b08ed13a94b6b6ab5aa'
  )
  balance = await contractERC20.methods
    .balanceOf('0xd3A9d1d76bC56b176D3308D1952E444385F84f6b')
    .call()

  if (balance > 0) {
    return `${balance / Math.pow(10, 18)}`
  } else {
    return '0'
  }
}

export const items = [
  {
    text: 'Donation 10%',
    anotherText: '0xd3A9d1d76bC56b176D3308D1952E444385F84f6b',
    fetchBalance: getDonationFee
  },
  {
    text: 'Operation 10%',
    anotherText: '0xeBd90774127c164d19B6Ab75d6e68E0B7F13dc1e',
    fetchBalance: getMaintenanceFee
  },
  {
    text: 'Burn 10%',
    anotherText: '0x19Add8Dce4218B9e9da6b256E7F496eC117B1960',
    fetchBalance: getBurnFee
  }
]
