import { Booklet, Images, Porto, Videos } from "./helper"
const baseUrl = import.meta.env.VITE_BASE_URL || '';
const dataBooklet = [
    {
        id: "comanomaly",
        title: "COMANOMALY",
        videoCover: undefined,
        videoCoverYT: 'R_YjyhjJ-_E',
        imgCover: Booklet.assetscomanomaly1,
        tagline: "",
        description: "COMANOMALY is a mix between whodunnit mystery and horror game, with different randomly selected culprit each playthrough. The title is a portmanteau of Coma (state of deep unconsciousness) and Anomaly (abnormalities).",
        img2: Booklet.assetscomanomaly2,
        img3: Booklet.assetscomanomaly3,
        description2: "It's 1985. You are Susi, a nurse working for Sudaritra Hospital, you have to protect your patient: a wealthy and powerful man with weird symptoms and peculiar conditions.",
        img4: Booklet.assetscomanomaly4,
        description3: "",
        img5: Booklet.assetscomanomaly5,
		steamWidget: '3921560',
    },
    {
        id: "238",
        title: "2:38 Curse Of The Unborn",
        videoCover: undefined,
        videoCoverYT: 'LUu2eCJAVEs',
        imgCover: Booklet.assets23821,
        tagline: "In dreams and nightmares, shadows of the past stir. What secrets lie beneath?",
        description: "2:38 is a story-driven horror game inspired by PT, designed to take players through fear and mystery. The game tells the story of a girl who keeps waking up from nightmares at exactly 2:38 AM. After talking to her friends, she starts writing a dream journal, only to discover dark secrets about her family and past. As you play, you'll dive deeper into this eerie story, experiencing psychological horror and gripping suspense.",
        img2: Booklet.assets23822,
        img3: Booklet.assets23823,
        ip_newsletter_category: 2,
        colorText: 'horrorColorText',
        colorTextPlaceholder: 'horrorColorTextPlaceholder',
        font1: 'pala',
        newsletter: Booklet.newsletter238,
        subscribeImg: Booklet.wishlist238,
        wishlistImg: undefined,
        input: Booklet.input238,
        emailIcon: Booklet.email238,
        steamBtn: undefined,
        steamBtnHover: undefined,
        subscribeBtn: Booklet.subscribe238nothover,
        subscribeBtnHover: Booklet.subscribe238hover,
        steam: undefined,
        description2: "At 2:38, you'll explore various settings and environments, including urban and village houses, bamboo forests, and more. These diverse locations are filled with clues and hidden stories that reveal the truth about the girl's past. To move forward, you need to solve puzzles scattered throughout these areas. But be careful—there are sudden, scary encounters that require quick reactions to survive. The game keeps you on edge with its unsettling atmosphere and unexpected twists.",
        img4: Booklet.assets23824,
        description3: "One of the unique features of 2:38 is its replayability. The game has areas and puzzles that change every time you play, making each experience different. The theme of vivid dreams and nightmares is something many people can relate to, adding to the game's appeal. Aimed at young players, horror fans, and mid-core gamers, 2:38 offers a captivating and spooky adventure that will keep you coming back for more.",
        img5: Booklet.assets23825,
    },
    {
        id: "atg",
        title: "A.T.G (Analog Transports Grandeur)",
        videoCover: Videos.atg,
        videoCoverYT: undefined,
        imgCover: Booklet.assetsatg21,
        tagline: "When all the EVs in the world fail, these old-skool gasoline-fueled public transports come to save the day!",
        description: "A.T.G (Analog Transports Grandeur) is set in a not-so-distant future where an evil computer virus has brought modern society to its knees by hacking and disabling all electric and digital-controlled public transportation systems. Chaos reigns as people are left stranded, unable to go about their daily lives. In a desperate move, world leaders decide to bring back the long-forgotten, fossil-fueled traditional public transport vehicles, unleashing a wave of wacky and unpredictable transport chaos.",
        img2: Booklet.assetsatg22,
        img3: Booklet.assetsatg23,
        description2: "In this thrilling kart racing game, players will experience the exhilaration of navigating through challenging racetracks. A.T.G stands out with its unique emphasis on the wild and unpredictable nature of traditional public transportation. The game features destructible environments, including Non-Player Vehicles, street hawkers, and various street objects that randomly spawn at the start of each race, ensuring no two races are ever the same. Players will nd themselves constantly adapting to the ever-changing landscape, making every race a fresh and exciting experience.",
        img4: Booklet.assetsatg24,
        description3: "What sets A.T.G apart from other kart racing games is its innovative scoring system. Winning isn’t just about being the first to cross the finish line; players must also transport as many passengers as possible and choose their racing style wisely. Whether opting for the smooth and efficient 'Smooth-method' or the chaotic and crash-heavy 'Mayhem-method,' players will need to strategize to maximize their scores. This dual focus on racing and passenger transport adds a layer of depth and strategy, making A.T.G a truly unique and captivating gaming experience for players of all ages.",
        img5: Booklet.assetsatg25,
    },
    {
        id: "tbch",
        title: "The Blue Cut Hook",
        videoCover: undefined,
        videoCoverYT: 'DrrSe3ZvIQ0',
        imgCover: Booklet.assetstbch21,
        tagline: "Saving the world, one mug of ale at a time. Start here!",
        description: "Step into the enchanting world of The Blue Cut Hook, a captivating visual novel that seamlessly blends tavern management with a rich, fantasy medieval setting. Drawing inspiration from the iconic 80s and 90s anime aesthetic, The Blue Cut Hook transports players to an era where pixel art and heartfelt storytelling reign supreme. As a bar owner, you’ll embark on a journey to create the ultimate tavern, a haven for weary travelers and adventurers alike, all while navigating the intricate tapestry of the 90's and modern societal issues.",
        img2: Booklet.assetstbch22,
        img3: Booklet.assetstbch23,
        ip_newsletter_category: 3,
        colorText: 'tbchColorText',
        colorTextPlaceholder: 'tbchColorTextPlaceholder',
        font1: 'montserratbold',
        font2: 'montserratbolditalic',
        newsletter: Booklet.newslettertbch,
        wishlistImg: Booklet.wishlisttbch,
        input: Booklet.inputtbch,
        emailIcon: Booklet.emailtbch,
        steamBtn: Booklet.steamtbchnothover,
        steamBtnHover: Booklet.steamtbchhover,
        subscribeBtn: Booklet.subscribetbchnothover,
        subscribeBtnHover: Booklet.subscribetbchhover,
        steam: 'https://store.steampowered.com/app/3360770/The_Blue_Cut_Hook/',
        description2: "In The Blue Cut Hook, players will immerse themselves in a single-player experience that combines an engaging narrative with intricate gameplay. Your mission is to transform your humble tavern into the best bar in the realm, a place where patrons feel at home. Through a series of personal questlines, players will expand their bar's facilities, attract diverse characters, and delve into their intriguing backstories. Along the way, you'll engage in mini-games, manage resources, and cultivate social bonds, all of which contribute to the tavern’s growth and reputation.",
        img4: Booklet.assetstbch24,
        description3: "The Blue Cut Hook’s unique gameplay is divided into three captivating modes: Visual Novel, Dating Sim-like Social Aspects, and Micro Management. In the Visual Novel mode, players experience the story through immersive text, voice-overs, music, and artwork, making critical decisions that shape the narrative’s direction. The Social Aspect mode allows players to build relationships with patrons, uncovering deeper storylines and unlocking vital plot twists. Finally, in the Micro Management mode, players must strategize to make a profit, upgrade the tavern, and prepare for the looming apocalypse. With its blend of nostalgia, strategic gameplay, and multiple endings, The Blue Cut Hook offers endless replayability, making it a must-play for fans of old-school anime, management sims, and fantasy adventures.",
        img5: Booklet.assetstbch25,
		steamWidget: '3360770',
    },
    {
        id: "joltedbattlepuzzle",
        title: "JOLTED: Battle Puzzle",
        videoCover: undefined,
        videoCoverYT: 'vbXW6eeAE4o',
        imgCover: Booklet.assetsjolted21,
        tagline: "Combining each piece of the puzzle can help the fighters survive the apocalyptic world.",
        description: "JOLTED: Battle Puzzle is a thrilling and dynamic puzzle game, reminiscent of classics like Puzzle Fighter, Puyo Puyo, Baku Baku Animal, and Puzzle Kombat. Players control pairs of falling cubes in four vibrant colors—red, yellow, green, and blue—strategically placing them on a twelve-by-eight block game board with a critical red zone at the top. To win, players must prevent the cubes from sticking to the top while accumulating points that convert into damage to deplete their opponent's health. The game's engaging mechanics and fast-paced gameplay promise hours of strategic fun and intense competition.",
        img2: null,
        img3: Booklet.assetsjolted23,
        description2: "Set in a universe thrown into chaos by a mysterious force, JOLTED: Battle Puzzle introduces a cast of characters, each with a unique motivation to survive. As players progress, they unlock each character's backstory, enriching the game's narrative depth. Characters possess special abilities that can significantly influence gameplay, encouraging players to find the perfect match for their playstyle. This not only adds variety but also motivates players to collect and master every character available.",
        img4: Booklet.assetsjolted24,
        description3: "JOLTED: Battle Puzzle offers robust game modes including Player vs Computer, where players can earn EXP and Battle Points by defeating a series of opponents culminating in a Boss fight, and Player vs Player, featuring both local and online multiplayer options. Online play rewards players with higher EXP and Battle Points, incentivizing competitive play. The game’s unique selling points, such as character-specific abilities and the extensive collection of unlockable characters, ensure a compelling and rewarding experience for puzzle enthusiasts and competitive gamers alike.",
        img5: Booklet.assetsjolted25,
        img6: Booklet.assetsjolted26,
        img7: Booklet.assetsjolted27,
    },
    {
        id: "kelanaboga",
        title: "Kelana Boga",
        videoCover: Videos.kelanaboga,
        videoCoverYT: undefined,
        imgCover: Booklet.assetskelanaboga21,
        tagline: "Play as a restaurant owner, collect local ingredients, and create traditional Indonesian dishes.",
        description: "Kelana Boga is a casual match-3 game, a collaboration between SGP Indonesia and Plexus Studio. The mission of this game is to attract women, young people, and marginalized groups, empowering them to become key players in preserving and promoting the sustainability of local Indonesian food. In Kelana Boga, players take on the role of a restaurant owner who utilizes and processes a variety of the finest local ingredients from across the Indonesian archipelago. By matching 3 or more cooking ingredient icons, players gather these ingredients to create dishes that will be sold in the restaurant segment.",
        img2: Booklet.assetskelanaboga22,
        img3: Booklet.assetskelanaboga23,
        description2: "Gameplay: Kitchen Segment: Match-3 Mechanic: Combine 3 or more ingredients to process them (remove them from the game board). Players transform these ingredients into dishes that are sold in the restaurant segment. Each dish has 10 levels with increasing difficulty. To unlock the next recipe, players must complete all 10 levels and purchase the next recipe using Players can buy upgrades and power-ups in the Market segment to enhance the quantity and quality of dishes produced in the Restaurant segment.",
        img4: Booklet.assetskelanaboga24,
        description3: "Restaurant Segment: Idle Game Mechanic: Selling dishes generates SILVER currency. Use SILVER to buy upgrades and power-ups in the Market segment to boost sales in the Restaurant Segment. Additional Gameplay: Players use SILVER collected from the Restaurant Segment. Buy upgrades and power-ups to increase the quantity and quality of dishes and sales in the Restaurant Segment. Players can purchase power-up packs, upgrades, and SILVER with real money. Players can buy GOLD with real money or exchange SILVER for GOLD. Embark on a culinary adventure with Kelana Boga and help preserve the rich and diverse food culture of Indonesia while mastering the art of restaurant management and strategic gameplay.",
        img5: null,
    },
    {
        id: "towersiege",
        title: "Tower Siege",
        videoCover: Videos.towersiege,
        videoCoverYT: undefined,
        imgCover: Booklet.assetstowersiege21,
        tagline: "Engage in a thrilling color shooter puzzle game! Gather stones and unleash dragons to collapse towers.",
        description: "Enter the thrilling world of Tower Siege, a captivating color shooter puzzle game that challenges your strategic thinking and precision. As a general on the battlefield, your mission is to collapse towering structures by shooting the right colored stones at matching bricks. However, your arsenal is limited; you must rely on your soldiers to gather stones of random colors and make tactical decisions on which stones to use and which to discard. The fate of the tower rests in your hands as you aim to bring it down before your shots run out.",
        img2: Booklet.assetstowersiege22,
        img3: Booklet.assetstowersiege23,
        description2: "In Tower Siege, you control the battlefield by rotating your view around the tower, swiping to find the perfect angle, and tapping to shoot. The game’s unique protection spell mechanic adds an extra layer of strategy: only the top segment of the tower is vulnerable at any time, with lower segments becoming destructible only after the ones above them are cleared. This creates a dynamic and challenging gameplay experience as you work your way down the tower, segment by segment.",
        img4: Booklet.assetstowersiege24,
        description3: "Harness the power of the Royal Alchemist Brigade by collecting stones to create devastating color bombs, capable of obliterating all bricks of the same color. Discover rare dragon eggs to unleash powerful dragons that can clear entire sections of the tower in a single, swoop. Earn coins from your victories to buy and upgrade spells, amulets, and other resources, enhancing your siege capabilities. Whether you're a casual gamer or a puzzle enthusiast, Tower Siege offers a rich, engaging experience that will keep you coming back for more as you master the art of tower destruction.",
        img5: null,
    },
    {
        id: "becloudead",
        title: "BECLOUDEAD",
        videoCover: Videos.beclouded,
        videoCoverYT: undefined,
        imgCover: Booklet.assetsbecloudead21,
        tagline: "A bloody, creepy, and atmospheric cinematic platformer.",
        description: "Becloudead is a chilling and immersive horror story set in the dystopian future of Australia, in 2062. In a world ravaged by a zombie apocalypse, you step into the shoes of Ben Campbell, a former head of security for a private marine research company, now a lone survivor. As you navigate through a blood-soaked 24-hour time frame, you must unravel the sinister truth behind the outbreak. The game's intense and atmospheric narrative promises to keep you on the edge of your seat, as you venture deeper into the horrifying world of Becloudead.",
        img2: Booklet.assetsbecloudead22,
        img3: Booklet.assetsbecloudead23,
        description2: "The game's world design is intricately crafted to enhance the story's eerie ambiance. Featuring pixel art hand-traced rotoscoped character animations and richly detailed layered backgrounds and foregrounds, Becloudead employs parallax scrolling to add depth to its scenes. The game also includes full-screen hand-drawn and rotoscoped cutscenes, immersing players further into its gruesome and atmospheric narrative. Each location you explore is uniquely designed, offering a visually captivating experience that complements the game's dark and foreboding tone.",
        img4: Booklet.assetsbecloudead24,
        description3: "Becloudead offers a dual gameplay experience, split between the Real World and the Nightmare World. In the Real World, you will traverse and revisit various areas, engaging in combat with zombies and deadly local wildlife. This open-world exploration requires strategic backtracking as you acquire new items and abilities. The Nightmare World, on the other hand, presents isolated, surreal levels each themed around different holidays, complete with holiday-themed bosses. These nightmares are not bound by logic, featuring creepy, fantasy-like enemies that heighten the game's sense of dread and unpredictability. Prepare for a horrifying journey that blurs the line between reality and nightmare in Becloudead.",
        img5: null,
    },
    {
        id: "heavenfalls",
        title: "Heaven Falls",
        videoCover: Videos.heavenfalls,
        videoCoverYT: undefined,
        imgCover: Booklet.assetsheavenfalls21,
        tagline: "Rise. Rebel. Reclaim. The fate of your world is in your hands.",
        description: "Heaven Falls is a third-person shooter mobile game where players step into the role of elite freedom fighters, defending their home planet from invading forces from Earth. Players can choose from four unique character classes—Offense, Defense, Mobility, or Support—each offering distinct abilities and playstyles. In the game, you’ll embark on procedurally-generated PvE co-op missions, which include intense objectives like destroying enemy camps or rescuing hostages.",
        img2: Booklet.assetsheavenfalls22,
        img3: Booklet.assetsheavenfalls23,
        description2: "The multiplayer co-op mode allows up to four players to team up, offering a thrilling and collaborative experience. Using the game’s lobby system, players can easily form teams and tackle action-packed missions together. As they progress, players have the opportunity to upgrade their weapons and abilities, unlock exclusive characters, and face off against powerful bosses.",
        img4: Booklet.assetsheavenfalls25,
        description3: "With each playthrough, Heaven Falls promises a fresh challenge thanks to its dynamic maps and integrated puzzles. The combination of intense combat, strategic gameplay, and the unpredictability of procedurally-generated missions ensures that no two sessions will ever be the same.",
        img6: Booklet.assetsheavenfalls24,

    }

]

