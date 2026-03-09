// ============================================
// MOON MANSIONS DATA
// ============================================
const MOON_MANSIONS = [
    { number: 1, name: "Al-Sharatain", startDegree: 0, essence: "Movement, change, beginning. Burst of energy. Use of force.", goodFor: "Traveling, healing. Beginnings. Doing business. Gardening. Taking care of hair and nails.", badFor: "Love and friendship. Hiring employees." },
    { number: 2, name: "Al-Butain", startDegree: 12.857, essence: "Effort, courage, will and energy. Conflict.", goodFor: "Trade and finding treasures. Seeking favor from those in a position of authority. Sowing seeds. Traveling by land. Using fire, hunting.", badFor: "Love and friendship. Traveling by water. Being passive. Planting trees." },
    { number: 3, name: "Al-Thurayya", startDegree: 25.714, essence: "Abundance, prosperity, success, determination. Great capacity for work.", goodFor: "Art and creativity. Love. Using fire, hunting. Work and study. Business and commerce. Alchemy.", badFor: "Marriage, travel by water, friendship, gardening." },
    { number: 4, name: "Al-Dabaran", startDegree: 38.571, essence: "Enmity, struggle, conflict, argument, anger. Violent passion.", goodFor: "Work, craftsmanship, trade. Defeating enemies, removing obstacles.", badFor: "Marriage, friendship. Real estate, building. Wells and mines. Traveling by sea." },
    { number: 5, name: "Al-Haqa", startDegree: 51.429, essence: "Essentially benefic. Focus on mind and intellect.", goodFor: "Studies and other intellectual activities. Artistic activities. Seeking a favour from a superior. Traveling, especially by water. Return from a journey. Washing and cutting hair.", badFor: "Social activities, collective work." },
    { number: 6, name: "Al-Hana", startDegree: 64.286, essence: "Attraction, but also opposition.", goodFor: "Love and friendship, relationships. Business. Making alliances.", badFor: "Gardening. Healing." },
    { number: 7, name: "Al-Dhira", startDegree: 77.143, essence: "Success, abundance, trust.", goodFor: "Business and trade. Obtaining the favour of superiors. Love, friendship. Healing. Washing and cutting hair.", badFor: "Law and justice." },
    { number: 8, name: "Al-Nathrah", startDegree: 90, essence: "Love, power, victory.", goodFor: "Love and marriage. Family life, friendship. Achievement of a goal. Travel by land. Healing.", badFor: "Hiring employees." },
    { number: 9, name: "Al-Tarf", startDegree: 102.857, essence: "Disappointment, discord. Defence.", goodFor: "Defending yourself from attacks.", badFor: "Health. Travel. Love and friendship. Gardening." },
    { number: 10, name: "Al-Jabhah", startDegree: 115.714, essence: "Recovery. Benevolence. Help against enemies.", goodFor: "Love and friendship. Social activities. Studies. Health, spirituality. Building.", badFor: "Traveling. Abuse of drugs and medications." },
    { number: 11, name: "Al-Zubrah", startDegree: 128.571, essence: "Power, gain and respect.", goodFor: "Profit and gain. Marriage. Travel. Promotion, making a request to a person in authority. Gardening. Cutting hair. Building. Actions that require courage.", badFor: "Health of women." },
    { number: 12, name: "Al-Sarfah", startDegree: 141.429, essence: "Conflict and confrontation. Obstacles. Rich harvest.", goodFor: "Gardening, agriculture, building. Sending messages. Service and work for others.", badFor: "Marriage, personal relationships. Sea journeys." },
    { number: 13, name: "Al-Awwa", startDegree: 154.286, essence: "Achievement of desire. Increase. Benevolence.", goodFor: "Love, especially sexual love. Trade and finances. Beginning of creative projects. Traveling. Gardening. Healing. Building. Cutting and washing hair.", badFor: "Overeating." },
    { number: 14, name: "Al-Simak", startDegree: 167.143, essence: "Movement, improvement, transition.", goodFor: "Romantic love, friendship. Moving house, leaving a job or a relationship. Healing. Traveling by sea. Gardening.", badFor: "Marriage. Traveling by land." },
    { number: 15, name: "Al-Ghafr", startDegree: 180, essence: "Prosperity. Discord. Focus on the material.", goodFor: "Business, money, wealth. Treasure hunting.", badFor: "Love and romantic relationships. Family matters. Traveling." },
    { number: 16, name: "Al-Zubana", startDegree: 192.857, essence: "Wealth and prosperity, but no love.", goodFor: "Trade, business, wealth, prosperity.", badFor: "Love, relationships. Traveling. Healing. Gardening." },
    { number: 17, name: "Al-Iklil", startDegree: 205.714, essence: "Prevented loss. Friendship.", goodFor: "Financial security. Friendship. Love and marriage. Building. Promotion. Healing. Cutting hair.", badFor: "Traveling. Risky commercial operations." },
    { number: 18, name: "Al-Qalb", startDegree: 218.571, essence: "Impending danger. Defence.", goodFor: "Building, farming. Treatment of stomach. Exposing enemies.", badFor: "Almost anything. Family matters. Excessive eating, or eating an unknown food." },
    { number: 19, name: "Al-Shaulah", startDegree: 231.429, essence: "Battle and besiegement. Loss and sadness.", goodFor: "Farming and gardening. Aggressive actions. Hunting.", badFor: "Business and commerce. Friendship. Family matters. Traveling by sea." },
    { number: 20, name: "Al-Na'am", startDegree: 244.286, essence: "Concentrated and controlled energy. Passions.", goodFor: "Travelling by land, collective effort and work. Dealing with animals, hunting. Building.", badFor: "Marriage. Financial matters." },
    { number: 21, name: "Al-Baldah", startDegree: 257.143, essence: "Enmity, argument and conflict.", goodFor: "Farming and gardening, building. Healing. Travel. Earnings.", badFor: "Marriage and personal relationships. Hiring employees." },
    { number: 22, name: "Sa'd Al-Dhabih", startDegree: 270, essence: "Speed, escape. Personal power.", goodFor: "Healing. Traveling. Escaping from difficult situations.", badFor: "Marriage. Financial matters, trade. Hiring employees." },
    { number: 23, name: "Sa'd Bula", startDegree: 282.857, essence: "Conflict, separation, freedom, healing.", goodFor: "Healing. Divorce. Obtaining freedom.", badFor: "Marriage and personal relationships." },
    { number: 24, name: "Sa'ad Al-Su'ud", startDegree: 295.714, essence: "Nurture and nutrition. Fulfilment.", goodFor: "Starting a new project. Love and marriage. Increasing income, commerce and finances. Building.", badFor: "Those in power. Travel by water." },
    { number: 25, name: "Sa'd Al-Akhbiyah", startDegree: 308.571, essence: "Growth and protection. Revenge.", goodFor: "Farming and gardening, protection of plants and crops. Studies and intellectual activities.", badFor: "Friendship, marriage. Conception and pregnancy." },
    { number: 26, name: "Al-Fargh Al-Awwal", startDegree: 321.429, essence: "Love and affection. Union.", goodFor: "Love and marriage, friendship. Health and healing. Traveling by land. Farming and gardening. Commerce.", badFor: "Sea journeys. Building." },
    { number: 27, name: "Al-Fargh Al-Thani", startDegree: 334.286, essence: "Income, connection, mischief.", goodFor: "Business and commerce. Healing. Farming and gardening.", badFor: "Building. Travel by sea. Starting a new project." },
    { number: 28, name: "Batn Al-Hut", startDegree: 347.143, essence: "Guidance and completion. Fruition.", goodFor: "Marriage. Business and commerce. Farming and gardening. Traveling.", badFor: "Health." }
];

// ============================================
// ZODIAC SIGNS DATA
// ============================================
const ZODIAC_SIGNS = [
    { name: "Aries", emoji: "♈", element: "fire" },
    { name: "Taurus", emoji: "♉", element: "earth" },
    { name: "Gemini", emoji: "♊", element: "air" },
    { name: "Cancer", emoji: "♋", element: "water" },
    { name: "Leo", emoji: "♌", element: "fire" },
    { name: "Virgo", emoji: "♍", element: "earth" },
    { name: "Libra", emoji: "♎", element: "air" },
    { name: "Scorpio", emoji: "♏", element: "water" },
    { name: "Sagittarius", emoji: "♐", element: "fire" },
    { name: "Capricorn", emoji: "♑", element: "earth" },
    { name: "Aquarius", emoji: "♒", element: "air" },
    { name: "Pisces", emoji: "♓", element: "water" }
];

// ============================================
// ZODIAC SIGN EXPLANATIONS
// ============================================
const ZODIAC_EXPLANATIONS = {
    "Aries": "An increase of activity, impetuosity, striving, and energetic action.\n\nThis Moon favors occupations which demand courage, decisiveness, swiftness and initiative, but anything which requires patience, diligence and diplomacy is likely to decline now.\n\nIt is a good time for athletics, and for solving problems by brainstorming.\n\nDental visits are not recommended on the Aries Moon.",
    "Taurus": "Patience, diligence, perseverance and practicality are on the increase.\n\nThe Moon in Taurus favors occupations which demand prolonged and persistent effort, but it is also good for complete rest in comfort and coziness.\n\nIt is a good time to treat plants. It is best to avoid undertaking anything which requires quickness, decisiveness and quick-wittedness.",
    "Gemini": "Sociability, cheerfulness and quick-wittedness are on the increase, and there is an interest in all kinds of information.\n\nThe Moon in Gemini favors study, intellectual pursuits, acquaintances, conferences and gatherings. However, heightened changeability and scattering your interests can prevent you from getting definite, tangible results.",
    "Cancer": "Increased emotions, vulnerability and touchiness.\n\nYour need for seclusion could become quite strong, and there is a desire to communicate only with those closest to you.\n\nIt is not a good idea to deal with large groups of people, or to appear on stage.\n\nYou may also want to care for others, or have others look after you.\n\nEmotional difficulties may also be an obstacle to business success.",
    "Leo": "The desire to be noticeable, appreciated, and to feel you are the centre of other people's attention will be dominant. Your emotions will be expressed vividly and openly.\n\nThis is a good time to perform and appear on stage, to play, create and do everything which inspires you and lets you express your inner self.",
    "Virgo": "Attention towards details is on the increase, with a tendency to fault-finding, cleanliness and neatness.\n\nIt is a good time to undertake routine, painstaking work, and to search for and correct errors.\n\nYour body may be more intolerant of low-grade food and harmful substances, and this is a good day to begin a diet.",
    "Libra": "Increased sociability, interest in new acquaintances, a desire for mutual understanding.\n\nPartnerships are in focus. Good for social gatherings, celebrations, business meetings and a romantic rendezvous.\n\nHowever, your ability to make decisions suffers because people are prone to doubts and hesitation now.",
    "Scorpio": "An emotionally difficult time. There is increased jealousy, greediness, envy and other negative feelings. The colors of the world turn black and white.\n\nSexuality and sensuality go up and strong, powerful emotions run high, whilst diplomacy and tact will noticeably decline. However, it is a good time for any occupation which needs intensity and total devotion.",
    "Sagittarius": "Generosity, openness, optimism and the desire to give advice and share experience are all increased.\n\nThere is a heightened interest in travel and foreign countries, and any activities and recreations taking place in the open air.\n\nIt is a suitable time for large-scale plans but not for any occupations which require attention to detail.",
    "Capricorn": "There is an increase in formality, strictness and exactitude, with a tendency to reserve and distance.\n\nRules and regulations are dominant.\n\nIt is a suitable time for all activities which require extra responsibility and discipline, but you shouldn't rely on someone's receptivity or emotional pliability.",
    "Aquarius": "There is an increased interest in knowledge, and a need to communicate with like minded individuals.\n\nAt the same time, your desire for freedom and independence is strengthened, and you will want to establish your own rules.\n\nIt is a good period for reading, study and scientific pursuits. However, jobs which bore you, will go from bad to worse now.",
    "Pisces": "This brings an increase of emotions and a receptivity to other peoples' feelings.\n\nYour emotions predominate over common sense, so it is better to do things which require imagination and inspiration, rather than reason and cool logic.\n\nYour body may be more responsive than usual to alcohol, drugs and medicines, so beware of overdoses."
};

