import {
  ParvaniDate,
  SacredGhat,
  SacredPlace,
  AkhadaInfo,
  OfficialUpdateItem,
  FaqItem,
  EmergencyContact,
} from '../types';

import ramkundaGhat from "../img/ramkund-2.webp";
import kushavartaKund from "../img/kushavarta-kund.webp";
import gandhiSmarakGhat from "../img/gandhi-smarak-ghat.webp";
import lakshmanSitaKund from "../img/lakshman-kund-sita-kund.webp";
import talkuteshwarGhat from "../img/talkuteshwar-ghat.webp";
import dasakGhat from "../img/dasak-ghat.avif";
import trimbakeshwarTemple from "../img/triambakeshwar-tempel-2.webp";
import kalaramMandir from "../img/kalaram-tempal-2.webp";
import kapaleshwarMandir from "../img/kapaleshwar-tempal-2.webp";
import sitaGUfa from "../img/sita-gufa.webp";
import pandavleni from "../img/pandavleni-caves-nashik.jpg";
import anjaneri from "../img/anjaneri-2.webp";
import brahmagiri from "../img/brahmagiri-mountain.jpg";
import tapovan from "../img/tapovan-nashik.jpg";

/**
 * Verified and Provisional dates for Simhastha Kumbh Mela 2027–2028.
 * In Hindu astrological calculations, Simhastha occurs when Jupiter enters Leo (Simha Rashi)
 * while the Sun enters Leo or Cancer.
 */
export const PARVANI_DATES: ParvaniDate[] = [
  {
    id: 'dhwajarohan-2027',
    dateStr: 'August 2027 (Provisional)',
    gregorianDate: 'Mid August 2027 (Tentative)',
    hinduTithi: 'Shravana Shukla Paksha (Tentative)',
    eventName: 'Dhwajarohan (Flag Hoisting Ceremony)',
    marathiName: 'ध्वजारोहण सोहळा',
    location: 'Both Nashik & Trimbakeshwar',
    description:
      'The ceremonial unfurling of the sacred Kumbh flag at Ramkund (Nashik) and Kushavarta Kund (Trimbakeshwar), marking the formal traditional beginning of the Simhastha period.',
    status: 'Provisional / Traditional Astrological',
    source: 'Purohit Sangh & Akhada Parishad Astrological Calendar',
    lastUpdated: 'October 2026',
    isMajorParvani: false,
  },
  {
    id: 'first-shahi-snan',
    dateStr: 'September 2027 (Awaiting Gazette)',
    gregorianDate: 'Late August / Early September 2027 (Provisional)',
    hinduTithi: 'Bhadrapada Krishna Paksha Amavasya (Traditional calculation)',
    eventName: 'First Shahi Snan (Pratham Rajyogi Snan)',
    marathiName: 'पहिले शाही स्नान / राजयोगी स्नान',
    location: 'Both Nashik & Trimbakeshwar',
    description:
      'The inaugural ceremonial royal bath. Shaiva Akhadas take the royal dip at Kushavarta Kund in Trimbakeshwar, while Vaishnava Akhadas take the royal dip at Ramkund in Nashik, followed by general pilgrims.',
    status: 'Provisional / Traditional Astrological',
    source: 'Maharashtra Divisional Commissioner Preliminary Framework & Akhada Traditions',
    lastUpdated: 'October 2026',
    isMajorParvani: true,
  },
  {
    id: 'second-shahi-snan',
    dateStr: 'September 2027 (Awaiting Gazette)',
    gregorianDate: 'Mid September 2027 (Provisional)',
    hinduTithi: 'Bhadrapada Shukla Paksha Dwadashi (Vaman Dwadashi / Shravan Shahi)',
    eventName: 'Second Shahi Snan (Mukhya Parvani)',
    marathiName: 'दुसरे मुख्य शाही स्नान',
    location: 'Both Nashik & Trimbakeshwar',
    description:
      'Traditionally regarded as the largest gathering of the entire Mela. Millions of devotees gather early morning for the auspicious holy dip following the grand Akhada processions.',
    status: 'Provisional / Traditional Astrological',
    source: 'Preliminary Schedule Discussions - Nashik District Administration',
    lastUpdated: 'October 2026',
    isMajorParvani: true,
  },
  {
    id: 'third-shahi-snan',
    dateStr: 'Late September 2027 (Awaiting Gazette)',
    gregorianDate: 'Late September / Early October 2027 (Provisional)',
    hinduTithi: 'Ashwin Krishna Paksha Amavasya (Sarvapitri Amavasya)',
    eventName: 'Third Shahi Snan (Tritiya Rajyogi Snan)',
    marathiName: 'तिसरे शाही स्नान',
    location: 'Both Nashik & Trimbakeshwar',
    description:
      'The concluding ceremonial royal bath of the primary Bhadrapada–Ashwin cycle. Accompanied by traditional Vedic chants and mass community darshan of ascetics.',
    status: 'Provisional / Traditional Astrological',
    source: 'Akhada Parishad Preliminary Calendar',
    lastUpdated: 'October 2026',
    isMajorParvani: true,
  },
  {
    id: 'nagar-pradakshina',
    dateStr: 'October 2027 (To Be Notified)',
    gregorianDate: 'October 2027 (Provisional)',
    hinduTithi: 'Kartik Shukla Paksha Ekadashi / Purnima',
    eventName: 'Nagar Pradakshina & Panchavati Parikrama',
    marathiName: 'नगर प्रदक्षिणा व परिक्रमा',
    location: 'Nashik',
    description:
      'Traditional circumambulation of the holy perimeter of ancient Panchavati and Godavari banks by sadhus, saints, and local pilgrim societies.',
    status: 'Awaiting Formal Notification',
    source: 'Nashik Municipal Corporation Heritage Committee',
    lastUpdated: 'October 2026',
    isMajorParvani: false,
  },
  {
    id: 'dhwaja-avtaran',
    dateStr: 'July / August 2028 (Provisional)',
    gregorianDate: 'Mid 2028 (Pending Official Notification)',
    hinduTithi: 'Ashadha Purnima / Shravana completion',
    eventName: 'Dhwaja Avtaran (Ceremonial Lowering of Flag)',
    marathiName: 'ध्वज अवतरण (कुंभमेळा सांगता)',
    location: 'Both Nashik & Trimbakeshwar',
    description:
      'The formal ceremonial conclusion of the Simhastha cycle, marked by the lowering of the holy flag once Jupiter completes its transit through Simha Rashi.',
    status: 'Awaiting Formal Notification',
    source: 'Nashik-Trimbakeshwar Kumbh Mela Authority Planning Draft',
    lastUpdated: 'October 2026',
    isMajorParvani: false,
  },
];

