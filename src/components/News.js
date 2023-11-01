import React from "react";
import NewsItem from "./NewsItem";
import { useState } from "react";

const articles = [
  {
    source: {
      id: "espn",
      name: "ESPN",
    },
    author: "Kevin Seifert",
    title:
      "Vikings trade for Joshua Dobbs with Kirk Cousins out for season - ESPN - ESPN",
    description:
      "The Vikings made a trade to address the quarterback position after Kirk Cousins' season-ending injury, acquiring Joshua Dobbs from the Cardinals.",
    url: "https://www.espn.com/nfl/story/_/id/38787658/sources-vikings-acquire-joshua-dobbs-kirk-cousins-out",
    urlToImage:
      "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1030%2Fr1245791_1296x729_16%2D9.jpg",
    publishedAt: "2023-10-31T18:41:08Z",
    content:
      "EAGAN, Minn. -- The Minnesota Vikings acquired quarterback Joshua Dobbs from the Arizona Cardinals hours before the NFL's trade deadline Tuesday afternoon, giving them a measure of depth as they navi… [+2283 chars]",
  },
  {
    source: {
      id: null,
      name: "NPR",
    },
    author: "",
    title: "The FBI warns of an increased terrorist threat - NPR",
    description:
      "Senior American officials say Hamas' deadly Oct. 7 attack on Israel has created a new dynamic with dangerous implications at home and abroad.",
    url: "https://www.npr.org/2023/10/31/1209699057/wray-warns-of-increased-terrorist-threat-says-u-s-is-in-a-dangerous-period",
    urlToImage:
      "https://media.npr.org/assets/img/2023/10/31/gettyimages-1441699940_wide-102fc0fc153e6fb44a1f394552b8d55902dff4b9-s1400-c100.jpg",
    publishedAt: "2023-10-31T18:14:00Z",
    content:
      "FBI Director Christopher Wray testifies before the House Homeland Security Committee on Nov. 15, 2022.\r\nChip Somodevilla/Getty Images\r\nFBI Director Christopher Wray said Tuesday the war between Israe… [+4583 chars]",
  },
  {
    source: {
      id: null,
      name: "Deadline",
    },
    author: "Sean Piccoli",
    title:
      "Robert De Niro Erupts On Witness Stand In Defamation Trial: “Give Me A Break With This Stuff” - Deadline",
    description:
      "Robert De Niro erupted on the witness stand Tuesday at his former personal assistant during the civil trial in New York City that will decide if, among other allegations, he harassed her on the job…",
    url: "https://deadline.com/2023/10/robert-de-niro-trial-testimony-1235588343/",
    urlToImage:
      "https://deadline.com/wp-content/uploads/2023/10/GettyImages-1754397542.jpg?w=1024",
    publishedAt: "2023-10-31T18:13:00Z",
    content:
      "Robert De Niro erupted on the witness stand Tuesday at his former personal assistant during the civil trial in New York City that will decide if, among other allegations, he harassed her on the job.\r… [+6982 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Morgan Little",
    title:
      "Apple’s October Scary Fast Event: Everything revealed about the new MacBook Pro, iMac and M3 chips - TechCrunch",
    description:
      "Apple's October event was low on spooks and scares, but still packed in three M3 chips, two MacBook Pro models and a revamped iMac.",
    url: "https://techcrunch.com/2023/10/31/apples-october-scary-fast-event-everything-announced-so-far/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/10/Screenshot-2023-10-30-at-5.26.00-PM.png?resize=1200,626",
    publishedAt: "2023-10-31T17:36:13Z",
    content:
      "Apples October event had some exciting product announcements   but dont worry, there was nothing too spooky. Last week, the company announced a surprise Scary Fast event, prompting speculation that A… [+4399 chars]",
  },
  {
    source: {
      id: "nbc-news",
      name: "NBC News",
    },
    author: "Courtney Kube, Josh Lederman",
    title:
      "Israel shot down a ballistic missile fired from Yemen, U.S. officials say - NBC News",
    description:
      "Militants believed to be Iran-backed Houthi rebels fired a medium-range ballistic missile from Yemen toward Israel on Tuesday, according to two U.S. officials.",
    url: "https://www.nbcnews.com/news/world/israel-shot-down-ballistic-missile-fired-yemen-us-officials-say-rcna122936",
    urlToImage:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-10/231031-iaf-fighter-jet-mb-1256-cf9aa0.jpg",
    publishedAt: "2023-10-31T17:04:56Z",
    content:
      "Militants believed to be Houthi rebels fired a medium-range ballistic missile from Yemen toward Israel on Tuesday, according to two U.S. officials.\r\nIn a statement, the Israel Defense Forces said the… [+1690 chars]",
  },
  {
    source: {
      id: null,
      name: "NPR",
    },
    author: "Joe Hernandez",
    title:
      "FDA warns that WanaBana fruit pouches contain high lead levels, endangering children - NPR",
    description:
      "The apple cinnamon fruit puree pouches — regardless of their expiration date — are being recalled. They were sold online and in person through retailers such as Sam's Club, Amazon and Dollar Tree.",
    url: "https://www.npr.org/2023/10/31/1209685022/wanabana-fruit-pouches-lead-fda",
    urlToImage:
      "https://media.npr.org/assets/img/2023/10/31/ap23303598908848_wide-9a876bf63ba9f02103e7e2bea2bc5964cf484315-s1400-c100.jpg",
    publishedAt: "2023-10-31T17:00:22Z",
    content:
      "This photo provided by the U.S. Food and Drug Administration on Oct. 28, 2023, shows a WanaBana apple cinnamon fruit puree pouch.\r\nAP\r\nThe Food and Drug Administration is urging parents and caregiver… [+1973 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Tom Warren",
    title:
      "Microsoft's Windows 11 2023 Update arrives with Microsoft Teams changes - The Verge",
    description:
      "Microsoft is finally releasing its big Windows 11 2023 Update, but most of the new changes already appeared last month. The update includes changes to Microsoft Teams.",
    url: "https://www.theverge.com/2023/10/31/23940033/microsoft-windows-11-2023-update-download-available",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/fK93c6-cYxSDq7Hq6VWqYT96VhM=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22900766/bfarsace_211004_4777_0003.jpg",
    publishedAt: "2023-10-31T17:00:00Z",
    content:
      "Microsofts Windows 11 2023 Update arrives with Microsoft Teams changes\r\nMicrosofts Windows 11 2023 Update arrives with Microsoft Teams changes\r\n / Windows 11 2023 Update includes all of the big new W… [+2026 chars]",
  },
  {
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "Quinn Owen, Luke Barr",
    title:
      "Rising antisemitism since Hamas' terror attack in Israel is part of 'preexisting' trend, DHS chief says - ABC News",
    description:
      "The FBI director said there's no indication Hamas is operating in the U.S.",
    url: "https://abcnews.go.com/Politics/rising-antisemitism-hamas-terror-attack-israel-part-preexisting/story?id=104509668",
    urlToImage:
      "https://i.abcnewsfe.com/a/c03a47d9-9867-4080-aaff-2504aa86535d/alejandro-mayorkas-ap-jef-231031_1698761520818_hpMain_16x9.jpg?w=992",
    publishedAt: "2023-10-31T16:28:28Z",
    content:
      'A rise in antisemitism since Hamas\' Oct. 7 terror attack on Israel is part of "preexisting increase ... in the United States and around the world," Homeland Security Secretary Alejandro Mayorkas told… [+3527 chars]',
  },
  {
    source: {
      id: null,
      name: "Entertainment Tonight",
    },
    author: "Meredith B. Kile",
    title:
      "Taylor Swift and Travis Kelce Plan to Spend Halloween Together: Source (Exclusive) - Entertainment Tonight",
    description:
      "With so many couples dressing up as 'Swelce' this year, what will the real-life pair go as?",
    url: "https://www.etonline.com/taylor-swift-and-travis-kelce-plan-to-spend-halloween-together-source-exclusive-213943",
    urlToImage:
      "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2023-10/ETD_SHOWCLIP_A04%20SWELCE_102323_VIDPIC.jpg?h=af222255",
    publishedAt: "2023-10-31T16:27:00Z",
    content:
      "With so many couples going in costume as Taylor Swift and Travis Kelce this Halloween, we have to wonder -- who will the real-life couple dress up as?\r\nA source told ET on Tuesday that the pair plans… [+2061 chars]",
  },
  {
    source: {
      id: "entertainment-weekly",
      name: "Entertainment Weekly",
    },
    author: "https://www.facebook.com/entertainmentweekly",
    title:
      "John Stamos shares sweet Matthew Perry memory from 'Friends' set - Entertainment Weekly News",
    description:
      "John Stamos paid tribute to Matthew Perry, recalling the late star's kind gesture to him when Stamos made a cameo on 'Friends': 'I never forgot that.'",
    url: "https://ew.com/tv/john-stamos-matthew-perry-tribute-friends-set/",
    urlToImage:
      "https://ew.com/thmb/X8khsR2DRplEoZ_0LJLpzVMJQ4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/John-Stamos-Matthew-Perry-103123-54260e76a07b4cf2a08ca62d7afa9dcd.jpg",
    publishedAt: "2023-10-31T16:20:00Z",
    content:
      "John Stamos is remembering Matthew Perry with a sweet story about his kindness on the set of Friends.\r\nThe Full House alum has added his voice to the many stars paying tribute to Perry, who died Satu… [+3160 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Ariel Edwards-Levy, Jennifer Agiesta",
    title:
      "CNN Poll: Trump dominates South Carolina GOP primary, with Haley a clear but distant second - CNN",
    description:
      "Former President Donald Trump currently holds majority support in the early primary state of South Carolina, where his strongest challenger is Nikki Haley, the state’s former governor, according to a new CNN poll conducted by SSRS.",
    url: "https://www.cnn.com/2023/10/31/politics/cnn-poll-south-carolina-trump-haley/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/2023-08-06t013925z-1600968756-rc21i2a1cs5r-rtrmadp-3-usa-election-trump.JPG?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-10-31T16:02:00Z",
    content:
      "Former President Donald Trump currently holds majority support in the early primary state of South Carolina, where his strongest challenger is Nikki Haley, the states former governor, according to a … [+6986 chars]",
  },
  {
    source: {
      id: null,
      name: "The Athletic",
    },
    author: "Law Murray",
    title:
      "With James Harden trade, Clippers go for it and 76ers move on - The Athletic",
    description:
      "The Clippers now have their big four and a legitimate chance to compete for a championship.",
    url: "https://theathletic.com/5015092/2023/10/31/clippers-sixers-james-harden-trade/",
    urlToImage:
      "https://cdn.theathletic.com/app/uploads/2023/10/31100905/GettyImages-1245804258-scaled.jpg",
    publishedAt: "2023-10-31T15:59:36Z",
    content:
      "It appeared that the NBAs business Monday night was done around 10 p.m. Pacific Time. Thats when the Los Angeles Lakers and Orlando Magic concluded their matchup to end a schedule of 11 games. Turns … [+6790 chars]",
  },
  {
    source: {
      id: null,
      name: "NPR",
    },
    author: "Adam Frank",
    title: "Book review: Carlo Rovelli's 'White Holes' - NPR",
    description:
      "Physicist Carlo Rovelli is unique among modern scientists who write for popular audiences in his ability to capture the purest essence of his science with both precision and lyricism.",
    url: "https://www.npr.org/2023/10/31/1209487538/book-review-carlo-rovelli-white-holes",
    urlToImage:
      "https://media.npr.org/assets/img/2023/10/31/white_wide-b7c42e257a72f24b0ca70976f602554887939327-s1400-c100.jpg",
    publishedAt: "2023-10-31T15:35:32Z",
    content:
      "Horizons are weird. They delimit what we can see in the distance, but they are also always personal: Walk 10 miles to the west and your horizon line moves 10 miles to the west with you.\r\nRemarkably, … [+4672 chars]",
  },
  {
    source: {
      id: null,
      name: "Eurogamer.net",
    },
    author: null,
    title:
      "Jusant review - soaring design and skyscraping climbs - Eurogamer.net",
    description: "Our review of the evocative climbing game Jusant.",
    url: "https://www.eurogamer.net/jusant-review",
    urlToImage:
      "https://assetsio.reedpopcdn.com/scmwn3.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    publishedAt: "2023-10-31T15:30:00Z",
    content:
      "A gorgeous fantasy journey enlivened by some thrilling rock-climbing.\r\nOh yes. It was the bit in the movie where you leap from one spar of a broken bridge to another, and try to avoid thinking of the… [+11104 chars]",
  },
  {
    source: {
      id: "bloomberg",
      name: "Bloomberg",
    },
    author: "Jennifer A Dlouhy",
    title:
      "Dominion Wins Approval for Biggest-Yet US Offshore Wind Farm - Bloomberg",
    description:
      "Dominion Energy Inc. secured permission Tuesday from the US Interior Department to build a 2.6-gigawatt offshore wind farm near the Virginia coast — making it the country’s largest-ever authorized offshore wind venture.",
    url: "https://www.bloomberg.com/news/articles/2023-10-31/dominion-wins-approval-for-biggest-yet-us-offshore-wind-farm",
    urlToImage:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iwLm7DlucPGE/v1/1200x800.jpg",
    publishedAt: "2023-10-31T15:17:12Z",
    content:
      "Dominion Energy Inc. secured permission Tuesday from the US Interior Department to build a 2.6-gigawatt offshore wind farm near the Virginia coast making it the countrys largest-ever authorized offsh… [+331 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "How They Did It: Labor Journalist Jane Slaughter on UAW’s “Life-Changing” Deal with Big 3 Automakers - Democracy Now!",
    description:
      "The United Auto Workers union has reached tentative agreements with Ford, Stellantis and General Motors, and workers are returning as they end a historic six...",
    url: "https://www.youtube.com/watch?v=7M8HFJNzXlY",
    urlToImage: "https://i.ytimg.com/vi/7M8HFJNzXlY/maxresdefault.jpg",
    publishedAt: "2023-10-31T15:11:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "AZCentral",
    },
    author: "Jeremy Cluff",
    title:
      "World Series umpire Alfonso Marquez ripped for Rangers vs. DBacks zone - The Arizona Republic",
    description:
      "To say the home plate umpire had a rough night in Game 3 of the World Series between the Arizona Diamondbacks and Texas Rangers is an understatement.",
    url: "https://www.azcentral.com/story/sports/mlb/diamondbacks/2023/10/31/world-series-umpire-alfonso-marquez-ripped-rangers-dbacks-game-3/71393060007/",
    urlToImage:
      "https://www.azcentral.com/gcdn/authoring/authoring-images/2023/10/31/PPHX/71389079007-20231030-ojr-usa-076.JPG?crop=8503,4784,x0,y433&width=3200&height=1801&format=pjpg&auto=webp",
    publishedAt: "2023-10-31T14:58:51Z",
    content:
      "To say that the home plate umpire had a rough night in Game 3 of the World Series between the Arizona Diamondbacks  and Texas Rangers would be an understatement.\r\nUmpire Alfonso Marquez was shredded … [+1163 chars]",
  },
  {
    source: {
      id: "the-hill",
      name: "The Hill",
    },
    author: "Nick Robertson",
    title:
      "Kinzinger says family disowned him over loss of Hannity’s trust - The Hill",
    description:
      "Former Rep. Adam Kinzinger (R-Ill.) said he was disowned by his family after he left Congress and “lost the trust” of Fox News host Sean Hannity. “So, I had family that sent a certified letter disowning me,” Kinzinger said in a CNN interview Monday. “They sai…",
    url: "https://thehill.com/homenews/4285023-adam-kinzinger-family-disowned-sean-hannity/",
    urlToImage:
      "https://thehill.com/wp-content/uploads/sites/2/2022/08/kinzingeradam_072122gn7_w.jpg?w=1280",
    publishedAt: "2023-10-31T14:20:00Z",
    content:
      "Skip to content\r\nFormer Rep. Adam Kinzinger (R-Ill.) said he was disowned by his family after he left Congress and “lost the trust” of Fox News host Sean Hannity.\r\n“So, I had family that sent a certi… [+1417 chars]",
  },
  {
    source: {
      id: null,
      name: "The Cut",
    },
    author: "Tariro Mzezewa",
    title: "Zoë Kravitz and Channing Tatum Are Reportedly Engaged - The Cut",
    description:
      "Zoë Kravitz and Channing Tatum, who have apparently been dating for two years, are reportedly engaged. Time flies when you’re riding around together on a tiny bike!",
    url: "http://www.thecut.com/2023/10/zoe-kravitz-channing-tatum-engaged.html",
    urlToImage:
      "https://pyxis.nymag.com/v1/imgs/bbe/d38/8c091557bb5d02d2e5edd7821373cca092-kravitz-tatum.1x.rsocial.w1200.jpg",
    publishedAt: "2023-10-31T14:09:46Z",
    content:
      "Depending on your relationship to time, it might feel like Zoë Kravitz and Channing Tatum have been together for a decade or a month. But apparently, its been two years since they started dating at l… [+1435 chars]",
  },
  {
    source: {
      id: null,
      name: "Space.com",
    },
    author: "Samantha Mathewson",
    title:
      "'Bones' of cosmic hand revealed in creepy NASA X-ray telescope views (video, photo) - Space.com",
    description:
      "NASA's newest X-ray space telescope has captured a ghostly view of a stellar explosion whose remains resemble a skeleton hand.",
    url: "https://www.space.com/cosmic-hand-bones-creepy-nasa-photo-video",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/ZNhz2pQ3Kz4MoSZWw5NDNC-1200-80.jpg",
    publishedAt: "2023-10-31T14:04:30Z",
    content:
      "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036.",
  },
];

function News() {
  const [data, setData] = useState(articles);

  return (
    <div className="container my-3">
      <h2>NewsDonkey - Top headlines</h2>
      <div className="row">
        {data.map((element) => (
          <div className="col-md-4">
            <NewsItem
              key={element.url}
              title={element.title.slice(0,45)}
              description={element.description.slice(0,88)}
              imageURL={element.urlToImage}
              newsURL={element.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