// ============================================
// MOON PHASE EXPLANATIONS
// ============================================
const PHASE_EXPLANATIONS = {
    "New Moon": "A time of lull, the completion of old activities and the preparation of new ones. Everything is in decline now - life energy, emotions and physiological activity.\n\nFor this reason, any projects which require significant effort are not advisable now. This is an inauspicious time for people with low blood pressure and those prone to depression.",
    "Waxing Crescent": "An auspicious time for affairs and businesses which are at an expansive stage of development, as well as for new beginnings.\n\nA growth phase: stimulate the growth of plants which bear fruit above the earth now, and cut hair to accelerate its growth.",
    "First Quarter": "A stressful period of time when there is a strong desire to accomplish something, to change, and to show oneself. However, before undertaking anything, first stop and think: is it really needed?\n\nObstacles multiply at this time and contradictions sharpen. Plans developed under this influence often turn out to be unrealistic because people tend to overvalue their abilities.",
    "Waxing Gibbous": "An auspicious time for affairs and businesses which are at an expansive stage of development, as well as for new beginnings.\n\nA growth phase: stimulate the growth of plants which bear fruit above the earth now, and cut hair to accelerate its growth.",
    "Full Moon": "A period of excess when everything in nature brims over. Emotions, psychic energy, physiological activity - everything is at its maximum.\n\nThis is the time of increased creativity, but with those who are prone to high blood pressure, epilepsy or over excitement, this Full Moon period can be problematic.",
    "Waning Gibbous": "The waning Moon is most beneficial for matters at a stage of consolidation, conservation and completion. It hampers growth and helps to remove anything not desirable.\n\nCutting hair now will make it grow more slowly. Plant or replant plants which have fruits under the ground.",
    "Last Quarter": "A stressful and unsettled period. Your ambitions are being stirred up and there is a desire to do something very important and show everyone how cool you are.\n\nHowever, the best way forward is to think thoroughly before doing anything and to direct your energy towards jobs planned earlier, rather than ideas which have just sprung into your head now.",
    "Waning Crescent": "The waning Moon is most beneficial for matters at a stage of consolidation, conservation and completion. It hampers growth and helps to remove anything not desirable.\n\nCutting hair now will make it grow more slowly. Plant or replant plants which have fruits under the ground."
};

// ============================================
// RETROGRADE EXPLANATIONS
// ============================================
const RETROGRADE_EXPLANATIONS = {
    "Mercury": {
        retrograde: "Mercury is retrograde.\n\nIt isn't a good time for decisions and agreements, they might be like a house built on sand. People are prone to mistakes and errors. Do not buy Mercury-related things, like computers or office equipment, as they can have hidden defects.\n\nOn the other hand, this is a good time for finding new, alternative approaches, even if they would normally seem totally crazy to you.",
        direct: "Mercury is direct.\n\nSo you should not blame it for your mistakes!"
    },
    "Venus": {
        retrograde: "Venus is retrograde.\n\nRelationships and financial matters may be revisited. Old flames may reappear. It's not the best time for starting new relationships, getting married, or making major purchases related to beauty and luxury.\n\nThis is a good time for reflection on what you truly value.",
        direct: "Venus is direct, favoring love, beauty, and financial matters."
    },
    "Mars": {
        retrograde: "Mars is retrograde.\n\nEnergy levels may feel lower than usual. It's not a good time to start new projects requiring assertive action. Conflicts from the past may resurface.\n\nUse this time to reassess your goals and strategies rather than pushing forward aggressively.",
        direct: "Mars is direct, supporting action and initiative."
    },
    "Jupiter": {
        retrograde: "Jupiter is retrograde.\n\nGrowth and expansion slow down. This is a time for inner growth rather than outward expansion. Plans for travel, education, and legal matters may face delays.\n\nUse this period to develop your philosophy and inner wisdom.",
        direct: "Jupiter is direct, supporting growth and expansion."
    },
    "Saturn": {
        retrograde: "Saturn is retrograde.\n\nStructures and responsibilities are being reviewed. Authority figures may seem less reliable. This is a time to reassess your long-term goals and the foundations you've built.\n\nKarmic lessons from the past may resurface for resolution.",
        direct: "Saturn is direct, supporting discipline and structure."
    },
    "Uranus": {
        retrograde: "Uranus is retrograde.\n\nThe desire for change turns inward. You may feel restless but unable to pinpoint why. This is a time for internal revolution rather than external disruption.\n\nReflect on where you need more freedom in your life.",
        direct: "Uranus is direct, supporting innovation and change."
    },
    "Neptune": {
        retrograde: "Neptune is retrograde.\n\nIllusions may be stripped away, revealing uncomfortable truths. Dreams and spiritual pursuits turn inward. Creativity may feel blocked but is actually deepening.\n\nThis is a good time for meditation and spiritual reflection.",
        direct: "Neptune is direct, supporting dreams and intuition."
    },
    "Pluto": {
        retrograde: "Pluto is retrograde.\n\nDeep transformation turns inward. Power dynamics in relationships may shift. Secrets from the past may come to light.\n\nThis is a powerful time for psychological self-examination and releasing old patterns.",
        direct: "Pluto is direct, supporting transformation and empowerment."
    }
};


// ============================================
// CITIES DATA
// ============================================
const CITIES = [
    { name: "New York, USA", lat: 40.7128, lon: -74.0060, tz: "America/New_York" },
    { name: "Los Angeles, USA", lat: 34.0522, lon: -118.2437, tz: "America/Los_Angeles" },
    { name: "Chicago, USA", lat: 41.8781, lon: -87.6298, tz: "America/Chicago" },
    { name: "London, UK", lat: 51.5074, lon: -0.1278, tz: "Europe/London" },
    { name: "Paris, France", lat: 48.8566, lon: 2.3522, tz: "Europe/Paris" },
    { name: "Berlin, Germany", lat: 52.5200, lon: 13.4050, tz: "Europe/Berlin" },
    { name: "Rome, Italy", lat: 41.9028, lon: 12.4964, tz: "Europe/Rome" },
    { name: "Madrid, Spain", lat: 40.4168, lon: -3.7038, tz: "Europe/Madrid" },
    { name: "Amsterdam, Netherlands", lat: 52.3676, lon: 4.9041, tz: "Europe/Amsterdam" },
    { name: "Brussels, Belgium", lat: 50.8503, lon: 4.3517, tz: "Europe/Brussels" },
    { name: "Vienna, Austria", lat: 48.2082, lon: 16.3738, tz: "Europe/Vienna" },
    { name: "Zurich, Switzerland", lat: 47.3769, lon: 8.5417, tz: "Europe/Zurich" },
    { name: "Stockholm, Sweden", lat: 59.3293, lon: 18.0686, tz: "Europe/Stockholm" },
    { name: "Copenhagen, Denmark", lat: 55.6761, lon: 12.5683, tz: "Europe/Copenhagen" },
    { name: "Oslo, Norway", lat: 59.9139, lon: 10.7522, tz: "Europe/Oslo" },
    { name: "Helsinki, Finland", lat: 60.1699, lon: 24.9384, tz: "Europe/Helsinki" },
    { name: "Moscow, Russia", lat: 55.7558, lon: 37.6173, tz: "Europe/Moscow" },
    { name: "Istanbul, Turkey", lat: 41.0082, lon: 28.9784, tz: "Europe/Istanbul" },
    { name: "Athens, Greece", lat: 37.9838, lon: 23.7275, tz: "Europe/Athens" },
    { name: "Dubai, UAE", lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai" },
    { name: "Mumbai, India", lat: 19.0760, lon: 72.8777, tz: "Asia/Kolkata" },
    { name: "New Delhi, India", lat: 28.6139, lon: 77.2090, tz: "Asia/Kolkata" },
    { name: "Singapore", lat: 1.3521, lon: 103.8198, tz: "Asia/Singapore" },
    { name: "Hong Kong", lat: 22.3193, lon: 114.1694, tz: "Asia/Hong_Kong" },
    { name: "Tokyo, Japan", lat: 35.6762, lon: 139.6503, tz: "Asia/Tokyo" },
    { name: "Seoul, South Korea", lat: 37.5665, lon: 126.9780, tz: "Asia/Seoul" },
    { name: "Beijing, China", lat: 39.9042, lon: 116.4074, tz: "Asia/Shanghai" },
    { name: "Shanghai, China", lat: 31.2304, lon: 121.4737, tz: "Asia/Shanghai" },
    { name: "Sydney, Australia", lat: -33.8688, lon: 151.2093, tz: "Australia/Sydney" },
    { name: "Melbourne, Australia", lat: -37.8136, lon: 144.9631, tz: "Australia/Melbourne" },
    { name: "Auckland, New Zealand", lat: -36.8485, lon: 174.7633, tz: "Pacific/Auckland" },
    { name: "São Paulo, Brazil", lat: -23.5505, lon: -46.6333, tz: "America/Sao_Paulo" },
    { name: "Mexico City, Mexico", lat: 19.4326, lon: -99.1332, tz: "America/Mexico_City" },
    { name: "Buenos Aires, Argentina", lat: -34.6037, lon: -58.3816, tz: "America/Argentina/Buenos_Aires" },
    { name: "Cairo, Egypt", lat: 30.0444, lon: 31.2357, tz: "Africa/Cairo" },
    { name: "Johannesburg, South Africa", lat: -26.2041, lon: 28.0473, tz: "Africa/Johannesburg" },
    { name: "Lagos, Nigeria", lat: 6.5244, lon: 3.3792, tz: "Africa/Lagos" },
    { name: "Toronto, Canada", lat: 43.6532, lon: -79.3832, tz: "America/Toronto" },
    { name: "Vancouver, Canada", lat: 49.2827, lon: -123.1207, tz: "America/Vancouver" },
    { name: "Casablanca, Morocco", lat: 33.5731, lon: -7.5898, tz: "Africa/Casablanca" },
    { name: "Rabat, Morocco", lat: 34.0209, lon: -6.8416, tz: "Africa/Casablanca" },
    { name: "Marrakech, Morocco", lat: 31.6295, lon: -7.9811, tz: "Africa/Casablanca" },
    { name: "Fes, Morocco", lat: 34.0331, lon: -5.0003, tz: "Africa/Casablanca" },
    { name: "Tangier, Morocco", lat: 35.7595, lon: -5.8340, tz: "Africa/Casablanca" },
    { name: "Agadir, Morocco", lat: 30.4278, lon: -9.5981, tz: "Africa/Casablanca" }
];

// ============================================
// STATE
// ============================================
let LAT = 33.5731;
let LON = -7.5898;
let locationName = "Casablanca, Morocco";
let locationTimezone = "Africa/Casablanca";
let selectedDate = new Date();
let currentMonth = new Date();
let dayDialogDate = null;

// ============================================
// TIME FORMATTING
// ============================================
function formatTimeInTZ(date) {
    try {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: locationTimezone
        });
    } catch (e) {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }
}

