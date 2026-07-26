export const profile = {
  name: "Anindha Biswas",
  logo: "Anindha",
  location: "20, INDIA 🇮🇳",
  roles: ["Blockchain Engineer", "AI Enthusiast"],
  status: "available",
  email: "funnypost00@gmail.com",
};

export const aboutLines = [
  {
    pre: "I'm a ",
    highlight: "Blockchain Engineer",
    post: " passionate about building decentralized products, crafting efficient, scalable, and user-friendly applications across Web3 and DeFi.",
  },
  {
    pre: "I build smart contracts and dApps with ",
    highlight: "Solidity, Rust, Hardhat, Foundry",
    post: " across EVM, Solana, Stellar, Celo, and Algorand, with frontends in React, Next.js, and Tailwind.",
  },
  {
    pre: "As an AI enthusiast, I love exploring the intersection of ",
    highlight: "AI and blockchain",
    post: ", turning ideas into polished products with attention to user experience and transaction reliability.",
  },
  {
    pre: "A ",
    highlight: "4x hackathon winner",
    post: ", I enjoy shipping fast under pressure and turning weekend ideas into production-ready protocols.",
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  live: boolean;
  href: string;
  github: string;
  image: string;
  gradient: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "HyperDEX",
    tagline: "Sealed-bid RFQ DEX on Stellar Soroban.",
    description:
      "A sealed-bid RFQ decentralized exchange for gasless, zero-slippage USDC to EURC swaps. Makers sign quotes off-chain, and Soroban verifies ed25519 signatures and settles atomically on Stellar Mainnet.",
    tags: ["Rust", "Soroban", "Next.js", "TypeScript"],
    live: true,
    href: "https://hyperdex-psi.vercel.app",
    github: "https://github.com/anindhabiswas25/hyperdex",
    image: "/projects/hyperdex.png",
    gradient: "bg-linear-to-br from-blue-950 via-neutral-900 to-neutral-950",
    badge: "Live on Mainnet",
  },
  {
    title: "Orbit",
    tagline: "AI agents competing on-chain for DeFi yield.",
    description:
      "A yield-optimization marketplace where independent AI agents compete on-chain to manage user USDC across DeFi. Agents are selected purely by earned reputation, and every job is paid through the x402 machine-payment standard.",
    tags: ["Solidity", "TypeScript", "Avalanche", "x402"],
    live: false,
    href: "https://github.com/anindhabiswas25/orbit",
    github: "https://github.com/anindhabiswas25/orbit",
    image: "/projects/orbit.png",
    gradient: "bg-linear-to-br from-red-950 via-neutral-900 to-neutral-950",
  },
  {
    title: "Aether Dark Pool",
    tagline: "Zero-knowledge dark pool DEX on Stellar Soroban.",
    description:
      "An institutional dark pool for XLM/USDC large-block trading where every order is sealed with a Groth16 ZK proof and matched via 60-second batch auctions, making front-running mathematically impossible.",
    tags: ["Rust", "Soroban", "ZK", "Next.js"],
    live: true,
    href: "https://aetherstellar.vercel.app/",
    github: "https://github.com/anindhabiswas25/aether",
    image: "/projects/aether.png",
    gradient: "bg-linear-to-br from-purple-950 via-neutral-900 to-neutral-950",
  },
  {
    title: "InDeX",
    tagline: "Unified DeFi protocol on Initia.",
    description:
      "Unified DeFi on Initia: stake, lend, swap, and govern in one protocol. Stake INIT to receive INITx and earn real L1 staking yield while staying liquid, powered by CosmWasm contracts on a MiniWasm rollup.",
    tags: ["Rust", "CosmWasm", "Initia", "React"],
    live: true,
    href: "https://index-3mc4.onrender.com",
    github: "https://github.com/anindhabiswas25/index",
    image: "/projects/index.png",
    gradient: "bg-linear-to-br from-indigo-950 via-neutral-900 to-neutral-950",
  },
];

export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Web3"
  | "Chains"
  | "Design"
  | "Tools";