const cardsOffline =
    [
        {
            "name": "2:38 CURSE OF THE UNBORN",
            "img": Images.curse,
            "details_title": "Horror Game For PC",
            "color": "bg-ips",
            "yt": undefined,
            "video": undefined,
            "launch": "238",
            "border": "border-ips",
            "category": "PC GAME"
        },
        {
            "name": "A.T.G ",
            "img": Images.atg,
            "details_title": "Racing Game For PC",
            "color": "bg-ips",
            "yt": undefined,
            "video": undefined,
            "launch": "A.T.G",
            "border": "border-ips",
            "category": "PC GAME"
        },
        {
            "name": "THE BLUE CUT HOOK",
            "img": Images.baresque,
            "details_title": "Visual Novel Game For PC",
            "color": "bg-ips",
            "yt": undefined,
            "video": undefined,
            "launch": "bluecuthook",
            "border": "border-ips",
            "category": "PC GAME"
        },
        {
            "name": "BECLOUDEAD",
            "img": Images.beclouded,
            "details_title": "Cinematic platformer",
            "color": "bg-teal",
            "yt": undefined,
            "video": undefined,
            "launch": "becloudead",
            "border": "border-teal",
            "category": "OTHER IPs"
        },

    ]

const cards = [
    {
        "name": "COMANOMALY",
        "img": Images.comanomaly,
        "details_title": "A horror puzzle game with absurd comedy and a distinct visual style",
        "color": "bg-ips",
        "details": `${baseUrl}/comanomaly`,
        "yt": 'R_YjyhjJ-_E',
        "video": undefined,
        "border": "border-ips",
        "category": "PC GAME"
    },
    {
        "name": "THE BLUE CUT HOOK",
        "img": Images.baresque,
        "details_title": "Visual Novel Game For PC",
        "color": "bg-ips",
        "details": `${baseUrl}/tbch`,
        "yt": undefined,
        "video": Videos.bluecuthook,
        "border": "border-ips",
        "category": "PC GAME"
    },
    {
        "name": "2:38 CURSE OF THE UNBORN",
        "img": Images.curse,
        "details_title": "Horror Game For PC",
        "color": "bg-ips",
        "details": `${baseUrl}/238`,
        "yt": 'LUu2eCJAVEs',
        "video": undefined,
        "border": "border-ips",
        "category": "PC GAME"
    },
    {
        "name": "A.T.G",
        "img": Images.atg,
        "details_title": "Racing Game For PC",
        "color": "bg-ips",
        "details": `${baseUrl}/atg`,
        "yt": undefined,
        "video": Videos.atg,
        "border": "border-ips",
        "category": "PC GAME"
    },
    {
        "name": "JOLTED",
        "img": Images.jolted,
        "details_title": "Battle Puzzle Game For PC",
        "yt": undefined,
        "video": Videos.jolted,
        "color": "bg-ips",
        "details": `${baseUrl}/joltedbattlepuzzle`,
        "border": "border-ips",
        "category": "MOBILE GAME"
    },
    {
        "name": "KELANA BOGA",
        "img": Images.kelanaboga,
        "details_title": "Mobile Match-3",
        "color": "bg-ips",
        "details": `${baseUrl}/kelanaboga`,
        "yt": undefined,
        "video": Videos.kelanaboga,
        "border": "border-ips",
        "category": "MOBILE GAME"
    },
    {
        "name": "TOWER SIEGE",
        "img": Images.twr,
        "details_title": "Color Shooter Puzzle Game",
        "color": "bg-ips",
        "details": `${baseUrl}/towersiege`,
        "yt": undefined,
        "video": Videos.towersiege,
        "border": "border-ips",
        "category": "MOBILE GAME"
    },
    {
        "name": "HEAVEN FALLS",
        "img": Images.heavenfalls,
        "details_title": "Shooting Game For Mobile",
        "color": "bg-ips",
        "details": `${baseUrl}/heavenfalls`,
        "yt": undefined,
        "video": Videos.heavenfalls,
        "border": "border-ips",
        "category": "MOBILE GAME"
    },
]