function formatDateInTZ(date) {
    try {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: locationTimezone
        });
    } catch (e) {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }
}

function formatShortDateInTZ(date) {
    try {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            timeZone: locationTimezone
        });
    } catch (e) {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    }
}

// Fix 3: Format date for card labels (smaller, shorter format)
function formatCardDateLabel(date) {
    try {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            timeZone: locationTimezone
        });
    } catch (e) {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    }
}

// ============================================
// MEEUS ASTRONOMICAL ENGINE
// ============================================
const DEG = Math.PI / 180;
const RAD = 180 / Math.PI;

function toJD(date) {
    let y = date.getUTCFullYear();
    let m = date.getUTCMonth() + 1;
    const d = date.getUTCDate() +
        (date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600) / 24;
    if (m <= 2) { y--; m += 12; }
    const A = Math.floor(y / 100);
    const B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
}

function fromJD(jd) {
    const z = Math.floor(jd + 0.5);
    const f = jd + 0.5 - z;
    let A;
    if (z < 2299161) A = z;
    else {
        const alpha = Math.floor((z - 1867216.25) / 36524.25);
        A = z + 1 + alpha - Math.floor(alpha / 4);
    }
    const B = A + 1524;
    const C = Math.floor((B - 122.1) / 365.25);
    const D = Math.floor(365.25 * C);
    const E = Math.floor((B - D) / 30.6001);
    const dayFrac = B - D - Math.floor(30.6001 * E) + f;
    const month = E < 14 ? E - 1 : E - 13;
    const year = month > 2 ? C - 4716 : C - 4715;
    const day = Math.floor(dayFrac);
    const hFrac = (dayFrac - day) * 24;
    const hours = Math.floor(hFrac);
    const minFrac = (hFrac - hours) * 60;
    const minutes = Math.floor(minFrac);
    const seconds = Math.floor((minFrac - minutes) * 60);
    return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
}

function normalize(angle) {
    let a = angle % 360;
    if (a < 0) a += 360;
    return a;
}

