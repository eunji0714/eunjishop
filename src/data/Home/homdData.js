import colors from "tailwindcss/colors";
import {CircleStackIcon, CubeTransparentIcon, CurrencyDollarIcon, WalletIcon} from "@heroicons/react/20/solid";

export const MAIN_DATA = [
    // {
    //     id: "552737e3-42ce-469e-85e0-35fcffe1d61d",
    //     name: "아식스 젤 1090 피드몬트 그레이",
    //     price: 159000,
    //     stock: 3,
    //     desc1: "1203A241-020",
    //     desc2: "2023.02.13",
    //     productImg1: "https://img.soldout.co.kr/items/2023/03/09/31bb84ac-f809-4842-8ad6-f4d4e44355e8.png/soldout/resize/1125x1125/optimize",
    //     brand: {
    //         "name": "아식스",
    //     },
    //     rotation: '-rotate-[12deg]',
    //     scale: 'scale-[.8]',
    //     direction: 'left-0 right-[unset] lg:left-[unset] lg:right-[120px]'
    // },
    {
        id: "cc317670-098e-4e51-895f-6de2b4dc117e",

        name: "아디다스 삼바 비건 블랙 화이트",
        price: 130000,
        stock: 4,
        desc1: "H01878",
        desc2: "2021.06.16",
        productImg1: "https://img.soldout.co.kr/item_thumb/2023/08/30/66f33494-ab54-4faa-8fbd-1de3cc829108.png/soldout/resize/570x570/optimize",
        brand: {
            "name": "아디다스",
        },
        zIndex: 'z-10',
        direction: 'right-[unset] lg:right-[60px]',

    },
    // {
    //     id: "5676b7f6-4cbe-4a87-80b0-fa41d5ed6290",
    //     name: "나이키 에어 포스 1 로우 '07",
    //     price: 109000,
    //     stock: 3,
    //     desc1: "CW2288-111",
    //     desc2: "2018.01.02",
    //     productImg1: "https://img.soldout.co.kr/items/2022/11/04/d5c4857b-2b09-4784-8d79-7e873a01d9b8.png/soldout/resize/1125x1125/optimize",
    //     brand: {
    //         "name": "나이키",
    //     },
    //     rotation: 'rotate-[12deg]',
    //     scale: 'scale-[.8]',
    //     direction: 'right-0',
    // },

]
export const FAQ_DATA = [
    {
        name: 'What is NFT?',
        description: `An NFT, or Non-Fungible Token, is a digital asset that represents ownership or proof of authenticity of something unique, such as a piece of art or a video clip. It's like a certificate of ownership for a specific item, except that it's stored on a secure digital ledger called a blockchain, which makes it hard to fake or duplicate.`,
        icon: CircleStackIcon,
        color: 'bg-violet-500',
    },
    {
        name: 'What chain is Happy Jolly on?',
        description:
            'Ethereum Mainnet and Happy Jolly tokens are based on the ERC-1155 standard',
        icon: CubeTransparentIcon,
        color: 'bg-blue-500',
    },
    {
        name: 'How much do Happy Jolly cost?',
        description: `The prices vary depending on the rarity and edition of each NFT, but they start at around 0.01 ETH. That's a great deal for such unique and beautiful digital art that will make a great addition to your collection. Don't miss out on this opportunity to own a piece of Happy Jolly's world! Come and check out my listings on OpenSea now.`,
        icon: CurrencyDollarIcon,
        color: 'bg-green-500',
    },
    {
        name: 'How do I get a Happy Jolly?',
        description: `1. Select Happy Jolly you want to buy.
        2. Click buy button to go to the OpenSea website and sign up for an account.
        3. Once you're signed in, you can click the "Buy Now" button to purchase the Happy Jolly NFT at the listed price.
        4. Once the transaction is confirmed and your payment is processed, the NFT will be transferred to your digital wallet on OpenSea. You can access your wallet by clicking on your profile icon and selecting "My Profile."
        5. That's it! You now own the NFT and can keep it in your digital wallet or transfer it to another wallet or marketplace if you wish.
        `,
        icon: WalletIcon,
        color: 'bg-orange-500',
    },
];

