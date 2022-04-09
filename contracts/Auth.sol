// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract Auth{
    struct UserSchema{
        address adr;
        string Username;
        bytes32 password;
        bool isLoggedIn;
    }

    mapping(address => UserSchema) User;

    function Register(address _adr,string memory name,string memory pass) public returns (bool){
        require(User[_adr].adr!=msg.sender);
        User[_adr].adr = _adr;
        User[_adr].Username = name;
        User[_adr].password = keccak256(abi.encodePacked(pass));
        User[_adr].isLoggedIn = false;
        return true;
    }
    
    function LogIn(address _adr,string memory _pass) public returns(bool){
        // return true;
        if(keccak256(abi.encodePacked(_pass)) == User[_adr].password){
            User[_adr].isLoggedIn = true;
            return true;
        }else{
            return false;
        }
    }
    function getPass(address _adr) public view returns (bytes32){
        return User[_adr].password;
    }
    function LogOut(address _adr) public{
        User[_adr].isLoggedIn = false;
    }
}