// ---- Sun Position ----
function sunLongitude(jd) {
    const T = (jd - 2451545.0) / 36525;
    const L0 = normalize(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
    const M = normalize(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
    const Mr = M * DEG;
    const C = (1.914602 - 0.004817 * T) * Math.sin(Mr)
        + (0.019993 - 0.000101 * T) * Math.sin(2 * Mr)
        + 0.000289 * Math.sin(3 * Mr);
    return normalize(L0 + C);
}

// ---- Moon Position (Meeus Ch. 47) ----
const LUNAR_L_TERMS = [
    [0,0,1,0,6288774],[2,0,-1,0,1274027],[2,0,0,0,658314],
    [0,0,2,0,213618],[0,1,0,0,-185116],[0,0,0,2,-114332],
    [2,0,-2,0,58793],[2,-1,-1,0,57066],[2,0,1,0,53322],
    [2,-1,0,0,45758],[0,1,-1,0,-40923],[1,0,0,0,-34720],
    [0,1,1,0,-30383],[2,0,0,-2,15327],[0,0,1,2,-12528],
    [0,0,1,-2,10980],[4,0,-1,0,10675],[0,0,3,0,10034],
    [4,0,-2,0,8548],[2,1,-1,0,-7888],[2,1,0,0,-6766],
    [1,0,-1,0,-5163],[1,1,0,0,4987],[2,-1,1,0,4036],
    [2,0,2,0,3994],[4,0,0,0,3861],[2,0,-3,0,3665],
    [0,1,-2,0,-2689],[2,0,-1,2,-2602],[2,-1,-2,0,2390],
    [1,0,1,0,-2348],[2,-2,0,0,2236],[0,1,2,0,-2120],
    [0,2,0,0,-2069],[2,-2,-1,0,2048],[2,0,1,-2,-1773],
    [2,0,0,2,-1595],[4,-1,-1,0,1215],[0,0,2,2,-1110],
    [3,0,-1,0,-892],[2,1,1,0,-810],[4,-1,-2,0,759],
    [0,2,-1,0,-713],[2,2,-1,0,-700],[2,1,-2,0,691],
    [2,-1,0,-2,596],[4,0,1,0,549],[0,0,4,0,537],
    [4,-1,0,0,520],[1,0,-2,0,-487],[2,1,0,-2,-399],
    [0,0,2,-2,-381],[1,1,1,0,351],[3,0,-2,0,-340],
    [4,0,-3,0,330],[2,-1,2,0,327],[0,2,1,0,-323],
    [1,1,-1,0,299],[2,0,3,0,294]
];

function moonLongitude(jd) {
    const T = (jd - 2451545.0) / 36525;
    const Lp = normalize(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + T * T * T / 538841);
    const D = normalize(297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + T * T * T / 545868);
    const M = normalize(357.5291092 + 35999.0502909 * T - 0.0001536 * T * T);
    const Mp = normalize(134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + T * T * T / 69699);
    const F = normalize(93.2720950 + 483202.0175233 * T - 0.0036539 * T * T);
    const E = 1 - 0.002516 * T - 0.0000074 * T * T;
    let sumL = 0;
    for (const [Dm, Mm, Mpm, Fm, coeff] of LUNAR_L_TERMS) {
        const arg = (Dm * D + Mm * M + Mpm * Mp + Fm * F) * DEG;
        let c = coeff;
        if (Math.abs(Mm) === 1) c *= E;
        else if (Math.abs(Mm) === 2) c *= E * E;
        sumL += c * Math.sin(arg);
    }
    const A1 = normalize(119.75 + 131.849 * T);
    const A2 = normalize(53.09 + 479264.290 * T);
    sumL += 3958 * Math.sin(A1 * DEG);
    sumL += 1962 * Math.sin((Lp - F) * DEG);
    sumL += 318 * Math.sin(A2 * DEG);
    return normalize(Lp + sumL / 1000000);
}

// ---- Planetary Positions (JPL Keplerian Elements) ----
const PLANETS_DATA = {
    Mercury: { a:0.38709927, e:0.20563593, I:7.00497902, L:252.25032350, w:77.45779628, O:48.33076593, aR:0.00000037, eR:0.00001906, IR:-0.00594749, LR:149472.67411175, wR:0.16047689, OR:-0.12534081 },
    Venus: { a:0.72333566, e:0.00677672, I:3.39467605, L:181.97909950, w:131.60246718, O:76.67984255, aR:0.00000390, eR:-0.00004107, IR:-0.00078890, LR:58517.81538729, wR:0.00268329, OR:-0.27769418 },
    Earth: { a:1.00000261, e:0.01671123, I:-0.00001531, L:100.46457166, w:102.93768193, O:0, aR:0.00000562, eR:-0.00004392, IR:-0.01294668, LR:35999.37244981, wR:0.32327364, OR:0 },
    Mars: { a:1.52371034, e:0.09339410, I:1.84969142, L:-4.55343205, w:-23.94362959, O:49.55953891, aR:0.00001847, eR:0.00007882, IR:-0.00813131, LR:19140.30268499, wR:0.44441088, OR:-0.29257343 },
    Jupiter: { a:5.20288700, e:0.04838624, I:1.30439695, L:34.39644051, w:14.72847983, O:100.47390909, aR:-0.00011607, eR:-0.00013253, IR:-0.00183714, LR:3034.74612775, wR:0.21252668, OR:0.20469106 },
    Saturn: { a:9.53667594, e:0.05386179, I:2.48599187, L:49.95424423, w:92.59887831, O:113.66242448, aR:-0.00125060, eR:-0.00050991, IR:0.00193609, LR:1222.49362201, wR:-0.41897216, OR:-0.28867794 },
    Uranus: { a:19.18916464, e:0.04725744, I:0.77263783, L:313.23810451, w:170.95427630, O:74.01692503, aR:-0.00196176, eR:-0.00004397, IR:-0.00242939, LR:428.48202785, wR:0.40805281, OR:0.04240589 },
    Neptune: { a:30.06992276, e:0.00859048, I:1.77004347, L:-55.12002969, w:44.96476227, O:131.78422574, aR:0.00026291, eR:0.00005105, IR:0.00035372, LR:218.45945325, wR:-0.32241464, OR:-0.00508664 },
    Pluto: { a:39.48211675, e:0.24882730, I:17.14001206, L:238.92903833, w:224.06891629, O:110.30393684, aR:-0.00031596, eR:0.00005170, IR:0.00004818, LR:145.20780515, wR:-0.04062942, OR:-0.01183482 }
};

function solveKepler(M, e) {
    let E = M;
    for (let i = 0; i < 30; i++) {
        const dE = (M - (E - e * Math.sin(E))) / (1 - e * Math.cos(E));
        E += dE;
        if (Math.abs(dE) < 1e-12) break;
    }
    return E;
}

function heliocentricXYZ(el, T) {
    const a = el.a + el.aR * T, e = el.e + el.eR * T;
    const I = (el.I + el.IR * T) * DEG;
    const L = normalize(el.L + el.LR * T);
    const w = normalize(el.w + el.wR * T);
    const O = normalize(el.O + el.OR * T);
    const Mval = normalize(L - w) * DEG;
    const ww = normalize(w - O) * DEG;
    const Or = O * DEG;
    const Eval = solveKepler(Mval, e);
    const xp = a * (Math.cos(Eval) - e);
    const yp = a * Math.sqrt(1 - e * e) * Math.sin(Eval);
    const cosO = Math.cos(Or), sinO = Math.sin(Or);
    const cosI = Math.cos(I), sinI = Math.sin(I);
    const cosw = Math.cos(ww), sinw = Math.sin(ww);
    return {
        x: (cosO * cosw - sinO * sinw * cosI) * xp + (-cosO * sinw - sinO * cosw * cosI) * yp,
        y: (sinO * cosw + cosO * sinw * cosI) * xp + (-sinO * sinw + cosO * cosw * cosI) * yp,
        z: (sinw * sinI) * xp + (cosw * sinI) * yp,
    };
}

function planetGeoLongitude(planet, jd) {
    const T = (jd - 2451545.0) / 36525;
    const earth = heliocentricXYZ(PLANETS_DATA.Earth, T);
    const pl = heliocentricXYZ(PLANETS_DATA[planet], T);
    return normalize(Math.atan2(pl.y - earth.y, pl.x - earth.x) * RAD);
}

// ---- Retrograde Detection (Computed) ----
function isPlanetRetrograde(planet, jd) {
    const l1 = planetGeoLongitude(planet, jd - 0.5);
    const l2 = planetGeoLongitude(planet, jd + 0.5);
    let diff = l2 - l1;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    return diff < 0;
}

function findRetrogradePeriod(planet, jd) {
    if (!isPlanetRetrograde(planet, jd)) return null;
    let sJD = jd;
    while (isPlanetRetrograde(planet, sJD) && sJD > jd - 250) sJD -= 2;
    if (!isPlanetRetrograde(planet, sJD)) {
        let lo = sJD, hi = sJD + 2;
        for (let i = 0; i < 24; i++) {
            const mid = (lo + hi) / 2;
            if (isPlanetRetrograde(planet, mid)) hi = mid; else lo = mid;
        }
        sJD = hi;
    }
    let eJD = jd;
    while (isPlanetRetrograde(planet, eJD) && eJD < jd + 250) eJD += 2;
    if (!isPlanetRetrograde(planet, eJD)) {
        let lo = eJD - 2, hi = eJD;
        for (let i = 0; i < 24; i++) {
            const mid = (lo + hi) / 2;
            if (isPlanetRetrograde(planet, mid)) lo = mid; else hi = mid;
        }
        eJD = lo;
    }
    return { start: fromJD(sJD), end: fromJD(eJD) };
}

// ---- Void of Course (astronomy-engine based, Traditional/Classical) ----
const VOC_PLANETS_AE = [
    Astronomy.Body.Sun, Astronomy.Body.Mercury, Astronomy.Body.Venus,
    Astronomy.Body.Mars, Astronomy.Body.Jupiter, Astronomy.Body.Saturn,
    Astronomy.Body.Uranus, Astronomy.Body.Neptune, Astronomy.Body.Pluto
];
const VOC_MAJOR_ASPECTS = [0, 60, 90, 120, 180, 240, 270, 300];

function aeMoonLon(d) { return Astronomy.EclipticGeoMoon(d).lon; }
function aePlanetLon(body, d) {
    const v = Astronomy.GeoVector(body, d, true);
    return Astronomy.Ecliptic(v).elon;
}
function aeSignIdx(lon) { return Math.floor(((lon % 360) + 360) % 360 / 30); }
function aeSignedDelta(a, b) { return ((a - b) % 360 + 360) % 360; }
function aeUnwrapNear(raw, near) { return raw + 360 * Math.round((near - raw) / 360); }

function aeFindIngresses(start, end) {
    const results = [];
    const STEP = 30 * 60000;
    let ps = aeSignIdx(aeMoonLon(start));
    let t = start.getTime() + STEP;
    while (t <= end.getTime()) {
        const d = new Date(t);
        const s = aeSignIdx(aeMoonLon(d));
        if (s !== ps) {
            let lo = t - STEP, hi = t;
            for (let i = 0; i < 20; i++) {
                const mid = (lo + hi) / 2;
                if (aeSignIdx(aeMoonLon(new Date(mid))) === ps) lo = mid; else hi = mid;
            }
            results.push({ time: new Date(hi), signIndex: s });
        }
        ps = s;
        t += STEP;
    }
    return results;
}

function aeFindLastAspect(signEntry, ingressTime) {
    const STEP = 120000;
    const entryMs = signEntry.getTime();
    const endMs = ingressTime.getTime();
    let lastAspectMs = null;
    let lastAspectBody = null;

    const BODY_NAMES = ['Sun','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'];

    for (let bi = 0; bi < VOC_PLANETS_AE.length; bi++) {
        const body = VOC_PLANETS_AE[bi];
        const pts = [];
        let t = entryMs;
        let prevRel = null;
        while (t <= endMs) {
            const d = new Date(t);
            const rawRel = aeSignedDelta(aeMoonLon(d), aePlanetLon(body, d));
            const rel = (prevRel === null) ? rawRel : aeUnwrapNear(rawRel, prevRel);
            pts.push({ t, rel });
            prevRel = rel;
            t += STEP;
        }
        if (pts[pts.length - 1].t < endMs) {
            const d = new Date(endMs);
            const rawRel = aeSignedDelta(aeMoonLon(d), aePlanetLon(body, d));
            const rel = aeUnwrapNear(rawRel, prevRel === null ? rawRel : prevRel);
            pts.push({ t: endMs, rel });
        }

        for (let i = 0; i < pts.length - 1; i++) {
            const p0 = pts[i], p1 = pts[i + 1];
            const segMin = Math.min(p0.rel, p1.rel);
            const segMax = Math.max(p0.rel, p1.rel);
            if (segMax - segMin < 1e-9) continue;
            for (const target of VOC_MAJOR_ASPECTS) {
                const kStart = Math.ceil((segMin - target) / 360);
                const kEnd = Math.floor((segMax - target) / 360);
                for (let k = kStart; k <= kEnd; k++) {
                    const level = target + 360 * k;
                    let v0 = p0.rel - level, v1 = p1.rel - level;
                    if (Math.abs(v0) < 1e-9) {
                        if (lastAspectMs === null || p0.t > lastAspectMs) { lastAspectMs = p0.t; lastAspectBody = BODY_NAMES[bi]; }
                        continue;
                    }
                    if (Math.abs(v1) < 1e-9) {
                        if (lastAspectMs === null || p1.t > lastAspectMs) { lastAspectMs = p1.t; lastAspectBody = BODY_NAMES[bi]; }
                        continue;
                    }
                    if (v0 * v1 > 0) continue;
                    let loT = p0.t, hiT = p1.t, loRel = p0.rel, hiRel = p1.rel, loV = v0;
                    for (let j = 0; j < 24; j++) {
                        const midT = (loT + hiT) / 2;
                        const midDate = new Date(midT);
                        const rawMid = aeSignedDelta(aeMoonLon(midDate), aePlanetLon(body, midDate));
                        const midRel = aeUnwrapNear(rawMid, (loRel + hiRel) / 2);
                        const midV = midRel - level;
                        if (loV * midV <= 0) { hiT = midT; hiRel = midRel; }
                        else { loT = midT; loRel = midRel; loV = midV; }
                    }
                    const exactMs = (loT + hiT) / 2;
                    if (lastAspectMs === null || exactMs > lastAspectMs) { lastAspectMs = exactMs; lastAspectBody = BODY_NAMES[bi]; }
                }
            }
        }
    }
    return lastAspectMs ? { time: new Date(lastAspectMs), planet: lastAspectBody } : null;
}

// ============================================
// INTERFACE FUNCTIONS (matching existing UI)
// ============================================
const MANSION_SIZE = 360 / 28;

function getMoonLongitude(date) {
    return moonLongitude(toJD(date));
}

function getMoonPhaseAngle(date) {
    const jd = toJD(date);
    return normalize(moonLongitude(jd) - sunLongitude(jd));
}

function getPhaseInfo(date) {
    const phase = getMoonPhaseAngle(date);
    if (phase < 6 || phase >= 354) return { name: "New Moon", emoji: "🌑" };
    if (phase < 84) return { name: "Waxing Crescent", emoji: "🌒" };
    if (phase < 96) return { name: "First Quarter", emoji: "🌓" };
    if (phase < 174) return { name: "Waxing Gibbous", emoji: "🌔" };
    if (phase < 186) return { name: "Full Moon", emoji: "🌕" };
    if (phase < 264) return { name: "Waning Gibbous", emoji: "🌖" };
    if (phase < 276) return { name: "Last Quarter", emoji: "🌗" };
    return { name: "Waning Crescent", emoji: "🌘" };
}

function getIllumination(date) {
    const phase = getMoonPhaseAngle(date);
    return Math.round((1 - Math.cos(phase * DEG)) / 2 * 100);
}

function findExactPhaseTime(date, targetPhase) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    const startJD = toJD(startOfDay);
    const endJD = toJD(endOfDay);
    
    const elongation = (jd) => normalize(moonLongitude(jd) - sunLongitude(jd));
    
    for (let jd = startJD; jd <= endJD; jd += 1/24) {
        let e1 = elongation(jd) - targetPhase;
        let e2 = elongation(jd + 1/24) - targetPhase;
        if (e1 > 180) e1 -= 360; if (e1 < -180) e1 += 360;
        if (e2 > 180) e2 -= 360; if (e2 < -180) e2 += 360;
        
        if (e1 * e2 <= 0 && Math.abs(e1 - e2) < 90) {
            let lo = jd, hi = jd + 1/24;
            for (let i = 0; i < 30; i++) {
                const mid = (lo + hi) / 2;
                let em = elongation(mid) - targetPhase;
                if (em > 180) em -= 360; if (em < -180) em += 360;
                if (em * e1 > 0) lo = mid; else hi = mid;
            }
            const exactTime = fromJD((lo + hi) / 2);
            if (exactTime >= startOfDay && exactTime <= endOfDay) {
                return exactTime;
            }
        }
    }
    return null;
}

function getMoonMansion(longitude) {
    const mansionIndex = Math.floor(((longitude % 360) + 360) % 360 / MANSION_SIZE);
    return MOON_MANSIONS[mansionIndex % 28];
}

function getZodiacSign(longitude) {
    const signIndex = Math.floor(((longitude % 360) + 360) % 360 / 30);
    return ZODIAC_SIGNS[signIndex % 12];
}

function findMansionTransitions(date) {
    const transitions = [];
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    const startJD = toJD(startOfDay);
    const endJD = toJD(endOfDay);
    const step = 1 / 24;
    
    let jd = startJD;
    let currentMansion = getMoonMansion(moonLongitude(jd));
    let periodStartJD = jd;
    
    while (jd < endJD) {
        jd += step;
        const mansion = getMoonMansion(moonLongitude(jd));
        if (mansion.number !== currentMansion.number) {
            let lo = jd - step, hi = jd;
            for (let i = 0; i < 20; i++) {
                const mid = (lo + hi) / 2;
                if (getMoonMansion(moonLongitude(mid)).number !== currentMansion.number) hi = mid;
                else lo = mid;
            }
            const tJD = (lo + hi) / 2;
            transitions.push({
                mansion: currentMansion,
                startTime: fromJD(periodStartJD),
                endTime: fromJD(tJD)
            });
            currentMansion = mansion;
            periodStartJD = tJD;
        }
    }
    transitions.push({
        mansion: currentMansion,
        startTime: fromJD(periodStartJD),
        endTime: fromJD(endJD)
    });
    return transitions;
}

function findSignTransitions(date) {
    const transitions = [];
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    const startJD = toJD(startOfDay);
    const endJD = toJD(endOfDay);
    const step = 1 / 24;
    
    let jd = startJD;
    let currentSign = getZodiacSign(moonLongitude(jd));
    let periodStartJD = jd;
    
    while (jd < endJD) {
        jd += step;
        const sign = getZodiacSign(moonLongitude(jd));
        if (sign.name !== currentSign.name) {
            let lo = jd - step, hi = jd;
            for (let i = 0; i < 20; i++) {
                const mid = (lo + hi) / 2;
                if (getZodiacSign(moonLongitude(mid)).name !== currentSign.name) hi = mid;
                else lo = mid;
            }
            const tJD = (lo + hi) / 2;
            transitions.push({
                sign: currentSign,
                startTime: fromJD(periodStartJD),
                endTime: fromJD(tJD)
            });
            currentSign = sign;
            periodStartJD = tJD;
        }
    }
    transitions.push({
        sign: currentSign,
        startTime: fromJD(periodStartJD),
        endTime: fromJD(endJD)
    });
    return transitions;
}

// VOC cache and worker pipeline (non-blocking main thread)
const VOC_DAY_MS = 24 * 60 * 60 * 1000;
const VOC_PRECALC_RADIUS = 45;
const vocCache = {};
const vocPendingCallbacks = new Map();
let vocPrecalcWindow = { min: null, max: null, tz: null };
let vocRenderToken = 0;
let vocWorker = null;

function getVOCDayStartMs(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
}

function getVOCCacheKeyFromDayStart(dayStartMs) {
    return `${new Date(dayStartMs).toISOString()}_${locationTimezone}`;
}

function ensureVOCWorker() {
    if (vocWorker) return vocWorker;

    const workerSource = `
        importScripts('https://cdn.jsdelivr.net/npm/astronomy-engine@2.1.19/astronomy.browser.min.js');

        const DAY_MS = 24 * 60 * 60 * 1000;
        const VOC_PLANETS = [
            Astronomy.Body.Sun, Astronomy.Body.Mercury, Astronomy.Body.Venus,
            Astronomy.Body.Mars, Astronomy.Body.Jupiter, Astronomy.Body.Saturn,
            Astronomy.Body.Uranus, Astronomy.Body.Neptune, Astronomy.Body.Pluto
        ];
        const BODY_NAMES = ['Sun','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'];
        const VOC_MAJOR_ASPECTS = [0, 60, 90, 120, 180, 240, 270, 300];
        const dayCache = new Map();

        function moonLon(d) { return Astronomy.EclipticGeoMoon(d).lon; }
        function planetLon(body, d) {
            const v = Astronomy.GeoVector(body, d, true);
            return Astronomy.Ecliptic(v).elon;
        }
        function signIdx(lon) { return Math.floor(((lon % 360) + 360) % 360 / 30); }
        function signedDelta(a, b) { return ((a - b) % 360 + 360) % 360; }
        function unwrapNear(raw, near) { return raw + 360 * Math.round((near - raw) / 360); }

        function findIngresses(start, end) {
            const results = [];
            const STEP = 30 * 60000;
            let prevSign = signIdx(moonLon(start));
            let t = start.getTime() + STEP;

            while (t <= end.getTime()) {
                const d = new Date(t);
                const s = signIdx(moonLon(d));
                if (s !== prevSign) {
                    let lo = t - STEP;
                    let hi = t;
                    for (let i = 0; i < 20; i++) {
                        const mid = (lo + hi) / 2;
                        if (signIdx(moonLon(new Date(mid))) === prevSign) lo = mid;
                        else hi = mid;
                    }
                    results.push({ time: new Date(hi), signIndex: s });
                }
                prevSign = s;
                t += STEP;
            }
            return results;
        }

        function findLastAspect(signEntry, ingressTime) {
            const STEP = 120000;
            const entryMs = signEntry.getTime();
            const endMs = ingressTime.getTime();
            let lastAspectMs = null;
            let lastAspectBody = null;

            for (let bi = 0; bi < VOC_PLANETS.length; bi++) {
                const body = VOC_PLANETS[bi];
                const pts = [];
                let t = entryMs;
                let prevRel = null;

                while (t <= endMs) {
                    const d = new Date(t);
                    const rawRel = signedDelta(moonLon(d), planetLon(body, d));
                    const rel = (prevRel === null) ? rawRel : unwrapNear(rawRel, prevRel);
                    pts.push({ t, rel });
                    prevRel = rel;
                    t += STEP;
                }

                if (pts[pts.length - 1].t < endMs) {
                    const d = new Date(endMs);
                    const rawRel = signedDelta(moonLon(d), planetLon(body, d));
                    const rel = unwrapNear(rawRel, prevRel === null ? rawRel : prevRel);
                    pts.push({ t: endMs, rel });
                }

                for (let i = 0; i < pts.length - 1; i++) {
                    const p0 = pts[i];
                    const p1 = pts[i + 1];
                    const segMin = Math.min(p0.rel, p1.rel);
                    const segMax = Math.max(p0.rel, p1.rel);
                    if (segMax - segMin < 1e-9) continue;

                    for (const target of VOC_MAJOR_ASPECTS) {
                        const kStart = Math.ceil((segMin - target) / 360);
                        const kEnd = Math.floor((segMax - target) / 360);

                        for (let k = kStart; k <= kEnd; k++) {
                            const level = target + 360 * k;
                            let v0 = p0.rel - level;
                            let v1 = p1.rel - level;

                            if (Math.abs(v0) < 1e-9) {
                                if (lastAspectMs === null || p0.t > lastAspectMs) {
                                    lastAspectMs = p0.t;
                                    lastAspectBody = BODY_NAMES[bi];
                                }
                                continue;
                            }
                            if (Math.abs(v1) < 1e-9) {
                                if (lastAspectMs === null || p1.t > lastAspectMs) {
                                    lastAspectMs = p1.t;
                                    lastAspectBody = BODY_NAMES[bi];
                                }
                                continue;
                            }
                            if (v0 * v1 > 0) continue;

                            let loT = p0.t;
                            let hiT = p1.t;
                            let loRel = p0.rel;
                            let hiRel = p1.rel;
                            let loV = v0;

                            for (let j = 0; j < 24; j++) {
                                const midT = (loT + hiT) / 2;
                                const midDate = new Date(midT);
                                const rawMid = signedDelta(moonLon(midDate), planetLon(body, midDate));
                                const midRel = unwrapNear(rawMid, (loRel + hiRel) / 2);
                                const midV = midRel - level;

                                if (loV * midV <= 0) {
                                    hiT = midT;
                                    hiRel = midRel;
                                } else {
                                    loT = midT;
                                    loRel = midRel;
                                    loV = midV;
                                }
                            }

                            const exactMs = (loT + hiT) / 2;
                            if (lastAspectMs === null || exactMs > lastAspectMs) {
                                lastAspectMs = exactMs;
                                lastAspectBody = BODY_NAMES[bi];
                            }
                        }
                    }
                }
            }

            return lastAspectMs ? { time: new Date(lastAspectMs), planet: lastAspectBody } : null;
        }

        function computeDayPeriods(dayStartMs) {
            if (dayCache.has(dayStartMs)) return dayCache.get(dayStartMs);

            const dayStart = new Date(dayStartMs);
            const dayEnd = new Date(dayStartMs + DAY_MS - 1);
            const pad = 5 * 864e5;
            const scanStart = new Date(dayStartMs - pad);
            const scanEnd = new Date(dayEnd.getTime() + pad);
            const ingresses = findIngresses(scanStart, scanEnd);

            const periods = [];
            for (let i = 1; i < ingresses.length; i++) {
                const prevIng = ingresses[i - 1];
                const currIng = ingresses[i];
                const result = findLastAspect(prevIng.time, currIng.time);
                const vocStart = result ? result.time : prevIng.time;
                const vocEnd = currIng.time;

                if (vocEnd > dayStart && vocStart < dayEnd) {
                    const clippedStart = vocStart < dayStart ? dayStart : vocStart;
                    const clippedEnd = vocEnd > dayEnd ? dayEnd : vocEnd;
                    periods.push({
                        startMs: clippedStart.getTime(),
                        endMs: clippedEnd.getTime(),
                        lastAspectPlanet: result ? result.planet : 'Unknown'
                    });
                }
            }

            dayCache.set(dayStartMs, periods);
            return periods;
        }

        self.onmessage = (event) => {
            const data = event.data || {};
            if (data.type !== 'computeDay') return;

            const periods = computeDayPeriods(data.dayStartMs);
            self.postMessage({
                type: 'vocDayResult',
                cacheKey: data.cacheKey,
                dayStartMs: data.dayStartMs,
                periods
            });
        };
    `;

    const workerUrl = URL.createObjectURL(new Blob([workerSource], { type: 'application/javascript' }));
    vocWorker = new Worker(workerUrl);
    URL.revokeObjectURL(workerUrl);

    vocWorker.onmessage = (event) => {
        const data = event.data || {};
        if (data.type !== 'vocDayResult' || !data.cacheKey) return;

        vocCache[data.cacheKey] = data.periods || [];
        const callbacks = vocPendingCallbacks.get(data.cacheKey) || [];
        vocPendingCallbacks.delete(data.cacheKey);
        callbacks.forEach((cb) => cb(vocCache[data.cacheKey]));

        if (dayDialogDate && getVOCDayStartMs(dayDialogDate) === data.dayStartMs) {
            const dayDialog = document.getElementById('day-dialog');
            if (dayDialog && dayDialog.style.display === 'flex') {
                updateDayDialogContent();
            }
        }
    };

    return vocWorker;
}

function requestVOCForDate(date, onReady) {
    const dayStartMs = getVOCDayStartMs(date);
    const cacheKey = getVOCCacheKeyFromDayStart(dayStartMs);

    if (vocCache[cacheKey]) {
        if (onReady) onReady(vocCache[cacheKey]);
        return true;
    }

    if (vocPendingCallbacks.has(cacheKey)) {
        if (onReady) vocPendingCallbacks.get(cacheKey).push(onReady);
        return false;
    }

    vocPendingCallbacks.set(cacheKey, onReady ? [onReady] : []);
    ensureVOCWorker().postMessage({ type: 'computeDay', dayStartMs, cacheKey });
    return false;
}

// Pre-calculate around center date in center-out order (worker thread)
function precalcVOCRange(centerDate, radius = VOC_PRECALC_RADIUS) {
    if (vocPrecalcWindow.tz !== locationTimezone) {
        vocPrecalcWindow = { min: null, max: null, tz: locationTimezone };
    }

    const centerDayStartMs = getVOCDayStartMs(centerDate);
    const minTarget = centerDayStartMs - radius * VOC_DAY_MS;
    const maxTarget = centerDayStartMs + radius * VOC_DAY_MS;

    if (vocPrecalcWindow.min !== null && minTarget >= vocPrecalcWindow.min && maxTarget <= vocPrecalcWindow.max) {
        return;
    }

    for (let offset = 0; offset <= radius; offset++) {
        const forward = centerDayStartMs + offset * VOC_DAY_MS;
        requestVOCForDate(new Date(forward));

        if (offset > 0) {
            const backward = centerDayStartMs - offset * VOC_DAY_MS;
            requestVOCForDate(new Date(backward));
        }
    }

    if (vocPrecalcWindow.min === null || minTarget < vocPrecalcWindow.min) vocPrecalcWindow.min = minTarget;
    if (vocPrecalcWindow.max === null || maxTarget > vocPrecalcWindow.max) vocPrecalcWindow.max = maxTarget;
    vocPrecalcWindow.tz = locationTimezone;
}

function getMoonVOCForDay(date) {
    const dayStartMs = getVOCDayStartMs(date);
    const cacheKey = getVOCCacheKeyFromDayStart(dayStartMs);

    if (!vocCache[cacheKey]) {
        requestVOCForDate(date, () => {
            const dayDialog = document.getElementById('day-dialog');
            if (dayDialog && dayDialog.style.display === 'flex' && dayDialogDate) {
                if (getVOCDayStartMs(dayDialogDate) === dayStartMs) {
                    updateDayDialogContent();
                }
            }
        });
        return [];
    }

    return vocCache[cacheKey].map((p) => ({
        start: new Date(p.startMs),
        end: new Date(p.endMs),
        lastAspectPlanet: p.lastAspectPlanet
    }));
}

// VOC loader - non-blocking and cache-first
function updateVOCAsync(date) {
    const vocCard = document.getElementById('voc-card');
    const vocStatus = document.getElementById('voc-status');
    const vocTiming = document.getElementById('voc-timing');
    const vocTimes = document.getElementById('voc-times');

    const renderToken = ++vocRenderToken;
    const dayStartMs = getVOCDayStartMs(date);
    const cacheKey = getVOCCacheKeyFromDayStart(dayStartMs);

    const safeRender = (periods) => {
        if (renderToken !== vocRenderToken) return;
        renderVOC(periods, vocCard, vocStatus, vocTiming, vocTimes);
    };

    if (vocCache[cacheKey]) {
        safeRender(vocCache[cacheKey]);
    } else {
        requestVOCForDate(date, safeRender);
    }

    precalcVOCRange(date, VOC_PRECALC_RADIUS);
}

function renderVOC(vocPeriods, vocCard, vocStatus, vocTiming, vocTimes) {
    if (vocPeriods.length > 0) {
        vocCard.classList.add('voc-active');
        vocStatus.textContent = '⚠ VOC Active';
        vocStatus.className = 'voc-status active';
        vocTiming.style.display = 'block';
        vocTimes.innerHTML = vocPeriods.map((p) => {
            const start = p.startMs ? new Date(p.startMs) : p.start;
            const end = p.endMs ? new Date(p.endMs) : p.end;
            return `
                <div class="voc-period-item">
                    ${formatTimeInTZ(start)} - ${formatTimeInTZ(end)}
                    <br><small>Last aspect: ${p.lastAspectPlanet}</small>
                </div>
            `;
        }).join('');
    } else {
        vocCard.classList.remove('voc-active');
        vocStatus.textContent = '✓ Clear';
        vocStatus.className = 'voc-status inactive';
        vocTiming.style.display = 'none';
        vocTimes.innerHTML = '';
    }
}


const ALL_PLANETS_LIST = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
const PLANET_EMOJIS = { Mercury: '☿', Venus: '♀', Mars: '♂', Jupiter: '♃', Saturn: '♄', Uranus: '⛢', Neptune: '♆', Pluto: '♇' };

function isMercuryRetrograde(date) {
    return isPlanetRetrograde('Mercury', toJD(date));
}

function getRetrogradePlanets(date) {
    const retro = [];
    for (const planet of ALL_PLANETS_LIST) {
        const jd = toJD(date);
        if (isPlanetRetrograde(planet, jd)) {
            const period = findRetrogradePeriod(planet, jd);
            retro.push({
                planet: planet,
                emoji: PLANET_EMOJIS[planet],
                retroStart: period ? period.start : date,
                retroEnd: period ? period.end : date
            });
        }
    }
    return retro;
}

function getMoonRiseSet(date) {
    const jd = toJD(date);
    const phase = normalize(moonLongitude(jd) - sunLongitude(jd));
    const phaseOffset = (phase / 360) * 24 * 60;
    
    const baseRise = new Date(date);
    baseRise.setHours(18, 30, 0, 0);
    const baseSet = new Date(date);
    baseSet.setHours(6, 45, 0, 0);
    
    const rise = new Date(baseRise.getTime() + phaseOffset * 60 * 1000);
    const set = new Date(baseSet.getTime() + phaseOffset * 60 * 1000);
    
    return { rise, set };
}

async function getLocationByIP() {
    const fallbackTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    const toNumber = (value) => {
        const num = Number(value);
        return Number.isFinite(num) ? num : null;
    };

    const apis = [
        {
            url: 'https://ipapi.co/json/',
            parse: (data) => {
                const lat = toNumber(data.latitude);
                const lon = toNumber(data.longitude);
                if (lat === null || lon === null) return null;
                return {
                    lat,
                    lon,
                    name: `${data.city || 'Unknown'}, ${data.country_name || data.country || ''}`.replace(/,\s*$/, ''),
                    timezone: data.timezone || fallbackTimezone
                };
            }
        },
        {
            url: 'https://ipwho.is/',
            parse: (data) => {
                if (data.success === false) return null;
                const lat = toNumber(data.latitude);
                const lon = toNumber(data.longitude);
                if (lat === null || lon === null) return null;
                return {
                    lat,
                    lon,
                    name: `${data.city || 'Unknown'}, ${data.country || ''}`.replace(/,\s*$/, ''),
                    timezone: data.timezone?.id || fallbackTimezone
                };
            }
        },
        {
            url: 'https://freeipapi.com/api/json',
            parse: (data) => {
                const lat = toNumber(data.latitude);
                const lon = toNumber(data.longitude);
                if (lat === null || lon === null) return null;
                return {
                    lat,
                    lon,
                    name: `${data.cityName || 'Unknown'}, ${data.countryName || ''}`.replace(/,\s*$/, ''),
                    timezone: data.timeZone || fallbackTimezone
                };
            }
        }
    ];

    for (const api of apis) {
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 4000);
            const response = await fetch(api.url, { signal: controller.signal });
            clearTimeout(timeout);
            if (!response.ok) continue;
            const data = await response.json();
            const result = api.parse(data);
            if (result) return result;
        } catch (e) {
            console.log('IP API failed:', api.url, e.message);
        }
    }

    // Browser geolocation fallback
    try {
        const pos = await new Promise((resolve, reject) => {
            if (!navigator.geolocation) return reject(new Error('No geolocation'));
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
        });

        const lat = toNumber(pos.coords.latitude);
        const lon = toNumber(pos.coords.longitude);
        if (lat !== null && lon !== null) {
            let nearest = CITIES[0];
            let minDist = Infinity;
            CITIES.forEach((city) => {
                const d = Math.pow(city.lat - lat, 2) + Math.pow(city.lon - lon, 2);
                if (d < minDist) {
                    minDist = d;
                    nearest = city;
                }
            });
            return { lat, lon, name: nearest.name, timezone: nearest.tz };
        }
    } catch (e) {
        console.log('Geolocation fallback failed:', e.message);
    }

    // Timezone-based fallback
    const tzMatch = CITIES.find(c => c.tz === fallbackTimezone);
    if (tzMatch) {
        return { lat: tzMatch.lat, lon: tzMatch.lon, name: tzMatch.name, timezone: tzMatch.tz };
    }

    return null;
}

