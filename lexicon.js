/* HOW TO ADD STUFF TO THE LEXICON
   Thefam, 3 Kizhult 30
   
   The lexicon is laid out like so:
   lexicon
     adj (adjectives)
       place of articulation
       manner of articulation
     adv (adverbs)
       evidential
     aux (auxiliaries)
       i
       ol
     color
     conjunction
       both
       clause (specific to clauses)
       noun (specific to noun phrases)
     idiom
     interjection
     noun
     number
       decimal
       senary
     participle
     post (postpositions)
     prefix
     pronoun
     suffix
       any
       aspect
       case
       number
       valency
       - any that convert between 2 different parts of speech like adjective -> verb would be under adj>verb
     verb
       experiencer intransitive
       experiencer transitive
       intransitive
       transitive
   
   Figure out where the new word should go, or where the old word already is
   Everything must be in the original romanization
   Most things are in English alphabetical order for simplicity, but this is not required
   
   An entry looks like this:
   "word": ["definition 1", "definition 2", ["property", "argument"], "definition 3"],
   Only definition 1 is required
   Currently recognized properties:
     archaic
       ["archaic", "other word"]
       redirects from this entry to another entry (example: becek)
     see also
       ["see also", "other word"]
       redirects to related word (example: met)
     example
       ["example", "Sajem Tan sentence", "English sentence"]
       gives an example usage (example: solm)
     etymology
       ["etymology", "comment"]
       gives an etymological comment (example: dan)
     suf-example
       ["suf-example", "word (English)", "word-with-suffix (English)"]
       gives an example of a suffix in use (example: meht)
     form
       ["form", "initial segment", "final segment"]
       auxiliaries only, specifies the parts before an after the vowel which don't change
     gloss
       ["gloss", "word"]
       specifies what should be displayed by the glosser (default is the first definition)
   Other properties may be added, but they will have no effect until you tell me about them
*/
var lexicon = {
  "adj": {
    // I'm putting these sections here to help us recognise that these are these specific terms. You may remove them if you see it necessary.
    "place of articulation": {
      "zmasatik": ["bilabial"],
      "jyslolthin": ["labiodental"],
      "tholxuhm": ["dental"],
      "selthim": ["alveolar"],
      "mulzhnyc": ["post-alveolar"],
      "thnivmesnelk": ["retroflex"],
      "dolzluhshic": ["palatal"],
      "vnajulm": ["velar"],
      "shneljac": ["uvular"],
      "zhnelvmec": ["pharyngeal"],
      "znelsyc": ["epiglottal"],
      "zledyzit": ["glottal"]
    },
    "manner of articulation": {
      "namycim": ["nasal"],
      "nalmycim": ["nasal", ["archaic", "namycim"]],
      "doljejolt": ["plosive"],
      "guhtesnelt": ["trill"],
      "slnulzhuhm": ["fricative"],
      "fnolfmit": ["approximant"],
      "snyslim": ["lateral fricative"],
      "znevmulc": ["lateral approximant"],
      "canolmoc": ["affricate"]
    },
    "cagyn": ["lazy", "lackadasical"],
    "can": ["bored"],
    "celk": ["lightened"],
    "cenetulnyslin": ["inconsistent", "spontaneous"],
    "cimuht": ["equal", "same"],
    "danec": ["borrowed", "copied", "imitated"],
    "dasnan": ["natural", "cosmic"],
    "decec": ["only"],
    "duhden": ["distracted"],
    "duhganmeht": ["circular", "circuitous"],
    "duht": ["big", "large", "grand", "major", "important"],
    "duhtmun": ["huge", "gigantic", "giant"],
    "dulm": ["old", "beautiful (especially of a female)"],
    "fat": ["thin (of a person)"],
    "femek": ["noetic"],
    "fmuhzhik": ["dry"],
    "gevmulk": ["underground", "subterranean", "chthonic"],
    "golden": ["rusted", "old (of an object)", "tarnished"],
    "gulk": ["sick"],
    "jafinmeht": ["melodramatic"],
    "jam": ["new"],
    "jelk": ["full"],
    "kak": ["darkened"],
    "kek": ["supplemental"],
    "ketit": ["bitter"],
    "ketoln": ["pungent"],
    "magolt": ["valuable"],
    "mam": ["female", "feminine"],
    "mehn": ["some", "any"],
    "men": ["normal", "average"],
    "menec": ["false, fake"],
    "met": ["falling", "collapsing", "tumbling (chaotic falling, like an stone bouncing many times as it falls down a hill, or a vase breaking when it hits after a simple ballistic fall)", ["see also", "znim"]],
    "molten": ["solid", "rigid", "stiff", "firm"],
    "muhxec": ["umami"],
    "nuhtit": ["sweet"],
    "nymem": ["clumsy"],
    "nynak": ["sour"],
    "sajem": ["common", "communal", "public"],
    "selset": ["cozy", "comfy"],
    "semet": ["numerical"],
    "shit": ["high-quality"],
    "shyxeht": ["arbitrary"],
    "simem": ["silent", "quiet", "calm", "sleepy", ["see also", "thneduht"]],
    "slek": ["happy"],
    "slik": ["correct"],
    "slitim": ["striped"],
    "slnam": ["grayscale", "black-and-white"],
    "slnuhm": ["gray", "grey", "dull", "indeterminate", "incomplete", "boring", "plain", "numinous"],
    "smit": ["overused", "cliche"],
    "snymmeht": ["cloudy", "overcast"],
    "snysuhn": ["fluffy"],
    "soljesolm": ["multimodal", "multipurpose", "proceding in many manners", "manifold"],
    "solm": ["fast", "swift", "quick (of moving objects)", ["example", "solm zanum zhimahnso.", "The feathered one is fast."], ["see also", "theln"]],
    "suhzhnolm": ["pleasant"],
    "tat": ["male", "masculine"],
    "temen": ["salty"],
    "thavolt": ["special"],
    "thefammeht": ["stony", "rocky"],
    "thefmin": ["forked"],
    "theln": ["fast", "quick (of processes/actions other than motion verbs)", ["example", "Kizhult theln fmyvuhkfeh tanzlulctucah.", "Bee coins words quickly."], ["see also", "solm"]],
    "thelnfemek": ["clever"],
    "thin": ["large (of a person)"],
    "thnelxmyt": ["flat"],
    "thnoln": ["free"],
    "tishnim": ["sleepy"],
    "tizholn": ["oceanic", "marine"],
    "tolthim": ["majestic"],
    "tyc": ["bad", ["see also", "ok"]],
    "vajem": ["exactly 1 of"],
    "van": ["odd", "strange", "weird", "absurd", "unusual", "pertaining to Sajem Tan"],
    "velvet": ["shy"],
    "viten": ["weak"],
    "vmelfelc": ["crazy"],
    "vnejyn": ["reflective", "mirror-like"],
    "vynit": ["long (time)", "slow", "delayed"],
    "xafec": ["fulvous"],
    "xatat": ["magnetic"],
    "xen": ["incorrect"],
    "xolt": ["real", "true"],
    "xulm": ["much", "many"],
    "xyt": ["all", "each", "every", "whole"],
    "xyttucmun": ["all-encompassing"],
    "zavan": ["ghostly", "ghastly", "spectral"],
    "zhnelm": ["bright"],
    "zlek": ["sad", "depressed"],
    "zlislym": ["creepy"],
    "znim": ["falling", ["see also", "met"]],
    "zhazhuhn": ["chaotic"],
    "zlolznysluln": ["immortal", "longevitous"],
    "znolzhen": ["weary"],
    "zulk": ["burned"],
    "zyshen": ["cute", "adorable", "beautiful", "pretty", "nice", "kind"]
  },
  "adv": {
    "evidential": {
      "femektholk": ["discovered by telepathy"],
      "kecyckic": ["learned via stalking on social media"],
      "kic": ["carefully discerned through protracted study"],
      "shan": ["hearsay via a living person"],
      "slet": ["traditional knowledge", "lore"],
      "sluln": ["based on faith/beliefs/subjective experiences"],
      "snat": ["learned via seconday/tertiary/etc. sources, especially writings"],
      "thec": ["deduced from sensory evidence"],
      "thef": [["archaic", "thec"], "deduced from sensory evidence"],
      "thmak": ["known through context"],
      "tholk": ["direct sensory evidence"],
      "voln": ["understood through the reversal of a previously deep belief"],
      "zolt": ["seem to", ["etymology", "zëtyt"]]
    },
    "cenetulnyslin": ["inconsistantly", "at random", "spontaniously"],
    "janan": ["it's funny that/how"],
    "janem": ["forcefully"],
    "nacen": ["also"],
    "nic": ["done in a giving way"],
    "sulk": ["actually", "on the contrary"],
    "theln": ["quickly"],
    "vajem": ["only"],
    "vyn": ["still", "yet", ["etymology", "vynit"]],
    "zeltyt": ["seemingly"],
    "zezholt": ["done with good intentions"]
  },
  "aux": {
    "i": {
      "dic": [["form", "d", "c"], "indicative"],
      "dit": [["form", "d", "t"], "reaffirm", ["example", "sesuhtsho dit theh.", "I am indeed singing."]],
      "fnit": [["form", "fn", "t"], "to be willing to"],
      "jit": [["form", "j", "t"], "must", "vital", "necessary"],
      "shik": [["form", "sh", "k"], "be able to", "can"],
      "sin": [["form", "s", "n"], "may", "let it be that", "imperative", ["see also", "golm"]],
      "sit": [["form", "s", "t"], "begin", "start"],
      "ximic": [["form", "xim", "c"], "continue"]
    },
    "ol": {
      "fmolk": [["form", "fm", "k"], "irrealis mood", "counterfactual", "conditional", "hypothetical", "if x fmolk were to happen then y"],
      "golm": [["form", "g", "m"], "be obligated to", "must", ["see also", "sin"]],
      "goln": [["form", "g", "n"], "try to", "attempt"],
      "golt": [["form", "g", "t"], "stop", "complete", "finish", "be done with"],
      "jol": [["form", "j", ""], "should", ["archaic", "jolm"]],
      "jolm": [["form", "j", "m"], "should"],
      "kolk": [["form", "k", "k"], "polar interogative", "yes-no question"],
      "molt": [["form", "m", "t"], "no", "not", "negative verb (like Finnish 'ei')", ["see also", "xeht"], ["see also", "uk"]],
      "shnoln": [["form", "shn", "n"], "it is possible that", "may", "maybe"],
      "slol": [["form", "sl", ""], "indicative", ["archaic", "dic"]]
    }
  },
  "color": {
    // Organised by color wheel, not alphabet
    "primary": {
      "gazhyn": ["green"],
      "nyfuln": ["purple"],
      "snitin": ["orange"]
    },
    "secondary": {
      "gafuln": ["blue", ["see also", "nyzhyn"]],
      "nyzhyn": ["blue", ["see also", "gafuln"]],
      "nytin": ["red", ["see also", "snifuln"]],
      "snifuln": ["red", ["see also", "nytin"]],
      "snizhyn": ["yellow", ["see also", "gatin"]],
      "gatin": ["yellow", ["see also", "snizhyn"]]
    },
    "tertiary": {
      "gagafuln": ["green-blue"],
      "nynyzhyn": ["purple-blue"],
      "nynytin": ["purple-red"],
      "snisnifuln": ["orange-red"],
      "snisnizhyn": ["orange-yellow"],
      "gagatin": ["green-yellow"]
    },
    "snymsoljem": ["white"],
    "gevmulksoljem": ["black"],
    "fnadycsoljem": ["clear", "transparant"],
    "thnamolkmahksoljem" : ["dark red"]
  },
  "conjunction": {
    "both": {
      "ahn": ["one of"],
      "jo": ["if", "implies", "therefore", ["example", "sesuhtfeh fmolk zhu jo telzlnolnfeh dic thehvmeh tulnah.", "If you sing, I'll cry."]],
      "ke": [["archaic", "keh"], "and"],
      "keh": ["and"],
      "nu": ["inclusive or", "at least one of these clauses is true", "at least one of these sub-noun phrases is the referent of the overall noun phrase", ["see also", "xok"]],
      "xok": ["one of", "xor", "exclusive or"]
    },
    "clause": {
      "mahn": ["when", "while", ["see also", "sno"]],
      "smah": ["but"],
      "tidyn": ["like", "similarly to", "occurring in comparable manner to"],
      "tyk": ["so", "as a result"]
    },
    "noun": {
      "kehtuc": ["for example"]
    }
  },
  "idiom": {
    "femekvah gyvnam": ["to consider", ["etymology", "to cook with one's thoughts"]],
    "fman tidyn gamyk": ["to stand in awe unable to move, like you've been petrified"],
    "jo tetanah": ["why not?", "let's do it!"],
    "midacum femekah": ["to be confused", ["etymology", "one's thoughts are a puzzle"]],
    "slet [main verb] dulc": ["once upon a time", "it was said of old"],
    "telzlnolnfeh tulnah": ["crying", "weeping"]
  },
  "interjection": {
    "jit": ["(extreme happiness)"],
    "jolfnim": ["huzzah"],
    "mik": ["whoa", "woah"],
    "shuht": ["stop talking and die"],
    "slik": ["yes", "okay"],
    "thnadyc": ["death"],
    "xen": ["no"]
  },
  "noun": {
    "becek": ["chicken", ["archaic", "decek"]],
    "cadelk": ["planet", ["example", "cadelk zanum kolk con Pluto om?", "Is Pluto a planet?"]],
    "canolc": ["month", ["example", "Divolmcanolc", "Month Divolm"]],
    "cadelgyn": ["astronaut", "cosmonaut"],
    "cagyn": ["underachiever", "couch potato"],
    "cajik": ["tea"],
    "cajikzhum": ["tea pet", "small sheep-like creatures that grow tea leaves as fur"],
    "cejanym": ["telephone"],
    "cejym": ["OCD"],
    "cejyn": ["sound"],
    "celkcejyn": ["vowel"],
    "celkit": ["dove"],
    "celkitzlannoc": ["dove gender"],
    "celteln": ["servant"],
    "celtuln": ["that which is considered morally acceptable to be eaten"],
    "celzan": ["tongue"],
    "cesik": ["word"],
    "ceslit": ["good person", "morally upright individual"],
    "cesyt": ["particle"],
    "cethnyt": ["musical instrument", "wind instrument"],
    "cic": ["cheese"],
    "cifnolvnin": ["leader"],
    "cifnolvninxecultnacolm": ["political slander"],
    "cigym": ["rubber duckie"],
    "colsek": ["apple"],
    "coltan": ["remote-controlled item", "telekinetically-controlled item", "subservient zombie"],
    "cuhc": ["foot"],
    "culjim": ["ant"],
    "culjimdin": ["anthill"],
    "cult": ["axiom", "truth univerally acknowledged"],
    "cyfek": ["algae"],
    "cyzelthnit": ["any mythical or fictional plant"],
    "dacok": ["cudgel", "club", ["archaic", "dacolk"]],
    "dacolk": ["cudgel", "club"],
    "dafmuhm": ["arrow (on a page or a sign)", "direction", ["see also", "vmanduhk"]],
    "dan": ["natlang", "natural language", ["etymology", "dasnan + tan"]],
    "danec": ["copy"],
    "danectheknoc": ["the romanization system"],
    "daslek": ["fangirl (gender-neutral)", ["gloss", "fangirl"]],
    "dasnan": ["nature", "outer space"],
    "dasnankixikolm": ["space-helicopter"],
    "dasnanuk": ["headcanon"],
    "dazlelfim": ["child", "kid"],
    "decek": ["chicken"],
    "decekxifemmeht": ["ornithomania", "ornithomaniac"],
    "dejizoln": ["wood"],
    "delgemzhum": ["Pokemon"],
    "din": ["home", "hive"],
    "divolm": ["thunder", "phonology"],
    "dolkat": ["picture"],
    "dolkatmahk": ["Photoshop"],
    "dolmik": ["compassion"],
    "duhdem": ["dam", "swamp"],
    "duhden": ["pasta", "that which causes conversational tangents and disruptions from the main topic"],
    "duhdenthuhfam": ["Gold", "money"],
    "duhfnet": ["two-dimensional shape or geometric object"],
    "duhgan": ["circle"],
    "duhgangolduhn": ["sphere"],
    "duhk": ["spear"],
    "duhkim": ["staff or walking stick", "cane"],
    "duhtsolsolm": ["size"],
    "dulkult": ["pair", "unit of measurement ~= 5.7 inches (14.5 cm)"],
    "dulslak": ["dumpling", "that which may be on-topic or off-topic but which it is is uncertain"],
    "dulslakygyn": ["a subspecies of tythemek that feels on dumplings"],
    "dultham": ["money", "store"],
    "dyculm": ["movie theater"],
    "dyfnyn": ["length", "volume", "area", "Lebesgue measure"],
    "dyjult": ["a stringed musical instrument, especially a guitar"],
    "dyznek": ["two-handed sword", ["see also", "zhan"], ["gloss", "sword"]],
    "famat": ["farm"],
    "fasnat": ["powdered donut", "a holiday that originally had meaning but now people just celebrate it for the food or other superficial characteristics", "soap"],
    "femek": ["mind", "thought", "Sherlock Holmes"],
    "femektam": ["gender", "gender identity"],
    "femekukmunkanolt": ["a door that you keep wanting to push but it's actually a pull door"],
    "fenat": ["animal", "land animal, particularly mammals and reptiles"],
    "fenolk": ["magical ingedient", "typographical error"],
    "fic": ["here", "now"],
    "fijyc": ["rainbow"],
    "fithnelm": ["lighthouse", "beacon"],
    "fmakaxik": ["catapult", ["etymology", "fmamegyn + kaxik"]],
    "fmat": ["seed"],
    "fmefmezam": ["yard sale", "garage sale", "bazaar", "open-air market", "an exchange of goods or services that does not take place in a formal business setting"],
    "fmolthyt": ["duty", "responsibility", "thing one ought to do", "domain", "specialization"],
    "fmolxem": ["destiny", "fate"],
    "fmulzhik": ["year"],
    "fnadyc": ["death"],
    "fnecolm": ["noun"],
    "fnulsnin": ["head", "neck", "everything above the shoulders"],
    "fuhdet": ["god", "personified force of nature"],
    "fuhdettethnymznolk": ["Christmas as a religious holiday"],
    "fuhmolt": ["gallbladder"],
    "fuhn": ["dwarf, especially from Dwarf Fortress", ["gloss", "dwarf"]],
    "fymit": ["scam"],
    "fymitgyn": ["scammer", "con artist"],
    "fynit": ["meat", "flesh", "body", ["etymology", "fenat + gygik"]],
    "fyzlamit": ["scam", ["archaic", "fymit"]],
    "fyzuln": ["sibling"],
    "gacafmet": ["shirt", "something worn on the body above the waist, but not on the neck or head"],
    "gafuht": ["brick"],
    "gajin": ["pure awe"],
    "gajindin": ["church", "place of worship"],
    "gak": ["fun derived from a game or other entertainment"],
    "gamolksolsolm": ["height", ["archaic", "gasolsolm"]],
    "gamyk": ["tree", "one that produces"],
    "gamykfenat": ["squirrel"],
    "gasnoln": ["effort", "attempt", "pain"],
    "gasolsolm": ["height"],
    "gavmolt": ["lake, fresh water"],
    "gelsholk": ["calendar, especially the Sajem Tan calendar", ["gloss", "calendar"]],
    "geselt": ["chest", "box", "large container"],
    "geshik": ["clock", "sundial", "timekeeper"],
    "gezhelfuln": ["one's personal potential"],
    "gigim": ["flipper", "fin"],
    "gisnolm": ["pain from an accident or injury"],
    "gisnolmkolxakok": ["skis from the perspective of someone who hates them", ["gloss", "skis"]],
    "gizlethnyt": ["shoes"],
    "golduhn": ["three-dimensional shape or geometric object"],
    "golslim": ["photograph"],
    "golt": ["limit", "boundary", "termination point", "end"],
    "guhngolduhn": ["nonahedron"],
    "gygik": ["food"],
    "gyn": ["worker"],
    "gyznyt": ["nose", "excuse"],
    "jafin": ["melodrama"],
    "jafit": ["land", "territory", "the general term for anything that isn't ocean or sky, like grass, dirt, rocks, snow, etc."],
    "jamcesikznolk": ["new word holiday", "day of celebration of Thefam's addition of words to the dictionary"],
    "janyc": ["that which is considered morally unacceptable to be eaten"],
    "janyctolzneln": ["tap water"],
    "jaxin": ["plastic or wooden chair, especially one that has been mass-produced", "schoolroom desk", ["gloss", "chair"]],
    "jegen": ["hook"],
    "jegentheknoc": ["the writing system"],
    "jelkelm": ["book", "physical book", "paper book"],
    "jelkelmtuc": ["page", "book cover", "binding"],
    "jelshnec": ["signature, particularly an autograph", "emblem"],
    "jidolk": ["flower"],
    "jidolkduhgan": ["garland", "flower crown"],
    "jikin": ["wiki", "notebook", "bulletin board"],
    "jin": ["light", "pathos", "display of irrationality/passion", "dramatic situation"],
    "jivyt": ["music box"],
    "jizlet": ["Quizlet"],
    "juhcen": ["fire"],
    "juhcefam": ["coal", ["etymology", "juhcen + thefam"]],
    "juhcenukmungyn": ["firefighter"],
    "juhkulk": ["pants", "trousers", "something worn on the body below the waist but not on the feet"],
    "juhkulkfynit": ["(poetic) legs"],
    "julnim": ["pleasant dream", ["gloss", "dream"]],
    "julvet": ["name", "identifier"],
    "jyslat": ["word dump which no one actually reads, specifically one from EULA"],
    "jyt": ["place", ["etymology", "jymin"]],
    "jythak": ["strawberry"],
    "kacfic": ["past"],
    "kafemuhm": ["cryptomnesia", "false memories"],
    "kagan": ["hula-hoop", "donut", "doughnut"],
    "kagantheknoc": ["the cursive form of the writing system"],
    "kajolslic": ["anathema", "curse", "taboo"],
    "kakcejyn": ["consonant"],
    "kakit": ["pigeon"],
    "kakitzlannoc": ["pigeon gender"],
    "kam": ["tool", "weapon", "utensil", "implement"],
    "kamexamexat": ["energy (in the physics sense)", ["gloss", "energy"]],
    "kanolt": ["door", "dough, especially of bread or cookies (definition archaic)"],
    "kaxik": ["land vehicle", ["etymology", "kixikolm + kolxak"]],
    "kazlan": ["gyrodus fish"],
    "kecyc": ["Internet", "cyberspace", "virtual reality", "dream", "Holodeck", "multiplayer game mode", "Second Life", "Tron", "something which is illusionary or simulated"],
    "kecycjin": ["meme"],
    "kecycjulvet": ["internet username", ["gloss", "username"]],
    "kecyctatulk": ["Google Glass"],
    "kecycthuhfam": ["Silicon"],
    "kegak": ["cowardice", "unwillingness to do the right thing", "prudence", "rationality"],
    "kelshik": ["suffix"],
    "kemen": ["cow", "bovine"],
    "kemenzamin": ["milk"],
    "kemenzaminthuhfam": ["Calcium"],
    "kexek": ["emotion"],
    "kexekdolkat": ["emoji"],
    "kexekdolkatduhden": ["when Thunder starts distracting the tribe by inserting random emojis"],
    "kicat": ["french horn"],
    "kidek": ["face"],
    "kixikolm": ["helicopter", "hovercraft", "small, highly-maneuverable vehicle"],
    "kizholk": ["em-ocean", "a vast and daunting plenitude of emotions or a person whois burdened with such a plenitude"],
    "kizhul": [["archaic", "kizhult"], "bee"],
    "kizhult": ["bee", "harvester", ["see also", "znolc"], "storyteller"],
    "kizhultdin": ["beehive"],
    "kizik": ["grass"],
    "kizikjafit": ["meadow", "plain", "prairie", "pasture", "field", "grassland", "steppe"],
    "kolthic": ["the joy and exhaustion that comes after final exams are over"],
    "kolxak": ["rider-powered vehicle"],
    "kuhc": ["letter"],
    "kuhctheknoc": ["alphabet"],
    "kultycin": ["porn"],
    "kyfik": ["arm"],
    "kygek": ["chopstick", "an eating utensil used to grasp food from the outside instead of cut or stab it"],
    "kyguhk": ["chopstick", ["archaic", "kygek"]],
    "kygykkolxak": ["pedalpub"],
    "kygykzazet": ["quicksand"],
    "kygyn": ["eater", "one who eats"],
    "kyvydyc": ["crack", "tear", "hole"],
    "madam": ["history"],
    "magolt": ["value", "worth"],
    "mam": ["mom", "any female being or an object personified as being female", ["see also", "tat"]],
    "mazem": ["engilang", "engineered language"],
    "mazuhn": ["insect"],
    "melsuln": ["ice cream", "gelato", "cold"],
    "melsulntelzlnoln": ["snow"],
    "menec": ["a false sense of safety"],
    "mesnan": ["magic"],
    "mesolk": ["victory"],
    "metolgyxan": ["Any regularly updated summary of events usually a daily chronicle, periodical, or blog", ["gloss", "periodical"]],
    "mislek": ["fern", "mathematics"],
    "misleln": ["orange (fruit)", ["gloss", "orange"]],
    "mizen": ["a conversation in which Fern and Fog snipe at each other"],
    "mizizlat": ["wheelbarrow", "cart", "trolley", "pram"],
    "molduhm": ["mace"],
    "molm": ["tribe"],
    "molmelc": ["roof", "shelter"],
    "molmjulvet": ["tribal name", ["example", "Wind or Bird"]],
    "molmvakult": ["legal parent", "adoptive parent"],
    "molshnem": ["tribemember"],
    "muhc": ["that which cities, forests, and hives have in common, a community", ["gloss", "community"]],
    "muhcjulvet": ["surname", "last name (in cultures with a European-like naming system)"],
    "muhzl": [["archaic", "muhc"], "that which cities, forests, and hives have in common, a community"],
    "mynam": ["conlang", "constructed language"],
    "nacolmkam": ["dagger", "a weapon or tool used not for slicing, or hacking, but for direct insertion"],
    "nacolmkolxak": ["skis from the perspective of someone who doesn't hate them", ["gloss", "skis"]],
    "nasham": ["wave"],
    "nashelt": ["love"],
    "nasheltnoc": ["marriage"],
    "nasholt": ["like", "that which is less intense than love but is still a positive feeling", ["example", "Zhnicolnahthot nasholt kexekum molt theh.", "I do not like dogs."]],
    "nejet": ["numbness"],
    "nelkit": ["scarf", "fabric worn around the neck"],
    "nem": ["class", "identifies a word as a class of words (frequently used like a suffix)", "in the class of __ ", ["example", "janycnem", "the class of things which are morally unacceptable to eat"]],
    "nenyk": ["playing card"],
    "nenyktak": ["card game"],
    "nesit": ["fruit"],
    "nic": ["hand"],
    "nuldic": ["miner, usually a coal miner", "one who mines", ["gloss", "miner"]],
    "nuln": ["friend"],
    "nulnjulvet": ["nickname"],
    "nulvmic": ["charcoal"],
    "nyzic": ["blood", ["etymology", "nytin + zic"]],
    "nyzlan": ["snail"],
    "sajemjulvet": ["preferred name"],
    "saslmoln": ["eggplant", "aubergine"],
    "sasoln": ["applause", "an ovation", "the rumbling praise of the crowd"],
    "sazycfenat": ["horse"],
    "saznolt": ["mud"],
    "sekelt": ["valley"],
    "semet": ["number (not a numeral)"],
    "shafnem": ["jacket", "coat", "a sleeved upper body garment typically worn over a shirt or blouse"],
    "shelsheln": ["river", "pragmatics"],
    "shikolk": ["sugar glider"],
    "shisek": ["orchard"],
    "shnuhk": ["lips"],
    "shuhzhik": ["tear", "drop"],
    "slafim": ["coolness"],
    "slafyc": ["road", "path", "walkway"],
    "slelceln": ["lemon"],
    "slijak": ["artlang", "artistic language"],
    "slik": ["thumbs-up"],
    "slin": ["fight"],
    "slingyn": ["warrior", "Klingon"],
    "slitim": ["stripe"],
    "slitimslnolxemgyn": ["barbershop quartet member"],
    "slitimslnolxemgynmon": ["barbershop quartet"],
    "slnagen": ["night"],
    "slnaxan": ["small talk", "when someone tries to end a silence but all they do is make it worse"],
    "slnolxyc": ["that transparent singing creature that dies"],
    "slnolxem": ["song"],
    "slolm": ["axe"],
    "sluhtgolduhn": ["tetrahedron"],
    "slysyc": ["snake"],
    "smagulk": ["desolation", "wasteland", ["etymology", "English: Smaug"]],
    "snac": ["element", "chemical element", ["etymology", "dasnan + tuc"]],
    "snamnocznolk": ["Christmas as a secular holiday"],
    "snedelm": ["secret"],
    "snijat": ["mountain"],
    "snolzem": ["knot"],
    "snym": ["cloud"],
    "snymsoljemthuhfam": ["Silver"],
    "soldyccesik": ["adjective", "adverb"],
    "soljem": ["color"],
    "soljesolm": ["chromesthesia"],
    "solsolm": ["spectrum"],
    "sulfekahslifazhislitikesixahsloldolshyc": [["archaic", "sulfekaslifazhislitikesixasloldolshyc"], "cookie"],
    "sulfekaslifazhislitikesixasloldolshyc": ["cookie"],
    "sulslem": ["nectar"],
    "tah": [["archaic", "tan"], "honey", "vomit", "language"],
    "tahzluv": [["archaic", "tanzlulc"], "utterance", "short speech", "sentence", "dollop of honey"],
    "tak": ["game", "amusement", "recreation"],
    "takgolduhn": ["die", "dice, especially those used in roleplaying games"],
    "tam": ["gender", "sex"],
    "tamat": ["pastry", "on-topic conversation"],
    "tamatthuhfam": ["Tin"],
    "tan": ["honey", "vomit", "language"],
    "tanik": ["saxophone"],
    "tanzlulc": ["utterance", "short speech", "sentence", "dollop of honey"],
    "tat": ["dad", "any male being or an object personified as being male", ["see also", "mam"]],
    "tatulk": ["glasses", "spectacles", "contact lenses", "monocle", "eyewear"],
    "telzlnoln": ["rain"],
    "tekeziselt": ["computer, especially one capable of connecting to the Internet"],
    "tesnolk": ["any small annoying object found in one's shoe"],
    "tetan": ["flying snail with a mowhawk", "unit of measurement ~= 2.9 inches (7.2 cm)", ["gloss", "tetan"]],
    "tethnym": ["birth", "pregnancy"],
    "tevolk": ["drum"],
    "tezet": ["lightning"],
    "tezetfun": ["electricity"],
    "that": ["auxlang", "auxiliary langauge"],
    "thazan": ["dusk"],
    "thefam": ["stone", "writing", "orthography"],
    "thefamkam": ["writing utensil", ["archaic", "thekam"]],
    "thefahm": [["archaic", "thefam"], "stone"],
    "thefmin": ["forked tongue", "swallowtail (vexillology term)"],
    "thefminkam": ["fork (eating utensil)"],
    "thefminkamukmun": ["spoon (eating utensil)"],
    "thefnolm": ["bear"],
    "thekam": ["writing utensil"],
    "theknoc": ["writing system"],
    "themult": ["information"],
    "thethat": ["wind", "breeze"],
    "thezat": ["storm", "hurricane"],
    "thigyk": ["fashion"],
    "thikit": ["strength"],
    "thikitmahk": ["steroids"],
    "thisyn": ["leaf"],
    "thnadyc": ["inspiration", "Death"],
    "thnak": ["root"],
    "thnamolk": ["pizza"],
    "thnamolkmahk": ["marinara sauce"],
    "thnamolksoljemmahk": ["olive oil"],
    "thneduht": ["silence", "ominous stillness", "void"],
    "thnelk": ["room"],
    "thnelxmyt": ["frisbee", "disk", "plate"],
    "thnelxmytjafit": ["flat earth"],
    "thnelxmytmazuhn": ["scarab beetle"],
    "thnolduhn": ["zoccihedron", "a 100-sided shape"],
    "thnuhduhk": ["elephant"],
    "tholfmim": ["goat", "mountain goat"],
    "thuhfam": ["metal", "Copper"],
    "thuhfin": ["theater for live performances"],
    "thuhnenolgem": ["fort", "fortress"],
    "thulvmythat": ["flag"],
    "tivuht": ["dinosaur"],
    "tizen": ["when Wind incites or enables mizen", ["see also", "mizen"], ["gloss", "mizen-enablement"]],
    "tizhexenuhzlijolshik": ["someone who doesn't know much but thinks they do", "a victim of the Dunning-Kruger effect"],
    "tizholn": ["ocean"],
    "tizlnin": ["hail"],
    "tolcuhkek": ["forcefield"],
    "tolk": ["fashion", "vogue", ["etymology", "tulceslit + julvnolk"]],
    "tolkin": ["author", "writer, especially of fantasy novels"],
    "tolmolm": ["slope"],
    "tolzen": ["mist", "fog"],
    "tolzlneln": ["water"],
    "tolzlnelnkolxak": ["pedal-boat"],
    "tolzlnelnzazit": ["mud"],
    "tolzlnelnzhutduht": ["Oxygen"],
    "tolzlnelnzhutduhtuk": ["Hydrogen"],
    "tolzlnoln": ["flood", "deluge"],
    "tolzlolt": ["ice", "orzo", "stuff that is on-topic to a conversation that is off-topic"],
    "tolzolt": ["blizzard"],
    "tuhzuln": ["intransitive verb"],
    "tulceslit": ["that which affects you in a good way"],
    "tulceslitvolt": ["vegetable oil"],
    "tuln": ["eye", "camera", "telescope"],
    "tulnjelkelm": ["movie"],
    "tult": ["object", "thing"],
    "tultxeht": ["nothing"],
    "tulvmyzam": ["cloth", "fabric"],
    "tulzhnolm": ["canvas", "game plan (in sports)", "field (of a flag)", "a section of a paper, screen, cloth, or similar material on which designs are made or text is written"],
    "tyceslit": ["that which affects you in a bad way"],
    "tyckah": ["anger", ["etymology", "tyc + kah"]],
    "tycthemek": ["bad idea", ["archaic", "tythemek"]],
    "tynoln": ["umbrella", "parasol", "balloon", "a non-hat object that floats above one's head"],
    "tyslit": ["trumpet"],
    "tysolsolm": ["width"],
    "tythemek": ["a mythical centipede with human hands, and the teeth and dangling thing of a deep-sea anglerfish", "bad idea"],
    "tytoltduhttulnah": ["l o n g   e y e s"],
    "tytoltsolsolm": ["width", ["archaic", "tysolsolm"]],
    "tytyt": ["clover"],
    "tyzyshyk": ["custom", "praxis", "way"],
    "vakult": ["parent", "parental figure", "teacher", "older relative"],
    "vakultjulvet": ["given name", "first name (in cultures with a European-like naming system)"],
    "vavmyn": ["anarchy"],
    "vazolt": ["cat", "gray squirrel dog"],
    "vejyt": ["music"],
    "vejytnoc": ["song"],
    "vemek": ["science", "analysis"],
    "vesnennoc": ["communism"],
    "vethyn": ["the art of poetry"],
    "vigyn": ["mystic", "witch"],
    "vith": [["archaic", "vithit"], "bird"],
    "vithennoc": ["poem"],
    "vithenthnu": ["the art of poetry"],
    "vithit": ["bird", "overseer"],
    "vithitdin": ["nest", "twig-woven home of the swift feathered one"],
    "vmadan": ["bacon"],
    "vmadanso": ["pig"],
    "vman": ["bow"],
    "vmanduhk": ["arrow (from a bow)", ["see also", "dafmuhm"]],
    "vmanduhkjidolk": ["rose"],
    "vmak": ["a piece of furniture meant for sitting upon", "a chair", ["gloss", "chair"]],
    "vmedyt": ["projectile"],
    "vmelfelc": ["wisdom", "silliness"],
    "vmidolk": ["rose", ["etymology", "vmanduhk + jidolk"]],
    "vmyn": ["mouth"],
    "vnejyn": ["mirror"],
    "vnevnec": ["echo"],
    "vnisyt": ["moon"],
    "voljam": ["ear"],
    "volt": ["plant"],
    "voltem": ["pear wiggler"],
    "voltemtuc": ["pear"],
    "voltemzhnu": ["one who is pear-wiggled regularly"],
    "vuhtefmim": ["full stop", "period", "end of a sentence"],
    "vykic": ["afternoon"],
    "xafec": ["fulvous whistling duck"],
    "xamatin": ["the frustration of realizing that one has inadvertently invalidated or undone an accomplisment"],
    "xanan": ["life"],
    "xananzmet": ["house"],
    "xaslan": ["sign language"],
    "xaslnolm": ["dance"],
    "xaslnolmgyn": ["leg", "dancer"],
    "xataxym": ["hole", "pit", "ditch"],
    "xatat": ["magnet"],
    "xatatthuhfam": ["Iron"],
    "xaxatym": ["geyser", "hole that laughs", ["etymology", "xaxat + xataxym"]],
    "xecult": ["lie", "untruth"],
    "xelteln": ["cliff"],
    "xemac": ["argonaut", "shelled creature"],
    "xen": ["thumbs-down"],
    "xexen": ["problem"],
    "xidat": ["tail, especially one that is prehensile", ["gloss", "tail"]],
    "xinem": ["astral projection"],
    "xinemxataxym": ["wormhole"],
    "xolgak": ["courage", "bravery", "valor", "foolishness", "irrationality"],
    "xolcifnolvninah:": ["the Academie Française", ["etymology", "xo-cifnolvninah"]],
    "xuhm": ["extent", "number", "amount", ["etymology", "xüm"]],
    "xuhmku": ["how much, how many, to what extent"],
    "xulkat": ["fun", "grammar", "climbing", "the enjoyment of challenges"],
    "xulkatsazyc": ["adventure"],
    "xyduht": ["monkey"],
    "xykuhk": ["shield"],
    "xyzak": ["bat (winged mammal)", ["gloss", "bat"]],
    "zac": ["tuba"],
    "zamin": ["juice"],
    "zadit": ["glass", "victory (definition archaic)"],
    "zaditkanolt": ["window"],
    "zatenym": ["troop", "group", "platoon"],
    "zatheln": ["spider", "silkworm", "syntax"],
    "zavan": ["ghost", "spectre"],
    "zazet": ["sand", ["etymology", "zazit + zek"]],
    "zazit": ["dirt"],
    "zek": ["sandstone", "packed sand", "the natural sand found in deserts and canyons"],
    "zelvet": ["sun", "star", "that which gives the (false) impression of constancy or permanence"],
    "zelvetzyzlolk": ["Helium"],
    "zesnezlnat": ["a hard-to-pronounce word", "shibboleth"],
    "zevec": ["translation"],
    "zevulc": ["mistranslation"],
    "zezholtkatolcukmunmahk": ["self-driving car"],
    "zhan": ["one-handed sword", "dagger", "knife", ["see also", "dyznek"], ["gloss", "sword"]],
    "zhasik": ["sky", "canopy of a forest", "ceiling of a cave (but not of a house)"],
    "zhasiktolzlneln": ["sky-water", "cloud", ["see also", "snym"]],
    "zhasikzhuhzhuhmzanso": ["spaceship"],
    "zhazhuhn": ["chaos"],
    "zhelzelt": ["soul"],
    "zhetam": ["pollen", "semen"],
    "zhetamvakult": ["biological father", ["see also", "tat"]],
    "zhimahn": [["archaic", "zhiman"], "feather"],
    "zhiman": ["feather", "long lustrous hair"],
    "zhizhek": ["ideology"],
    "zhizlik": ["fish"],
    "zhnazym": ["table"],
    "zhnicoln": ["dog"],
    "zhnicon": ["dog", ["archaic", "zhnicoln"]],
    "zholgam": ["shapeshifter, especially were-creatures"],
    "zholzec": ["heart", ["etymology", "zhezelt + nyzic maybe also zezholt, zholsat"]],
    "zhuhzhim": ["dust", "a floating particle; something that settles down or doesn't"],
    "zhyshyn": ["bread"],
    "zic": ["liquid"],
    "zicuhm": ["a container for consumable liquids, especially a bottle, cup, or thermos"],
    "zizulm": ["library"],
    "zlannoc": ["gender"],
    "zlantak": ["domino"],
    "zlaslolk": ["laser", "phaser", "ray gun", "energy beam"],
    "zleldat": ["screen", "monitor"],
    "zleldattan": ["actor"],
    "zleldatznenan": ["movie", "tv show"],
    "zlislym": ["skeleton"],
    "zlisoln": ["fear", "panic", "paralysis"],
    "zlivmyn": ["tooth"],
    "zlnanic": ["chameleon"],
    "zlnathnyn": ["chimera", "any mythical or fictional animal with parts taken from various animals"],
    "zlolfit": ["wing"],
    "zlolzhit": ["poop (thanks, Thunder's sister)", ["gloss", "poop"]],
    "zlolzhitthnelk": ["bathroom"],
    "zlolznysluln": ["immortality", "longevity"],
    "zluhznyk": ["dignity", "honor"],
    "zlulc": ["lump", "dollop (of a substance)", "instance (of something more abstract)"],
    "zlulzim": ["chocolate", "that which initially appears to be off-topic but is suddenly revealed to be related to actual subject"],
    "zmet": ["buliding"],
    "znenan": ["tale", "story"],
    "znimkolxak": ["unicycle"],
    "znolk": ["day"],
    "zuhfuhn": ["transitive verb"],
    "zuhvolzlnak": ["substitute teacher"],
    "zuhzuhmelt": ["ladle", "dipper"],
    "zulzulm": ["word dump"],
    "zyshennuhtitthnelk": ["Hallmark channel bakery"],
    "zyzlolk": ["gas"],
    // I at this point give up on alphabetizing everything. -Thefam (3 Tërnön 11)
    "sazlin": ["cotton candy", "deadly poison", "something which appears desirable but is in fact not", "a Trojan Horse"],
    "vysyzlyt": ["joke orthography"],
    "vanysleln": ["collection of loosely connected thoughts", "hodgepodge", "book containing scattered writings", "zibaldone"],
    "xyt": ["(slightly informal/non-standard) all, everything, everyone"],
    "voldem": ["non-Sajem Tan word that is phonotactically valid"],
    "slulvizhit": ["cosplay"],
    "selset": ["sushi"],
    "zlulven": ["sandwich"],
    "canim": ["lighthouse"],
    "midac": ["puzzle"],
    "celtulnsnizhynzicuhmfun": ["kidney bean", ["etymology", "edible little urine container"]],
    "duldulk": ["lip-buzzed instrument", "brass instrument, especially a trombone (definition archaic)"],
    "dedyk": ["flute"],
    "deldolk": ["piano", "keyboard instrument"],
    "dedek": ["harp"],
    "didak": ["Oboe"],
    "nizlelk": ["nerd"],
    "nenulm": ["geek"],
    "nysnam": ["wizard"],
    "snizlelk": ["snerd"],
    "snenulm": ["sgeek", "skeek"],
    "snysnam": ["swizard"],
    "gacek": ["flamingo"],
    "zlifnulgac": ["demonopocephalous flamingo"]
  },
  "number": {
    "decimal": {
      "dec": ["1"],
      "fam": ["2"],
      "guhn": ["9"],
      "kulk": ["8"],
      "shen": ["6"],
      "sluht": ["4"],
      "thnolt": ["100"],
      "tim": ["0"],
      "vmelt": ["1000"],
      "vulc": ["3"],
      "zhat": ["7"],
      "zlik": ["5"],
      "znek": ["10"]
    },
    "nolk": ["decimal point"],
    "senary": {
      "dolk": ["1"],
      "felt": ["2"],
      "folt": ["36"],
      "slolc": ["4"],
      "tyt": ["0"],
      "vyk": ["3"],
      "xek": ["6"],
      "zhelt": ["216"],
      "zlelc": ["5"]
    }
  },
  "particle": {
    "cehk": ["introduces a new word", ["see also", "thom"]],
    "cehsh": [["archaic", "cehk"], "introduces a new word"],
    "con": ["transliteration, may be phonotactically invalid"],
    "don": ["sounds like the phoneme sequence", ["example", "don zelzeln", "the sound of a bee"]],
    "ehm": ["clarifies the following word as a transitive verb"],
    "kun": ["clarifies the following word as an adjective or adverb"],
    "kut": ["feels like the phoneme sequence", ["example", "kut xigeldifigeldit", "all over the place, higgledy-piggledy"]],
    "mu": ["marks the beginning of a relative clause, the end is marked with 'om', (these can also be written as '[' and ']')", ["gloss", "{rel-clause}"]],
    "neh": ["clarifies the following word as an intransitive verb"],
    "nuk": ["removes a sense from an existing word"],
    "oc": ["clarifies the following word as a noun"],
    "om": ["carries conjugations for con, don, kut, shehn, and tahn", ["example", "kut xigeldifigeldit omum culjimah.", "The ants are all over the place / disorganised."], ["gloss", "{conjugation}"]],
    "oz": ["clarifies the following word as a noun", ["archaic", "oc"]],
    "shehn": ["feels like", ["example", "shehn simem", "the feeling of peace"]],
    "slah": ["introduces a new sense", ["see also", "thom"]],
    "tahn": ["sounds like", "a sound emitted by the referent of the following noun", ["example", "tahn divolm", "the sound of thunder"]],
    "thom": ["links word with new definition", ["see also", "cehk"], ["see also", "slah"]],
    "xo": ["marks an archaic word or a current word used in an archaic sense"]
  },
  "post": {
    "daket": ["near"],
    "dom": ["because"],
    "feln": ["knowing persons or places", ["see also", "shyn"], ["see also", "zet"]],
    "kac": ["before", "earlier than"],
    "kafmym": ["in", "inside"],
    "javem": ["into", "entering"],
    "navnyc": ["upon", "atop", "on top of"],
    "sajoln": ["deep in a set of internet links"],
    "seln": ["to", "towards"],
    "sholmak": ["between"],
    "shyn": ["knowing abstract things", ["see also", "feln"], ["see also", "zet"]],
    "smet": ["around", "through", "about", "surrounding"],
    "snic": ["across", "beyond"],
    "sno": ["in the time of", "during", "in", "on (time period or event)", ["see also", "mahn"]],
    "tan": ["said that"],
    "taznoln": ["until"],
    "tolthimnoc": ["request that"],
    "tuhn": ["having a quality/property", ["gloss", "having"]],
    "vmat": ["in the middle of", "in the midst of", "amidst"],
    "zet": ["knowing wisdom/silliness", ["see also", "feln"], ["see also", "shyn"]],
    "zult": ["after", "once", "soon after", "in accordance with", "following"]
  },
  "prefix": {
    "xuhm-": ["how", ["example", "xuhmzyshen", "how nice"], "to what extent", ["example", "dothot xuhmgisnolmsho dovmeh gisnolmnoc?", "how painful is the injury to you?, how much does it hurt?"], ["see also", "xuhm"]]
  },
  "pronoun": {
    "deh": ["1st person neutral", "I"],
    "do": ["2nd person neutral", "you"],
    "du": ["3rd person neutral", "he", "she", "it", "this", "that"],
    "seh": ["1st person animate", "I"],
    "sehth": [["archaic", "seh"], "1st person animate"],
    "theh": ["1st person inanimate", "I"],
    "thehs": [["archaic", "theh"], "1st person inanimate"],
    "thu": ["1st person vegetal", "I"],
    "thuzl": [["archaic", "thu"], "1st person vegetal"],
    "vo": ["2nd person vegetal", "you"],
    "vos": [["archaic", "vo"], "2nd person vegetal"],
    "vu": ["2nd person inanimate", "you"],
    "vuzh": [["archaic", "vu"], "2nd person inanimate"],
    "zeh": ["3rd person vegetal", "he", "she", "it"],
    "zehzh": [["archaic", "zeh"], "3rd person vegetal"],
    "zho": ["self", "the subject of the clause", "reflexive"],
    "zhu": ["2nd person animate", "you"],
    "zhuv": [["archaic", "zhu"], "2nd person animate"],
    "zlo": ["3rd person animate", "he", "she", "it"],
    "zloz": [["archaic", "zlo"], "3rd person animate"],
    "zo": ["3rd person inanimate", "he", "she", "it"],
    "zozl": [["archaic", "zo"], "3rd person inanimate"]
  },
  "suffix": {
    "adj>intrans": {
      "tutu": ["superlative", "to be the most"]
    },
    "adj>noun": {
      "solsolm": ["-ness", "produces a noun referring to the spectrum of values of which a particular adjective is a part", ["suf-example", "duht (big)", "duhtsolsolm (bigness, size)"]]
    },
    "adj>trans": {
      "tu": ["comparative", "to be more ___ than"],
      "tutu": ["superlative", "to be the most ___ of a group"]
    },
    "any": {
      "ku": ["interogative suffix", "what", "which", "question", ["example", "thefamahku znolcfeh zhu?", "Which rocks did you gather?"]],
      "mun": ["very", "extremely", "maximal intensification"],
      "uk": ["non-", "un-", "other than", "different from", ["see also", "xeht"]],
      "ukmun": ["anti-", "opposite of", ["see also", "xeht"]],
      "xeht": ["lacking", "lack of", "no", "not", ["see also", "molt"], ["see also", "uk"]]
    },
    "aspect": {
      "da": [["archaic", "dah"], "perfective"],
      "dah": ["perfective"],
      "eht": ["habitual"],
      "fe": [["archaic", "feh"], "durative"],
      "feh": ["durative"],
      "fu": ["aspect signifying that an action has no definite beginning or end"],
      "keht": ["aspect signifying that an action has a definite end but it is unclear if there was a definite point when it began"],
      "maht": ["aspect signifying that an action has a definite beginning but it is unclear if it will ever end"],
      "sho": ["continuous"],
      "um": ["gnomic"]
    },
    "case": {
      "gu": ["instrumental I -- tools that fit in the hand", ["gloss", "insturmental I"]],
      "kahm": ["comitative"],
      "o": ["vocative"],
      "teh": ["causative"],
      "thot": ["recipient/beneficiary"],
      "vah": ["instrumental II -- tools too big to hold in the hand, and intangible tools like software", ["gloss", "insturmental II"]],
      "veh": ["comparative"],
      "vmeh": ["genitive"],
      "zheh": ["focus/source"]
    },
    "noun>adj": {
      "meht": ["having a surfeit or plenitude of something", ["suf-example", "thefam (stone, rock)", "thefammeht (stony, rocky)"]]
    },
    "noun>noun": {
      "ah": ["plural"],
      "ahah": ["infinite", "an infinite number of"],
      "ehc": ["marks the name of a language"],
      "fun": ["small"],
      "jot": ["future", ["suf-example", "tetan (tetan)", "tetanjot (a tetan in the future)"]],
      "kah": ["energetic", "coffee"],
      "kahf": [["archaic", "kah"], "energetic", "coffee"],
      "mahk": ["improver"],
      "mon": ["collective noun", "a group of"],
      "nah": ["partive plural", "some but not all", ["example", "thnamolk (pizza)", "thnamolknah (some pizzas)"]],
      "no": ["partive singular", "some", ["suf-example", "thnamolk (pizza)", "thnamolkno (some pizza)"]],
      "nun": ["marker of affection", "Esperanto: -ĉj"],
      "ok": ["horrendous", "excedingly awful", ["see also", "tyc"]],
      "so": ["having-one", "an entity having the thing referred to by the stem", ["suf-example", "zhiman (feather)", "zhimanso (feathered one)"]],
      "tuc": ["part of"],
      "zhum": ["pet"]
    },
    "noun>trans": {
      "zhut": ["cause to be"]
    },
    "number": {
      "sut": ["turns number into ordinal number"]
    },
    "valency": {
      "gahn": ["reciprocal"],
      "jahk": ["in order to"],
      "sun": ["passive voice"]
    },
    "verb>noun": {
      "noc": ["the end state or product of an action", ["gloss", "result"]],
      "thnu": ["the act of"],
      "zhnu": ["the object of an action", "one who is prone to being on the receiving end of an action", "patient suffix (as opposed to agent suffix, i.e. English -er)"]
    }
  },
  "verb": {
    "experiencer intransitive": {
      "fenolk": ["make a typographical error"],
      "fik": ["die"],
      "golcic": ["diminish"],
      "julnim": ["have a pleasant dream"],
      "kasyn": ["recur"],
      "kem": ["shake", "vibrate"],
      "muhshim": ["be cool", "be awesome"],
      "thnadyc": ["die (poetic)", ["see also", "fik"]],
      "zhnelm": ["glow", "give off light"],
      "zim": ["form a spiral-based fractal"],
      "znim": ["fall (unconstrained motion under influence of gravity)"],
      "zult": ["do something in accordance with someone or something else"]
    },
    "experiencer transitive": {
      "cimuht": ["equal"],
      "cult": ["know"],
      "duldolt": ["witness", "observe", "notice"],
      "julfit": ["come from", "hail from", "live in", ["example", "con California omzheh deh julfitfeh.", "I come from California."], ["etymology", "julvet + jafit"]],
      "kafmym": ["be inside"],
      "nelm": ["see", "have in view"],
      "sezhulfen": ["find", "discover"],
      "shizuht": ["remember", "recall"],
      "tuht": ["be of similar size to"],
      "vnelvolm": ["forget"],
      "voljam": ["hear"],
      "zan": ["be congruent to"],
      "zhejuln": ["enjoy"]
    },
    "intransitive": {
      "cenetulnyslin": ["to be inconsistent"],
      "dat": ["rise", "get up", "move upwards", "take off"],
      "doln": ["make a loud, deep sound", "grumble", "rumble"],
      "duhden": ["deviate from the topic of conversation", "be unproductive"],
      "femek": ["exclaim \"Elementary my dear Watson!\""],
      "femekahso": ["think", "contemplate"],
      "fman": ["stand guard", "stand firm", "watch one's surroundings"],
      "gynolm": ["proselytize on behalf of gynaecology"],
      "janemvin": ["hide"],
      "jelt": ["fly or swim along a meandering route", ["see also", "zhuhzhuhm"], ["gloss", "fly"]],
      "jelten": ["cower", "hide"],
      "jezlan": ["be excellent"],
      "jymin": ["select a location by spinning a globe", "teleport by pointing at a map"],
      "jythak": ["turn a conversation into pasta even though it seemed unlikely to be made into pasta", ["see also", "chocolate"]],
      "kegak": ["act cowardly", "be unwilling to do the right thing", "be prudent or rational"],
      "kevin": ["word dump", "post a large amount of text, usually a list"],
      "kexekdolkatduhden": ["throw off a conversation by inserting random emojis"],
      "kishnulm": ["turn", "rotate"],
      "nam": ["absent-mindedly chew on a raw linguina"],
      "safic": ["come", "arrive at the spot of the speaker", "return"],
      "saznoltjelt": ["run around"],
      "sesuht": ["sing Let It Go"],
      "slac": ["walk"],
      "slackah": ["run"],
      "sliktan": ["agree"],
      "slnaxan": ["idly chat despite not wanting to"],
      "slolslac": ["crawl"],
      "smit": ["be widespread", "spread"],
      "tafnoln": ["use a markov chain for entertainment"],
      "tazlagislesuhvim": ["write My Immortal"],
      "telzlnoln": ["rain"],
      "tethnym": ["become pregnant", "be pregnant"],
      "thefam": ["accomplish a surprising amount in an afternoon"],
      "thek": ["write", "scribble", "scrawl"],
      "tho": [["archaic", "thek"], "scribble", "scrawl"],
      "timem": ["sleep"],
      "tishnam": ["rest", ["etymology", "tishnim"]],
      "tolzlnoln": ["rain heavily"],
      "tyfnyn": ["cook with your finger"],
      "vaslnulm": ["cease", "flee"],
      "vejyt": ["play music", "read music"],
      "vijet": ["write music"],
      "vithen": ["write poetry"],
      "vmak": ["sit"],
      "voldit": ["attempt to revive a conversation by saying a random word", "lurx"],
      "volgim": ["dance in a homosexual manner"],
      "vuhxulm": ["toil", "work hard"],
      "vyjat": ["dance to music"],
      "vyjyt": ["listen to music"],
      "vythyn": ["read poetry"],
      "xaslem": ["glide", "move forward on a thin cusion of fluid (air, ketchup, slime, etc.)"],
      "xaxat": ["laugh"],
      "xemac": ["float, especially but not necessarily on water"],
      "xidat": ["multi-task"],
      "xolgak": ["be courageous", "be foolish"],
      "zamen": ["hope"],
      "zhizhek": ["sniffle, especially repeatedly"],
      "zhuhzhuhm": ["fly like a bird", "fly or swim along a fairly straight line or smooth curve", ["see also", "jelt"], ["gloss", "fly"]],
      "zlmelmolc": ["struggle to pronounce an unpronounceable word", ["archaic", "zlmelslmolc"]],
      "zlmelslmolc": ["struggle to pronounce an unpronounceable word"],
      "zhyshyn": ["conceal one's past to make it look like one is not an idiot"]
    },
    "transitive": {
      "cejym": ["obsessively organize minute details"],
      "cic": ["attack a system by pelting it with bizarre manufactured examples"],
      "ciculm": ["cause to explode", "blow up"],
      "cifmezen": ["transfer", "metaphorize"],
      "dafmuhm": ["point"],
      "danec": ["borrow", "copy", "duplicate"],
      "dathnyc": ["encounter", "stumble upon"],
      "deket": ["delete", "remove", "erase"],
      "delgem": ["select", "curate", "anthologize", "choose", "decide"],
      "doltan": ["pronounce"],
      "dolzec": ["conceptually return to a source", "renew creativity by reviewing old inspirations"],
      "duhden": ["distract"],
      "dultham": ["buy", "purchase", "pay for (object takes -thot)"],
      "dulthamukmun": ["sell"],
      "dyfnyn": ["measure"],
      "femek": ["deduce", "realize"],
      "fenolknacolm": ["tease someone for making a typographical error"],
      "fmam": ["test", "explore", "push (a boundary)", "probe"],
      "fmamegyn": ["throw"],
      "fmyvu": [["archaic", "fmyvuhk"], "make", "create"],
      "fmyvuhk": ["make", "create"],
      "fuhshuhc": ["sense", "percieve with one's senses", "see", "hear", "taste", "feel", "smell", "sense via telepathy"],
      "gafnulm": ["steal"],
      "gajin": ["hail", "salute"],
      "gevmulk": ["bury, especially treasure or waste", "inter", "inhume", ["gloss", "bury"], ["example", "zlovmeh zlolzhit gevmulkfeh molt Thefnolm.", "Bear did not bury his poop."]],
      "gislulslit": ["break the knee of"],
      "gulslim": ["nourish", "feed", "sustain"],
      "gyvnam": ["cook"],
      "jagec": ["answer", "respond", "reply", ["etymology", "julgic"]],
      "jan": ["care about", "take interest in"],
      "janemvin": ["desert", "leave (a person)"],
      "janim": ["disappoint", "let down"],
      "jetek": ["exchange", "switch", "switch places", "transpose"],
      "jezlan": ["excell at something"],
      "jicuhk": ["reveal", "display"],
      "jikulfin": ["take notes", "study"],
      "juhcen": ["set on fire", "enflame"],
      "julgic": ["ask a question"],
      "julvet": ["state a name", "identify or denominate oneself"],
      "julvnolk": ["hold", "keep", "wear", "wait", "hold on"],
      "kasyn": ["repeat", "rerun a TV episode"],
      "katolc": ["pilot", "drive"],
      "kek": ["add", "sum"],
      "kem": ["shake", "cause to vibrate"],
      "kygyk": ["eat", "drink", "consume"],
      "kyn": ["multiply"],
      "kyvydyc": ["verb to tear"],
      "ma": [["archaic", "man"], "thank"],
      "man": ["thank"],
      "misnem": ["be injured by another's carelessness"],
      "nacolm": ["poke", "get someone's attention", "stab"],
      "nacoln": ["poke", "get someone's attention"],
      "nanym": ["dispatch, especially for military purposes", "send a letter", ["gloss", "dispatch"]],
      "nelnolk": ["hide"],
      "nicim": ["shank"],
      "ninuhn": ["cut", "chop", "slice", "hack"],
      "nuhk": ["subtract"],
      "sacet": ["need"],
      "sasoln": ["applaud", "chear", "give a standing ovation"],
      "sazem": ["divide"],
      "sazyc": ["go", "travel", ["example", "con Paris om sazycfeh kolk zhu?", "Did you go to Paris?"]],
      "sesuht": ["sing boisterously, especially music that is disliked by others", ["see also", "slnolxem"]],
      "sesuhtnelnolk": ["rickroll"],
      "sesult": ["yell"],
      "shasholc": ["partake"],
      "shelgin": ["perceive"],
      "sidulc": ["lift", "pull", "raise", "lead"],
      "slin": ["fight"],
      "slnolxem": ["sing"],
      "snam": ["give", "transfer (indirect object takes -thot)", ["example", "Thefnolmthot tanzlulc snamdah Kizhult.", "Bee gave a sentence to Bear."]],
      "soldyc": ["describe"],
      "soljesolm": ["color-code", "organize by color"],
      "tah": [["archaic", "tan"], "speak", "vomit"],
      "tak": ["play"],
      "tan": ["speak", "vomit"],
      "tanjetek": ["translate"],
      "tazlagislesuhvim": ["write ineptly, especially fan-fiction that is mocked by others"],
      "tezulfnen": ["search", "seek", "quest"],
      "thek": ["scribble", "scrawl", "write"],
      "tethnym": ["bear", "birth", "give birth to", "conceive", "gestate"],
      "tho": [["archaic", "thek"], "scribble", "scrawl"],
      "thycam": ["read"],
      "tizen": ["enable"],
      "tolthim": ["want", "desire"],
      "tolzlnoln": ["inundate"],
      "vafak": ["join"],
      "vaslnulm": ["cease"],
      "vazolt": ["regard with disdain"],
      "vemek": ["apply the scientific method to", "analyse, esp. for the purpose of understanding or explanation", ["etymology", "femek"]],
      "vesnen": ["share"],
      "vexit": ["enter", "join", "log on", "sign in"],
      "vin": ["exit", "leave", "log out", "sign off"],
      "vysyzlyt": ["adopt a joke orthography"],
      "vyt": ["catch", "capture"],
      "xafec": ["elongate a word while saying it"],
      "xafolm": ["wield (with an instrumental object)", "attack (with a non-case-marked direct object)"],
      "xanoln": ["greet"],
      "xaslem": ["transition smoothly"],
      "xecultnacolm": ["poke with lies", "get attention through lies", "hurt someone with dishonesty"],
      "xifem": ["overthink", "ruminate"],
      "ximuc": ["bid farewell", ["archaic", "ximulc"]],
      "ximulc": ["bid farewell"],
      "xinem": ["teleport", "instantly travel", "astrally project", ["example", "zoku xinemfeh do?", "Where did you teleport?"]],
      "xulmolm": ["fumble", "bungle", "mishandle"],
      "zak": ["release", "let go of"],
      "zan": ["be", "is"],
      "zen": ["invite"],
      "zevec": ["translate"],
      "zeslit": ["encourage"],
      "zholsat": ["defend", "protect"],
      "zlafmelk": ["miss a target, especially when aiming a projectile weapon like a gun, a bow, or a laser", ["gloss", "miss"]],
      "zlan": ["assign gender"],
      "zlaslolk": ["point at", "indicate"],
      "zlasloln": ["shoot"],
      "zlavin": ["escape", ["etymology", "zlisoln + janemvin"]],
      "zlivmyn": ["bite", "chew", "gnaw on"],
      "zmet": ["build"],
      "znim": ["fall into (quirky case: object takes -thot)"],
      "znolc": ["gather", "collect"],
      "znols": [["archaic", "znolc"], "gather", "collect"],
      "zuht": ["coordinate", ["etymology", "zult"]],
      "zyshen": ["help", "aid", "assist"],
      "zyvuhk": ["become", "transform into"]
    }
  }
};
var getProps = function(w) {
  var r = {"defs": []};
  for (var i = 0; i < w.length; i++) {
    if (w[i].constructor == Array) {
      var a;
      if (w[i].length == 2) {
        a = w[i][1];
      } else {
        a = w[i].slice(1);
      }
      if (r.hasOwnProperty(w[i][0])) {
        r[w[i][0]].push(a);
      } else {
        r[w[i][0]] = [a];
      }
      //r[w[i][0]] = w[i].slice(1);
    } else {
      r.defs.push(w[i]);
    }
  }
  return r;
};
if (Object.values == null) {
  Object.values = function(obj) {
    var r = [];
    for (var k in obj) {
      r.push(obj[k]);
    }
    return r;
  };
}
var generateAux = function(a, justlist) {
  if (lexicon.aux.i.hasOwnProperty(a)) {
    var w = lexicon.aux.i[a];
    var f = getProps(w).form[0];
    var r = {
      pres: f[0] + "i"  + f[1],
      near: f[0] + "e"  + f[1],
      mid:  f[0] + "a"  + f[1],
      far:  f[0] + "ul" + f[1]
    };
    return justlist ? Object.values(r) : r;
  } else if (lexicon.aux.ol.hasOwnProperty(a)) {
    var w = lexicon.aux.ol[a];
    var f = getProps(w).form[0];
    var r = {
      pres: f[0] + "ol" + f[1],
      near: f[0] + "el" + f[1],
      mid:  f[0] + "y"  + f[1],
      far:  f[0] + "uh" + f[1]
    };
    return justlist ? Object.values(r) : r;
  } else {
    return null;
  }
};
var listWords = function() {
  var words = [];
  var doObj = function(obj) {
    for (key in obj) {
      if (obj[key].constructor == Array) {
        if (words.indexOf(key) == -1) {
          words.push(key);
        }
      } else {
        doObj(obj[key]);
      }
    }
  };
  doObj(lexicon);
  return words;
};
var listWordsProps = function() {
  var words = {};
  var path = [];
  var doObj = function(obj) {
    for (key in obj) {
      if (obj[key].constructor == Array) {
        var psh = getProps(obj[key]);
        psh.path = JSON.parse(JSON.stringify(path));
        if (words.hasOwnProperty(key)) {
          words[key].push(psh);
        } else {
          words[key] = [psh];
        }
      } else {
        path.push(key);
        doObj(obj[key]);
        path.pop();
      }
    }
  };
  doObj(lexicon);
  return words;
};
var lexicon_flat = listWordsProps();
var queryLexPath = function(pth, includeArchaic, inclkeys) {
  var ret = {};
  var keylist = [];
  for (key in lexicon_flat) {
    var l = [];
    for (var i = 0; i < lexicon_flat[key].length; i++) {
      if (!includeArchaic && lexicon_flat[key][i].hasOwnProperty("archaic")) {
        continue;
      }
      if (JSON.stringify(pth) == JSON.stringify(lexicon_flat[key][i].path.slice(0, pth.length))) {
        l.push(lexicon_flat[key][i]);
      }
    }
    if (l.length > 0) {
      ret[key] = JSON.parse(JSON.stringify(l));
      keylist.push(key);
    }
  }
  if (inclkeys) {
    ret["keys"] = keylist;
  }
  return ret;
};
var splitword = function(w) {
  var i = 0;
  var r = [];
  var c = "";
  while (i < w.length) {
    c = w[i];
    i++;
    if (i < w.length && (w[i] == "h" || w[i] == "l")) {
      c += w[i];
      i++;
    }
    r.push(c);
  }
  return r;
};
var sortAlpha = function(word1, word2) {
  var order = ["d", "g", "x", "j", "f", "v", "th", "s", "z", "sh", "zh", "sl", "zl", "m", "n", "a", "el", "e", "ol", "i", "y", "uh", "ul", "c", "t", "k", "ah", "eh", "o", "u"];
  var l1 = splitword(word1);
  var l2 = splitword(word2);
  var i = 0;
  while (i < l1.length && i < l2.length) {
    if (l1[i] != l2[i]) {
      return order.indexOf(l1[i]) - order.indexOf(l2[i]);
    }
    i++;
  }
  return l1.length - l2.length;
};
var tonewortho = function(text) {
  var l = splitword(text);
  return l.map(function(chr) {
    switch (chr) {
      case "eh": return "\u00ea";
      case "ah": return "\u00e2";
      case "ul": return "\u00fc";
      case "uh": return "\u00fb";
      case "ol": return "\u00f6";
      case "el": return "\u00eb";
      case "sl": return "l";
      case "zl": return "r";
      case "sh": return "\u0161";
      case "zh": return "\u017e";
      case "th": return "\u0163";
      case "Sl": return "L";
      case "Zl": return "R";
      case "Sh": return "\u0160";
      case "Zh": return "\u017d";
      case "Th": return "\u0162";
      default: return chr;
    }
  }).join("");
};
var tooldortho = function(text) {
  return text.split("").map(function(chr) {
    switch (chr) {
      case "\u00ea": return "eh";
      case "\u00e2": return "ah";
      case "\u00fc": return "ul";
      case "\u00fb": return "uh";
      case "\u00f6": return "ol";
      case "\u00eb": return "el";
      case "l": return "sl";
      case "r": return "zl";
      case "\u0161": return "sh";
      case "\u017e": return "zh";
      case "\u0163": return "th";
      case "L": return "Sl";
      case "R": return "Zl";
      case "\u0160": return "Sh";
      case "\u017d": return "Zh";
      case "\u0162": return "Th";
      default: return chr;
    }
  }).join("");
};
//find all <span class="st"></span> and swap orthography of contents
var swaportho = function(tonew) {
  var ls = document.getElementsByClassName('st');
  for (var i = 0; i < ls.length; i++) {
    if (tonew) {
      ls[i].innerText = tonewortho(ls[i].innerText);
    } else {
      ls[i].innerText = tooldortho(ls[i].innerText);
    }
  }
};
var findST = function(query) {
  for (var k in lexicon_flat) {
    for (var i = 0; i < lexicon_flat[k].length; i++) {
      for (var w = 0; w < lexicon_flat[k][i].defs.length; w++) {
        if (lexicon_flat[k][i].defs[w] == query) {
          return k;
        }
      }
    }
  }
  return null;
};
var formatST = function(raw, updated) {
  if (raw != null) {
    return "<a href=\"lexicon.html#" + raw + "\" class=\"st\">" + (updated ? tonewortho(raw) : raw) + "</a>";
  } else {
    return "[none yet]";
  }
};
var isNewOrtho = function(str) {
  var chrs = ["\u00ea", "\u00e2", "\u00fc", "\u00fb", "\u00f6", "\u00eb", "\u0161", "\u017e", "\u0163", "\u0160", "\u017d", "\u0162", 'r', 'R'];
  for (var i = 0; i < chrs.length; i++) {
    if (str.includes(chrs[i])) {
      return true;
    }
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'l' || str[i] == 'L') {
      if (i == 0) {
        return true;
      } else if (!['s', 'S', 'z', 'Z', 'e', 'o', 'u'].includes(str[i-1])) {
        return true;
      }
    }
  }
  return false;
};