const cardsMobile = [
    {
        "name": "Kelana Boga",
        "img": Images.kelanaboga,
        "details_title": "Mobile Match-3",
        "color": "bg-ips",
        "yt": undefined,
        "video": undefined,
        "border": "border-ips",
        "category": "MOBILE GAME "
    },
    {
        "name": "TOWER SIEGE",
        "img": Images.twr,
        "details_title": "Color Shooter Puzzle Game",
        "color": "bg-ips",
        "yt": undefined,
        "video": undefined,
        "border": "border-ips",
        "category": "MOBILE GAME "
    },
    {
        "name": "HEAVEN FALLS",
        "img": Images.heavenfalls,
        "details_title": "Shooting Game For Mobile",
        "color": "bg-ips",
        "yt": undefined,
        "video": undefined,
        "border": "border-ips",
        "category": "MOBILE GAME "
    },
]

const cardsCategory1 = [
    {
        "name": "GAMES SHOWREEL",
        "img": Images.showreel,
        "details_title": "Showreel Oray Plexus 2024",
        "color": "bg-teal",
        "yt": undefined,
        "video": Videos.showreel,
        "border": "border-teal",
        "category": "GAMES SHOWREEL"
    },
    {
        "name": "Ragasukma App",
        "img": Images.ragasukma,
        "details_title": "Find Out Indonesian Local Comics You Will Addicted To.",
        "color": "bg-teal",
        "yt": undefined,
        "video": Videos.ragasukma,
        "border": "border-teal",
        "category": "DIGITAL COMIC APP"
    },
    {
        "name": "Hana & Caraka",
        "img": Images.hanacaraka,
        "details_title": "A folklore-based IP in the form of a children's storybook and being developed into a video game",
        "color": "bg-teal",
        "yt": undefined,
        "video": Videos.hanacaraka,
        "border": "border-teal",
        "category": "KIDS GAME"
    },
    {
        "name": "Demons & Shamans",
        "img": Images.dhukun,
        "details_title": "Horror Game For PC",
        "color": "bg-teal",
        "yt": undefined,
        "video": Videos.dhukun,
        "border": "border-teal",
        "category": "TABLETOP GAME"
    },
    {
        "name": "Becloudead",
        "img": Images.beclouded,
        "details_title": "Cinematic platformer",
        "color": "bg-teal",
        "details": `${baseUrl}/becloudead`,
        "yt": undefined,
        "video": Videos.beclouded,
        "border": "border-teal",
        "category": "PC GAME"
    },
    {
        "name": "Bad Pad ",
        "img": Images.badpad,
        "details_title": "An adventure of a game pad button in an old-school platformer game",
        "yt": "N6PmFayXRn4",
        "video": undefined,
        "color": "bg-teal",
        "border": "border-teal",
        "category": "PC GAME"
    },
    {
        "name": "Bad Run - Turbo Edition",
        "img": Images.badrun,
        "details_title": "An endless-runner version of Bad Pad for mobiles",
        "yt": "HdVSXqyh20o",
        "video": undefined,
        "color": "bg-teal",
        "border": "border-teal",
        "category": "MOBILE GAME"
    },
    {
        "name": "Magma Hop",
        "img": Images.magmahop,
        "details_title": "An endless jumper mobile game",
        "yt": "1jQO94CrHDQ",
        "video": undefined,
        "color": "bg-teal",
        "border": "border-teal",
        "category": "MOBILE GAME"
    }

]