// ============================================
// STAR BACKGROUND
// ============================================
function createStarBackground() {
    const container = document.getElementById('star-background');
    if (!container) return;
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        star.style.setProperty('--delay', Math.random() * 5 + 's');
        container.appendChild(star);
    }
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            createShootingStar(container);
        }
    }, 3000);
}

function createShootingStar(container) {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = Math.random() * 70 + '%';
    star.style.top = Math.random() * 30 + '%';
    container.appendChild(star);
    setTimeout(() => star.remove(), 1000);
}

async function initLocationSelector() {
    const locationSelect = document.getElementById('location-select');
    if (!locationSelect) return;
    
    const detectOption = document.createElement('option');
    detectOption.value = 'detect';
    detectOption.textContent = '📍 Detecting your location...';
    locationSelect.appendChild(detectOption);
    
    CITIES.forEach((city, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = city.name;
        locationSelect.appendChild(option);
    });
    
    const ipLocation = await getLocationByIP();
    
    if (ipLocation) {
        detectOption.textContent = `📍 ${ipLocation.name} (Auto-detected)`;
        detectOption.dataset.lat = String(ipLocation.lat);
        detectOption.dataset.lon = String(ipLocation.lon);
        detectOption.dataset.name = ipLocation.name;
        detectOption.dataset.tz = ipLocation.timezone;
        
        const savedLocation = localStorage.getItem('selectedLocation');
        const savedIndex = Number.parseInt(savedLocation ?? '', 10);
        const hasValidSavedCity = Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < CITIES.length;

        if (savedLocation === 'detect' || !hasValidSavedCity) {
            LAT = ipLocation.lat;
            LON = ipLocation.lon;
            locationName = ipLocation.name;
            locationTimezone = ipLocation.timezone;
            locationSelect.value = 'detect';
            localStorage.setItem('selectedLocation', 'detect');
            updateCurrentTime();
            updateDailyView();
            updateMonthlyCalendar();
        } else {
            locationSelect.value = String(savedIndex);
            updateLocationFromCity(savedIndex);
        }
    } else {
        detectOption.textContent = '📍 Select your location ▼';
        detectOption.disabled = true;
        const savedLocation = localStorage.getItem('selectedLocation');
        if (savedLocation && savedLocation !== 'detect') {
            const savedIndex = parseInt(savedLocation);
            if (savedIndex >= 0 && savedIndex < CITIES.length) {
                locationSelect.value = savedIndex;
                updateLocationFromCity(savedIndex);
            }
        }
        // No default — user must select from dropdown
    }
    
    locationSelect.addEventListener('change', (e) => {
        const value = e.target.value;
        if (value === 'detect') {
            const option = locationSelect.querySelector('option[value="detect"]');
            if (option && option.dataset.lat) {
                LAT = parseFloat(option.dataset.lat);
                LON = parseFloat(option.dataset.lon);
                locationName = option.dataset.name;
                locationTimezone = option.dataset.tz || Intl.DateTimeFormat().resolvedOptions().timeZone;
                localStorage.setItem('selectedLocation', 'detect');
                updateCurrentTime();
                updateDailyView();
                updateMonthlyCalendar();
            }
        } else {
            const index = parseInt(value);
            updateLocationFromCity(index);
            localStorage.setItem('selectedLocation', index);
        }
    });
}