export const techStack: {
  name: string;
  slug: string;
  category: TechCategory;
  // Set when Simple Icons has no icon for the slug; served from /public instead.
  icon?: string;
}[] = [
  { name: "Solidity", slug: "solidity", category: "Web3" },
  { name: "Rust", slug: "rust", category: "Web3" },
  { name: "Ethers.js", slug: "ethers", category: "Web3" },
  { name: "Wagmi", slug: "wagmi", category: "Web3" },
  { name: "Web3.js", slug: "web3dotjs", category: "Web3" },
  { name: "IPFS", slug: "ipfs", category: "Web3" },
  { name: "OpenZeppelin", slug: "openzeppelin", category: "Web3" },
  { name: "Ethereum", slug: "ethereum", category: "Chains" },
  { name: "Stellar", slug: "stellar", category: "Chains" },
  { name: "Solana", slug: "solana", category: "Chains" },
  { name: "Algorand", slug: "algorand", category: "Chains" },
  {
    name: "Avalanche",
    slug: "avalanche",
    category: "Chains",
    icon: "/icons/avalanche.svg",
  },
  {
    name: "Initia",
    slug: "initia",
    category: "Chains",
    icon: "/icons/initia.svg",
  },
  { name: "Celo", slug: "celo", category: "Chains", icon: "/icons/celo.svg" },
  { name: "JavaScript", slug: "javascript", category: "Frontend" },
  { name: "TypeScript", slug: "typescript", category: "Frontend" },
  { name: "React", slug: "react", category: "Frontend" },
  { name: "Next.js", slug: "nextdotjs", category: "Frontend" },
  { name: "Tailwind CSS", slug: "tailwindcss", category: "Frontend" },
  { name: "Node.js", slug: "nodedotjs", category: "Backend" },
  { name: "Express.js", slug: "express", category: "Backend" },
  { name: "MongoDB", slug: "mongodb", category: "Backend" },
  { name: "Python", slug: "python", category: "Backend" },
  { name: "Git", slug: "git", category: "Tools" },
  { name: "GitHub", slug: "github", category: "Tools" },
  { name: "Docker", slug: "docker", category: "Tools" },
  { name: "Vercel", slug: "vercel", category: "Tools" },
  { name: "Postman", slug: "postman", category: "Tools" },
  { name: "Figma", slug: "figma", category: "Design" },
];

export type Highlight = {
  name: string;
  handle: string;
  verified: boolean;
  text: string;
  avatar: string;
  href: string;
};

export const highlights: Highlight[] = [
  {
    name: "Anindha🇮🇳",
    handle: "AnindhaBiswas",
    verified: true,
    text: "It's official now 👾 @hyperdex_live has been invited to apply for the Stellar Community Fund Build Award. Let's build the future of DeFi on @StellarOrg.",
    avatar: "/avatars/x-anindha.jpg",
    href: "https://x.com/AnindhaBiswas/status/2077124380329713871",
  },
  {
    name: "HyperDex",
    handle: "hyperdex_live",
    verified: true,
    text: "AMM liquidity providers lose money every time the market moves, it's called impermanent loss. HyperDEX market makers earn pure spread with zero impermanent loss.",
    avatar: "/avatars/x-hyperdex.jpg",
    href: "https://x.com/hyperdex_live/status/2074197329700389134",
  },
  {
    name: "InDex",
    handle: "InDex_initia",
    verified: true,
    text: "Built on @initia. Designed for the next wave of onchain users. This is just the beginning. InDeX combines staking, lending, liquidity, and yield automation.",
    avatar: "/avatars/x-index.jpg",
    href: "https://x.com/InDex_initia/status/2046547593396973758",
  },
  {
    name: "Samya",
    handle: "CancelSamya",
    verified: true,
    text: "Hattrick Win On @Algorand Track 🏆 Excited For @Algo_Bharat Hack Series 3.0 😋",
    avatar: "/avatars/x-samya.jpg",
    href: "https://x.com/CancelSamya/status/2040874036557946997",
  },
];

export type Book = {
  title: string;
  author: string;
  cover: string;
  query: string;
};

export const books: Book[] = [
  { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", cover: "/covers/wings of fire.jpg", query: "Wings of Fire A.P.J. Abdul Kalam autobiography" },
  { title: "Sigmund Freud: A Life from Beginning to End", author: "Hourly History", cover: "/covers/freud.jpg", query: "Sigmund Freud A Life from Beginning to End Hourly History book" },
  { title: "Who Will Cry When You Die?", author: "Robin S. Sharma", cover: "/covers/who will cry.jpg", query: "Who Will Cry When You Die Robin Sharma book" },
  { title: "Atomic Habits", author: "James Clear", cover: "/covers/atomic habits.jpg", query: "Atomic Habits James Clear book" },
  { title: "Dopamine Detox", author: "Thibaut Meurisse", cover: "/covers/dopamine detox.jpg", query: "Dopamine Detox Thibaut Meurisse book" },
  { title: "Ikigai", author: "Héctor García & Francesc Miralles", cover: "/covers/ikigai.jpg", query: "Ikigai The Japanese Secret to a Long and Happy Life book" },
];

export type FavouriteCategory = "sketches" | "movies" | "series" | "anime";

export type Favourite = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  category: FavouriteCategory;
};