const cardsCategory2 = [
    {
        "name": "Gallery BCA Music Wall",
        "img": Images.bcawall,
        "details_title": "Touch the squares to play instruments",
        "color": "bg-purple",
        "border": "border-purple",
        "yt": "HfTKwCuEfok",
        "video": undefined,
        "category": "HARDWARE DEVELOPMENT"
    },
    {
        "name": "Pocari 7 DANCE",
        "img": Images.pocari,
        "details_title": "The game features motion captured characters and motion controls",
        "color": "bg-purple",
        "border": "border-purple",
        "yt": "gfp1Sqwn-hI",
        "video": undefined,
        "category": "KINECT GAME"
    },
    {
        "name": "Makan x Makan",
        "img": Images.makanxmakan,
        "details_title": "Eid family gathering become more exciting with this game",
        "color": "bg-purple",
        "border": "border-purple",
        "yt": "pjVVddtAbLs",
        "video": undefined,
        "category": "PUZZLE GAME"
    },
    {
        "name": "Hana & Caraka",
        "img": Images.interar,
        "details_title": "Turning 2D Art into animated 3D models with Augmented Reality",
        "color": "bg-purple",
        "border": "border-purple",
        "yt": "yeBmnI-Z1O8",
        "video": undefined,
        "category": "INTERACTIVE AR"
    },
    {
        "name": "Tara",
        "img": Images.tara,
        "details_title": "Virtual DJ using 3D model",
        "color": "bg-purple",
        "border": "border-purple",
        "yt": "sb8qF98IDnY",
        "video": undefined,
        "category": "3D CHARACTER"
    },
    {
        "name": "KUNKUN",
        "img": Images.kunkun,
        "details_title": "An architechtural VR application",
        "color": "bg-purple",
        "border": "border-purple",
        "yt": "SfklxYoFXqI",
        "video": undefined,
        "category": "3D VR APP"
    },
    {
        "name": "VR Pahat Relief Borobudur",
        "img": Images.borobudur,
        "details_title": "An Pahat Relief Borobudur VR application",
        "color": "bg-purple",
        "border": "border-purple",
        "yt": undefined,
        "video": Videos.borobudur,
        "category": "3D VR APP"
    },
    {
        "name": "Palagan",
        "img": Images.palagan,
        "details_title": "Developing Art & Historic 3D multiplayer mobile FPS Game",
        "color": "bg-purple",
        "border": "border-purple",
        "yt": undefined,
        "video": Videos.palagan,
        "category": "FPS GAME"
    },
]

