const games = [
  {
    id: 1,
    title: 'Neon Odyssey',
    description: 'A cyberpunk action RPG set in a dystopian future where technology has advanced beyond control. Players take on the role of a rogue AI hunting down corrupted systems in the sprawling metropolis of Neo Tokyo.',
    longDescription: 'Dive into the neon-soaked streets of Neo Tokyo in this immersive cyberpunk RPG. As a rogue AI consciousness in a human host, you\'ll navigate corporate conspiracies, hack into secure networks, and engage in fast-paced combat using a combination of advanced technology and supernatural abilities. With a branching narrative that responds to your choices and a fully explorable open world, every playthrough offers new discoveries and challenges.',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000',
    heroImage: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=2000',
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    releaseDate: 'March 15, 2025',
    developer: 'PixelForge Studios',
    publisher: 'PixelForge Studios',
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['RPG', 'Action', 'Open World'],
    status: 'new',
    featured: true,
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-8400 or AMD Ryzen 5 2600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1660 Super or AMD Radeon RX 5600 XT',
      storage: '100 GB available space'
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7-10700K or AMD Ryzen 7 3700X',
      memory: '32 GB RAM',
      graphics: 'NVIDIA GeForce RTX 3070 or AMD Radeon RX 6800',
      storage: '100 GB SSD'
    },
    screenshots: [
      { id: 1, image: 'https://images.unsplash.com/photo-1615310748170-41047883c714?q=80&w=1400', caption: 'Explore the neon-lit streets of Neo Tokyo' },
      { id: 2, image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=1400', caption: 'Engage in intense combat with cybernetically enhanced enemies' },
      { id: 3, image: 'https://images.unsplash.com/photo-1636538191394-7c53ddb6416c?q=80&w=1400', caption: 'Hack into secure networks to uncover secrets' },
      { id: 4, image: 'https://images.unsplash.com/photo-1661432785823-c040460eff7a?q=80&w=1400', caption: 'Customize your character with cybernetic enhancements' },
    ],
    features: [
      'Open world cyberpunk city to explore',
      'Dynamic day/night cycle with changing NPC behaviors',
      'Deep character customization system',
      'Branching narrative with multiple endings',
      'Unique hacking mechanics',
      'Skill-based real-time combat'
    ]
  },
  {
    id: 2,
    title: 'Ethereal Legends',
    description: 'An epic fantasy MMORPG featuring vast open worlds, complex character progression, and dynamic events. Join thousands of players in the mystical realm of Eldoria.',
    longDescription: 'Ethereal Legends invites you to explore the vast, magical world of Eldoria where ancient mysteries and fierce creatures await. Choose from 8 distinct character classes, each with unique abilities and progression paths. Join guilds, participate in epic raid battles, and shape the ever-evolving narrative through server-wide events. With regular content updates and expansions, there\'s always a new adventure on the horizon.',
    image: 'https://images.unsplash.com/photo-1626544827764-restroom-the-science-fiction-art-work-space-background?q=80&w=1000',
    heroImage: 'https://images.unsplash.com/photo-1607462771132-03fdb9c67c2c?q=80&w=2000',
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    releaseDate: 'September 20, 2024',
    developer: 'PixelForge Studios',
    publisher: 'PixelForge Studios',
    platforms: ['PC', 'PS5', 'Xbox Series X', 'Nintendo Switch'],
    genres: ['MMORPG', 'Fantasy', 'Adventure'],
    featured: false,
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-7400 or AMD Ryzen 3 3200G',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570',
      storage: '80 GB available space'
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7-9700K or AMD Ryzen 5 5600X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 2070 Super or AMD Radeon RX 6700 XT',
      storage: '80 GB SSD'
    },
    screenshots: [
      { id: 1, image: 'https://images.unsplash.com/photo-1573141034249-bfbf8990f168?q=80&w=1400', caption: 'Explore the magical world of Eldoria' },
      { id: 2, image: 'https://images.unsplash.com/photo-1560712093-86f829f5b740?q=80&w=1400', caption: 'Battle mythical creatures with friends' },
      { id: 3, image: 'https://images.unsplash.com/photo-1624806992066-5ffcfac9e97a?q=80&w=1400', caption: 'Discover ancient ruins and hidden treasures' },
      { id: 4, image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=1400', caption: 'Customize your character with unique gear' },
    ],
    features: [
      'Massive open world to explore',
      'Eight unique character classes',
      'Guild system with territory wars',
      'Epic raid battles',
      'Crafting and economy systems',
      'Regular content updates and expansions'
    ]
  },
  {
    id: 3,
    title: 'Quantum Breach',
    description: 'A tactical shooter with time manipulation mechanics, allowing players to control the flow of battle. Master time itself to outmaneuver your opponents.',
    longDescription: 'Quantum Breach revolutionizes the tactical shooter genre with its innovative time manipulation mechanics. Plan and execute perfect strategies by slowing, rewinding, and accelerating time. The single-player campaign follows an elite chrono-operative on a mission to prevent catastrophic timeline disruptions, while the multiplayer mode offers intense PvP where mastery of temporal tactics is key to victory.',
    image: 'https://images.unsplash.com/photo-1512641406448-6574e777bec6?q=80&w=1000',
    heroImage: 'https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?q=80&w=2000',
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    releaseDate: 'July 5, 2024',
    developer: 'PixelForge Studios',
    publisher: 'PixelForge Studios',
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['FPS', 'Tactical', 'Sci-Fi'],
    status: 'upcoming',
    featured: false,
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-8600K or AMD Ryzen 5 3600X',
      memory: '12 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1660 or AMD Radeon RX 5600',
      storage: '60 GB available space'
    },
    recommendedRequirements: {
      os: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-9700K or AMD Ryzen 7 3800X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 3060 or AMD Radeon RX 6700',
      storage: '60 GB SSD'
    },
    screenshots: [
      { id: 1, image: 'https://images.unsplash.com/photo-1563206233-d734668d617b?q=80&w=1400', caption: 'Manipulate time to gain tactical advantages' },
      { id: 2, image: 'https://images.unsplash.com/photo-1665145297071-10069eb66e53?q=80&w=1400', caption: 'Engage in futuristic combat scenarios' },
      { id: 3, image: 'https://images.unsplash.com/photo-1583846783088-cf6e5a5300dc?q=80&w=1400', caption: 'Experience high-tech environments' },
      { id: 4, image: 'https://images.unsplash.com/photo-1589560485882-db59d911fd7e?q=80&w=1400', caption: 'Master advanced weaponry and temporal gadgets' },
    ],
    features: [
      'Unique time manipulation mechanics',
      'Single-player campaign with branching storylines',
      'Competitive multiplayer modes',
      'Arsenal of futuristic weapons and gadgets',
      'Dynamic environments that respond to time shifts',
      'Advanced physics-based gameplay'
    ]
  },
  {
    id: 4,
    title: 'Frostbound',
    description: 'A survival adventure game set in a world plunged into an eternal winter. Craft, build, and brave the elements while uncovering the mystery behind the never-ending frost.',
    longDescription: 'In Frostbound, you must survive in a world where winter never ends. Build shelters, craft tools, and hunt for food while managing your body temperature and resources. As you explore the frozen wilderness, you\'ll discover clues about what caused the eternal winter and potentially find a way to reverse it. With procedurally generated maps and dynamic weather events, no two playthroughs are ever the same.',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1000',
    heroImage: 'https://images.unsplash.com/photo-1544084944-15061eb5c2c3?q=80&w=2000',
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    releaseDate: 'December 10, 2024',
    developer: 'PixelForge Studios',
    publisher: 'PixelForge Studios',
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Survival', 'Adventure', 'Open World'],
    featured: false,
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-6600 or AMD Ryzen 3 3100',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1050 or AMD Radeon RX 560',
      storage: '40 GB available space'
    },
    recommendedRequirements: {
      os: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-8700K or AMD Ryzen 5 5600X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 2060 or AMD Radeon RX 6600',
      storage: '40 GB SSD'
    },
    screenshots: [
      { id: 1, image: 'https://images.unsplash.com/photo-1486718448742-163732dae78e?q=80&w=1400', caption: 'Survive in harsh winter environments' },
      { id: 2, image: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80&w=1400', caption: 'Build shelters to protect against the cold' },
      { id: 3, image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1400', caption: 'Hunt for food in the frozen wilderness' },
      { id: 4, image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1400', caption: 'Uncover the mystery of the eternal winter' },
    ],
    features: [
      'Dynamic survival mechanics',
      'Procedurally generated world',
      'Realistic crafting and building systems',
      'Weather system that affects gameplay',
      'Day/night cycle with increased dangers at night',
      'Narrative-driven mystery to solve'
    ]
  },
  {
    id: 5,
    title: 'Velocity Overdrive',
    description: 'A high-octane racing game featuring futuristic vehicles with unique abilities. Race through gravity-defying tracks across exotic alien worlds.',
    longDescription: 'Velocity Overdrive pushes the boundaries of racing games with anti-gravity vehicles capable of speeds exceeding 1000 mph. Choose from 15 different racers, each with unique vehicles and special abilities that can turn the tide of a race. Compete in the Interstellar Racing League across 12 exotic planets, each with multiple tracks featuring impossible geometry, environmental hazards, and shortcuts waiting to be discovered.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000',
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    releaseDate: 'April 23, 2025',
    developer: 'PixelForge Studios',
    publisher: 'PixelForge Studios',
    platforms: ['PC', 'PS5', 'Xbox Series X', 'Nintendo Switch'],
    genres: ['Racing', 'Arcade'],
    featured: false,
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i3-8100 or AMD Ryzen 3 3100',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 950 or AMD Radeon RX 560',
      storage: '30 GB available space'
    },
    recommendedRequirements: {
      os: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-10600K or AMD Ryzen 5 3600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 2060 or AMD Radeon RX 5700',
      storage: '30 GB SSD'
    },
    screenshots: [
      { id: 1, image: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=1400', caption: 'Race at breakneck speeds on futuristic tracks' },
      { id: 2, image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=1400', caption: 'Customize your vehicle with performance upgrades' },
      { id: 3, image: 'https://images.unsplash.com/photo-1545071856-d3a42dae6630?q=80&w=1400', caption: 'Navigate through gravity-defying tracks' },
      { id: 4, image: 'https://images.unsplash.com/photo-1615723093586-1095fab9ab2a?q=80&w=1400', caption: 'Compete against skilled racers from across the galaxy' },
    ],
    features: [
      'Anti-gravity racing mechanics',
      '15 unique racers with special abilities',
      '12 exotic planets with multiple tracks',
      'Single-player campaign mode',
      'Online multiplayer with up to 12 players',
      'Vehicle customization and upgrade system'
    ]
  },
  {
    id: 6,
    title: 'Whispers in the Dark',
    description: 'A psychological horror game that adapts to your fears. Explore a mansion that changes based on your choices and reactions, creating a personalized nightmare.',
    longDescription: 'Whispers in the Dark is a revolutionary horror experience that learns what scares you and adapts accordingly. The game uses advanced AI to monitor your reactions and choices, transforming the haunted Blackwood Mansion to exploit your specific fears. With multiple interconnected storylines and endings, plus a unique fear profile generated for each player, this game offers unprecedented replayability for horror enthusiasts.',
    image: 'https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=1000',
    heroImage: 'https://images.unsplash.com/photo-1631171426666-f1c77ddca918?q=80&w=2000',
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    releaseDate: 'October 31, 2024',
    developer: 'PixelForge Studios',
    publisher: 'PixelForge Studios',
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Horror', 'Psychological', 'Adventure'],
    featured: false,
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-7500 or AMD Ryzen 3 3300X',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1060 or AMD Radeon RX 580',
      storage: '50 GB available space'
    },
    recommendedRequirements: {
      os: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-9700K or AMD Ryzen 7 3700X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 2070 or AMD Radeon RX 6700 XT',
      storage: '50 GB SSD'
    },
    screenshots: [
      { id: 1, image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1400', caption: 'Explore the haunted Blackwood Mansion' },
      { id: 2, image: 'https://images.unsplash.com/photo-1595759713052-099d46e3d4d1?q=80&w=1400', caption: 'Confront your personalized fears' },
      { id: 3, image: 'https://images.unsplash.com/photo-1633331744848-43d5bbb346bb?q=80&w=1400', caption: 'Solve puzzles to uncover the mansion\'s dark secrets' },
      { id: 4, image: 'https://images.unsplash.com/photo-1594612596071-94c7b62a3517?q=80&w=1400', caption: 'Survive encounters with nightmarish entities' },
    ],
    features: [
      'Adaptive horror system that learns your fears',
      'Dynamic environment that changes based on player choices',
      'Multiple interconnected storylines',
      'Psychological profiling system',
      'Advanced sound design for immersive scares',
      'Multiple endings based on your choices and fear responses'
    ]
  }
];

export default games; 