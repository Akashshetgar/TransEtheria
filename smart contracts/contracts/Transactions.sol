// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract transaction{
    uint256 counter;
    struct TransferSchema{
        address from;
        address receiver;
        uint amount;
        string mess;
        uint256 timestamo;
        string attribute; 
    }
    TransferSchema[] transactions;
    event Transfer(address a1,address a2,uint amt,string message,uint256 time,string attribute);

    function add(address payable receiver,string memory message,uint amt,string memory attr) public{
        counter +=1;
        transactions.push(TransferSchema(msg.sender,receiver,amt,message,block.timestamp,attr));
        emit Transfer(msg.sender, receiver, amt, message, block.timestamp, attr);

    }
    function get() public view returns(TransferSchema[] memory){
        return transactions;
    }
    function getcount() public view returns(uint256){
        return counter;
    }
}