const cardsCategory3 = [
    {
        "name": "Loquestic",
        "img": Images.loquestic,
        "details_title": "Developing Graphics & Coding Website Game Tetris Loquestic ",
        "color": "bg-peach",
        "border": "border-peach",
        "yt": undefined,
        "video": Videos.loquestic,
        "category": "WEBSITE GAME"
    },

    {
        "name": "Palagan",
        "img": Images.palagan,
        "details_title": "Developing Art & Historic 3D multiplayer mobile FPS Game",
        "color": "bg-peach",
        "border": "border-peach",
        "yt": undefined,
        "video": Videos.palagan,
        "category": "FPS GAME"
    },
    {
        "name": "Pakoban Tumpeng Hunt",
        "img": Images.pakoban,
        "details_title": "Developing Art & AR game for event",
        "color": "bg-peach",
        "border": "border-peach",
        "yt": "bq8BQj-DL1o",
        "video": undefined,
        "category": "AR APP"
    },
    {
        "name": "California Low Low",
        "img": Images.california,
        "details_title": "Developing Art & 3D rhythm game",
        "color": "bg-peach",
        "border": "border-peach",
        "yt": "JW2TsOnUp7Q",
        "video": undefined,
        "category": "GAME"
    }
]

const cardsCategory4 = [
    {
        "name": "Travelers",
        "img": Images.travelers,
        "details_title": "Boardgame Graphic Design for Travelers",
        "color": "bg-green",
        "border": "border-green",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portotravelers,
        "category": "GUI"
    },
    {
        "name": "Horizon First Contact",
        "img": Images.horizon,
        "details_title": "Kickstarter Graphic Design for Horizon First Contact",
        "color": "bg-green",
        "border": "border-green",
        "yt": undefined,
        "video": Videos.horizon,
        "portofolio": undefined,
        "category": "GUI"
    }, {
        "name": "Blocktrucks",
        "img": Images.blocktrucks,
        "details_title": "GUI for Blocktrucks",
        "color": "bg-green",
        "border": "border-green",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portogdblocktrucks,
        "category": "GUI"
    },
    {
        "name": "Blockchain Dapps",
        "img": Images.neet,
        "details_title": "Website Design for Blockchain Dapps",
        "color": "bg-green",
        "border": "border-green",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portogdneet,
        "category": "GUI"
    }
]