function updateLocationFromCity(cityIndex) {
    const city = CITIES[cityIndex];
    if (city) {
        LAT = city.lat;
        LON = city.lon;
        locationName = city.name;
        locationTimezone = city.tz;
        updateCurrentTime();
        updateDailyView();
        updateMonthlyCalendar();
    }
}

function updateCurrentTime() {
    document.getElementById('current-date').textContent = formatDateInTZ(new Date());
    document.getElementById('current-time').textContent = formatTimeInTZ(new Date());
}

function updateDailyView() {
    const date = selectedDate;
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    document.getElementById('selected-date').textContent = formatDateInTZ(date);
    document.getElementById('return-today').style.display = isToday ? 'none' : 'block';
    
    // Fix 3: Update card date labels
    const cardDateLabel = formatCardDateLabel(date);
    document.getElementById('phase-card-date').textContent = cardDateLabel;
    document.getElementById('mansion-card-date').textContent = cardDateLabel;
    document.getElementById('zodiac-card-date').textContent = cardDateLabel;
    document.getElementById('voc-card-date').textContent = cardDateLabel;
    document.getElementById('retro-card-date').textContent = cardDateLabel;
    
    // Moon Phase
    const phaseInfo = getPhaseInfo(date);
    document.getElementById('phase-emoji').textContent = phaseInfo.emoji;
    document.getElementById('phase-name').textContent = phaseInfo.name;
    document.getElementById('illumination').textContent = getIllumination(date) + '% illuminated';
    
    // Exact phase time
    const exactPhaseBox = document.getElementById('exact-phase-box');
    const phaseTargets = [0, 90, 180, 270];
    const phaseNames = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];
    let nearestPhase = null;
    let nearestDiff = Infinity;
    phaseTargets.forEach((target, idx) => {
        const exactTime = findExactPhaseTime(date, target);
        if (exactTime) {
            const diff = Math.abs(exactTime.getTime() - date.getTime());
            if (diff < nearestDiff && diff < 24 * 60 * 60 * 1000) {
                nearestDiff = diff;
                nearestPhase = { name: phaseNames[idx], time: exactTime };
            }
        }
    });
    if (nearestPhase) {
        exactPhaseBox.style.display = 'block';
        document.getElementById('exact-phase-label').textContent = nearestPhase.name + ' at';
        document.getElementById('exact-phase-time').textContent = formatTimeInTZ(nearestPhase.time);
    } else {
        exactPhaseBox.style.display = 'none';
    }
    
    // Moon Rise/Set
    const riseSet = getMoonRiseSet(date);
    document.getElementById('moon-rise').textContent = formatTimeInTZ(riseSet.rise);
    document.getElementById('moon-set').textContent = formatTimeInTZ(riseSet.set);
    
    // Zodiac signs
    const signTransitions = findSignTransitions(date);
    const allSignsContainer = document.getElementById('all-signs-container');
    allSignsContainer.innerHTML = '';
    signTransitions.forEach(trans => {
        const startStr = formatTimeInTZ(trans.startTime);
        const endStr = formatTimeInTZ(trans.endTime);
        const signItem = document.createElement('div');
        signItem.className = 'sign-item';
        signItem.innerHTML = `
            <span class="sign-item-name" data-sign="${trans.sign.name}">${trans.sign.emoji} ${trans.sign.name}</span>
            <span class="sign-item-time">${startStr} - ${endStr}</span>
        `;
        signItem.querySelector('.sign-item-name').addEventListener('click', () => {
            showZodiacDialog(trans.sign.name);
        });
        allSignsContainer.appendChild(signItem);
    });
    
    // Moon Mansions
    const mansionTransitions = findMansionTransitions(date);
    const allMansionsContainer = document.getElementById('all-mansions-container');
    allMansionsContainer.innerHTML = '';
    mansionTransitions.forEach(trans => {
        const startStr = formatTimeInTZ(trans.startTime);
        const endStr = formatTimeInTZ(trans.endTime);
        const mansionItem = document.createElement('div');
        mansionItem.className = 'mansion-item';
        mansionItem.innerHTML = `
            <span class="mansion-item-name"><span class="mansion-number-badge">${trans.mansion.number}</span>${trans.mansion.name}</span>
            <span class="mansion-item-time">${startStr} - ${endStr}</span>
        `;
        mansionItem.querySelector('.mansion-item-name').addEventListener('click', () => {
            showMansionDialog(trans.mansion);
        });
        allMansionsContainer.appendChild(mansionItem);
    });
    
    // VOC - load asynchronously to keep UI responsive
    updateVOCAsync(date);
    
    // Retrograde planets
    const retroPlanets = getRetrogradePlanets(date);
    const retroContainer = document.getElementById('retro-planets');
    const mercuryStatus = document.getElementById('mercury-status');
    
    if (retroPlanets.length === 0) {
        retroContainer.innerHTML = '<div class="no-retro">No planets in retrograde</div>';
    } else {
        retroContainer.innerHTML = retroPlanets.map(p => `
            <div class="retro-planet" data-planet="${p.planet}">
                <span class="retro-emoji">${p.emoji}</span>
                <div class="retro-info">
                    <div class="retro-name">${p.planet} Retrograde</div>
                    <div class="retro-dates">${formatShortDateInTZ(p.retroStart)} - ${formatShortDateInTZ(p.retroEnd)}</div>
                </div>
            </div>
        `).join('');
        retroContainer.querySelectorAll('.retro-planet').forEach(el => {
            el.addEventListener('click', () => {
                showRetroDialog(el.dataset.planet, true);
            });
        });
    }
    
    const mercuryRetro = isMercuryRetrograde(date);
    if (!mercuryRetro) {
        mercuryStatus.style.display = 'block';
        mercuryStatus.textContent = '☿ Mercury is Direct ✓';
        mercuryStatus.onclick = () => showRetroDialog('Mercury', false);
    } else {
        mercuryStatus.style.display = 'none';
    }
}

