// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Test {
  uint number = 72;



  function getNumber() public view returns(uint){
    return number;
  }

  function setNumber(uint _number) public{
    number = _number;
  }
}