const cardsCategory5 = [
    {
        "name": "Abalon",
        "img": Images.abalon,
        "details_title": "2D Game Art for Abalon",
        "color": "bg-bluesky",
        "border": "border-bluesky",
        "yt": 'd-QIuAAUW_k',
        "video": undefined,
        "category": "2D GAME ART"
    },
    {
        "name": "Mobius Rift",
        "img": Images.mobius,
        "details_title": "2D Game Art for Mobius Rift",
        "color": "bg-bluesky",
        "border": "border-bluesky",
        "yt": undefined,
        "video": Videos.rsgmobius,
        "category": "2D GAME ART"
    },
    {
        "name": "Astra Exodus",
        "img": Images.astra,
        "details_title": "2D Game Art for Astra Exodus",
        "color": "bg-bluesky",
        "border": "border-bluesky",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portoastra,
        "category": "2D GAME ART"
    },
    {
        "name": "Animalia Vengeance",
        "img": Images.animalia,
        "details_title": "2D Game Art for Animalia Vengeance",
        "color": "bg-bluesky",
        "border": "border-bluesky",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portoanimalia,
        "category": "2D GAME ART"
    },
    {
        "name": "CikCuk",
        "img": Images.cikcuk,
        "details_title": "2D Game Art for CikCuk",
        "color": "bg-bluesky",
        "border": "border-bluesky",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portocikcuk,
        "category": "2D GAME ART"
    },
    {
        "name": "Treasure Hunter",
        "img": Images.treasurehunter,
        "details_title": "2D Game Art for Treasure Hunter",
        "color": "bg-bluesky",
        "border": "border-bluesky",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portotreasurehunter,
        "category": "2D GAME ART"
    },
    {
        "name": "Cat Tavern",
        "img": Images.cattavern,
        "details_title": "2D Game Art for Cat Tavern",
        "color": "bg-bluesky",
        "border": "border-bluesky",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portocattavern,
        "category": "2D GAME ART"
    }, {
        "name": "Viva Java",
        "img": Images.vivajava,
        "details_title": "2D Game Art for Viva Java",
        "color": "bg-bluesky",
        "border": "border-bluesky",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portovivajava,
        "category": "2D GAME ART"
    },
]