export const SACRED_GHATS: SacredGhat[] = [
  {
    id: 'ramkund',
    name: 'Ramkund',
    marathiName: 'रामकुंड',
    location: 'Panchavati, Nashik Riverbank',
    significance:
      'The spiritual epicentre of Nashik. Believed in sacred tradition to be the spot where Lord Rama bathed and performed shraddha rituals for King Dasharatha during exile.',
    description:
      'Constructed with stepped basalt stone by Chitrarao Khatarkar in 1696 and subsequently patronised by the Peshwas. Ramkund is where the holy Godavari river forms an auspicious rectangular reservoir. During the Kumbh Mela, Vaishnava Akhadas and countless millions of pilgrims take their holy bath here.',
    accessInfo:
      'Centrally located in Panchavati near Sardar Chowk and Malviya Chowk. Accessible on foot from the Old City market. Vehicles are restricted on parvani days.',
    safetyAdvice:
      'Deep stone steps may become slippery when wet. Submerged railings are installed along bathing enclosures. Avoid pushing into the inner reservoir during peak morning hours.',
    imageUrl: ramkundaGhat,
    imageAlt: 'Stepped stone river ghat on the Godavari river during morning prayers in Nashik',
    coordinatesHint: 'Panchavati, Nashik 422003',
  },
  {
    id: 'kushavarta-kund',
    name: 'Kushavarta Kund',
    marathiName: 'कुशावर्त तीर्थ (त्र्यंबकेश्वर)',
    location: 'Trimbakeshwar Town (28 km from Nashik)',
    significance:
      'The sacred pool where Sage Gautama gathered the holy Godavari with Kusha (sacred grass), enabling the river to emerge on earth.',
    description:
      'Enclosed by an ornate stone quadrangle built in 1750 by Raoji Balaji Parasnis, Kushavarta Kund is the central bathing site for the Trimbakeshwar Kumbh. It is here that Shaiva Akhada sadhus and ascetics make their royal entry and sacred immersion.',
    accessInfo:
      'Located 350 metres south of the Trimbakeshwar Jyotirlinga Temple. Approach via pedestrian stone lanes.',
    safetyAdvice:
      'During Shahi Snan days, Kushavarta Kund is strictly reserved for Akhadas during allocated morning hours. General public entry opens only after official administrative clearance.',
    imageUrl: kushavartaKund,
    imageAlt: 'Ancient temple pond with stone pavilions and sacred water in Trimbakeshwar',
    coordinatesHint: 'Trimbak, Maharashtra 422212',
  },
  {
    id: 'lakshman-kund-sita-kund',
    name: 'Lakshman Kund & Sita Kund',
    marathiName: 'लक्ष्मण कुंड व सीता कुंड',
    location: 'Adjacent to Ramkund, Panchavati',
    significance:
      'Dedicated to Lakshmana and Sita, these stone basins form part of the greater Ramkund riverfront complex.',
    description:
      'Surrounding Ramkund, these adjoining smaller enclosures allow pilgrims to perform ancestral rituals (Tarpan) and offer prayers in slightly calmer waters adjacent to the primary flow of the river.',
    accessInfo:
      'Directly connected by stone walkways to Ramkund. Accessible via the riverfront steps.',
    safetyAdvice:
      'Ritual materials (flowers, diya leaf boats) should only be disposed of in designated eco-friendly Nirmalya bins, never thrown with plastic into the water.',
    imageUrl: lakshmanSitaKund,
    imageAlt: 'Sacred river steps adorned with marigold petals and brass lamps at sunset',
    coordinatesHint: 'Panchavati Ghat Complex',
  },
  {
    id: 'gandhi-smarak-ghat',
    name: 'Gandhi Smarak Ghat',
    marathiName: 'गांधी स्मारक घाट',
    location: 'Downstream from Ramkund, Left Bank',
    significance:
      'Historic site where a portion of Mahatma Gandhi’s ashes were immersed in the sacred Godavari in 1948.',
    description:
      'A broader, more open riverfront stretch with wide promenades and terraced steps. It provides excellent vantage points for watching the Godavari river and evening Deepotsav celebrations.',
    accessInfo: 'Walkable from Victoria Bridge / Ahilyabai Holkar Bridge along the paved riverfront.',
    safetyAdvice:
      'Spacious and suitable for families seeking a calmer riverfront atmosphere away from the concentrated density of Ramkund.',
    imageUrl: gandhiSmarakGhat,
    imageAlt: 'Expansive riverfront promenade with stone balustrades beside tranquil waters',
    coordinatesHint: 'Godavari Riverbank, Nashik',
  },
  {
    id: 'talkuteshwar-ghat',
    name: 'Talkuteshwar Ghat',
    marathiName: 'टाळकुटेश्वर घाट',
    location: 'Opposite Panchavati, City Side',
    significance:
      'Ancient temple ghat dedicated to Lord Shiva near the confluence point of the Aruna and Godavari streams.',
    description:
      'Situated on the southern bank facing Panchavati, this ghat offers sweeping views of the historic temple spires and the holy bathing ghats opposite. Often utilised as part of secondary crowd diversion routes.',
    accessInfo: 'Approached from Ravivar Peth and Bhandi Bazar.',
    safetyAdvice:
      'Follow directional signboards indicating pedestrian flow between the City side and Panchavati over footbridges.',
    imageUrl: talkuteshwarGhat,
    imageAlt: 'Stone temple architecture reflected along the calm morning riverbank',
    coordinatesHint: 'Ravivar Peth riverfront, Nashik',
  },
  {
    id: 'dasak-ghat',
    name: 'Dasak Ghat',
    marathiName: 'दशक घाट (जेलरोड)',
    location: 'Upstream near Nashik Road, 6 km from Central City',
    significance:
      'A serene riverfront location where saintly figures traditionally engaged in spiritual reflection and rituals.',
    description:
      'Widely used by residents of the Nashik Road railway area. The ghat features broad steps, lush riverside vegetation, and traditional shrines, serving as an important satellite bathing area to ease central city congestion.',
    accessInfo: 'Easily accessible from Nashik Road Railway Station (approx. 3 km) via Jail Road.',
    safetyAdvice:
      'River currents can vary according to dam release levels upstream from Gangapur. Bathing is restricted to marked shallow enclosures.',
    imageUrl: dasakGhat,
    imageAlt: 'Quiet riverside with gentle morning mist and stone steps leading to water',
    coordinatesHint: 'Jail Road, Dasak, Nashik',
  },
];

