// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// This contract handles swapping to and from xSushi, SushiSwap's staking token.
contract TestBar is ERC20("TestBar", "xTestBar") {
    uint256 public idx;

    // Define the Sushi token contract
    constructor(uint256 _idx) public {
        idx = _idx;
    }
}
