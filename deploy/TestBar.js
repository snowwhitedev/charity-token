module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy("TestBar", {
    from: deployer,
    args: [12345],
    log: true,
    deterministicDeployment: false
  })
}

module.exports.tags = ["TestBar"]
