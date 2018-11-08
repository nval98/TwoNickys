// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var all_questions = [{
question_string:"INXS singer Michael Hutchence says “trumpet” just before this instrument kicks in on “New Sensation”.",
 choices: {
    correct:"Saxophone",
    wrong: ["Clarinet","Trumpet"]
  }
}, {
  question_string:"Finish The Lyric:  “Young teacher, the subject of…”",
  choices: {
    correct:"A schoolgirl’s fantasy",
    wrong: ["A special report on stupidity","The student’s ridicule"]
  }
}, {
question_string:"Finish The Lyric:  “Janie’s got a gun…”",
  choices: {
    correct:"Janie’s got a gun",
    wrong: ["But she’s out of bullets","And it’s aimed at you!"]
}
}, {
  question_string:"Finish The Lyric:  “Tommy used to work on the docks…”",
  choices: {
    correct:"Union’s been on strike",
    wrong: ["Now he’s sleepin’ with the fishes","Now he just watches the clocks"]
  }
}, {
question_string:"Finish The Lyric:  “ Welcome back friends to the show…”",
  choices: {
    correct:"That never ends",
    wrong: ["And Tell segment of class","About nothing at all"]
  }
}, {
  question_string:"Finish The Lyric:  “ Anthony works in a grocery store…”",
  choices: {
    correct:"Saving his pennies for someday",
    wrong: ["Squeezin’ the customer’s melons","Counting down his days to the grave"]
  }
}, {
question_string:"Finish The Lyric:  “If you see a sign at the side of the road that says…”",
  choices: {
    correct:"15 Miles to The Love Shack!",
    wrong: ["Hey Stupid! – That Means You!, ","Slam on your brakes – Do It!"]
}
}, {
  question_string:"Finish The Lyric:  “There’s something wrong with the world today…”",
  choices: {
    correct:"I don’t know what it is",
    wrong: ["Its full of idiots","Its run by greedy money men"]
  }
}, {
question_string:"Finish The Lyric:  “I’m the man in the box…”",
  choices: {
    correct:"Buried in my shit!",
    wrong: ["Please let me out!, ","Boy, It’s dark in here!"]
  }
}, {
question_string:"Finish The Lyric:  “If you leave me now…”",
  choices: {
    correct:"You’ll take away the biggest part of me",
    wrong: ["I’ll be happier that I’ve ever been","You can take all your crap away from here"]
}
}, {
  question_string:"Finish The Lyric:  “ Sentimental fool am I…”",
  choices: {
    correct:"To hear an old love song and wanna cry",
    wrong: ["To think you’ll love me after I die","To think I’ll get you back from another guy"]
}
}, {
  question_string:"The first commercial aired on TV pitched what product?",
  choices: {
    correct:"Watches",
    wrong: ["Laundry Soap","Cigarettes"]
  }
}, {
  question_string:"The first TV show broadcast on the internet was:",
  choices: {
    correct:"The Drew Carey Show",
    wrong: ["Friends","Melrose Place"]
  }
}, {
question_string:"One of these low rated first season shows didn’t get an Emmy:",
  choices: {
    correct:"Seinfeld",
    wrong: ["Cheers","30 Rock"]
  }
}, {
question_string:"Which house was firebombed during the filming of “Lethal Weapon”?",
  choices: {
    correct:"The Brady Bunch",
    wrong: ["Partridge Family","Bewitched"]
}
}, {
  question_string:"Sonny Crockett’s alligator on “Miami Vice” was named:",
  choices: {
    correct:"Elvis",
    wrong: ["Mozart","Ringo"]
  }
}, {
question_string:"This late night talk show host’s mother helped develop The Peace Corps.",
  choices: {
    correct:"Conan O’Brien",
    wrong: ["Jay Leno","David Letterman"]
}
}, {
  question_string:"This country enforces a TV Free Day to encourage family interaction.",
  choices: {
    correct:"Iceland",
    wrong: ["Sweden","Portugal"]
  }
}, {
question_string:"“Who Wants to be a Millionaire’s” first Million Dollar winner was:",
  choices: {
    correct:"An IRS Agent",
    wrong: ["Recently homeless","An Investment Banker"]
  }
}, {
  question_string:"All but one of these shows were nominated for Best Comedy Emmy all 11 seasons of their run.",
  choices: {
    correct:"Happy Days",
    wrong: ["M*A*S*H*","Cheers"]
  }
}, {
question_string:"All but one of these actors spent time behind bars",
  choices: {
    correct:"Mr. T",
    wrong: ["Tim Allen","Charles Dutton"]
  }
}, {
  question_string:"This band played a homecoming dance at a Michigan High School",
  choices: {
    correct:"Kiss",
    wrong: ["Cheap Trick","Van Halen"]
  }
}, {
question_string:"This album was first to be certified Platinum (1 Million copies).",
  choices: {
    correct:", Eagles Greatest Hits",
    wrong: ["Dark Side of the Moon","Thriller"]
  }
}, {
  question_string:"This musician scaled the wall at Graceland, only to be escorted off the premises.",
  choices: {
    correct:"Bruce Springsteen",
    wrong: ["John Mellencamp","Paul Simon"]
  }
}, {
question_string:"Who had the only album with five #1 hits?",
  choices: {
    correct:"Michael Jackson",
    wrong: ["The Beach Boys","The Beatles"]
   }
    //END OF LEVEL ONE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}, {
  question_string:"Who released their “Bloodshot” album on red vinyl?",
  choices: {
    correct:"J. Geils",
    wrong: ["Sammy Hagar","Humble Pie"]
  }
}, {
question_string:"Dexter Holland, lead singer of The Offspring, is actually a:",
  choices: {
    correct:"Molecular Biologist and Pilot",
    wrong: ["Investment Banker and Chef","Architect and Car Designer"]
  }
}, {
question_string:"Where did the name Lynrd Skynrd come from?",
  choices: {
    correct:"Their gym teacher",
    wrong: ["A drunken rhyming session","A phone book"]
}
}, {
  question_string:"Andrea True singer of “More, More, More” was also a:",
  choices: {
    correct:"Porn Star",
    wrong: ["Stay at home mom","Backup Singer"]
  }
}, {
question_string:"Who sang backup on Carly Simon’s “You’re So Vain”?",
  choices: {
    correct:"Mick Jagger",
    wrong: ["James Taylor","Paul Simon"]
}
}, {
  question_string:"Which SNL star was an original member of Steely Dan?",
  choices: {
    correct:"Chevy Chase",
    wrong: ["Phil Hartman","Dan Ackroyd"]
  }
}, {
question_string:"Steely Dan got its name from:",
  choices: {
    correct:"A sex toy",
    wrong: ["An old warship","A no-nonsense professor"]
  }
}, {
  question_string:"The band O.K. Go is known for its inventive:",
  choices: {
    correct:"Videos",
    wrong: ["Songs","Stage Shows"]
  }
}, {
question_string:"Michael McDonald has sung backup for each of these bands except",
  choices: {
    correct:"Chicago",
    wrong: ["Steely Dan","Doobie Brothers"]
}
}, {
  question_string:"All of the following “Seinfeld” characters won Emmy’s except:",
  choices: {
    correct:"Jason Alexander",
    wrong: ["Julia Louis-Dreyfus","Michael Richards"]
  }
}, {
question_string:"All but one of these actresses auditioned for the part of Elaine on “Seinfeld”",
  choices: {
    correct:"Ellen DeGeneres",
    wrong: ["Rosie O’Donnell","Mariska Hargitay"]
  }
}, {
question_string:"All but one of these actors auditioned for the part of George on “Seinfeld”.",
  choices: {
    correct:"Bob Balaban",
    wrong: ["Danny DeVito","Nathan Lane"]
}
}, {
  question_string:"All but one of these actors was considered for the role of The President on “The West Wing”",
  choices: {
    correct:"Harrison Ford",
    wrong: ["Sidney Poitier","Alan Alda"]
  }
}, {
question_string:"When she was 4 years old, which singer appeared on “The Cosby Show” as Rudy’s friend?",
  choices: {
    correct:"Alicia Keys",
    wrong: ["Rhianna","Whitney Houston"]
}
}, {
  question_string:"Which “Sopranos” character actually served time in prison?",
  choices: {
    correct:"Paulie Walnuts",
    wrong: ["Big Pussy","Bobby Baccala"]
  }
}, {
question_string:"Which of the following “Dexter” characters was a former cop?",
  choices: {
    correct:"Angel Batista",
    wrong: ["James Doakes","Joey Quinn"]
  }
}, {
  question_string:"On “Star Trek”, Captain Kirk never said:",
  choices: {
    correct:"Beam me up Scotty",
    wrong: ["Scotty, beam us up","Beam me up"]
  }
}, {
question_string:"Which “M*A*S*H*” character didn’t serve in the Army in Korea?",
  choices: {
    correct:"Corporal Klinger",
    wrong: ["Hawkeye Pierce","Father Mulcahy"]
}
}, {
  question_string:"Which yet unknown actor didn’t guest star on “M*A*S*H*”?",
  choices: {
    correct:"Henry Winkler",
    wrong: ["John Ritter","Andrew Dice Clay"]
  }
}, {
question_string:"Which comedian was considered for the Trapper John character in “M*A*S*H*”?",
  choices: {
    correct:"Robert Klein",
    wrong: ["George Carlin","Albert Brooks"]
  }
}, {
question_string: "Which “ER” celebrity guest star didn’t win an Emmy for their role?",
  choices: {
    correct:"John Stamos",
    wrong: ["Sally Field","Ray Liotta"]
}
}, {
  question_string:"Which actor wasn’t considered for the role of Archie Bunker on “All in the Family”?",
  choices: {
    correct:"Jerry Stiller",
    wrong: ["Jackie Gleason","Tom Bosley"]
  }
}, {
question_string:"Which actor wasn’t considered for the role of Frasier Crane on “Frasier”?",
  choices: {
    correct:"Ed O’Neill",
    wrong: ["John Lithgow","William Devane"]
}
}, {
  question_string:"Which actress wasn’t considered for the role of Rebecca Howe on “Cheers”?",
  choices: {
    correct:"Wendie Malick",
    wrong: ["Sharon Stone","Kim Cattrall"]
  }
}, {
question_string:"AC/DC got their name after seeing it on this:",
  choices: {
    correct:"Sewing machine",
    wrong: ["Electrical manual","Generator"]
  }  
//END OF LEVEL TWO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}, {
  question_string:"Gregg Allman wrote the song Melissa after hearing that name in:",
  choices: {
    correct:"A grocery store",
    wrong: ["Another song","A bar"]
  }
}, {
question_string:"One of these bands didn’t grace the cover of Time magazine.",
  choices: {
    correct:"Led Zeppelin",
    wrong: ["The Beatles","The Rolling Stones"]
}
}, {
  question_string:"The Bee Gees got their name from:",
  choices: {
    correct:"A DJ and Promoter with the initials B.G.",
    wrong: ["Brothers Gibb","A rhyme"]
  }
}, {
question_string:"Ringo Starr’s original career choice was:",
  choices: {
    correct:"Hairdresser",
    wrong: ["Carpenter","Jewelry maker"]
  }
}, {
question_string:"Chuck Berry’s original career choice was:",
  choices: {
    correct:"Photographer",
    wrong: ["Hairdresser","Club Owner"]
}
}, {
  question_string:"Tom Scholz of the band Boston has:",
  choices: {
    correct:"34 patents",
    wrong: ["34 guitars","34 vintage cars"]
  }
}, {
question_string:"David Bowie’s first hit was co-written with:",
  choices: {
    correct:"John Lennon",
    wrong: ["Mick Jagger","Brian Jones"]
}
}, {
  question_string:"Which guitarist recorded with David Bowie on “Let’s Dance”, but didn’t tour with him?",
  choices: {
    correct:"Stevie Ray Vaughn",
    wrong: ["Eric Clapton","Nile Rogers"]
  }
}, {
question_string:"Who sang back up on Pink Floyd’s “The Wall”?",
  choices: {
    correct:"Toni Tennille",
    wrong: ["Marianne Faithful","Carly Simon"]
  }
}, {
  question_string:"Sheryl Crow sang backup for this artist.",
  choices: {
    correct:"Michael Jackson",
    wrong: ["Jackson Browne","Don Henley"]
  }
}, {
question_string:"Before joining NWA, Ice Cube studied:",
  choices: {
    correct:"Architectural Drafting",
    wrong: ["Electrical Engineering","Computer Science"]
}
}, {
  question_string:"Def Leppard’s first concert was attended by:",
  choices: {
    correct:"6 people",
    wrong: ["60 people","600 people"]
  }
}, {
question_string:"All but one of the following artists died at the same age in the same London apartment.",
  choices: {
    correct:"Jimi Hendrix",
    wrong: ["Keith Moon","Cass Elliot"]
  }
}, {
question_string:"Before he became famous, Eminem wanted to be a:",
  choices: {
    correct:"Comic book artist",
    wrong: ["Race car driver","Concert promoter"]
}
}, {
  question_string:"This band went 44 years without a lineup change:",
  choices: {
    correct:"The Four Tops",
    wrong: ["The Temptations","Smokey Robinson and the Miracles"]
  }
}, {
question_string:"Motown founder Berry Gordy was not one of these:",
  choices: {
    correct:"Big Band leader",
    wrong: ["Boxer","Ford assembly line worker"]
}
}, {
  question_string:"Guns and Roses “Sweet Child of Mine” is about which musician’s daughter?",
  choices: {
    correct:"Don Everly",
    wrong: ["Herb Alpert","Brian Wilson"]
  }
}, {
question_string:"One of Billy Crystal’s babysitters was:",
  choices: {
    correct:"Billie Holliday",
    wrong: ["Ella Fitzgerald","Aretha Franklin"]
  }
}, {
  question_string:"In the early 70’s, Billy Joel tried to commit suicide by:",
  choices: {
    correct:"Drinking furniture polish",
    wrong: ["Slashing his wrists","Crashing his motorcycle"]
  }
}, {
question_string:"Elton John auditioned for and was rejected by:",
  choices: {
    correct:"King Crimson",
    wrong: ["The Moody Blues","Arthur Brown"]
}
}, {
  question_string:"Jon Bon Jovi’s mother was not one of these:",
  choices: {
    correct:"Backup singer for Elvis",
    wrong: ["Playboy Bunny","U.S. Marine"]
  }
}, {
question_string:"Madonna played this instrument in a NYC punk band.",
  choices: {
    correct:"Drums",
    wrong: ["Guitar","Sax"]
  }
}, {
question_string:"The Australian government played this music to discourage loitering in downtown Sydney.",
  choices: {
    correct:"Barry Manilow",
    wrong: ["Milli Vanilli","Wham"]
}
}, {
  question_string:"This artist was once signed to Motown.",
  choices: {
    correct:"Meatloaf",
    wrong: ["Ozzy Osborne","Alice Cooper"]
  }
}, {
question_string:"This musician was offered the Brad Pitt role in “Thelma and Louise”.",
  choices: {
    correct:"John Mellencamp",
    wrong: ["Jon Bon Jovi","Tom Petty"]
  }
//END OF LEVEL THREE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}, {
  question_string:"Stevie Nicks worked at this fast food joint.",
  choices: {
    correct:"Bob’s Big Boy",
    wrong: ["Long John Silver’s","In and Out Burger"]  
  }
}, {
question_string:"One of Tom Petty’s guitar teachers was:",
  choices: {
    correct:"Don Felder",
    wrong: ["Glen Frey","Joe Walsh"]
  }
}, {
  question_string:"Queen’s guitarist Brian May has a degree in:",
  choices: {
    correct:"Astrophysics",
    wrong: ["Biochemistry","Cell Biology"]
  }
}, {
question_string:"This album was recorded in a former Gestapo headquarters.",
  choices: {
    correct:"Rolling Stones - Exile on Main Street",
    wrong: ["Black Sabbath - Paranoid","Judas Priest - Screaming For Vengeance"]
}
}, {
  question_string:"One of the camera operators for the Stones “Gimme Shelter” film was:",
  choices: {
    correct:"George Lucas",
    wrong: ["Steven Spielberg","Martin Scorsese"]
  }
}, {
question_string:"Sex Pistols Sid Vicious overdosed on heroin given to him by his:",
  choices: {
    correct:"Mother",
    wrong: ["Manager","Brother"]
  }
}, {
question_string:"The third floor of Rod Stewart’s LA home is set aside for his:",
  choices: {
    correct:"Model trains",
    wrong: ["Soccer field","Memorabilia collection"]
}
}, {
  question_string:"This singer repeatedly failed her drivers test.",
  choices: {
    correct:"Taylor Swift",
    wrong: ["Jessica Simpson","Britney Spears"]
  }
}, {
question_string:"U2’s first gig had this many people in attendance:",
  choices: {
    correct:"9",
    wrong: ["90","900"]
}
}, {
  question_string:"REM’s “Man on the Moon” is about which comedian?",
  choices: {
    correct:"Andy Kaufman",
    wrong: ["Robin Williams","Sam Kinison"]
  }
}, {
question_string:"REM’s “What’s the Frequency Kenneth” is about which news man’s mugging?",
  choices: {
    correct:"Dan Rather",
    wrong: ["Mike Wallace","Brian Williams"]
  }
}, {
  question_string:"All but one of these R&B musicians quit music to become a Minister.",
  choices: {
    correct:"Barry White",
    wrong: ["Al Green","Little Richard"]
  }
}, {
  question_string:"Which show was the first to be released on DVD?",
  choices: {
    correct:"X-Files",
    wrong: ["The Cosby Show","Everybody Loves Raymond"]
  }
}, {
question_string:"The first toy advertised on TV.",
  choices: {
    correct:"Mr. Potato Head",
    wrong: ["Shrinky Dinks","Lincoln Logs"]
  }
}, {
question_string:"Which comedian was considered for the lead in “House M.D.”?",
  choices: {
    correct:"Dennis Leary",
    wrong: ["John Cleese","Dan Ackroyd"]
}
}, {
  question_string:"The opening line for Megadeth’s “Sweating Bullets” is:",
  choices: {
    correct:"Hello, it’s me again!",
    wrong: ["Here I come again!","Sweating bullets!"]
  }
}, {
question_string:"The music that plays during Final Jeopardy is called:",
  choices: {
    correct:"Think",
    wrong: ["Final Jeopardy Theme","Time to Think"]
}
}, {
  question_string:"Before hiring Johnny Carson for “The Tonight Show”, NBC considered:",
  choices: {
    correct:"Groucho Marx",
    wrong: ["Jackie Gleason","Regis Philbin"]
  }
}, {
question_string:"Merv Griffin created all but one of the following game shows:",
  choices: {
    correct:"Match Game",
    wrong: ["Jeopardy!","Wheel of Fortune"]
  }
}, {
  question_string:"Which of these made up foods didn’t make it to television?",
  choices: {
    correct:"Cricket Candies",
    wrong: ["Chocolate Salty Balls","Spaghetti Tacos"]
  }
}, {
question_string:"Pierce Brosnan got his show biz start as a:",
  choices: {
    correct:"Circus Fire Eater",
    wrong: ["Talent Agent","Voice Over Actor"]
}
}, {
  question_string:"Which Led Zeppelin song was misspelled?",
  choices: {
    correct:"Southbound Suarez",
    wrong: ["Bron yr Aur","Bonzo’s Montreux"]
  }
}, {
question_string:"“COPS” was filmed in all but one of these countries:",
  choices: {
    correct:"Canada",
    wrong: ["Hong Kong","Russia"]
  }
}, {
question_string:" Mötley Cruë’s “Kickstart My Heart” is based on which band members near death episode?",
  choices: {
    correct:"Nikki Sixx",
    wrong: ["Tommy Lee","Vince Neil"]
}
}, {
  question_string:"Which one of these short lived shows weren’t real:",
  choices: {
    correct:"Huh?",
    wrong: ["Testees","Whoops!"]
  }
}, {
question_string:"Which game show host married one of the contestants",
  choices: {
    correct:"Richard Dawson",
    wrong: ["Bert Convy","Pat Sajak"]
}
}, {
  question_string:"The first celebrity to star as themselves on “The Simpsons”.",
  choices: {
    correct:"Tony Bennett",
    wrong: ["David Lee Roth","Andrew Dice Clay"]
  }
}, {
question_string:"Which actor was considered for the Mike Brady role on “The Brady Bunch”?",
  choices: {
    correct:"Gene Hackman",
    wrong: ["Jon Voight","Paul Newman"]
  }
}, {
  question_string:"Which actress was considered for the role of Maryanne on “Gilligan’s Island”?",
  choices: {
    correct:"Raquel Welch",
    wrong: ["Ann Margaret","Sharon Tate"]
  }
}, {
question_string:"Which actor was considered for the role of Luke Duke on “Dukes of Hazzard”? ",
  choices: {
    correct:"Dennis Quaid",
    wrong: ["Burt Reynolds","Jeff Bridges"]
}
}, {
  question_string:"Which actor was considered for the role of Jack Tripper on “Three’s Company”?",
  choices: {
    correct:"Billy Crystal",
    wrong: ["Ted Danson","Martin Short"]
  }
}, {
question_string:"Which actress was considered for a role on “Charlie’s Angels”?",
  choices: {
    correct:"Kathy Lee Gifford",
    wrong: ["Susan Anton","Stephanie Powers"]
  }
}, {
question_string:"Which actor was considered for the role of Gob Bluth on “Arrested Development”?",
  choices: {
    correct:"Rainn Wilson",
    wrong: ["Steve Carell","Neil Patrick Harris"]
}
}, {
  question_string:"Which actor was considered for the role of Alex P. Keaton on “Family Ties”?",
  choices: {
    correct:"Matthew Broderick",
    wrong: ["Scott Baio","Emilio Estevez"]
  }
}, {
question_string:"Who was considered for the role of Geordi LaForge on “Star Trek: The Next Generation”?",
  choices: {
    correct:"Reggie Jackson",
    wrong: ["Randy Jackson","Michael Jackson"]
}
}, {
  question_string:"One of the following items wasn’t an accessory that Batman had.",
  choices: {
    correct:"Bathascaphe",
    wrong: ["Batcilloscope","Batarang"]
  }
}, {
question_string:"Which SNL star designed the logos for the bands Poco and America?",
  choices: {
    correct:"Phil Hartman",
    wrong: ["John Belushi","Gilda Radner"]
  }
}, {
  question_string:"Gabe Kaplan of “Welcome Back Kotter” retired from acting and became a:",
  choices: {
    correct:"Pro Poker Player",
    wrong: ["High School Teacher","Air Traffic Controller"]
  }
}, {
question_string:"David Lander of “Laverne and Shirley” retired from acting and became:",
  choices: {
    correct:"A Baseball Scout",
    wrong: ["An Opera Singer","A TV Director"]
}
}, {
  question_string:"James Arness of “Gunsmoke” and Peter Graves of “Mission Impossible” are:",
  choices: {
    correct:"Brothers",
    wrong: ["Step brothers","Cousins"]
  }
}, {
question_string:"The original title for “Friends” was not one of these:",
  choices: {
    correct:"20 Somethings",
    wrong: ["Insomnia Café","Friends Like Us"]
  }
}, {
question_string:"The original title for “The Honeymooners” was:",
  choices: {
    correct:"The Beast",
    wrong: ["The Walkup","The Couple Next Door"]
  }
}, {
  question_string:"“The Honeymooners” lasted for this many episodes:",
  choices: {
    correct:"39",
    wrong: ["69","99"]
  }
}, {
question_string:"Which of the following actors was considered for the role of “Dexter”?",
  choices: {
    correct:"Tom Cruise",
    wrong: ["Kevin Costner","Willem Dafoe"]
}
}, {
  question_string:"The first sitting President to appear on “The Tonight Show” was:",
  choices: {
    correct:"Barack Obama",
    wrong: ["Bill Clinton","George Bush"]
  }
}, {
question_string:"Opening Lines: “Please, please tell me now.”",
  choices: {
    correct:"Duran Duran",
    wrong: ["The Beatles","James Brown"]
  }
}, {
  question_string:"The album art for this band’s debut album consists of a lion’s head made up of faces:",
  choices: {
    correct:"Santana",
    wrong: ["The Faces","Iron Butterfly"]
  }
}, {
question_string:"Beatles Opening Lines: “When I wake up in the morning.”",
  choices: {
    correct:"I’m Only Sleeping",
    wrong: ["Good Morning, Good Morning","Good Day Sunshine "]
}
}, {
  question_string:"Matthew Weiner wrote the pilot script for “Mad Men” while working on:",
  choices: {
    correct:"Becker",
    wrong: ["Dawson’s Creek","The Sopranos"]
  }
}, {
question_string:"One of these comedians auditioned for “Mad Men”.",
  choices: {
    correct:"Sarah Silverman",
    wrong: ["Brett Butler","Janeane Garafolo"]
  }
}, {
question_string:"Which actor was supposed to replace Don Johnson after Season 2 of “Miami Vice”?",
  choices: {
    correct:"Mark Harmon",
    wrong: ["Jeff Bridges","Nick Nolte"]
}
}, {
  question_string:"All except one of the following wrote songs and acted on “Miami Vice”:",
  choices: {
    correct:"Rick Springfield",
    wrong: ["Phil Collins","Glenn Frey"]
  }
}, {
question_string:"All but one of the following titles was considered for “The Shield”.",
  choices: {
    correct:"Mackie",
    wrong: ["The Barn","Rampart"]
}
}, {
  question_string:"This radio personality appeared as a suspect in police lineups on “The Shield”.",
  choices: {
    correct:"Mancow",
    wrong: ["Anthony Cumia","Howard Stern"]
  }
}, {
question_string:"Rick Springfield attempt at suicide was thwarted by this:",
  choices: {
    correct:"The noose broke",
    wrong: ["The gun misfired","A cop talked him off the bridge"]
  }
}, {
  question_string:"Misheard Lyrics: “Scuse me while I kiss this guy.”",
  choices: {
    correct:"Jimi Hendrix",
    wrong: ["James Taylor","Elton John"]
  }
}, {
question_string:"Misheard Lyrics:  “There’s a bathroom on the right.”",
  choices: {
    correct:"Creedence Clearwater Revival",
    wrong: ["ZZ Top","Prince"]
}
}, {
  question_string:"I’m In The Band: Neal Schon",
  choices: {
    correct:"Journey",
    wrong: ["Air Supply","Jefferson Starship"]
  }
}, {
question_string:"Artist’s Real Names: Vincent Furnier",
  choices: {
    correct:"Alice Cooper",
    wrong: ["Marilyn Manson","Bono"]
  }
}, {
question_string:"I’m In The Band: Geoff Tate",
  choices: {
    correct:"Queensryche",
    wrong: ["Warrant","Extreme"]
  }
}, {
  question_string:"I’m In The Band:  Elliot Easton",
  choices: {
    correct:"The Cars",
    wrong: ["Heart,","Devo"]
  }
}, {
question_string:"I Was In The Band:  Peter Cetera",
  choices: {
    correct:"Chicago",
    wrong: ["Average White Band","Badfinger"]
}
}, {
  question_string:"I Was In The Band:  Lionel Ritchie",
  choices: {
    correct:"The Commodores",
    wrong: ["Atlantic Starr","Brick"]
  }
}, {
question_string:"Artist’s Real Names:  Stuart Goddard",
  choices: {
    correct:"Adam Ant",
    wrong: ["Flea","The Edge"]
  }
}, {
  question_string:"Artist’s Real Names:  Stanley Burrell",
  choices: {
    correct:"MC Hammer",
    wrong: ["Andre 3000","Xibit"]
  }
}, {
question_string:"One Of Our Songs:  Stone Temple Pilots",
  choices: {
    correct:"Plush",
    wrong: ["Jeremy","Empire"]
}
}, {
  question_string:"I Play This Instrument:  Joey Kramer",
  choices: {
    correct:"Drums",
    wrong: ["Saxophone","Bass Guitar"]
  }
}, {
question_string:"I Was In The Band:  Charlotte Caffey",
  choices: {
    correct:"The GoGo’s",
    wrong: ["The Runaways","The Bangles"]
  }
}, {
question_string:"One Of Our Songs:  Soundgarden",
  choices: {
    correct:"Black Hole Sun",
    wrong: ["Epic","Sex Type Thing"]
}
}, {
  question_string:"Sheila E’s father played percussion in this band:",
  choices: {
    correct:"Santana",
    wrong: ["Tito Puente","War"]
  }
}, {
question_string:"“Africa” is a song by:",
  choices: {
    correct:"Toto",
    wrong: ["Earth, Wind and Fire"," Kool and the Gang"]
}
}, {
  question_string:"“Jungle Boogie” is a song by:",
  choices: {
    correct:"Kool and the Gang",
    wrong: ["Funkadelic","Bootsy Collins"]
  }
}, {
question_string:"Lady Gaga’s real name is:",
  choices: {
    correct:"Stefani Germanotta",
    wrong: ["Louise Ciccone","Concetta Franconero"]
  }
}, {
  question_string:"One Of Our Songs:  The Cowsills",
  choices: {
    correct:"Hair",
    wrong: ["Skin","Eyes"]
  }
}, {
question_string:"I Was In The Band: Graham Nash",
  choices: {
    correct:"The Hollies",
    wrong: ["Dave Clark Five","The Moody Blues"]
}
}, {
  question_string:"Jimi Hendrix was this before he became famous:",
  choices: {
    correct:"Army Paratrooper",
    wrong: ["Air Force Pilot","Marine"]
  }
}, {
question_string:"The opening guitar riff on “Layla” is played by:",
  choices: {
    correct:"Duane Allman",
    wrong: ["Billy Gibbons","Eric Clapton"]
  }
}, {
question_string:"What does the B in BA stand for in Mr. T’s character on “The A-Team”?",
  choices: {
    correct:"Bosco",
    wrong: ["Butterbean","Basil"]
}
}, {
  question_string:"Who did the theme for “Pee Wee’s Playhouse”?",
  choices: {
    correct:"Cindi Lauper",
    wrong: ["Ani DiFranco","Belinda Carlisle"]
  }
}, {
question_string:"Who did “The Big Bang Theory’s” theme song?",
  choices: {
    correct:"Bare Naked Ladies",
    wrong: ["Husker Dü","Coldplay"]
}
}, {
  question_string:"Who did the theme for “Freaks & Geeks”?",
  choices: {
    correct:"Joan Jett",
    wrong: ["Pat Benatar","Lita Ford"]
  }
}, {
question_string:"Who did the theme for “That 70’s Show”?",
  choices: {
    correct:"Cheap Trick",
    wrong: ["The Knack","Kiss"]
  }
}, {
  question_string:"Which “Big Bang Theory” cast member has a PhD?",
  choices: {
    correct:"Amy",
    wrong: ["Sheldon","Leonard"]
  }
}, {
question_string:"“The Big Bang Theory’s” Professor Proton was played by:",
  choices: {
    correct:"Bob Newhart",
    wrong: ["Howard Hesseman","Bryan Cranston"]
}
}, {
  question_string:"Which actor was not considered to replace William Petersen on “CSI”?",
  choices: {
    correct:"Don Johnson",
    wrong: ["John Malkovich","Kurt Russell"]
  }
}, {
question_string:"Of the 39 episodes of “The Honeymooners”, how many times did Ralph Kramden say “Baby, you’re the greatest?”",
  choices: {
    correct:"9",
    wrong: ["19","39"]
  }
}, {
question_string:"This actor had to surrender 70% of his first three season's earnings to the IRS for back taxes?",
  choices: {
    correct:"Will Smith",
    wrong: ["Ted Danson","Tracy Morgan"]
}
}, {
  question_string:"Which artist is not in a band with two or more brothers?",
  choices: {
    correct:"Tom Johnston",
    wrong: ["Bruce Johnson","Brian Johnson"]
  }
}, {
question_string:"This musical accessory popularized by Peter Frampton and Joe Walsh is called a:",
  choices: {
    correct:"Talk Box",
    wrong: ["Voice Box","Wah Box"]
}
}, {
  question_string:"Duane Allman played slide guitar using this:",
  choices: {
    correct:"A prescription bottle",
    wrong: ["Part of a motorcycle handlebar","A metal finger splint"]
  }
}, {
question_string:"One of these isn’t a Joe Walsh solo album:",
  choices: {
    correct:"Barnstormer",
    wrong: ["The Smoker You Are, The Player You Get","So What"]
  }
}, {
  question_string:"One of these musicians didn’t die in a plane crash:",
  choices: {
    correct:"Stevie Ray Vaughan",
    wrong: ["Ronnie VanZant","Buddy Holly"]
  }
}, {
question_string:"One of these bands didn’t record a song titled “One”:",
  choices: {
    correct:"AC/DC",
    wrong: ["Three Dog Night","Metallica"]
}
}, {
  question_string:"Steveland Morris is the real name of which artist?",
  choices: {
    correct:"Stevie Wonder",
    wrong: ["Stevie Nicks","Steve Vai"]
  }
}, {
question_string:"The working title for The Beatles “Yesterday” was:",
  choices: {
    correct:"Scrambled Eggs",
    wrong: ["Ham and Eggs","Broken Eggs"]
  }
}, {
question_string:"One of these isn’t the name of a band.",
  choices: {
    correct:"Garage",
    wrong: ["Can","Television"]
}
}, {
  question_string:"This drummer’s father was instrumental in forming The CIA:",
  choices: {
    correct:"Stewart Copeland",
    wrong: ["Carl Palmer","Dennis Wilson"]
  }
}, {
question_string:"Which of “The Ramones” is originally named Ramone?",
  choices: {
    correct:"None of them",
    wrong: ["All seven","Only two"]
}
}, {
  question_string:"One of these was not an early name “Nirvana” played under.",
  choices: {
    correct:"Woof!",
    wrong: ["Pen Cap Chew","Ted, Ed, Fred"]
  }
}, {
question_string:"How many drummers did “Nirvana” go through before Dave Grohl joined the band?",
  choices: {
    correct:"Five",
    wrong: ["One","None"]
  }
//END OF LEVEL FOUR>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  
}, {
  question_string:"Which band had 2 sets of brothers?",
  choices: {
    correct:"Devo",
    wrong: ["The Doobie Brothers","Golden Earring"]
  }
}, {
question_string:"John Waters’ film “Hairspray” featured these artists in supporting roles:",
  choices: {
    correct:"Debbie Harry and Ric Ocasik",
    wrong: ["Joan Jett and Glenn Frey"," Chrissy Hynde and Ray Davies"]
}
}, {
  question_string:"I’m In The Band:  Magic Dick",
  choices: {
    correct:"J. Geils",
    wrong: ["Sex Pistols","The Buzzcocks"]
  }
}, {
question_string:"Ice Cream Man and Happy Trails are songs covered by this band:",
  choices: {
    correct:"Van Halen",
    wrong: ["The Band","Grateful Dead"]
  }
}, {
question_string:"The shortest Beatles song is:",
  choices: {
    correct:"Her Majesty",
    wrong: ["Please, Please Me","Do You Want to Know a Secret?"]
}
}, {
  question_string:"The longest Beatles song is:",
  choices: {
    correct:"I Want You (She’s So Heavy)",
    wrong: ["Hey Jude","Revolution 9"]
  }
}, {
question_string:"One of these musicians didn’t play on a Beatles song:",
  choices: {
    correct:"Alan Parsons",
    wrong: ["Billy Preston","Eric Clapton"]
}
}, {
  question_string:"On February 11, 1963 The Beatles recorded 11 songs in 12 hours.  How much did they earn that day?",
  choices: {
    correct:"$21.25 each",
    wrong: ["$2,125 each","$21,250 each"]
  }
}, {
question_string:"The first Beatles single to sell a million copies was:",
  choices: {
    correct:"She Loves You",
    wrong: ["I Want to Hold Your Hand","Love Me Do"]
  }
}, {
  question_string:"The Beatles were first heard on American radio in this major city, after a local radio host got a 45 from his flight attendant girlfriend just back from London:",
  choices: {
    correct:"Washington",
    wrong: ["Los Angeles","New York"]
  }
}, {
question_string:"Which wrestling star played Cindi Lauper’s father in her video for “Girls Just Wanna Have Fun”?",
  choices: {
    correct:"Capt. Lou Albano",
    wrong: ["The Rock","Hulk Hogan"]
}
}, {
  question_string:"The first song George Harrison wrote and recorded with The Beatles was:",
  choices: {
    correct:"Don’t Bother Me",
    wrong: ["I Need You","You Like Me Too Much"]
  }
}, {
question_string:"The first Beatles album to feature only their compositions was:",
  choices: {
    correct:"A Hard Days Night",
    wrong: ["With The Beatles","Revolver"]
  }
}, {
question_string:"Which Beatle came up with the title “A Hard Days Night”?",
  choices: {
    correct:"Ringo",
    wrong: ["John","Paul"]
}
}, {
  question_string:"Who played bongos on the title song “A Hard Days Night”?",
  choices: {
    correct:"Norman Smith – Engineer",
    wrong: ["Brian Epstein – Manager","George Martin – Producer"]
  }
}, {
question_string:"The last long harmonica riff that John Lennon played was on which song?",
  choices: {
    correct:"A Hard Days Night",
    wrong: ["Rocky Raccoon","All Together Now"]
}
}, {
  question_string:"The members of this band backed up Roy Orbison, among others.",
  choices: {
    correct:"The Atlanta Rhythm Section",
    wrong: ["Pablo Cruise","Exile"]
  }
}, {
  question_string:"The older brother of AC/DC's Malcolm and Angus Young was in a band that recorded which one of these songs?",
  choices: {
    correct:"Friday on My Mind",
    wrong: ["Monday, Monday","Tuesday Afternoon"]
  }
}, {
question_string:"Who came up with the title “Eight Days a Week”?",
  choices: {
    correct:"Paul’s Driver",
    wrong: ["Paul’s Girlfriend","Paul himself"]
}
}, {
  question_string:"I played keyboards for Deep Purple:",
  choices: {
    correct:"Jon Lord",
    wrong: ["Ritchie Blackmore","Ian Gillian"]
  }
}, {
question_string:"I played bass for Duran Duran:",
  choices: {
    correct:"John Taylor",
    wrong: ["Andy Taylor","Roger Taylor"]
  }
}, {
question_string:"I played flute for Jethro Tull:",
  choices: {
    correct:"Ian Anderson",
    wrong: ["Ian Gillian","Ian Jones"]
}
}, {
  question_string:"I played lead guitar for “The Beach Boys”:",
  choices: {
    correct:"Carl Wilson",
    wrong: ["Brian Wilson","Al Jardine"]
  }
}, {
question_string:"One of these bands didn’t have married couples in them:",
  choices: {
    correct:"Heart",
    wrong: ["Abba","Fleetwood Mac"]
}
}, {
  question_string:"This band’s album cover featured a baby swimming toward a dollar bill:",
  choices: {
    correct:"Nirvana",
    wrong: ["Stone Temple Pilots","Alice in Chains"]
  }
}, {
question_string:"Alice Cooper is an avid:",
  choices: {
    correct:"Golfer",
    wrong: ["Poker player","Stamp collector"]
  }
}, {
  question_string:"Power Station, fronted by Robert Palmer, included members from which two bands:",
  choices: {
    correct:"Chic and Duran Duran",
    wrong: ["KC and the Sunshine Band and Asia","MFSB and Toto"]
  }
}, {
question_string:"Pink Floyd’s “Shine on You Crazy Diamond” is an ode to:",
  choices: {
    correct:"Sid Barrett",
    wrong: ["Brian Jones","Tommy Bolin"]
}
}, {
  question_string:"Led Zeppelin got its name from:",
  choices: {
    correct:"Keith Moon",
    wrong: ["Peter Grant","Jeff Beck"]
  }
}, {
question_string:"Howard Stern’s cousin is in which band?",
  choices: {
    correct:"Blue Oyster Cult",
    wrong: ["The Buggles","Bachman Turner Overdrive"]
  }
}, {
question_string:"James Taylor recorded a song named after which country?",
  choices: {
    correct:"Mexico",
    wrong: ["Canada","Brazil"]
}
}, {
  question_string:"Carole King co-wrote all but one of these songs:",
  choices: {
    correct:"Leader of the Pack",
    wrong: ["Up on the Roof","Pleasant Valley Sunday"]
  }
}, {
question_string:"All but one of the following were considered for the role of Michael Scott on “The Office”:",
  choices: {
    correct:"David Ducovny",
    wrong: ["Hank Azaria","Paul Giamatti"]
}
}, {
  question_string:"Which actors auditioned for the parts of Al and Peg Bundy on “Married with Children”.",
  choices: {
    correct:"Sam Kinison and Roseanne Barr",
    wrong: ["Tim Allen and Suzanne Pleshette","Michael Richards and Heather Locklear"]
  }
}, {
question_string:"There are two musicians named Roger Taylor.  Which band doesn’t have one?",
  choices: {
    correct:"Whitesnake",
    wrong: ["Queen","Duran Duran"]
  }
}, {
  question_string:"Which song doesn’t open with a parody of Asian music?",
  choices: {
    correct:"Woman from Tokyo",
    wrong: ["Turning Japanese","China Girl"]
  }
}, {
question_string:"The only “Breaking Bad” actor with a chemistry background was:",
  choices: {
    correct:"Maurius Stan – Bogdan Wolynetz",
    wrong: ["David Costabile - Gale Boetticher","Aaron Paul - Jesse Pinkman"]
}
}, {
  question_string:"Martha Reeves of “Martha and the Vandellas” was Motown’s:",
  choices: {
    correct:"Secretary",
    wrong: ["Cleaning lady","Landlord"]
  }
}, {
question_string:"Which two members of The Rolling Stones sang backup on “Yellow Submarine”?",
  choices: {
    correct:"Mick Jagger and Keith Richards",
    wrong: ["Brian Jones and Mick Jagger","Bill Wyman and Charlie Watts"]
  }
}, {
question_string:"The idea of The Beatles “She Said, She Said” came from this Easy Rider actor tripping on LSD.",
  choices: {
    correct:"Peter Fonda",
    wrong: ["Dennis Hopper","Jack Nicholson"]
}
}, {
  question_string:"How long did it take Jimi Hendrix to cover Sgt. Pepper songs after the release date of June 1, 1967?",
  choices: {
    correct:"3 days",
    wrong: ["1 week","6 months"]
  }
}, {
question_string:"The Beatles “Being For the Benefit of Mr. Kite” came from:",
  choices: {
    correct:"A circus poster",
    wrong: ["Julian Lennon","An LSD trip"]
}
}, {
  question_string:"The Beatles “Happiness is a Warm Gun” came from:",
  choices: {
    correct:"The cover of a gun magazine",
    wrong: ["A sexual connotation","A heroin injection"]
  }
}, {
question_string:"Only two of The Beatles recorded “Why Don't We Do It In the Road”.  Which two?",
  choices: {
    correct:"Paul and Ringo",
    wrong: ["George and Ringo","John and Ringo"]
  }
}, {
  question_string:"Debbie Harry sings a bridge on “Call Me” using all of the following languages except which one?",
  choices: {
    correct:"Spanish",
    wrong: ["Italian","French"]
  }
}, {
question_string:"Tom Jones was romantically linked to which one of The Supremes?",
  choices: {
    correct:"Mary Wilson",
    wrong: ["Diana Ross","Florence Ballard"]
}
}, {
  question_string:"I'm In The Band:  Fee Waybill",
  choices: {
    correct:"The Tubes",
    wrong: ["The Shippers","The Boxes"]
  }
}, {
question_string:"Which female artist said she would break a nail changing the channel if she heard one of her songs on the radio?",
  choices: {
    correct:"Linda Ronstadt",
    wrong: ["Carly Simon","Joni Mitchell"]
  }
}, {
question_string:"Which one of these composing partners wasn't married?",
  choices: {
    correct:"Boyce and Hart",
    wrong: ["King and Goffin","Barry and Greenwich"]
}
}, {
  question_string:"Opening Lines: “Do You Wanna Get Rocked?”",
  choices: {
    correct:"Def Leppard",
    wrong: ["Twisted Sister","Kiss"]
  }
}, {
question_string:"Opening Lines: “Woke up this morning feeling fine”",
  choices: {
    correct:"I'm Into Something Good - Herman's Hermits",
    wrong: ["Chelsea Morning - Joni Mitchell","In the Morning - Wolfmother"]
}
}, {
  question_string:"The Philly Sound artists were all backed up by this band:",
  choices: {
    correct:"MFSB",
    wrong: ["TSOP","WASP"]
  }
}, {
question_string:"The Motown studio band was known as:",
  choices: {
    correct:"The Funk Brothers",
    wrong: ["The Snake Pit Boys","The Brothers Of Funk"]
  }
}, {
  question_string:"Most of the 60's songs recorded in LA were backed up by this group of studio musicians:",
  choices: {
    correct:"The Wrecking Crew",
    wrong: ["The Union","The Syncopaters"]
  }
}, {
question_string:"All but one of these bands recorded a song titled “Love Will Find a Way”.",
  choices: {
    correct:"Chicago",
    wrong: ["Pablo Cruise","Yes"]
}
}, {
  question_string:"One Of Our Songs:  The Guess Who",
  choices: {
    correct:"These Eyes",
    wrong: ["This Old Heart of Mine","Down on My Knees"]
  }
}, {
question_string:"Which Prince protégé sang backup on “Take Me with You”?",
  choices: {
    correct:"Appolonia",
    wrong: ["Mayte","Vanity"]
  }
}, {
question_string:"The Tom Tom Club is comprised of two members of this band:",
  choices: {
    correct:"Talking Heads",
    wrong: ["The B52's","Blondie"]
}
}, {
  question_string:"Which band briefly got to see the studio remix of The Beatles “Magical Mystery Tour”?",
  choices: {
    correct:"Pink Floyd",
    wrong: ["The Rolling Stones","The Dave Clark Five"]
  }
}, {
question_string:"Beatles Lyrics: “Wearing a face that she keeps in a jar by the door.”",
  choices: {
    correct:"Eleanor Rigby",
    wrong: ["Lovely Rita","Julia"]
}
}, {
  question_string:"Beatles Lyrics: “His son is working for The Daily Mail.”",
  choices: {
    correct:"Paperback Writer",
    wrong: ["A Day in the Life","Fool on the Hill"]
  }
}, {
question_string:"Beatles Lyrics: “Wishing to avoid an unpleasant scene.”",
  choices: {
    correct:"Maxwell's Silver Hammer",
    wrong: ["Yellow Submarine","Octopus' Garden"]
  }
}, {
  question_string:"Beatles Lyrics: “Pick up the bags, get in the limousine.”",
  choices: {
    correct:"You Never Give Me Your Money",
    wrong: ["Drive My Car","Ticket to Ride"]
  }
}, {
question_string:"Beatles Lyrics: “Keeps a ten bob note up his nose.”",
  choices: {
    correct:"Sun King",
    wrong: ["Penny Lane","The Fool on the Hill"]
}
}, {
  question_string:"Beatles Lyrics: “Get a dose of her in jackboots and kilt.”",
  choices: {
    correct:"Polythene Pam",
    wrong: ["Lovely Rita","Martha My Dear"]
  }
}, {
question_string:"Beatles Lyrics: “There beneath the clear blue skies.”",
  choices: {
    correct:"Penny Lane",
    wrong: ["Strawberry Fields Forever","Lucy in the Sky with Diamonds"]
  }
}, {
question_string:"The Beatles rank #1 in most consecutive gold or platinum studio albums sold, Rush ranks #3.  Who holds second place?",
  choices: {
    correct:"Led Zeppelin",
    wrong: ["The Rolling Stones","The Bee Gees"]
}
}, {
  question_string:"Rush made its first live US television appearance on this show:",
  choices: {
    correct:"The Colbert Report",
    wrong: ["The Tonight Show w/ Jimmy Fallon","Saturday Night Live"]
  }
}, {
question_string:"Elton John owns 250,000 of the following:",
  choices: {
    correct:"Glasses",
    wrong: ["Albums and CD's","Fan gifts"]
}
}, {
  question_string:"Which brand did Aerosmith consider for the band's name?",
  choices: {
    correct:"Jack Daniels",
    wrong: ["Cohiba","Trojan"]
  }
}, {
question_string:"The first band to advertise an album release on a billboard was:",
  choices: {
    correct:"The Doors",
    wrong: ["The Beatles","Led Zeppelin"]
  }  
}, {
  question_string:"AC/DC guitarist Malcolm Young worked in a:",
  choices: {
    correct:"Bra factory",
    wrong: ["Brothel","Sex toy shop"]
  }
}, {
question_string:"Keith Richards came up with the opening riff to “Satisfaction” here:",
  choices: {
    correct:"In a dream",
    wrong: ["In the bath","In a car"]
}
}, {
  question_string:"In 1963, The Isley Brothers hired this guitarist for $30 a night:",
  choices: {
    correct:"Jimi Hendrix",
    wrong: ["Eric Clapton","Buddy Guy"]
  }
}, {
question_string:"Which of these is Nashville’s largest industry?",
  choices: {
    correct:"Healthcare",
    wrong: ["Tourism","Music"]
  }
}, {
question_string:"Before joining Kiss, Vinnie Vincent was a staff writer on all but one of these shows:",
  choices: {
    correct:"Happy Days",
    wrong: ["Laverne and Shirley","Joanie Loves Chachie"]
}
}, {
  question_string:"Roy Orbison’s million selling #2 hit was rejected by all but one of the following:",
  choices: {
    correct:"Buddy Holly",
    wrong: ["Elvis Presley","The Everly Brothers"]
  }
}, {
question_string:"Brandon Tartikoff was inspired to develop the A-Team based on all of these except one:",
  choices: {
    correct:"Mission Impossible",
    wrong: ["Mad Max","The Dirty Dozen"]
}
}, {
  question_string:"Which British Invasion act performed on “The Ed Sullivan Show” the most?",
  choices: {
    correct:"The Dave Clark Five",
    wrong: ["The Beatles","Gerry and the Pacemakers"]
  }
}, {
question_string:"This actor, convinced his show would fail, refused to unpack his suitcase for six weeks:",
  choices: {
    correct:"Patrick Stewart – Star Trek: The Next Generation",
    wrong: ["Dominic West – The Wire","Hugh Laurie – House"]
  }
}, {
  question_string:"Which Star Trek: The Next Generation actor never saw any incarnation of the franchise?",
  choices: {
    correct:"Patrick Stewart – Picard",
    wrong: ["LeVar Burton – LaForge","Jonathan Frakes – Riker"]
  }
}, {
question_string:"Which of the following nicknames was never used for characters on “The Walking Dead”?",
  choices: {
    correct:"Zombies",
    wrong: ["Rotters","Geeks"]
}
}, {
  question_string:"One of these actors was rejected after offering their voice over services to “South Park”?",
  choices: {
    correct:"David Caruso",
    wrong: ["George Clooney","Jay Leno"]
  }
}, {
question_string:"Of the many ways Kenny was killed on “South Park”, this isn’t one of them.",
  choices: {
    correct:"Run over by a stretch limo",
    wrong: ["Thrown into a river with cement shoes","Ozzy Osborne bites his head off"]
  }
}, {
question_string:"Which producer consulted Parker and Stone on two episodes of “South Park”?",
  choices: {
    correct:"Norman Lear",
    wrong: ["Garry Marshall","Phil Rosenthal"]
}
}, {
  question_string:"In the closing line of their song, the singer inserts “Sedaka is back”:",
  choices: {
    correct:"Toni Tennille",
    wrong: ["Neil Sedaka","Carole King"]
  }
}, {
question_string:"All but two of these Prince songs have a Q&A element in them.  Which one doesn’t?",
  choices: {
    correct:"The Question of U",
    wrong: ["Love Machine","Sexy MF"]
}
}, {
  question_string:"Which two bands have guitarists with first initials JJ and KK respectively?",
  choices: {
    correct:"Twisted Sister and Judas Priest",
    wrong: ["Steppenwolf and Black Sabbath",", Earth, Wind and Fire and Tower of Power"]
  }
}, {
question_string:"The Four Seasons got their name from:",
  choices: {
    correct:"A bowling alley",
    wrong: ["A book","A family friend"]
  }
}, {
  question_string:"The first British group to have a #1 song in America:",
  choices: {
    correct:"The Tornadoes",
    wrong: ["The Beatles","Mr. Acker Bilk"]
  }
}, {
question_string:"The Beach Boys were originally named all of these except one:",
  choices: {
    correct:"The Sandbars",
    wrong: ["The Pendletones","Carl and the Passions"]
}
}, {
  question_string:"This Motown group was originally called “The Primettes”",
  choices: {
    correct:"The Supremes",
    wrong: ["The Four Tops","The Temptations"]
  }
}, {
question_string:"Between 1963 and 1964, this artist was the only American to have a #1 single in Britain:",
  choices: {
    correct:"Roy Orbison",
    wrong: ["Bill Haley","Elvis Presley"]
  }
}, {
question_string:"“The Righteous Brothers” got their name from:",
  choices: {
    correct:"Black Marines at a club",
    wrong: ["A homeless man","A cleaning woman at the studio"]
}
}, {
  question_string:"Al Jardine of The Beach Boys temporarily quit the band after their first single to go to school to become this:",
  choices: {
    correct:"A Dentist",
    wrong: ["A Doctor","A Veterinarian"]
  }
}, {
question_string:"Jimmy Page and John Paul Jones were studio musicians for which of these bands?",
  choices: {
    correct:"Herman's Hermits",
    wrong: ["Gerry and the Pacemakers","The Dave Clark Five"]
}
}, {
  question_string:"Sonny and Cher sang background vocals on all but one song:",
  choices: {
    correct:"Baby Don't Go",
    wrong: ["Da Doo Run Run","Be My Baby"]
  }
}, {
question_string:"One set of the following musicians were originally radio DJ's:",
  choices: {
    correct:"Sly Stone and Peter Wolf",
    wrong: ["Nile Rogers and Glen Frey","Rick James and Peter Cetera"]
  }
}, {
  question_string:"Motown bassist James Jamerson often played like this:",
  choices: {
    correct:"Lying down",
    wrong: ["Standing on one leg","Upside down"]
  }
}, {
question_string:"The Stone Poneys featuring Linda Ronstadt released “Different Drum” written by this member of The Monkees:",
  choices: {
    correct:"Mike Nesmith",
    wrong: ["Mickey Dolenz","Peter Tork"]
}
//END OF LEVEL FIVE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
}, {
  question_string:"When Michael was just 5 years old, The Jackson Five played their first gig at a nightclub.  They made $8 for the night, but this amount of money was tossed on stage throughout the show.",
  choices: {
    correct:"$100",
    wrong: ["$50","$150"]
  }
}, {
question_string:"Elton John said “Don’t Shoot Me I’m Only the Piano Player”, coming up with his next album title after this comedian made his fingers like a gun and pointed it at him:",
  choices: {
    correct:"Groucho Marx",
    wrong: ["Johnny Carson","Jack Benny"]
  }
}, {
question_string:"Which band sold out Shea Stadium in 24 hours, breaking the previous record held by The Beatles:",
  choices: {
    correct:"Grand Funk Railroad",
    wrong: ["The Rolling Stones","Electric Light Orchestra"]
}
}, {
  question_string:"Along with being the title of an Aerosmith album, “Permanent Vacation” is a lyric in which 60’s girl group song?",
  choices: {
    correct:"My Boyfriend’s Back",
    wrong: ["Leader of the Pack","He’s a Rebel"]
  }
}, {
question_string:"Guitarist and Inventor Les Paul is the Godfather of which guitarist?",
  choices: {
    correct:"Steve Miller",
    wrong: ["Don Felder","Elvin Bishop"]
}
}, {
  question_string:"Ringo was born:",
  choices: {
    correct:"During an Air Raid",
    wrong: ["In a blizzard","After an Earthquake"]
  }
}, {
question_string:"Which Beatle was first to become a grandfather?",
  choices: {
    correct:"Ringo",
    wrong: ["Paul","George"]
  }
}, {
  question_string:"This band got its start playing in Hell's Angels bars:",
  choices: {
    correct:"The Doobie Brothers",
    wrong: ["Motley Crue","Jefferson Airplane"]
  }
}, {
question_string:"Randy and the Rainbows song “Denise” has what sounds like this animated characters name in the chorus:",
  choices: {
    correct:"Scooby Doo",
    wrong: ["Mighty Mouse","Betty Boop"]
}
}, {
  question_string:"While Rush drummer Neil Peart does his drum solo, Geddy Lee goes backstage and does this:",
  choices: {
    correct:"Checks the Box Scores",
    wrong: ["Takes a Nap","Calls His Mom"]
  }
}, {
question_string:"Temptation singer Dennis Edwards didn’t want to sing “It was the 3rd of September, a day I’ll always remember” on “Papa was a Rolling Stone” because that was the day that:",
  choices: {
    correct:"His Father Died",
    wrong: ["His Mother Died","His Sister Died"]
  }
}, {
question_string:"One of these TV theme songs wasn’t a #1 song:",
  choices: {
    correct:"Batman Theme",
    wrong: ["Miami Vice Theme","Theme from SWAT"]
}
}, {
  question_string:"On Ren & Stimpy, Ren’s last name is:",
  choices: {
    correct:"Hoek",
    wrong: ["Hooey","HaHa"]
  }
}, {
question_string:"Chris Hardwick’s @Midnight show features these as panelists:",
  choices: {
    correct:"Comedians",
    wrong: ["Actors","Musicians"]
}
}, {
  question_string:"Who’s “Hunting Wabbits”?",
  choices: {
    correct:"Elmer Fudd",
    wrong: ["Foghorn Leghorn","Daffy Duck"]
  }
}, {
question_string:"Chris Hardwick says this after a correct answer on @Midnight:",
  choices: {
    correct:"Points!",
    wrong: ["Absolutely!","Affirmative!"]
  }
}, {
  question_string:"“Uno Dos One Two Tres Quatro” is the opening lyric to which song?",
  choices: {
    correct:"Wooly Bully",
    wrong: ["96 Tears","Counting on You"]
  }
}, {
question_string:"In which Queen song did Freddy Mercury sing the words “Fat Bottom Girls” which is a song on the same album.",
  choices: {
    correct:"Bicycle Race",
    wrong: ["Don’t Stop Me Now","If You Can’t Beat Them"]
}
}, {
  question_string:"Creedence Clearwater revival, thought to be a Southern band, is actually from:",
  choices: {
    correct:"San Francisco",
    wrong: ["New York","Detroit"]
  }
}, {
question_string:"This band started out playing backyard parties that always got shut down by the police:",
  choices: {
    correct:"Van Halen",
    wrong: ["Ratt","Poison"]
  }
}, {
question_string:"On Ren & Stimpy, there were in-show commercials for all of these products except?",
  choices: {
    correct:"Boogers",
    wrong: ["Log","Powdered Toast"]
}
}, {
  question_string:"Walter Murphy’s 1976 #1 hit “A Fifth of Beethoven” was included on “Saturday Night Fever” which sold over how many copies?",
  choices: {
    correct:"25 Million",
    wrong: ["10 Million","30 Million"]
  }
}, {
question_string:"Which song wasn’t originally about a girl?",
  choices: {
    correct:"Rich Girl – Hall & Oates",
    wrong: ["My Girl – The Temptations","Girl – The Beatles"]
}
}, {
  question_string:"Which song was written to be sung by a man and not a woman?",
  choices: {
    correct:"Like a Virgin",
    wrong: ["Call Me","How Will I Know"]
  }
}, {
question_string:"Which James Bond theme song was the only one to go to #1?",
  choices: {
    correct:"A View to a Kill",
    wrong: ["Nobody Does It Better","Live and Let Die"]
  }
}, {
  question_string:"Colbie Calliat’s father was a producer for which million seller album",
  choices: {
    correct:"Rumors",
    wrong: ["Appetite for Destruction","Hotel California"]
  }
}, {
question_string:"Jon Bon Jovi worked in two of these places before making it big.  Which one didn’t he work in?",
  choices: {
    correct:"Car Wash",
    wrong: ["Junk Yard","Shoe Store"]
}
}, {
  question_string:"Whitesnake’s David Coverdale, who originally wanted to be an Art Teacher, did this as his day job:",
  choices: {
    correct:"Clothing Store Salesman",
    wrong: ["Bus Driver","Florist"]
  }
}, {
question_string:"Who was the first Beatle to come to America 1 year before the whole band came over?",
  choices: {
    correct:"George",
    wrong: ["Paul","John"]
  }
}, {
question_string:"The Beatles were number one with 20 #1’s, Elvis was number three with 17.  Who was number two with 12?",
  choices: {
    correct:"The Supremes",
    wrong: ["Michael Jackson","Stevie Wonder"]
}
}, {
  question_string:"Bob Crewe, famous for producing and co-writing The Four Seasons, was responsible for producing all but which of the following songs:",
  choices: {
    correct:"Mrs. Robinson",
    wrong: ["Devil with a Blue Dress On","Lady Marmalade"]
  }
}, {
question_string:"Two of the following songs reminisce about how things used to be.  Which one isn’t that type of song?",
  choices: {
    correct:"Come Back – J. Geils",
    wrong: ["I Wish – Stevie Wonder","Old Days – Chicago"]
}
}, {
  question_string:"Both The Clash and The Brian Setzer Orchestra covered this song:",
  choices: {
    correct:", Brand New Cadillac",
    wrong: ["Brand New Chevy","Brand New Harley"]
  }
}, {
question_string:"“Couldn’t Get it Right” is a song by:",
  choices: {
    correct:"Climax Blues Band",
    wrong: ["Toto","Sugarloaf"]
  }
}, {
  question_string:"Finish The Lyric: “Yummy, yummy, yummy…”",
  choices: {
    correct:"I Got Love in My Tummy",
    wrong: ["What’s for Dinner?, ","I Want Gummies Honey!"]
  }
}, {
question_string:"Finish The Lyric:  “Knock three times…”",
  choices: {
    correct:"On the Ceiling",
    wrong: ["Cause the Doorbell’s Broke","If it’s You"]
}
}, {
  question_string:"In No Doubt’s “Hella Good” video, the band is riding:",
  choices: {
    correct:"Jet Skis",
    wrong: ["Skateboards","A Rollercoaster"]
  }
}, {
question_string:"Finish the Lyric: “She’s got legs…”",
  choices: {
    correct:"And she knows how to use them",
    wrong: ["Yeah, she’s got two of them","And one’s shorter that the other"]
  }
}, {
question_string:"Finish The Lyric:  “I need love, love…”",
  choices: {
    correct:"To ease my mind",
    wrong: ["Tonight, tonight","How much do you charge?"]
}
}, {
  question_string:"Finish The Lyric:  “Love don’t come easy…”",
  choices: {
    correct:"It’s a game of give and take",
    wrong: ["It depends on how much money you make","It’s better when it’s hard"]
  }
}, {
question_string:"“Here I am…”",
  choices: {
    correct:"Rock you like a hurricane",
    wrong: ["And there I go", "And where are you?"]
}
}, {
  question_string:"Leonardo DiCaprio joined this sitcom in its final season:",
  choices: {
    correct:"Growing Pains",
    wrong: ["Mr. Belvedere","Silver Spoons"]
  }
}, {
question_string:"Tommy Boyce and Bobby Hart sold this song to the team behind The Monkees before writing it in the car on the way to the studio.",
  choices: {
    correct:"Valleri",
    wrong: ["I’m a Believer","Last Train to Clarksville"]
  }
}, {
  question_string:"TV Catchphrases:  “God will get you for that.”",
  choices: {
    correct:"Maude",
    wrong: ["The Golden Girls","Rhoda"]
  }
}, {
question_string:"TV Catchphrases:  “Let’s be careful out there.”",
  choices: {
    correct:"Hill St. Blues",
    wrong: ["NYPD Blue","Law and Order"]
}
}, {
  question_string:"TV Catchphrases:  “Up your nose with a rubber hose.”",
  choices: {
    correct:"Welcome Back Kotter",
    wrong: ["The Jeffersons","Sanford and Son"]
  }
}, {
question_string:"Finish The Lyric:  “What a drag it is…”",
  choices: {
    correct:"Getting old",
    wrong: ["Coming home","To be with you"]
  }
}, {
question_string:"TV Catchphrases:  “Who loves you baby?”",
  choices: {
    correct:"Kojak",
    wrong: ["Baretta","The A-Team"]
}
}, {
  question_string:"TV Catchphrases:  “Would you believe?”",
  choices: {
    correct:"Get Smart",
    wrong: ["X-Files","Laugh In"]
  }
}, {
question_string:"TV Catchphrases:  “What chu talkin about Willis?”",
  choices: {
    correct:"Diff’rent Strokes",
    wrong: ["The Facts of Life","Eight is Enough"]
}
}, {
  question_string:"The idea for Phil Spector’s first hit as a songwriter “To Know Him is to Love Him” came from:",
  choices: {
    correct:"His Father’s tombstone",
    wrong: ["A Father’s Day card","An overheard conversation"]
  }
}, {
question_string:"Finish The Lyric:  “I was workin’ part time at a five and dime…”",
  choices: {
    correct:"My boss was Mr. McGee",
    wrong: ["Sorting off-price ladies underwear","So I only made $2.60"]
  }
}, {
  question_string:"Finish The Lyric:  “If you want it, here it is…”",
  choices: {
    correct:"Come and get it",
    wrong: ["Just as you like it","Bananas for a dollar!"]
  }
}, {
question_string:"Before making it big, Pat Benatar was:",
  choices: {
    correct:"A Bank Teller",
    wrong: ["An Attorney","A Croupier"]
}
}, {
  question_string:"Tom Cochrane is a musician best known for his song:",
  choices: {
    correct:"Life is a Highway",
    wrong: ["Life is a Bitch","Life is a Joyride"]
  }
}, {
question_string:"Finish The Lyrics:  “I was born in a small town….”",
  choices: {
    correct:"And I live in a small town",
    wrong: ["Therefore, I have a small brain","And I can’t wait to get out"]
  }
}, {
question_string:"Finish The Lyric:  “Saw him dancing there by the record machine…”",
  choices: {
    correct:"Knew he must have been about seventeen",
    wrong: ["But it was just a Grand Mal seizure","Danced so hard he lost his spleen"]
   }
 }, {
question_string:"Monkee Mike Nesmith’s mother is credited with inventing which office product?", 
 choices: {
    correct:"Liquid Paper",
    wrong: ["Post It’s","Highlighters"]
  }
}, {
question_string:"Which of the following songs are not about real people?",
  choices: {
    correct:"Martha My Dear",
    wrong: ["My Sharona","Layla"]
}
}, {
  question_string:"Which musician was in the crowd for The Beatles “Hard Days Night”?",
  choices: {
    correct:"Phil Collins",
    wrong: ["Jeff Lynne","David Bowie"]
  }
}, {
question_string:"One of these musicians was considered for a role on “The Monkees",
  choices: {
    correct:"Stephen Stills",
    wrong: ["Mark Farner","Johnny Rivers"]
  }
}, {
  question_string:"One of these actors was considered for the role of Jack Bauer on “24”?",
  choices: {
    correct:"Jeff Goldblum",
    wrong: ["Brad Pitt","Ray Liotta"]
  }
}, {
question_string: "These band mates are also known as “The Glimmer Twins”",
  choices: {
    correct:"Jagger and Richards",
    wrong: ["Page and Plant","Phlo and Eddie"]
}
}, {
  question_string:"George Martin received these gifts from Paul McCartney on his 64th birthday.",
  choices: {
    correct:"Birthday greetings, bottle of wine",
    wrong: ["Wine and Cheese","Cigars and scotch"]
  }
}, {
question_string:"Teddy Pendergrass played this instrument before becoming lead singer of Harold Melvin and the Blue Notes.",
  choices: {
    correct:"Drums",
    wrong: ["Guitar","Keyboards"]
  }
}, {
  question_string:"The breakfast cereal that inspired John Lennon to write “Good Morning, Good Morning”.",
  choices: {
    correct:"Corn Flakes",
    wrong: ["Maypo","Rice Krispies"]
  }
}, {
question_string:"This nephew of Temptations singer Melvin Franklin played bass in a Canadian band with Neil Young:",
  choices: {
    correct:"Rick James",
    wrong: ["Lenny Kravitz","Prince"]
  }  
}, {
question_string:"This member of Yes was also in The Buggles, whose song “Video Killed the Radio Star” was the first video played on MTV.",
  choices: {
    correct:"Trevor Horn",
    wrong: ["Rick Wakeman","Bill Bruford"]
}
}, {
  question_string:"Finish the Lyric:  “I wish I was like you…”",
  choices: {
    correct:"Easily amused",
    wrong: ["Wealthy and lucky","Clue free and loose"]
  }
}, {
question_string:"Elvis was how old when he got his first guitar?",
  choices: {
    correct:"11 years old",
    wrong: ["9 years old","17 years old"]
  }
}, {
  question_string:"Elvis’ bass player Bill Black’s first instrument was:",
  choices: {
    correct:"A homemade guitar made from a cigar box and string",
    wrong: ["A plastic ukulele","A banjo missing a string"]
  }
}, {
question_string:"This song is novel for three reasons: 1) The title was mis-heard and mis-labeled.  2) It was only a demo recording.  3) It was used in the climactic scene in “Manhunter” ",
  choices: {
    correct:"InaGaddaDaVida",
    wrong: ["Swalbr","Bron yr Aur"]
}
}, {
  question_string:"ZZ Top Lyrics:  “I can keep a hold on anything this side of deranged.”",
  choices: {
    correct:"Pearl Necklace",
    wrong: ["Got Me Under Pressure","Sharp Dressed Man"]
  }
}, {
question_string:"Prince wrote songs for all except one of these artists:",
  choices: {
    correct:"The GoGo’s",
    wrong: ["The Bangles","Stevie Nicks"]
  }
}, {
question_string:"On their first tour opening for Madness, by the end of the show, The GoGo’s Belinda Carlisle was covered with this:",
  choices: {
    correct:"Spit",
    wrong: ["Roses","Sweat"]
}
}, {
  question_string:"Golden Earring recorded a song that was also the title of which TV show:",
  choices: {
    correct:"Twilight Zone",
    wrong: ["The Time Tunnel","Thieves Like Us"]
  }
}, {
question_string:"Artist’s Real Names:  Marvin Aday",
  choices: {
    correct:"Meatloaf",
    wrong: ["Marvin Gaye","Slash"]
}
}, {
  question_string:"Pop Muzik’s M is from what city?",
  choices: {
    correct:"Munich",
    wrong: ["New York","Paris"]
  }
}, {
question_string:"Which band isn’t comprised of seasoned studio musicians?",
  choices: {
    correct:"Asia",
    wrong: ["Atlanta Rhythm Section","Toto"]
  }
}, {
  question_string:"Only one of these is a title of a song.  Which one?",
  choices: {
    correct:"Rubberband Man",
    wrong: ["Eraser Girl","Pencil Boy"]
  }
}, {
question_string:"Which two artists recorded a song titled “Photograph”?",
  choices: {
    correct:"Def Leppard and Ring Starr",
    wrong: ["Paul Simon and Paul McCartney","Duran Duran and George Harrison"]
}
}, {
  question_string:"Which one of The Three Pig’s houses was a Commodores song?",
  choices: {
    correct:"Brick House",
    wrong: ["Stick House","Straw House"]
  }
}, {
question_string:"Finish The Lyric:  “Well you don’t know me but…”",
  choices: {
    correct:"I’m your brother",
    wrong: ["I’m who you’re looking for","I don’t know you either"]
  }
}, {
question_string:"The Cardigans recorded a song titled:",
  choices: {
    correct:"Lovefool",
    wrong: ["Lovehate","Lovebitch"]
}
}, {
  question_string:"Ellen Foley sang the female lead on Meatloaf’s “Paradise by the Dashboard Light”.  She also starred on this TV show:",
  choices: {
    correct:"Night Court",
    wrong: ["Cheers","Taxi"]
  }
}, {
question_string:"The first English rock star to be honored with a statue in London:",
  choices: {
    correct:"Freddie Mercury",
    wrong: ["David Bowie","John Lennon"]
}
}, {
  question_string:"Finish the Nirvana Lyric:  “Load up on guns, bring your friends…”",
  choices: {
    correct:"It’s fun to lose and pretend",
    wrong: ["We’re havin’ a party!, ","And a Mulatto an Albino a Mosquito and your libido!"]
  }
}, {
question_string:"Finish The Lyric:  “I was dreaming when I wrote this…”",
  choices: {
    correct:"So sue me if it goes astray",
    wrong: ["Now I can’t remember a damn thing!","Over, oops outta time."]
  }
}, {
  question_string:"Which girl group didn’t record a song titled “Hold On”?",
  choices: {
    correct:"TLC",
    wrong: ["En Vogue","Wilson Phillips"]
  }
}, {
question_string:"Opening Lyrics:  “She keeps Moet de Chandon in a pretty cabinet...”",
  choices: {
    correct:"Queen",
    wrong: ["Deep Purple","David Bowie"]
}
}, {
  question_string:"Faith No More recorded a song with the same name as a record label.  Which one?",
  choices: {
    correct:"Epic",
    wrong: ["Capitol","Chrysalis"]
  }
}, {
question_string:"In 1984, Corey Hart wore these:",
  choices: {
    correct:"Sunglasses at night",
    wrong: ["Suspenders during the day","Dr. Denton’s to bed"]
  }
}, {
question_string:"Finish The Lyric:  “Don’t you look at my girlfriend…",
  choices: {
    correct:"Cause she’s the only one I got",
    wrong: ["Cause she’s really hideous","Cause she’s gonna kick your ass"]
}
}, {
  question_string:"Which TV doctor had a bluesy hit in 2011?",
  choices: {
    correct:"Hugh Laurie – House MD",
    wrong: ["Patrick Dempsey – Grey’s Anatomy","Shane West - ER"]
  }
}, {
question_string:"In Blondie’s “Rapture”, Debbie Harry pays homage to two original Hip Hop artists.  Which two?",
  choices: {
    correct:"Fab 5 Freddy and Grandmaster Flash",
    wrong: ["Curtis Blow and Master G","Kool Herc and Big Bank Hank"]
}
}, {
  question_string:"Hip Hop grew from block parties in this NYC boro:",
  choices: {
    correct:"Bronx",
    wrong: ["Manhattan","Queens"]
  }
}, {
question_string:"Prince came up with the concept for “Little Red Corvette”: ",
  choices: {
    correct:"In the back of Lisa Coleman’s Pink Edsel",
    wrong: ["On a tour bus as a red Corvette raced by","After seeing a beautiful girl in a red Corvette"]
  }
}, {
  question_string:"The concert immortalized in Deep Purple’s “Smoke on the Water” was headlined by which artist?",
  choices: {
    correct:"Frank Zappa",
    wrong: ["Black Sabbath","Deep Purple"]
  }
}, {
question_string:"On his first time in NYC, Bono was wearing a punk rock fur coat.  What did the first person to see him say?",
  choices: {
    correct:"Hey honey!",
    wrong: ["Aren’t you Bono?","Go back to where you came from!"]
}
}, {
  question_string:"The documentary “It Might Get Loud” features which three artists?",
  choices: {
    correct:"Jimmy Page, The Edge and Jack White",
    wrong: ["Jeff Beck, Eddie Van Halen and Dexter Holland","Eric Clapton, Richie Sambora and Joe Satriani"]
  }
//END OF LEVEL SIX>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  
}, {
question_string:"Which is a title of Jimi Hendrix song?",
  choices: {
    correct:"Red House",
    wrong: ["Black Water","Yellow Balloon"]
  }
}, {
question_string:"Which song doesn’t have the lyric “Wedding Bells” in it?",
  choices: {
    correct:"Chapel of Love",
    wrong: ["Wedding Bell Blues","Do Wah Diddy"]
}
}, {
  question_string:"In what city is the ratio of girls to boys 2 to 1?",
  choices: {
    correct:"Surf City",
    wrong: ["Detroit Rock City","Paradise City"]
  }
}, {
question_string:"Which artist “Walked the Line”, fell into a “Ring of Fire” and was also called “Sue”?",
  choices: {
    correct:"Johnny Cash",
    wrong: ["Buddy Holly","Bill Haley"]
}
}, {
  question_string:"In which of these photography themed songs do you hear the words “Nikon camera?”",
  choices: {
    correct:"Kodachrome",
    wrong: ["Freeze Frame","Centerfold"]
  }
}, {
question_string:"Which of these redundant titles was not done by the same artist?",
  choices: {
    correct:"Goody Goody",
    wrong: ["Chewy Chewy","Yummy Yummy"]
  }
}, {
  question_string:"Which song was a hit for Robert Plant during his solo career?",
  choices: {
    correct:"Tall Cool One",
    wrong: ["Long Cool Woman","Cool, Cold, Colder"]
  }
}, {
question_string:"Two of the following are song titles.  Which one isn’t?",
  choices: {
    correct:"Little Eva",
    wrong: ["Little Willy","Short People"]
}
}, {
  question_string:"Which one of these songs doesn’t start off with some form of clock sound?",
  choices: {
    correct:"Time – Culture Club",
    wrong: ["Time – Pink Floyd","Time Has Come Today – The Chambers Brothers"]
  }
}, {
question_string:"The songs “Judy in Disguise” and “This Diamond Ring” have this in common:",
  choices: {
    correct:"Both band’s have the word “Playboy” in their name",
    wrong: ["They were recorded by the same group","They both stalled at #2"]
  }
}, {
question_string:"This singer played Rusty Millio on “The Sopranos”.",
  choices: {
    correct:"Frankie Valli",
    wrong: ["Steven VanZandt","Floyd Vivino"]
}
}, {
  question_string:"Before Buster Poindexter was “Hot Hot Hot”, he was in this band as David Johanson:",
  choices: {
    correct:"The New York Dolls",
    wrong: ["The Bronx Cheer","The Brooklyn Docks"]
  }
}, {
question_string:"Along with “Secret Agent Man”, P.F. Sloan also wrote all of these songs except which one?",
  choices: {
    correct:"Midnight Confessions – The Grass Roots",
    wrong: ["A Must to Avoid – Herman’s Hermits","You Baby – The Turtles"]
}
}, {
  question_string:"Which British singer “Went from Crayons to perfume”?",
  choices: {
    correct:"Lulu",
    wrong: ["Dusty Springfield","Mary Hopkin"]
  }
}, {
question_string:"In which song do you hear” It Doesn’t Matter If You Go Stag or You Go Drag?",
  choices: {
    correct:"Going to a Go Go",
    wrong: ["Vogue","Love Shack"]
  }
}, {
  question_string:"Microsoft paid The Rolling Stones a boatload of money to use which song for an operating system rollout.",
  choices: {
    correct:"Start Me Up",
    wrong: ["It’s All Over Now","Satisfaction"]
  }
}, {
question_string:"This Mamas and Papas song is autobiographical.",
  choices: {
    correct:"Creeque Alley",
    wrong: ["California Dreaming","Word of Love"]
}
}, {
  question_string:"Finish the Lyric:  “I got your picture on the wall…”",
  choices: {
    correct:"But it can’t see or come to me when I call your name.",
    wrong: ["And I throw darts at it.","It hides a nasty stain that’s lying there."]
  }
}, {
question_string:"”The Young and The Restless” actor Eric Braeden was also on this 60’s TV show:",
  choices: {
    correct:"The Rat Patrol",
    wrong: ["Peyton Place","Get Smart"]
  }
}, {
question_string:"One of these actors never starred on Entourage.  Which one?",
  choices: {
    correct:"Jimmy Smits",
    wrong: ["Kate Mara","Bob Odenkirk"]
}
}, {
  question_string:"Which of these musicians guest starred on “The A-Team”?",
  choices: {
    correct:"Boy George",
    wrong: ["Frank Zappa","Ted Nugent"]
  }
}, {
question_string:"Which member of “The Traveling Wilburys” guest starred on “Dharma & Greg”?",
  choices: {
    correct:"Bob Dylan",
    wrong: ["George Harrison","Tom Petty"]
}
}, {
  question_string:"The guys on “The Drew Carey Show” were looking for a guitarist for their band.  Each of these guys auditioned, who got the gig? ",
  choices: {
    correct:"Joe Walsh",
    wrong: ["Rick Nielsen","Dusty Hill"]
  }
}, {
question_string:"Which member of “The Doors” was a guest star on 2 episodes of “Square Pegs”?",
  choices: {
    correct:"John Densmore",
    wrong: ["Robbie Krieger","Ray Manzarek"]
  }
}, {
  question_string:"Which member of “The E Street Band” guest starred on “Diff’rent Strokes”?",
  choices: {
    correct:"Clarence Clemmons",
    wrong: ["Max Weinberg","Gary Tallent"]
  }
}, {
question_string:"Which band did a cameo on “Married with Children”?",
  choices: {
    correct:"Anthrax",
    wrong: ["Guns n’ Roses","Slayer"]
}
}, {
  question_string:"The Beach Boys appeared in cameos on all but one of these shows.",
  choices: {
    correct:"Baywatch",
    wrong: ["Full House","Home Improvement"]
  }
}, {
question_string:"Sly and the Family Stone recorded a song in which Sly included four of their songs in the lyrics.  Which song?",
  choices: {
    correct:"Thank You (Falettinme Be Mice Elf Agin)",
    wrong: ["Sig a Simple Song","Dance to the Music"]
  }
}, {
question_string:"In 1966, this session player began to take over as bass player for the Motown House Band:",
  choices: {
    correct:"Bob Babbitt",
    wrong: ["Greg Gabbitt","Tom Tabbitt"]
}
}, {
  question_string:"Which cassette tape played continuously while a guy was trapped in his car, upside down in a ditch?",
  choices: {
    correct:"Wham! – Make it Big",
    wrong: ["Banannarama - Banannarama","Milli Vanilli – Girl You Know It’s Me"]
  }
}, {
question_string:"Barry White reluctantly became a star after:",
  choices: {
    correct:"Producing a demo that he knew he had to release.",
    wrong: ["Being a backup singer.","His manager said there was a market for his material."]
}
}, {
  question_string:"Chuck Berry recorded a song with the same name as a cosmetics company.  Which one?",
  choices: {
    correct:"Maybelline",
    wrong: ["Lush","Cover Girl"]
  }
}, {
question_string:"What do Heart, Stone Temple Pilots and The Black Crowes have in common?",
  choices: {
    correct:"All have siblings in them",
    wrong: ["All have #1 songs","All have Platinum albums"]
  }
}, {
  question_string:"Ringo only did this once while in The Beatles:",
  choices: {
    correct:"Do a drum solo",
    wrong: ["Sing lead vocals","Write a song"]
  }
}, {
question_string:"Which action was never a song?",
  choices: {
    correct:"Singing",
    wrong: ["Laughing","Crying"]
}
}, {
  question_string:"This prophetic song played over the final scene of “Breaking Bad”.",
  choices: {
    correct:"Baby Blue",
    wrong: ["It’s All Over Now","Crystal Blue Persuasion"]
  }
}, {
question_string:"Which “Carol Burnett Show” sidekick sold aluminum siding door to door before making it big?",
  choices: {
    correct:"Harvey Korman",
    wrong: ["Tim Conway","Lyle Waggoner"]
  }
}, {
question_string:"Of all of these jobs, which one didn’t “Star Trek’s” Leonard Nimoy have before making it big?",
  choices: {
    correct:"Cemetery Plot Salesman",
    wrong: ["Taxi Driver","Vacuum Cleaner Salesman"]
}
}, {
  question_string:"Starbuck, a one hit wonder, had a song with the title “(blank) Feels Right”",
  choices: {
    correct:"Moonlight",
    wrong: ["Sunlight","Starlight"]
  }
}, {
question_string:"This “Sandford & Sons’s” actor’s real name is Sanford:",
  choices: {
    correct:"Redd Foxx",
    wrong: ["Whitman Mayo","Demond Wilson"]
}
}, {
  question_string:"I’m In The Band:  Frank Beard",
  choices: {
    correct:"ZZ Top",
    wrong: ["The Fabulous Thunderbirds","Aerosmith"]
  }
}, {
question_string:"I’m In The Band:  Bev Bevan",
  choices: {
    correct:"ELO",
    wrong: ["En Vogue","The Shirells"]
  }
}, {
  question_string:"I’m In The Band:  Dave Mustaine",
  choices: {
    correct:"Megadeth",
    wrong: ["Motorhead","Metallica"]
  }
}, {
question_string:"One Of Our Songs:  Heatwave",
  choices: {
    correct:"Boogie Nights",
    wrong: ["Bionic Boogie","Boogiedown Baby"]
}
}, {
  question_string:"One Of Our Songs:  The Rolling Stones",
  choices: {
    correct:"Dandelion",
    wrong: ["All down the drain","Back of my mind"]
  }
}, {
question_string:"One Of Our Songs:  The Bee Gees",
  choices: {
    correct:"Fanny",
    wrong: ["Rhode Island","Talkin Jive"]
  }
}, {
question_string:"One Of Our Songs:  The Police",
  choices: {
    correct:"Mother",
    wrong: ["Synchronicity","Oh So Lonely"]
}
}, {
  question_string:"One Of Our Songs:  Genesis",
  choices: {
    correct:"Duchess",
    wrong: ["Home, Then We’ll See","A Trick of the Trail"]
  }
}, {
question_string:"I Play This Instrument:  Leon Russell",
  choices: {
    correct:"Keyboards",
    wrong: ["Drums","Guitar"]
}
}, {
  question_string:"I Play Guitar:",
  choices: {
    correct:"Denny Laine",
    wrong: ["Walt Parazaider","Doug Ingle"]
  }
}, {
question_string:"I Play Keyboards:",
  choices: {
    correct:"Gregg Rolie",
    wrong: ["Greg Lake","Larry Coryell"]
  }
}, {
  question_string:"I Play Bass Guitar: ",
  choices: {
    correct:"Carol Kaye",
    wrong: ["Don Brewer","CC DeVille"]
  }
}, {
question_string:"I Play Drums:",
  choices: {
    correct:"Alan White",
    wrong: ["Warren DiMartini","David Bryan"]
}
}, {
  question_string:"Which of these “school themed” songs is real?",
  choices: {
    correct:"Paperlate",
    wrong: ["Another Substitute","Pencil, Eraser and You"]
  }
}, {
question_string:"Which two bands released a song titled “Cherry Bomb”?",
  choices: {
    correct:"John Mellencamp and The Runaways",
    wrong: ["Warrant and INXS","Bryan Adams and The Pretenders"]
  }
}, {
question_string:"Robert Plant has said that this is his favorite Led Zeppelin song:",
  choices: {
    correct:"Kashmir",
    wrong: ["Stairway to Heaven","Whole Lotta Love"]
}
}, {
  question_string:"Which one of these lyrics is made up?",
  choices: {
    correct:"Mama say, mama say",
    wrong: ["Shimmy shimmy coco pop","Papa um mau mau"]
  }
}, {
question_string:"Which song doesn’t tell a story about a standoff at a bar?",
  choices: {
    correct:"All Apologies - Nirvana",
    wrong: ["Come a Little Bit Closer – Jay and the Americans","Gimme Two Steps – Lynrd Skynrd"]
}
}, {
  question_string:"This redundantly named band had a hit with “Broken Wings”.",
  choices: {
    correct:"Mr. Mister",
    wrong: ["Dr. Doctor","Ms. Mizz"]
  }
}, {
question_string:"In The Monkees “Pleasant Valley Sunday”, who had a TV in every room?",
  choices: {
    correct:"Mr. Green",
    wrong: ["Mr. Pink","Mr. Blue"]
  }
}, {
  question_string:"On Queen’s “Fat Bottomed Girls”, who made a bad boy out of Freddie Mercury?",
  choices: {
    correct:"Big Fat Fannie",
    wrong: ["Large Marge","Bottom Heavy Leslie"]
  }
}, {
question_string:"In which Van Halen song do you hear “Daddy didn’t need no little toys and Mommy didn’t need no little boys”?",
  choices: {
    correct:"Where Have All the Good Times Gone",
    wrong: ["Hot for Teacher","Big Bad Bill"]
}
}, {
  question_string:"Bad Company had a hit with a song titled “Feel Like…”",
  choices: {
    correct:"Making Love",
    wrong: ["Taking a Nap","A Million Bucks"]
  }
}, {
question_string:"Which was the title of a great 1963 soul song?",
  choices: {
    correct:"Uh, Uh, Uh, Uh, Uh, Uh",
    wrong: ["Da Doo Doo, Da Da Da Da","Wha, Wha, Wha, Wha, Wha"]
  }
}, {
question_string:"Who was nicknamed “The Big Man”?",
  choices: {
    correct:"Clarence Clemmons",
    wrong: ["Big Joe Turner","Notorious BIG"]
}
}, {
  question_string:"Which song was a hit for Winger?",
  choices: {
    correct:"Seventeen",
    wrong: ["You’re Sixteen","Eighteen and Life"]
  }
}, {
question_string:"Finish the Lyric:  “I got a new girl now…”",
  choices: {
    correct:"And she’s a lot like you",
    wrong: ["And she’s batshit crazy","And she only cost me $500"]
}
}, {
  question_string:"Which redundant band and song isn’t made up?",
  choices: {
    correct:"”Danger Danger” – Naughty Naughty",
    wrong: ["”Bang Bang” – Yeah Yeah","Tonight Tonight” – Lovey Lovey"]
  }
}, {
question_string:"Billy Paul’s classic song about a man meeting a married woman at a café is called:",
  choices: {
    correct:"Me and Mrs. Jones",
    wrong: ["Steppin Out","We Got a Thing Goin On"]
  }
}, {
  question_string:"Which is a Bad Company song?",
  choices: {
    correct:"Moving On",
    wrong: ["Movin Out","Movin"]
  }
}, {
question_string:"Who recorded a song titled “Heavy Metal”?",
  choices: {
    correct:"Sammy Hagar",
    wrong: ["Metallica","Steppenwolf"]
}
}, {
  question_string:"Who didn’t record a song titled “Poison”?",
  choices: {
    correct:"Poison",
    wrong: ["Bell Biv DeVoe","Alice Cooper"]
  }
}, {
question_string:"Before landing at this airport, Rush’s Neil Peart heard a morse code type sound which was the genesis for which airport code song?",
  choices: {
    correct:"YYZ",
    wrong: ["JFK","LAX"]
  }
}, {
question_string:"Robert Lamm sings a line from this Beatles album on Chicago’s debut album song “South California Purples”.",
  choices: {
    correct:"Magical Mystery Tour",
    wrong: ["Sgt. Pepper","Revolver"]
}
}, {
  question_string:"What cereal brand is also a band’s name?",
  choices: {
    correct:"Kix",
    wrong: ["Corn Pops","Count Chocula"]
  }
}, {
question_string:"Which structure isn’t the name of a band?",
  choices: {
    correct:"Church",
    wrong: ["Firehouse","Spiral Staircase"]
}
}, {
  question_string:"Only two of the following are both band names and car company names.  Which one isn’t?",
  choices: {
    correct:"REO Speedwagon",
    wrong: ["Tesla","Pantera"]
  }
}, {
question_string:"Which “Olympic Sport” song did Ronnie James Dio record?",
  choices: {
    correct:"Holy Diver",
    wrong: ["Jump","Run Runaway"]
  }
}, {
  question_string:"Which of the following “The Big Money” things aren’t mentioned in the Rush song?",
  choices: {
    correct:"Punish The Help",
    wrong: ["Run The World","Got No Soul"]
  }
}, {
question_string:"Which isn’t a song title?",
  choices: {
    correct:"Headache Tonight",
    wrong: ["Good Girls Don’t","Go All the Way"]
}
}, {
  question_string:"“For Whom the Bell Tolls” is an Ernest Hemingway book and also a song by which band?",
  choices: {
    correct:"Metallica",
    wrong: ["Slayer","Slaughter"]
  }
}, {
question_string:"Which song lists a few dance moves?",
  choices: {
    correct:"Do You Love Me",
    wrong: ["Do You Wanna Dance","Dance With Me"]
  }
}, {
question_string:"Which “Woman” song isn’t real?",
  choices: {
    correct:"Killer Woman",
    wrong: ["Evil Woman","Fire Woman"]
}
}, {
  question_string:"Which magician’s saying is also a song title?",
  choices: {
    correct:"Abracadabra!",
    wrong: ["Alacazam!","Presto!"]
  }
}, {
question_string:"Which isn’t a real band’s name?",
  choices: {
    correct:"Limos",
    wrong: ["Babys","Raspberries"]
}
}, {
  question_string:"The sound of a rocket blasting off at the beginning of “Telstar” was:",
  choices: {
    correct:"A toilet flushing, played backwards",
    wrong: ["The actual sound of a rocket","Shaking a piece of sheetmetal in a shower"]
  }
}, {
question_string:"Which deadbeat name isn’t a song title?",
  choices: {
    correct:"Putz",
    wrong: ["Loser","Creep"]
  }
}, {
  question_string:"Which song is by Emerson, Lake and Palmer?",
  choices: {
    correct:"From the Beginning",
    wrong: ["Stuck in the Middle With You","The End"]
  }
}, {
question_string:"Who sang about a place that was a “Cellar Full of Noise”?",
  choices: {
    correct:"Petula Clark",
    wrong: ["Melanie","Lulu"]
}
}, {
  question_string:"Which is a real title of a song?",
  choices: {
    correct:"Bony Maronie",
    wrong: ["Lazy Mazie","Loosy Lucy"]
  }
}, {
question_string:"Which establishment isn’t a real song?",
  choices: {
    correct:"Josie’s Garage",
    wrong: ["Maggie’s Farm","Alice’s Restaurant"]
  }
}, {
question_string:"Which diner saying isn’t a song title?",
  choices: {
    correct:"Who’s Next",
    wrong: ["Coming Up","Wrap It Up"]
}
}, {
  question_string:"Which circus themed song was recorded by Three Dog Night?",
  choices: {
    correct:"The Show Must Go On",
    wrong: ["Sideshow","Tightrope"]
  }
}, {
question_string:"Which taxi themed song title was sung by Joni Mitchell?",
  choices: {
    correct:"Big Yellow Taxi",
    wrong: ["Take Me Home","Drive"]
}
}, {
  question_string:"Which is a Pearl Jam song?",
  choices: {
    correct:"Daughter",
    wrong: ["Son","Mother"]
  }
}, {
question_string:"Which is a Rolling Stones song?",
  choices: {
    correct:"Rocks Off",
    wrong: ["Rock Me","Rock On"]
  }
}, {
  question_string:"Which of these was a T-Rex song?",
  choices: {
    correct:"Bang a Gong",
    wrong: ["Bang a Drum","Bang Bam Boom!"]
  }
}, {
question_string:"Which band fronted by Ray Davies ex-wife covered The Kinks “Stop Your Sobbing”?",
  choices: {
    correct:"The Pretenders",
    wrong: ["The Runaways","Blondie"]
}
}, {
  question_string:"Which of these great song titles is real?",
  choices: {
    correct:"Hey Stupid!",
    wrong: ["You’re An Idiot!","Get Out Of My Face!"]
  }
}, {
question_string:"Which flavor isn’t a name of a band?",
  choices: {
    correct:"Elderberry",
    wrong: ["Hot Chocolate","Wild Cherry"]
  }
//END OF LEVEL SEVEN>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   
}, {
question_string:"Rick James' protégés had a hit with “In My House”.  What was the band’s name?",
  choices: {
    correct:"The Mary Jane Girls",
    wrong: ["The James Girls","The 420 Crew"]
}
}, {
  question_string:"What telephone song wasn’t done by Blondie?",
  choices: {
    correct:"Hold The Line",
    wrong: ["Hangin On The Telephone","Call Me"]
  }
}, {
question_string:"Which son of oppression was done by The Clash?",
  choices: {
    correct:"Police On My Back",
    wrong: ["I Can’t Drive 55","Up Against The Wall"]
}
}, {
  question_string:"Which navigation type song was recorded by The Allman Brothers?",
  choices: {
    correct:"Southbound",
    wrong: ["Uptown","Head East"]
  }
}, {
question_string:"Which car song was done by Rainbow?",
  choices: {
    correct:"Death Alley Driver",
    wrong: ["Highway Star","Hot Rod Lincoln"]
  }
}, {
  question_string:"Which masochist’s song was done by Bad Company?",
  choices: {
    correct:"Can’t Get Enough",
    wrong: ["Hurts So Good","Hit Me With Your Best Shot"]
  }
}, {
question_string:"Which smooching song was done by The Shangri La’s",
  choices: {
    correct:"Give Him a Great Big Kiss",
    wrong: ["Kiss Me Deadly","First Kiss"]
}
}, {
  question_string:"Which direction was a Yardbirds song?",
  choices: {
    correct:"Over Under Sideways Down",
    wrong: ["Up, Up and Away","Falling Down"]
  }
}, {
question_string:"Which possession song isn’t real?",
  choices: {
    correct:"I’ll Never Let You Leave Me",
    wrong: ["You Belong To Me","You’re All I’ve Got Tonight"]
  }
}, {
question_string:"Which potential Sesame Street song was recorded by The Box Tops?",
  choices: {
    correct:"The Letter",
    wrong: ["Shapes Of Things","Number 9 Dream"]
}
}, {
  question_string:"Which one of these theme song sets isn’t real?",
  choices: {
    correct:"Dexter – The Hunt",
    wrong: ["Shaft – Son Of Shaft","Batman – Bat Dance"]
  }
}, {
question_string:"Which of these lunatic songs is an Ozzy Osbourne track?",
  choices: {
    correct:"Bark At The Moon",
    wrong: ["Laughter In The Rain","Bats In The Bellfry"]
}
}, {
  question_string:"Which earthquake song was recorded by The Four Tops?",
  choices: {
    correct:"Shake Me, Wake Me",
    wrong: ["I Feel The Earth Move","When the Walls Come Tumbling Down"]
  }
}, {
question_string:"Which of these simian songs is an Aerosmith song?",
  choices: {
    correct:"Monkey On My Back",
    wrong: ["Monkey Man","Shock the Monkey"]
  }
}, {
  question_string:"Which sickness is a song by The Band?",
  choices: {
    correct:"Chest Fever",
    wrong: ["Cat Scratch Fever","Fever In The Morning"]
  }
}, {
question_string:"Which potent mixture is actually a song?",
  choices: {
    correct:"Swords and Tequila",
    wrong: ["Blindfolds and Machine Guns","Battery Acid and Bathtubs"]
}
}, {
  question_string:"Which is an actual song title?",
  choices: {
    correct:"Calendar Girl",
    wrong: ["Milk Carton Girl","Billboard Girl"]
  }
}, {
question_string:"Which is a song by the 70s band Ace?",
  choices: {
    correct:"How Long",
    wrong: ["I’ll Be Around","Sooner Or Later"]
  }
}, {
question_string:"Which was a song by Cream?",
  choices: {
    correct:"White Room",
    wrong: ["Pink Houses","Black Car"]
}
}, {
  question_string:"Carl Douglas recorded a song titled:",
  choices: {
    correct:"Kung Fu Fighting",
    wrong: ["Shootin’ Hoops","Street Corner Capers"]
  }
}, {
question_string:"Which song about a “Mr.” was recorded by Traffic?",
  choices: {
    correct:"Dear Mr. Fantasy",
    wrong: ["Mr. Tinkertrain","Please Mr. Postman"]
}
}, {
  question_string:"Which song was recorded by Jimi Hendrix and covered by Eric Clapton?",
  choices: {
    correct:"Little Wing",
    wrong: ["Little Girl","Little Latin Lupe Lu"]
  }
}, {
question_string:"One Song is by Player, one song is by Sir Mix A Lot and one song is fake.  Which one?",
  choices: {
    correct:"Baby Call Back",
    wrong: ["Baby Come Back","Baby Got Back"]
  }
}, {
  question_string:"Which Batman onomonopeia song is by the band Creation",
  choices: {
    correct:"Biff Bang Pow!",
    wrong: ["Zowie Wowie!","Wham Bang Boom!"]
  }
}, {
question_string:"One is the title of the song and another is it’s opening line.  Which one is a title of a different song?",
  choices: {
    correct:"Let It Whip",
    wrong: ["Whip It","Crack That Whip"]
}
}, {
  question_string:"Chevy Chase’s family fortune is derived from this product:",
  choices: {
    correct:"Crane Toilets",
    wrong: ["Waring Blenders","HP Computers"]
  }
}, {
question_string:"In Batman’s 2 year run, Burt Ward’s Robin says variations of the phrase “Holy____Batman!” how many times?",
  choices: {
    correct:"352",
    wrong: ["252","152"]
  }
}, {
question_string:"Which crooner was interested in playing “The Joker” on Batman?",
  choices: {
    correct:"Frank Sinatra",
    wrong: ["Frankie Avalon","Paul Anka"]
}
}, {
  question_string:"Which artist played one of Catwoman’s Pussy Cats and a love interest for Robin on Batman?",
  choices: {
    correct:"Lesley Gore",
    wrong: ["Annette Funicello","Carole King"]
  }
}, {
question_string:"Although each cast member of “Friends” eventually made One Million dollars per episode, they started out making this much per episode: ",
  choices: {
    correct:"$22,500",
    wrong: ["$12,500","$32,500"]
}
}, {
  question_string:"The “Friends” characters were all named after characters on this soap: ",
  choices: {
    correct:"All My Children",
    wrong: ["One Life To Live","General Hospital"]
  }
}, {
question_string:"In every episode of “Seinfeld”, there is always a reference to this superhero:",
  choices: {
    correct:"Superman",
    wrong: ["Batman","The Hulk"]
  }
}, {
  question_string:"This singer at 15 years old appeared on “The Sopranos”:",
  choices: {
    correct:"Lady Gaga",
    wrong: ["Ke$ha","Ariana Grande"]
  }
}, {
question_string:"Who was the first guest on the first episode of Craig Kilborne’s “The Late Show”?",
  choices: {
    correct:"Jon Stewart",
    wrong: ["Stephen Colbert","John Oliver"]
}
}, {
  question_string:"The dogs on “Magnum P.I.” were named after which two Greek gods?",
  choices: {
    correct:"Zeus and Apollo",
    wrong: ["Nike and Hermes","Ares and Aphrodite"]
  }
}, {
question_string:"Which “Boogie” song was released first?",
  choices: {
    correct:"Boogie Down – Eddie Kendricks",
    wrong: ["Get Up And Boogie – Silver Convention","Boogie Fever – The Sylvers"]
  }
}, {
question_string:"Yvette Marie Stevens is better known as:",
  choices: {
    correct:"Chaka Khan",
    wrong: ["Lisa Lisa","Queen Latifa"]
}
}, {
  question_string:"Which girl group said “Experience preferred, but will accept a young trainee?”",
  choices: {
    correct:"Honey Cone",
    wrong: ["The Supremes","LaBelle"]
  }
}, {
question_string:"Sylvester’s backup singers were called:",
  choices: {
    correct:"Two Tons Of Fun",
    wrong: ["The Weather Girls","Sly Girls"]
}
}, {
  question_string:"Lou Rawls sang backup for:",
  choices: {
    correct:"Nat King Cole",
    wrong: ["Jackie Wilson","Sam Cooke"]
  }
}, {
question_string:"Which artist wrote the song “Fire” that was covered by The Pointer Sisters:",
  choices: {
    correct:"Bruce Springsteen",
    wrong: ["Elvis Presley","John Mellencamp"]
  }
}, {
  question_string:"Which song was recorded by Billy Squire?",
  choices: {
    correct:"Everybody Wants",
    wrong: ["Everybody Wants You","Everybody Wants Some"]
  }
}, {
question_string:"Which knocking song has the lyric “Boom boom boom, bang bang bang”?",
  choices: {
    correct:"Who’s That Knocking?",
    wrong: ["Knock, Knock, Knock!","Can’t You Hear Me Knocking?"]
}
}, {
  question_string:"This band backed up Chuck Berry on his only #1 hit “My Ding a Ling:",
  choices: {
    correct:"Average White Band",
    wrong: ["Atlanta Rhythm Section","The Wrecking Crew"]
  }
}, {
question_string:"Which one of these pleas did The Kinks record?",
  choices: {
    correct:"Help Me Now I’m Falling",
    wrong: ["Hold Me Now","Help Me Through The Night"]
  }
}, {
question_string:"Which band named after a home product recorded “Chapel Of Love”?",
  choices: {
    correct:"Dixie Cups",
    wrong: ["Detergents","Crazy Straws"]
}
}, {
  question_string:"Which band used a chain saw as an instrument on their song “Lumberjack”?",
  choices: {
    correct:"Jackyl",
    wrong: ["Stryper","Krokus"]
  }
}, {
question_string:"Which was a song by The Cars?",
  choices: {
    correct:"Dangerous Type",
    wrong: ["Sweet Kind","Malicious One"]
}
}, {
  question_string:"Which Bob Dylan song can be considered the first rhyming rap song?",
  choices: {
    correct:"Subterranean Homesick Blues",
    wrong: ["Tangled Up In Blue","The Times They Are A Changin"]
  }
}, {
question_string:"Jimmy Page used a theramin on which Zeppelin song?",
  choices: {
    correct:"Whole Lotta Love",
    wrong: ["Good Times, Bad Times","Stairway To Heaven"]
  }
}, {
  question_string:"Which of these songs don’t feature a stuttering singer?",
  choices: {
    correct:"Nah Nah, Hey Hey - Steam",
    wrong: ["Changes – David Bowie","You ain’t Seen Nothing Yet - BTO"]
  }
}, {
question_string:"The Hollywood sign originally was:",
  choices: {
    correct:"Hollywood Land – A failed development",
    wrong: ["Welcome To Hollywood","Hollywood – as it is"]
}
}, {
  question_string:"Which musician was a member of Barry White’s Love Unlimited Orchestra?",
  choices: {
    correct:"Kenny G",
    wrong: ["Yanni","David Sanborn"]
  }
}, {
question_string:"Which of these artists weren’t part of The Philly Sound?",
  choices: {
    correct:"Edwin Starr",
    wrong: ["The Stylistics","The Spinners"]
  }
}, {
question_string:"Which blaxplotation movie theme composer was also a major character on “South Park”?",
  choices: {
    correct:"Issac Hayes",
    wrong: ["Curtis Mayfield","Richard Roundtree"]
}
}, {
  question_string:"The Rolling Stones first TV appearance was hosted by:",
  choices: {
    correct:"Dean Martin",
    wrong: ["Dick Cavett","Ed Sullivan"]
  }
}, {
question_string:"When The Rolling Stones arrived at Chess Studios, their idol was painting the ceiling and stopped to bring in their equipment:",
  choices: {
    correct:"Muddy Waters",
    wrong: ["Bo Diddley","Chuck Berry"]
}
}, {
  question_string:"After the audience backlash at The Rolling Stones, Ed Sullivan vowed to ban the band from the show.  How many appearances did they make after that?",
  choices: {
    correct:"Five",
    wrong: ["Zero","Ten"]
  }
}, {
question_string:"Two of the three songs were done by R&B groups and one isn’t.  Which one?",
  choices: {
    correct:"What’s Your Name?",
    wrong: ["Who’s that Lady?","Where Is The Love?"]
  }
}, {
  question_string:"Which one of these songs has a passage that sounds like the title?",
  choices: {
    correct:"Machine Gun",
    wrong: ["Bullet The Blue Sky","Bombs Away"]
  }
}, {
question_string:"The Rolling Stones Brian Jones was found drowned at his home, which was formerly owned by the author of which book series?",
  choices: {
    correct:"Winnie The Pooh",
    wrong: ["The Lord Of The Rings","Dr. Seuss"]
}
}, {
  question_string:"Mick Jagger wrote the lyrics for “Brown Sugar” in one shot on three pages of a legal pad.  How long did it take him?",
  choices: {
    correct:"45 Minutes",
    wrong: ["30 Minutes","15 Minutes"]
  }
}, {
question_string:"Which musicians are related through marriage?",
  choices: {
    correct:"Ring Starr and Joe Walsh",
    wrong: ["Tom Petty and Joe Perry","Paul Rogers and Jimmy Page"]
  }
}, {
question_string:"In which Deep Purple song was “Sweet Lucy a Samurai?”",
  choices: {
    correct:"Knocking At Your Backdoor",
    wrong: ["Woman From Tokyo","Perfect Strangers"]
}
}, {
  question_string:"Although not considered a session player, this artist played keyboards on The Hollies “He Ain’t Heavy, He’s My Brother”?",
  choices: {
    correct:"Elton John",
    wrong: ["Freddie Mercury","Keith Emerson"]
  }
}, {
question_string:"Who sings about “The Terror of Colorado Boulevard”?",
  choices: {
    correct:"Jan and Dean",
    wrong: ["The Beach Boys","The Ventures"]
}
}, {
question_string:"“The Apprentice” licensed this song as the opening theme to the show.",
  choices: {
    correct:"For The Love of Money - The O'Jays",
    wrong: ["Easy Money - Bruce Springsteen","Money, Money, Money - ABBA"]
}
}, {
question_string:"Angus Young of AC/DC was notified the band was inducted into The Rock & Roll Hall of Fame by:",
  choices: {
    correct:"His neighbor",
    wrong: ["The Rock Hall","His Brother Malcolm"]
}
}, {
  question_string:"Two of the following summer songs are by The Drifters and the other isn't.  Which one?",
  choices: {
    correct:"Summer in the City",
    wrong: ["Under the Boardwalk", "Up on the Roof"]
  }
}, {
question_string:"Which “Craigslist Post” song is by John Mellencamp?",
  choices: {
    correct:"I Need a Lover",
    wrong: ["Love For Sale", "Part Time Lover"]
  }
}, {
  question_string:"Which one of these “911 calls” was a song recorded by Cinderella?",
  choices: {
    correct:"Somebody Save Me",
    wrong: ["Help Is On The Way", "What's Your Emergency?"]
  }
}, {
question_string:"Which of these teenage lust songs was recorded by The Raspberries?",
  choices: {
    correct:"Go All The Way",
    wrong: ["I Think We're Alone Now", "Tonight's The Night"]
}
}, {
  question_string:"Which one of these MILF songs was recorded by Fountains of Wayne?",
  choices: {
    correct:"Stacy's Mom",
    wrong: ["Sylvia's Mother", "Mrs. Robinson"]
  }
}, {
question_string:"The sound of a power drill was Eddie Van Halen's inspiration for the opening of this song:",
  choices: {
    correct:"Poundcake",
    wrong: ["Eruption", "Janie's Crying"]
  }
}, {
  question_string:"Finish the Lyric:  “The kids in Bristol are sharp as a pistol when they do...”",
  choices: {
    correct:"The Bristol Stomp",
    wrong: ["The Bristol Boogie", "The Bristol Hop"]
  }
}, {
question_string:"What band's sound was instrumental in getting John Lennon back into the studio?",
  choices: {
    correct:"The B-52's",
    wrong: ["The Cure", "The Clash"]
}
}, {
  question_string:"Which sitcom featured Tom Hanks as a cross-dresser?",
  choices: {
    correct:"Bosom Buddies",
    wrong: ["The Night Shift", "Soap"]
  }
}, {
question_string:"What was Steve Austin's job before he became the Six Million Dollar Man?",
  choices: {
    correct:"Astronaut",
    wrong: ["Olympic Athlete", "Wrestler"]
  }
}, {
  question_string:"On “The Jeffersons”, what type of businesses did George Jefferson own?",
  choices: {
    correct:"Dry Cleaners",
    wrong: ["Diners", "Convenience Stores"]
  }
}, {
question_string:"What was the name of Tim's TV show on Home Improvement?",
  choices: {
    correct:"Tool Time",
    wrong: ["Hardware Land", "Me Fix It"]
}
}, {
  question_string:"Which Star Trek Officer hosted “In Search Of...?”",
  choices: {
    correct:"Leonard Nimoy",
    wrong: ["William Shatner", "George Takei"]
  }
}, {
question_string:"Which game show did Burt Reynolds invent based on a game he played at home with his friends?",
  choices: {
    correct:"Win, Lose or Draw",
    wrong: ["Plinko", "Concentration"]
  }
}, {
  question_string:"Which set of stars was the original and subsequent center square on “Hollywood Squares”?",
  choices: {
    correct:"Paul Lynde and Whoopie Goldberg",
    wrong: ["Jan Murray and Goldie Hawn", "Jerry Lewis and Brett Sommers"]
  }
}, {
question_string:"Which comedian was Mork and Mindy's son?",
  choices: {
    correct:"Jonathan Winters",
    wrong: ["Richard Pryor", "Andy Kaufman"]
  }
}, {
  question_string:"Which comedian was a dance instructor on “The Munsters”?",
  choices: {
    correct:"Don Rickels",
    wrong: ["Jerry Lewis", "Joey Bishop"]
  }
}, {
question_string:"What was the name of the taxi company on “Taxi”?",
  choices: {
    correct:"Sunshine Cab Company",
    wrong: ["Yellow Cab Company", "Checker Cab Company"]
  }
}, {
  question_string:"Taxi Driver was one job Elaine had on “Taxi”.  What was her other job?",
  choices: {
    correct:"Art Gallery Receptionist",
    wrong: ["Doctor's Office Receptionist", "Radio Station Receptionist"]
  }
}, {
question_string:"Two out of the three series originally aired on NBC:",
  choices: {
    correct:"Mod Squad",
    wrong: ["The Man From U.N.C.L.E.", "Miami Vice"]
}
}, {
  question_string:"Two out of the three series originally aired on CBS:",
  choices: {
    correct:"The Addams Family",
    wrong: ["Dallas", "Hawaii Five-O"]
  }
}, {
question_string:"Two out of the three series originally aired on ABC:",
  choices: {
    correct:"LA Law",
    wrong: ["Doogie Howser M.D.", "Dynasty"]
  }
}, {
  question_string:"Two out of the three series originally aired on HBO:",
  choices: {
    correct:"Episodes",
    wrong: ["The Wire", "Entourage"]
  }
}, {
question_string:"Two out of the three series originally aired on Showtime:",
  choices: {
    correct:"OZ",
    wrong: ["Ray Donovan", "Queer As Folk"]
}
}, {
  question_string:"Two out of the three series originally aired on Fox:",
  choices: {
    correct:"Sisters",
    wrong: ["All McBeal", "The Tracy Ullman Show"]
  }
}, {
question_string:"Les Nessman was WKRP's:",
  choices: {
    correct:"Newsman",
    wrong: ["Program Director", "Disc Jockey"]
  }
}, {
  question_string:"Ken Reeves was the name of this character on “The White Shadow”.",
  choices: {
    correct:"Basketball Coach",
    wrong: ["Science Teacher", "Principal"]
  }
}, {
question_string:"Who flew a helicopter on “Magnum P.I.”",
  choices: {
    correct:"T.C.",
    wrong: ["Rick", "Higgins"]
}
}, {
  question_string:"Which President said “Sock It To Me?” on “Laugh In”?",
  choices: {
    correct:"Nixon",
    wrong: ["Johnson", "Ford"]
  }
}, {
question_string:"“Crime Story” starring Dennis Farina started out in this city, where he was a cop, then moved to this city:,",
  choices: {
    correct:"Chicago to Las Vegas",
    wrong: ["New York to Miami", "Detroit to Los Angeles"]
  }
}, {
  question_string:"“The Wire” was based in this city:",
  choices: {
    correct:"Baltimore",
    wrong: ["Detroit", "Philadelphia"]
  }
}, {
question_string:"“OZ”,was based on this institution:",
  choices: {
    correct:"State Prison",
    wrong: ["VA Hospital", "Nursing Home"]
}
}, {
question_string:"The Indians on “F-Troop” were from this tribe:",
  choices: {
    correct:"Hekawi",
    wrong: ["Fekawi", "Funami"]    
}
}, {
question_string:"The Cone of Silence was used on which show?",
  choices: {
    correct:"Get Smart",
    wrong: ["The Man From U.N.C.L.E.", "Sledge Hammer!"]  
}
}, {
question_string:"Which “Batman” Villian/Actor set is incorrect?", 
  choices: {
    correct:"Louie the Lilac - Jan Murray",
    wrong: ["The Archer - Art Carney", "Egghead - Vincent Price"]    
}
}, {
question_string:"To insure the concert promoters thoroughly read their contracts, Van Halen added this clause:",
  choices: {
    correct:"No Brown M&M's",
    wrong: ["One Cherry Red Popsicle for each band member", "Peeled Red Grapes and No White Grapes"]
}
}, {
question_string:"How many times did the FBI listen to “Louie Louie” and fail to find subversive lyrics?",
  choices: {
    correct:"2,843 times",
    wrong: ["Twice", "Never"]    
}
}, {
question_string:"George Harrison's first wife Pattie Boyd and her sister Jennifer Boyd inspired artists to write how many songs about them?",
  choices: {
    correct:"Four",
    wrong: ["Two", "Six"]  
}
}, {
question_string:"The former NYC club CBGB's helped many bands break through.  What does CBGB stand for?",
  choices: {
    correct:"Country, Bluegrass and Blues",
    wrong: ["Come, bolster great bands", "Champagne, Bourbon, Gin, Brandy"]    
}
}, {
question_string:"Who jumped off the Tallahatchie Bridge?",
  choices: {
    correct:"Billy Joe",
    wrong: ["Bobby Joe", "Peggy Sue"]
}
}, {
question_string:"In this song, this “smelled like turpentine and looked like India ink”.",
  choices: {
    correct:"Love Potion #9",
    wrong: ["Dirty Water", "Black Water"]
}
}, {
question_string:"The original title for “Roseanne” was:",
  choices: {
    correct:"Life & Stuff",
    wrong: ["Cranky Mom", "Our House"]    
}
}, {
question_string:"Which member of The Who played a Choir Director on “That 70s Show”?",
  choices: {
    correct:"Roger Daltrey",
    wrong: ["Keith Moon", "Pete Townsend"]
}
}, {
question_string:"Before deciding on “Monty Python's Flying Circus”, all but one of the following were considered:",
choices: {
    correct:"Something Completely Different",
    wrong: ["Sex and Violence", "It's"]
}
}, {
question_string:"The “Fawlty Towers” hotel sign changed with every episode.  Which one of the following wasn't one of the signs?",
  choices: {
    correct:"Flarty Hours",
    wrong: ["Farty Towels", "Fatty Owls"]    
}
}, {
question_string:"Bing Crosby was offered the lead in “Columbo” but turned it down because it would interfere with his:",
  choices: {
    correct:"Golf game",
    wrong: ["Home life", "Afternoon nap"]
}
}, {
question_string:"After their second album sold 12 Million copies, Offspring guitarist Noodles was able to quit this day job:",
  choices: {
    correct:"Elementary School Custodian",
    wrong: ["Bus Driver", "Toll Taker"]
}
},{
question_string:"According to Tommy Tutone, if you dialed 867-5309, who might pick up the phone?",
  choices: {
    correct:"Jenny",
    wrong: ["Penny", "Lenny"]
}
}, {
question_string:"Who was the first female inducted into The Rock & Roll Hall of Fame?",
  choices: {
    correct:"Aretha Franklin",
    wrong: ["Patti LaBelle", "Tina Turner"]
}
}, {
question_string:"Which duo released an album entitled “King & Queen”?",
  choices: {
    correct:"Otis Redding and Carla Thomas",
    wrong: ["Marvin Gaye and Diana Ross", "Ike and Tina Turner"]    
}
}, {
question_string:"What was Prince's first hit?",
  choices: {
    correct:"I Wanna Be Your Lover",
    wrong: ["Little Red Corvette", "When Doves Cry"]
}
}, {
question_string:"Which song isn't one that Bill Withers had a hit with?",
  choices: {
    correct:"That's The Way I Feel",
    wrong: ["Ain't No Sunshine", "Lean On Me"]
}
}, {
question_string:"Which artist gave Motown their first Platinum single?",
  choices: {
    correct:"Smokey Robinson",
    wrong: ["Marvin Gaye", "The Supremes"]
}    
}, {
question_string:"Who voices SpongeBob SquarePants?",
  choices: {
    correct:"Tom Kenny",
    wrong: ["Rodger Bumpass", "Bill Fagerbakke"]  
}    
}, {
question_string:"Which character on the Fairly OddParents is voiced by Daran Norris?",
  choices: {
    correct:"Cosmo",
    wrong: ["Timmy", "Chester"]
}    
}, {
question_string:"What Pokemon did Ash Ketchum catch first?",
  choices: {
    correct:"Caterpie",
    wrong: ["Pikachu", "Charmander"]
}    
}, {
question_string:"Who has not portrayed Mermaid Man on SpongeBob?",
  choices: {
    correct:"Tim Conway",
    wrong: ["Adam West", "Ernest Borgnine"]
}    
}, {
question_string:"Who played Mario on the Super Mario Bros Super Show?",
  choices: {
    correct:"Capt. Lou Albano",
    wrong: ["Charles Martinet", "Danny Wells"]
}    
}, {
question_string:"What was Timmy's teacher's name on the Fairly OddParents?",
  choices: {
    correct:"Mr. Crocker",
    wrong: ["Mr. Cracker", "Mr. Cricket"]
}    
}, {
question_string:"What instrument does Squidward Tentacles play?",
  choices: {
    correct:"Clarinet",
    wrong: ["Tuba", "Flute"]
}    
}, {
question_string:"Where is Sandy Cheeks from?",
  choices: {
    correct:"Texas",
    wrong: ["New York", "Montana"]
}    
}, {
question_string:"What does Mr. Krabs love the most?",
  choices: {
    correct:"His Money",
    wrong: ["A Krusty Krab", "SpongeBob"]
}    
}, {
question_string:"Which girl stalks Fairly OddParents character Timmy Turner?",
  choices: {
    correct:"Tootie",
    wrong: ["Vicky", "Trixie"]
}    
}, {
question_string:"Who guest starred as King Neptune on SpongeBob?",
  choices: {
    correct:"John O'Hurley",
    wrong: ["Tim Conway", "Adam West"]
}    
}, {
question_string:"Sonny Crockett's second car on Miami Vice was a...",
  choices: {
    correct:"Ferrari Testarossa",
    wrong: ["Lamborghini Countach", "Aston Martin DB9"]
}    
}, {
question_string:"Which set of bands recorded “Our House?”",
  choices: {
    correct:"Crosby, Stills & Nash and Madness",
    wrong: ["Madness and Judy Collins", "The Clash and Crosby, Stills & Nash"]
}    
}, {
question_string:"Bill Nye is known as the...",
  choices: {
    correct:"Science Guy",
    wrong: ["Tech Guy", "News Guy"]
}
    //END OF LEVEL EIGHT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}];
// An object for a Quiz, which will contain Question objects.

var Quiz = function(quiz_name) {
  // Private fields for an instance of a Quiz object.
  this.quiz_name = quiz_name;
  
  // This one will contain an array of Question objects in the order that the questions will be presented.
  this.questions = [];
}

// A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
Quiz.prototype.add_question = function(question) {
  // Randomly choose where to add question
  var index_to_add_question = Math.floor(Math.random() * this.questions.length);
  this.questions.splice(index_to_add_question, 0, question);
}

// A function that you can enact on an instance of a quiz object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the quiz in.
Quiz.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Hide the quiz results modal
  $('#quiz-results').hide();
  
  // Write the name of the quiz
  $('#quiz-name').text(this.quiz_name);
  
  // Create a container for questions
  var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz-name');
  
  // Helper function for changing the question and updating the buttons
  function change_question() {
    self.questions[current_question_index].render(question_container);
    $('#prev-question-button').prop('disabled', current_question_index === 0);
    $('#next-question-button').prop('disabled', current_question_index === self.questions.length - 1);
    
    // Determine if all questions have been answered
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  }
  
  // Render the first question
  var current_question_index = 0;
  change_question();
  
  // Add listener for the previous question button
  $('#prev-question-button').click(function() {
    if (current_question_index > 0) {
      current_question_index--;
      change_question();
    }
  });
  
  // Add listener for the next question button
  $('#next-question-button').click(function() {
    if (current_question_index < self.questions.length - 1) {
      current_question_index++;
      change_question();
      $('#pager').text('Question ' + Number(current_question_index + 1) + ' of ' + all_questions.length);
    }
  });

  // Add listener for the submit answers button
  $('#submit-button').click(function() {
    // Determine how many questions the user got right
    var score = 0;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
        score++;
      }
    }
    
    // Display the score with the appropriate message
    var percentage = score / self.questions.length;
    console.log(percentage);
    var message;
    if (percentage === 1) {
      message = 'You scored perfectly! Enjoy your Kiip reward!'
    } else if (percentage >= .7) {
      message = 'Good work! Enjoy your Kiip reward!'
    } else {
      message = 'You are not eligible for a Kiip reward, since you did not score above 70%.'
    }
    $('#quiz-results-message').text(message);
    $('#quiz-results-score').html('You got <b>' + score + '/' + self.questions.length + '</b> questions correct.');
    $('#quiz-results').slideDown();
    $('#quiz button').slideUp();
  });
  
  // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
  question_container.bind('user-select-change', function() {
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  });
}