export const SACRED_PLACES: SacredPlace[] = [
  {
    id: 'trimbakeshwar-jyotirlinga',
    name: 'Trimbakeshwar Shiva Temple',
    marathiName: 'श्री त्र्यंबकेश्वर ज्योतिर्लिंग मंदिर',
    locationType: 'Temple',
    distanceFromNashikCenter: '28 km southwest of Nashik',
    summary:
      'One of the twelve sacred Jyotirlingas of India, uniquely featuring a lingam with three faces representing Brahma, Vishnu, and Rudra.',
    historicalContext:
      'Rebuilt in solid black basalt stone by the third Peshwa, Balaji Baji Rao (Nana Saheb Peshwa), between 1755 and 1786. The temple is surrounded by massive stone ramparts and situated at the base of the Brahmagiri mountain, the mythological origin of the Godavari River.',
    visitorGuidelines: [
      'Dress code: Traditional modest attire required. Men must wear dhoti/kurta; women saree or salwar kameez.',
      'Electronic devices: Mobile phones, smartwatches, and leather articles must be deposited at official cloakrooms outside.',
      'Queue management: Anticipate lengthy wait times during Kumbh and Monday mornings. Follow barricaded lines.',
      'Accessibility: Ramps are provided at designated gates, though stone thresholds require assistance for wheelchairs.',
    ],
    imageUrl: trimbakeshwarTemple,
    imageAlt: 'Detailed basalt stone temple shikhara towering against a misty Sahyadri mountain',
    officialSource: 'Shree Trimbakeshwar Devasthan Trust (trimbak.org)',
  },
  {
    id: 'kalaram-mandir',
    name: 'Kalaram Temple',
    marathiName: 'श्री काळाराम मंदिर',
    locationType: 'Temple',
    distanceFromNashikCenter: '2 km from City Center (Panchavati)',
    summary:
      'Magnificent 18th-century temple carved entirely from polished black basalt stone, enshrining Lord Rama, Sita, and Lakshmana.',
    historicalContext:
      'Commissioned in 1782 by Sardar Rangarao Odhekar of the Peshwa administration, taking 12 years and over 2,000 stonemasons to complete. The deities are carved from lustrous black stone (hence Kala-Ram). It was also the site of the historic 1930 temple entry satyagraha led by Dr. B.R. Ambedkar.',
    visitorGuidelines: [
      'Open daily from early morning (approx. 5:30 AM to 10:00 PM).',
      'Spacious stone courtyard provides peaceful respite for seated prayer.',
      'Photography is strictly prohibited inside the inner sanctum.',
    ],
    imageUrl: kalaramMandir,
    imageAlt: 'Intricate black basalt stone temple carvings and temple entrance pillars',
    officialSource: 'Shri Ram Mandir Kalaram Sansthan',
  },
  {
    id: 'sita-gufa',
    name: 'Sita Gufa (Caves)',
    marathiName: 'सीता गुंफा',
    locationType: 'Heritage Cave',
    distanceFromNashikCenter: '2.5 km (Panchavati, near five banyan trees)',
    summary:
      'Traditional subterranean cave site where Sita is believed to have taken shelter and worshipped Lord Shiva during their exile in the Dandakaranya forest.',
    historicalContext:
      'Located near five ancient banyan trees (Pancha-Vata) which gave the region its name. The cave entrance leads through a narrow stone passage descending to small rock-hewn chambers with antique shrines of Rama, Lakshmana, Sita, and a Shiva lingam.',
    visitorGuidelines: [
      'Cave passages are very low and narrow. Requires stooping or crawling to enter.',
      'Not recommended for people with severe claustrophobia, knee injuries, or respiratory difficulties.',
      'Arrive early in the morning to avoid long pedestrian queues.',
    ],
    imageUrl: sitaGUfa,
    imageAlt: 'Ancient rock cave entrance flanked by ancient banyan trees with hanging aerial roots',
  },
  {
    id: 'kapaleshwar-temple',
    name: 'Kapaleshwar Mahadev Temple',
    marathiName: 'कपालेश्वर महादेव मंदिर',
    locationType: 'Temple',
    distanceFromNashikCenter: '1.5 km (Overlooking Ramkund)',
    summary:
      'One of the few Shiva temples in India without a Nandi bull statue at the entrance.',
    historicalContext:
      'According to regional sthala-purana, Lord Shiva mistakenly acquired Brahma-hatya dosha, which was absolved when a bull advised him to bathe in the holy Godavari at Ramkund. Because Shiva accepted the bull as his Guru in this instance, no Nandi sits in the customary subordinate position before the lingam.',
    visitorGuidelines: [
      'Located on an elevated bluff overlooking Ramkund; features expansive views of the riverfront.',
      'Steep stone stairway to reach the upper mandap.',
    ],
    imageUrl: kapaleshwarMandir,
    imageAlt: 'Elevated stone temple overlooking the sacred river ghats at dawn',
  },
  {
    id: 'pandavleni-caves',
    name: 'Pandavleni Buddhist Caves',
    marathiName: 'पांडवलेणी (त्रिरश्मी लेणी)',
    locationType: 'Heritage Cave',
    distanceFromNashikCenter: '8 km south of Nashik on Mumbai-Agra Highway',
    summary:
      'A complex of 24 rock-cut Hinayana Buddhist caves dating from the 1st century BCE to the 3rd century CE, carved into the Trirashmi hills.',
    historicalContext:
      'Protected monument under the Archaeological Survey of India (ASI). Contains ancient Brahmi inscriptions detailing patronage from Satavahana kings, Western Kshatrapas, and trade guilds, demonstrating Nashik’s historic stature as a major trans-peninsular trade hub.',
    visitorGuidelines: [
      'Requires climbing approximately 300 stone steps up the hillside. Wear supportive walking footwear.',
      'Carries a nominal ASI entrance ticket. Open from sunrise to sunset.',
      'Carry your own water; facilities atop the cliff are limited.',
    ],
    imageUrl: pandavleni,
    imageAlt: 'Ancient rock-cut Buddhist chaitya hall with pillars and arched facade on a hillside',
    officialSource: 'Archaeological Survey of India (ASI Mumbai Circle)',
  },
  {
    id: 'anjaneri-hill',
    name: 'Anjaneri Hill',
    marathiName: 'अंजनेरी टेकडी',
    locationType: 'Sacred Hill',
    distanceFromNashikCenter: '20 km west on Trimbak Road',
    summary:
      'Revered as the traditional birthplace of Lord Hanuman, named after his mother Anjani.',
    historicalContext:
      'Rising steeply from the Trimbak plateau, the plateau summit hosts ancient shrines dedicated to Anjani Mata and Hanuman, along with 12th-century Yadava-era Jain and Hindu cave temples at its base.',
    visitorGuidelines: [
      'Trek duration: Approximately 2.5 to 3 hours ascending. Involves steep stone steps and plateau trails.',
      'During monsoon and winter, early mornings offer breathtaking Sahyadri views; avoid midday sun during summer.',
      'Maintain environmental discipline: zero single-use plastic is strictly enforced by forest rangers.',
    ],
    imageUrl: anjaneri,
    imageAlt: 'Misty plateau and mountain cliffs in the Western Ghats near Trimbak',
  },
  {
    id: 'brahmagiri-mountain',
    name: 'Brahmagiri Mountain',
    marathiName: 'ब्रह्मगिरी पर्वत',
    locationType: 'River Source',
    distanceFromNashikCenter: '30 km west (behind Trimbakeshwar Temple)',
    summary:
      'The sacred mountain source of the holy Godavari (Dakshin Ganga), with stepped trails leading to Gangadwar.',
    historicalContext:
      'Mentioned in the Brahma Purana as the place where Sage Gautama worshipped Lord Shiva to bring the celestial Ganga to earth to cleanse the land. The path passes Gangadwar, where the water trickles from a stone cow mouth (Gomukh).',
    visitorGuidelines: [
      'Approximately 750 stone steps lead up to Gangadwar; an additional climb leads to the summit plateau.',
      'Beware of wild monkeys; keep food packets and personal belongings securely zipped in bags.',
      'Start early in the morning (6:00 AM) to avoid afternoon heat.',
    ],
    imageUrl: brahmagiri,
    imageAlt: 'Towering green mountain summit surrounded by floating monsoon clouds',
  },
  {
    id: 'tapovan',
    name: 'Tapovan',
    marathiName: 'तपोवन',
    locationType: 'Sacred Grove',
    distanceFromNashikCenter: '4 km east of Panchavati',
    summary:
      'The traditional penance ground (Tapo-bhumi) of ancient rishis and the mythological site of the cutting of Surpanakha’s nose by Lakshmana.',
    historicalContext:
      'A verdant area along the Godavari and Kapila river sangam. Dotted with traditional ashrams, gaushalas (cow shelters), and quiet hermitage enclosures where sadhus camp during the Kumbh period.',
    visitorGuidelines: [
      'Peaceful area ideal for contemplative walks and learning about ascetic hermitage traditions.',
      'Respect the ashram boundaries and privacy of meditating residents.',
    ],
    imageUrl: tapovan,
    imageAlt: 'Tranquil grove of banyan trees and serene river confluence with morning sunlight',
  },
];

