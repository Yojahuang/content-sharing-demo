import { ethers } from "hardhat";

async function main() {
  const Post = await ethers.getContractFactory("Post");
  const post = await Post.deploy();

  await post.deployed();

  console.log(`Contract post deployed to ${post.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
