//Task 1
const provider = ethers.getDefaultProvider('ropsten');

async function getBlockHeight(){
    const blockHeight = await provider.getBlockNumber()
    document.getElementById("blockHeight").innerHTML = blockHeight;
}

//Task 2
const mnemonic = "finger stone earth much robot gap globe crawl bundle comic denial brisk"
const wallet = ethers.Wallet.fromMnemonic(mnemonic)

async function getBalanceOf(){

    // const provider = ethers.getDefaultProvider('ropsten');
    let p = new ethers.providers.Web3Provider(window.ethereum)

    const signer = p.getSigner();
    let userAddress = "0xDbD564C26C87846E34F40b2a323685c1ef26A8D2"
    document.getElementById("userAddress").innerText = `Address: ${userAddress}`;
    const usdc = {
        address: "0xd9145CCE52D386f254917e481eB44e9943F39138",
        abi: [
          "function name() view returns (string)",
          "function symbol() view returns (string)",
          "function gimmeSome() external",
          "function balanceOf(address _owner) public view returns (uint256 balance)",
          "function transfer(address _to, uint256 _value) public returns (bool success)",
        ],
      };

    const usdcContract = new ethers.Contract(usdc.address, usdc.abi, signer);

    let usdcBalance = await usdcContract.balanceOf(userAddress);
    usdcBalance = ethers.utils.formatUnits(usdcBalance, 6);

    console.log(await usdcContract)
    console.log(usdcBalance)
    // console.log(usdcBalance)
}


async function test(){
  const private_key = "9dfdcf56fdc38910730c0f07f22c2964a6515bfb609b05ab9579a27ca6cfba6a"
  let wallet = new ethers.Wallet(private_key)
  let walletSigner = wallet.connect(window.ethersProvider)
  const gas_price = 100000 // gasPrice

  const tx = {
    from: "0xDbD564C26C87846E34F40b2a323685c1ef26A8D2",
    to: "0x15433DA387451F9dE4565280C85506CB71aF9376",
    value: ethers.utils.parseEther(10),
    // nonce: window.ethersProvider.getTransactionCount(send_account, "latest"),
    gasLimit: ethers.utils.hexlify(100000), // 100000
    gasPrice: gas_price,
  }
  walletSigner.sendTransaction(tx).then((transaction) => {
    console.dir(transaction)
    alert("Send finished!")
  })
}
async function getBalanceOf2(){
    const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
    let p = new ethers.providers.Web3Provider(window.ethereum)
    console.log(p.getSigner())


}