const cardsCategory6 = [
    {
        "name": "2:38 Curse of The Unborn",
        "img": Images.curse,
        "details_title": "3D Character For Horror Game",
        "color": "bg-lightpurple",
        "border": "border-lightpurple",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.porto238,
        "category": "3D GAME ART"
    },
    {
        "name": "A.T.G",
        "img": Images.atg,
        "details_title": "3D Vehicle For A.T.G",
        "color": "bg-lightpurple",
        "border": "border-lightpurple",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portoatg,
        "category": "3D GAME ART"
    },
    {
        "name": "Palagan ",
        "img": Images.palagan,
        "details_title": "3D Character For Palagan",
        "color": "bg-lightpurple",
        "border": "border-lightpurple",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portopalagan,
        "category": "3D GAME ART"
    },
    {
        "name": " Supertrucks Offroad Racing",
        "img": Images.supertrucks,
        "details_title": "3D Vehicle For Supertrucks Offroad",
        "color": "bg-lightpurple",
        "border": "border-lightpurple",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portooffroad,
        "category": "3D GAME ART"
    }, {
        "name": "RTHRO",
        "img": Images.rthro,
        "details_title": "3D Character For RTHRO",
        "color": "bg-lightpurple",
        "border": "border-lightpurple",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portorthro,
        "category": "3D GAME ART"
    },
    {
        "name": "Angkot The Game",
        "img": Images.AngkotTheGame,
        "details_title": "3D Vehicle For Angkot The Game",
        "color": "bg-lightpurple",
        "border": "border-lightpurple",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portoangkotthegame,
        "category": "3D GAME ART"
    },
    {
        "name": "Worker Mecha",
        "img": Images.workermecha,
        "details_title": "3D Character For Worker Mecha",
        "color": "bg-lightpurple",
        "border": "border-lightpurple",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portoworker,
        "category": "3D GAME ART"
    }, {
        "name": "Atom Universe",
        "img": Images.atomuniverse,
        "details_title": "3D Character For Atom Universe",
        "color": "bg-lightpurple",
        "border": "border-lightpurple",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portoatom,
        "category": "3D GAME ART"
    },

]

