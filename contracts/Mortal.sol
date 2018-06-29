pragma solidity ^0.4.18;

import "./Ownable.sol";

contract Mortal is Ownable {
  // Destruction of contract
  function kill() public onlyOwner {
    selfdestruct(owner);
  }
}