export const AKHADAS_DATA: AkhadaInfo[] = [
  {
    id: 'shaiva-trimbakeshwar',
    name: 'Shaiva Akhadas (Trimbakeshwar Camp)',
    sect: 'Shaiva (Trimbakeshwar)',
    headquarters: 'Various ancient peeths across Varanasi, Haridwar & Ujjain',
    campingCenter: 'Trimbakeshwar town perimeter & Kushavarta approaches',
    traditionalRole:
      'Devotees of Lord Shiva. They revere the Trimbakeshwar Jyotirlinga and bathe exclusively at Kushavarta Kund during the Simhastha.',
    processionDetails:
      'Lead spectacular Peshwai royal processions entering Trimbakeshwar, displaying sacred silver emblems, dharohar tridents, and traditional martial arts (shastra-vidya).',
    etiquetteTips: [
      'Always seek permission before photographing sadhus, especially Naga babas.',
      'Do not interrupt ongoing havan rituals or private dhyana sessions.',
      'Maintain quiet decorum and follow designated spectator barricades during the Shahi Snan procession.',
    ],
  },
  {
    id: 'vaishnava-nashik',
    name: 'Vaishnava Akhadas / Ani Akhadas (Nashik Camp)',
    sect: 'Vaishnava (Nashik)',
    headquarters: 'Ayodhya, Vrindavan, Chitrakoot & Janakpur',
    campingCenter: 'Sadhugram, Tapovan, Nashik',
    traditionalRole:
      'Devotees of Lord Vishnu and Rama. Divided historically into three primary "Ani" federations: Digambar Ani Akhada, Nirmohi Ani Akhada, and Nirvani Ani Akhada.',
    processionDetails:
      'Process with majestic ceremonial chariots, flags adorned with Lord Hanuman and Garuda, accompanied by devotional kirtans and mridangam rhythms towards Ramkund.',
    etiquetteTips: [
      'Prasad and bhandara community meals are offered freely; sit respectfully in the pangat (communal row).',
      'Remove footwear before stepping onto the carpeted tents of the mahants and acharyas.',
    ],
  },
  {
    id: 'udasi-nirmal',
    name: 'Udasi & Nirmal Akhadas',
    sect: 'Udasi / Nirmal',
    headquarters: 'Punjab, Haridwar & Patiala peeths',
    campingCenter: 'Special allocated camps in Sadhugram',
    traditionalRole:
      'Spiritual monastic orders founded in the tradition of Sri Chand (son of Guru Nanak Dev ji) and Nirmal sant tradition, bridging Vedic philosophy with devotional Gurmat literature.',
    processionDetails:
      'Recognised for orderly processions reciting Gurbani and Vedic hymns with quiet, dignified cadence.',
    etiquetteTips: [
      'Cover your head with a scarf or handkerchief when entering Udasi and Nirmal pavilions.',
      'Smoking, tobacco, or alcohol are strictly forbidden anywhere near camp perimeters.',
    ],
  },
];