const cardsCategory7 = [
    {
        "name": "Survival Journal",
        "img": Images.survival,
        "details_title": "A PC Role-play adventure game.",
        "color": "bg-pink",
        "border": "border-pink",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portopasurvival,
        "category": "PIXEL ART"
    },
    // {
    //     "name": "Labyrinth And Legends",
    //     "img": Images.lal,
    //     "details_title": " A Solo Tabletop RPG that combines the use of pen, paper, dice and an application to create a unique immersive experience.",
    //     "color": "bg-pink",
    //     "border": "border-pink",
    //     "yt": undefined,
    //     "video": undefined,
    //     "portofolio": Porto.portopalabyrinth,
    //     "category": "PIXEL ART"
    // },
    // {
    //     "name": "Tales From The Windy Meadow",
    //     "img": Images.tales,
    //     "details_title": "A story-driven fantasy visual novel game in the style of pixel art. Available on Steam",
    //     "color": "bg-pink",
    //     "border": "border-pink",
    //     "yt": undefined,
    //     "video": undefined,
    //     "portofolio": Porto.portopatales,
    //     "category": "PIXEL ART"
    // },
    {
        "name": "Riahura",
        "img": Images.riahura,
        "details_title": "Pixel Art asset for Riahura",
        "color": "bg-pink",
        "border": "border-pink",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portopariahura,
        "category": "PIXEL ART"
    },
    {
        "name": "Monster Grill",
        "img": Images.monstergrill,
        "details_title": "Pixel Art asset for Monster Grill",
        "color": "bg-pink",
        "border": "border-pink",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portopamonster,
        "category": "PIXEL ART"
    },
    {
        "name": "Cyber Rangers",
        "img": Images.cyber,
        "details_title": "Pixel Art asset for Cyber Rangers",
        "color": "bg-pink",
        "border": "border-pink",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portopacyber,
        "category": "PIXEL ART"
    },
    {
        "name": "Pixel City Bros",
        "img": Images.pixelcity,
        "details_title": "Pixel Art asset for City Bros",
        "color": "bg-pink",
        "border": "border-pink",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portopixelcity,
        "category": "PIXEL ART"
    },
    {
        "name": "Thunder Paws",
        "img": Images.thunderpaws,
        "details_title": "Pixel Art asset for Thunder Paws",
        "color": "bg-pink",
        "border": "border-pink",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portothunderpaws,
        "category": "PIXEL ART"
    },
    {
        "name": "Metal Kill",
        "img": Images.metalkill,
        "details_title": "Pixel Art asset for Metal Kill",
        "color": "bg-pink",
        "border": "border-pink",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portometalkill,
        "category": "PIXEL ART"
    },
    {
        "name": "Subterrain",
        "img": Images.subterrain,
        "details_title": "Pixel Art asset for Subterrain",
        "color": "bg-pink",
        "border": "border-pink",
        "yt": undefined,
        "video": undefined,
        "portofolio": Porto.portosubterrain,
        "category": "PIXEL ART"
    }
]

const cardsCategory8 = [
    {
        "name": "Multi Marker Responsive AR",
        "img": Images.multimaker,
        "details_title": "Developing Graphics & Coding Multi Marker Responsive AR",
        "color": "bg-orange",
        "border": "border-orange",
        "yt": '9yP7goM6W7Y',
        "video": undefined,
        "category": "R&D"
    },
    {
        "name": "Text & Recognizition And Translation",
        "img": Images.recog,
        "details_title": "Translating words in an easier way.",
        "color": "bg-orange",
        "border": "border-orange",
        "yt": "2Lg2ZEdLbBw",
        "video": undefined,
        "category": "R&D"
    },
    {
        "name": "LARAS AI NLP",
        "img": Images.laras,
        "details_title": "Chat with our chatbot. She's not perfect (yet), but she's trying hard to be!",
        "color": "bg-orange",
        "border": "border-orange",
        "yt": "_DEJNeQ3NbQ",
        "video": undefined,
        "category": "R&D"
    },
    {
        "name": "Face Fusion",
        "img": Images.facefusion,
        "details_title": "Combine your friends’ faces with yours, voila!",
        "color": "bg-orange",
        "border": "border-orange",
        "yt": "7DjCUtfBmzI",
        "video": undefined,
        "category": "R&D"
    },
]

const cardsCategory9 = [
    {
        "name": "PROJECT NAME",
        "img": undefined,
        "color": "bg-gold",
        "border": "border-gold",
        "category": "CATEGORY"
    },
]

export { cards, dataBooklet, cardsMobile, cardsOffline, cardsCategory1, cardsCategory2, cardsCategory3, cardsCategory4, cardsCategory5, cardsCategory6, cardsCategory7, cardsCategory8, cardsCategory9 }