function updateMonthlyCalendar() {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    document.getElementById('month-title').textContent = new Date(year, month).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
    
    const container = document.getElementById('calendar-days');
    container.innerHTML = '';
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startOffset = firstDay.getDay();
    
    for (let i = 0; i < startOffset; i++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day empty';
        container.appendChild(cell);
    }
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day, 12, 0, 0);
        const phaseInfo = getPhaseInfo(date);
        const signTransitions = findSignTransitions(date);
        const mansionTransitions = findMansionTransitions(date);
        const signEmojis = signTransitions.map(t => t.sign.emoji).join(' ');
        
        const cell = document.createElement('div');
        cell.className = 'calendar-day';
        const today = new Date();
        if (date.toDateString() === today.toDateString()) cell.classList.add('today');
        if (date.toDateString() === selectedDate.toDateString()) cell.classList.add('selected');
        
        cell.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-phase">${phaseInfo.emoji}</div>
            <div class="day-signs">${signEmojis}</div>
            <div class="day-mansions">${mansionTransitions.length > 1 ? mansionTransitions.length + ' mansions' : ''}</div>
        `;
        cell.addEventListener('click', () => showDayDialog(date));
        container.appendChild(cell);
    }
}

// ============================================
// DIALOG FUNCTIONS
// ============================================
function showMansionDialog(mansion) {
    document.getElementById('dialog-mansion-name').textContent = `${mansion.number}. ${mansion.name}`;
    document.getElementById('dialog-essence').textContent = mansion.essence;
    document.getElementById('dialog-good').textContent = mansion.goodFor;
    document.getElementById('dialog-bad').textContent = mansion.badFor;
    document.getElementById('mansion-dialog').style.display = 'flex';
}

function showDayDialog(date) {
    dayDialogDate = new Date(date);
    updateDayDialogContent();
    document.getElementById('day-dialog').style.display = 'flex';
}

// Fix 2: Updated day dialog with moon phase timing
function updateDayDialogContent() {
    const date = dayDialogDate;
    const phaseInfo = getPhaseInfo(date);
    const mansionTransitions = findMansionTransitions(date);
    const signTransitions = findSignTransitions(date);
    const vocPeriods = getMoonVOCForDay(date);
    const retroPlanets = getRetrogradePlanets(date);
    
    document.getElementById('day-dialog-title').textContent = formatDateInTZ(date);
    
    const itemsContainer = document.getElementById('day-dialog-items');
    itemsContainer.innerHTML = '';
    
    // Moon Phase with timing (Fix 2)
    const phaseTargets = [0, 90, 180, 270];
    const phaseNames = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];
    let exactPhaseInfo = null;
    phaseTargets.forEach((target, idx) => {
        const exactTime = findExactPhaseTime(date, target);
        if (exactTime) {
            exactPhaseInfo = { name: phaseNames[idx], time: exactTime };
        }
    });
    
    let phaseText = `${phaseInfo.name} - ${getIllumination(date)}% illuminated`;
    if (exactPhaseInfo) {
        phaseText += ` (${exactPhaseInfo.name} at ${formatTimeInTZ(exactPhaseInfo.time)})`;
    }
    
    const phaseItem = createDayDialogItem(
        phaseInfo.emoji,
        phaseText,
        () => showPhaseDialog(phaseInfo.name)
    );
    itemsContainer.appendChild(phaseItem);
    
    // Moon Mansions
    mansionTransitions.forEach(trans => {
        const mansionItem = createDayDialogItem(
            '🏛️',
            `${trans.mansion.number}. ${trans.mansion.name} (${formatTimeInTZ(trans.startTime)} - ${formatTimeInTZ(trans.endTime)})`,
            () => showMansionDialog(trans.mansion)
        );
        itemsContainer.appendChild(mansionItem);
    });
    
    // Moon Signs
    signTransitions.forEach(trans => {
        const signItem = createDayDialogItem(
            trans.sign.emoji,
            `Moon in ${trans.sign.name} (${formatTimeInTZ(trans.startTime)} - ${formatTimeInTZ(trans.endTime)})`,
            () => showZodiacDialog(trans.sign.name)
        );
        itemsContainer.appendChild(signItem);
    });
    
    // Moon Void of Course - Only show if there are VOC periods
    if (vocPeriods.length > 0) {
        vocPeriods.forEach(p => {
            const vocItem = createDayDialogItem(
                '⚠️',
                `Moon VOC: ${formatTimeInTZ(p.start)} - ${formatTimeInTZ(p.end)}`,
                () => showVOCDialog()
            );
            itemsContainer.appendChild(vocItem);
        });
    }
    
    // Retrograde planets
    if (retroPlanets.length > 0) {
        retroPlanets.forEach(p => {
            const retroItem = createDayDialogItem(
                p.emoji,
                `${p.planet} Retrograde`,
                () => showRetroDialog(p.planet, true)
            );
            itemsContainer.appendChild(retroItem);
        });
    } else {
        const retroItem = createDayDialogItem(
            '℞',
            'No planets in retrograde',
            null
        );
        itemsContainer.appendChild(retroItem);
    }
}

function createDayDialogItem(icon, text, onClick) {
    const item = document.createElement('div');
    item.className = 'day-dialog-item';
    if (onClick) item.style.cursor = 'pointer';
    item.innerHTML = `
        <span class="item-icon">${icon}</span>
        <span class="item-text">${text}</span>
        ${onClick ? '<span class="item-arrow">›</span>' : ''}
    `;
    if (onClick) item.addEventListener('click', onClick);
    return item;
}

function showVOCDialog() {
    document.getElementById('voc-dialog').style.display = 'flex';
}

function showPhaseDialog(phaseName) {
    document.getElementById('phase-dialog-title').textContent = phaseName;
    document.getElementById('phase-dialog-text').textContent = PHASE_EXPLANATIONS[phaseName] || 'No explanation available.';
    document.getElementById('phase-dialog').style.display = 'flex';
}

function showZodiacDialog(signName) {
    document.getElementById('zodiac-dialog-title').textContent = `Moon in ${signName}`;
    document.getElementById('zodiac-dialog-text').textContent = ZODIAC_EXPLANATIONS[signName] || 'No explanation available.';
    document.getElementById('zodiac-dialog').style.display = 'flex';
}

function showRetroDialog(planet, isRetrograde) {
    const info = RETROGRADE_EXPLANATIONS[planet];
    if (!info) return;
    document.getElementById('retro-dialog-title').textContent = isRetrograde ? `${planet} Retrograde` : `${planet} Direct`;
    document.getElementById('retro-dialog-text').textContent = isRetrograde ? info.retrograde : info.direct;
    document.getElementById('retro-dialog').style.display = 'flex';
}

// ============================================
// SMOOTH SWIPE NAVIGATION
// ============================================
function initSwipeNavigation() {
    document.querySelectorAll('.swipeable-card').forEach(card => {
        const prevBtn = card.querySelector('.swipe-btn.prev');
        const nextBtn = card.querySelector('.swipe-btn.next');
        
        function navigateDay(direction) {
            // Lock card height during transition to prevent size change
            const currentHeight = card.offsetHeight;
            const currentWidth = card.offsetWidth;
            card.style.minHeight = currentHeight + 'px';
            card.style.maxHeight = currentHeight + 'px';
            card.style.width = currentWidth + 'px';
            
            card.classList.remove('swipe-enter-left', 'swipe-enter-right', 'swiping-left', 'swiping-right');
            void card.offsetWidth;
            
            if (direction === 'next') {
                card.classList.add('swiping-left');
            } else {
                card.classList.add('swiping-right');
            }
            
            setTimeout(() => {
                selectedDate = new Date(selectedDate.getTime() + (direction === 'next' ? 1 : -1) * 24 * 60 * 60 * 1000);
                updateDailyView();
                
                card.classList.remove('swiping-left', 'swiping-right');
                void card.offsetWidth;
                card.classList.add(direction === 'next' ? 'swipe-enter-left' : 'swipe-enter-right');
                
                setTimeout(() => {
                    card.classList.remove('swipe-enter-left', 'swipe-enter-right');
                    // Release height/width lock after animation
                    card.style.minHeight = '';
                    card.style.maxHeight = '';
                    card.style.width = '';
                }, 350);
            }, 200);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateDay('prev');
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateDay('next');
            });
        }
        
        // Touch swipe - prevent page scroll during horizontal swipe
        let touchStartX = 0;
        let touchStartY = 0;
        let isSwiping = false;
        let swipeHandled = false;
        
        card.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
            touchStartY = e.changedTouches[0].clientY;
            isSwiping = false;
            swipeHandled = false;
        }, { passive: true });
        
        card.addEventListener('touchmove', (e) => {
            if (swipeHandled) {
                e.preventDefault();
                return;
            }
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = e.changedTouches[0].clientY - touchStartY;
            
            // If horizontal movement is dominant, prevent vertical scroll
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
                isSwiping = true;
                e.preventDefault();
            }
        }, { passive: false });
        
        card.addEventListener('touchend', (e) => {
            if (swipeHandled) return;
            const dx = e.changedTouches[0].clientX - touchStartX;
            
            if (isSwiping && Math.abs(dx) > 50) {
                swipeHandled = true;
                if (dx < 0) {
                    navigateDay('next');
                } else {
                    navigateDay('prev');
                }
            }
        }, { passive: true });
    });
}

// Day dialog swipe navigation
function initDayDialogSwipe() {
    const dayDialog = document.querySelector('.day-dialog-swipeable');
    if (!dayDialog) return;
    
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;
    
    dayDialog.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
        isSwiping = false;
    }, { passive: true });
    
    dayDialog.addEventListener('touchmove', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
            isSwiping = true;
            e.preventDefault();
        }
    }, { passive: false });
    
    dayDialog.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        
        if (isSwiping && Math.abs(dx) > 50) {
            if (dx < 0) {
                navigateDayDialogNext();
            } else {
                navigateDayDialogPrev();
            }
        }
    }, { passive: true });
}

function navigateDayDialogPrev() {
    if (dayDialogDate) {
        dayDialogDate = new Date(dayDialogDate.getTime() - 24 * 60 * 60 * 1000);
        updateDayDialogContent();
    }
}

function navigateDayDialogNext() {
    if (dayDialogDate) {
        dayDialogDate = new Date(dayDialogDate.getTime() + 24 * 60 * 60 * 1000);
        updateDayDialogContent();
    }
}

// ============================================
// DAY NAVIGATION
// ============================================
function navigateToPrevDay() {
    selectedDate = new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000);
    updateDailyView();
}

function navigateToNextDay() {
    selectedDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000);
    updateDailyView();
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createStarBackground();
    updateCurrentTime();
    updateDailyView();
    updateMonthlyCalendar();
    initLocationSelector();
    initSwipeNavigation();
    initDayDialogSwipe();
    setInterval(updateCurrentTime, 60000);
    
    // Warm VOC cache around current date in worker
    precalcVOCRange(selectedDate, VOC_PRECALC_RADIUS);
    
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab + '-view').classList.add('active');
        });
    });
    
    // Prev/Next Day buttons next to date
    document.getElementById('prev-day').addEventListener('click', navigateToPrevDay);
    document.getElementById('next-day').addEventListener('click', navigateToNextDay);
    
    // Return to today
    document.getElementById('return-today').addEventListener('click', () => {
        selectedDate = new Date();
        updateDailyView();
    });
    
    // Month navigation
    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        updateMonthlyCalendar();
    });
    
    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        updateMonthlyCalendar();
    });
    
    // Day dialog navigation buttons
    document.getElementById('day-dialog-prev').addEventListener('click', navigateDayDialogPrev);
    document.getElementById('day-dialog-next').addEventListener('click', navigateDayDialogNext);
    
    // Close dialogs
    const dialogClosers = [
        { close: 'close-mansion-dialog', overlay: 'mansion-dialog' },
        { close: 'close-day-dialog', overlay: 'day-dialog' },
        { close: 'close-voc-dialog', overlay: 'voc-dialog' },
        { close: 'close-phase-dialog', overlay: 'phase-dialog' },
        { close: 'close-zodiac-dialog', overlay: 'zodiac-dialog' },
        { close: 'close-mercury-dialog', overlay: 'mercury-dialog' },
        { close: 'close-retro-dialog', overlay: 'retro-dialog' }
    ];
    
    dialogClosers.forEach(({ close, overlay }) => {
        const closeBtn = document.getElementById(close);
        const overlayEl = document.getElementById(overlay);
        if (closeBtn) closeBtn.addEventListener('click', () => overlayEl.style.display = 'none');
        if (overlayEl) overlayEl.addEventListener('click', (e) => {
            if (e.target === overlayEl) overlayEl.style.display = 'none';
        });
    });
    
    // Phase click
    document.getElementById('phase-name').addEventListener('click', () => {
        const phaseInfo = getPhaseInfo(selectedDate);
        showPhaseDialog(phaseInfo.name);
    });
    
    // VOC click
    document.getElementById('voc-label').addEventListener('click', showVOCDialog);
    
    // Expand to daily view
    document.getElementById('expand-to-daily').addEventListener('click', () => {
        if (dayDialogDate) {
            selectedDate = new Date(dayDialogDate);
            document.getElementById('day-dialog').style.display = 'none';
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.querySelector('.tab-btn[data-tab="daily"]').classList.add('active');
            document.getElementById('daily-view').classList.add('active');
            updateDailyView();
        }
    });
});