export const OFFICIAL_UPDATES: OfficialUpdateItem[] = [
  {
    id: 'upd-01',
    headline: 'High-Powered Committee reviews Nashik-Trimbakeshwar Kumbh master infrastructure plan',
    publicationDate: 'September 2026',
    summary:
      'The Apex Committee headed by the Chief Secretary of Maharashtra reviewed road widening, water supply augmentation, ghat expansions, and health facilities for the upcoming 2027–2028 Simhastha.',
    sourceOrg: 'Office of the Divisional Commissioner, Nashik Division',
    officialRefUrl: 'https://divcomnashik.maharashtra.gov.in/en/simhastha-kumbh-mela-2027/',
    status: 'Confirmed',
    category: 'Infrastructure',
  },
  {
    id: 'upd-02',
    headline: 'Sadhugram land acquisition and temporary tent city layout planning initiated',
    publicationDate: 'August 2026',
    summary:
      'Nashik Municipal Corporation (NMC) has demarcated over 300 acres in Tapovan for Sadhugram accommodation, sanitary networks, and emergency circulation roads for visiting akhadas.',
    sourceOrg: 'Nashik Municipal Corporation (NMC)',
    officialRefUrl: 'https://nmc.gov.in',
    status: 'Confirmed',
    category: 'Infrastructure',
  },
  {
    id: 'upd-03',
    headline: 'Provisional Parvani dates submitted by Akhada Parishad and Purohit Sangh for gazette study',
    publicationDate: 'July 2026',
    summary:
      'Astronomical calculations for the entry of Jupiter into Leo (Simha) have been compiled. A formal government gazette notification confirming the exact Shahi Snan dates will be issued closer to the event.',
    sourceOrg: 'Nashik-Trimbakeshwar Kumbh Mela Authority',
    officialRefUrl: 'https://divcomnashik.maharashtra.gov.in/en/about-nashik-trimbakeshwar-authority/',
    status: 'Provisional Planning',
    category: 'Dates',
  },
  {
    id: 'upd-04',
    headline: 'Central Railway initiates feasibility survey for 24-platform Kumbh terminal augmentation',
    publicationDate: 'June 2026',
    summary:
      'Surveys underway at Nashik Road, Odha, and Devlali stations to introduce additional passenger holding zones, medical booths, and high-frequency circular shuttles during peak bathing windows.',
    sourceOrg: 'Central Railway (Bhusawal Division)',
    officialRefUrl: 'https://cr.indianrailways.gov.in',
    status: 'Provisional Planning',
    category: 'Transport',
  },
  {
    id: 'upd-05',
    headline: 'Nirmal Godavari Cleanliness Advisory and Zero-Plastic Mandate reaffirmed',
    publicationDate: 'May 2026',
    summary:
      'Maharashtra Pollution Control Board and Nashik administration have issued strict guidelines prohibiting the dumping of single-use plastics, thermocol, and non-biodegradable ritual items into the Godavari.',
    sourceOrg: 'Maharashtra Pollution Control Board (MPCB)',
    officialRefUrl: 'https://mpcb.gov.in',
    status: 'Advisory',
    category: 'Safety',
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'What is the Nashik–Trimbakeshwar Simhastha Kumbh Mela?',
    marathiQuestion: 'नाशिक-त्र्यंबकेश्वर सिंहस्थ कुंभमेळा म्हणजे काय?',
    answer:
      'The Simhastha Kumbh Mela is one of the four legendary Kumbh Melas of India, occurring every 12 years when the planet Jupiter (Guru) enters the zodiac sign of Leo (Simha Rashi) and the Sun enters Leo or Cancer. It is unique because it is held concurrently across two distinct sacred centres: the Godavari River Ghats in Nashik city and the ancient Jyotirlinga town of Trimbakeshwar.',
    category: 'General',
  },
  {
    question: 'What is the key difference between Nashik and Trimbakeshwar observances?',
    marathiQuestion: 'नाशिक आणि त्र्यंबकेश्वर मधील पूजेच्या परंपरेत काय फरक आहे?',
    answer:
      'Historically, following a historic reconciliation in 1789 brokered by the Peshwa administration, the Shaiva Akhadas (worshippers of Lord Shiva) camp and perform their royal Shahi Snan at Kushavarta Kund in Trimbakeshwar, while the Vaishnava Akhadas (worshippers of Lord Vishnu and Rama) camp at Sadhugram in Tapovan and bathe at Ramkund in Nashik. Devotees visit both centres, but planning transit between them requires awareness of road restrictions.',
    category: 'Rituals & Bathing',
  },
  {
    question: 'When will the exact Parvani (Shahi Snan) dates be finalized?',
    marathiQuestion: 'शाही स्नानाच्या अधिकृत तारखा कधी जाहीर होतील?',
    answer:
      'Traditional astrological dates are already formulated by the Purohit Sangh and Akhada Parishad based on Hindu panchang calculations for 2027. However, the definitive administrative schedule—which governs security cordons, train timetables, and public bathing windows—is formally published via an official Maharashtra State Government Gazette closer to the commencement of the Mela.',
    category: 'General',
  },
  {
    question: 'Can general pilgrims bathe at Ramkund and Kushavarta on Shahi Snan days?',
    marathiQuestion: 'शाही स्नानाच्या दिवशी सामान्य भाविकांना स्नान करता येते का?',
    answer:
      'During the early morning hours of designated Shahi Snan (royal bath) days, the inner pools of Ramkund (Nashik) and Kushavarta Kund (Trimbakeshwar) are reserved exclusively for the sadhus, akhadas, and mahants according to strict historical precedence. General pilgrims are directed to adjoining ghats along the Godavari river, and entry into the main kund is opened to the public only after the akhada processions conclude.',
    category: 'Rituals & Bathing',
  },
  {
    question: 'How far is Trimbakeshwar from Nashik, and how do I travel between them?',
    marathiQuestion: 'नाशिक ते त्र्यंबकेश्वर अंतर किती आहे आणि प्रवास कसा करावा?',
    answer:
      'Trimbakeshwar is approximately 28 kilometres southwest of Nashik along State Highway 30 (Nashik-Trimbak Road). On normal days, the drive takes 45–60 minutes via MSRTC buses, private cabs, or auto-rickshaws. During peak Kumbh days, private vehicular movement is heavily restricted, and dedicated government shuttle buses operate between designated outer ring transit points.',
    category: 'Travel & Stay',
  },
  {
    question: 'What accommodation options are available for pilgrims and families?',
    marathiQuestion: 'भाविकांसाठी राहण्याची काय सोय उपलब्ध असते?',
    answer:
      'Options include established hotels and lodges in Nashik city, MTDC holiday resorts (Grape County, Trimbakeshwar), community dharamshalas, mutts, and temple guest houses. For peak Parvani days, the government administration establishes massive temporary tent cities (Sadhugram and Nagarika-gram) equipped with drinking water, modular sanitation, and medical booths. Early reservation is essential.',
    category: 'Travel & Stay',
  },
  {
    question: 'What health precautions and documents should elderly visitors carry?',
    marathiQuestion: 'ज्येष्ठ नागरिकांनी कोणती खबरदारी घ्यावी?',
    answer:
      'Always carry personal government identification (Aadhaar or Passport), emergency contact slips written in English and Marathi in clothing pockets, sufficient prescription medications for at least 7 days, comfortable non-slip walking footwear, and electrolyte rehydration salts. Seek out designated Senior Citizen Holding Enclosures if fatigued.',
    category: 'Safety & Facilities',
  },
  {
    question: 'How do I reach Nashik by train, air, or road?',
    marathiQuestion: 'नाशिकला कसे पोहोचावे?',
    answer:
      'By train: Nashik Road (NK) is a major station on the Central Railway line, well connected to Mumbai (CSMT, Dadar, Thane), Pune, Delhi, and Nagpur. By road: Connected via the 6-lane Mumbai-Nashik Expressway (NH 160) and Pune-Nashik Highway (NH 60). By air: Ozar Airport (ISK) offers limited domestic flights; Mumbai International Airport (BOM) is approximately 175 km away with frequent cab and train transfers.',
    category: 'Travel & Stay',
  },
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    service: 'Police Control Room (Nashik City)',
    number: '112 / 0253-2305200',
    department: 'Nashik City Police Commissionerate',
    note: '24/7 central emergency response for law, order, and lost persons.',
  },
  {
    service: 'Trimbakeshwar Police Station',
    number: '0253-294233',
    department: 'Nashik Rural Police',
    note: 'Direct helpline for Trimbakeshwar temple town and Kushavarta sector.',
  },
  {
    service: 'Medical Emergency & Ambulance',
    number: '108',
    department: 'Maharashtra Emergency Medical Services (MEMS)',
    note: 'Toll-free 24-hour centralized ambulance dispatch with GPS tracking.',
  },
  {
    service: 'Nashik District Civil Hospital',
    number: '0253-2572038',
    department: 'Public Health Department, Maharashtra',
    note: 'Primary multi-specialty government emergency trauma centre (Trimbak Naka).',
  },
  {
    service: 'Disaster Management Cell',
    number: '0253-2317151',
    department: 'Nashik Collectorate & District Disaster Authority',
    note: 'Monitors river discharge, severe weather advisories, and crowd surges.',
  },
  {
    service: 'Fire & Rescue Services',
    number: '101 / 0253-2591101',
    department: 'NMC Fire Brigade',
    note: 'Equipped with river rescue boats and life-saving divers along Godavari ghats.',
  },
  {
    service: 'Women Helpline',
    number: '1091 / 181',
    department: 'Maharashtra State Commission for Women',
    note: 'Dedicated safety and guidance helpline for women travelers.',
  },
  {
    service: 'Divisional Commissioner Helpdesk',
    number: '0253-2578500',
    department: 'Divisional Commissioner Office, Nashik Division',
    note: 'Administrative headquarters for Simhastha Kumbh governance.',
  },
];