// An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
var Question = function(question_string, correct_choice, wrong_choices) {
  // Private fields for an instance of a Question object.
  this.question_string = question_string;
  this.choices = [];
  this.user_choice_index = null; // Index of the user's choice selection
  
  // Random assign the correct choice an index
  this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
  
  // Fill in this.choices with the choices
  var number_of_choices = wrong_choices.length + 1;
  for (var i = 0; i < number_of_choices; i++) {
    if (i === this.correct_choice_index) {
      this.choices[i] = correct_choice;
    } else {
      // Randomly pick a wrong choice to put in this index
      var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
      this.choices[i] = wrong_choices[wrong_choice_index];
      
      // Remove the wrong choice from the wrong choice array so that we don't pick it again
      wrong_choices.splice(wrong_choice_index, 1);
    }
  }
}

// A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
Question.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Fill out the question label
  var question_string_h2;
  if (container.children('h2').length === 0) {
    question_string_h2 = $('<h2>').appendTo(container);
  } else {
    question_string_h2 = container.children('h2').first();
  }
  question_string_h2.text(this.question_string);
  
  // Clear any radio buttons and create new ones
  if (container.children('input[type=radio]').length > 0) {
    container.children('input[type=radio]').each(function() {
      var radio_button_id = $(this).attr('id');
      $(this).remove();
      container.children('label[for=' + radio_button_id + ']').remove();
    });
  }
  for (var i = 0; i < this.choices.length; i++) {
    // Create the radio button
    var choice_radio_button = $('<input>')
      .attr('id', 'choices-' + i)
      .attr('type', 'radio')
      .attr('name', 'choices')
      .attr('value', 'choices-' + i)
      .attr('checked', i === this.user_choice_index)
      .appendTo(container);
    
    // Create the label
    var choice_label = $('<label>')
      .text(this.choices[i])
      .attr('for', 'choices-' + i)
      .appendTo(container);
  }
  
  // Add a listener for the radio button to change which one the user has clicked on
  $('input[name=choices]').change(function(index) {
    var selected_radio_button_value = $('input[name=choices]:checked').val();
    
    // Change the user choice index
    self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));
    
    // Trigger a user-select-change
    container.trigger('user-select-change');
  });
}

var quit=false;

function SplashBeGone() { 
  document.getElementById('splash').style.display = 'none'; 
  
} 
function Init() {
  if(quit) {
    return;
  } 
  quit=true;
  document.getElementById('splash').style.display = 'block'; 
  setTimeout(function(){ SplashBeGone(); }, 2500); 
  setTimeout(function(){window.location.href='text.html'},2500);
} 
window.onload = Init;

// "Main method" which will create all the objects and render the Quiz.
$(document).ready(function() {
  // Create an instance of the Quiz object
  var quiz = new Quiz('Music and TV Trivia');
  
  $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + all_questions.length).appendTo('#quiz');

  // Create Question objects from all_questions and add them to the Quiz object
  for (var i = 0; i < all_questions.length; i++) {
    // Create a new Question object
    var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);
    
    // Add the question to the instance of the Quiz object that we created previously
    quiz.add_question(question);
  }
  
  // Render the quiz
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
});