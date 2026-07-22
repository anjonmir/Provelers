export type Place = {
  id: number;

  name: string;

  location: string;

  postalAddress: string;

  category: string;

  image: string;

  description: string;

  rating: number;

  reviews: number;

  savedCount: number;

  hiddenGem: boolean;

  lat: number;

  lng: number;

  wikipediaUrl?: string;
};
export const mockPlaces = [
  {
    id: 1,
    name: "Ghora Dighi",
    location: "Bagerhat",
    postalAddress:
      "Ghora Dighi, Satgombuj Union, Bagerhat Sadar Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Lakes",

    image: "images/places/bangladesh/ghora-dighi-1.jpeg",

    description: `
Ghora Dighi is one of the largest historic reservoirs in Bangladesh and is closely connected with the ancient Mosque City of Bagerhat.

The dighi was excavated during the rule of Khan Jahan Ali in the 15th century to provide water for the growing settlement. Today, visitors come here to enjoy the peaceful surroundings while exploring nearby historical monuments such as the Sixty Dome Mosque and Bibi Begni Mosque.

Walking beside the large water body during the morning or late afternoon offers a calm experience and beautiful views of the surrounding heritage area.
`,

    rating: 4.6,

    reviews: 846,

    savedCount: 431,

    lat: 22.6742,

    lng: 89.7425,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },

  {
    id: 2,
    name: "Bibi Begni Mosque",

    location: "Bagerhat",

    postalAddress:
      "Barakpur Village, Satgombuj Union, Bagerhat Sadar Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/bibi-begni-mosque-1.jpeg",

    description: `
Bibi Begni Mosque is one of the historic mosques located in the UNESCO heritage area of Bagerhat.

It stands on the western side of Ghora Dighi, only a short distance from the famous Sixty Dome Mosque. The mosque is known for its large single dome, thick brick walls and beautiful Sultanate architecture that has survived for hundreds of years.

Although many visitors come for the nearby Sixty Dome Mosque, this peaceful mosque is also worth exploring while visiting the historic city.
`,

    rating: 4.6,

    reviews: 712,

    savedCount: 356,

    lat: 22.67642,

    lng: 89.73498,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Bibi_Begni_Mosque",
  },

  {
    id: 3,

    name: "Sixty Dome Mosque",

    location: "Bagerhat",

    postalAddress:
      "Shat Gombuj, Bagerhat Sadar Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/sixty-dome-mosque-1.jpeg",

    description: `
The Sixty Dome Mosque is one of the most famous historical landmarks in Bangladesh and a UNESCO World Heritage Site.

Built by Khan Jahan Ali during the 15th century, the mosque is admired for its beautiful brick architecture, massive pillars and rows of domes. It is considered one of the finest examples of Sultanate architecture in the country.

Visitors usually spend time exploring the mosque complex, nearby museums and the surrounding heritage area, making it one of the top destinations in Bagerhat.
`,

    rating: 4.9,

    reviews: 7648,

    savedCount: 4316,

    lat: 22.67453,

    lng: 89.74182,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sixty_Dome_Mosque",
  },
  {
    id: 4,
    name: "Mongla Port Area",
    location: "Mongla, Bagerhat",
    postalAddress:
      "Mongla Port, Mongla Municipality, Mongla Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Ports",

    image: "images/places/bangladesh/mongla-port-area-1.jpeg",

    description: `
Mongla Port is the second-largest seaport in Bangladesh and an important gateway to the southwestern part of the country.

Besides its commercial importance, the port area attracts visitors who enjoy watching large cargo ships, river traffic, and beautiful sunsets over the Pasur River. It is also one of the main starting points for tours to the Sundarbans.

Many travelers stop here before beginning their journey into the world's largest mangrove forest.
`,

    rating: 4.5,

    reviews: 1243,

    savedCount: 584,

    lat: 22.4879,

    lng: 89.6011,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Port_of_Mongla",
  },
  {
    id: 5,
    name: "Nine Dome Mosque",
    location: "Bagerhat",
    postalAddress:
      "Shatgombuj Union, Bagerhat Sadar Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/nine-dome-mosque-1.jpeg",

    description: `
The Nine Dome Mosque is one of the historic monuments inside the Mosque City of Bagerhat.

Built during the 15th century, the mosque is known for its nine domes arranged in three rows and its beautiful brick architecture. Although it is smaller than the Sixty Dome Mosque, it is an important part of the UNESCO heritage area.

The peaceful surroundings and historical atmosphere make it a great place for visitors who want to explore the less crowded monuments of Bagerhat.
`,

    rating: 4.7,

    reviews: 694,

    savedCount: 351,

    lat: 22.6586,

    lng: 89.7553,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Nine_Dome_Mosque",
  },
  {
    id: 6,
    name: "Khan Jahan Ali Bridge",
    location: "Rupsha, Khulna",
    postalAddress:
      "Khulna–Mongla Highway, Rupsha Upazila, Khulna District, Khulna Division, Bangladesh",

    category: "Bridges",

    image: "images/places/bangladesh/khan-jahan-ali-bridge-1.jpeg",

    description: `
Khan Jahan Ali Bridge, also known as Rupsha Bridge, connects Khulna with Bagerhat across the Rupsha River.

The bridge is an important transportation route to Mongla Port and the Sundarbans. It is also a popular place for local visitors who come to enjoy the river view, fresh air, and colorful sunsets.

During the evening, the bridge offers a beautiful view of boats moving along the Rupsha River and the city lights reflecting on the water.
`,

    rating: 4.7,

    reviews: 1432,

    savedCount: 682,

    lat: 22.7844,

    lng: 89.5786,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/খান_জাহান_আলী_সেতু",
  },
  {
    id: 7,
    name: "Kodla Math",
    location: "Bagerhat",
    postalAddress:
      "Ayodhya Village, Baruipara Union, Bagerhat Sadar Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Historical Sites",

    image: "images/places/bangladesh/kodla-math-1.jpeg",

    description: `
Kodla Math, also known as Ayodhya Math, is one of the most unique historical monuments in Bagerhat.

The tall brick temple was built several centuries ago and is well known for its impressive tower and beautiful architectural design. Unlike the nearby Islamic monuments, Kodla Math represents the Hindu heritage of the region and adds to the cultural diversity of Bagerhat.

It is a quiet place where visitors can enjoy history, architecture, and the peaceful village surroundings.
`,

    rating: 4.5,

    reviews: 268,

    savedCount: 174,

    lat: 22.74198,

    lng: 89.77261,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/কোদলা_মঠ",
  },
  {
    id: 8,
    name: "Mausoleum of Khan Jahan Ali",
    location: "Bagerhat",
    postalAddress:
      "Thakur Dighi, Shatgombuj Union, Bagerhat Sadar Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Historical Sites",

    image: "images/places/bangladesh/mausoleum-of-khan-jahan-ali-1.jpeg",

    description: `
The Mausoleum of Khan Jahan Ali is one of the most important historical places in Bagerhat.

It is the burial place of the famous Muslim saint Khan Jahan Ali, who played a major role in developing the historic city during the 15th century. The tomb stands beside the large Thakur Dighi, where visitors can also see the famous marsh crocodiles.

People visit the site for both its historical importance and its peaceful atmosphere throughout the year.
`,

    rating: 4.8,

    reviews: 2316,

    savedCount: 1185,

    lat: 22.65917,

    lng: 89.75917,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Mausoleum_of_Khan_Jahan_Ali",
  },
  {
    id: 9,
    name: "Ronvijoypur Mosque",
    location: "Bagerhat",
    postalAddress:
      "Ronvijoypur Village, Shatgombuj Union, Bagerhat Sadar Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/ronvijoypur-mosque-1.jpeg",

    description: `
Ronvijoypur Mosque is one of the historic mosques inside the Mosque City of Bagerhat.

The mosque is famous for having one of the largest single brick domes in Bangladesh. Its thick brick walls and simple architectural style reflect the construction techniques used during the Bengal Sultanate period.

Since it is less crowded than some of the major monuments, visitors can enjoy a quiet historical experience while exploring the heritage area.
`,

    rating: 4.6,

    reviews: 314,

    savedCount: 182,

    lat: 22.66889,

    lng: 89.74972,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 10,
    name: "Reza Khoda Mosque",
    location: "Bagerhat",
    postalAddress:
      "Shatgombuj Union, Bagerhat Sadar Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/reza-khoda-mosque-1.jpeg",

    description: `
Reza Khoda Mosque is one of the archaeological monuments located in the historic Mosque City of Bagerhat.

Although much of the original structure has been damaged over time, the remaining walls and foundations still show the impressive construction style of the Bengal Sultanate period. The site is protected as part of the historic heritage of Bagerhat.

It is a good place to visit for anyone interested in archaeology and the early history of the region.
`,

    rating: 4.4,

    reviews: 196,

    savedCount: 127,

    lat: 22.65983,

    lng: 89.75712,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 11,

    name: "Singair Mosque",

    location: "Bagerhat",

    postalAddress:
      "Shatgombuj Union, Bagerhat Sadar Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/singair-mosque-1.jpeg",

    description: `
Singair Mosque is one of the well-preserved historic mosques in the Mosque City of Bagerhat.

Built during the 15th century, the mosque is known for its single dome, thick brick walls, and beautiful Sultanate architecture. It stands opposite the famous Sixty Dome Mosque and is an important part of the UNESCO World Heritage Site.

Although smaller than some nearby monuments, the mosque offers visitors a peaceful place to appreciate the history and architecture of medieval Bengal.
`,

    rating: 4.6,

    reviews: 528,

    savedCount: 276,

    lat: 22.67389,

    lng: 89.74083,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Singair_Mosque",
  },

  {
    id: 12,

    name: "Zindapir Mosque",

    location: "Bagerhat",

    postalAddress:
      "Zindapir Complex, Shatgombuj Union, Bagerhat Sadar Upazila, Bagerhat District, Khulna Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/zindapir-mosque-1.jpeg",

    description: `
Zindapir Mosque is a historic mosque located inside the Mosque City of Bagerhat.

The mosque was built during the Bengal Sultanate period and stands beside the Tomb of Zindapir. Its single dome, thick brick walls, and traditional architectural style make it an important part of the historic complex.

The quiet surroundings and historical importance make it a worthwhile stop while exploring the UNESCO heritage area.
`,

    rating: 4.5,

    reviews: 284,

    savedCount: 149,

    lat: 22.65917,

    lng: 89.75222,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/জিন্দা_পীর_মসজিদ",
  },

  {
    id: 13,

    name: "Shoilo Propat",

    location: "Bandarban",

    postalAddress:
      "Milanchari Area, Chimbuk Road, Bandarban Sadar Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Waterfalls",

    image: "images/places/bangladesh/shoilo-propat-1.jpeg",

    description: `
Shoilo Propat is one of the most popular waterfalls in Bandarban and is located beside the scenic Chimbuk Road.

Fresh water flows down from the surrounding hills throughout most of the year, making it a favorite stop for travelers heading toward Chimbuk and Nilgiri. Small shops run by local indigenous communities nearby sell traditional foods, handicrafts, and seasonal hill fruits.

Because it is easy to reach by road, Shoilo Propat is one of the most visited natural attractions in Bandarban.
`,

    rating: 4.7,

    reviews: 2854,

    savedCount: 1412,

    lat: 22.16431,

    lng: 92.21556,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "June - September",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Shoilo_Propat",
  },
  {
    id: 14,

    name: "Nilgiri Hills",

    location: "Bandarban",

    postalAddress:
      "Nilgiri Tourist Centre, Thanchi Road, Bandarban Sadar Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Mountains",

    image: "images/places/bangladesh/nilgiri-hills-1.jpeg",

    description: `
Nilgiri Hills is one of the highest and most popular tourist destinations in Bangladesh.

Located high above the surrounding valleys, the viewpoint offers breathtaking views of endless green hills and clouds floating below during the rainy season. Visitors also enjoy beautiful sunrises, sunsets, and cool weather throughout the year.

The resort is managed by the Bangladesh Army and is one of the most visited places in Bandarban.
`,

    rating: 4.8,

    reviews: 9876,

    savedCount: 5184,

    lat: 22.01944,

    lng: 92.3275,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "", //I need to add wikipedia link here this is a mark that I will follow later
  },
  {
    id: 15,

    name: "Mirinja Tourism Complex",

    location: "Lama, Bandarban",

    postalAddress:
      "Mirinja Tourism Complex, Lama Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Mountains",

    image: "images/places/bangladesh/mirinja-tourism-complex-1.jpeg",

    description: `
Mirinja Tourism Complex is a scenic hilltop destination in Lama, Bandarban.

The viewpoint is famous for its wide mountain views, sea of clouds during the monsoon season, and beautiful sunsets. Visitors can also enjoy the observation tower and peaceful natural surroundings away from the busy tourist spots.

Because it is still less crowded than many famous destinations, Mirinja is a great place for travelers looking for a quieter experience.
`,

    rating: 4.7,

    reviews: 1183,

    savedCount: 684,

    lat: 21.78583,

    lng: 92.20389,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October -March",

    wikipediaUrl: "", //I need to add wikipedia link here this is a mark that I will follow later
  },
  {
    id: 16,

    name: "Boga Lake",

    location: "Ruma, Bandarban",

    postalAddress:
      "Boga Lake, Ruma Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Lakes",

    image: "images/places/bangladesh/boga-lake-1.jpeg",

    description: `
Boga Lake is one of the most beautiful natural lakes in Bangladesh and a favorite destination for adventure lovers.

Surrounded by green hills, the lake sits at an elevation of about 380 meters above sea level. Its crystal-clear water, peaceful atmosphere, and nearby indigenous villages make it one of the most memorable places in Bandarban.

Many travelers stay overnight near the lake before trekking to Keokradong or other nearby mountain trails.
`,

    rating: 4.9,

    reviews: 8452,

    savedCount: 4568,

    lat: 21.9785,

    lng: 92.4699,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Boga_Lake_(Bangladesh)",
  },

  {
    id: 17,

    name: "Ruma Bazar",

    location: "Ruma, Bandarban",

    postalAddress:
      "Ruma Bazar, Ruma Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Towns",

    image: "images/places/bangladesh/ruma-bazar-1.jpeg",

    description: `
Ruma Bazar is the main gateway for many of Bandarban's famous trekking destinations.

Travelers usually begin their journeys to Boga Lake, Keokradong, Tajingdong, and other remote attractions from here. The small riverside town offers local markets, food, accommodation, and transportation services for visitors.

Its peaceful environment and surrounding green hills make it an attractive stop before heading into the mountains.
`,

    rating: 4.6,

    reviews: 1186,

    savedCount: 635,

    lat: 22.0495,

    lng: 92.4055,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 18,

    name: "Nilachal",

    location: "Bandarban",

    postalAddress:
      "Nilachal Tourist Centre, Bandarban Sadar Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Mountains",

    image: "images/places/bangladesh/nilachal-1.jpeg",

    description: `
Nilachal is one of the most popular hilltop viewpoints in Bandarban.

Located only a few kilometers from Bandarban town, it offers panoramic views of the surrounding hills, valleys, and clouds. During sunrise and sunset, the scenery becomes especially beautiful, attracting visitors throughout the year.

Because of its easy access and excellent viewpoints, Nilachal is one of the top tourist attractions in the district.
`,

    rating: 4.8,

    reviews: 6247,

    savedCount: 3275,

    lat: 22.1838,

    lng: 92.2193,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 19,

    name: "Tajingdong",

    location: "Ruma, Bandarban",

    postalAddress:
      "Tajingdong, Ruma Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Mountains",

    image: "images/places/bangladesh/tajingdong-1.jpeg",

    description: `
Tajingdong, also known as Bijoy, is one of the highest mountain peaks in Bangladesh.

Reaching the summit requires trekking through remote hills, forests, and indigenous villages. The route offers spectacular mountain scenery and is popular among experienced hikers.

The peak provides breathtaking views of the surrounding hill ranges, making it one of the country's best adventure destinations.
`,

    rating: 4.9,

    reviews: 1837,

    savedCount: 1168,

    lat: 21.7867,

    lng: 92.5883,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Tazing_Dong",
  },
  {
    id: 20,

    name: "Amiakhum Waterfall",

    location: "Thanchi, Bandarban",

    postalAddress:
      "Nakshiyang Area, Thanchi Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Waterfalls",

    image: "images/places/bangladesh/amiakhum-waterfall-1.jpeg",

    description: `
Amiakhum Waterfall is one of the most spectacular waterfalls in Bangladesh.

Located deep inside the hills of Thanchi, reaching the waterfall requires river travel and trekking through remote mountain trails. The powerful flow of water and dramatic rocky landscape make it a dream destination for adventure lovers.

Because of its remote location, visitors usually travel with local guides and spend several days exploring the surrounding natural attractions.
`,

    rating: 4.9,

    reviews: 2694,

    savedCount: 1726,

    lat: 21.7767,

    lng: 92.5489,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Amiakhum_Waterfall",
  },
  {
    id: 21,

    name: "Nafakhum Waterfall",

    location: "Thanchi, Bandarban",

    postalAddress:
      "Remakri Union, Thanchi Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Waterfalls",

    image: "images/places/bangladesh/nafakhum-waterfall-1.jpeg",

    description: `
Nafakhum Waterfall is one of the largest and most powerful waterfalls in Bangladesh.

Located on the Remakri River in the remote hills of Thanchi, the waterfall can only be reached after a river journey and a long trek through the mountains. During the rainy season, the strong current creates a spectacular natural view that attracts adventure travelers from across the country.

It is one of the most popular trekking destinations in the Chittagong Hill Tracts.
`,

    rating: 4.9,

    reviews: 3248,

    savedCount: 1964,

    lat: 21.1603,

    lng: 92.4878,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Nafakhum",
  },
  {
    id: 22,

    name: "Sangu River",

    location: "Bandarban",

    postalAddress: "Bandarban District, Chattogram Division, Bangladesh",

    category: "Rivers",

    image: "images/places/bangladesh/sangu-river-1.jpeg",

    description: `
The Sangu River is one of the most scenic rivers in southeastern Bangladesh.

Flowing through the hills of Bandarban before entering the Bay of Bengal, the river is famous for its winding course, boat journeys, and beautiful mountain scenery. It is an important transportation route for many remote communities and a favorite destination for nature lovers.

Many visitors travel along the river while exploring Bandarban's waterfalls and trekking routes.
`,

    rating: 4.8,

    reviews: 1845,

    savedCount: 943,

    lat: 21.8333,

    lng: 92.4333,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sangu_River",
  },
  {
    id: 23,

    name: "Buddha Dhatu Jadi (Golden Temple)",

    location: "Bandarban",

    postalAddress:
      "Balaghata, Bandarban Sadar Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Temples",

    image: "images/places/bangladesh/buddha-dhatu-jadi-1.jpeg",

    description: `
Buddha Dhatu Jadi, widely known as the Golden Temple, is the largest Theravada Buddhist temple in Bangladesh.

The hilltop temple is famous for its golden architecture, peaceful atmosphere, and panoramic views of Bandarban. It houses sacred Buddhist relics and is an important place of worship for the Buddhist community as well as a major tourist attraction.

Visitors are requested to dress modestly and follow temple rules while visiting.
`,

    rating: 4.9,

    reviews: 4873,

    savedCount: 2481,

    lat: 22.1953,

    lng: 92.2188,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Buddha_Dhatu_Jadi",
  },
  {
    id: 24,

    name: "Rijuk Waterfall",

    location: "Ruma, Bandarban",

    postalAddress:
      "Ruma Upazila, Bandarban District, Chattogram Division, Bangladesh",

    category: "Waterfalls",

    image: "images/places/bangladesh/rijuk-waterfall-1.jpeg",

    description: `
Rijuk Waterfall is a peaceful waterfall located near Ruma in Bandarban.

The waterfall is surrounded by green hills and forests, making it an attractive destination for visitors looking for a quieter experience. During the monsoon season, the water flow becomes much stronger and the scenery becomes even more beautiful.

It is often visited together with other attractions around Ruma.
`,

    rating: 4.6,

    reviews: 612,

    savedCount: 336,

    lat: 22.0424,

    lng: 92.4025,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "June - September",

    wikipediaUrl: "",
  },
  {
    id: 25,

    name: "Mahasthangarh",

    location: "Bogura",

    postalAddress:
      "Shibganj Upazila, Bogura District, Rajshahi Division, Bangladesh",

    category: "Archaeological Sites",

    image: "images/places/bangladesh/mahasthangarh-1.jpeg",

    description: `
Mahasthangarh is the oldest known archaeological site in Bangladesh and was once the ancient capital of the Pundra Kingdom.

The fortified city dates back more than 2,000 years and contains ancient walls, temples, monasteries, ponds, and archaeological remains. It is one of the country's most important historical landmarks and attracts visitors interested in the history of ancient Bengal.

The site is managed by the Department of Archaeology.
`,

    rating: 4.9,

    reviews: 8425,

    savedCount: 4218,

    lat: 24.9617,

    lng: 89.3425,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Mahasthangarh",
  },
  {
    id: 26,

    name: "Vasu Vihara",

    location: "Bogura",

    postalAddress:
      "Shibganj Upazila, Bogura District, Rajshahi Division, Bangladesh",

    category: "Archaeological Sites",

    image: "images/places/bangladesh/vasu-vihara-1.jpeg",

    description: `
Vasu Vihara is an ancient Buddhist monastery located near Mahasthangarh in Bogura.

The archaeological site dates back to the Pala period and was once an important center of Buddhist learning. Excavations have uncovered monastery buildings, temples, and valuable historical artifacts that reveal the rich Buddhist heritage of ancient Bengal.

Today it is a peaceful destination for history lovers and archaeology enthusiasts.
`,

    rating: 4.6,

    reviews: 648,

    savedCount: 344,

    lat: 24.9793,

    lng: 89.3368,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Vasu_Vihara",
  },
  {
    id: 27,

    name: "Mahasthangarh Archaeological Museum",

    location: "Bogura",

    postalAddress:
      "Shibganj Upazila, Bogura District, Rajshahi Division, Bangladesh",

    category: "Museums",

    image:
      "images/places/bangladesh/mahasthangarh-archaeological-museum-1.jpeg",

    description: `
Mahasthangarh Archaeological Museum preserves thousands of artifacts discovered from Mahasthangarh and nearby archaeological sites.

Visitors can explore ancient sculptures, inscriptions, coins, terracotta plaques, pottery, and other historical objects that showcase the civilization of ancient Bengal.

The museum is an essential stop before visiting the Mahasthangarh citadel.
`,

    rating: 4.7,

    reviews: 1238,

    savedCount: 672,

    lat: 24.9609,

    lng: 89.3433,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl:
      "https://bn.wikipedia.org/wiki/মহাস্থান_প্রত্নতাত্ত্বিক_জাদুঘর",
  },
  {
    id: 28,

    name: "Khodar Pathar Bhita",

    location: "Bogura",

    postalAddress:
      "Shibganj Upazila, Bogura District, Rajshahi Division, Bangladesh",

    category: "Historical Sites",

    image: "images/places/bangladesh/khodar-pathar-bhita-1.jpeg",

    description: `
Khodar Pathar Bhita is a historic site located near Mahasthangarh in Bogura.

The site is associated with a large stone that has long been regarded as sacred by local people. Along with its religious importance, it is also connected with the archaeological heritage of the Mahasthangarh region.

Visitors often include it while exploring the surrounding historical monuments.
`,

    rating: 4.4,

    reviews: 341,

    savedCount: 182,

    lat: 24.9578,

    lng: 89.3471,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/খোদার_পাথর_ভিটা",
  },
  {
    id: 29,

    name: "Gokul Medh (Behula's Bashor Ghor)",

    location: "Bogura",

    postalAddress:
      "Gokul Union, Bogura Sadar Upazila, Bogura District, Rajshahi Division, Bangladesh",

    category: "Archaeological Sites",

    image: "images/places/bangladesh/gokul-medh-1.jpeg",

    description: `
Gokul Medh, popularly known as Behula's Bashor Ghor, is one of the most famous archaeological monuments in Bogura.

Although local folklore links the site with Behula and Lakhindar, historians believe it was an important Buddhist monument from the Pala period. The terraced brick structure is one of the finest examples of ancient architecture in northern Bangladesh.

It is a popular destination for visitors interested in archaeology and local legends.
`,

    rating: 4.7,

    reviews: 1098,

    savedCount: 584,

    lat: 24.9826,

    lng: 89.3694,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Gokul_Medh",
  },
  {
    id: 30,

    name: "Kherua Mosque",

    location: "Sherpur, Bogura",

    postalAddress:
      "Sherpur Upazila, Bogura District, Rajshahi Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/kherua-mosque-1.jpeg",

    description: `
Kherua Mosque is one of the oldest surviving Mughal-era mosques in northern Bangladesh.

Built during the late 16th century, the mosque is admired for its brick construction, elegant domes, decorative terracotta work, and historical significance. It continues to serve as an active place of worship while attracting visitors interested in Islamic architecture.

The mosque is recognized as an important historical monument in Bogura.
`,

    rating: 4.7,

    reviews: 864,

    savedCount: 451,

    lat: 24.6787,

    lng: 89.4255,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Kherua_Mosque",
  },
  {
    id: 31,

    name: "Sariakandi Ghat",

    location: "Sariakandi, Bogura",

    postalAddress:
      "Sariakandi Upazila, Bogura District, Rajshahi Division, Bangladesh",

    category: "Riverfront",

    image: "images/places/bangladesh/sariakandi-ghat-1.jpeg",

    description: `
Sariakandi Ghat is one of the most popular riverfront destinations on the Jamuna River in northern Bangladesh.

Visitors come here to enjoy boat rides, beautiful sunsets, and the peaceful riverside atmosphere. During the monsoon season, the mighty Jamuna River becomes even more impressive, attracting photographers and nature lovers.

The ghat also serves as an important transportation point for nearby river communities.
`,

    rating: 4.7,

    reviews: 1086,

    savedCount: 612,

    lat: 24.7924,

    lng: 89.6603,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sariakandi_Upazila",
  },
  {
    id: 32,

    name: "Titas River",

    location: "Brahmanbaria",

    postalAddress: "Brahmanbaria District, Chattogram Division, Bangladesh",

    category: "Rivers",

    image: "images/places/bangladesh/titas-river-1.jpeg",

    description: `
The Titas River is one of the best-known rivers in Bangladesh.

Flowing through Brahmanbaria District, it became internationally known through the famous Bengali novel 'Titas Ekti Nadir Naam'. The river supports fishing, agriculture, transportation, and the daily lives of thousands of local people.

Its cultural importance makes it one of Bangladesh's most recognized rivers.
`,

    rating: 4.7,

    reviews: 1823,

    savedCount: 934,

    lat: 23.9578,

    lng: 91.1114,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Titas_River",
  },
  {
    id: 33,

    name: "Akhaura Land Port",

    location: "Akhaura, Brahmanbaria",

    postalAddress:
      "Akhaura Upazila, Brahmanbaria District, Chattogram Division, Bangladesh",

    category: "Land Ports",

    image: "images/places/bangladesh/akhaura-land-port-1.jpeg",

    description: `
Akhaura Land Port is one of the busiest international border crossings between Bangladesh and India.

Located beside Agartala in the Indian state of Tripura, the port plays an important role in trade, passenger movement, and regional connectivity. Every day, thousands of travelers and commercial vehicles pass through the checkpoint.

It is an important gateway between the two neighboring countries.
`,

    rating: 4.5,

    reviews: 952,

    savedCount: 436,

    lat: 23.8323,

    lng: 91.2864,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "",
  },
  {
    id: 34,

    name: "Port of Ashuganj",

    location: "Ashuganj, Brahmanbaria",

    postalAddress:
      "Ashuganj Upazila, Brahmanbaria District, Chattogram Division, Bangladesh",

    category: "River Ports",

    image: "images/places/bangladesh/ashuganj-river-port-1.jpeg",

    description: `
The Port of Ashuganj is one of the busiest inland river ports in Bangladesh.

Located on the Meghna River, it plays an important role in transporting cargo and passengers throughout the country. The port is also used for regional trade with northeastern India, making it strategically important for commerce.

Large cargo vessels and river traffic can be seen throughout the year.
`,

    rating: 4.6,

    reviews: 1218,

    savedCount: 603,

    lat: 24.0398,

    lng: 91.0018,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Port_of_Ashuganj",
  },
  {
    id: 35,

    name: "Meghna River Ghat",

    location: "Chandpur",

    postalAddress:
      "Chandpur Sadar Upazila, Chandpur District, Chattogram Division, Bangladesh",

    category: "Riverfront",

    image: "images/places/bangladesh/meghna-river-ghat-1.jpeg",

    description: `
Meghna River Ghat is one of the most popular riverfront attractions in Chandpur.

Visitors come here to enjoy the wide view of the Meghna River, beautiful sunsets, fresh Hilsa fish, and busy launch terminals. The riverside atmosphere makes it a favorite destination for local families, photographers, and travelers.

The area is especially lively during the Hilsa fishing season.
`,

    rating: 4.8,

    reviews: 2438,

    savedCount: 1287,

    lat: 23.2335,

    lng: 90.6718,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Meghna_River",
  },
  {
    id: 36,

    name: "Padma–Meghna Confluence",

    location: "Chandpur",

    postalAddress:
      "Chandpur Sadar Upazila, Chandpur District, Chattogram Division, Bangladesh",

    category: "River Confluences",

    image: "images/places/bangladesh/padma-meghna-confluence-1.jpeg",

    description: `
The Padma–Meghna Confluence is one of the most famous natural attractions in Bangladesh.

Located near Chandpur, it marks the meeting point of two of the country's largest rivers before they continue toward the Bay of Bengal. The area is well known for its breathtaking river views, Hilsa fishing, and spectacular sunrise and sunset scenery.

Thousands of visitors come every year to experience the unique landscape and enjoy boat trips on the wide river.
`,

    rating: 4.9,

    reviews: 3482,

    savedCount: 1876,

    lat: 23.2257,

    lng: 90.6528,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Meghna_River",
  },
  {
    id: 37,

    name: "Mango Research Institute",

    location: "Chapainawabganj",

    postalAddress:
      "Chapainawabganj Sadar Upazila, Chapainawabganj District, Rajshahi Division, Bangladesh",

    category: "Agricultural Research Centers",

    image: "images/places/bangladesh/mango-research-institute-1.jpeg",

    description: `
The Mango Research Institute is Bangladesh's leading research center for mango cultivation and development.

Located in the country's famous mango-growing region, the institute conducts research on improved varieties, disease management, and modern cultivation techniques. Visitors interested in agriculture often visit during the mango season to learn about Bangladesh's most important fruit crop.

It plays an important role in supporting mango farmers throughout the country.
`,

    rating: 4.7,

    reviews: 756,

    savedCount: 402,

    lat: 24.5967,

    lng: 88.2775,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "May - July",

    wikipediaUrl: "",
  },
  {
    id: 38,

    name: "Dhania Chalk Mosque",

    location: "Chapainawabganj",

    postalAddress:
      "Shibganj Upazila, Chapainawabganj District, Rajshahi Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/dhania-chalk-mosque-1.jpeg",

    description: `
Dhania Chalk Mosque is a historic Sultanate-era mosque located in the ancient Gaur region of Chapainawabganj.

Built during the Bengal Sultanate period, the mosque is admired for its elegant brick architecture and historical importance. Although less visited than Chhoto Sona Mosque, it remains an important archaeological monument for visitors exploring the medieval heritage of Gaur.

The peaceful surroundings make it an attractive stop for history enthusiasts.
`,

    rating: 4.6,

    reviews: 392,

    savedCount: 214,

    lat: 24.7208,

    lng: 88.1989,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Dhania_Chalk_Mosque",
  },
  {
    id: 39,

    name: "Kotwali Darwaza",

    location: "Chapainawabganj",

    postalAddress:
      "Shibganj Upazila, Chapainawabganj District, Rajshahi Division, Bangladesh",

    category: "Historical Gates",

    image: "images/places/bangladesh/kotwali-darwaza-1.jpeg",

    description: `
Kotwali Darwaza is one of the largest surviving gateways of the ancient city of Gaur.

Constructed during the Bengal Sultanate period, the impressive brick gateway once served as an entrance to the fortified capital. Today it remains one of the most important archaeological monuments in the region and is admired for its massive architecture.

It is one of the highlights of a heritage tour around ancient Gaur.
`,

    rating: 4.8,

    reviews: 1267,

    savedCount: 701,

    lat: 24.8579,

    lng: 88.1407,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Kotwali_Gate",
  },
  {
    id: 40,

    name: "Kansat Mango Market",

    location: "Kansat, Chapainawabganj",

    postalAddress:
      "Kansat, Shibganj Upazila, Chapainawabganj District, Rajshahi Division, Bangladesh",

    category: "Markets",

    image: "images/places/bangladesh/kansat-mango-market-1.jpeg",

    description: `
Kansat Mango Market is the largest wholesale mango market in Bangladesh.

Every summer, thousands of farmers and traders gather here to sell famous mango varieties including Khirsapat, Langra, Fazli, Gopalbhog, and Amrapali. During the mango season, the market becomes one of the busiest agricultural trading centers in the country.

It offers visitors a unique opportunity to experience Bangladesh's famous mango culture.
`,

    rating: 4.8,

    reviews: 1834,

    savedCount: 1026,

    lat: 24.8348,

    lng: 88.2226,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "May - July",

    wikipediaUrl: "",
  },
  {
    id: 41,

    name: "Kansat Rajbari",

    location: "Kansat, Chapainawabganj",

    postalAddress:
      "Kansat, Shibganj Upazila, Chapainawabganj District, Rajshahi Division, Bangladesh",

    category: "Palaces",

    image: "images/places/bangladesh/kansat-rajbari-1.jpeg",

    description: `
Kansat Rajbari is a historic zamindar palace located in Kansat of Chapainawabganj.

Built during the British colonial period, the palace reflects the architectural style and lifestyle of the local zamindar family. Although much of the original structure has deteriorated over time, its remaining buildings and decorative features continue to attract visitors interested in regional history.

It is one of the lesser-known heritage sites in Chapainawabganj.
`,

    rating: 4.5,

    reviews: 396,

    savedCount: 224,

    lat: 24.8356,

    lng: 88.2238,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/কানসাটের_জমিদার_বাড়ি",
  },
  {
    id: 42,

    name: "Chhoto Sona Mosque",

    location: "Shibganj, Chapainawabganj",

    postalAddress:
      "Shibganj Upazila, Chapainawabganj District, Rajshahi Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/chhoto-sona-mosque-1.jpeg",

    description: `
Chhoto Sona Mosque is one of the finest examples of Bengal Sultanate architecture in Bangladesh.

Built during the reign of Sultan Alauddin Husain Shah in the late 15th century, the mosque is famous for its beautifully carved stone walls, elegant domes, and intricate decorative work. It is one of the country's most important archaeological monuments and attracts visitors from across Bangladesh.

The mosque is protected by the Department of Archaeology.
`,

    rating: 4.9,

    reviews: 4382,

    savedCount: 2346,

    lat: 24.8344,

    lng: 88.1397,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Choto_Sona_Mosque",
  },
  {
    id: 43,

    name: "Khania Dighi Mosque",

    location: "Shibganj, Chapainawabganj",

    postalAddress:
      "Shibganj Upazila, Chapainawabganj District, Rajshahi Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/khania-dighi-mosque-1.jpeg",

    description: `
Khania Dighi Mosque is a well-preserved mosque from the Bengal Sultanate period.

Situated beside the historic Khania Dighi, the mosque is known for its elegant brick-and-stone construction, beautiful arches, and peaceful surroundings. It remains one of the most important archaeological monuments in the ancient Gaur region.

Visitors often combine this site with Chhoto Sona Mosque and other nearby historical landmarks.
`,

    rating: 4.7,

    reviews: 864,

    savedCount: 472,

    lat: 24.8266,

    lng: 88.1541,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Khania_Dighi_Mosque",
  },
  {
    id: 44,

    name: "Darasbari Mosque",

    location: "Shibganj, Chapainawabganj",

    postalAddress:
      "Shibganj Upazila, Chapainawabganj District, Rajshahi Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/darasbari-mosque-1.jpeg",

    description: `
Darasbari Mosque is one of the largest surviving mosque ruins from the Bengal Sultanate period.

Constructed in the 15th century, the mosque was once part of a large religious and educational complex. Although its roof has collapsed, its impressive arches, brickwork, and decorative details continue to showcase the architectural excellence of medieval Bengal.

It is one of the major archaeological attractions in the ancient city of Gaur.
`,

    rating: 4.8,

    reviews: 1138,

    savedCount: 618,

    lat: 24.8473,

    lng: 88.1526,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Darasbari_Mosque",
  },
  {
    id: 45,

    name: "Tahkhana Complex & Shah Niamatullah Wali's Tomb",

    location: "Shibganj, Chapainawabganj",

    postalAddress:
      "Shibganj Upazila, Chapainawabganj District, Rajshahi Division, Bangladesh",

    category: "Historical Sites",

    image: "images/places/bangladesh/tahkhana-complex-1.jpeg",

    description: `
Tahkhana Complex is one of the most significant Mughal-era historical sites in Chapainawabganj.

The complex includes the historic Tahkhana Palace, an underground cooling chamber, a mosque, and the tomb of the renowned Sufi saint Shah Niamatullah Wali. The site reflects the architectural and cultural heritage of the Mughal period and remains an important destination for pilgrims and history enthusiasts.

Its peaceful surroundings make it one of the highlights of the ancient Gaur region.
`,

    rating: 4.8,

    reviews: 1642,

    savedCount: 891,

    lat: 24.8569,

    lng: 88.1392,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Tahkhana_Complex",
  },
  {
    id: 46,

    name: "Alpona Village, Tikoil",

    location: "Nachole, Chapainawabganj",

    postalAddress:
      "Tikoil Village, Nachole Upazila, Chapainawabganj District, Rajshahi Division, Bangladesh",

    category: "Cultural Villages",

    image: "images/places/bangladesh/alpona-village-tikoil-1.jpeg",

    description: `
Alpona Village in Tikoil is a unique cultural destination where colorful traditional Bengali folk art decorates houses, roads, and public spaces.

Local artists and residents have transformed the village into an open-air art gallery using vibrant Alpona designs inspired by Bengali heritage. Visitors come to experience rural culture, admire the artwork, and capture beautiful photographs.

It is one of the most distinctive cultural attractions in Chapainawabganj.
`,

    rating: 4.7,

    reviews: 728,

    savedCount: 416,

    lat: 24.6998,

    lng: 88.2857,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/টিকইল",
  },
  {
    id: 47,

    name: "Bayazid Bostami Shrine",

    location: "Chattogram",

    postalAddress:
      "Nasirabad, Chattogram City, Chattogram District, Chattogram Division, Bangladesh",

    category: "Shrines",

    image: "images/places/bangladesh/bayazid-bostami-shrine-1.jpeg",

    description: `
The Bayazid Bostami Shrine is one of the most important Sufi pilgrimage sites in Bangladesh.

Dedicated to the Persian mystic Bayazid Bastami, the shrine attracts thousands of pilgrims and visitors every year. It is also famous for its historic pond, which is home to a rare population of black softshell turtles.

The shrine is a major religious and cultural landmark in Chattogram.
`,

    rating: 4.8,

    reviews: 4625,

    savedCount: 2486,

    lat: 22.3774,

    lng: 91.8133,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Bayazid_Bostami_Shrine",
  },
  {
    id: 48,

    name: "Sitakunda Eco Park & Botanical Garden",

    location: "Sitakunda, Chattogram",

    postalAddress:
      "Sitakunda Upazila, Chattogram District, Chattogram Division, Bangladesh",

    category: "Eco Parks",

    image: "images/places/bangladesh/sitakunda-eco-park-1.jpeg",

    description: `
Sitakunda Eco Park & Botanical Garden is Bangladesh's first eco park.

The park protects rich biodiversity and features forests, waterfalls, rare plant species, wildlife, and scenic hiking trails. It is one of the country's most popular destinations for nature lovers and trekkers.

Many visitors also explore nearby attractions such as Chandranath Hill and Khoiyachora Waterfall.
`,

    rating: 4.8,

    reviews: 5214,

    savedCount: 2918,

    lat: 22.6164,

    lng: 91.6713,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sitakunda_Eco_Park",
  },
  {
    id: 49,

    name: "Patenga Beach",

    location: "Patenga, Chattogram",

    postalAddress:
      "Patenga, Chattogram City, Chattogram District, Chattogram Division, Bangladesh",

    category: "Sea Beaches",

    image: "images/places/bangladesh/patenga-beach-1.jpeg",

    description: `
Patenga Beach is one of the most visited beaches in Bangladesh.

Located at the mouth of the Karnaphuli River on the Bay of Bengal, the beach is famous for its sunsets, sea breeze, food stalls, recreational facilities, and views of ships entering Chattogram Port.

It is a popular destination for families, photographers, and visitors throughout the year.
`,

    rating: 4.8,

    reviews: 9642,

    savedCount: 5381,

    lat: 22.2356,

    lng: 91.7906,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Patenga",
  },
  {
    id: 50,

    name: "Chandranath Temple",

    location: "Sitakunda, Chattogram",

    postalAddress:
      "Chandranath Hill, Sitakunda Upazila, Chattogram District, Chattogram Division, Bangladesh",

    category: "Temples",

    image: "images/places/bangladesh/chandranath-temple-1.jpeg",

    description: `
Chandranath Temple is one of the holiest Hindu pilgrimage sites in Bangladesh.

Situated on the summit of Chandranath Hill, the temple is dedicated to Lord Shiva and attracts thousands of pilgrims every year, especially during the Shiv Chaturdashi festival. Besides its religious significance, the hilltop offers spectacular panoramic views of the surrounding hills, forests, and the Bay of Bengal.

It is one of the most important cultural and spiritual landmarks in southeastern Bangladesh.
`,

    rating: 4.9,

    reviews: 3512,

    savedCount: 1823,

    lat: 22.6205,

    lng: 91.6704,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Chandranath_Temple",
  },
  {
    id: 51,

    name: "Ethnological Museum",

    location: "Agrabad, Chattogram",

    postalAddress:
      "Agrabad, Chattogram - 4100, Chattogram Division, Bangladesh",

    category: "Museums",

    image: "images/places/bangladesh/ethnological-museum-1.jpeg",

    description: `
The Ethnological Museum of Chattogram is the only ethnological museum in Bangladesh dedicated to preserving the country's ethnic diversity. Established in 1965, the museum exhibits traditional clothing, household items, musical instruments, weapons, and cultural artifacts representing numerous indigenous communities from Bangladesh and neighboring regions.
`,

    rating: 4.5,

    reviews: 895,

    savedCount: 463,

    lat: 22.3277,

    lng: 91.8103,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Ethnological_Museum_of_Chittagong",
  },
  {
    id: 52,

    name: "Foy's Lake",

    location: "Khulshi, Chattogram",

    postalAddress:
      "Khulshi, Chattogram - 4202, Chattogram Division, Bangladesh",

    category: "Lakes",

    image: "images/places/bangladesh/foys-lake-1.jpeg",

    description: `
Foy's Lake is a scenic artificial lake created in 1924 by the Assam Bengal Railway. Surrounded by hills, it has become one of Chattogram's premier recreational destinations, offering boating, amusement rides, resorts, walking trails, and beautiful natural scenery.
`,

    rating: 4.8,

    reviews: 4864,

    savedCount: 2547,

    lat: 22.3597,

    lng: 91.8172,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Foy%27s_Lake",
  },
  {
    id: 53,

    name: "Bhatiary Golf & Country Club",

    location: "Bhatiary, Sitakunda, Chattogram",

    postalAddress:
      "Bhatiary, Sitakunda, Chattogram - 4310, Chattogram Division, Bangladesh",

    category: "Golf Courses",

    image: "images/places/bangladesh/bhatiary-golf-country-club-1.jpeg",

    description: `
Bhatiary Golf & Country Club is one of Bangladesh's finest championship golf courses. Managed by the Bangladesh Army, the club is renowned for its beautifully landscaped fairways set among the hills of Sitakunda, attracting golfers and visitors from both Bangladesh and abroad.
`,

    rating: 4.8,

    reviews: 1374,

    savedCount: 756,

    lat: 22.4218,

    lng: 91.7574,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Bhatiary_Golf_%26_Country_Club",
  },
  {
    id: 54,

    name: "Alamdanga Railway Station & Neelkuthi",

    location: "Alamdanga, Chuadanga",

    postalAddress:
      "Alamdanga Upazila, Chuadanga - 7210, Khulna Division, Bangladesh",

    category: "Historical Sites",

    image:
      "images/places/bangladesh/alamdanga-railway-station-neelkuthi-1.jpeg",

    description: `
Alamdanga Railway Station & Neelkuthi is a historic landmark that combines Bangladesh's colonial railway heritage with the legacy of the indigo industry. The historic railway station and nearby indigo factory reflect the economic and social history of British Bengal and remain important heritage sites in Chuadanga.
`,

    rating: 4.5,

    reviews: 286,

    savedCount: 154,

    lat: 23.7628,

    lng: 88.9436,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/আলমডাঙ্গা_রেলওয়ে_স্টেশন",
  },
  {
    id: 55,

    name: "Natudah Eight Graves Memorial",

    location: "Natudah, Alamdanga, Chuadanga",

    postalAddress:
      "Natudah, Alamdanga Upazila, Chuadanga - 7211, Khulna Division, Bangladesh",

    category: "Liberation War Memorials",

    image: "images/places/bangladesh/natudah-eight-graves-memorial-1.jpeg",

    description: `
Natudah Eight Graves Memorial commemorates eight martyrs who sacrificed their lives during the Bangladesh Liberation War in 1971. The memorial serves as a place of remembrance and symbolizes the courage and patriotism of the local freedom fighters.
`,

    rating: 4.6,

    reviews: 173,

    savedCount: 102,

    lat: 23.8061,

    lng: 88.9215,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 56,

    name: "Dhopakhali Shahi Mosque & Mass Grave",

    location: "Chuadanga Sadar, Chuadanga",

    postalAddress:
      "Chuadanga Sadar Upazila, Chuadanga - 7200, Khulna Division, Bangladesh",

    category: "Historical & Religious Sites",

    image: "images/places/bangladesh/dhopakhali-shahi-mosque-mass-grave-1.jpeg",

    description: `
Dhopakhali Shahi Mosque & Mass Grave combines an important historic mosque with a Liberation War memorial. The mosque represents local Islamic architectural heritage, while the adjacent mass grave commemorates those who lost their lives during Bangladesh's War of Independence in 1971.
`,

    rating: 4.7,

    reviews: 248,

    savedCount: 138,

    lat: 23.6328,

    lng: 88.8469,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 57,

    name: "Gholdari Jame Mosque",

    location: "Chuadanga Sadar, Chuadanga",

    postalAddress:
      "Chuadanga Sadar Upazila, Chuadanga - 7200, Khulna Division, Bangladesh",

    category: "Mosques",

    image: "images/places/bangladesh/gholdari-jame-mosque-1.jpeg",

    description: `
Gholdari Jame Mosque is a historic mosque in Chuadanga known for its traditional Islamic architecture and peaceful surroundings. It continues to serve the local community as both an active place of worship and an important cultural landmark.
`,

    rating: 4.6,

    reviews: 198,

    savedCount: 118,

    lat: 23.6551,

    lng: 88.8244,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November -February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/ঘোলদাড়ি_শাহী_মসজিদ",
  },
  {
    id: 58,

    name: "Shrine of Hazrat Khwaja Malik-ul-Gaus",

    location: "Chuadanga Sadar, Chuadanga",

    postalAddress:
      "Chuadanga Sadar Upazila, Chuadanga - 7200, Khulna Division, Bangladesh",

    category: "Shrines",

    image:
      "images/places/bangladesh/shrine-of-hazrat-khwaja-malik-ul-gaus-1.jpeg",

    description: `
The Shrine of Hazrat Khwaja Malik-ul-Gaus is a respected Sufi shrine in Chuadanga. Pilgrims from different parts of Bangladesh visit throughout the year to pay their respects and participate in religious gatherings and annual Urs celebrations.
`,

    rating: 4.8,

    reviews: 421,

    savedCount: 236,

    lat: 23.6409,

    lng: 88.8421,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 59,

    name: "Carew & Co. Distillery",

    location: "Darshana, Damurhuda, Chuadanga",

    postalAddress:
      "Darshana, Damurhuda Upazila, Chuadanga - 7221, Khulna Division, Bangladesh",

    category: "Industrial Heritage",

    image: "images/places/bangladesh/carew-co-distillery-1.jpeg",

    description: `
Carew & Co. Distillery is the oldest operating distillery in Bangladesh. Established during the British colonial period at Darshana, it forms part of the historic Carew & Company complex and remains an important symbol of the country's industrial heritage. The distillery is closely associated with the nearby sugar mill and continues licensed production today.
`,

    rating: 4.6,

    reviews: 654,

    savedCount: 381,

    lat: 23.5339,

    lng: 88.7269,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Carew_%26_Co._(Bangladesh)_Ltd.",
  },
  {
    id: 60,

    name: "Darshana Land Port & Railway Station",

    location: "Darshana, Damurhuda, Chuadanga",

    postalAddress:
      "Darshana, Damurhuda Upazila, Chuadanga - 7221, Khulna Division, Bangladesh",

    category: "Land Ports",

    image: "images/places/bangladesh/darshana-land-port-railway-station-1.jpeg",

    description: `
    Darshana Land Port & Railway Station is one of Bangladesh's principal international 
    border crossings with India. The site plays a major role in cross-border trade, 
    passenger movement, and railway connectivity, making it one of the country's most 
    strategically important transport hubs.
`,

    rating: 4.7,

    reviews: 792,

    savedCount: 446,

    lat: 23.5331,

    lng: 88.7282,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Darshana_railway_station",
  },
  {
    id: 61,

    name: "Kashipur Zamindar Bari",

    location: "Chuadanga Sadar, Chuadanga",

    postalAddress:
      "Chuadanga Sadar Upazila, Chuadanga - 7200, Khulna Division, Bangladesh",

    category: "Palaces",

    image: "images/places/bangladesh/kashipur-zamindar-bari-1.jpeg",

    description: `
    Kashipur Zamindar Bari is a historic estate built during the colonial period by a 
    local zamindar family. Although parts of the mansion have deteriorated over time, 
    it remains an important architectural landmark reflecting the social and cultural 
    history of the zamindari era in Chuadanga.
`,

    rating: 4.5,

    reviews: 247,

    savedCount: 146,

    lat: 23.6578,

    lng: 88.8334,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/কাশীপুর_জমিদার_বাড়ি",
  },
  {
    id: 62,

    name: "Meherun Children's Park & Mini Zoo",

    location: "Chuadanga Sadar",

    postalAddress:
      "Chuadanga Sadar, Chuadanga - 7200, Khulna Division, Bangladesh",

    category: "Parks",

    image: "images/places/bangladesh/meherun-childrens-park-mini-zoo-1.jpeg",

    description: `
    Meherun Children's Park & Mini Zoo is Chuadanga's most popular family recreation 
    area. The park features landscaped gardens, walking paths, children's rides, and a 
    small zoo, making it a favorite destination for leisure, recreation, and 
    educational visits.
`,

    rating: 4.5,

    reviews: 1085,

    savedCount: 583,

    lat: 23.6417,

    lng: 88.8428,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 63,

    name: "Lalmai Hills",

    location: "Lalmai, Cumilla",

    postalAddress:
      "Lalmai Upazila, Cumilla - 3500, Chattogram Division, Bangladesh",

    category: "Hills",

    image: "images/places/bangladesh/lalmai-hills-1.jpeg",

    description: `
          Lalmai Hills is a low hill range in Cumilla known for its natural 
          scenery and archaeological importance. The area contains remnants 
          of ancient Buddhist civilization and offers peaceful forested 
          landscapes, making it a destination for both nature enthusiasts 
          and visitors interested in Bangladesh's early history.
`,

    rating: 4.6,

    reviews: 1164,

    savedCount: 628,

    lat: 23.3949,

    lng: 91.1636,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Lalmai_Hills",
  },
  {
    id: 64,

    name: "Ranir Dighi",

    location: "Cumilla Sadar, Cumilla",

    postalAddress:
      "Cumilla Sadar, Cumilla - 3500, Chattogram Division, Bangladesh",

    category: "Lakes",

    image: "images/places/bangladesh/ranir-dighi-1.jpeg",

    description: `
    Ranir Dighi, meaning "Queen's Pond," is one of the oldest historic reservoirs in 
    Cumilla. Believed to have been excavated centuries ago, it served as an important 
    water source for the surrounding settlement. Today, the tree-lined lake remains a 
    peaceful recreational destination for residents and visitors alike.
`,

    rating: 4.5,

    reviews: 541,

    savedCount: 291,

    lat: 23.4609,

    lng: 91.1805,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/কমলারাণীর_দীঘি",
  },
  {
    id: 65,

    name: "Dharmasagar",

    location: "Cumilla Sadar, Cumilla",

    postalAddress:
      "Cumilla Sadar, Cumilla - 3500, Chattogram Division, Bangladesh",

    category: "Lakes",

    image: "images/places/bangladesh/dharmasagar-1.jpeg",

    description: `
  Dharmasagar is a historic man-made lake excavated in the 15th century by Maharaja Dharma Manikya. It remains one of Cumilla's best-known landmarks, offering scenic walking paths, boating opportunities, and a tranquil environment in the heart of the city.
`,

    rating: 4.8,

    reviews: 2685,

    savedCount: 1452,

    lat: 23.4595,

    lng: 91.18,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Dharmasagar",
  },
  {
    id: 66,

    name: "Shalban Vihara",

    location: "Mainamati, Cumilla",

    postalAddress:
      "Mainamati, Cumilla Sadar South, Cumilla - 3500, Chattogram Division, Bangladesh",

    category: "Archaeological Sites",

    image: "images/places/bangladesh/shalban-vihara-1.jpeg",

    description: `
    Shalban Vihara is one of Bangladesh's most significant Buddhist 
    archaeological monuments. Dating to the 8th century during the 
    Deva dynasty, the monastery complex consists of monks' cells, 
    temples, courtyards, and religious structures, providing 
    valuable insight into the history of Buddhism in ancient Bengal.
`,

    rating: 4.9,

    reviews: 3948,

    savedCount: 2137,

    lat: 23.4619,

    lng: 91.0994,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Shalban_Vihara",
  },
  {
    id: 67,

    name: "Comilla War Cemetery",

    location: "Mainamati, Cumilla",

    postalAddress: "Mainamati, Cumilla - 3500, Chattogram Division, Bangladesh",

    category: "War Cemeteries",

    image: "images/places/bangladesh/comilla-war-cemetery-1.jpeg",

    description: `
    Comilla War Cemetery, officially maintained by the Commonwealth 
    War Graves Commission, is the resting place of soldiers who died
    during the Second World War. Beautifully landscaped and carefully
    preserved, it serves as both a memorial and a place of quiet 
    reflection.
`,

    rating: 4.8,

    reviews: 1357,

    savedCount: 718,

    lat: 23.4583,

    lng: 91.1112,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Mainamati_War_Cemetery",
  },
  {
    id: 68,

    name: "Comilla Cantonment",

    location: "Cumilla Sadar South, Cumilla",

    postalAddress:
      "Cumilla Cantonment, Cumilla - 3501, Chattogram Division, Bangladesh",

    category: "Military Landmarks",

    image: "images/places/bangladesh/comilla-cantonment-1.jpeg",

    description: `
    Comilla Cantonment is one of the oldest military cantonments 
    in Bangladesh. Established during the British colonial era, it 
    houses important military institutions, training facilities, and
    educational establishments. The cantonment is also known for 
    its well-maintained roads, greenery, and historical 
    significance.
`,

    rating: 4.8,

    reviews: 1196,

    savedCount: 627,

    lat: 23.4334,

    lng: 91.1088,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Comilla_Cantonment",
  },
  {
    id: 69,

    name: "Mainamati Ruins",

    location: "Mainamati, Cumilla",

    postalAddress: "Mainamati, Cumilla - 3500, Chattogram Division, Bangladesh",

    category: "Archaeological Sites",

    image: "images/places/bangladesh/mainamati-ruins-1.jpeg",

    description: `
    Mainamati Ruins comprise one of Bangladesh's largest 
    archaeological complexes, containing the remains of numerous 
    Buddhist monasteries, temples, stupas, and settlements dating 
    from the 7th to 12th centuries. The site provides invaluable 
    insight into the religious, cultural, and educational history 
    of ancient Bengal.
`,

    rating: 4.9,

    reviews: 2874,

    savedCount: 1648,

    lat: 23.4571,

    lng: 91.1016,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Mainamati",
  },
  {
    id: 70,

    name: "Chera Dwip (ছেঁড়া দ্বীপ)",

    location: "Saint Martin's Island, Teknaf, Cox's Bazar",

    postalAddress:
      "Saint Martin's Island, Teknaf Upazila, Cox's Bazar - 4762, Chattogram Division, Bangladesh",

    category: "Islands",

    image: "public/images/places/bangladesh/st-martins-island-112051353-16x9_0.jpg",

    description: `
    Chera Dwip is the southernmost landmass of Bangladesh and an 
    extension of Saint Martin's Island. Famous for its coral 
    formations, crystal-clear water, marine biodiversity, and 
    scenic coastal landscape, it is one of the country's most 
    spectacular natural attractions and can be reached on foot 
    during low tide.
`,

    rating: 4.9,

    reviews: 4278,

    savedCount: 2514,

    lat: 20.5945,

    lng: 92.3278,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/St._Martin%27s_Island",
  },
  {
    id: 71,

    name: "Sugandha Beach (সুগন্ধা সমুদ্র সৈকত)",

    location: "Cox's Bazar Sadar, Cox's Bazar",

    postalAddress:
      "Sugandha Point, Cox's Bazar - 4700, Chattogram Division, Bangladesh",

    category: "Beaches",

    image: "images/places/bangladesh/sugandha-beach-1.jpeg",

    description: `
Sugandha Beach is one of the busiest and most popular sections of Cox's Bazar Sea Beach. It is well known for its colorful beach umbrellas, seafood restaurants, water sports, and spectacular sunsets over the Bay of Bengal, attracting visitors throughout the year.
`,

    rating: 4.7,

    reviews: 3165,

    savedCount: 1786,

    lat: 21.4252,

    lng: 91.9829,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 72,

    name: "Ramu Buddhist Temple (রামু বৌদ্ধ মন্দির)",

    location: "Ramu, Cox's Bazar",

    postalAddress:
      "Ramu Upazila, Cox's Bazar - 4730, Chattogram Division, Bangladesh",

    category: "Temples",

    image: "images/places/bangladesh/ramu-buddhist-temple-1.jpeg",

    description: `
Ramu Buddhist Temple represents one of Bangladesh's most important Buddhist heritage sites. The temple complex preserves centuries-old Buddhist traditions and is home to impressive Buddha statues, ancient manuscripts, and beautiful religious architecture, making it a significant destination for pilgrims and visitors.
`,

    rating: 4.8,

    reviews: 1387,

    savedCount: 774,

    lat: 21.4347,

    lng: 92.1003,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Ramu",
  },
  {
    id: 78,

    name: "Teknaf Beach (টেকনাফ সমুদ্র সৈকত)",

    location: "Teknaf Upazila, Cox's Bazar",

    postalAddress:
      "Teknaf Upazila, Cox's Bazar - 4760, Chattogram Division, Bangladesh",

    category: "Beach",

    image: "images/places/bangladesh/teknaf-beach-1.jpeg",

    description: `
    Teknaf Beach is the southernmost beach on mainland Bangladesh. Surrounded by the Bay 
    of Bengal, the Naf River, and nearby hills, it offers a peaceful coastal environment 
    away from the crowds.

    Visitors come here to enjoy beautiful sunsets, fresh seafood, and scenic views of the 
    coastline. The beach is also one of the main gateways for travelers heading to 
    St. Martin's Island.
`,

    rating: 4.8,

    reviews: 2143,

    savedCount: 1198,

    lat: 20.8573,

    lng: 92.2972,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Teknaf",
  },
  {
    id: 79,

    name: "Radiant Fish World (রেডিয়েন্ট ফিশ ওয়ার্ল্ড)",

    location: "Kolatoli, Cox's Bazar",

    postalAddress:
      "Kolatoli Beach Road, Cox's Bazar Sadar, Cox's Bazar - 4700, Chattogram Division, Bangladesh",

    category: "Aquarium & Wildlife",

    image: "images/places/bangladesh/radiant-fish-world-1.jpeg",

    description: `
    Radiant Fish World is the first large public aquarium in Bangladesh. It features a 
    wide collection of freshwater and marine fish, sharks, stingrays, turtles, and many 
    other aquatic species.

    The aquarium offers visitors an educational and entertaining experience, making it a 
    popular family attraction in Cox's Bazar throughout the year.
`,

    rating: 4.6,

    reviews: 1758,

    savedCount: 913,

    lat: 21.4185,

    lng: 91.9847,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 80,

    name: "Sonadia Island (সোনাদিয়া দ্বীপ)",

    location: "Maheshkhali Upazila, Cox's Bazar",

    postalAddress:
      "Sonadia Island, Maheshkhali Upazila, Cox's Bazar - 4710, Chattogram Division, Bangladesh",

    category: "Islands",

    image: "images/places/bangladesh/sonadia-island-1.jpeg",

    description: `
    Sonadia Island is a small coastal island known for its sandy beaches, mangrove forests, 
    mudflats, and rich biodiversity. It is one of the country's important habitats for 
    migratory birds and marine wildlife.

    The island offers a quiet natural environment, making it an excellent destination for 
    visitors looking to enjoy nature away from busy tourist areas.
`,

    rating: 4.8,

    reviews: 1842,

    savedCount: 1096,

    lat: 21.5202,

    lng: 91.9263,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sonadia_Island",
  },
  {
    id: 81,

    name: "Inani Beach (ইনানী সমুদ্র সৈকত)",

    location: "Ukhia Upazila, Cox's Bazar",

    postalAddress:
      "Inani, Ukhia Upazila, Cox's Bazar - 4750, Chattogram Division, Bangladesh",

    category: "Beach",

    image: "images/places/bangladesh/inani-beach-1.jpeg",

    description: `
    Inani Beach is one of the most beautiful beaches in Bangladesh, famous for its golden 
    sand, coral stones, and clear blue water. Located along the Marine Drive road, it is 
    quieter than the main Cox's Bazar Beach.

    Visitors enjoy walking along the rocky shoreline, watching the sunset, and experiencing 
    the peaceful coastal scenery throughout the year.
`,

    rating: 4.9,

    reviews: 4875,

    savedCount: 2841,

    lat: 21.2325,

    lng: 92.0464,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Inani_Beach",
  },
  {
    id: 82,

    name: "Laboni Point (লাবণী পয়েন্ট)",

    location: "Cox's Bazar Sadar, Cox's Bazar",

    postalAddress:
      "Laboni Beach Road, Cox's Bazar Sadar, Cox's Bazar - 4700, Chattogram Division, Bangladesh",

    category: "Beach",

    image: "images/places/bangladesh/laboni-point-1.jpeg",

    description: `
    Laboni Point is the most famous and busiest section of Cox's Bazar Sea Beach. It is 
    well known for its lively atmosphere, beach markets, seafood stalls, horse riding, 
    and beautiful sunset views.

    Most visitors begin their beach experience here before exploring other parts of 
    Cox's Bazar, making it one of the city's most popular tourist spots.
`,

    rating: 4.8,

    reviews: 5632,

    savedCount: 3218,

    lat: 21.4276,

    lng: 91.9739,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October -March",

    wikipediaUrl: "",
  },
  {
    id: 83,

    name: "St. Martin's Island (সেন্ট মার্টিন দ্বীপ)",

    location: "Saint Martin Union, Teknaf Upazila, Cox's Bazar",

    postalAddress:
      "Saint Martin Union, Teknaf Upazila, Cox's Bazar - 4762, Chattogram Division, Bangladesh",

    category: "Islands",

    image: "public/images/places/bangladesh/st-martin-2.jpg",

    description: `
    St. Martin's Island is the only coral island in Bangladesh and one of the country's 
    most beautiful tourist destinations. It is surrounded by clear blue water, coral 
    reefs, coconut trees, and long stretches of sandy beach.

    Visitors come here to enjoy snorkeling, scuba diving, boat rides, fresh seafood, and 
    spectacular sunrise and sunset views. The island is also the starting point for trips 
    to nearby Chera Dwip.
`,

    rating: 4.9,

    reviews: 8965,

    savedCount: 5218,

    lat: 20.6225,

    lng: 92.3225,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/St._Martin%27s_Island",
  },
  {
    id: 84,

    name: "Kolatoli Beach (কলাতলী সমুদ্র সৈকত)",

    location: "Kolatoli, Cox's Bazar Sadar, Cox's Bazar",

    postalAddress:
      "Kolatoli Beach Road, Cox's Bazar Sadar, Cox's Bazar - 4700, Chattogram Division, Bangladesh",

    category: "Beach",

    image: "images/places/bangladesh/kolatoli-beach-1.jpeg",

    description: `
    Kolatoli Beach is one of the busiest and most popular parts of Cox's Bazar Sea Beach. 
    It is well known for its lively atmosphere, beachfront hotels, restaurants, cafés, 
    souvenir shops, and entertainment facilities.

    Visitors come here to enjoy the sea, watch beautiful sunsets over the Bay of Bengal, 
    taste fresh seafood, and take part in activities such as beach biking and water sports. 
    The beach remains one of the main tourist attractions in Cox's Bazar throughout the year.
`,

    rating: 4.8,

    reviews: 4736,

    savedCount: 2681,

    lat: 21.4206,

    lng: 91.9845,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 85,

    name: "Maheshkhali Island (মহেশখালী দ্বীপ)",

    location: "Maheshkhali Upazila, Cox's Bazar",

    postalAddress:
      "Maheshkhali Upazila, Cox's Bazar - 4710, Chattogram Division, Bangladesh",

    category: "Islands",

    image: "images/places/bangladesh/maheshkhali-island-1.jpeg",

    description: `
    Maheshkhali Island is the only hilly island in Bangladesh, located off the coast of 
    Cox's Bazar. The island is famous for its green hills, mangrove forests, salt fields, 
    shrimp farms, and beautiful coastal scenery.

    It is also home to the historic Adinath Temple, making it an important destination for 
    both nature lovers and pilgrims. Visitors can enjoy panoramic views of the Bay of Bengal 
    and experience the peaceful island environment.
`,

    rating: 4.8,

    reviews: 2587,

    savedCount: 1493,

    lat: 21.6018,

    lng: 91.9615,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Maheshkhali_Island",
  },
  {
    id: 86,

    name: "Aggmeda Khyang (আগ্গমেধা ক্যাং)",

    location: "Cox's Bazar Sadar, Cox's Bazar",

    postalAddress:
      "Cox's Bazar Sadar, Cox's Bazar - 4700, Chattogram Division, Bangladesh",

    category: "Temple",

    image: "images/places/bangladesh/aggmeda-khyang-1.jpeg",

    description: `
    Aggmeda Khyang is one of the oldest and most important Buddhist monasteries in 
    Cox's Bazar. The monastery preserves valuable Buddhist manuscripts, religious 
    artifacts, and beautifully crafted Buddha statues.

    It serves as both a place of worship and an important cultural landmark, reflecting 
    the rich Buddhist heritage of southeastern Bangladesh.
`,

    rating: 4.7,

    reviews: 692,

    savedCount: 387,

    lat: 21.4334,

    lng: 91.9786,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Aggmeda_Khyang",
  },
  {
    id: 87,

    name: "Lalbagh Fort (লালবাগ কেল্লা)",

    location: "Lalbagh, Old Dhaka, Dhaka",

    postalAddress:
      "Lalbagh, Dhaka South City Corporation, Dhaka - 1211, Dhaka Division, Bangladesh",

    category: "Historical Fort",

    image: "images/places/bangladesh/lalbagh-fort-1.jpeg",

    description: `
    Lalbagh Fort is one of the most famous Mughal monuments in Bangladesh. Construction 
    began in 1678 under Prince Muhammad Azam, the son of Emperor Aurangzeb, but the fort 
    was never fully completed.

    The complex includes the Tomb of Pari Bibi, Lalbagh Mosque, and the Diwan-i-Aam. 
    Today, it is one of the most visited historical sites in Dhaka and offers visitors 
    a glimpse into the rich history of the Mughal period.
`,

    rating: 4.8,

    reviews: 8562,

    savedCount: 4721,

    lat: 23.7189,

    lng: 90.3882,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Lalbagh_Fort",
  },
  {
    id: 88,

    name: "Ahsan Manzil (আহসান মঞ্জিল)",

    location: "Kumartoli, Old Dhaka, Dhaka",

    postalAddress: "Kumartoli, Dhaka - 1100, Dhaka Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/ahsan-manzil-1.jpeg",

    description: `
    Ahsan Manzil, popularly known as the Pink Palace, was the official residence of the 
    Nawabs of Dhaka. Built in the 19th century on the banks of the Buriganga River, it 
    is one of the city's most recognizable landmarks.

    The palace now serves as a national museum where visitors can explore galleries, 
    historical artifacts, and exhibits related to the Nawab family and the history of Dhaka.
`,

    rating: 4.8,

    reviews: 7243,

    savedCount: 3915,

    lat: 23.7086,

    lng: 90.4066,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Ahsan_Manzil",
  },
  {
    id: 89,

    name: "Sonargaon (সোনারগাঁও)",

    location: "Sonargaon Upazila, Narayanganj",

    postalAddress:
      "Sonargaon Upazila, Narayanganj - 1440, Dhaka Division, Bangladesh",

    category: "Historical City",

    image: "images/places/bangladesh/sonargaon-1.jpeg",

    description: `
    Sonargaon was once the historic capital of medieval Bengal and one of the region's 
    most important trading centers. Today, it is one of Bangladesh's best-known heritage 
    destinations.

    Visitors can explore the Bangladesh Folk Art and Craft Museum, the historic Panam City, 
    and several old buildings that reflect the rich history and culture of ancient Bengal.
`,

    rating: 4.9,

    reviews: 6947,

    savedCount: 3814,

    lat: 23.6508,

    lng: 90.5982,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sonargaon",
  },
  {
    id: 90,

    name: "Star Mosque (তারা মসজিদ)",

    location: "Armanitola, Old Dhaka, Dhaka",

    postalAddress: "Armanitola, Dhaka - 1100, Dhaka Division, Bangladesh",

    category: "Religious Mosque",

    image: "images/places/bangladesh/star-mosque-1.jpeg",

    description: `
    Star Mosque, locally known as Tara Masjid, is one of the most beautiful historic 
    mosques in Old Dhaka. It is famous for its stunning mosaic decorations featuring 
    countless star-shaped patterns made from fine china and ceramic tiles.

    The mosque is an outstanding example of Mughal-inspired architecture and remains an 
    important place of worship as well as one of the city's most popular historical landmarks.
`,

    rating: 4.8,

    reviews: 2836,

    savedCount: 1518,

    lat: 23.7152,

    lng: 90.3917,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Star_Mosque",
  },
  {
    id: 91,

    name: "Curzon Hall (কার্জন হল)",

    location: "University of Dhaka, Shahbag, Dhaka",

    postalAddress:
      "University of Dhaka, Shahbag, Dhaka - 1000, Dhaka Division, Bangladesh",

    category: "Historical Building",

    image: "images/places/bangladesh/curzon-hall-1.jpeg",

    description: `
    Curzon Hall is one of the most recognizable heritage buildings of the University of 
    Dhaka. Built during the British colonial period, the building combines Mughal and 
    European architectural styles and currently houses the Faculty of Science.

    It remains one of the university's most iconic landmarks and is an important symbol 
    of education, history, and architecture in Bangladesh.
`,

    rating: 4.8,

    reviews: 2195,

    savedCount: 1217,

    lat: 23.7287,

    lng: 90.3985,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Curzon_Hall",
  },
  {
    id: 92,

    name: "National Botanical Garden (জাতীয় উদ্ভিদ উদ্যান)",

    location: "Mirpur, Dhaka",

    postalAddress:
      "National Botanical Garden, Mirpur-1, Dhaka - 1216, Dhaka Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/national-botanical-garden-1.jpeg",

    description: `
    The National Botanical Garden is the largest botanical garden in Bangladesh. Spread 
    over more than 200 acres in Mirpur, it is home to thousands of plant species, rare 
    trees, orchids, medicinal plants, and scenic lakes.

    It is a favorite destination for nature lovers, researchers, students, and families 
    looking to enjoy a peaceful green environment within the city.
`,

    rating: 4.7,

    reviews: 3278,

    savedCount: 1864,

    lat: 23.8228,

    lng: 90.3505,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Bangladesh_National_Botanical_Garden",
  },
  {
    id: 93,

    name: "National Parliament House (জাতীয় সংসদ ভবন)",

    location: "Sher-e-Bangla Nagar, Dhaka",

    postalAddress:
      "Sher-e-Bangla Nagar, Dhaka - 1207, Dhaka Division, Bangladesh",

    category: "Architectural Landmark",

    image: "images/places/bangladesh/national-parliament-house-1.jpeg",

    description: `
    Designed by the world-renowned architect Louis I. Kahn, the National Parliament House 
    is one of the finest examples of modern architecture in the world. It serves as the 
    seat of the Parliament of Bangladesh.

    The building is admired for its unique geometric design, beautiful surroundings, and 
    remarkable engineering, making it one of the country's most iconic landmarks.
`,

    rating: 4.9,

    reviews: 5847,

    savedCount: 3421,

    lat: 23.7625,

    lng: 90.3789,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Jatiya_Sangsad_Bhaban",
  },
  {
    id: 94,

    name: "Liberation War Museum (মুক্তিযুদ্ধ জাদুঘর)",

    location: "Agargaon, Dhaka",

    postalAddress:
      "Civic Centre, Agargaon, Dhaka - 1207, Dhaka Division, Bangladesh",

    category: "Museum",

    image: "images/places/bangladesh/liberation-war-museum-1.jpeg",

    description: `
    The Liberation War Museum preserves the history of Bangladesh's struggle for 
    independence in 1971. Through photographs, documents, personal belongings, and 
    historical exhibits, it tells the story of the Liberation War.

    The museum honors the sacrifices of freedom fighters and provides visitors with a 
    deeper understanding of one of the most important events in Bangladesh's history.
`,

    rating: 4.9,

    reviews: 4716,

    savedCount: 2734,

    lat: 23.7784,

    lng: 90.3689,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October -March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Liberation_War_Museum",
  },
  {
    id: 95,

    name: "Bangladesh National Zoo (বাংলাদেশ জাতীয় চিড়িয়াখানা)",

    location: "Mirpur, Dhaka",

    postalAddress: "Mirpur-1, Dhaka - 1216, Dhaka Division, Bangladesh",

    category: "Zoo",

    image: "images/places/bangladesh/bangladesh-national-zoo-1.jpeg",

    description: `
    Bangladesh National Zoo is the largest zoo in the country and one of the most popular 
    family attractions in Dhaka. It is home to hundreds of animal species, including 
    Bengal tigers, lions, elephants, giraffes, zebras, crocodiles, and many birds.

    The zoo also plays an important role in wildlife conservation, education, and research, 
    attracting thousands of visitors every year.
`,

    rating: 4.5,

    reviews: 9248,

    savedCount: 4862,

    lat: 23.8226,

    lng: 90.3498,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Bangladesh_National_Zoo",
  },
  {
    id: 96,

    name: "Baitul Mukarram National Mosque (বায়তুল মোকাররম জাতীয় মসজিদ)",

    location: "Paltan, Dhaka",

    postalAddress:
      "Baitul Mukarram, Paltan, Dhaka - 1000, Dhaka Division, Bangladesh",

    category: "Religious Mosque",

    image: "images/places/bangladesh/baitul-mukarram-national-mosque-1.jpeg",

    description: `
    Baitul Mukarram National Mosque is the national mosque of Bangladesh and one of the 
    largest mosques in South Asia. Completed in 1968, its distinctive cube-shaped design 
    was inspired by the Kaaba in Makkah.

    The mosque can accommodate tens of thousands of worshippers and serves as the country's 
    principal center for Islamic religious activities.
`,

    rating: 4.9,

    reviews: 8746,

    savedCount: 4518,

    lat: 23.7281,

    lng: 90.4102,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Baitul_Mukarram",
  },
  {
    id: 97,

    name: "Dhakeshwari Temple (ঢাকেশ্বরী জাতীয় মন্দির)",

    location: "Lalbagh, Old Dhaka, Dhaka",

    postalAddress:
      "Bakshi Bazar, Lalbagh, Dhaka - 1211, Dhaka Division, Bangladesh",

    category: "Religious Temple",

    image: "images/places/bangladesh/dhakeshwari-temple-1.jpeg",

    description: `
    Dhakeshwari Temple is the National Temple of Bangladesh and one of the country's most 
    important Hindu pilgrimage sites. It is believed to have been established during the 
    12th century by King Ballal Sen.

    The temple is well known for its religious importance, beautiful architecture, and 
    colorful festivals that attract devotees and visitors throughout the year.
`,

    rating: 4.9,

    reviews: 3817,

    savedCount: 2076,

    lat: 23.7222,

    lng: 90.3886,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Dhakeshwari_Temple",
  },
  {
    id: 98,

    name: "Chandrima Udyan (চন্দ্রিমা উদ্যান)",

    location: "Sher-e-Bangla Nagar, Dhaka",

    postalAddress:
      "Sher-e-Bangla Nagar, Dhaka - 1207, Dhaka Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/chandrima-udyan-1.jpeg",

    description: `
    Chandrima Udyan is one of the most popular public parks in Dhaka, located beside the 
    National Parliament House. The park features landscaped gardens, lakes, walking paths, 
    and large green open spaces.

    It is also home to the mausoleum of former President Ziaur Rahman, making it an 
    important place for both recreation and historical interest.
`,

    rating: 4.7,

    reviews: 2841,

    savedCount: 1562,

    lat: 23.7635,

    lng: 90.3768,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Chandrima_Udyan",
  },
  {
    id: 99,

    name: "Kantajew Temple (কান্তজিউ মন্দির)",

    location: "Kantanagar, Kaharole Upazila, Dinajpur",

    postalAddress:
      "Kantanagar, Kaharole Upazila, Dinajpur - 5200, Rangpur Division, Bangladesh",

    category: "Historical Temple",

    image: "images/places/bangladesh/kantajew-temple-1.jpeg",

    description: `
    Kantajew Temple, also known as Kantanagar Temple or Kantaji Temple, is the finest 
    example of terracotta temple architecture in Bangladesh. Built during the 18th century, 
    the temple is famous for its thousands of beautifully carved terracotta panels.

    The artwork depicts scenes from the Ramayana, Mahabharata, and everyday Bengali life, 
    making the temple one of the country's most valuable archaeological treasures.
`,

    rating: 4.9,

    reviews: 4521,

    savedCount: 2685,

    lat: 25.7939,

    lng: 88.6654,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Kantanagar_Temple",
  },
  {
    id: 100,

    name: "Dinajpur Museum (দিনাজপুর জাদুঘর)",

    location: "Dinajpur Sadar, Dinajpur",

    postalAddress:
      "Dinajpur Sadar, Dinajpur - 5200, Rangpur Division, Bangladesh",

    category: "Museum",

    image: "images/places/bangladesh/dinajpur-museum-1.jpeg",

    description: `
    Dinajpur Museum preserves the archaeological, historical, and cultural heritage of 
    northern Bangladesh. Its collections include ancient sculptures, coins, inscriptions, 
    pottery, manuscripts, and other valuable historical artifacts.

    The museum offers visitors an opportunity to learn about the rich history of Dinajpur 
    and nearby archaeological sites through its well-preserved exhibits.
`,

    rating: 4.5,

    reviews: 584,

    savedCount: 316,

    lat: 25.6215,

    lng: 88.6356,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/দিনাজপুর_জাদুঘর",
  },
  {
    id: 101,

    name: "Ramsagar National Park (রামসাগর জাতীয় উদ্যান)",

    location: "Tajpur, Dinajpur Sadar, Dinajpur",

    postalAddress:
      "Tajpur Village, Dinajpur Sadar Upazila, Dinajpur - 5200, Rangpur Division, Bangladesh",

    category: "National Park",

    image: "images/places/bangladesh/ramsagar-national-park-1.jpeg",

    description: `
    Ramsagar National Park is built around Ramsagar, the largest man-made lake in Bangladesh. 
    The lake was excavated during the 18th century by Maharaja Ram Nath to help local people 
    overcome water shortages.

    The park is surrounded by green forests, walking trails, picnic areas, and a wide variety 
    of birds and wildlife. It is one of the most popular nature and recreation destinations in 
    northern Bangladesh.
`,

    rating: 4.8,

    reviews: 3856,

    savedCount: 2184,

    lat: 25.5499,

    lng: 88.6226,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Ramsagar_National_Park",
  },
  {
    id: 102,

    name: "Gor-e-Shahid Boro Maidan (গোর-এ-শহীদ বড় ময়দান)",

    location: "Dinajpur Sadar, Dinajpur",

    postalAddress:
      "Gor-e-Shahid Eidgah Maidan, Dinajpur Sadar, Dinajpur - 5200, Rangpur Division, Bangladesh",

    category: "Historical Memorial",

    image: "images/places/bangladesh/gor-e-shahid-boro-maidan-1.jpeg",

    description: `
    Gor-e-Shahid Boro Maidan is one of the most important historical grounds in Dinajpur. 
    It is dedicated to the martyrs of Bangladesh and is widely known for hosting one of the 
    largest Eid congregations in South Asia.

    Besides religious gatherings, the ground is also used for national events, public 
    ceremonies, and remembrance programs. It remains a symbol of unity, sacrifice, and the 
    history of the region.
`,

    rating: 4.6,

    reviews: 742,

    savedCount: 403,

    lat: 25.6218,

    lng: 88.6316,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Gor-E-Shahid_Eidgah_Maidan",
  },
  {
    id: 103,

    name: "Shopnopuri Amusement Park (স্বপ্নপুরী অ্যামিউজমেন্ট পার্ক)",

    location: "Aftabganj, Nawabganj Upazila, Dinajpur",

    postalAddress:
      "Aftabganj, Nawabganj Upazila, Dinajpur - 5280, Rangpur Division, Bangladesh",

    category: "Amusement Park",

    image: "images/places/bangladesh/shopnopuri-amusement-park-1.jpeg",

    description: `
    Shopnopuri Amusement Park is one of the largest privately built amusement parks in 
    Bangladesh. It offers exciting rides, beautiful gardens, artificial lakes, sculptures, 
    picnic spots, and many attractions for visitors of all ages.

    The park also features Fish World, an art gallery, and family-friendly entertainment, 
    making it one of the most popular picnic and recreation destinations in northern 
    Bangladesh.
`,

    rating: 4.6,

    reviews: 2784,

    savedCount: 1586,

    lat: 25.5052,

    lng: 89.064,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Shopnopuri_artificial_amusement_park",
  },
  {
    id: 104,

    name: "Sitakot Vihara (সীতাকোট বিহার)",

    location: "Nawabganj Upazila, Dinajpur",

    postalAddress:
      "Sitakot Vihara, Nawabganj Upazila, Dinajpur - 5280, Rangpur Division, Bangladesh",

    category: "Historical Buddhist Monastery",

    image: "images/places/bangladesh/sitakot-vihara-1.jpeg",

    description: `
    Sitakot Vihara is the remains of an ancient Buddhist monastery dating back to the early
    medieval period. The archaeological site is known for its square-shaped monastery with
    monks' cells surrounding a large central courtyard.

    It is one of the most important Buddhist archaeological sites in northern Bangladesh and
    offers visitors a chance to learn about the region's rich Buddhist heritage and ancient
    architecture.
`,

    rating: 4.7,

    reviews: 831,

    savedCount: 468,

    lat: 25.4143,

    lng: 89.0516,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sitakot_Vihara",
  },
  {
    id: 105,

    name: "Dinajpur Rajbari (দিনাজপুর রাজবাড়ি)",

    location: "Dinajpur Sadar, Dinajpur",

    postalAddress:
      "Dinajpur Rajbari, Dinajpur Sadar, Dinajpur - 5200, Rangpur Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/dinajpur-rajbari-1.jpeg",

    description: `
    Dinajpur Rajbari is the historic palace of the Maharajas of Dinajpur and one of the
    largest royal estates in northern Bangladesh. Although much of the palace is now in
    ruins, its gateways, temples, ponds, and remaining buildings still reflect the beauty
    of the former royal residence.

    Today, the Rajbari remains an important historical landmark and attracts visitors who
    are interested in the history, architecture, and royal heritage of Dinajpur.
`,

    rating: 4.7,

    reviews: 1284,

    savedCount: 724,

    lat: 25.6494,

    lng: 88.6575,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Dinajpur_Rajbari",
  },
  {
    id: 106,

    name: "Nayabad Mosque (নয়াবাদ মসজিদ)",

    location: "Nayabad Village, Kaharole Upazila, Dinajpur",

    postalAddress:
      "Nayabad Village, Ramchandrapur Union, Kaharole Upazila, Dinajpur - 5200, Rangpur Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/nayabad-mosque-1.jpeg",

    description: `
    Nayabad Mosque is a beautiful late-Mughal mosque built in 1793 near the famous
    Kantajew Temple. Local tradition says it was built by Muslim craftsmen who worked
    on the temple during the Mughal period.

    The mosque is well known for its elegant three-domed architecture, terracotta
    decoration, and historical importance. It remains one of the finest Mughal-era
    mosques in northern Bangladesh.
`,

    rating: 4.8,

    reviews: 963,

    savedCount: 548,

    lat: 25.78184,

    lng: 88.65841,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Nayabad_Mosque",
  },
  {
    id: 107,

    name: "Kaliya Jue Temple (কালিয়া জিউ মন্দির)",

    location: "Dinajpur Sadar, Dinajpur",

    postalAddress:
      "Kaliya Jue Temple, West of Dinajpur Rajbari, Dinajpur Sadar, Dinajpur - 5200, Rangpur Division, Bangladesh",

    category: "Religious Temple",

    image: "images/places/bangladesh/kaliya-jue-temple-1.jpeg",

    description: `
    Kaliya Jue Temple, also known as Kalia Jiu Temple, is one of the oldest Hindu temples
    in Dinajpur. The temple is dedicated to Lord Krishna and is located beside the historic
    Dinajpur Rajbari.

    It is well known for its traditional architecture, religious importance, and annual
    festivals that attract devotees and visitors from different parts of the country.
`,

    rating: 4.7,

    reviews: 682,

    savedCount: 387,

    lat: 25.79053,

    lng: 88.66674,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Kaliya_jue_Temple",
  },
  {
    id: 108,

    name: "Hili Land Port (হিলি স্থলবন্দর)",

    location: "Hili, Hakimpur Upazila, Dinajpur",

    postalAddress:
      "Hili Land Port, Hili, Hakimpur Upazila, Dinajpur - 5270, Rangpur Division, Bangladesh",

    category: "Land Port & Border Landmark",

    image: "images/places/bangladesh/hili-land-port-1.jpeg",

    description: `
    Hili Land Port is one of the busiest international land ports in Bangladesh, located
    on the Bangladesh–India border in Hakimpur Upazila. It plays an important role in
    trade and transportation between the two neighboring countries.

    Visitors also come to see the unique border area, railway crossing, customs facilities,
    and the busy commercial activities that make Hili one of the country's most important
    border landmarks.
`,

    rating: 4.7,

    reviews: 1254,

    savedCount: 718,

    lat: 25.2833,

    lng: 89.0167,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Hili_Land_Port",
  },
  {
    id: 109,

    name: "Mathurapur Deul (মথুরাপুর দেউল)",

    location: "Mathurapur Village, Madhukhali Upazila, Faridpur",

    postalAddress:
      "Mathurapur Village, Madhukhali Upazila, Faridpur - 7850, Dhaka Division, Bangladesh",

    category: "Historical Monument",

    image: "images/places/bangladesh/mathurapur-deul-1.jpeg",

    description: `
    Mathurapur Deul is one of the tallest and most impressive brick monuments in
    Bangladesh. Built around the 16th century, the tower is famous for its beautiful
    terracotta decoration and unique architectural design.

    The monument is an important archaeological site in Faridpur and attracts visitors
    who are interested in the history, architecture, and cultural heritage of medieval
    Bengal.
`,

    rating: 4.8,

    reviews: 912,

    savedCount: 528,

    lat: 23.5396,

    lng: 89.6385,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Mathurapur_Deul",
  },
  {
    id: 110,

    name: "Pathrail Mosque (পাথরাইল মসজিদ)",

    location: "Pathrail Village, Bhanga Upazila, Faridpur",

    postalAddress:
      "Pathrail Village, Bhanga Upazila, Faridpur - 7830, Dhaka Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/pathrail-mosque-1.jpeg",

    description: `
    Pathrail Mosque, also known as Majlis Awlia Mosque, is one of the oldest surviving
    Sultanate-era mosques in Bangladesh. Built during the late 14th or early 15th century,
    the mosque is famous for its beautiful brick architecture and ten domes.

    The mosque is an important archaeological monument protected by the Department of
    Archaeology. It continues to attract visitors who are interested in the history and
    architecture of medieval Bengal.
`,

    rating: 4.7,

    reviews: 624,

    savedCount: 361,

    lat: 23.3413,

    lng: 90.0897,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Pathrail_Mosque",
  },
  {
    id: 111,

    name: "Kanaipur Zamindar Bari (কানাইপুর জমিদার বাড়ি)",

    location: "Kanaipur, Faridpur Sadar, Faridpur",

    postalAddress:
      "Kanaipur Union, Faridpur Sadar Upazila, Faridpur - 7800, Dhaka Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/kanaipur-zamindar-bari-1.jpeg",

    description: `
    Kanaipur Zamindar Bari, locally known as Sikdar Bari, is a historic zamindar mansion
    that reflects the rich heritage of the colonial period. The palace is known for its
    impressive arches, spacious courtyards, and traditional architectural style.

    Although parts of the building have deteriorated over time, it remains an important
    historical landmark in Faridpur and attracts visitors who are interested in local
    history and old zamindar architecture.
`,

    rating: 4.6,

    reviews: 483,

    savedCount: 276,

    lat: 23.5857,

    lng: 89.8248,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/কানাইপুর_জমিদার_বাড়ি",
  },
  {
    id: 112,

    name: "Shah Farid Jame Masjid and Mazar (শাহ ফরিদ জামে মসজিদ ও মাজার)",

    location: "Faridpur Sadar, Faridpur",

    postalAddress:
      "Shah Farid Jame Masjid and Mazar, Faridpur Sadar, Faridpur - 7800, Dhaka Division, Bangladesh",

    category: "Religious Shrine & Mosque",

    image: "images/places/bangladesh/shah-farid-jame-masjid-and-mazar-1.jpeg",

    description: `
    Shah Farid Jame Masjid and Mazar is one of the most important religious landmarks
    in Faridpur. The shrine is dedicated to the respected Sufi saint Shah Sheikh
    Fariduddin, after whom Faridpur is believed to have been named.

    Thousands of devotees visit the mosque and shrine throughout the year to offer
    prayers, seek blessings, and take part in religious gatherings and annual
    commemorative events.
`,

    rating: 4.8,

    reviews: 1184,

    savedCount: 675,

    lat: 23.6079,

    lng: 89.8433,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 113,

    name: "Sheikh Russel Wonderland Children Park (শেখ রাসেল ওয়ান্ডারল্যান্ড শিশু পার্ক)",

    location: "Goalchamot, Faridpur Sadar, Faridpur",

    postalAddress:
      "Goalchamot, Dhaka–Faridpur Highway, Faridpur Sadar, Faridpur - 7800, Dhaka Division, Bangladesh",

    category: "Amusement Park",

    image:
      "images/places/bangladesh/sheikh-russel-wonderland-children-park-1.jpeg",

    description: `
    Sheikh Russel Wonderland Children Park is one of the most popular family recreation
    destinations in Faridpur. Built by Faridpur Municipality, the park offers children's
    rides, landscaped gardens, a lake, sculptures, and many entertainment facilities.

    The park is a favorite place for family outings, especially during weekends and
    holidays, attracting visitors from Faridpur and nearby districts throughout the year.
`,

    rating: 4.5,

    reviews: 842,

    savedCount: 463,

    lat: 23.6045,

    lng: 89.8416,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 114,

    name: "Fun Paradise (ফান প্যারাডাইস)",

    location: "Joydevpur, Shibrampur, Faridpur Sadar, Faridpur",

    postalAddress:
      "Joydevpur, Shibrampur, Faridpur Sadar Upazila, Faridpur - 7800, Dhaka Division, Bangladesh",

    category: "Amusement Park",

    image: "images/places/bangladesh/fun-paradise-1.jpeg",

    description: `
    Fun Paradise is one of the largest modern amusement parks in Faridpur. The park
    offers exciting rides, children's play areas, beautiful gardens, lakes, and
    recreational facilities for visitors of all ages.

    It is a popular destination for family outings, school picnics, and group tours.
    Visitors can also enjoy food courts, open green spaces, and various entertainment
    activities throughout the year.
`,

    rating: 4.4,

    reviews: 693,

    savedCount: 387,

    lat: 23.5786,

    lng: 89.8573,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 115,

    name: "Muhuri Project (মুহুরী প্রকল্প)",

    location: "Sonagazi Upazila, Feni",

    postalAddress:
      "Muhuri Irrigation Project, Sonagazi Upazila, Feni - 3930, Chattogram Division, Bangladesh",

    category: "Park & Engineering Landmark",

    image: "images/places/bangladesh/muhuri-project-1.jpeg",

    description: `
    Muhuri Project is one of the largest flood control and irrigation projects in
    Bangladesh. Built around the Feni, Muhuri, and Kalidas-Pahaliya rivers, it helps
    protect nearby farmland from flooding while supplying irrigation throughout the year.

    The scenic dam, large water reservoir, green surroundings, and beautiful sunset views
    have also made it one of the most popular tourist destinations in Feni. Visitors come
    here for picnics, cycling, photography, and relaxing in nature.
`,

    rating: 4.7,

    reviews: 1438,

    savedCount: 814,

    lat: 22.8371,

    lng: 91.4531,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Muhuri_Project",
  },
  {
    id: 116,

    name: "Bijoy Singh Dighi (বিজয় সিংহ দিঘী)",

    location: "Mohipal, Feni Sadar, Feni",

    postalAddress:
      "Mohipal, Feni Sadar Upazila, Feni - 3900, Chattogram Division, Bangladesh",

    category: "Historical Lake",

    image: "images/places/bangladesh/bijoy-singh-dighi-1.jpeg",

    description: `
    Bijoy Singh Dighi is one of the oldest and most well-known historic reservoirs in
    Feni District. According to local tradition, the large dighi was excavated during
    the reign of King Bijoy Singh and has served local communities for centuries.

    Today, the peaceful surroundings, historical importance, and green landscape make
    it a popular place for walking, relaxing, and enjoying nature in the heart of
    Feni.
`,

    rating: 4.6,

    reviews: 724,

    savedCount: 412,

    lat: 23.0026,

    lng: 91.3791,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/বিজয়_সিংহ_দিঘি",
  },
  {
    id: 117,

    name: "Bhawal National Park (ভাওয়াল জাতীয় উদ্যান)",

    location: "Sreepur Upazila, Gazipur",

    postalAddress:
      "Bhawal National Park, Sreepur Upazila, Gazipur - 1740, Dhaka Division, Bangladesh",

    category: "Nature & National Park",

    image: "images/places/bangladesh/bhawal-national-park-1.jpeg",

    description: `
    Bhawal National Park is one of the most popular nature destinations near Dhaka.
    Covered with beautiful Sal forests, the park offers walking trails, picnic areas,
    wildlife observation spots, and peaceful natural surroundings.

    Visitors come here to enjoy nature, birdwatching, cycling, and family outings.
    The park is also home to monkeys, deer, numerous bird species, and a rich variety
    of native plants.
`,

    rating: 4.7,

    reviews: 4986,

    savedCount: 2863,

    lat: 24.1048,

    lng: 90.4197,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Bhawal_National_Park",
  },
  {
    id: 118,

    name: "Nuhash Polli (নুহাশ পল্লী)",

    location: "Pirujali Union, Gazipur Sadar, Gazipur",

    postalAddress:
      "Nuhash Polli, Pirujali Union, Gazipur Sadar Upazila, Gazipur - 1704, Dhaka Division, Bangladesh",

    category: "Cultural Retreat",

    image: "images/places/bangladesh/nuhash-polli-1.jpeg",

    description: `
    Nuhash Polli is a beautiful garden retreat created by the renowned Bangladeshi
    writer Humayun Ahmed. The estate features peaceful lakes, lush gardens,
    sculptures, rare trees, and beautifully landscaped surroundings.

    It is one of Bangladesh's most unique cultural attractions, attracting visitors
    who admire literature, nature, and the creative legacy of Humayun Ahmed.
`,

    rating: 4.8,

    reviews: 3248,

    savedCount: 1896,

    lat: 24.0,

    lng: 90.43,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Nuhash_Palli",
  },
  {
    id: 119,

    name: "Fantasy Kingdom (ফ্যান্টাসি কিংডম)",

    location: "Jamgora, Ashulia, Savar, Dhaka",

    postalAddress:
      "Dhaka–Ashulia Highway, Jamgora, Ashulia, Savar, Dhaka - 1349, Bangladesh",

    category: "Entertainment & Amusement Park",

    image: "images/places/bangladesh/fantasy-kingdom-1.jpeg",

    description: `
    Fantasy Kingdom is one of the largest and most popular amusement parks in
    Bangladesh. The entertainment complex features thrilling rides, roller
    coasters, Water Kingdom, Xtreme Racing, children's attractions, restaurants,
    and resort facilities.

    It is a favorite destination for families, school trips, and tourists who
    visit throughout the year for fun, recreation, and special events.
`,

    rating: 4.7,

    reviews: 6821,

    savedCount: 4015,

    lat: 23.9343,

    lng: 90.2918,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Fantasy_Kingdom",
  },
  {
    id: 120,

    name: "Bangabandhu Sheikh Mujib Safari Park (বঙ্গবন্ধু শেখ মুজিব সাফারি পার্ক)",

    location: "Sreepur Upazila, Gazipur",

    postalAddress:
      "Safari Park Road, Sreepur Upazila, Gazipur - 1740, Dhaka Division, Bangladesh",

    category: "Nature & Safari Park",

    image:
      "images/places/bangladesh/bangabandhu-sheikh-mujib-safari-park-1.jpeg",

    description: `
    Bangabandhu Sheikh Mujib Safari Park is one of the largest safari parks in
    Bangladesh. The park is home to lions, tigers, elephants, zebras, giraffes,
    deer, crocodiles, and many other wildlife species living in large natural
    enclosures.

    Visitors can enjoy safari bus tours, walking trails, butterfly gardens,
    biodiversity exhibits, and educational activities, making it one of the
    country's most popular wildlife attractions.
`,

    rating: 4.8,

    reviews: 5416,

    savedCount: 3157,

    lat: 24.1696,

    lng: 90.3967,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Bangabandhu_Sheikh_Mujib_Safari_Park",
  },
  {
    id: 121,

    name: "Bhawal Rajbari (ভাওয়াল রাজবাড়ি)",

    location: "Joydebpur, Gazipur Sadar, Gazipur",

    postalAddress:
      "Rajbari Road, Joydebpur, Gazipur Sadar Upazila, Gazipur - 1700, Dhaka Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/bhawal-rajbari-1.jpeg",

    description: `
    Bhawal Rajbari is a historic palace that was once the residence of the Bhawal
    Zamindars. The palace is closely connected with the famous Bhawal Sannyasi case,
    one of the longest and most remarkable legal cases in South Asian history.

    Its colonial architecture, spacious courtyards, and historical significance make
    it one of the most important heritage landmarks in Gazipur.
`,

    rating: 4.7,

    reviews: 1743,

    savedCount: 1028,

    lat: 24.002,

    lng: 90.4125,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Bhawal_Rajbari",
  },
  {
    id: 122,

    name: "Bangabandhu Ancestral Home, Tungipara (বঙ্গবন্ধুর পৈতৃক বাড়ি, টুঙ্গিপাড়া)",

    location: "Tungipara Upazila, Gopalganj",

    postalAddress:
      "Bangabandhu Ancestral Home, Tungipara Upazila, Gopalganj - 8130, Dhaka Division, Bangladesh",

    category: "Historical House",

    image:
      "images/places/bangladesh/bangabandhu-ancestral-home-tungipara-1.jpeg",

    description: `
    The Bangabandhu Ancestral Home in Tungipara is the birthplace and childhood
    residence of Bangabandhu Sheikh Mujibur Rahman. The preserved house displays
    furniture, personal belongings, and historical items related to his life.

    It is one of the most important historical landmarks in Bangladesh and attracts
    visitors from across the country who come to learn about the life and legacy of
    the Father of the Nation.
`,

    rating: 4.9,

    reviews: 3564,

    savedCount: 2148,

    lat: 22.9065,

    lng: 89.9039,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 123,

    name: "Bangabandhu Sheikh Mujibur Rahman Mausoleum, Tungipara (বঙ্গবন্ধু শেখ মুজিবুর রহমানের সমাধি, টুঙ্গিপাড়া)",

    location: "Tungipara Upazila, Gopalganj",

    postalAddress:
      "Bangabandhu Sheikh Mujibur Rahman Mausoleum Complex, Tungipara Upazila, Gopalganj - 8130, Dhaka Division, Bangladesh",

    category: "Historical Mausoleum",

    image:
      "images/places/bangladesh/bangabandhu-sheikh-mujibur-rahman-mausoleum-1.jpeg",

    description: `
    The Mausoleum of Bangabandhu Sheikh Mujibur Rahman is the final resting place
    of the founding leader of Bangladesh. The beautifully maintained memorial
    complex includes a mosque, museum, library, lake, and landscaped gardens.

    Thousands of visitors from across the country come here every year to pay
    their respects and learn about the life and legacy of Bangabandhu Sheikh
    Mujibur Rahman.
`,

    rating: 4.9,

    reviews: 4872,

    savedCount: 2954,

    lat: 22.9071,

    lng: 89.9041,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Mausoleum_of_Bangabandhu_Sheikh_Mujibur_Rahman",
  },
  {
    id: 124,

    name: "Sheikh Rasel Shishu Park, Tungipara (শেখ রাসেল শিশু পার্ক, টুঙ্গিপাড়া)",

    location: "Tungipara Upazila, Gopalganj",

    postalAddress:
      "Sheikh Rasel Shishu Park, Tungipara Upazila, Gopalganj - 8130, Dhaka Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/sheikh-rasel-shishu-park-tungipara-1.jpeg",

    description: `
    Sheikh Rasel Shishu Park is a family-friendly recreational park in Tungipara.
    The park offers children's rides, landscaped gardens, walking paths, open
    green spaces, and pleasant surroundings for visitors of all ages.

    Located near the major memorial attractions of Tungipara, it is a popular
    stop for families and tourists who visit the area throughout the year.
`,

    rating: 4.5,

    reviews: 826,

    savedCount: 462,

    lat: 22.9058,

    lng: 89.9052,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 125,

    name: "Ulpur Zamindar Bari (উলপুর জমিদার বাড়ি)",

    location: "Ulpur Union, Kashiani Upazila, Gopalganj",

    postalAddress:
      "Ulpur Union, Kashiani Upazila, Gopalganj - 8133, Dhaka Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/ulpur-zamindar-bari-1.jpeg",

    description: `
    Ulpur Zamindar Bari is one of the best-known historic zamindar residences in
    Gopalganj District. Built during the British colonial period, the estate
    features traditional colonial architecture, spacious courtyards, and elegant
    decorative elements that reflect the prosperity of the former zamindar family.

    Although parts of the complex have aged over time, it remains an important
    heritage site for visitors interested in the history and architecture of rural
    Bengal.
`,

    rating: 4.6,

    reviews: 614,

    savedCount: 358,

    lat: 23.0708,

    lng: 89.8015,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/উলপুর_জমিদার_বাড়ি",
  },
  {
    id: 126,

    name: "Satchari National Park (সাতছড়ি জাতীয় উদ্যান)",

    location: "Chunarughat Upazila, Habiganj",

    postalAddress:
      "Raghunandan Hill Reserve Forest, Chunarughat Upazila, Habiganj - 3320, Sylhet Division, Bangladesh",

    category: "Forest & National Park",

    image: "images/places/bangladesh/satchari-national-park-1.jpeg",

    description: `
    Satchari National Park is a beautiful tropical rainforest located in the
    Raghunandan Hill Reserve Forest of Habiganj. The park is famous for its
    evergreen forest, seven natural streams, rich biodiversity, and peaceful
    hiking trails.

    It is home to endangered western hoolock gibbons, capped langurs, barking
    deer, butterflies, and hundreds of bird species, making it one of the best
    eco-tourism destinations in Bangladesh.
`,

    rating: 4.8,

    reviews: 3258,

    savedCount: 1946,

    lat: 24.1268,

    lng: 91.4424,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Satchari_National_Park",
  },
  {
    id: 127,

    name: "Bithangal Akhra (বিথঙ্গল আখড়া)",

    location: "Bithangal Village, Mithamoin Upazila, Kishoreganj",

    postalAddress:
      "Bithangal Village, Mithamoin Upazila, Kishoreganj - 2350, Dhaka Division, Bangladesh",

    category: "Religious Temple & Monastery",

    image: "images/places/bangladesh/bithangal-akhra-1.jpeg",

    description: `
    Bithangal Akhra is one of the oldest Vaishnav monasteries in Bangladesh.
    The centuries-old religious site is well known for its peaceful environment
    and traditional temple architecture.

    Every year, thousands of devotees gather here during the Rash Festival to
    participate in religious ceremonies, devotional music, and cultural events,
    making it one of the most important Vaishnav pilgrimage sites in the country.
`,

    rating: 4.7,

    reviews: 782,

    savedCount: 446,

    lat: 24.5579,

    lng: 91.2149,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/বিথাঙ্গল_বড়_আখড়া",
  },
  {
    id: 128,

    name: "Rema-Kalenga Wildlife Sanctuary (রেমা-কালেঙ্গা বন্যপ্রাণী অভয়ারণ্য)",

    location: "Kalenga, Chunarughat Upazila, Habiganj",

    postalAddress:
      "Kalenga Forest Range, Chunarughat Upazila, Habiganj - 3320, Sylhet Division, Bangladesh",

    category: "Forest & Wildlife Sanctuary",

    image: "images/places/bangladesh/rema-kalenga-wildlife-sanctuary-1.jpeg",

    description: `
    Rema-Kalenga Wildlife Sanctuary is one of the largest protected evergreen
    forests in Bangladesh. The sanctuary is well known for its rich biodiversity,
    scenic forest trails, and peaceful natural surroundings.

    It is home to many species of mammals, reptiles, butterflies, and more than
    160 species of birds, making it one of the country's best destinations for
    wildlife watching, hiking, and nature photography.
`,

    rating: 4.8,

    reviews: 2146,

    savedCount: 1328,

    lat: 24.117,

    lng: 91.5608,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Rema-Kalenga_Wildlife_Sanctuary",
  },
  {
    id: 129,

    name: "Jess Garden Park (জেস গার্ডেন পার্ক)",

    location: "Jashore Sadar, Jashore",

    postalAddress:
      "Jess Garden Park & Resort, Jashore Sadar Upazila, Jashore - 7400, Khulna Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/jess-garden-park-1.jpeg",

    description: `
    Jess Garden Park is a popular recreation park and resort in Jashore. The
    park offers children's rides, landscaped gardens, walking areas, food
    courts, and open green spaces for visitors of all ages.

    It is a favorite destination for family outings, picnics, and social events,
    providing a relaxing environment close to Jashore town.
`,

    rating: 4.5,

    reviews: 1186,

    savedCount: 672,

    lat: 23.1715,

    lng: 89.2098,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 130,

    name: "Godkhali Flower Village (গদখালী ফুলের গ্রাম)",

    location: "Godkhali Union, Jhikargacha Upazila, Jashore",

    postalAddress:
      "Godkhali Bazar, Godkhali Union, Jhikargacha Upazila, Jashore - 7420, Khulna Division, Bangladesh",

    category: "Natural Attraction",

    image: "images/places/bangladesh/godkhali-flower-village-1.jpeg",

    description: `
    Godkhali Flower Village is the largest flower-growing region in Bangladesh.
    Thousands of acres of land are covered with colorful flowers such as roses,
    marigolds, gladiolus, gerberas, and tuberoses.

    During the blooming season, the flower fields create a spectacular landscape,
    attracting photographers, nature lovers, and visitors from across the country.
`,

    rating: 4.9,

    reviews: 2845,

    savedCount: 1768,

    lat: 23.0938,

    lng: 89.1374,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/গদখালী_ইউনিয়ন",
  },
  {
    id: 131,

    name: "Jhapa Baor & Floating Bridge (ঝাঁপা বাওড় ও ভাসমান সেতু)",

    location: "Jhapa, Monirampur Upazila, Jashore",

    postalAddress:
      "Jhapa Baor Floating Bridge, Jhapa, Monirampur Upazila, Jashore - 7440, Khulna Division, Bangladesh",

    category: "Historical Lake",

    image: "images/places/bangladesh/jhapa-baor-floating-bridge-1.jpeg",

    description: `
    Jhapa Baor is one of the largest oxbow lakes in Bangladesh. The lake is famous
    for its peaceful natural beauty, rich fish resources, and the floating bridge
    built across part of the baor.

    Visitors come here throughout the year to enjoy boating, photography, fishing,
    walking on the floating bridge, and relaxing beside the scenic lake.
`,

    rating: 4.8,

    reviews: 1638,

    savedCount: 987,

    lat: 23.0378,

    lng: 89.2396,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 132,

    name: "Jessore Institute Public Library (যশোর ইনস্টিটিউট পাবলিক লাইব্রেরি)",

    location: "Jashore Sadar, Jashore",

    postalAddress:
      "Jashore Institute, Mujib Sarak, Jashore Sadar, Jashore - 7400, Khulna Division, Bangladesh",

    category: "Historical Library",

    image: "images/places/bangladesh/jessore-institute-public-library-1.jpeg",

    description: `
    Jessore Institute Public Library is the oldest public library in Bangladesh
    and one of the oldest public libraries in South Asia. Established during the
    British colonial period, it preserves thousands of books, rare manuscripts,
    and historical documents.

    The library has long served as an important cultural and educational center,
    attracting readers, researchers, students, and history enthusiasts from
    across the country.
`,

    rating: 4.7,

    reviews: 586,

    savedCount: 344,

    lat: 23.1642,

    lng: 89.2093,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Jashore_Institute_Public_Library",
  },
  {
    id: 133,

    name: "Benapole Land Port (বেনাপোল স্থলবন্দর)",

    location: "Benapole, Sharsha Upazila, Jashore",

    postalAddress:
      "Benapole Land Port, Benapole, Sharsha Upazila, Jashore - 7431, Khulna Division, Bangladesh",

    category: "Historical Land Port",

    image: "images/places/bangladesh/benapole-land-port-1.jpeg",

    description: `
    Benapole Land Port is the largest land port in Bangladesh and one of the
    busiest international border crossings in South Asia. It handles most of the
    overland trade between Bangladesh and India and serves as an important gateway
    for commerce and passenger travel.

    Operated by the Bangladesh Land Port Authority, the port plays a vital role in
    the country's economy and is visited daily by traders, transport operators,
    and international travelers.
`,

    rating: 4.7,

    reviews: 2358,

    savedCount: 1392,

    lat: 23.0416,

    lng: 88.8944,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Benapole_Land_Port",
  },
  {
    id: 134,

    name: "Collectorate Park (কালেক্টরেট পার্ক)",

    location: "Jashore Sadar, Jashore",

    postalAddress:
      "Collectorate Park, Mujib Sarak, Jashore Sadar, Jashore - 7400, Khulna Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/collectorate-park-1.jpeg",

    description: `
    Collectorate Park is a popular public park beside the historic Collectorate
    Bhaban in the heart of Jashore city. The park features green lawns, walking
    paths, flower gardens, and seating areas, making it a favorite place for
    relaxation and photography.

    Visitors also come to admire the beautiful British-era Collectorate Building,
    one of the city's best-known heritage landmarks.
`,

    rating: 4.5,

    reviews: 842,

    savedCount: 487,

    lat: 23.1666,

    lng: 89.2082,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 135,

    name: "Binodia Family Park (বিনোদিয়া ফ্যামিলি পার্ক)",

    location: "Kashimpur, Jashore Sadar, Jashore",

    postalAddress:
      "Binodia Family Park, Shantala, Kashimpur, Jashore Sadar Upazila, Jashore - 7400, Khulna Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/binodia-family-park-1.jpeg",

    description: `
    Binodia Family Park is one of the most popular recreational parks in Jashore.
    Established in 1998 inside the Jashore Cantonment area, the park offers
    landscaped gardens, children's rides, a mini zoo, boating facilities, food
    stalls, and picnic areas.

    Its peaceful environment and family-friendly attractions make it a favorite
    destination for day trips, school excursions, and weekend outings.
`,

    rating: 4.4,

    reviews: 715,

    savedCount: 426,

    lat: 23.2023,

    lng: 89.1784,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 136,

    name: "Michael Madhusudan Dutta Memorial, Sagardari (মাইকেল মধুসূদন দত্ত স্মৃতিসৌধ, সাগরদাঁড়ি)",

    location: "Sagardari, Keshabpur Upazila, Jashore",

    postalAddress:
      "Michael Madhusudan Dutta Memorial, Sagardari, Keshabpur Upazila, Jashore - 7450, Khulna Division, Bangladesh",

    category: "Historical Memorial",

    image:
      "images/places/bangladesh/michael-madhusudan-dutta-memorial-sagardari-1.jpeg",

    description: `
    The Michael Madhusudan Dutta Memorial preserves the birthplace and legacy of
    the famous Bengali poet Michael Madhusudan Dutta. The complex includes his
    ancestral house, a museum, a library, and memorial monuments surrounded by
    beautiful gardens.

    Every year, literature lovers, researchers, students, and visitors come to
    Sagardari to learn about his life and celebrate his contribution to Bengali
    literature.
`,

    rating: 4.8,

    reviews: 1487,

    savedCount: 926,

    lat: 22.9808,

    lng: 89.1547,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sagardari",
  },
  {
    id: 137,

    name: "Chanchra Shiva Temple (চাঁচড়া শিব মন্দির)",

    location: "Chanchra, Jashore Sadar, Jashore",

    postalAddress:
      "Chanchra Shiva Temple, Chanchra, Jashore Sadar Upazila, Jashore - 7400, Khulna Division, Bangladesh",

    category: "Temple",

    image: "images/places/bangladesh/chanchra-shiva-temple-1.jpeg",

    description: `
    Chanchra Shiva Temple is one of the oldest Hindu temples in Jashore. The
    temple is well known for its beautiful brick architecture and historical
    importance, reflecting the traditional temple style of Bengal.

    It remains an important religious site and attracts devotees, history
    enthusiasts, and photographers throughout the year, especially during the
    Shivaratri festival.
`,

    rating: 4.7,

    reviews: 648,

    savedCount: 382,

    lat: 23.1444,

    lng: 89.2042,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 138,

    name: "Eleven Shiva Temple Complex, Abhaynagar (এগারো শিব মন্দির কমপ্লেক্স, অভয়নগর)",

    location: "Abhaynagar Upazila, Jashore",

    postalAddress:
      "Eleven Shiva Temple Complex, Abhaynagar Upazila, Jashore - 7460, Khulna Division, Bangladesh",

    category: "Historical Temple Complex",

    image: "images/places/bangladesh/eleven-shiva-temple-complex-1.jpeg",

    description: `
    The Eleven Shiva Temple Complex is one of the most important archaeological
    and religious sites in Jashore. The complex consists of eleven historic Shiva
    temples built in the traditional Bengali architectural style during the
    zamindari period.

    It attracts devotees, history enthusiasts, photographers, and visitors
    throughout the year, especially during Shivaratri and other Hindu festivals.
`,

    rating: 4.8,

    reviews: 596,

    savedCount: 348,

    lat: 23.0097,

    lng: 89.4332,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/এগারো_শিব_মন্দির",
  },
  {
    id: 139,

    name: "Dattanagar Agricultural Farm (দত্তনগর কৃষি খামার)",

    location: "Kaliganj Upazila, Jhenaidah",

    postalAddress:
      "Dattanagar Agricultural Farm, Kaliganj Upazila, Jhenaidah - 7350, Khulna Division, Bangladesh",

    category: "Nature & Agricultural Farm",

    image: "images/places/bangladesh/dattanagar-agricultural-farm-1.jpeg",

    description: `
    Dattanagar Agricultural Farm is one of the largest government seed production
    farms in Bangladesh. The farm produces high-quality seeds for farmers across
    the country and plays an important role in agricultural research and crop
    development.

    Its vast green fields and peaceful rural landscape also attract visitors who
    are interested in agriculture, nature, and educational tours.
`,

    rating: 4.6,

    reviews: 735,

    savedCount: 426,

    lat: 23.3819,

    lng: 89.1297,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/দত্তনগর_কৃষি_খামার",
  },
  {
    id: 140,

    name: "Golakata Mosque (গোলাকাটা মসজিদ)",

    location: "Barobazar, Kaliganj Upazila, Jhenaidah",

    postalAddress:
      "Golakata Mosque, Barobazar, Kaliganj Upazila, Jhenaidah - 7350, Khulna Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/golakata-mosque-1.jpeg",

    description: `
    Golakata Mosque is one of the most important archaeological monuments in
    Jhenaidah. Built during the Bengal Sultanate period, the mosque is famous for
    its beautiful brick architecture, six domes, and finely decorated stone
    columns.

    The mosque is part of the historic Mosque City of Mohammadabad at Barobazar
    and is protected by the Department of Archaeology. It attracts historians,
    architecture enthusiasts, and visitors throughout the year.
`,

    rating: 4.7,

    reviews: 568,

    savedCount: 332,

    lat: 23.3058,

    lng: 89.1387,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Galakata_Mosque",
  },
  {
    id: 141,

    name: "Naldanga Temple Complex (নলডাঙ্গা মন্দির কমপ্লেক্স)",

    location: "Naldanga, Shailkupa Upazila, Jhenaidah",

    postalAddress:
      "Naldanga Temple Complex, Naldanga Village, Shailkupa Upazila, Jhenaidah - 7320, Khulna Division, Bangladesh",

    category: "Religious Temple Complex",

    image: "images/places/bangladesh/naldanga-temple-complex-1.jpeg",

    description: `
    Naldanga Temple Complex is one of the most important historic Hindu temple
    sites in Jhenaidah. Built by local zamindars, the complex contains several
    beautifully decorated temples that represent traditional Bengali temple
    architecture.

    The site remains an important place of worship and attracts devotees,
    history enthusiasts, and photographers, especially during major Hindu
    festivals.
`,

    rating: 4.7,

    reviews: 652,

    savedCount: 378,

    lat: 23.6242,

    lng: 89.2571,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October -March",

    wikipediaUrl: "",
  },
  {
    id: 142,

    name: "Shailkupa Shahi Mosque (শৈলকুপা শাহী মসজিদ)",

    location: "Shailkupa Upazila, Jhenaidah",

    postalAddress:
      "Shailkupa Shahi Mosque, Shailkupa Upazila, Jhenaidah - 7320, Khulna Division, Bangladesh",

    category: "Religious Mosque",

    image: "images/places/bangladesh/shailkupa-shahi-mosque-1.jpeg",

    description: `
    Shailkupa Shahi Mosque is a historic mosque that represents the rich Islamic
    architectural heritage of Bengal. Built with traditional brick construction,
    the mosque is admired for its elegant design, peaceful surroundings, and
    historic significance.

    It remains an active place of worship and attracts visitors interested in
    history, architecture, and religious heritage.
`,

    rating: 4.7,

    reviews: 598,

    savedCount: 347,

    lat: 23.6886,

    lng: 89.2493,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 143,

    name: "Shrine of Pagla Kanai (পাগলা কানাইয়ের মাজার)",

    location: "Berbari, Jhenaidah Sadar Upazila, Jhenaidah",

    postalAddress:
      "Pagla Kanai Memorial & Shrine, Berbari Village, Jhenaidah Sadar Upazila, Jhenaidah - 7300, Khulna Division, Bangladesh",

    category: "Religious Shrine",

    image: "images/places/bangladesh/pagla-kanai-shrine-1.jpeg",

    description: `
    The Shrine of Pagla Kanai commemorates the famous Baul singer and mystic
    Pagla Kanai, whose songs have become an important part of Bengali folk
    culture. The shrine attracts devotees, folk musicians, and researchers
    interested in Baul traditions.

    Every year, cultural programs and memorial gatherings are held here,
    celebrating his contribution to Bengali music and spiritual heritage.
`,

    rating: 4.6,

    reviews: 518,

    savedCount: 294,

    lat: 23.5485,

    lng: 89.1602,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Pagla_Kanai",
  },
  {
    id: 144,

    name: "Dhol Samudra Dighi (ঢোল সমুদ্র দিঘী)",

    location: "Jhenaidah Sadar Upazila, Jhenaidah",

    postalAddress:
      "Dhol Samudra Dighi, Jhenaidah Sadar Upazila, Jhenaidah - 7300, Khulna Division, Bangladesh",

    category: "Nature & Historical Lake",

    image: "images/places/bangladesh/dhol-samudra-dighi-1.jpeg",

    description: `
    Dhol Samudra Dighi is one of the oldest and largest historic ponds in
    Jhenaidah. The large water body is surrounded by trees and open green
    spaces, creating a peaceful environment for visitors.

    The dighi is valued for its historical significance and scenic beauty,
    attracting local visitors, photographers, and people looking for a quiet
    place to relax.
`,

    rating: 4.6,

    reviews: 704,

    savedCount: 412,

    lat: 23.5378,

    lng: 89.1729,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 145,

    name: "Gazi-Kalu-Champabati Mazar (গাজী-কালু-চম্পাবতী মাজার)",

    location: "Barobazar, Kaliganj Upazila, Jhenaidah",

    postalAddress:
      "Gazi-Kalu-Champabati Mazar, Barobazar, Kaliganj Upazila, Jhenaidah - 7350, Khulna Division, Bangladesh",

    category: "Religious Shrine",

    image: "images/places/bangladesh/gazi-kalu-champabati-mazar-1.jpeg",

    description: `
    Gazi-Kalu-Champabati Mazar is a historic shrine located in the archaeological
    area of Barobazar. The shrine is associated with the well-known medieval
    legend of Gazi, Kalu, and Champabati, which has long been part of Bengali
    folklore.

    Visitors come here for its religious importance, historical atmosphere, and
    connection with the rich cultural heritage of the region.
`,

    rating: 4.6,

    reviews: 442,

    savedCount: 258,

    lat: 23.3074,

    lng: 89.1395,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 146,

    name: "Miyar Dalan (মিয়ার দালান)",

    location: "Jhenaidah Sadar Upazila, Jhenaidah",

    postalAddress:
      "Miyar Dalan, Jhenaidah Sadar Upazila, Jhenaidah - 7300, Khulna Division, Bangladesh",

    category: "Historical Building",

    image: "images/places/bangladesh/miyar-dalan-1.jpeg",

    description: `
    Miyar Dalan is a historic heritage building in Jhenaidah that reflects the
    architectural style of the late Mughal and colonial periods. The building is
    known for its elegant arches, thick brick walls, and historical importance.

    Today, it stands as one of the district's notable archaeological landmarks,
    attracting visitors interested in history, architecture, and local heritage.
`,

    rating: 4.5,

    reviews: 391,

    savedCount: 224,

    lat: 23.5429,

    lng: 89.1724,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 147,

    name: "Mallikpur Banyan Tree (মল্লিকপুর বটগাছ)",

    location: "Mallikpur Village, Kaliganj Upazila, Jhenaidah",

    postalAddress:
      "Mallikpur Banyan Tree, Mallikpur Village, Kaliganj Upazila, Jhenaidah - 7350, Khulna Division, Bangladesh",

    category: "Nature",

    image: "images/places/bangladesh/mallikpur-banyan-tree-1.jpeg",

    description: `
    The Mallikpur Banyan Tree is one of the largest and oldest banyan trees in
    Bangladesh. Spreading over a vast area, its hundreds of aerial roots form a
    dense natural canopy that provides shade throughout the year.

    The tree is a popular destination for nature lovers, photographers, and
    visitors who come to enjoy its impressive size and peaceful surroundings.
`,

    rating: 4.8,

    reviews: 936,

    savedCount: 584,

    lat: 23.3706,

    lng: 89.1739,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 148,

    name: "Lokma Rajbari (লোকমা রাজবাড়ি)",

    location: "Lokma, Panchbibi Upazila, Joypurhat",

    postalAddress:
      "Lokma Rajbari, Lokma Village, Panchbibi Upazila, Joypurhat - 5910, Rajshahi Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/lokma-rajbari-1.jpeg",

    description: `
    Lokma Rajbari is a historic zamindar palace in Panchbibi Upazila of Joypurhat.
    Built several centuries ago, the palace combines traditional Bengali and
    colonial architectural styles and stands as an important reminder of the
    region's feudal history.

    Although parts of the building are now in ruins, the Rajbari remains a
    popular destination for history enthusiasts, photographers, and visitors
    interested in Bangladesh's architectural heritage.
`,

    rating: 4.6,

    reviews: 485,

    savedCount: 291,

    lat: 25.1896,

    lng: 89.0189,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 149,

    name: "Pagla Dewan Mass Graveyard (পাগলা দেওয়ান গণকবর)",

    location: "Joypurhat Sadar Upazila, Joypurhat",

    postalAddress:
      "Pagla Dewan Mass Graveyard, Joypurhat Sadar Upazila, Joypurhat - 5900, Rajshahi Division, Bangladesh",

    category: "Historical Memorial",

    image: "images/places/bangladesh/pagla-dewan-mass-graveyard-1.jpeg",

    description: `
    Pagla Dewan Mass Graveyard is a memorial dedicated to the martyrs of the 1971
    Liberation War. It commemorates civilians who lost their lives during the war
    and serves as an important place of remembrance and national history.

    Visitors come here to pay their respects, learn about the Liberation War, and
    participate in commemorative events held throughout the year.
`,

    rating: 4.7,

    reviews: 358,

    savedCount: 216,

    lat: 25.0961,

    lng: 89.0268,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 150,

    name: "Bel-Amla Bar Shivalaya / 12 Shiva Temples (বেল-আমলা বার শিবালয় / ১২ শিব মন্দির)",

    location: "Bel-Amla, Joypurhat Sadar Upazila, Joypurhat",

    postalAddress:
      "Bel-Amla Bar Shivalaya, Bel-Amla Village, Joypurhat Sadar Upazila, Joypurhat - 5900, Rajshahi Division, Bangladesh",

    category: "Religious Temple Complex",

    image: "images/places/bangladesh/bel-amla-bar-shivalaya-1.jpeg",

    description: `
    Bel-Amla Bar Shivalaya is a historic complex of twelve Shiva temples located
    in Bel-Amla village near Joypurhat town. The temples are arranged in a unique
    rectangular layout and are among the finest examples of traditional Bengali
    temple architecture.

    The complex is an important archaeological and religious site that attracts
    pilgrims, historians, photographers, and visitors interested in the cultural
    heritage of Bangladesh.
`,

    rating: 4.7,

    reviews: 442,

    savedCount: 265,

    lat: 25.1138,

    lng: 89.0369,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl:
      "https://bn.wikipedia.org/wiki/বেল_আমলা_বড়_শিবালয়_(শিব_মন্দির)",
  },
  {
    id: 151,

    name: "Gopinathpur Temple (গোপীনাথপুর মন্দির)",

    location: "Gopinathpur, Joypurhat Sadar Upazila, Joypurhat",

    postalAddress:
      "Gopinathpur Temple, Gopinathpur Village, Joypurhat Sadar Upazila, Joypurhat - 5900, Rajshahi Division, Bangladesh",

    category: "Religious Temple",

    image: "images/places/bangladesh/gopinathpur-temple-1.jpeg",

    description: `
    Gopinathpur Temple is an ancient Hindu temple in Joypurhat known for its
    traditional Bengali architecture and decorative terracotta work. The temple
    is an important religious and cultural landmark that reflects the rich
    heritage of the region.

    Visitors come to admire its historic design, peaceful surroundings, and its
    significance to the local Hindu community.
`,

    rating: 4.6,

    reviews: 318,

    savedCount: 194,

    lat: 25.0806,

    lng: 89.0094,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 152,

    name: "Nandail Dighi (নান্দাইল দিঘী)",

    location: "Punat Union, Kalai Upazila, Joypurhat",

    postalAddress:
      "Nandail Dighi, Punat Union, Kalai Upazila, Joypurhat - 5930, Rajshahi Division, Bangladesh",

    category: "Natural Lake",

    image: "images/places/bangladesh/nandail-dighi-1.jpeg",

    description: `
    Nandail Dighi is one of the largest historic man-made lakes in Joypurhat
    District. Believed to have been excavated several centuries ago, the dighi
    is well known for its peaceful surroundings, scenic beauty, and migratory
    birds during the winter season.

    The lake is a popular destination for picnics, photography, nature walks,
    fishing, and relaxing in a quiet rural environment.
`,

    rating: 4.6,

    reviews: 486,

    savedCount: 294,

    lat: 25.0596,

    lng: 89.2122,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 153,

    name: "Patharghata Church (পাথারঘাটা চার্চ)",

    location: "Patharghata, Panchbibi Upazila, Joypurhat",

    postalAddress:
      "Patharghata Church, Patharghata Village, Panchbibi Upazila, Joypurhat - 5910, Rajshahi Division, Bangladesh",

    category: "Religious Church",

    image: "images/places/bangladesh/patharghata-church-1.jpeg",

    description: `
    Patharghata Church is one of the oldest Christian churches in northern
    Bangladesh. Built during the colonial period, the church serves the local
    Christian community and is known for its simple brick architecture and
    peaceful surroundings.

    Located near the historic Patharghata archaeological area, the church is
    visited by worshippers, history enthusiasts, and travelers interested in the
    region's diverse cultural heritage.
`,

    rating: 4.7,

    reviews: 266,

    savedCount: 161,

    lat: 25.2036,

    lng: 89.0124,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 154,

    name: "Hinda-Kosba Shahi Mosque (হিন্দা-কসবা শাহী জামে মসজিদ)",

    location: "Hinda, Borail Union, Khetlal Upazila, Joypurhat",

    postalAddress:
      "Hinda-Kosba Shahi Mosque, Hinda Village, Borail Union, Khetlal Upazila, Joypurhat - 5940, Rajshahi Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/hinda-kosba-shahi-mosque-1.jpeg",

    description: `
    Hinda-Kosba Shahi Mosque is a well-known historic mosque located in Hinda
    Village of Khetlal Upazila. Built in 1958 under the supervision of Abdul
    Khaliq Chishti and designed by Abdul Gofur Chishti, the mosque is admired
    for its beautiful Islamic architecture, five domes, decorative brickwork,
    and tall minaret.

    It remains an active place of worship and is one of the most visited
    religious landmarks in Joypurhat District.
`,

    rating: 4.7,

    reviews: 392,

    savedCount: 238,

    lat: 24.9971,

    lng: 89.1356,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Hinda-Kosba_Shahi_Mosque",
  },
  {
    id: 155,

    name: "Alutila Cave (আলুটিলা গুহা)",

    location: "Matiranga Upazila, Khagrachhari, Chattogram",

    postalAddress:
      "Alutila Tourist Area, Matiranga Upazila, Khagrachhari - 4400, Chattogram Division, Bangladesh",

    category: "Cave",

    image: "images/places/bangladesh/alutila-cave-1.jpeg",

    description: `
    Alutila Cave, locally known as Matai Hakor, is one of the most famous
    natural caves in Bangladesh. Formed inside Alutila Hill, the cave is about
    100 meters long and remains cool, dark, and naturally damp throughout the
    year.

    Visitors use flashlights to walk through the narrow cave while enjoying the
    surrounding hills, forests, and scenic beauty of the Alutila Tourist Area.
`,

    rating: 4.8,

    reviews: 3148,

    savedCount: 1924,

    lat: 23.0883,

    lng: 91.9567,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Alutila_Cave",
  },
  {
    id: 156,

    name: "Hanging Bridge (ঝুলন্ত সেতু)",

    location:
      "Khagrachhari Hill District Council Horticulture Park, Khagrachhari Sadar, Khagrachhari",

    postalAddress:
      "Khagrachhari Hill District Council Horticulture Park, Khagrachhari Sadar, Khagrachhari - 4400, Chattogram Division, Bangladesh",

    category: "Bridge & Tourist Attraction",

    image: "images/places/bangladesh/hanging-bridge-khagrachhari-1.jpeg",

    description: `
    The Hanging Bridge is a popular suspension bridge inside the Khagrachhari
    Hill District Council Horticulture Park. Stretching across a scenic lake,
    the bridge offers beautiful views of the surrounding green hills, forests,
    and calm water.

    It is a favorite spot for photography, sightseeing, and relaxing while
    exploring one of Khagrachhari's most visited tourist destinations.
`,

    rating: 4.7,

    reviews: 1854,

    savedCount: 1138,

    lat: 23.093,

    lng: 91.9709,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 157,

    name: "Debota Pukur (দেবতা পুকুর)",

    location: "Nunchhari, Khagrachhari Sadar Upazila, Khagrachhari",

    postalAddress:
      "Debota Pukur (Matai Pukhiri), Nunchhari, Khagrachhari Sadar Upazila, Khagrachhari - 4400, Chattogram Division, Bangladesh",

    category: "Natural Lake",

    image: "images/places/bangladesh/debota-pukur-1.jpeg",

    description: `
    Debota Pukur, also known as Matai Pukhiri, is a sacred hill lake located
    among the green hills of Khagrachhari. The crystal-clear lake is considered
    holy by the local Tripura community and is surrounded by dense forest and
    peaceful natural scenery.

    Visitors come for hiking, photography, and to experience the tranquil
    environment while respecting the cultural and religious importance of the
    lake.
`,

    rating: 4.7,

    reviews: 928,

    savedCount: 574,

    lat: 23.0156,

    lng: 91.9725,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "",
  },
  {
    id: 158,

    name: "Alutila Tourist Spot (আলুটিলা পর্যটন কেন্দ্র)",

    location: "Alutila Tourist Centre, Matiranga Upazila, Khagrachhari",

    postalAddress:
      "Alutila Tourist Centre, Matiranga Upazila, Khagrachhari - 4400, Chattogram Division, Bangladesh",

    category: "Park & Tourist Attraction",

    image: "images/places/bangladesh/alutila-tourist-spot-1.jpeg",

    description: `
    Alutila Tourist Spot is the most popular tourist destination in Khagrachhari.
    Situated on Alutila Hill, the tourist centre offers panoramic views of the
    surrounding hills, forests, and valleys. Visitors can enjoy walking trails,
    viewpoints, picnic areas, and easy access to the famous Alutila Cave.

    It is a favorite destination for nature lovers, photographers, and families
    exploring the scenic beauty of the Chattogram Hill Tracts.
`,

    rating: 4.8,

    reviews: 4126,

    savedCount: 2581,

    lat: 23.0895,

    lng: 91.9578,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 159,

    name: "Khagrachhari Park Lake (খাগড়াছড়ি পার্ক লেক)",

    location:
      "Khagrachhari Hill District Council Horticulture Park, Khagrachhari Sadar, Khagrachhari",

    postalAddress:
      "Khagrachhari Hill District Council Horticulture Park, Khagrachhari Sadar, Khagrachhari - 4400, Chattogram Division, Bangladesh",

    category: "Lake",

    image: "images/places/bangladesh/khagrachhari-park-lake-1.jpeg",

    description: `
    Khagrachhari Park Lake is a scenic artificial lake located inside the
    Khagrachhari Hill District Council Horticulture Park. Surrounded by green
    hills, forests, and landscaped gardens, the lake is one of the district's
    most popular places for relaxation and photography.

    Visitors enjoy walking around the lake, boating, and spending time in the
    peaceful natural environment while exploring the park.
`,

    rating: 4.7,

    reviews: 1324,

    savedCount: 802,

    lat: 23.0979,

    lng: 91.9725,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 160,

    name: "Hazachara Waterfall (হাজাছড়া জলপ্রপাত)",

    location: "Dighinala Upazila, Khagrachhari",

    postalAddress:
      "Hazachara Waterfall, Dighinala Upazila, Khagrachhari - 4420, Chattogram Division, Bangladesh",

    category: "Waterfall",

    image: "images/places/bangladesh/hazachara-waterfall-1.jpeg",

    description: `
    Hazachara Waterfall, also known as Hajachara Waterfall, is one of the most
    beautiful natural waterfalls in Khagrachhari District. Hidden among forested
    hills, the waterfall is reached by a scenic trekking trail through streams
    and lush greenery.

    It is a popular destination for adventure seekers, photographers, and nature
    lovers looking to experience the peaceful landscape of the Chattogram Hill
    Tracts.
`,

    rating: 4.8,

    reviews: 1685,

    savedCount: 1042,

    lat: 23.3009,

    lng: 92.0147,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "June - October",

    wikipediaUrl: "",
  },
  {
    id: 161,

    name: "Richhang Waterfall (রিছাং ঝর্ণা)",

    location: "Sapmara Union, Matiranga Upazila, Khagrachhari",

    postalAddress:
      "Richhang Waterfall, Sapmara Union, Matiranga Upazila, Khagrachhari - 4400, Chattogram Division, Bangladesh",

    category: "Waterfall",

    image: "images/places/bangladesh/richhang-waterfall-1.jpeg",

    description: `
    Richhang Waterfall is one of the most beautiful waterfalls in Khagrachhari.
    Hidden among forested hills, the waterfall can be reached by a short walk
    from the Khagrachhari–Dighinala Road. The cool stream, lush greenery, and
    peaceful surroundings make it a popular destination for nature lovers,
    trekkers, and photographers.
`,

    rating: 4.8,

    reviews: 1546,

    savedCount: 973,

    lat: 23.0978,

    lng: 91.9636,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "June - October",

    wikipediaUrl: "",
  },
  {
    id: 162,

    name: "Stair of Heaven (Mayung Kopal / Hatimatha) (স্বর্গের সিঁড়ি - মায়ুং কপাল / হাতিমাথা)",

    location: "Perachara Union, Khagrachhari Sadar Upazila, Khagrachhari",

    postalAddress:
      "Mayung Kopal (Stair of Heaven), Perachara Union, Khagrachhari Sadar Upazila, Khagrachhari - 4400, Chattogram Division, Bangladesh",

    category: "Hill Viewpoint",

    image: "images/places/bangladesh/mayung-kopal-stair-of-heaven-1.jpeg",

    description: `
    Mayung Kopal, popularly known as the Stair of Heaven or Hatimatha, is one
    of the most spectacular hill viewpoints in Khagrachhari. A steel staircase
    of about 300 steps leads to the hilltop, offering breathtaking panoramic
    views of green hills, valleys, and clouds.

    Originally built to improve access for local indigenous communities, the
    staircase has become one of the district's most popular tourist attractions
    for hiking, photography, and sunrise or sunset views.
`,

    rating: 4.9,

    reviews: 2863,

    savedCount: 1837,

    lat: 23.1548,

    lng: 91.988,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/মায়ুং_কপাল",
  },
  {
    id: 163,

    name: "Maischari Dam (Panchhari Rubber Dam) (মাইসছড়ি বাঁধ / পানছড়ি রাবার ড্যাম)",

    location: "Shantipur, Panchhari Upazila, Khagrachhari",

    postalAddress:
      "Panchhari Rubber Dam, Shantipur, Panchhari Upazila, Khagrachhari - 4410, Chattogram Division, Bangladesh",

    category: "Dam",

    image: "images/places/bangladesh/panchhari-rubber-dam-1.jpeg",

    description: `
    Maischari Dam, widely known as Panchhari Rubber Dam, is an irrigation
    structure built across the Chengi River in the Shantipur area of Panchhari
    Upazila. The dam supplies water for agriculture and has transformed large
    areas of previously uncultivated land into productive farmland.

    Surrounded by green hills and a scenic reservoir, the dam is also a popular
    destination for sightseeing, photography, and enjoying the peaceful natural
    landscape of Khagrachhari.
`,

    rating: 4.7,

    reviews: 648,

    savedCount: 394,

    lat: 23.3098,

    lng: 91.9449,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 164,

    name: "Dakshindihi Rabindra Complex (দক্ষিণডিহি রবীন্দ্র কমপ্লেক্স)",

    location: "Dakkhindihi Village, Fultala Union, Phultala Upazila, Khulna",

    postalAddress:
      "Dakshindihi Rabindra Complex, Dakkhindihi Village, Fultala Union, Phultala Upazila, Khulna - 9210, Khulna Division, Bangladesh",

    category: "Cultural Heritage",

    image: "images/places/bangladesh/dakshindihi-rabindra-complex-1.jpeg",

    description: `
    Dakshindihi Rabindra Complex is the preserved ancestral residence of
    Rabindranath Tagore's father-in-law, Beni Madhab Roy Chowdhury, and the
    birthplace of Tagore's wife, Mrinalini Devi. The complex has been preserved
    as a museum showcasing the poet's family connections and the cultural
    heritage of the region.

    It is an important destination for literature lovers, researchers, and
    visitors interested in the life and legacy of Rabindranath Tagore.
`,

    rating: 4.7,

    reviews: 724,

    savedCount: 435,

    lat: 22.9897,

    lng: 89.4597,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Rabindra_Complex",
  },
  {
    id: 165,

    name: "Dakbangla Ghat (ডাকবাংলা ঘাট)",

    location: "Dakbangla More, Rupsha River, Khulna Sadar, Khulna",

    postalAddress:
      "Dakbangla Ghat, Dakbangla Road, Khulna Sadar, Khulna - 9100, Khulna Division, Bangladesh",

    category: "River Ghat",

    image: "images/places/bangladesh/dakbangla-ghat-1.jpeg",

    description: `
    Dakbangla Ghat is one of the most popular riverside destinations in Khulna,
    located on the banks of the Rupsha River. The ghat serves as an important
    ferry terminal while also attracting visitors who come to enjoy boat rides,
    beautiful sunsets, and the refreshing river breeze.

    The lively atmosphere created by passenger ferries, local boats, and riverside
    activities makes it a favorite place for evening walks, photography, and
    experiencing the everyday life of Khulna.
`,

    rating: 4.7,

    reviews: 1583,

    savedCount: 954,

    lat: 22.8019,

    lng: 89.5811,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 166,

    name: "Shahid Hadis Park (শহীদ হাদিস পার্ক)",

    location: "Prafulla Chandra (P. C.) Ray Road, Kotwali, Khulna",

    postalAddress:
      "Shahid Hadis Park, P. C. Ray Road, Kotwali, Khulna - 9100, Khulna Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/shahid-hadis-park-1.jpeg",

    description: `
    Shahid Hadis Park is one of the oldest and most popular public parks in
    Khulna City. Established in 1884, the park was formerly known as Khulna
    Municipal Park, Gandhi Park, and Jinnah Park before receiving its current
    name in memory of martyr Sheikh Hadisur Rahman.

    The park features landscaped gardens, walking paths, a lake, fountains, and
    the Khulna Central Shaheed Minar. It is a favorite destination for morning
    walks, family outings, photography, and cultural events.
`,

    rating: 4.6,

    reviews: 1894,

    savedCount: 1126,

    lat: 22.8161,

    lng: 89.5659,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Shahid_Hadis_Park",
  },
  {
    id: 167,

    name: "Gallamari Memorial Monument (গল্লামারী স্মৃতিসৌধ)",

    location: "Gallamari, Sonadanga, Khulna",

    postalAddress:
      "Gallamari Memorial Monument, Gallamari, Sonadanga, Khulna - 9208, Khulna Division, Bangladesh",

    category: "Historical Memorial",

    image: "images/places/bangladesh/gallamari-memorial-monument-1.jpeg",

    description: `
    Gallamari Memorial Monument commemorates the victims of one of the largest
    massacres committed during the 1971 Liberation War in southwestern
    Bangladesh. The memorial stands near Khulna University at the historic
    Gallamari killing ground, where countless civilians and intellectuals lost
    their lives.

    Today it serves as a place of remembrance, paying tribute to the martyrs
    while educating visitors about an important chapter of Bangladesh's
    independence struggle.
`,

    rating: 4.8,

    reviews: 1274,

    savedCount: 786,

    lat: 22.7985,

    lng: 89.537,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 168,

    name: "Khulna Shipyard (খুলনা শিপইয়ার্ড)",

    location: "Labanchara, Khulna",

    postalAddress:
      "Khulna Shipyard Limited, Labanchara, Khulna - 9201, Khulna Division, Bangladesh",

    category: "Industrial Heritage",

    image: "images/places/bangladesh/khulna-shipyard-1.jpeg",

    description: `
    Khulna Shipyard is one of the oldest and most important shipbuilding and
    ship repair facilities in Bangladesh. Established in 1957, the shipyard is
    operated by the Bangladesh Navy and is located on the western bank of the
    Rupsha River.

    The shipyard builds and repairs naval and commercial vessels and plays a
    significant role in Bangladesh's maritime industry. It is also recognized as
    an important industrial landmark of Khulna.
`,

    rating: 4.6,

    reviews: 854,

    savedCount: 497,

    lat: 22.7892,

    lng: 89.5798,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Khulna_Shipyard",
  },
  {
    id: 169,

    name: "Bir Shrestha Ruhul Amin Memorial (বীরশ্রেষ্ঠ রুহুল আমিন স্মৃতিসৌধ)",

    location: "Bagmara, Rupsha Upazila, Khulna",

    postalAddress:
      "Bir Shrestha Ruhul Amin Memorial, Bagmara, Rupsha Upazila, Khulna - 9240, Khulna Division, Bangladesh",

    category: "Historical Memorial",

    image: "images/places/bangladesh/bir-shrestha-ruhul-amin-memorial-1.jpeg",

    description: `
    Bir Shrestha Ruhul Amin Memorial commemorates Bir Shrestha Ruhul Amin,
    the only member of the Bangladesh Navy to receive the country's highest
    gallantry award for his bravery during the 1971 Liberation War. The
    memorial honors his sacrifice and preserves the memory of one of the
    nation's greatest war heroes.

    Visitors come to pay their respects, learn about the Liberation War,
    and remember the courage and patriotism of Bir Shrestha Ruhul Amin.
`,

    rating: 4.8,

    reviews: 672,

    savedCount: 401,

    lat: 22.733,

    lng: 89.6066,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 170,

    name: "Khulna Divisional Museum (খুলনা বিভাগীয় জাদুঘর)",

    location: "Shib Bari More, Sonadanga, Khulna",

    postalAddress:
      "Khulna Divisional Museum, Shib Bari More, Sonadanga, Khulna - 9100, Khulna Division, Bangladesh",

    category: "Museum",

    image: "images/places/bangladesh/khulna-divisional-museum-1.jpeg",

    description: `
    Khulna Divisional Museum is the largest museum in southwestern Bangladesh.
    Managed by the Department of Archaeology, it preserves the history,
    archaeology, culture, and natural heritage of the Khulna Division.

    Its galleries feature archaeological artifacts, ancient sculptures, coins,
    manuscripts, Liberation War exhibits, and displays highlighting the
    Sundarbans and the region's rich cultural heritage.
`,

    rating: 4.7,

    reviews: 942,

    savedCount: 563,

    lat: 22.8257,

    lng: 89.5549,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 171,

    name: "Karamjal Wildlife Breeding Center (করমজল বন্যপ্রাণী প্রজনন কেন্দ্র)",

    location:
      "Chandpai Range, Sundarbans Reserve Forest, Mongla Upazila, Bagerhat",

    postalAddress:
      "Karamjal Wildlife Breeding Center, Chandpai Range, Sundarbans Reserve Forest, Mongla Upazila, Bagerhat - 9350, Khulna Division, Bangladesh",

    category: "Wildlife Conservation Center",

    image: "images/places/bangladesh/karamjal-wildlife-breeding-center-1.jpeg",

    description: `
    Karamjal Wildlife Breeding Center is the most accessible ecotourism site in
    the Sundarbans Reserve Forest. Managed by the Bangladesh Forest Department,
    it serves as a conservation and breeding center for wildlife including
    crocodiles, deer, and turtles.

    Visitors can explore elevated wooden walkways through the mangrove forest,
    observe spotted deer, monkeys, crocodiles, turtles, and many bird species,
    while learning about the unique ecosystem of the Sundarbans.
`,

    rating: 4.8,

    reviews: 2147,

    savedCount: 1368,

    lat: 22.4283,

    lng: 89.5909,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 172,

    name: "Bonobilash Zoo & Children's Park (বনবিলাস চিড়িয়াখানা ও শিশু পার্ক)",

    location: "Gilatala, Jahanabad Cantonment, Khan Jahan Ali Thana, Khulna",

    postalAddress:
      "Bonobilash Zoo & Children's Park, Gilatala, Jahanabad Cantonment, Khan Jahan Ali Thana, Khulna - 9205, Khulna Division, Bangladesh",

    category: "Wildlife Park",

    image: "images/places/bangladesh/bonobilash-zoo-and-childrens-park-1.jpeg",

    description: `
    Bonobilash Zoo & Children's Park is a popular family recreation destination
    located at Jahanabad Cantonment in Khulna. Also known as Gilatala Public Zoo,
    it is one of the few zoological parks in southwestern Bangladesh.

    The park features a collection of native and exotic animals, children's
    rides, landscaped gardens, walking paths, and picnic areas, making it a
    favorite destination for families, school trips, and wildlife enthusiasts.
`,

    rating: 4.5,

    reviews: 1186,

    savedCount: 694,

    lat: 22.9236,

    lng: 89.4977,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 173,

    name: "Hiron Point (হিরণ পয়েন্ট)",

    location:
      "Khulna Wildlife Sanctuary, Sundarbans Reserve Forest, Mongla Upazila, Bagerhat",

    postalAddress:
      "Hiron Point (Nilkamal), Khulna Wildlife Sanctuary, Sundarbans Reserve Forest, Mongla Upazila, Bagerhat - 9350, Khulna Division, Bangladesh",

    category: "Wildlife Sanctuary",

    image: "images/places/bangladesh/hiron-point-1.jpeg",

    description: `
    Hiron Point, also known as Nilkamal, is one of the most famous wildlife
    viewing destinations in the Sundarbans Reserve Forest and is part of the
    UNESCO World Heritage Site. The area is known for its watchtower and rich
    mangrove ecosystem.

    Visitors may observe spotted deer, estuarine crocodiles, monkeys, numerous
    bird species, and, with luck, the Royal Bengal Tiger. It is one of the best
    places to experience the unique biodiversity of the world's largest
    mangrove forest.
`,

    rating: 4.9,

    reviews: 2148,

    savedCount: 1486,

    lat: 21.8258,

    lng: 89.4627,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Hiron_Point",
  },
  {
    id: 174,

    name: "UN Children's Park (ইউএন শিশু পার্ক)",

    location: "KDA Avenue, Shantidham More, Kotwali, Khulna",

    postalAddress:
      "UN Children's Park, KDA Avenue, Shantidham More, Kotwali, Khulna - 9100, Khulna Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/un-childrens-park-1.jpeg",

    description: `
    UN Children's Park is a popular recreational park in Khulna City,
    located near Shantidham More on KDA Avenue. The park is a favorite
    destination for families and children seeking outdoor recreation.

    It offers children's rides, playgrounds, walking paths, open green
    spaces, and seating areas, making it an ideal place for evening walks,
    family outings, and leisure activities.
`,

    rating: 4.4,

    reviews: 932,

    savedCount: 551,

    lat: 22.812,

    lng: 89.5613,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 175,

    name: "Nikli Haor (নিকলী হাওর)",

    location: "Nikli Upazila, Kishoreganj District, Dhaka Division",

    postalAddress:
      "Nikli Haor, Nikli Upazila, Kishoreganj District - 2360, Dhaka Division, Bangladesh",

    category: "Wetland",

    image: "images/places/bangladesh/nikli-haor-1.jpeg",

    description: `
    Nikli Haor is one of the largest and most beautiful freshwater wetlands in
    Bangladesh. The haor extends across Nikli, Mithamoin, Austagram, and Itna
    upazilas and is especially popular during the monsoon, when the vast
    floodplain resembles an inland sea.

    Visitors enjoy boat cruises, bird watching, fishing, spectacular sunrise
    and sunset views, and the unique lifestyle of the haor communities. It is
    one of the country's most popular wetland tourism destinations.
`,

    rating: 4.9,

    reviews: 3421,

    savedCount: 2214,

    lat: 24.37,

    lng: 91.075,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "July - September",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Nikli_Haor",
  },
  {
    id: 176,

    name: "Mithamoin Zero Point (মিঠামইন জিরো পয়েন্ট)",

    location:
      "Mithamoin Town, Mithamoin–Austagram Road, Mithamoin Upazila, Kishoreganj District, Dhaka Division",

    postalAddress:
      "Mithamoin Zero Point, Mithamoin–Austagram Road, Mithamoin, Kishoreganj District - 2370, Dhaka Division, Bangladesh",

    category: "Landmark",

    image: "images/places/bangladesh/mithamoin-zero-point-1.jpeg",

    description: `
    Mithamoin Zero Point is a popular landmark on the scenic
    Mithamoin–Austagram all-weather road in the haor region of
    Kishoreganj. During the monsoon season, the surrounding wetlands
    create spectacular panoramic views, making it one of the most
    photographed locations in the area.

    Visitors come here to enjoy the unique haor landscape, cycling,
    road trips, sunrise and sunset views, and the peaceful natural
    beauty of Bangladesh's largest wetland region.
`,

    rating: 4.8,

    reviews: 1764,

    savedCount: 1186,

    lat: 24.4149,

    lng: 91.0556,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "July - September",

    wikipediaUrl: "",
  },
  {
    id: 177,

    name: "Pagla Mosque (পাগলা মসজিদ)",

    location:
      "Harua, Kishoreganj Sadar Upazila, Kishoreganj District, Dhaka Division",

    postalAddress:
      "Pagla Mosque and Islamic Complex, Harua, Kishoreganj Sadar Upazila, Kishoreganj - 2300, Dhaka Division, Bangladesh",

    category: "Religious Mosque",

    image: "images/places/bangladesh/pagla-mosque-1.jpeg",

    description: `
    Pagla Mosque, officially known as the Pagla Mosque and Islamic Complex,
    is one of the most famous mosques in Bangladesh. Located on the banks of
    the Narsunda River, it is renowned for receiving millions of taka in
    donations from devotees of different faiths.

    The mosque is an important religious landmark in Kishoreganj and attracts
    thousands of worshippers and visitors throughout the year for prayer,
    religious activities, and its remarkable history.
`,

    rating: 4.9,

    reviews: 4817,

    savedCount: 2948,

    lat: 24.444,

    lng: 90.7716,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Pagla_Mosque",
  },
  {
    id: 178,

    name: "Chandrabati Temple (চন্দ্রাবতী মন্দির)",

    location:
      "Patuair Village, Maij Khapan Union, Kishoreganj Sadar Upazila, Kishoreganj District, Dhaka Division",

    postalAddress:
      "Chandrabati Temple, Patuair Village, Maij Khapan Union, Kishoreganj Sadar Upazila, Kishoreganj - 2300, Dhaka Division, Bangladesh",

    category: "Historical Temple",

    image: "images/places/bangladesh/chandrabati-temple-1.jpeg",

    description: `
    Chandrabati Temple is a historic Hindu temple associated with the
    renowned medieval Bengali poet Chandrabati, who is widely regarded as
    the first known female poet in Bengali literature. The temple stands in
    her native village and is an important cultural and archaeological
    heritage site.

    Visitors come to explore its historical significance, traditional
    architecture, and the literary legacy of Chandrabati and her family.
`,

    rating: 4.7,

    reviews: 638,

    savedCount: 391,

    lat: 24.4958,

    lng: 90.8008,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/চন্দ্রাবতী_মন্দির",
  },
  {
    id: 179,

    name: "Nikli Beribadh (নিকলী বেড়িবাঁধ)",

    location: "Nikli Town, Nikli Upazila, Kishoreganj District, Dhaka Division",

    postalAddress:
      "Nikli Beribadh, Nikli Town, Nikli Upazila, Kishoreganj District - 2360, Dhaka Division, Bangladesh",

    category: "Scenic Embankment",

    image: "images/places/bangladesh/nikli-beribadh-1.jpeg",

    description: `
    Nikli Beribadh is a scenic embankment along the edge of Nikli Haor in
    Kishoreganj. Starting near the Nikli Upazila Parishad, it stretches beside
    the haor and is one of the most popular places for walking, photography,
    and enjoying panoramic wetland views.

    During the monsoon season, the embankment offers spectacular sunrise and
    sunset scenery as the surrounding haor resembles a vast inland sea. It is
    also the main access point for many boat tours on Nikli Haor.
`,

    rating: 4.8,

    reviews: 1237,

    savedCount: 792,

    lat: 24.3246,

    lng: 90.9628,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "July - September",

    wikipediaUrl: "",
  },
  {
    id: 180,

    name: "Sholakia Eidgah (শোলাকিয়া ঈদগাহ)",

    location:
      "Sholakia, Kishoreganj Sadar Upazila, Kishoreganj District, Dhaka Division",

    postalAddress:
      "Sholakia Eidgah Maidan, Sholakia, Kishoreganj Sadar Upazila, Kishoreganj - 2300, Dhaka Division, Bangladesh",

    category: "Religious Site",

    image: "images/places/bangladesh/sholakia-eidgah-1.jpeg",

    description: `
    Sholakia Eidgah is the largest Eid-ul-Fitr congregation ground in
    Bangladesh and one of the largest in South Asia. Established in 1828,
    the Eidgah has become a historic religious landmark where hundreds of
    thousands of worshippers gather every Eid-ul-Fitr.

    Located on the bank of the Narsunda River, the Eidgah is renowned for
    its centuries-old tradition, historical significance, and its role as
    one of the country's most important Islamic heritage sites.
`,

    rating: 4.9,

    reviews: 2815,

    savedCount: 1723,

    lat: 24.4349,

    lng: 90.791,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - April",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sholakia",
  },
  {
    id: 181,

    name: "Nikli Haor Watch Tower (নিকলী হাওর ওয়াচ টাওয়ার)",

    location: "Nikli Town, Nikli Upazila, Kishoreganj District, Dhaka Division",

    postalAddress:
      "Nikli Haor Watch Tower, Nikli Town, Nikli Upazila, Kishoreganj District - 2360, Dhaka Division, Bangladesh",

    category: "Observation Tower",

    image: "images/places/bangladesh/nikli-haor-watch-tower-1.jpeg",

    description: `
    Nikli Haor Watch Tower is a popular observation tower overlooking the vast
    wetlands of Nikli Haor. Located beside Nikli Beribadh, it offers panoramic
    views of the surrounding haor, fishing boats, villages, and seasonal
    floodplains.

    During the monsoon, visitors climb the tower to enjoy breathtaking sunrise
    and sunset views and experience one of Bangladesh's most beautiful wetland
    landscapes.
`,

    rating: 4.7,

    reviews: 884,

    savedCount: 563,

    lat: 24.3248,

    lng: 90.9634,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "July - September",

    wikipediaUrl: "",
  },
  {
    id: 182,

    name: "Jangalbari Fort (জঙ্গলবাড়ী দুর্গ)",

    location:
      "Jangalbari Village, Karimganj Upazila, Kishoreganj District, Dhaka Division",

    postalAddress:
      "Jangalbari Fort, Jangalbari Village, Karimganj Upazila, Kishoreganj District - 2310, Dhaka Division, Bangladesh",

    category: "Historical Fort",

    image: "images/places/bangladesh/jangalbari-fort-1.jpeg",

    description: `
    Jangalbari Fort is one of Bangladesh's most important archaeological
    sites and served as a principal stronghold of the legendary Baro-Bhuiyan
    leader Isa Khan during the late sixteenth century. After capturing the
    fort following the Battle of Egarasindhur, Isa Khan expanded and
    strengthened it as a military and administrative center.

    Although much of the fort is now in ruins, its surviving earthworks,
    moat, mosque, and historical remains continue to attract visitors,
    historians, and researchers interested in Bangladesh's medieval history.
`,

    rating: 4.8,

    reviews: 1184,

    savedCount: 746,

    lat: 24.4503,

    lng: 90.8421,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Jangalbari_Fort",
  },
  {
    id: 183,

    name: "Balikhola (বালিখোলা)",

    location:
      "Balikhola, Karimganj Upazila, Kishoreganj District, Dhaka Division",

    postalAddress:
      "Balikhola Ferry Ghat, Balikhola, Karimganj Upazila, Kishoreganj District - 2310, Dhaka Division, Bangladesh",

    category: "River Ghat",

    image: "images/places/bangladesh/balikhola-1.jpeg",

    description: `
    Balikhola is a busy ferry ghat and one of the main gateways to the haor
    region of Kishoreganj. Located on the Ghorautra–Dhanu river system, it is
    the primary crossing point for travelers heading to the Itna–Mithamoin–
    Austagram all-weather road.

    Visitors enjoy the lively riverside atmosphere, traditional ferry rides,
    local fish markets, and beautiful sunrise and sunset views over the haor.
    It is also a popular stop for photographers and travelers exploring the
    wetland region.
`,

    rating: 4.7,

    reviews: 542,

    savedCount: 348,

    lat: 24.4878,

    lng: 90.9104,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "July - September",

    wikipediaUrl: "",
  },
  {
    id: 184,

    name: "Islamic University Campus (ইসলামী বিশ্ববিদ্যালয় ক্যাম্পাস)",

    location:
      "Shantidanga–Dulalpur, Kushtia Sadar Upazila, Kushtia District, Khulna Division",

    postalAddress:
      "Islamic University, Shantidanga–Dulalpur, Kushtia Sadar Upazila, Kushtia - 7003, Khulna Division, Bangladesh",

    category: "Cultural & Educational Landmark",

    image: "images/places/bangladesh/islamic-university-campus-1.jpeg",

    description: `
    The Islamic University Campus is one of the largest and most beautiful
    university campuses in Bangladesh. Located at Shantidanga–Dulalpur, the
    campus is known for its spacious academic buildings, lakes, gardens, and
    tree-lined roads.

    Besides being a leading public university, the campus attracts visitors
    for its peaceful environment, attractive architecture, monuments, and
    scenic landscapes, making it a popular destination for students,
    researchers, and tourists.
`,

    rating: 4.8,

    reviews: 3286,

    savedCount: 1845,

    lat: 23.7231,

    lng: 89.1515,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Islamic_University,_Bangladesh",
  },
  {
    id: 185,

    name: "Kushtia Museum (কুষ্টিয়া জাদুঘর)",

    location:
      "Kushtia Municipality, Kushtia Sadar Upazila, Kushtia District, Khulna Division",

    postalAddress:
      "Kushtia Municipal Museum, N.S. Road, Kushtia Municipality, Kushtia Sadar Upazila, Kushtia - 7000, Khulna Division, Bangladesh",

    category: "Museum",

    image: "images/places/bangladesh/kushtia-museum-1.jpeg",

    description: `
    Kushtia Municipal Museum preserves the archaeological, cultural, and
    historical heritage of Kushtia District. The museum displays ancient
    sculptures, coins, manuscripts, traditional household items, and exhibits
    related to the Liberation War and the history of the region.

    It is one of the most important cultural institutions in Kushtia and is a
    popular destination for students, researchers, and visitors interested in
    the district's rich heritage.
`,

    rating: 4.5,

    reviews: 512,

    savedCount: 318,

    lat: 23.9103,

    lng: 89.1223,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Kushtia_Municipal_Museum",
  },
  {
    id: 186,

    name: "Lalon Shah Bridge (লালন শাহ সেতু)",

    location: "Paksey, Bheramara Upazila, Kushtia District, Khulna Division",

    postalAddress:
      "Lalon Shah Bridge, Paksey, Bheramara Upazila, Kushtia District - 7040, Khulna Division, Bangladesh",

    category: "Bridge",

    image: "images/places/bangladesh/lalon-shah-bridge-1.jpeg",

    description: `
    Lalon Shah Bridge, officially known as Lalon Shah Setu, is a major road
    bridge over the Padma River. Opened in 2004 beside the historic Hardinge
    Bridge, it connects Bheramara in Kushtia with Ishwardi in Pabna and serves
    as an important highway link between western and northern Bangladesh.

    The bridge is well known for its impressive engineering, panoramic river
    views, and its close proximity to the historic Hardinge Bridge, making it
    a popular stop for travelers and photographers.
`,

    rating: 4.8,

    reviews: 2476,

    savedCount: 1456,

    lat: 24.065,

    lng: 89.0292,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Lalon_Shah_Bridge",
  },
  {
    id: 187,

    name: "Hardinge Bridge (হার্ডিঞ্জ ব্রিজ)",

    location: "Paksey, Bheramara Upazila, Kushtia District, Khulna Division",

    postalAddress:
      "Hardinge Bridge, Paksey, Bheramara Upazila, Kushtia District - 7040, Khulna Division, Bangladesh",

    category: "Historical Railway Bridge",

    image: "images/places/bangladesh/hardinge-bridge-1.jpeg",

    description: `
    Hardinge Bridge is one of Bangladesh's most famous railway bridges,
    crossing the Padma River between Paksey and Ishwardi. Opened in 1915
    during the British colonial period, it remains an outstanding example
    of early twentieth-century steel bridge engineering.

    The bridge continues to serve as a major railway connection and is a
    popular tourist attraction for its historical importance, impressive
    truss design, and scenic views of the Padma River. It stands beside the
    modern Lalon Shah Bridge, making the area a favorite destination for
    photographers and history enthusiasts.
`,

    rating: 4.9,

    reviews: 3825,

    savedCount: 2283,

    lat: 24.0679,

    lng: 89.0277,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Hardinge_Bridge",
  },
  {
    id: 188,

    name: "Lalon Akhra (লালন আখড়া)",

    location:
      "Cheuriya Village, Kumarkhali Upazila, Kushtia District, Khulna Division",

    postalAddress:
      "Lalon Shah Shrine and Akhra, Cheuriya Village, Kumarkhali Upazila, Kushtia District - 7010, Khulna Division, Bangladesh",

    category: "Cultural Heritage",

    image: "images/places/bangladesh/lalon-akhra-1.jpeg",

    description: `
    Lalon Akhra is the shrine and spiritual center of the legendary Baul saint
    Lalon Shah. Located in Cheuriya, it is one of Bangladesh's most important
    cultural and spiritual heritage sites.

    Every year, thousands of devotees, Baul artists, researchers, and tourists
    visit the Akhra to celebrate Lalon's philosophy, folk music, and humanistic
    teachings. The annual Lalon festival is one of the country's largest folk
    cultural events.
`,

    rating: 4.9,

    reviews: 3187,

    savedCount: 1978,

    lat: 23.9008,

    lng: 89.0987,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Lalon_Shrine",
  },
  {
    id: 189,

    name: "Shilaidaha Rabindra Kuthibari (শিলাইদহ রবীন্দ্র কুঠিবাড়ি)",

    location:
      "Shilaidaha Village, Kumarkhali Upazila, Kushtia District, Khulna Division",

    postalAddress:
      "Shilaidaha Rabindra Kuthibari, Shilaidaha Village, Kumarkhali Upazila, Kushtia District - 7010, Khulna Division, Bangladesh",

    category: "Historical Museum",

    image: "images/places/bangladesh/shilaidaha-rabindra-kuthibari-1.jpeg",

    description: `
    Shilaidaha Rabindra Kuthibari is the historic country house where Nobel
    laureate Rabindranath Tagore lived and created many of his famous poems,
    songs, letters, and short stories. Today the beautifully restored house
    serves as a museum managed by the Department of Archaeology.

    The complex includes the historic residence, gardens, ponds, library,
    and galleries displaying Tagore's personal belongings and literary
    heritage. It is one of Bangladesh's most important cultural and
    literary tourist attractions.
`,

    rating: 4.9,

    reviews: 4275,

    savedCount: 2684,

    lat: 23.9198,

    lng: 89.2201,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Shilaidaha_Rabindra_Kuthibari",
  },
  {
    id: 190,

    name: "Mir Mosharraf Hossain Memorial Museum (মীর মশাররফ হোসেন স্মৃতি জাদুঘর)",

    location:
      "Lahinipara Village, Kumarkhali Upazila, Kushtia District, Khulna Division",

    postalAddress:
      "Mir Mosharraf Hossain Memorial Museum, Lahinipara Village, Kumarkhali Upazila, Kushtia District - 7010, Khulna Division, Bangladesh",

    category: "Historical Memorial",

    image: "images/places/bangladesh/mir-mosharraf-hossain-memorial-1.jpeg",

    description: `
    Mir Mosharraf Hossain Memorial Museum preserves the memory and literary
    legacy of the renowned Bengali novelist Mir Mosharraf Hossain, author of
    the classic novel Bishad Sindhu. Located at his ancestral home in
    Lahinipara, the museum showcases photographs, manuscripts, personal
    belongings, books, and exhibits highlighting his contribution to Bengali
    literature.

    The memorial is an important cultural destination for students,
    researchers, and visitors interested in Bangladesh's literary heritage.
`,

    rating: 4.6,

    reviews: 596,

    savedCount: 371,

    lat: 23.8464,

    lng: 89.1998,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 192,

    name: "Char Alexander (চর আলেকজান্ডার)",

    location:
      "Char Alexander Union, Ramgati Upazila, Lakshmipur District, Chattogram Division",

    postalAddress:
      "Char Alexander, Char Alexander Union, Ramgati Upazila, Lakshmipur District - 3730, Chattogram Division, Bangladesh",

    category: "River Island",

    image: "images/places/bangladesh/char-alexander-1.jpeg",

    description: `
    Char Alexander is a scenic river island and one of the most popular
    tourist destinations in Lakshmipur District. Located on the bank of the
    Meghna River, it is well known for its long embankment, wide sandy
    shoreline, fishing communities, and spectacular sunset views.

    Often referred to locally as "Alexander Meghna Beach" or "Mini Cox's
    Bazar", the area attracts visitors for riverside walks, fresh Hilsa,
    photography, and experiencing the unique beauty of Bangladesh's delta
    landscape.
`,

    rating: 4.7,

    reviews: 894,

    savedCount: 563,

    lat: 22.5838,

    lng: 90.8289,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "",
  },
  {
    id: 193,

    name: "Meghna River Area (মেঘনা নদী এলাকা)",

    location:
      "Lakshmipur Sadar and Ramgati Upazila, Lakshmipur District, Chattogram Division",

    postalAddress:
      "Meghna River, Lakshmipur Sadar and Ramgati Upazila, Lakshmipur District, Chattogram Division, Bangladesh",

    category: "River",

    image: "images/places/bangladesh/meghna-river-area-lakshmipur-1.jpeg",

    description: `
    The Meghna River Area in Lakshmipur is one of the district's most scenic
    natural attractions. Flowing along Lakshmipur Sadar and Ramgati Upazila,
    the mighty Meghna supports fishing communities, river transport, and the
    formation of numerous chars.

    Visitors come here to enjoy boat rides, fresh Hilsa fish, spectacular
    sunsets, riverside walks, and the unique beauty of Bangladesh's delta
    landscape. The area is also a popular gateway to Char Alexander and other
    river islands.
`,

    rating: 4.8,

    reviews: 1563,

    savedCount: 1014,

    lat: 22.5697,

    lng: 90.8073,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Meghna_River",
  },
  {
    id: 194,

    name: "Shakuni Lake (শকুনি লেক)",

    location:
      "Madaripur Municipality, Madaripur Sadar Upazila, Madaripur District, Dhaka Division",

    postalAddress:
      "Shakuni Lake, Madaripur Municipality, Madaripur Sadar Upazila, Madaripur District - 7900, Dhaka Division, Bangladesh",

    category: "Lake",

    image: "images/places/bangladesh/shakuni-lake-1.jpeg",

    description: `
    Shakuni Lake is one of the most popular recreational attractions in
    Madaripur town. Surrounded by walkways, green spaces, and recreational
    facilities, the lake provides a peaceful environment for walking,
    boating, photography, and relaxing.

    It is a favorite destination for local residents and visitors, especially
    during the afternoon and evening, when the lakeside offers beautiful
    sunset views and a lively atmosphere.
`,

    rating: 4.7,

    reviews: 1384,

    savedCount: 864,

    lat: 23.1642,

    lng: 90.1895,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 195,

    name: "Madaripur Shishu Park & Lake Park (মাদারীপুর শিশু পার্ক ও লেক পার্ক)",

    location:
      "Madaripur Municipality, Madaripur Sadar Upazila, Madaripur District, Dhaka Division",

    postalAddress:
      "Madaripur Shishu Park & Lake Park, Lake Road, Madaripur Municipality, Madaripur Sadar Upazila, Madaripur District - 7900, Dhaka Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/madaripur-shishu-park-lake-park-1.jpeg",

    description: `
    Madaripur Shishu Park & Lake Park is one of the most popular family
    recreation spots in Madaripur. Located beside Shakuni Lake, the park
    features children's play equipment, landscaped gardens, walking paths,
    open green spaces, and scenic lakeside views.

    It is a favorite destination for families, students, and visitors seeking
    relaxation, outdoor recreation, and beautiful evening scenery in the
    heart of Madaripur town.
`,

    rating: 4.6,

    reviews: 987,

    savedCount: 611,

    lat: 23.1648,

    lng: 90.1902,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 196,

    name: "Nabaganga River (নবগঙ্গা নদী)",

    location: "Magura Sadar Upazila, Magura District, Khulna Division",

    postalAddress:
      "Nabaganga River, Magura Sadar Upazila, Magura District, Khulna Division, Bangladesh",

    category: "River",

    image: "images/places/bangladesh/nabaganga-river-1.jpeg",

    description: `
    The Nabaganga River is one of the major rivers flowing through Magura
    District and an important natural landmark in southwestern Bangladesh.
    The river supports irrigation, fishing, agriculture, and local river
    transport while providing beautiful riverside scenery throughout the year.

    Visitors enjoy boat rides, riverside walks, local fishing activities,
    and the peaceful natural environment along the Magura section of the river.
`,

    rating: 4.7,

    reviews: 1185,

    savedCount: 724,

    lat: 23.4869,

    lng: 89.4196,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Nabaganga_River",
  },
  {
    id: 197,

    name: "Arpara Eco Park (আরপাড়া ইকো পার্ক)",

    location:
      "Arpara Union, Shalikha Upazila, Magura District, Khulna Division",

    postalAddress:
      "Arpara Eco Park, Arpara Union, Shalikha Upazila, Magura District, Khulna Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/arpara-eco-park-1.jpeg",

    description: `
    Arpara Eco Park is a nature-based recreational park located in Arpara
    Union of Shalikha Upazila, Magura District. The park is known for its
    lush greenery, tree-lined walking paths, scenic canal, children's play
    areas, and picnic spots.

    It is a popular destination for families, students, and nature lovers
    seeking a peaceful outdoor environment. The park also promotes
    environmental awareness and conservation while offering visitors a
    relaxing experience.
`,

    rating: 4.5,

    reviews: 648,

    savedCount: 386,

    lat: 23.5405,

    lng: 89.3058,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 198,

    name: "Sirijdia Baor (সিরিজদিয়া বাওড়)",

    location:
      "Chaulia Union, Magura Sadar Upazila, Magura District, Khulna Division",

    postalAddress:
      "Sirijdia Baor, Chaulia Union, Magura Sadar Upazila, Magura District, Khulna Division, Bangladesh",

    category: "Lake",

    image: "images/places/bangladesh/sirijdia-baor-1.jpeg",

    description: `
    Sirijdia Baor is a scenic oxbow lake located in Chaulia Union of Magura
    Sadar Upazila. Formed from an abandoned meander of a river, the baor is
    well known for its U-shaped water body, rich biodiversity, fishing, and
    peaceful rural landscape.

    The area has been selected for development as an Eco Park and Resort,
    making it an increasingly popular destination for boating, bird watching,
    photography, and family recreation.
`,

    rating: 4.6,

    reviews: 472,

    savedCount: 294,

    lat: 23.4538,

    lng: 89.4781,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 199,

    name: "Ichakhada Neelkuthi (ইছাখাদা নীলকুঠি)",

    location:
      "Ichakhada Village, Magura Sadar Upazila, Magura District, Khulna Division",

    postalAddress:
      "Ichakhada Neelkuthi, Ichakhada Village, Magura Sadar Upazila, Magura District - 7600, Khulna Division, Bangladesh",

    category: "Historical Landmark",

    image: "images/places/bangladesh/ichakhada-neelkuthi-1.jpeg",

    description: `
    Ichakhada Neelkuthi is a historic indigo factory established during the
    British colonial period in present-day Magura District. The building
    reflects the history of Bengal's indigo cultivation and the colonial
    plantation system of the nineteenth century.

    Today, the remaining structure serves as a reminder of the region's
    historical heritage and attracts visitors interested in colonial history
    and historic architecture.
`,

    rating: 4.5,

    reviews: 351,

    savedCount: 218,

    lat: 23.4703,

    lng: 89.4016,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 200,

    name: "Shotrujitpur Modonmohan Temple (শত্রুজিতপুর মদনমোহন মন্দির)",

    location:
      "Shotrujitpur Union, Magura Sadar Upazila, Magura District, Khulna Division",

    postalAddress:
      "Shotrujitpur Modonmohan Temple, Shotrujitpur Union, Magura Sadar Upazila, Magura District - 7600, Khulna Division, Bangladesh",

    category: "Temple",

    image: "images/places/bangladesh/shotrujitpur-modonmohan-temple-1.jpeg",

    description: `
    Shotrujitpur Modonmohan Temple is a historic Hindu temple dedicated to
    Lord Krishna in the form of Modonmohan. Located in the historic village
    of Shotrujitpur, the temple has long been an important religious and
    cultural center for the local Hindu community.

    The temple is admired for its traditional Bengali temple architecture,
    peaceful surroundings, and historical significance. It attracts devotees,
    visitors, and people interested in the cultural heritage of Magura.
`,

    rating: 4.6,

    reviews: 289,

    savedCount: 183,

    lat: 23.4519,

    lng: 89.3948,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 1001,

    name: "সহস্রধারা-১ ঝর্ণা (Sahasradhara-1 Waterfall)",

    location:
      "Sitakunda Eco Park, Sitakunda Upazila, Chattogram District, Chattogram Division",

    postalAddress:
      "Sahasradhara-1 Waterfall, Sitakunda Eco Park, Sitakunda Upazila, Chattogram District - 4310, Chattogram Division, Bangladesh",

    category: "Waterfall",

    image: "images/places/bangladesh/sahasradhara-1-waterfall-1.jpeg",

    description: `
    সহস্রধারা-১ ঝর্ণা বাংলাদেশের চট্টগ্রাম জেলার সীতাকুণ্ড ইকোপার্কের
    পাহাড়ি অরণ্যের মধ্যে অবস্থিত একটি মনোমুগ্ধকর প্রাকৃতিক জলপ্রপাত।
    সবুজ বন, পাহাড়ি ঝিরি এবং শান্ত পরিবেশের সমন্বয়ে এটি প্রকৃতিপ্রেমী,
    ট্রেকার ও ভ্রমণপিপাসুদের অন্যতম আকর্ষণীয় গন্তব্য।

    বর্ষাকালে ঝর্ণাটি সবচেয়ে প্রাণবন্ত রূপ ধারণ করে, যখন পাহাড় থেকে
    প্রবল জলধারা নেমে আসে। শীতকালেও এখানে ট্রেকিং ও প্রকৃতির সৌন্দর্য
    উপভোগ করার জন্য অসংখ্য দর্শনার্থী ভিড় করেন। সীতাকুণ্ড ইকোপার্কের
    অন্যতম জনপ্রিয় আকর্ষণ হিসেবে সহস্রধারা-১ ঝর্ণা দেশের বিভিন্ন
    প্রান্ত থেকে পর্যটকদের আকর্ষণ করে।
  `,

    rating: 4.7,

    reviews: 1248,

    savedCount: 894,

    lat: 22.6104,

    lng: 91.6796,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "June - September",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/সহস্রধারা_ঝর্ণা",
  },
  {
    id: 1002,

    name: "বড় কমলদহ রূপসী ঝর্ণা (Boro Komoldoho Ruposhi Waterfall)",

    location:
      "Komoldoho Trail, Sitakunda Upazila, Chattogram District, Chattogram Division",

    postalAddress:
      "Boro Komoldoho Ruposhi Waterfall, Komoldoho Trail, Sitakunda Upazila, Chattogram District - 4310, Chattogram Division, Bangladesh",

    category: "Waterfall",

    image: "images/places/bangladesh/boro-komoldoho-ruposhi-waterfall-1.jpeg",

    description: `
    বড় কমলদহ রূপসী ঝর্ণা বাংলাদেশের চট্টগ্রাম জেলার সীতাকুণ্ড উপজেলার
    কমলদহ ট্রেইলে অবস্থিত একটি মনোমুগ্ধকর প্রাকৃতিক জলপ্রপাত। প্রায়
    ১২০–১৪০ ফুট উচ্চতা থেকে নেমে আসা জলধারা, বিশাল পাথুরে গিরিখাত এবং
    চারপাশের সবুজ পাহাড়ি অরণ্য ঝর্ণাটিকে প্রকৃতিপ্রেমীদের কাছে অত্যন্ত
    জনপ্রিয় করে তুলেছে।

    ঝর্ণাটিতে পৌঁছাতে পাহাড়ি ঝিরিপথ, পাথুরে রাস্তা এবং অরণ্যের মধ্য
    দিয়ে ট্রেকিং করতে হয়, যা ভ্রমণকে আরও রোমাঞ্চকর করে তোলে। বর্ষাকালে
    ঝর্ণাটি সবচেয়ে আকর্ষণীয় রূপ ধারণ করে এবং দেশের অন্যতম সুন্দর
    ট্রেকিং গন্তব্য হিসেবে পরিচিত।
  `,

    rating: 4.8,

    reviews: 972,

    savedCount: 731,

    lat: 22.6908,

    lng: 91.6399,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "June - September",

    wikipediaUrl: "",
  },
  {
    id: 1003,

    name: "মহামায়া লেক (Mohamaya Lake)",

    location: "Mirsharai Upazila, Chattogram District, Chattogram Division",

    postalAddress:
      "Mohamaya Lake, Mirsharai Upazila, Chattogram District - 4320, Chattogram Division, Bangladesh",

    category: "Lake",

    image: "public/images/places/bangladesh/Mohamaya Lake.webp",

    description: `
    মহামায়া লেক বাংলাদেশের চট্টগ্রাম জেলার মীরসরাই উপজেলায় অবস্থিত
    দেশের দ্বিতীয় বৃহত্তম কৃত্রিম হ্রদ। পাহাড়, সবুজ অরণ্য এবং স্বচ্ছ
    পানির মনোরম সমন্বয়ে এটি চট্টগ্রাম অঞ্চলের অন্যতম জনপ্রিয়
    প্রাকৃতিক পর্যটন গন্তব্য।

    লেকটি নৌকাভ্রমণ, কায়াকিং, প্রকৃতি উপভোগ এবং আশপাশের ঝর্ণা
    অন্বেষণের জন্য বিশেষভাবে পরিচিত। বর্ষাকালে লেকের সৌন্দর্য আরও
    বৃদ্ধি পায় এবং চারপাশের পাহাড় সবুজে আচ্ছাদিত হয়ে এক অপূর্ব
    প্রাকৃতিক দৃশ্যের সৃষ্টি করে। পরিবার, বন্ধু এবং অ্যাডভেঞ্চারপ্রেমী
    ভ্রমণকারীদের কাছে মহামায়া লেক একটি অত্যন্ত আকর্ষণীয় স্থান।
  `,

    rating: 4.8,

    reviews: 3564,

    savedCount: 2148,

    lat: 22.8168,

    lng: 91.5719,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "June - February",

    wikipediaUrl: "https://bn.wikipedia.org/wiki/মহামায়া_হ্রদ",
  },
  {
    id: 201,

    name: "Nangta Baba Ashram (নাঙ্গটা বাবা আশ্রম)",

    location: "Satdoha, Magura Sadar Upazila, Magura District, Khulna Division",

    postalAddress:
      "Nangta Baba Ashram, Satdoha, Magura Sadar Upazila, Magura District - 7600, Khulna Division, Bangladesh",

    category: "Religious Ashram",

    image: "images/places/bangladesh/nangta-baba-ashram-1.jpeg",

    description: `
    Nangta Baba Ashram, also known as Satdoha Ashram, is one of the most
    respected Hindu spiritual centers in Magura District. Located on the
    southern bank of the Nabaganga River, the ashram was established by the
    revered saint Nangta Baba (Jitendra Nath Chakraborty) and has become an
    important place of worship and pilgrimage.

    Devotees from different parts of Bangladesh visit the ashram throughout
    the year for prayer, meditation, and religious festivals, especially
    during the annual Rath Yatra celebration.
`,

    rating: 4.7,

    reviews: 534,

    savedCount: 327,

    lat: 23.4762,

    lng: 89.3815,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 202,

    name: "Siddheshwari Math (সিদ্ধেশ্বরী মঠ)",

    location:
      "Atharakhada Village, Magura Sadar Upazila, Magura District, Khulna Division",

    postalAddress:
      "Siddheshwari Math, Atharakhada Village, Magura Sadar Upazila, Magura District - 7600, Khulna Division, Bangladesh",

    category: "Religious Monastery",

    image: "images/places/bangladesh/siddheshwari-math-1.jpeg",

    description: `
    Siddheshwari Math is one of the oldest Hindu monasteries in Magura District.
    Located on the bank of the Nabaganga River at Atharakhada Village, the
    monastery has been an important center of Hindu worship and spiritual
    practice for centuries.

    The historic math is known for its religious importance, traditional
    Bengali architecture, and peaceful surroundings. Devotees visit throughout
    the year, especially during Hindu religious festivals and special prayers.
`,

    rating: 4.6,

    reviews: 316,

    savedCount: 201,

    lat: 23.4828,

    lng: 89.4129,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 203,

    name: "Sreepur Zamindar Bari (শ্রীপুর জমিদার বাড়ি)",

    location: "Sreepur, Sreepur Upazila, Magura District, Khulna Division",

    postalAddress:
      "Sreepur Zamindar Bari, Sreepur, Sreepur Upazila, Magura District - 7610, Khulna Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/sreepur-zamindar-bari-1.jpeg",

    description: `
    Sreepur Zamindar Bari is a historic landlord estate located in Sreepur
    Upazila of Magura District. Built during the zamindari period, the palace
    was established by the Pal Chowdhury zamindar family and once served as
    the administrative and residential center of their estate.

    Although much of the original palace has deteriorated, the remaining
    entrance gateway and ruins continue to reflect the architectural heritage
    of Bengal's zamindari era. The site attracts visitors interested in
    history, heritage, and traditional Bengali architecture.
`,

    rating: 4.5,

    reviews: 403,

    savedCount: 247,

    lat: 23.5526,

    lng: 89.2884,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 204,

    name: "Raja Sitaram Roy's Palace (রাজা সীতারাম রায়ের রাজবাড়ি)",

    location:
      "Mohammadpur, Mohammadpur Upazila, Magura District, Khulna Division",

    postalAddress:
      "Palace of Raja Sitaram Roy, Mohammadpur, Mohammadpur Upazila, Magura District - 7630, Khulna Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/raja-sitaram-roys-palace-1.jpeg",

    description: `
    Raja Sitaram Roy's Palace is one of the most important archaeological and
    historical sites in Magura District. It served as the capital and royal
    residence of Raja Sitaram Ray, an influential eighteenth-century ruler who
    established a short-lived independent Hindu kingdom in Bengal.

    Although much of the palace now survives as ruins, visitors can still see
    the remains of the fort, palace structures, temples, moats, and historic
    ponds that reflect the grandeur of the former capital. The site is an
    important destination for visitors interested in Bengal's history,
    archaeology, and cultural heritage.
`,

    rating: 4.7,

    reviews: 618,

    savedCount: 384,

    lat: 23.404,

    lng: 89.5956,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sitaram_Ray",
  },
  {
    id: 205,

    name: "Hazrat Pir Mokarram Ali Shah Dargah (হযরত পীর মোকাররম আলী শাহ দরগাহ)",

    location:
      "Ichakhada, Hazrapur Union, Magura Sadar Upazila, Magura District, Khulna Division",

    postalAddress:
      "Hazrat Pir Mokarram Ali Shah Dargah, Ichakhada, Hazrapur Union, Magura Sadar Upazila, Magura District - 7600, Khulna Division, Bangladesh",

    category: "Religious Shrine",

    image:
      "images/places/bangladesh/hazrat-pir-mokarram-ali-shah-dargah-1.jpeg",

    description: `
    Hazrat Pir Mokarram Ali Shah Dargah is one of the most important Islamic
    heritage sites in Magura District. Located at Ichakhada on the bank of the
    Nabaganga River, the shrine is dedicated to Hazrat Pir Mokarram Ali Shah,
    a revered Sufi saint and one of the twelve disciples of Hazrat Khan Jahan Ali.

    The site includes the saint's mausoleum, the ruins of a historic mosque,
    two ancient ponds, and a peaceful religious complex. Every year, thousands
    of devotees visit the shrine to offer prayers, seek blessings, and
    participate in religious gatherings and Urs celebrations.
`,

    rating: 4.6,

    reviews: 392,

    savedCount: 241,

    lat: 23.4874,

    lng: 89.4193,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 206,

    name: "Paturia Ferry Ghat (পাটুরিয়া ফেরিঘাট)",

    location: "Paturia, Shibalaya Upazila, Manikganj District, Dhaka Division",

    postalAddress:
      "Paturia Ferry Ghat, Paturia, Shibalaya Upazila, Manikganj District - 1851, Dhaka Division, Bangladesh",

    category: "River Ferry Terminal",

    image: "images/places/bangladesh/paturia-ferry-ghat-1.jpeg",

    description: `
    Paturia Ferry Ghat is one of Bangladesh's busiest and most important
    river ferry terminals. Located on the eastern bank of the Padma River,
    it serves as a major transportation gateway connecting the central and
    southwestern regions of the country through the Paturia–Daulatdia ferry
    route.

    Besides its transportation importance, the terminal is popular for its
    wide river views, ferry crossings, sunrise and sunset scenery, and the
    lively atmosphere created by ferries, cargo vessels, and riverside
    activities. Thousands of passengers and vehicles use the terminal every
    day.
`,

    rating: 4.7,

    reviews: 3842,

    savedCount: 2364,

    lat: 23.8776,

    lng: 89.7765,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "",
  },
  {
    id: 207,

    name: "Jaforganj Riverside (জাফরগঞ্জ নদীতীর)",

    location:
      "Jaforganj, Shibalaya Upazila, Manikganj District, Dhaka Division",

    postalAddress:
      "Jaforganj Riverside (Jaforganj Bandh), Jaforganj, Shibalaya Upazila, Manikganj District, Dhaka Division, Bangladesh",

    category: "Scenic Riverside",

    image: "images/places/bangladesh/jaforganj-riverside-1.jpeg",

    description: `
    Jaforganj Riverside, locally known as Jaforganj Bandh, is a peaceful
    riverside destination on the eastern bank of the Padma River in
    Shibalaya Upazila. The embankment offers wide views of the river,
    fishing boats, ferry traffic, and beautiful sunsets.

    It is a popular local destination for evening walks, photography,
    family outings, and enjoying the cool river breeze. The riverside
    is especially attractive during the winter months when the weather
    is pleasant and visibility across the Padma River is excellent.
`,

    rating: 4.6,

    reviews: 812,

    savedCount: 493,

    lat: 23.8638,

    lng: 89.7814,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "",
  },
  {
    id: 208,

    name: "Aricha Ghat (আরিচা ঘাট)",

    location: "Aricha, Shibalaya Upazila, Manikganj District, Dhaka Division",

    postalAddress:
      "Aricha Ghat, Aricha, Shibalaya Upazila, Manikganj District, Dhaka Division, Bangladesh",

    category: "Historic River Port",

    image: "images/places/bangladesh/aricha-ghat-1.jpeg",

    description: `
    Aricha Ghat is a historic river port on the Padma River in Shibalaya
    Upazila, Manikganj District. It became one of Bangladesh's busiest ferry
    terminals and river transport hubs, connecting the central region with the
    southwest for many decades.

    Although its importance declined after the opening of the Padma Bridge,
    Aricha Ghat remains an important inland river port and a popular place for
    enjoying river views, watching ferries and fishing boats, and experiencing
    the heritage of Bangladesh's river transport system.
`,

    rating: 4.7,

    reviews: 1964,

    savedCount: 1228,

    lat: 23.8359,

    lng: 89.78,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Aricha_Ghat",
  },
  {
    id: 209,

    name: "Baliati Zamindar Bari (বালিয়াটি জমিদার বাড়ি)",

    location:
      "Baliati Village, Saturia Upazila, Manikganj District, Dhaka Division",

    postalAddress:
      "Baliati Zamindar Bari, Baliati Village, Saturia Upazila, Manikganj District - 1811, Dhaka Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/baliati-zamindar-bari-1.jpeg",

    description: `
    Baliati Zamindar Bari, officially known as Baliati Palace, is the largest
    and one of the finest surviving zamindar palace complexes in Bangladesh.
    Built during the nineteenth century by the wealthy salt merchant Govinda
    Ram Shaha and later expanded by the Roy Chowdhury family, the complex
    consists of several grand palaces built in Renaissance Colonial style.

    The palace is a protected archaeological monument maintained by the
    Department of Archaeology. Visitors come to admire its impressive
    architecture, historic courtyards, temples, ponds, and the rich heritage
    of Bengal's zamindari period.
`,

    rating: 4.8,

    reviews: 4276,

    savedCount: 2813,

    lat: 23.9948,

    lng: 90.0425,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Baliati_Palace",
  },
  {
    id: 210,

    name: "Betila Zamindar Bari (বেতিলা জমিদার বাড়ি)",

    location:
      "Betila Village, Manikganj Sadar Upazila, Manikganj District, Dhaka Division",

    postalAddress:
      "Betila Zamindar Bari, Betila Village, Manikganj Sadar Upazila, Manikganj District, Dhaka Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/betila-zamindar-bari-1.jpeg",

    description: `
    Betila Zamindar Bari is a historic zamindar residence located in Betila
    Village of Manikganj Sadar Upazila. Built during the British colonial
    period, the estate is associated with the influential Betila zamindar
    family and is locally known as Satu Babu's Bari.

    Although parts of the palace have deteriorated over time, the remaining
    structures continue to display traditional Bengali zamindar architecture.
    Today, the complex is used as a government shelter centre while remaining
    an important historical landmark and a reminder of the region's
    zamindari heritage.
`,

    rating: 4.6,

    reviews: 648,

    savedCount: 406,

    lat: 23.9037,

    lng: 89.9308,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Betila_Zamindar_Bari",
  },
  {
    id: 211,

    name: "Nahar Garden (নাহার গার্ডেন)",

    location: "Manikganj Sadar Upazila, Manikganj District, Dhaka Division",

    postalAddress:
      "Nahar Garden, Manikganj Sadar Upazila, Manikganj District - 1800, Dhaka Division, Bangladesh",

    category: "Nature Park",

    image: "images/places/bangladesh/nahar-garden-1.jpeg",

    description: `
    Nahar Garden is a private recreational park and picnic destination in
    Manikganj Sadar Upazila. The garden features landscaped greenery, open
    lawns, shaded walking areas, and a peaceful natural environment that
    attracts families and local visitors.

    Visitors come to enjoy picnics, photography, outdoor recreation, and a
    relaxing atmosphere away from the busy town. The garden is especially
    popular during weekends and the winter picnic season.
`,

    rating: 4.5,

    reviews: 596,

    savedCount: 358,

    lat: 23.8612,

    lng: 90.0039,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 212,

    name: "Teota Zamindar Bari (তেওতা জমিদার বাড়ি)",

    location:
      "Teota Village, Shibalaya Upazila, Manikganj District, Dhaka Division",

    postalAddress:
      "Teota Zamindar Bari, Teota Village, Shibalaya Upazila, Manikganj District - 1850, Dhaka Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/teota-zamindar-bari-1.jpeg",

    description: `
    Teota Zamindar Bari is a historic zamindar residence located in Teota
    Village of Shibalaya Upazila, Manikganj District. Built during the
    nineteenth century, the palace is one of the district's most important
    heritage sites and is recognized as a protected cultural monument.

    The estate includes the main palace, a historic Dolmancha (festival
    pavilion), ponds, and traditional architectural features reflecting the
    lifestyle of Bengal's zamindar families. Today, it attracts visitors
    interested in history, heritage, photography, and traditional Bengali
    architecture.
`,

    rating: 4.6,

    reviews: 584,

    savedCount: 365,

    lat: 23.8701,

    lng: 89.7759,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 213,

    name: "Meherpur Shahid Smritisoudha (মেহেরপুর শহীদ স্মৃতিসৌধ)",

    location: "Meherpur Sadar Upazila, Meherpur District, Khulna Division",

    postalAddress:
      "Meherpur Shahid Smritisoudha, beside Meherpur Municipal Cemetery, Meherpur Sadar Upazila, Meherpur District - 7100, Khulna Division, Bangladesh",

    category: "Historical Memorial",

    image: "images/places/bangladesh/meherpur-shahid-smritisoudha-1.jpeg",

    description: `
    Meherpur Shahid Smritisoudha is a memorial dedicated to the martyrs of
    Bangladesh's Liberation War of 1971. Located beside the Meherpur Municipal
    Cemetery, the monument commemorates the freedom fighters and civilians who
    sacrificed their lives during the struggle for independence.

    Every year on Independence Day, Victory Day, and other national occasions,
    people gather here to pay tribute through floral wreaths and remembrance
    ceremonies, making it one of the district's important patriotic landmarks.
`,

    rating: 4.7,

    reviews: 682,

    savedCount: 423,

    lat: 23.7665,

    lng: 88.6408,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "",
  },
  {
    id: 214,

    name: "Amdaha Village Archaeological Ruins (আমদহ প্রত্নতাত্ত্বিক নিদর্শন)",

    location:
      "Amdaha Village, Amdaha Union, Gangni Upazila, Meherpur District, Khulna Division",

    postalAddress:
      "Amdaha Village Archaeological Site, Amdaha Village, Amdaha Union, Gangni Upazila, Meherpur District, Khulna Division, Bangladesh",

    category: "Archaeological Site",

    image:
      "images/places/bangladesh/amdaha-village-archaeological-ruins-1.jpeg",

    description: `
    Amdaha Village Archaeological Ruins are an important historical site in
    Meherpur District, containing the remains of an ancient settlement spread
    over approximately one square kilometre. Archaeological evidence includes
    brick foundations, structural remnants, and other historical features that
    indicate the existence of a significant settlement in the past.

    The site is valued for its archaeological importance and attracts history
    enthusiasts, researchers, and visitors interested in the cultural heritage
    of the region.
`,

    rating: 4.4,

    reviews: 287,

    savedCount: 175,

    lat: 23.7982,

    lng: 88.7104,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 215,

    name: "Swami Nigamananda Ashram (স্বামী নিগমানন্দ আশ্রম)",

    location:
      "Kutubpur Village, Meherpur Sadar Upazila, Meherpur District, Khulna Division",

    postalAddress:
      "Swami Nigamananda Ashram, Kutubpur Village, Meherpur Sadar Upazila, Meherpur District - 7100, Khulna Division, Bangladesh",

    category: "Temple & Ashram",

    image: "images/places/bangladesh/swami-nigamananda-ashram-1.jpeg",

    description: `
    Swami Nigamananda Ashram is a peaceful Hindu spiritual center located in
    Kutubpur Village, the birthplace of Swami Nigamananda Paramahansa
    (1880–1935), one of Bengal's renowned spiritual teachers. The ashram is an
    important pilgrimage destination for his followers and serves as a place
    for worship, meditation, and religious gatherings.

    Visitors come throughout the year to experience its tranquil surroundings,
    participate in religious festivals, and learn about the life and teachings
    of Swami Nigamananda.
`,

    rating: 4.6,

    reviews: 334,

    savedCount: 214,

    lat: 23.7564,

    lng: 88.6358,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 216,

    name: "Bhoberpara Roman Catholic Church (ভবেরপাড়া রোমান ক্যাথলিক চার্চ)",

    location:
      "Bhoberpara Village, Bagowan Union, Mujibnagar Upazila, Meherpur District, Khulna Division",

    postalAddress:
      "Bhoberpara Roman Catholic Church, Bhoberpara Village, Bagowan Union, Mujibnagar Upazila, Meherpur District, Khulna Division, Bangladesh",

    category: "Historical Church",

    image: "images/places/bangladesh/bhoberpara-roman-catholic-church-1.jpeg",

    description: `
    Bhoberpara Roman Catholic Church is one of the oldest Christian churches
    in Meherpur District. Built in 1924, the church combines European and
    local architectural styles and has served the Christian community for over
    a century.

    Known locally as Bhoberpara Mission, the church remains an important
    religious, historical, and cultural landmark. Visitors are attracted by
    its traditional architecture, peaceful surroundings, and the area's rich
    Christian heritage.
`,

    rating: 4.5,

    reviews: 241,

    savedCount: 156,

    lat: 23.6526,

    lng: 88.589568,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 217,

    name: "Amjhupi Nilkuthi (আমঝুপি নীলকুঠি)",

    location:
      "Amjhupi Village, Meherpur Sadar Upazila, Meherpur District, Khulna Division",

    postalAddress:
      "Amjhupi Nilkuthi, Dokkhinpara, Amjhupi Village, Meherpur Sadar Upazila, Meherpur District - 7100, Khulna Division, Bangladesh",

    category: "Historical Landmark",

    image: "images/places/bangladesh/amjhupi-nilkuthi-1.jpeg",

    description: `
    Amjhupi Nilkuthi is one of Bangladesh's most significant surviving
    colonial-era indigo factories. Constructed during the early nineteenth
    century, the complex served as a major center for indigo cultivation and
    processing under British rule.

    Located beside the Kajla River in Dokkhinpara of Amjhupi Village, the site
    is recognized as an archaeological monument and a government-designated
    tourist attraction. Today, visitors explore its historic buildings,
    landscaped grounds, and learn about the history of the indigo industry and
    the hardships faced by Bengal's farmers during the colonial period.
`,

    rating: 4.7,

    reviews: 618,

    savedCount: 389,

    lat: 23.741231,

    lng: 88.678272,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 218,

    name: "Mujibnagar Memorial Complex (মুজিবনগর স্মৃতিসৌধ কমপ্লেক্স)",

    location:
      "Mujibnagar (formerly Baidyanathtala), Mujibnagar Upazila, Meherpur District, Khulna Division",

    postalAddress:
      "Mujibnagar Memorial Complex, Mujibnagar, Mujibnagar Upazila, Meherpur District - 7102, Khulna Division, Bangladesh",

    category: "Historical Memorial",

    image: "images/places/bangladesh/mujibnagar-memorial-complex-1.jpeg",

    description: `
    Mujibnagar Memorial Complex commemorates the historic oath-taking ceremony
    of the Provisional Government of Bangladesh held on 17 April 1971 during
    the Liberation War. Built at the historic Baidyanathtala, later renamed
    Mujibnagar, the complex symbolizes the birth of the independent
    Bangladeshi government.

    The 20-acre complex includes the memorial monument, Bangabandhu Museum,
    sculptures, landscaped gardens, and other commemorative structures.
    It is one of the country's most significant Liberation War heritage sites
    and attracts visitors, students, researchers, and patriots throughout the year.
`,

    rating: 4.9,

    reviews: 2974,

    savedCount: 1965,

    lat: 23.647793,

    lng: 88.593771,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "",
  },
  {
    id: 219,

    name: "Mujibnagar Amrakanan (মুজিবনগর আম্রকানন)",

    location:
      "Mujibnagar (Baidyanathtala), Mujibnagar Upazila, Meherpur District, Khulna Division",

    postalAddress:
      "Mujibnagar Amrakanan, Mujibnagar, Mujibnagar Upazila, Meherpur District - 7102, Khulna Division, Bangladesh",

    category: "Historical Park",

    image: "images/places/bangladesh/mujibnagar-amrakanan-1.jpeg",

    description: `
    Mujibnagar Amrakanan is the historic mango grove where the Provisional
    Government of Bangladesh formally took oath on 17 April 1971 during the
    Liberation War. Formerly known as Baidyanathtala Amrakanan, the site marks
    one of the most significant moments in the nation's history.

    Preserved within the Mujibnagar Memorial Complex, the mango grove remains
    a place of national remembrance where visitors come to learn about the
    Liberation War, pay tribute to the nation's founding leaders, and explore
    one of Bangladesh's most sacred historical landscapes.
`,

    rating: 4.9,

    reviews: 2135,

    savedCount: 1447,

    lat: 23.64764,

    lng: 88.59353,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "",
  },
  {
    id: 220,

    name: "Bhatpara Nilkuthi and Eco Park (ভাটপাড়া নীলকুঠি ও ইকো পার্ক)",

    location:
      "Bhatpara Village, Gangni Upazila, Meherpur District, Khulna Division",

    postalAddress:
      "Bhatpara Nilkuthi and Eco Park, Bhatpara Village, Gangni Upazila, Meherpur District - 7110, Khulna Division, Bangladesh",

    category: "Historical Park",

    image: "images/places/bangladesh/bhatpara-nilkuthi-and-eco-park-1.jpeg",

    description: `
    Bhatpara Nilkuthi and Eco Park is a heritage and recreational destination
    in Bhatpara Village of Gangni Upazila. The site preserves the remains of a
    British-era indigo factory (Nilkuthi), reflecting the history of indigo
    cultivation during the colonial period.

    The surrounding eco park features landscaped gardens, walking paths, open
    green spaces, and picnic facilities, making it a popular destination for
    families, history enthusiasts, and visitors seeking both cultural heritage
    and natural scenery.
`,

    rating: 4.6,

    reviews: 553,

    savedCount: 346,

    lat: 23.7812,

    lng: 88.6885,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 221,

    name: "Gosaidubi Mosque (গোসাইডুবি মসজিদ)",

    location:
      "Gosaidubi Village, Meherpur Sadar Upazila, Meherpur District, Khulna Division",

    postalAddress:
      "Gosaidubi Mosque, Gosaidubi Village, Meherpur Sadar Upazila, Meherpur District - 7100, Khulna Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/gosaidubi-mosque-1.jpeg",

    description: `
    Gosaidubi Mosque is a historic mosque located in Gosaidubi Village of
    Meherpur Sadar Upazila. The mosque represents the traditional mosque
    architecture of rural Bengal and continues to serve as an active place of
    worship for the local Muslim community.

    In addition to its religious importance, the mosque is recognized locally
    as one of Meherpur District's historical landmarks and is visited by people
    interested in the region's cultural and architectural heritage.
`,

    rating: 4.5,

    reviews: 286,

    savedCount: 171,

    lat: 23.7706,

    lng: 88.6428,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 222,

    name: "Siddheswari Kali Mandir (সিদ্ধেশ্বরী কালী মন্দির)",

    location: "Meherpur Sadar Upazila, Meherpur District, Khulna Division",

    postalAddress:
      "Siddheswari Kali Mandir, Meherpur Sadar Upazila, Meherpur District - 7100, Khulna Division, Bangladesh",

    category: "Temple",

    image: "images/places/bangladesh/siddheswari-kali-mandir-1.jpeg",

    description: `
    Siddheswari Kali Mandir is a respected Hindu temple located in Meherpur
    Sadar Upazila. Dedicated to Goddess Kali, the temple serves as an important
    place of worship for the local Hindu community and hosts regular religious
    ceremonies throughout the year.

    The temple becomes especially vibrant during Kali Puja and other major
    Hindu festivals, attracting devotees from Meherpur and nearby areas. It
    remains a significant religious and cultural landmark in the district.
`,

    rating: 4.6,

    reviews: 342,

    savedCount: 219,

    lat: 23.7619,

    lng: 88.6319,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - November",

    wikipediaUrl: "",
  },
  {
    id: 223,

    name: "Sreemangal Eco-tourism Areas (শ্রীমঙ্গল ইকো-ট্যুরিজম এলাকা)",

    location: "Sreemangal Upazila, Moulvibazar District, Sylhet Division",

    postalAddress:
      "Sreemangal Eco-tourism Region, Sreemangal Upazila, Moulvibazar District - 3210, Sylhet Division, Bangladesh",

    category: "Nature",

    image: "images/places/bangladesh/sreemangal-eco-tourism-areas-1.jpeg",

    description: `
    Sreemangal, widely known as the Tea Capital of Bangladesh, is the country's
    leading eco-tourism destination. The region is renowned for its vast tea
    estates, evergreen forests, rolling hills, wetlands, and rich biodiversity.

    The eco-tourism area includes many of Bangladesh's most famous natural
    attractions, including Lawachara National Park, Baikka Beel, Madhabpur
    Lake, Hum Hum Waterfall, and numerous tea gardens. Visitors enjoy nature
    walks, wildlife observation, birdwatching, cycling, tea tourism, and
    photography throughout the year.
`,

    rating: 4.9,

    reviews: 4862,

    savedCount: 3265,

    lat: 24.3065,

    lng: 91.7296,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sreemangal_Upazila",
  },
  {
    id: 224,

    name: "Lawachara National Park (লাউয়াছড়া জাতীয় উদ্যান)",

    location: "Kamalganj Upazila, Moulvibazar District, Sylhet Division",

    postalAddress:
      "Lawachara National Park, Kamalganj Upazila, Moulvibazar District - 3220, Sylhet Division, Bangladesh",

    category: "National Park",

    image: "images/places/bangladesh/lawachara-national-park-1.jpeg",

    description: `
    Lawachara National Park is one of Bangladesh's oldest and most important
    protected tropical evergreen forests. Covering approximately 1,250
    hectares, the park is renowned for its exceptional biodiversity and is
    home to endangered species including the Western Hoolock Gibbon, capped
    langur, slow loris, barking deer, and hundreds of bird, reptile, and plant
    species.

    Visitors come to enjoy forest trails, wildlife observation, birdwatching,
    photography, and the scenic beauty of the rainforest. The park is also
    surrounded by tea estates and indigenous communities, making it one of the
    country's premier eco-tourism destinations.
`,

    rating: 4.9,

    reviews: 5174,

    savedCount: 3516,

    lat: 24.3306,

    lng: 91.7916,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Lawachara_National_Park",
  },
  {
    id: 225,

    name: "Hum Hum Waterfall (হাম হাম জলপ্রপাত)",

    location:
      "Rajkandi Reserve Forest, Kamalganj Upazila, Moulvibazar District, Sylhet Division",

    postalAddress:
      "Hum Hum Waterfall, Rajkandi Reserve Forest, Kamalganj Upazila, Moulvibazar District - 3220, Sylhet Division, Bangladesh",

    category: "Waterfall",

    image: "images/places/bangladesh/hum-hum-waterfall-1.jpeg",

    description: `
    Hum Hum Waterfall is one of Bangladesh's most famous hidden waterfalls,
    located deep within the Rajkandi Reserve Forest in Kamalganj Upazila.
    Publicly discovered in 2010, the waterfall quickly became one of the
    country's premier trekking destinations.

    Reaching the waterfall requires a challenging hike through evergreen
    rainforest, streams, bamboo groves, and hilly terrain. The journey itself
    is considered part of the attraction, making Hum Hum a favorite destination
    for adventure seekers, trekkers, photographers, and nature lovers.
`,

    rating: 4.9,

    reviews: 3928,

    savedCount: 2715,

    lat: 24.1916,

    lng: 91.9047,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 226,

    name: "Sreemangal Tea Gardens (শ্রীমঙ্গল চা বাগান)",

    location: "Sreemangal Upazila, Moulvibazar District, Sylhet Division",

    postalAddress:
      "Sreemangal Tea Gardens, Sreemangal Upazila, Moulvibazar District - 3210, Sylhet Division, Bangladesh",

    category: "Park & Tea Garden",

    image: "images/places/bangladesh/sreemangal-tea-gardens-1.jpeg",

    description: `
    The tea gardens of Sreemangal form the heart of Bangladesh's tea industry
    and are among the country's most iconic landscapes. Spanning rolling green
    hills across numerous tea estates, the region offers visitors scenic
    viewpoints, tea tasting experiences, photography opportunities, cycling,
    and peaceful walks through lush plantations.

    Sreemangal is widely known as the Tea Capital of Bangladesh, and its tea
    gardens are a major attraction for both domestic and international tourists.
`,

    rating: 4.9,

    reviews: 4658,

    savedCount: 3187,

    lat: 24.3069,

    lng: 91.7318,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sreemangal_Upazila",
  },
  {
    id: 227,

    name: "Baikka Beel Wetland Sanctuary (বাইক্কা বিল জলাভূমি অভয়ারণ্য)",

    location:
      "Hail Haor, Sreemangal Upazila, Moulvibazar District, Sylhet Division",

    postalAddress:
      "Baikka Beel Wetland Sanctuary, Hail Haor, Sreemangal Upazila, Moulvibazar District - 3210, Sylhet Division, Bangladesh",

    category: "Lake & Wetland Sanctuary",

    image: "images/places/bangladesh/baikka-beel-wetland-sanctuary-1.jpeg",

    description: `
    Baikka Beel Wetland Sanctuary is a protected freshwater wetland within
    Hail Haor and one of Bangladesh's finest birdwatching destinations.
    Established as a fish sanctuary and wetland conservation area, it provides
    habitat for hundreds of resident and migratory bird species, freshwater
    fish, turtles, and diverse aquatic plants.

    Visitors come to enjoy birdwatching, nature photography, boating, and
    peaceful views across the wetlands, especially during the winter migration
    season when thousands of migratory birds arrive from Central and Northern
    Asia.
`,

    rating: 4.8,

    reviews: 2541,

    savedCount: 1712,

    lat: 24.4418,

    lng: 91.7176,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Baikka_Beel",
  },
  {
    id: 228,

    name: "Madhabkunda Waterfall (মাধবকুণ্ড জলপ্রপাত)",

    location: "Barlekha Upazila, Moulvibazar District, Sylhet Division",

    postalAddress:
      "Madhabkunda Waterfall, Madhabkunda Eco Park, Barlekha Upazila, Moulvibazar District - 3250, Sylhet Division, Bangladesh",

    category: "Waterfall",

    image: "images/places/bangladesh/madhabkunda-waterfall-1.jpeg",

    description: `
    Madhabkunda Waterfall is the highest natural waterfall in Bangladesh and
    one of the country's most popular natural attractions. Located within
    Madhabkunda Eco Park in Barlekha Upazila, the waterfall cascades over rocky
    cliffs surrounded by evergreen forests and hills.

    The site attracts thousands of visitors each year for sightseeing,
    photography, hiking, and picnics. During the monsoon season, the waterfall
    reaches its fullest flow, creating a spectacular natural landscape.
`,

    rating: 4.8,

    reviews: 4372,

    savedCount: 2964,

    lat: 24.6423,

    lng: 92.0438,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "June - September",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Madhabkunda_waterfall",
  },
  {
    id: 229,

    name: "Madhabpur Lake (মাধবপুর লেক)",

    location:
      "Patrokhola Tea Estate, Kamalganj Upazila, Moulvibazar District, Sylhet Division",

    postalAddress:
      "Madhabpur Lake, Patrokhola Tea Estate, Kamalganj Upazila, Moulvibazar District - 3220, Sylhet Division, Bangladesh",

    category: "Lake",

    image: "images/places/bangladesh/madhabpur-lake-1.jpeg",

    description: `
    Madhabpur Lake is a picturesque freshwater lake located within the
    Patrokhola Tea Estate in Kamalganj Upazila. Surrounded by rolling tea
    gardens, forested hills, and diverse vegetation, it is considered one of
    the most beautiful natural lakes in Bangladesh.

    The lake is well known for its peaceful atmosphere, blooming water lilies,
    seasonal migratory birds, and scenic viewpoints. It is a popular destination
    for nature lovers, photographers, and visitors seeking a tranquil escape in
    the tea-growing region of Moulvibazar.
`,

    rating: 4.8,

    reviews: 2698,

    savedCount: 1846,

    lat: 24.2757,

    lng: 91.8647,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 230,

    name: "Tea Museum (চা জাদুঘর)",

    location: "Sreemangal Upazila, Moulvibazar District, Sylhet Division",

    postalAddress:
      "Tea Museum, Tea Resort, Sreemangal Upazila, Moulvibazar District - 3210, Sylhet Division, Bangladesh",

    category: "Museum",

    image: "images/places/bangladesh/tea-museum-1.jpeg",

    description: `
    Tea Museum is Bangladesh's first and only museum dedicated to the history
    and heritage of the country's tea industry. Located in Sreemangal, the Tea
    Capital of Bangladesh, the museum preserves historical tea-processing
    equipment, photographs, documents, and exhibits illustrating the evolution
    of tea cultivation and production.

    Visitors can explore the development of Bangladesh's tea industry and learn
    about tea cultivation, processing techniques, and the cultural importance
    of tea while visiting one of the country's most distinctive museums.
`,

    rating: 4.6,

    reviews: 742,

    savedCount: 481,

    lat: 24.3084,

    lng: 91.7312,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 231,

    name: "Manipuri Para (মনিপুরি পাড়া)",

    location:
      "Manipuri Para, Sreemangal Upazila, Moulvibazar District, Sylhet Division",

    postalAddress:
      "Manipuri Para, Sreemangal Upazila, Moulvibazar District - 3210, Sylhet Division, Bangladesh",

    category: "Historical & Cultural Village",

    image: "images/places/bangladesh/manipuri-para-1.jpeg",

    description: `
    Manipuri Para is one of Bangladesh's best-known Manipuri settlements,
    preserving the language, traditions, handloom weaving, dance, music,
    and cuisine of the Manipuri community. The village offers visitors an
    opportunity to experience traditional homes, purchase handmade textiles,
    and learn about one of the country's most distinctive indigenous cultures.

    It is a popular cultural tourism destination in Sreemangal and plays an
    important role in preserving the heritage of the Manipuri people through
    community-based tourism and traditional craftsmanship.
`,

    rating: 4.8,

    reviews: 1186,

    savedCount: 768,

    lat: 24.3095,

    lng: 91.7342,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 232,

    name: "Mawa Ghat & Padma Bridge Viewpoint (মাওয়া ঘাট ও পদ্মা সেতু ভিউপয়েন্ট)",

    location: "Mawa, Louhajang Upazila, Munshiganj District, Dhaka Division",

    postalAddress:
      "Mawa Ghat & Padma Bridge Viewpoint, Mawa, Louhajang Upazila, Munshiganj District - 1534, Dhaka Division, Bangladesh",

    category: "Scenic Viewpoint",

    image: "images/places/bangladesh/mawa-ghat-padma-bridge-viewpoint-1.jpeg",

    description: `
    Mawa Ghat & Padma Bridge Viewpoint is one of Bangladesh's most popular
    riverside tourism destinations. Located on the northern bank of the Padma
    River, it offers panoramic views of the Padma Bridge, passing vessels,
    spectacular sunsets, and the vibrant atmosphere of Mawa Ghat.

    The area is also famous for its fresh Hilsa (Ilish) cuisine and attracts
    thousands of visitors for sightseeing, photography, boat rides, and
    enjoying the scenic beauty of the Padma River throughout the year.
`,

    rating: 4.9,

    reviews: 5872,

    savedCount: 3948,

    lat: 23.4717,

    lng: 90.2564,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Padma_Bridge",
  },
  {
    id: 233,

    name: "Bikrampur Buddhist Vihara (বিক্রমপুর বৌদ্ধ বিহার)",

    location:
      "Raghurampur Village, Munshiganj Sadar Upazila, Munshiganj District, Dhaka Division",

    postalAddress:
      "Bikrampur Buddhist Vihara, Raghurampur Village, Munshiganj Sadar Upazila, Munshiganj District - 1500, Dhaka Division, Bangladesh",

    category: "Historical Archaeological Site",

    image: "images/places/bangladesh/bikrampur-buddhist-vihara-1.jpeg",

    description: `
    Bikrampur Buddhist Vihara is one of Bangladesh's most significant
    archaeological discoveries. Excavations at Raghurampur uncovered the
    remains of a large Buddhist monastery dating from the Pala period
    (approximately the 8th–12th centuries CE), demonstrating the importance of
    ancient Bikrampur as a center of Buddhist learning.

    The site contains brick foundations, monastic structures, roads, and
    artifacts that provide valuable insights into the region's religious and
    cultural history. It is an important destination for historians,
    archaeologists, students, and visitors interested in Bangladesh's ancient
    Buddhist heritage.
`,

    rating: 4.8,

    reviews: 1136,

    savedCount: 741,

    lat: 23.5562,

    lng: 90.5026,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 234,

    name: "Padma Hem Dham (পদ্মা হেম ধাম)",

    location: "Louhajang Upazila, Munshiganj District, Dhaka Division",

    postalAddress:
      "Padma Hem Dham, Louhajang Upazila, Munshiganj District - 1530, Dhaka Division, Bangladesh",

    category: "Cultural Heritage",

    image: "images/places/bangladesh/padma-hem-dham-1.jpeg",

    description: `
    Padma Hem Dham is a peaceful spiritual and cultural center located in
    Louhajang Upazila of Munshiganj District. The site is known for its serene
    atmosphere, religious gatherings, meditation activities, and riverside
    surroundings near the Padma River.

    Visitors come to experience its tranquil environment, participate in
    cultural and spiritual programs, and enjoy the natural beauty of the
    surrounding area.
`,

    rating: 4.6,

    reviews: 467,

    savedCount: 295,

    lat: 23.4884,

    lng: 90.2892,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 235,

    name: "Muktarpur Bridge (মুক্তারপুর সেতু)",

    location: "Munshiganj Sadar Upazila, Munshiganj District, Dhaka Division",

    postalAddress:
      "Muktarpur Bridge, Munshiganj Sadar Upazila, Munshiganj District - 1500, Dhaka Division, Bangladesh",

    category: "Landmark Bridge",

    image: "images/places/bangladesh/muktarpur-bridge-1.jpeg",

    description: `
    Muktarpur Bridge, officially known as the 6th Bangladesh–China Friendship
    Bridge, spans the Dhaleshwari River and connects Munshiganj District with
    Narayanganj District. Opened to improve regional connectivity, it serves as
    an important transportation route for commuters and trade.

    The bridge also offers scenic views of the Dhaleshwari River and is a
    popular stop for photography and sightseeing, especially during sunrise and
    sunset.
`,

    rating: 4.7,

    reviews: 1297,

    savedCount: 826,

    lat: 23.5489,

    lng: 90.5417,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 236,

    name: "Idrakpur Fort (ইদ্রাকপুর দুর্গ)",

    location: "Munshiganj Sadar Upazila, Munshiganj District, Dhaka Division",

    postalAddress:
      "Idrakpur Fort, Munshiganj Sadar Upazila, Munshiganj District - 1500, Dhaka Division, Bangladesh",

    category: "Historical Fort",

    image: "images/places/bangladesh/idrakpur-fort-1.jpeg",

    description: `
    Idrakpur Fort is a historic Mughal river fort built around 1660 by Mir
    Jumla II, the Mughal Subahdar of Bengal. It formed part of a triangular
    defense system with Hajiganj Fort and Sonakanda Fort to protect Dhaka and
    nearby river routes from Portuguese and Magh (Arakanese) pirates.

    The fort is renowned for its massive circular cannon platform, thick brick
    walls, bastions, and distinctive Mughal military architecture. Today it is
    a protected archaeological monument managed by the Department of
    Archaeology, Bangladesh, and remains one of the country's best-preserved
    Mughal forts.
`,

    rating: 4.8,

    reviews: 2158,

    savedCount: 1457,

    lat: 23.5475,

    lng: 90.5341,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Idrakpur_Fort",
  },
  {
    id: 237,

    name: "Atish Dipankar Memorial Complex (অতীশ দীপঙ্কর স্মৃতি কমপ্লেক্স)",

    location:
      "Bajrayogini, Munshiganj Sadar Upazila, Munshiganj District, Dhaka Division",

    postalAddress:
      "Atish Dipankar Memorial Complex, Bajrayogini, Munshiganj Sadar Upazila, Munshiganj District - 1500, Dhaka Division, Bangladesh",

    category: "Historical Memorial",

    image: "images/places/bangladesh/atish-dipankar-memorial-complex-1.jpeg",

    description: `
    Atish Dipankar Memorial Complex commemorates the renowned Buddhist scholar
    and philosopher Atiśa Dīpaṅkara Śrījñāna, who is traditionally believed to
    have been born in the ancient Bikrampur region. Located at Bajrayogini, the
    complex preserves his historical legacy through monuments, landscaped
    grounds, and commemorative structures.

    The memorial attracts historians, students, Buddhist pilgrims, and visitors
    interested in the life and influence of one of the greatest Buddhist
    teachers of South Asia.
`,

    rating: 4.7,

    reviews: 964,

    savedCount: 628,

    lat: 23.5495,

    lng: 90.5208,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 238,

    name: "Sonarong Jora Math (সোনারং জোড়া মঠ)",

    location:
      "Sonarang Village, Tongibari Upazila, Munshiganj District, Dhaka Division",

    postalAddress:
      "Sonarang Twin Temples, Sonarang Village, Tongibari Upazila, Munshiganj District - 1520, Dhaka Division, Bangladesh",

    category: "Historical Temple",

    image: "images/places/bangladesh/sonarang-jora-math-1.jpeg",

    description: `
    Sonarang Jora Math, also known as the Sonarang Twin Temples, is a pair of
    historic brick temple towers located in Sonarang Village of Tongibari
    Upazila. Built during the late medieval period, the temples are admired for
    their distinctive brick architecture and their importance within the
    historic Bikrampur region.

    Today, the monument is protected by the Department of Archaeology,
    Bangladesh, and attracts visitors interested in history, architecture, and
    the cultural heritage of ancient Bikrampur.
`,

    rating: 4.7,

    reviews: 853,

    savedCount: 541,

    lat: 23.5755,

    lng: 90.4322,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 239,

    name: "Baba Adam Mosque (বাবা আদম মসজিদ)",

    location:
      "Qadi Qasbah Village, Rampal Union, Munshiganj Sadar Upazila, Munshiganj District, Dhaka Division",

    postalAddress:
      "Baba Adam's Mosque, Qadi Qasbah Village, Rampal Union, Munshiganj Sadar Upazila, Munshiganj District - 1500, Dhaka Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/baba-adam-mosque-1.jpeg",

    description: `
    Baba Adam Mosque, officially known as Baba Adam's Mosque, is one of the
    finest surviving examples of Bengal Sultanate architecture. Built in 1483 CE
    by Malik al-Mu'azzam Malik Kafur during the reign of Sultan Jalaluddin
    Fateh Shah, the mosque features six domes, elegant brickwork, stone pillars,
    and beautifully ornamented mihrabs.

    The tomb of the Muslim saint Baba Adam Shahid is located beside the mosque.
    Today the monument is protected by the Department of Archaeology,
    Bangladesh, and is an important destination for visitors interested in
    history, architecture, and Islamic heritage.
`,

    rating: 4.8,

    reviews: 1185,

    savedCount: 769,

    lat: 23.5564,

    lng: 90.4964,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Baba_Adam%27s_Mosque",
  },
  {
    id: 240,

    name: "Patisar Kuthibari (পতিসর কুঠিবাড়ি)",

    location:
      "Patisar Village, Atrai Upazila, Naogaon District, Rajshahi Division",

    postalAddress:
      "Patisar Kuthibari, Patisar Village, Atrai Upazila, Naogaon District, Rajshahi Division, Bangladesh",

    category: "Historical Estate",

    image: "images/places/bangladesh/patisar-kuthibari-1.jpeg",

    description: `
    Patisar Kuthibari, also known as Patisar Rabindra Kacharibari, was one of
    the estate headquarters of the Tagore family's Kaligram zamindari.
    Rabindranath Tagore frequently stayed here from 1891 onward while managing
    the estate and composed many poems, songs, essays, and other literary works.

    Today the restored Kuthibari serves as a museum and cultural heritage site,
    preserving the memory of the Nobel Laureate's life, rural development
    initiatives, and literary contributions. It remains one of the most
    important Rabindranath Tagore heritage sites in Bangladesh.
`,

    rating: 4.8,

    reviews: 1438,

    savedCount: 917,

    lat: 24.6109,

    lng: 89.0268,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Patisar",
  },
  {
    id: 241,

    name: "Altadighi National Park (আলতাদিঘী জাতীয় উদ্যান)",

    location: "Dhamoirhat Upazila, Naogaon District, Rajshahi Division",

    postalAddress:
      "Altadighi National Park, Dhamoirhat Upazila, Naogaon District - 6580, Rajshahi Division, Bangladesh",

    category: "National Park",

    image: "images/places/bangladesh/altadighi-national-park-1.jpeg",

    description: `
    Altadighi National Park is a protected forest and wetland ecosystem located
    in Dhamoirhat Upazila near the Bangladesh–India border. Declared a national
    park in 2011, it is renowned for Altadighi Lake, deciduous forests,
    biodiversity, migratory birds, reptiles, and native wildlife.

    The park offers visitors opportunities for nature walks, birdwatching,
    wildlife observation, photography, and experiencing one of the most
    important protected forest areas in northwestern Bangladesh.
`,

    rating: 4.8,

    reviews: 2297,

    savedCount: 1548,

    lat: 25.0227,

    lng: 88.7363,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Altadighi_National_Park",
  },
  {
    id: 242,

    name: "Kusumba Mosque (কুসুম্বা মসজিদ)",

    location:
      "Kusumba Village, Manda Upazila, Naogaon District, Rajshahi Division",

    postalAddress:
      "Kusumba Mosque, Kusumba Village, Manda Upazila, Naogaon District, Rajshahi Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/kusumba-mosque-1.jpeg",

    description: `
    Kusumba Mosque is one of the finest surviving examples of Bengal Sultanate
    stone architecture. Built in 1558–1559 CE (966 AH) during the reign of
    Sultan Ghiyasuddin Bahadur Shah by Sulaiman, son of Muhammad, the mosque is
    renowned for its intricately carved stone ornamentation, graceful arches,
    and exceptional craftsmanship.

    Often referred to as the "Black Gem of Bengal," the mosque is a protected
    archaeological monument managed by the Department of Archaeology,
    Bangladesh, and remains one of the country's most significant Islamic
    heritage sites.
`,

    rating: 4.9,

    reviews: 3165,

    savedCount: 2146,

    lat: 24.7909,

    lng: 88.7648,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Kusumba_Mosque",
  },
  {
    id: 243,

    name: "Dibar Dighi (দিবর দিঘী)",

    location:
      "Dibar Village, Patnitala Upazila, Naogaon District, Rajshahi Division",

    postalAddress:
      "Dibar Dighi, Dibar Village, Patnitala Upazila, Naogaon District, Rajshahi Division, Bangladesh",

    category: "Historical Lake",

    image: "images/places/bangladesh/dibar-dighi-1.jpeg",

    description: `
    Dibar Dighi is a historic man-made reservoir located in Dibar Village of
    Patnitala Upazila. The site is best known for the Divya (Dibya) Victory
    Pillar, traditionally associated with the Kaivarta ruler Divya and the
    Kaivarta Rebellion of the late 11th century.

    The dighi and its stone pillar are protected archaeological monuments and
    remain important landmarks for understanding the medieval history of
    northern Bengal. The peaceful surroundings and historical significance make
    the site an attractive destination for visitors interested in archaeology
    and regional heritage.
`,

    rating: 4.6,

    reviews: 784,

    savedCount: 502,

    lat: 25.0206,

    lng: 88.8771,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 244,

    name: "Islamganthi Jame Mosque (ইসলামগাঁথী জামে মসজিদ)",

    location:
      "Islamganthi Village, Bisha Union, Atrai Upazila, Naogaon District, Rajshahi Division",

    postalAddress:
      "Islamganthi Jame Mosque, Islamganthi Village, Bisha Union, Atrai Upazila, Naogaon District, Rajshahi Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/islamganthi-jame-mosque-1.jpeg",

    description: `
    Islamganthi Jame Mosque is a historic Mughal-era Friday mosque located on
    the bank of the Atrai River in Islamganthi Village of Atrai Upazila. It is
    believed to have been built between 1608 and 1613 during the governorship
    of Islam Khan I and is an important example of early Mughal architecture in
    northwestern Bangladesh.

    The three-domed brick mosque remains an active place of worship and is a
    protected archaeological monument, attracting visitors interested in
    Islamic architecture and the history of the Mughal period.
`,

    rating: 4.5,

    reviews: 356,

    savedCount: 218,

    lat: 24.6025,

    lng: 88.9671,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Islamganthi_Mosque",
  },
  {
    id: 245,

    name: "Dubalhati Rajbari (দুবলহাটি রাজবাড়ি)",

    location:
      "Dubalhati, Naogaon Sadar Upazila, Naogaon District, Rajshahi Division",

    postalAddress:
      "Dubalhati Rajbari, Dubalhati, Naogaon Sadar Upazila, Naogaon District, Rajshahi Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/dubalhati-rajbari-1.jpeg",

    description: `
    Dubalhati Rajbari is one of the oldest and most historically significant
    zamindar palaces in northern Bangladesh. It served as the residence of the
    Dubalhati Zamindar family and features historic structures including the
    Darbar Hall, Nat Mandir (Natto Shala), and surrounding dighis that reflect
    the architectural heritage of Bengal's zamindari era.

    Although parts of the palace have deteriorated over time, the remaining
    buildings continue to represent the cultural and historical importance of
    the Dubalhati estate and attract visitors interested in Bengal's heritage.
`,

    rating: 4.7,

    reviews: 867,

    savedCount: 571,

    lat: 24.7867,

    lng: 88.8831,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 246,

    name: "Paharpur Buddhist Monastery (Somapura Mahavihara) (পাহাড়পুর বৌদ্ধ বিহার)",

    location:
      "Paharpur Village, Badalgachhi Upazila, Naogaon District, Rajshahi Division",

    postalAddress:
      "Somapura Mahavihara, Paharpur Village, Badalgachhi Upazila, Naogaon District - 6570, Rajshahi Division, Bangladesh",

    category: "UNESCO World Heritage Site",

    image: "images/places/bangladesh/paharpur-buddhist-monastery-1.jpeg",

    description: `
    Somapura Mahavihara, popularly known as Paharpur Buddhist Monastery, is one
    of the largest Buddhist monasteries south of the Himalayas and one of the
    most significant archaeological sites in South Asia. Built during the late
    8th century CE by the Pala king Dharmapala, it became a renowned center of
    Buddhist learning and monastic life.

    The vast monastery complex, featuring a monumental central shrine,
    terracotta plaques, monks' cells, courtyards, and temples, was inscribed as
    a UNESCO World Heritage Site in 1985. Today it is protected by the
    Department of Archaeology, Bangladesh, and attracts visitors from around
    the world interested in history, archaeology, architecture, and Buddhism.
`,

    rating: 5.0,

    reviews: 6824,

    savedCount: 4712,

    lat: 25.0311,

    lng: 88.9769,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Somapura_Mahavihara",
  },
  {
    id: 247,

    name: "Jagaddal Vihara (জগদ্দল বিহার)",

    location:
      "Jagdal Village, Dhamoirhat Upazila, Naogaon District, Rajshahi Division",

    postalAddress:
      "Jagaddal Vihara, Jagdal Village, Dhamoirhat Upazila, Naogaon District - 6580, Rajshahi Division, Bangladesh",

    category: "Historical Buddhist Monastery",

    image: "images/places/bangladesh/jagaddal-vihara-1.jpeg",

    description: `
    Jagaddal Vihara, also known as Jagaddala Mahavihara, is an important
    archaeological site dating to the late Pala period. Established by King
    Ramapala during the 11th–12th century CE, it was one of the Five Great
    Mahaviharas of ancient Bengal and a renowned center of Buddhist learning,
    particularly for Vajrayana Buddhism.

    Archaeological excavations have revealed monastery buildings, brick
    structures, religious artifacts, and inscriptions that highlight its
    historical importance. The site is protected by the Department of
    Archaeology, Bangladesh, and is included on UNESCO's Tentative List for
    World Heritage status.
`,

    rating: 4.8,

    reviews: 1149,

    savedCount: 764,

    lat: 25.0753,

    lng: 88.7548,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Jagaddala_Mahavihara",
  },
  {
    id: 248,

    name: "Halud Vihara (হলুদ বিহার)",

    location:
      "Halud Vihara Village (Dvipganj), Badalgachhi Upazila, Naogaon District, Rajshahi Division",

    postalAddress:
      "Halud Vihara, Halud Vihara Village (Dvipganj), Badalgachhi Upazila, Naogaon District - 6570, Rajshahi Division, Bangladesh",

    category: "Historical Buddhist Monastery",

    image: "images/places/bangladesh/halud-vihara-1.jpeg",

    description: `
    Halud Vihara is an important archaeological site dating to the early
    medieval Pala period (8th–9th century CE). Located about 14.5 km south of
    Somapura Mahavihara, the monastery consists of brick-built structures,
    temple remains, stairways, terracotta plaques, sculptures, and other
    archaeological artifacts uncovered during excavations.

    Protected by the Department of Archaeology, Bangladesh, Halud Vihara is an
    important example of Buddhist monastic architecture in ancient Bengal and
    is included on UNESCO's Tentative List as part of the proposed extension of
    the Paharpur World Heritage Site.
`,

    rating: 4.6,

    reviews: 514,

    savedCount: 328,

    lat: 24.9325,

    lng: 88.9714,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Halud_Vihara",
  },
  {
    id: 249,

    name: "Balihar Rajbari (বলিহার রাজবাড়ি)",

    location:
      "Balihar, Naogaon Sadar Upazila, Naogaon District, Rajshahi Division",

    postalAddress:
      "Balihar Rajbari, Balihar, Naogaon Sadar Upazila, Naogaon District - 6500, Rajshahi Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/balihar-rajbari-1.jpeg",

    description: `
    Balihar Rajbari is a historic zamindar palace located in Balihar of
    Naogaon Sadar Upazila. Once the residence of the influential Balihar
    Zamindar family, the palace is known for its colonial-era architecture,
    spacious courtyards, temples, and historic administrative buildings.

    The estate reflects the social and architectural heritage of Bengal's
    zamindari period and remains one of the most important historical landmarks
    in Naogaon District. The site is recognized as an archaeological heritage
    monument and continues to attract visitors interested in history and
    architecture.
`,

    rating: 4.7,

    reviews: 796,

    savedCount: 519,

    lat: 24.8468,

    lng: 88.8086,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 250,

    name: "Narail Government Victoria College (নড়াইল সরকারি ভিক্টোরিয়া কলেজ)",

    location: "Narail Sadar Upazila, Narail District, Khulna Division",

    postalAddress:
      "Narail Government Victoria College, Victoria College Road, Narail Sadar Upazila, Narail District - 7500, Khulna Division, Bangladesh",

    category: "Historical Educational Institution",

    image: "images/places/bangladesh/narail-government-victoria-college-1.jpeg",

    description: `
    Narail Government Victoria College is one of the oldest public colleges in
    southwestern Bangladesh. Established in 1886 by Chandra Roy and named after
    Queen Victoria, the college has played a significant role in higher
    education for more than a century.

    Nationalized in 1980, the institution offers undergraduate and postgraduate
    programs under the National University. The historic campus, located on the
    bank of the Chitra River in Narail town, is well known for its educational
    heritage and notable alumni, including national figures in sports, public
    service, and culture.
`,

    rating: 4.7,

    reviews: 856,

    savedCount: 531,

    lat: 23.1626,

    lng: 89.4994,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Narail_Victoria_College",
  },
  {
    id: 251,

    name: "Niribili Picnic Spot (নিরিবিলি পিকনিক স্পট)",

    location: "Narail Sadar Upazila, Narail District, Khulna Division",

    postalAddress:
      "Niribili Picnic Spot, Narail Sadar Upazila, Narail District - 7500, Khulna Division, Bangladesh",

    category: "Park & Picnic Spot",

    image: "images/places/bangladesh/niribili-picnic-spot-1.jpeg",

    description: `
    Niribili Picnic Spot is a family-friendly recreational destination in
    Narail Sadar Upazila. Surrounded by greenery, the park offers open picnic
    areas, walking paths, children's play facilities, and a peaceful natural
    environment for day trips and social gatherings.

    It is a popular local destination for family outings, educational tours,
    and community events, providing visitors with a relaxing outdoor
    experience.
`,

    rating: 4.5,

    reviews: 468,

    savedCount: 294,

    lat: 23.1771,

    lng: 89.4968,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 252,

    name: "Ravi Shankar & Uday Shankar Ancestral Home (রবিশঙ্কর ও উদয় শঙ্করের পৈতৃক বাড়ি)",

    location:
      "Barakalia Village, Kalia Upazila, Narail District, Khulna Division",

    postalAddress:
      "Ravi Shankar & Uday Shankar Ancestral Home, Barakalia Village, Kalia Upazila, Narail District, Khulna Division, Bangladesh",

    category: "Historical Heritage Site",

    image:
      "images/places/bangladesh/ravi-shankar-uday-shankar-ancestral-home-1.jpeg",

    description: `
This ancestral home is associated with world-famous sitar maestro Pandit Ravi Shankar and legendary dancer Uday Shankar. Located in Barakalia Village of Kalia Upazila, the house represents the family's roots in Narail and remains an important cultural landmark.

Visitors come here to learn about the lives and legacy of the two brothers, whose contributions to music and dance earned international recognition. The site is valued for its historical and cultural significance in Bangladesh.
`,

    rating: 4.7,

    reviews: 624,

    savedCount: 401,

    lat: 23.1721,

    lng: 89.5009,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 253,

    name: "SM Sultan Complex (এস এম সুলতান কমপ্লেক্স)",

    location:
      "Machimdia, Narail Sadar Upazila, Narail District, Khulna Division",

    postalAddress:
      "SM Sultan Complex, Machimdia, Narail Sadar Upazila, Narail District - 7500, Khulna Division, Bangladesh",

    category: "Museum & Cultural Complex",

    image: "images/places/bangladesh/sm-sultan-complex-1.jpeg",

    description: `
SM Sultan Complex is a cultural and heritage center built in memory of legendary Bangladeshi artist SM Sultan. Located beside the Chitra River in Machimdia, the complex includes an art gallery, museum, the artist's preserved residence, mausoleum, and the children's art center known as Shishu Swarga.

Visitors come here to explore SM Sultan's paintings, personal belongings, and learn about his life and contribution to Bangladeshi art. The peaceful riverside environment also makes the complex one of the most popular cultural attractions in Narail.
`,

    rating: 4.8,

    reviews: 1386,

    savedCount: 912,

    lat: 23.1582,

    lng: 89.5036,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 254,

    name: "Chitra Resort (চিত্রা রিসোর্ট)",

    location:
      "Mohishkhola, Narail Sadar Upazila, Narail District, Khulna Division",

    postalAddress:
      "Chitra Resort, Mohishkhola, Narail Sadar Upazila, Narail District - 7500, Khulna Division, Bangladesh",

    category: "Resort & Park",

    image: "images/places/bangladesh/chitra-resort-1.jpeg",

    description: `
Chitra Resort is a popular riverside recreation destination located on the bank of the Chitra River in Mohishkhola, Narail Sadar Upazila. The resort offers comfortable accommodation, boating, picnic facilities, children's play areas, and a peaceful natural environment.

It is a favorite place for family trips, day outings, and weekend vacations. Visitors come here to enjoy the river view, relax in the green surroundings, and spend quality time with family and friends.
`,

    rating: 4.6,

    reviews: 786,

    savedCount: 517,

    lat: "",

    lng: "",

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 255,

    name: "Goalbathan Mosque (গোয়ালবাথান মসজিদ)",

    location:
      "Goalbathan Village, Narail Sadar Upazila, Narail District, Khulna Division",

    postalAddress:
      "Goalbathan Mosque, Goalbathan Village, Narail Sadar Upazila, Narail District - 7500, Khulna Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/goalbathan-mosque-1.jpeg",

    description: `
Goalbathan Mosque is one of the oldest surviving historic mosques in Narail District. Built in 1654 during the Mughal period, the mosque is known for its traditional brick architecture and simple design that has survived for centuries.

Located in Goalbathan Village, the mosque remains an active place of worship and an important historical landmark. Visitors interested in Islamic architecture and local history often visit the site for its heritage and peaceful surroundings.
`,

    rating: 4.7,

    reviews: 437,

    savedCount: 286,

    lat: 23.1649,

    lng: 89.4938,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 256,

    name: "Arunima Eco Park & Golf Resort (অরুণিমা ইকো পার্ক ও গলফ রিসোর্ট)",

    location:
      "Panipara Village, Kalia Upazila, Narail District, Khulna Division",

    postalAddress:
      "Arunima Eco Park & Golf Resort, Panipara Village, Kalia Upazila, Narail District, Khulna Division, Bangladesh",

    category: "Eco Park & Resort",

    image: "images/places/bangladesh/arunima-eco-park-golf-resort-1.jpeg",

    description: `
Arunima Eco Park & Golf Resort is one of the most popular recreation destinations in Narail. Located in Panipara Village beside beautiful lakes and green countryside, the resort offers boating, cottages, picnic facilities, gardens, children's play areas, and Bangladesh's first village-based golf resort.

Visitors come here to enjoy nature, spend time with family, and experience a peaceful rural environment. The combination of eco-tourism, recreation, and beautiful landscapes makes it one of the best tourist attractions in the district.
`,

    rating: 4.7,

    reviews: 1542,

    savedCount: 1014,

    lat: 23.075244,

    lng: 89.713243,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 257,

    name: "Birshreshtha Nur Mohammad Sheikh Complex (বীরশ্রেষ্ঠ নূর মোহাম্মদ শেখ কমপ্লেক্স)",

    location:
      "Nur Mohammad Nagar (formerly Mahishkhola), Chandibarpur Union, Narail Sadar Upazila, Narail District, Khulna Division",

    postalAddress:
      "Birshreshtha Nur Mohammad Sheikh Complex, Nur Mohammad Nagar (formerly Mahishkhola), Chandibarpur Union, Narail Sadar Upazila, Narail District - 7500, Khulna Division, Bangladesh",

    category: "Historical Memorial",

    image:
      "images/places/bangladesh/birshreshtha-nur-mohammad-sheikh-complex-1.jpeg",

    description: `
Birshreshtha Nur Mohammad Sheikh Complex was established in memory of Birshreshtha Nur Mohammad Sheikh, one of the seven highest gallantry award recipients of the Bangladesh Liberation War. The complex is located at his birthplace in Nur Mohammad Nagar, formerly known as Mahishkhola.

The complex includes a memorial museum, library, monument, and commemorative facilities that preserve his life and sacrifice. It is an important historical destination where visitors can learn about the Liberation War and pay tribute to one of the nation's greatest heroes.
`,

    rating: 4.8,

    reviews: 931,

    savedCount: 612,

    lat: 23.2148,

    lng: 89.5142,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 258,

    name: "Radha Raman Smriti Tirtha Mandir (রাধা রমণ স্মৃতি তীর্থ মন্দির)",

    location:
      "Debbhog Village, Narail Sadar Upazila, Narail District, Khulna Division",

    postalAddress:
      "Radha Raman Smriti Tirtha Mandir, Debbhog Village, Narail Sadar Upazila, Narail District - 7500, Khulna Division, Bangladesh",

    category: "Religious Temple",

    image: "images/places/bangladesh/radha-raman-smriti-tirtha-mandir-1.jpeg",

    description: `
Radha Raman Smriti Tirtha Mandir is a respected Hindu temple located in Debbhog Village of Narail Sadar Upazila. The temple is dedicated to Sri Sri Radha Raman and serves as an important place of worship for the local Hindu community.

Devotees visit the temple throughout the year to offer prayers and celebrate religious festivals, especially during Janmashtami and other Vaishnava celebrations. The peaceful surroundings and spiritual atmosphere make it a meaningful religious destination in Narail.
`,

    rating: 4.8,

    reviews: 496,

    savedCount: 318,

    lat: 23.1769,

    lng: 89.5236,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 259,

    name: "Chitra River (চিত্রা নদী)",

    location:
      "Narail Sadar Upazila, Lohagara Upazila, Narail District, Khulna Division",

    postalAddress:
      "Chitra River, Narail Sadar Upazila, Narail District, Khulna Division, Bangladesh",

    category: "River",

    image: "images/places/bangladesh/chitra-river-1.jpeg",

    description: `
The Chitra River is one of the major rivers flowing through Narail District and an important distributary of the Madhumati River. It is well known for its scenic beauty, peaceful riverbanks, and strong connection to the history and culture of the region.

The river supports local agriculture, fishing, and water transport while also attracting visitors who enjoy boat rides and riverside views. It has inspired many writers, artists, and cultural activities, making it one of the most recognizable natural attractions in Narail.
`,

    rating: 4.8,

    reviews: 1238,

    savedCount: 786,

    lat: 23.1717,

    lng: 89.4989,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Chitra_River",
  },
  {
    id: 260,

    name: "Rajmoni Pyramid (রাজমনি পিরামিড)",

    location: "Perabo, Sonargaon Upazila, Narayanganj District, Dhaka Division",

    postalAddress:
      "Rajmoni Pyramid, Perabo, Sonargaon Upazila, Narayanganj District - 1440, Dhaka Division, Bangladesh",

    category: "Landmark",

    image: "images/places/bangladesh/rajmoni-pyramid-1.jpeg",

    description: `
Rajmoni Pyramid is a unique pyramid-shaped modern architectural landmark located in Perabo, Sonargaon. Inspired by the pyramids of Egypt, it was built as part of a spiritual and meditation complex and attracts visitors with its distinctive design and peaceful surroundings.

Visitors come here to enjoy the unusual architecture, explore the surrounding grounds, and experience the calm atmosphere. It has become one of the interesting modern attractions in the Sonargaon area.
`,

    rating: 4.5,

    reviews: 684,

    savedCount: 431,

    lat: 23.6626,

    lng: 90.6203,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 261,

    name: "Sonargaon Folk Art & Crafts Museum (সোনারগাঁও লোক ও কারুশিল্প জাদুঘর)",

    location: "Sonargaon Upazila, Narayanganj District, Dhaka Division",

    postalAddress:
      "Bangladesh Folk Art & Crafts Foundation, Sonargaon Upazila, Narayanganj District - 1440, Dhaka Division, Bangladesh",

    category: "Museum",

    image: "images/places/bangladesh/sonargaon-folk-art-crafts-museum-1.jpeg",

    description: `
Sonargaon Folk Art & Crafts Museum is one of Bangladesh's leading cultural museums. Located within the Bangladesh Folk Art and Crafts Foundation in Sonargaon, it preserves the country's rich folk traditions through collections of handicrafts, pottery, musical instruments, textiles, paintings, masks, and rural artifacts.

Visitors can explore the museum galleries, traditional buildings, and cultural exhibitions while learning about Bangladesh's diverse folk heritage. It is one of the most popular cultural attractions in the Sonargaon area.
`,

    rating: 4.8,

    reviews: 3542,

    savedCount: 2235,

    lat: 23.6515,

    lng: 90.6032,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Bangladesh_Folk_Art_and_Crafts_Foundation",
  },
  {
    id: 262,

    name: "Zinda Park (জিন্দা পার্ক)",

    location:
      "Jinda Village, Rupganj Upazila, Narayanganj District, Dhaka Division",

    postalAddress:
      "Zinda Park, Jinda Village, Rupganj Upazila, Narayanganj District, Dhaka Division, Bangladesh",

    category: "Park & Recreation",

    image: "images/places/bangladesh/zinda-park-1.jpeg",

    description: `
Zinda Park is a beautifully maintained eco-park located in Jinda Village of Rupganj Upazila. Spread across more than 30 acres of greenery, the park features lakes, gardens, wooden bridges, libraries, walking paths, and picnic facilities.

Visitors come here to enjoy nature, relax in the peaceful environment, and spend quality time with family and friends. Its clean surroundings and community-based management have made it one of the most popular recreational destinations near Dhaka.
`,

    rating: 4.8,

    reviews: 5891,

    savedCount: 3868,

    lat: 23.8409,

    lng: 90.6145,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Zinda_Park",
  },
  {
    id: 263,

    name: "Goaldi Mosque (গোয়ালদী মসজিদ)",

    location:
      "Goaldi Village, Sonargaon Upazila, Narayanganj District, Dhaka Division",

    postalAddress:
      "Goaldi Mosque, Goaldi Village, Sonargaon Upazila, Narayanganj District - 1440, Dhaka Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/goaldi-mosque-1.jpeg",

    description: `
Goaldi Mosque is one of the finest surviving mosques from the Bengal Sultanate period. Built in 1519 during the reign of Sultan Alauddin Husain Shah, the single-domed mosque is admired for its elegant brick architecture, terracotta decoration, and historical importance.

Located in Goaldi Village near the historic city of Sonargaon, the mosque attracts visitors interested in Islamic architecture and Bangladesh's rich heritage. It remains one of the country's best-preserved Sultanate-era monuments.
`,

    rating: 4.8,

    reviews: 1146,

    savedCount: 726,

    lat: 23.6483,

    lng: 90.5985,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Goaldi_Mosque",
  },
  {
    id: 264,

    name: "Murapara Zamindar Bari (মুড়াপাড়া জমিদার বাড়ি)",

    location:
      "Murapara Village, Rupganj Upazila, Narayanganj District, Dhaka Division",

    postalAddress:
      "Murapara Zamindar Bari, Murapara Village, Rupganj Upazila, Narayanganj District, Dhaka Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/murapara-zamindar-bari-1.jpeg",

    description: `
Murapara Zamindar Bari is a magnificent 19th-century landlord palace located in Murapara Village of Rupganj Upazila. The historic building is known for its impressive European-style architecture, grand entrance, spacious courtyards, and elegant design.

Today the palace houses Murapara University College while preserving much of its historic character. It remains one of the best-preserved zamindar houses in Narayanganj and attracts visitors interested in history and architecture.
`,

    rating: 4.7,

    reviews: 1362,

    savedCount: 859,

    lat: 23.8068,

    lng: 90.5875,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Murapara_Zamindar_Bari",
  },
  {
    id: 265,

    name: "Panam City (পানাম নগর)",

    location:
      "Panam Nagar, Sonargaon Upazila, Narayanganj District, Dhaka Division",

    postalAddress:
      "Panam City, Panam Nagar, Sonargaon Upazila, Narayanganj District - 1440, Dhaka Division, Bangladesh",

    category: "Historical Heritage City",

    image: "images/places/bangladesh/panam-city-1.jpeg",

    description: `
Panam City is the historic merchant settlement of ancient Sonargaon and one of Bangladesh's most important archaeological sites. The area is lined with beautifully preserved 19th and early 20th-century buildings that reflect a unique blend of colonial and traditional architectural styles.

Visitors come to explore the historic streets, admire the old merchant houses, and learn about the rich history of Sonargaon, which was once an important capital and trading center of Bengal. It remains one of the country's most iconic heritage destinations.
`,

    rating: 4.9,

    reviews: 8425,

    savedCount: 5784,

    lat: 23.6465,

    lng: 90.6008,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Panam_City",
  },
  {
    id: 266,

    name: "Sonakanda Fort (সোনাকান্দা দুর্গ)",

    location: "Bandar Upazila, Narayanganj District, Dhaka Division",

    postalAddress:
      "Sonakanda Fort, Bandar Upazila, Narayanganj District - 1410, Dhaka Division, Bangladesh",

    category: "Historical Fort",

    image: "images/places/bangladesh/sonakanda-fort-1.jpeg",

    description: `
Sonakanda Fort is a well-preserved Mughal river fort located on the eastern bank of the Shitalakshya River in Bandar Upazila. Built during the late 17th century, it was part of the Mughal defensive system that protected the region from Magh and Portuguese pirate attacks.

Visitors come to admire the fort's massive gateway, thick defensive walls, and riverside setting while learning about the military history of Mughal Bengal. It remains one of the most important historical forts in Bangladesh.
`,

    rating: 4.8,

    reviews: 1845,

    savedCount: 1208,

    lat: 23.6154,

    lng: 90.5313,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Sonakanda_Fort",
  },
  {
    id: 267,

    name: "Hajiganj Fort (হাজীগঞ্জ দুর্গ)",

    location: "Narayanganj Sadar Upazila, Narayanganj District, Dhaka Division",

    postalAddress:
      "Hajiganj Fort, Narayanganj Sadar Upazila, Narayanganj District - 1400, Dhaka Division, Bangladesh",

    category: "Historical Fort",

    image: "images/places/bangladesh/hajiganj-fort-1.jpeg",

    description: `
Hajiganj Fort, also known as Khizirpur Fort, is a Mughal-era river fort located in Narayanganj Sadar Upazila. Built during the late 17th century, the fort was part of the Mughal defensive system that protected the Shitalakshya River from Magh and Portuguese pirate attacks.

Visitors come to explore its thick defensive walls, elevated gateways, and historic layout while learning about the military history of Mughal Bengal. It remains one of the best-preserved Mughal forts in Bangladesh.
`,

    rating: 4.8,

    reviews: 1597,

    savedCount: 1016,

    lat: 23.6214,

    lng: 90.5043,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Hajiganj_Fort",
  },
  {
    id: 268,

    name: "Banglar Taj Mahal (বাংলার তাজমহল)",

    location: "Perabo, Sonargaon Upazila, Narayanganj District, Dhaka Division",

    postalAddress:
      "Banglar Taj Mahal, Perabo, Sonargaon Upazila, Narayanganj District - 1440, Dhaka Division, Bangladesh",

    category: "Landmark",

    image: "images/places/bangladesh/banglar-taj-mahal-1.jpeg",

    description: `
Banglar Taj Mahal is a modern architectural landmark located in Perabo, Sonargaon. Inspired by the famous Taj Mahal in Agra, India, the structure was built by filmmaker Ahsanullah Moni and has become a popular tourist attraction near Dhaka.

Visitors come here to admire its Mughal-inspired architecture, take photographs, and enjoy the peaceful surroundings. Its unique design makes it one of the most recognizable modern attractions in the Sonargaon area.
`,

    rating: 4.6,

    reviews: 2483,

    savedCount: 1568,

    lat: 23.6645,

    lng: 90.6242,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October -March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Banglar_Taj_Mahal",
  },
  {
    id: 269,

    name: "Golden Star Park (গোল্ডেন স্টার পার্ক)",

    location: "Narsingdi Sadar Upazila, Narsingdi District, Dhaka Division",

    postalAddress:
      "Golden Star Park, Narsingdi Sadar Upazila, Narsingdi District, Dhaka Division, Bangladesh",

    category: "Recreation Park",

    image: "images/places/bangladesh/golden-star-park-1.jpeg",

    description: `
Golden Star Park is a family-friendly recreation park located in Narsingdi Sadar Upazila. The park offers amusement rides, picnic areas, landscaped gardens, playgrounds, and food facilities, making it a popular destination for families and groups.

Visitors come here to enjoy outdoor recreation, spend time with family and friends, and relax in a pleasant environment. It is one of the well-known leisure attractions in Narsingdi District.
`,

    rating: 4.5,

    reviews: 982,

    savedCount: 641,

    lat: 23.9235,

    lng: 90.7158,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 270,

    name: "Danga Zamindar Bari (ডাঙ্গা জমিদার বাড়ি)",

    location:
      "Danga Village, Belabo Upazila, Narsingdi District, Dhaka Division",

    postalAddress:
      "Danga Zamindar Bari, Danga Village, Belabo Upazila, Narsingdi District, Dhaka Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/danga-zamindar-bari-1.jpeg",

    description: `
Danga Zamindar Bari is a historic zamindar residence located in Danga Village of Belabo Upazila. The building reflects the architectural style of the colonial period and stands as a reminder of the region's historical and cultural heritage.

Visitors come to explore its historic structure, admire the old architectural details, and learn about the history of the local zamindar family. It is one of the notable heritage attractions in Narsingdi District.
`,

    rating: 4.5,

    reviews: 712,

    savedCount: 468,

    lat: 24.0936,

    lng: 90.8508,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 271,

    name: "Sunflower Garden, Nagariakandi (নগরিয়াকান্দি সূর্যমুখী বাগান)",

    location:
      "Nagariakandi, Narsingdi Sadar Upazila, Narsingdi District, Dhaka Division",

    postalAddress:
      "Sunflower Garden, Nagariakandi, Narsingdi Sadar Upazila, Narsingdi District, Dhaka Division, Bangladesh",

    category: "Nature & Flower Garden",

    image: "images/places/bangladesh/sunflower-garden-nagariakandi-1.jpeg",

    description: `
The Sunflower Garden at Nagariakandi is a seasonal attraction where thousands of blooming sunflowers create a colorful landscape during the winter months. It has become a favorite destination for photography, family outings, and nature lovers.

Visitors come here to enjoy the vibrant flower fields, take photographs, and experience the beauty of the short blooming season in a peaceful rural setting.
`,

    rating: 4.6,

    reviews: 714,

    savedCount: 497,

    lat: 23.9348,

    lng: 90.7019,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "December - February",

    wikipediaUrl: "",
  },
  {
    id: 272,

    name: "Wari-Bateshwar Archaeological Site (ওয়ারী-বটেশ্বর প্রত্নতাত্ত্বিক নিদর্শন)",

    location:
      "Wari and Bateshwar Villages, Belabo Upazila, Narsingdi District, Dhaka Division",

    postalAddress:
      "Wari-Bateshwar Archaeological Site, Wari and Bateshwar Villages, Belabo Upazila, Narsingdi District, Dhaka Division, Bangladesh",

    category: "Archaeological Site",

    image: "images/places/bangladesh/wari-bateshwar-archaeological-site-1.jpeg",

    description: `
Wari-Bateshwar is one of the earliest known urban archaeological sites in Bangladesh and South Asia, dating back more than 2,500 years. Excavations have uncovered ancient fortification walls, roads, punch-marked coins, pottery, beads, and evidence of an important trading center.

Visitors come to explore the archaeological remains and learn about the early history of Bengal. It is considered one of the country's most significant archaeological discoveries.
`,

    rating: 4.8,

    reviews: 1685,

    savedCount: 1142,

    lat: 24.1039,

    lng: 90.9163,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Wari-Bateshwar",
  },
  {
    id: 273,

    name: "Chinadi Beel (চিনাদী বিল)",

    location:
      "Dulalpur Union, Shibpur Upazila, Narsingdi District, Dhaka Division",

    postalAddress:
      "Chinadi Beel, Dulalpur Union, Shibpur Upazila, Narsingdi District, Dhaka Division, Bangladesh",

    category: "Wetland",

    image: "images/places/bangladesh/chinadi-beel-1.jpeg",

    description: `
Chinadi Beel is a scenic freshwater wetland surrounded by agricultural land and seasonal greenery. Rich in aquatic biodiversity, local fish species, and migratory birds, the beel offers a peaceful environment for boating, birdwatching, fishing, and nature photography.

Visitors also come here to enjoy the quiet rural landscape and experience the natural beauty of one of Narsingdi's lesser-known wetlands.
`,

    rating: 4.7,

    reviews: 653,

    savedCount: 426,

    lat: 24.0448,

    lng: 90.8051,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 274,

    name: "Chalan Beel (চলন বিল)",

    location: "Singra Upazila, Natore District, Rajshahi Division",

    postalAddress:
      "Chalan Beel, Singra Upazila, Natore District - 6450, Rajshahi Division, Bangladesh",

    category: "Wetland",

    image: "images/places/bangladesh/chalan-beel-1.jpeg",

    description: `
Chalan Beel is one of the largest wetland ecosystems in Bangladesh, spreading across the districts of Natore, Sirajganj, and Pabna. Rich in biodiversity, migratory birds, fish species, and aquatic plants, the beel plays an important role in the country's ecology and supports the livelihoods of thousands of fishermen and farmers.

Visitors come to enjoy boating, birdwatching, fishing, and the beautiful seasonal landscape, making it one of the most significant natural attractions in northwestern Bangladesh.
`,

    rating: 4.8,

    reviews: 2843,

    savedCount: 1837,

    lat: 24.4223,

    lng: 89.1687,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Chalan_Beel",
  },
  {
    id: 275,

    name: "Chalanbil Museum (চলনবিল জাদুঘর)",

    location: "Singra Upazila, Natore District, Rajshahi Division",

    postalAddress:
      "Chalanbil Museum, Singra Upazila, Natore District, Rajshahi Division, Bangladesh",

    category: "Museum",

    image: "images/places/bangladesh/chalanbil-museum-1.jpeg",

    description: `
Chalanbil Museum is Bangladesh's first museum dedicated to the history, culture, biodiversity, and heritage of the Chalan Beel region. The museum displays traditional fishing equipment, archaeological artifacts, local folk culture, and exhibits about the unique wetland ecosystem.

Visitors can learn about the lifestyle, history, and natural environment of the Chalan Beel area, making it an educational destination for students, researchers, and tourists.
`,

    rating: 4.6,

    reviews: 432,

    savedCount: 281,

    lat: 24.4105,

    lng: 89.1528,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 276,

    name: "Halti Beel (হালতি বিল)",

    location: "Naldanga Upazila, Natore District, Rajshahi Division",

    postalAddress:
      "Halti Beel, Naldanga Upazila, Natore District, Rajshahi Division, Bangladesh",

    category: "Wetland",

    image: "images/places/bangladesh/halti-beel-1.jpeg",

    description: `
Halti Beel is one of the most picturesque wetlands in northern Bangladesh. It is known for its vast waterbody, boating opportunities, beautiful sunsets, and seasonal migratory birds. Because of its scenic beauty, many local visitors refer to it as the "Mini Cox's Bazar of North Bengal."

Visitors come to enjoy boat rides, observe birds, experience the peaceful rural landscape, and relax in one of Natore District's most beautiful natural attractions.
`,

    rating: 4.8,

    reviews: 1268,

    savedCount: 846,

    lat: 24.4865,

    lng: 89.0654,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 277,

    name: "Shahid Sagar (শহীদ সাগর)",

    location: "Natore Sadar Upazila, Natore District, Rajshahi Division",

    postalAddress:
      "Shahid Sagar, Natore Sadar Upazila, Natore District, Rajshahi Division, Bangladesh",

    category: "Historical Memorial",

    image: "images/places/bangladesh/shahid-sagar-1.jpeg",

    description: `
Shahid Sagar is a well-known public waterbody and local landmark located in Natore Sadar Upazila. The area is a popular place for recreation and relaxation among local residents.

Visitors come to enjoy the peaceful surroundings, walk around the lake, and spend leisure time in the nearby open spaces. The site is also recognized as a familiar landmark within Natore town.
`,

    rating: 4.5,

    reviews: 318,

    savedCount: 206,

    lat: 24.4147,

    lng: 89.0003,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 278,

    name: "Green Valley Park (গ্রীন ভ্যালি পার্ক)",

    location: "Lalpur Upazila, Natore District, Rajshahi Division",

    postalAddress:
      "Green Valley Park, Lalpur Upazila, Natore District, Rajshahi Division, Bangladesh",

    category: "Park",

    image: "images/places/bangladesh/green-valley-park-1.jpeg",

    description: `
Green Valley Park is a popular family recreation park located in Lalpur Upazila, Natore District. The park features amusement rides, boating facilities, landscaped gardens, picnic areas, a wave pool, and attractions such as Dream Forest and Flower Valley.

Visitors come here to enjoy family outings, recreational activities, and outdoor entertainment, making it one of the leading amusement parks in the region.
`,

    rating: 4.6,

    reviews: 845,

    savedCount: 573,

    lat: 24.4072,

    lng: 89.0136,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 279,

    name: "Dayarampur Rajbari (দয়ারামপুর রাজবাড়ি)",

    location:
      "Dayarampur, Bagatipara Upazila, Natore District, Rajshahi Division",

    postalAddress:
      "Dayarampur Rajbari, Dayarampur, Bagatipara Upazila, Natore District, Rajshahi Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/dayarampur-rajbari-1.jpeg",

    description: `
Dayarampur Rajbari is a historic zamindar palace located in Bagatipara Upazila, Natore District. It is associated with the Dayarampur Estate of the Dighapatia royal family and reflects the architectural heritage of Bengal's zamindari period.

Visitors come to admire its historic architecture, learn about the region's zamindari history, and explore one of Natore District's notable heritage landmarks.
`,

    rating: 4.7,

    reviews: 527,

    savedCount: 348,

    lat: 24.2869,

    lng: 89.0875,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 280,

    name: "Budhpara Kali Temple (বুধপাড়া কালী মন্দির)",

    location: "Budhpara, Lalpur Upazila, Natore District, Rajshahi Division",

    postalAddress:
      "Budhpara Kali Temple, Budhpara, Lalpur Upazila, Natore District, Rajshahi Division, Bangladesh",

    category: "Temple",

    image: "images/places/bangladesh/budhpara-kali-temple-1.jpeg",

    description: `
Budhpara Kali Temple is a historic Hindu temple located in Lalpur Upazila of Natore District. The temple is widely known for its traditional Kali Puja and one of the largest annual religious fairs in the region, attracting thousands of devotees and visitors every year.

Visitors come to offer prayers, participate in religious ceremonies, and experience the vibrant cultural atmosphere during the annual festival. The temple remains an important religious landmark in Natore District.
`,

    rating: 4.7,

    reviews: 382,

    savedCount: 251,

    lat: 24.4093,

    lng: 89.0068,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - November",

    wikipediaUrl: "",
  },
  {
    id: 281,

    name: "Joy Kali Bari Temple (জয় কালী বাড়ি মন্দির)",

    location:
      "Natore Municipality, Natore Sadar Upazila, Natore District, Rajshahi Division",

    postalAddress:
      "Joy Kali Bari Temple, Natore Municipality, Natore Sadar Upazila, Natore District, Rajshahi Division, Bangladesh",

    category: "Temple",

    image: "images/places/bangladesh/joy-kali-bari-temple-1.jpeg",

    description: `
Joy Kali Bari Temple is a historic Hindu temple located in Natore Municipality. The temple is an important religious center for the local Hindu community and is especially well known for its annual Kali Puja celebrations and traditional worship.

Visitors come to offer prayers, participate in religious festivals, and experience the spiritual atmosphere of one of Natore's prominent Hindu temples.
`,

    rating: 4.8,

    reviews: 491,

    savedCount: 324,

    lat: 24.4135,

    lng: 89.0016,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - November",

    wikipediaUrl: "",
  },
  {
    id: 282,

    name: "Natore Rajbari (Rani Bhavani's Palace) (নাটোর রাজবাড়ি / রাণী ভবানীর রাজবাড়ি)",

    location:
      "Natore Municipality, Natore Sadar Upazila, Natore District, Rajshahi Division",

    postalAddress:
      "Natore Rajbari, Natore Municipality, Natore Sadar Upazila, Natore District - 6400, Rajshahi Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/natore-rajbari-1.jpeg",

    description: `
Natore Rajbari, also known as Rani Bhavani's Palace, was the royal residence of the Natore Raj family. Originally established in the early 18th century by Raja Ramjivan Moitra, the palace complex was later expanded under the rule of the legendary Rani Bhavani, often known as the "Queen of Bengal."

The palace features historic courtyards, temples, ponds, gardens, and colonial-era buildings, making it one of Bangladesh's most significant heritage landmarks.
`,

    rating: 4.8,

    reviews: 2157,

    savedCount: 1428,

    lat: 24.4208,

    lng: 89.0005,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Natore_Rajbari",
  },
  {
    id: 283,

    name: "Uttara Ganabhaban (Dighapatia Rajbari) (উত্তরা গণভবন / দিঘাপতিয়া রাজবাড়ি)",

    location:
      "Dighapatia, Natore Sadar Upazila, Natore District, Rajshahi Division",

    postalAddress:
      "Uttara Ganabhaban, Dighapatia, Natore Sadar Upazila, Natore District, Rajshahi Division, Bangladesh",

    category: "Historical Palace",

    image: "images/places/bangladesh/uttara-ganabhaban-1.jpeg",

    description: `
Uttara Ganabhaban, formerly known as Dighapatia Rajbari, is one of Bangladesh's most magnificent royal palaces. The palace was originally established in the 18th century by Raja Dayaram Roy and was extensively rebuilt and expanded by Raja Pramada Nath Roy after the 1897 earthquake.

The palace is renowned for its European-inspired architecture, landscaped gardens, lakes, fountains, historic buildings, and museum. Today it serves as the official northern residence of the President of Bangladesh.
`,

    rating: 4.9,

    reviews: 3874,

    savedCount: 2632,

    lat: 24.4326,

    lng: 89.0362,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Uttara_Ganabhaban",
  },
  {
    id: 284,

    name: "Nijhum Dwip (নিঝুম দ্বীপ)",

    location: "Hatiya Upazila, Noakhali District, Chattogram Division",

    postalAddress:
      "Nijhum Dwip National Park, Hatiya Upazila, Noakhali District, Chattogram Division, Bangladesh",

    category: "Island & National Park",

    image: "images/places/bangladesh/nijhum-dwip-1.jpeg",

    description: `
Nijhum Dwip is a tranquil island in the Bay of Bengal, located under Hatiya Upazila of Noakhali District. The island emerged naturally from alluvial sediment deposits during the mid-20th century and later became home to Nijhum Dwip National Park, established in 2001.

It is renowned for its mangrove forests, sandy beaches, spotted deer, migratory birds, rich biodiversity, and breathtaking sunsets, making it one of Bangladesh's premier eco-tourism destinations.
`,

    rating: 4.9,

    reviews: 4285,

    savedCount: 3018,

    lat: 22.0345,

    lng: 91.0118,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Nijhum_Dwip",
  },
  {
    id: 285,

    name: "Gandhi Ashram Trust (গান্ধী আশ্রম ট্রাস্ট)",

    location:
      "Jayag, Begumganj Upazila, Noakhali District, Chattogram Division",

    postalAddress:
      "Gandhi Ashram Trust, Jayag, Begumganj Upazila, Noakhali District, Chattogram Division, Bangladesh",

    category: "Historical Heritage Site",

    image: "images/places/bangladesh/gandhi-ashram-trust-1.jpeg",

    description: `
Gandhi Ashram Trust is a historic heritage institution located in Jayag, Begumganj Upazila, Noakhali District. Inspired by Mahatma Gandhi's peace mission in Noakhali during 1946–1947, the original charitable trust was later reorganized and officially renamed Gandhi Ashram Trust in 1975.

Today the trust preserves Gandhian heritage through its museum, memorial buildings, educational programs, peace initiatives, and community development activities, making it one of Bangladesh's most significant historical and cultural institutions.
`,

    rating: 4.8,

    reviews: 986,

    savedCount: 672,

    lat: 22.9279,

    lng: 91.1145,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Gandhi_Ashram_Trust",
  },
  {
    id: 286,

    name: "Jor Bangla Temple / Gopinath Temple (জোড় বাংলা মন্দির / গোপীনাথ মন্দির)",

    location:
      "Pabna Municipality, Pabna Sadar Upazila, Pabna District, Rajshahi Division",

    postalAddress:
      "Jor Bangla Temple (Gopinath Temple), Jor Bangla Para, Pabna Municipality, Pabna Sadar Upazila, Pabna District, Rajshahi Division, Bangladesh",

    category: "Historical Temple",

    image: "images/places/bangladesh/jor-bangla-temple-pabna-1.jpeg",

    description: `
Jor Bangla Temple, also known as Gopinath Temple, is a historic Hindu temple located in Pabna Municipality. It is one of Bangladesh's finest surviving examples of traditional Jor Bangla (do-chala) temple architecture and is renowned for its terracotta decorations depicting scenes from Hindu mythology and Bengali artistic traditions.

The temple is believed to have been built by Brajmohan Krori, a tahsildar of the Nawab of Murshidabad, and is now a protected archaeological monument of Bangladesh.
`,

    rating: 4.7,

    reviews: 584,

    savedCount: 381,

    lat: 24.0052,

    lng: 89.2379,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Gopinath_Temple,_Pabna",
  },
  {
    id: 287,

    name: "Jagannath Temple, Tarash (তাড়াশ জগন্নাথ মন্দির)",

    location: "Tarash Upazila, Sirajganj District, Rajshahi Division",

    postalAddress:
      "Tarash Upazila, Sirajganj District, Rajshahi Division, Bangladesh",

    category: "Historical Temple",

    image: "images/places/bangladesh/jagannath-temple-tarash-1.jpeg",

    description: `
Jagannath Temple is a Hindu temple located in Tarash Upazila of Sirajganj District. The temple serves as a place of worship for the local Hindu community and is known locally for its religious significance.

Further historical details about the temple could not be verified from authoritative sources and should be added only after reliable confirmation.
`,

    rating: 4.6,

    reviews: 356,

    savedCount: 227,

    lat: 24.4348,

    lng: 89.3726,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 288,

    name: "Padma River Ghat / Sara Ghat (পদ্মা নদীর ঘাট / সারা ঘাট)",

    location: "Paksey, Ishwardi Upazila, Pabna District, Rajshahi Division",

    postalAddress:
      "Sara Ghat, Paksey, Ishwardi Upazila, Pabna District, Rajshahi Division, Bangladesh",

    category: "River Ghat",

    image: "images/places/bangladesh/sara-ghat-1.jpeg",

    description: `
Sara Ghat, also known as Padma River Ghat, is a historic riverside destination located at Paksey in Ishwardi Upazila. Before the opening of Hardinge Bridge in 1915, it served as an important railway ferry terminal connecting transport routes across the Padma River.

Today, the ghat is popular for its scenic river views, boating, fishing, and sunset photography. It also offers visitors a close view of the historic Hardinge Bridge and nearby Lalon Shah Bridge.
`,

    rating: 4.7,

    reviews: 938,

    savedCount: 618,

    lat: 24.0798,

    lng: 89.0449,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 289,

    name: "Mental Hospital, Pabna (পাবনা মানসিক হাসপাতাল)",

    location:
      "Hemayetpur, Pabna Sadar Upazila, Pabna District, Rajshahi Division",

    postalAddress:
      "Mental Hospital, Pabna, Hemayetpur, Pabna Sadar Upazila, Pabna District, Rajshahi Division, Bangladesh",

    category: "Historical Institution",

    image: "images/places/bangladesh/mental-hospital-pabna-1.jpeg",

    description: `
Mental Hospital, Pabna is Bangladesh's first specialized psychiatric hospital, established in 1957 at Hemayetpur in Pabna District. Originally founded as East Pakistan Mental Hospital, it has played a pioneering role in providing psychiatric treatment, mental health services, and professional training for decades.

The institution remains an important center for mental healthcare and is recognized for its historical contribution to the development of psychiatric services in Bangladesh.
`,

    rating: 4.5,

    reviews: 463,

    savedCount: 295,

    lat: 24.0224,

    lng: 89.2457,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Mental_Hospital,_Pabna",
  },
  {
    id: 290,

    name: "Hardinge Bridge & Lalon Shah Bridge (হার্ডিঞ্জ ব্রিজ ও লালন শাহ সেতু)",

    location: "Paksey, Ishwardi Upazila, Pabna District, Rajshahi Division",

    postalAddress:
      "Hardinge Bridge, Paksey, Ishwardi Upazila, Pabna District, Rajshahi Division, Bangladesh",

    category: "Historical Bridge",

    image: "images/places/bangladesh/hardinge-bridge-lalon-shah-bridge-1.jpeg",

    description: `
Hardinge Bridge and the adjacent Lalon Shah Bridge form one of Bangladesh's most iconic transportation landmarks across the Padma River at Paksey. Hardinge Bridge, inaugurated in 1915, is a historic steel railway bridge and one of the country's greatest engineering achievements from the British period.

Lalon Shah Bridge, opened in 2004 beside Hardinge Bridge, is a modern road bridge that complements the historic railway crossing. Together, the two bridges are among the most photographed engineering landmarks in Bangladesh.
`,

    rating: 4.9,

    reviews: 3128,

    savedCount: 2143,

    lat: 24.0738,

    lng: 89.0287,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Hardinge_Bridge",
  },
  {
    id: 291,

    name: "Chatmohar Shahi Mosque (চাটমোহর শাহী মসজিদ)",

    location:
      "Chatmohar Municipality, Chatmohar Upazila, Pabna District, Rajshahi Division",

    postalAddress:
      "Chatmohar Shahi Mosque, Chatmohar Municipality, Chatmohar Upazila, Pabna District, Rajshahi Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/chatmohar-shahi-mosque-1.jpeg",

    description: `
Chatmohar Shahi Mosque is a historic Mughal-era mosque located in Chatmohar Municipality of Pabna District. Built in 1581–1582 CE, the mosque is generally attributed to Masum Khan Kabuli, a Mughal noble, and is recognized as one of the oldest surviving Islamic monuments in the region.

The mosque is renowned for its elegant brick architecture, Persian inscription, and historical significance. It is a protected archaeological monument of Bangladesh and remains an important religious and cultural heritage site.
`,

    rating: 4.7,

    reviews: 512,

    savedCount: 334,

    lat: 24.1706,

    lng: 89.2898,

    hiddenGem: true,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "",
  },
  {
    id: 293,

    name: "Goalanda Ghat Railway Station (গোয়ালন্দ ঘাট রেলওয়ে স্টেশন)",

    location: "Goalanda Upazila, Rajbari District, Dhaka Division",

    postalAddress:
      "Goalanda Ghat Railway Station, Goalanda Upazila, Rajbari District, Dhaka Division, Bangladesh",

    category: "Historical Railway Station",

    image: "images/places/bangladesh/goalanda-ghat-railway-station-1.jpeg",

    description: `
Goalanda Ghat Railway Station is one of Bangladesh's most historically significant railway stations. Established during the British colonial period as part of the Eastern Bengal Railway, it became the country's principal railway and river steamer interchange.

For decades, passengers traveling from Kolkata transferred at Goalanda Ghat to steamers serving Dhaka, Narayanganj, Chandpur, Barisal, and Assam. The station played a vital role in the development of transportation, trade, and communication across Bengal and remains an important landmark in Bangladesh's railway history.
`,

    rating: 4.7,

    reviews: 684,

    savedCount: 451,

    lat: 23.7326,

    lng: 89.7582,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Goalanda_Ghat",
  },
  {
    id: 294,

    name: "Varendra Research Museum (বরেন্দ্র গবেষণা জাদুঘর)",

    location: "Boalia, Rajshahi City, Rajshahi District, Rajshahi Division",

    postalAddress:
      "Varendra Research Museum, Boalia, Rajshahi City, Rajshahi District, Rajshahi Division, Bangladesh",

    category: "Museum",

    image: "images/places/bangladesh/varendra-research-museum-1.jpeg",

    description: `
Varendra Research Museum is the oldest museum in Bangladesh, founded in 1910 by the Varendra Research Society. Since 1964, it has been administered by the University of Rajshahi and serves as one of the country's leading institutions for archaeology and historical research.

The museum houses an outstanding collection of ancient sculptures, inscriptions, coins, manuscripts, terracotta artifacts, and archaeological objects representing the history and culture of Bengal from prehistoric times through the medieval period.
`,

    rating: 4.8,

    reviews: 2986,

    savedCount: 1915,

    lat: 24.3668,

    lng: 88.6044,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Varendra_Research_Museum",
  },
  {
    id: 295,

    name: "Shaheed A.H.M. Kamaruzzaman Central Park and Zoo (শহীদ এ.এইচ.এম. কামারুজ্জামান কেন্দ্রীয় উদ্যান ও চিড়িয়াখানা)",

    location: "Boalia, Rajshahi City, Rajshahi District, Rajshahi Division",

    postalAddress:
      "Shaheed A.H.M. Kamaruzzaman Central Park and Zoo, Boalia, Rajshahi City, Rajshahi District, Rajshahi Division, Bangladesh",

    category: "Park & Zoo",

    image:
      "images/places/bangladesh/shaheed-ahm-kamaruzzaman-central-park-and-zoo-1.jpeg",

    description: `
Shaheed A.H.M. Kamaruzzaman Central Park and Zoo is the largest public park and zoo in Rajshahi City. Managed by Rajshahi City Corporation, it features a small zoo, landscaped gardens, walking paths, children's play areas, lakes, and picnic spaces.

The park is one of the city's most popular recreational destinations for families, offering a relaxing environment as well as educational opportunities through its collection of animals and birds.
`,

    rating: 4.6,

    reviews: 2157,

    savedCount: 1342,

    lat: 24.3725,

    lng: 88.5916,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 296,

    name: "Padma Garden (Padma Udyan) (পদ্মা গার্ডেন / পদ্মা উদ্যান)",

    location: "Boalia, Rajshahi City, Rajshahi District, Rajshahi Division",

    postalAddress:
      "Padma Garden, Padma Riverside, Boalia, Rajshahi City, Rajshahi District, Rajshahi Division, Bangladesh",

    category: "Riverside Park",

    image: "images/places/bangladesh/padma-garden-1.jpeg",

    description: `
Padma Garden, locally known as Padma Udyan, is the most popular riverside park in Rajshahi City. Located along the northern bank of the Padma River, it offers landscaped walkways, seating areas, open green spaces, and panoramic river views.

The park is especially popular for evening walks, sunset photography, local food stalls, and family recreation. It has become one of the city's most iconic public spaces and a favorite destination for both residents and visitors.
`,

    rating: 4.8,

    reviews: 4853,

    savedCount: 3128,

    lat: 24.3638,

    lng: 88.5877,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 297,

    name: "Shahid Zia Shishu Park (শহীদ জিয়া শিশু পার্ক)",

    location: "Boalia, Rajshahi City, Rajshahi District, Rajshahi Division",

    postalAddress:
      "Shahid Zia Shishu Park, Boalia, Rajshahi City, Rajshahi District, Rajshahi Division, Bangladesh",

    category: "Children's Park",

    image: "images/places/bangladesh/shahid-zia-shishu-park-1.jpeg",

    description: `
Shahid Zia Shishu Park is a popular children's recreational park located in Rajshahi City. The park features amusement rides, playground facilities, open green spaces, and seating areas, making it a favorite destination for local families.

It is widely visited by children and residents for leisure and outdoor recreation, especially during weekends and public holidays.
`,

    rating: 4.5,

    reviews: 1328,

    savedCount: 824,

    lat: 24.3674,

    lng: 88.5985,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 298,

    name: "Bagha Mosque (বাঘা মসজিদ)",

    location:
      "Bagha Municipality, Bagha Upazila, Rajshahi District, Rajshahi Division",

    postalAddress:
      "Bagha Mosque, Bagha Municipality, Bagha Upazila, Rajshahi District, Rajshahi Division, Bangladesh",

    category: "Historical Mosque",

    image: "images/places/bangladesh/bagha-mosque-1.jpeg",

    description: `
Bagha Mosque is one of the finest surviving examples of Bengal Sultanate architecture in Bangladesh. It was built in 1523 during the reign of Sultan Nasiruddin Nasrat Shah of the Husain Shahi dynasty and is renowned for its terracotta ornamentation, brick craftsmanship, and ten-domed design.

The mosque is a protected archaeological monument maintained by the Department of Archaeology, Bangladesh, and remains an active place of worship as well as one of the country's most important historical landmarks.
`,

    rating: 4.8,

    reviews: 1834,

    savedCount: 1208,

    lat: 24.1839,

    lng: 88.8165,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Bagha_Mosque",
  },
  {
    id: 299,

    name: "Padma Badh (Padma Riverside Embankment) (পদ্মা বাঁধ)",

    location: "Boalia, Rajshahi City, Rajshahi District, Rajshahi Division",

    postalAddress:
      "Padma Badh, Padma Riverside, Boalia, Rajshahi City, Rajshahi District, Rajshahi Division, Bangladesh",

    category: "Riverfront",

    image: "images/places/bangladesh/padma-badh-1.jpeg",

    description: `
Padma Badh is the riverside embankment along the Padma River in Rajshahi City. Originally constructed for riverbank protection and erosion control, it has developed into one of the city's most popular public recreational areas.

The riverfront features walking paths, seating areas, landscaped open spaces, food stalls, and panoramic views of the Padma River. It is especially popular for evening walks, cycling, photography, and sunset viewing.
`,

    rating: 4.8,

    reviews: 3672,

    savedCount: 2413,

    lat: 24.3619,

    lng: 88.5902,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "October - March",

    wikipediaUrl: "",
  },
  {
    id: 300,

    name: "Puthia Temple Complex (পুঠিয়া মন্দির কমপ্লেক্স)",

    location:
      "Puthia Municipality, Puthia Upazila, Rajshahi District, Rajshahi Division",

    postalAddress:
      "Puthia Temple Complex, Puthia Municipality, Puthia Upazila, Rajshahi District, Rajshahi Division, Bangladesh",

    category: "Historical Temple Complex",

    image: "images/places/bangladesh/puthia-temple-complex-1.jpeg",

    description: `
Puthia Temple Complex is the largest concentration of historic Hindu temples in Bangladesh. Located in Puthia, the complex includes magnificent temples, palaces, ponds, and gardens that were built mainly between the 18th and early 19th centuries by the Puthia Raj family.

The temples are renowned for their elaborate terracotta ornamentation, intricate brickwork, and impressive blend of traditional Bengali and regional architectural styles. The complex is one of Bangladesh's most important archaeological and cultural heritage sites.
`,

    rating: 4.9,

    reviews: 3248,

    savedCount: 2284,

    lat: 24.3655,

    lng: 88.8437,

    hiddenGem: false,

    createdBy: "system",

    bestSeason: "November - February",

    wikipediaUrl: "https://en.wikipedia.org/wiki/Puthia_Temple_Complex",
  },
];