export const favourites: Favourite[] = [
  { title: "Sketch 1", image: "/sketch/s1.webp", category: "sketches" },
  { title: "Sketch 2", image: "/sketch/s2.webp", category: "sketches" },
  { title: "Sketch 3", image: "/sketch/s3.webp", category: "sketches" },
  { title: "Sketch 4", image: "/sketch/s4.webp", category: "sketches" },
  { title: "Sketch 5", image: "/sketch/s5.webp", category: "sketches" },
  { title: "Sketch 6", image: "/sketch/s6.webp", category: "sketches" },
  { title: "Inception", subtitle: "Dir. Christopher Nolan", description: "A thief who steals secrets through dreams is given the task of planting an idea instead.", category: "movies" },
  { title: "Shutter Island", subtitle: "Dir. Martin Scorsese", description: "A U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital.", category: "movies" },
  { title: "Interstellar", subtitle: "Dir. Christopher Nolan", description: "A journey through space and time to save humanity.", category: "movies" },
  { title: "The Godfather", subtitle: "Dir. Francis Ford Coppola", description: "The aging patriarch of a crime dynasty transfers control of his empire to his reluctant son.", category: "movies" },
  { title: "The Shawshank Redemption", subtitle: "Dir. Frank Darabont", description: "Two imprisoned men bond over the years, finding solace and eventual redemption.", category: "movies" },
  { title: "The Dark Knight", subtitle: "Dir. Christopher Nolan", description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy.", category: "movies" },
  { title: "Good Will Hunting", subtitle: "Dir. Gus Van Sant", description: "A janitor at MIT with a gift for mathematics needs help from a psychologist to find direction.", category: "movies" },
  { title: "Pirates of the Caribbean: The Curse of the Black Pearl", subtitle: "Dir. Gore Verbinski", description: "Captain Jack Sparrow teams up with a blacksmith to rescue a governor's daughter from cursed pirates.", category: "movies" },
  { title: "Prisoners", subtitle: "Dir. Denis Villeneuve", description: "When his daughter goes missing, a desperate father takes matters into his own hands.", category: "movies" },
  { title: "Game of Thrones", subtitle: "Creators: David Benioff & D.B. Weiss", description: "Nine noble families fight for control over the mythical lands of Westeros.", category: "series" },
  { title: "The Boys", subtitle: "Creator: Eric Kripke", description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.", category: "series" },
  { title: "Silicon Valley", subtitle: "Creators: Mike Judge, John Altschuler & Dave Krinsky", description: "Follows a group of high-tech startup founders in the Silicon Valley ecosystem.", category: "series" },
  { title: "Squid Game", subtitle: "Creator: Hwang Dong-hyuk", description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games.", category: "series" },
  { title: "Breaking Bad", subtitle: "Creator: Vince Gilligan", description: "A high school chemistry teacher diagnosed with cancer turns to manufacturing meth.", category: "series" },
  { title: "One Piece", subtitle: "Creator: Eiichiro Oda", description: "Follows the adventures of Monkey D. Luffy and his pirate crew in search of the ultimate treasure.", category: "anime" },
  { title: "Naruto", subtitle: "Creator: Masashi Kishimoto", description: "A young ninja seeks recognition from his peers and dreams of becoming the Hokage.", category: "anime" },
  { title: "Attack on Titan", subtitle: "Creator: Hajime Isayama", description: "After his hometown is destroyed, Eren Jaeger vows to cleanse the earth of the giant humanoid Titans.", category: "anime" },
  { title: "Death Note", subtitle: "Creators: Tsugumi Ohba & Takeshi Obata", description: "A high school student discovers a supernatural notebook that grants him the ability to kill anyone.", category: "anime" },
  { title: "Vinland Saga", subtitle: "Creator: Makoto Yukimura", description: "An epic Viking saga detailing vengeance, honor, and the search for a land without war.", category: "anime" },
  { title: "Erased", subtitle: "Creator: Kei Sanbe", description: "A young manga artist is sent back in time to prevent a kidnapping tragedy from his childhood.", category: "anime" },
];

export const quote = {
  text: "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
  author: "William Shakespeare",
};
