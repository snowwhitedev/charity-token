const { ethers } = require('hardhat');
const { expect } = require('chai');

describe("TestBar", function () {
  before(async function () {
    this.TestBar = await ethers.getContractFactory("TestBar")

    this.signers = await ethers.getSigners()
    this.alice = this.signers[0]
    this.bob = this.signers[1]
    this.carol = this.signers[2]
  })

  beforeEach(async function () {
    this.bar = await this.TestBar.deploy(12345)
  })

  it("should approve simple idx", async function () {
    expect(await this.bar.idx()).to.equal(12345)
  })
})
