const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
   process.env.MONGODB_URI || "mongodb://localhost/plantsinfo",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

  const plantSeed = [
      {
      plant_name: "Rio Series Mandevilla",
      imageurl: "https://texassuperstar.com/plants/mandevilla_rio/originals/mandevilla_RioHotPink_PB142657.JPG",
      description: "The Rio series mandevillas sport glossy foliage and broad, showy, trumpet–shaped flowers that come in pink, hot pink, and deep red. These mandevillas grow upright with little twining. Excellent plants around pools or wherever a colorful, tropical effect is needed.",
      size: "Height- 2 feet tall, Width- 2 feet wide",
      exposure:" Full sun for part day; likes afternoon shade",
      plant_type: "Annual",
      care: "These compact plants grow best in patio containers, and can be grown alone or mixed with other annuals. They tolerate summer heat, but would benefit from some afternoon shade. Well drained container mix, or in soil bed with high organic matter",
      bloom_time: "spring",
      price:  5.99
   },
   {
      plant_name: "Texas Bluebonnet",
      imageurl: "https://texassuperstar.com/plants/bluebonnet/LBJ_RoyalBlue_Bluebonnet/LBJ%20bluebonnet50[1].jpg",
      description: "The state flower of Texas! This popular low maintenance winter annual is now available in white and pink in addition to the classic blue",
      size: "Height- 1 foot tall, Width- 1 foot wide",
      exposure:"Full sun",
      plant_type: "Annual",
      care: "For maximum spring show, plant scarified seed and/or transplants in fall; be careful not to water too often",
      bloom_time: "March to May",
      price:  5.99
   },
   {
      plant_name: "Angelonia",
      imageurl: "https://texassuperstar.com/plants/angelonia/IMG_4105b.jpg",
      description: "Angelonia is a spreading annual with upright flower spikes that resemble miniature snapdragons. The Serena™ series are the only angelonias that are grown from seed. Flower colors available include white, pink, purple, lavender and lavender pink. Angelonia can be used as a border planting, a ground cover or as a trailing plant for mixed containers",
      size: "Height - 12 to 18 inches",
      exposure:"Full sun",
      plant_type: "Annual",
      care: "Very reliable performer in all areas of Texas; tolerates heat well",
      bloom_time: "Summer until frost",
      price: 5.99
   },
   {
      plant_name: "Mari–mum",
      imageurl: "https://texassuperstar.com/plants/marimum/marimum2.JPG",
      description: "Mari-mum is derived from a combination of the terms: marigold and chrysanthemum (fall garden mum) and denotes large-flowered American marigolds. They are hybrids characterized by earlier blooming and possess a similar flower form.",
      size: "Height — 1 foot tall; width — 1 foot wide",
      exposure:"Full sun",
      plant_type: "Annual",
      care: "Mari–mums need a sunny spot with well–drained soil. Incorporate organic matter and fertilizer as needed. To avoid spider mites, plant transplants, not yet in bloom, in early–mid August",
      bloom_time: "Summer until frost",
      price:  5.99
   },
   {
      plant_name: "Laura Bush Petunia",
      imageurl: "https://www.plantanswers.com/petunia/laura_bush1.jpg",
      description: "A hybrid between VIP and old fashioned petunia which was born & bred in Texas. This reseeding, old fashioned petunia has fragrant violet flowers on a vigorous, heat–tolerant plant. Does well even in alkaline soils.",
      size: "Height — 24 inches tall; width — 36 inches wide",
      exposure:"Full sun",
      plant_type: "Annual",
      care: " Petunias should be planted in full sunlight, they need a minimum of seven hours of direct sun. Average Water Needs, Water regularly",
      bloom_time: "Summer until frost",
      price: 5.99
   },
   {
      plant_name: "Zinnias",
      imageurl: "https://texassuperstar.com/plants/zinnia/zinnias_2.jpg",
      description: "Zinnias are low-growing species that is suited for the front of the flower bed and is available in colors of orange, yellow, and white.",
      size: " Height — 12 to 18 inches",
      exposure:"Full sun",
      plant_type: "Annual",
      care: " Very heat tolerant; do not overwater, Adaptable to soil type if well drained and a variety of potting mixes",
      bloom_time: "Late spring until first frost",
      price:  5.99
   },

  {
      plant_name: "Whopper Begonias",
      imageurl: "https://texassuperstar.com/plants/whopperbegonias/whopper_begonias_1.jpg",
      description: "Whopper begonias produce huge clusters of big blooms for a spectacular show that can last all summer. Whoppers an be planted in containers,used as a filler in the landscape, or behind shorter annuals in a flowerbed.",
      size: " Height: 24–30 inches, Width-12–16 inch",
      exposure:"Shade, Partial Sun",
      plant_type: "Annual",
      care: " Place in a part sun to shade location with well drained soil. Keep soil evenly moist but do not overwater. Feed weekly. No need to deadhead.",
      bloom_time: "Late Spring, Spring, Summer, Autumn, Late Summer",
      price: 5.99
  },

  {
      plant_name: "Dakota Gold Helenium",
      imageurl: "https://www.panamseed.com/dispthumb.aspx?imgsize=Display&imageid=167209",
      description: "Dakota Gold’ grows typically as low cushions of foliage topped with bright yellow flowers. They are good for low input landscapes where irrigation water is limited.",
      size: " Height: 7-9 inches, Width: 6-8 inch",
      exposure:"Full Sun",
      plant_type: "Annual",
      care: " To promote branching and encourage lots of flowers, and to keep them from sprawling, cut the plants back with hedge shears, just as you would asters, in early summer. Clip the flowers off as they fade in early fall, and they’re likely to continue to bloom for up to 10 weeks, or until frost.",
      bloom_time: "Late Spring",
      price:  5.99
},
{
   plant_name: "Garden Phlox",
   imageurl: "https://texassuperstar.com/plants/phloxvictoria/victoria2.jpg",
   description: "Hardy perennial with showy clusters of magenta pink blossoms. Lighter green foliage, open growth habit.Attracts butterflies and other pollinatiors",
   size: "Height- 3 feet tall, Width- 2 feet wide",
   exposure:"Full sun",
   plant_type: "Perennial",
   care: "Keep soil moist by watering thoroughly on a regular basis.Water the soil rather than phlox foliage to aid in disease prevention.If you must water overhead, water early in the morning so plants will dry rapidly in the sun.",
   bloom_time: "Summer",
   price: 7.99
},

{
   plant_name: "Plumbago",
   imageurl: "https://texassuperstar.com/plants/plumbago/plumbago2.jpg", 
   description: "Tender perennial with profuse blue flowers which thrives in the hot Texas summer. Disease–, pest– and deer–resistant. Sometimes called “sky flower” because of the sky–blue color of its flowers. Native of South Africa.",
   size: "Height- 3-4 feet tall, Width- 5 feet wide",
   exposure:"FUll Sun, Partial Sun",
   plant_type: "Perennial",
   care: "Plumbago can be a bit rambling if not pruned; prune spent flowers to encourage re–blooming and to maintain desired plant shape",
   bloom_time: "May till Frost",
   price: 9.99
},

{
   plant_name: "Dwarf Mexican Petunia",
   imageurl: "https://texassuperstar.com/plants/ruellia/Katiedwarfruellia.jpg",
   description: "Spectacular, low–growing, heat–tolerant perennial with profusions of violet, light pink or white flowers. Highly pest resistant. Quickly fills in as a ground cover.",
   size: "Individual plants usually less than one foot tall and wide",
   exposure:"Full sun or partial shade",
   plant_type: "Perennial",
   care: "Don’t plant in full sun if the heat is brutal where you live.Give the plant extra water right after you plant it. Plant in sun or shade",
   bloom_time: "Early summer till frost",
   price: 6.99
},

{
   plant_name: "Malvaviscus arboreus",
   imageurl: "https://texassuperstar.com/plants/malvaviscus/Malvaviscus-Pam_Puryear_100_1897_sm.jpg",
   description: "A rapidly growing, coarse textured plant that produces a profusion of “turban–like” flowers in various colors ranging from bright red to pink to white. Flowers attract hummingbirds and butterflies. Plants produce abundant suckers from the base and the upright stems branch infrequently.",
   size: "Height: 3 to 6 feet with about equal spread",
   exposure:"Sun or shade; flowers heavier in sun, foliage is more attractive in shade",
   plant_type: "Perennial",
   care: "To keep at a desirable height and shape, prune back after a couple years.  Can be kept cut back to give the appearance of a ground cover, though it doesnt spread by either rhizomes or stolons but by layering. Will bloom even when cut short",
   bloom_time: "Summer till frost",
   price: 9.99
},

{
   plant_name: "Texas Gold Columbine",
   imageurl: "https://texassuperstar.com/plants/columbine/texasgold1a.jpeg",
   description: "Cool season perennial with attractive foliage and stunning, long–spurred yellow blossoms. Native to shady areas in Big Bend.",
   size: "Height: 2 feet Width: 2 feet",
   exposure:"Dappled shade",
   plant_type: "Perennial",
   care: "Texas Gold will do well if receives one inch of water (from irrigation or rain) every 7 to 10 days so the soil stays moist.  Apply a slow-release, high nitrogen fertilizer in October, December and February. Cut back dead growth.",
   bloom_time: "3–4 weeks in early–mid spring",
   price: 8.99
},

{
   plant_name: "Mystic Spires Blue Salvia",
   imageurl: "https://texassuperstar.com/plants/salviamysticspires/Salvia_MysticSpiresBlue.JPG",
   description: "Mystic Spires Blue Salvia is a compact form of another popular salvia called ‘Indigo Spires’. Though shorter than ‘Indigo Spires’, it flowers even more freely during the entire growing season. It produces masses of true blue flowers that mix nicely with other annuals and perennials, is tolerant of heat and humidity (low and high), and is not bothered by pests or diseases or deer.",
   size: "Height: 18-30 inches",
   exposure:"Full Sun",
   plant_type: "Perennial",
   care: " Mystic Spires Blue Salvia is hardy to USDA hardiness zone 7 with good drainage; excess water and fertilizer can result in excessive vegetative growth and lack of flowers; if needed, plants can be pruned during the growing season as reflowering occurs quickly; shoots can be pruned to 12 inches or so in the fall after being killed by freezing, but refrain from pruning to the ground until growth is strong in the spring.",
   bloom_time: "Early Summer to Frost",
   price: 11.99
},

{
   plant_name: "Blue Princess Verbena",
   imageurl: "https://texassuperstar.com/plants/verbenablue/blueprincessa.jpg",
   description: "This butterfly attracting, easy care perennial has masses of beautiful, lavender blue flowers. Resistant to powdery mildew.",
   size: "Height: 1 foot tall. Width:3 feet",
   exposure:"Full Sun",
   plant_type: "Perennial",
   care: "Shear between bloom cycles to promote rebloom",
   bloom_time: "Early spring through late fall",
   price: 15.99
},

{
   plant_name: "Flare Rose Mallow Hibiscus",
   imageurl: "https://texassuperstar.com/plants/hibiscusflare/Peppermint_Flare/Peppermint-Flare-hibiscus12a.jpg",
   description: "Low maintenance perennial with large, showy, high quality fuchsia-colored flowers. Improved sterile hybrid so it's in almost constant bloom summer till frost. A very refined H. moscheutos type; tolerates alkaline soils.",
   size: "Height: 4 foot tall. Width:4 feet",
   exposure:"Full Sun",
   plant_type: "Perennial",
   care: "Plant in well-drained, fertile soil – tolerates alkaline soil and water. Add 2 to 3 inches of mulch to maintain moisture. Use diluted general-purpose fertilizer several times during the growing season. Somewhat cold tolerant, but will die down to the ground in the harsh winters. Can cut dead stalks back to the ground in the winter. It grows new stalks each spring.",
   bloom_time: "Summer till frost",
   price: 7.99
},

{
   plant_name: "Belinda’s Dream",
   imageurl: "https://s3.amazonaws.com/cdn.edmundsroses.com/images/popup/24316.jpg",
   description: "Belinda’s Dream is disease tolerant and has gorgeous flowers. Used as a specimen plant, a hedge or even in a large pot, this rose has the impact and beauty of a modern hybrid tea, but is much more disease and soil tolerant. The large, very double pink blossoms come in large clusters from spring until frost.",
   size: "Height: 5 feet tall. Width:5 feet",
   exposure:"Full sun, good air circulation",
   plant_type: "Rose Plant",
   care: "Keep moist until established (usually requires one month to establish). Average water needs during growing season.Light pruning improves appearance and blooming frequency.",
   bloom_time: "Mid spring through Summer",
   price: 17.99
},


{
   plant_name: "Sea Foam",
   imageurl: "https://www.siteone.com/medias/sys_master/root/h09/h3a/8972972982302/246919-1-1200Wx1200H.jpg",
   description: "This is a rambling rose that can be used as a short climber. The creamy white blossoms glow in the nighttime garden",
   size: "Height: 8 feet. Width:4 feet",
   exposure:"Full sun. Good air circulation",
   plant_type: "Rose Plant",
   care: "Keep moist until established (usually requires one month to establish). Average water needs during growing season.Light pruning improves appearance and blooming frequency.",
   bloom_time: "Mid spring through Summer",
   price: 15.99
},

{
   plant_name: "Red Cascade",
   imageurl: "https://2.bp.blogspot.com/-xx_B-vLZ0As/Tgn283zyjnI/AAAAAAAAAos/idCvIioDJH8/s1600/comp+Red+Cascade+comp+062711+%252827%2529.jpg",
   description: "This is a rambling rose that can be used as a short climber. The creamy white blossoms glow in the nighttime garden",
   size: "Height: 1-2 feet",
   exposure:"Full sun.",
   plant_type: "Rose Plant",
   care: "As with other roses, constantly soggy or wet soil conditions can cause root rot and other plant diseases. So make sure to plant in well-drained soil.",
   bloom_time: "Spring, summer, and fall.",
   price: 8.99
},

{
   plant_name: "Caldwell Pink",
   imageurl: "https://redneckrosarian.files.wordpress.com/2011/09/img_20110611_101715.jpg",
   description: "This everblooming rose is one of the most popular roses with landscape designers. Its double, lilac-pink flowers form clusters that can be seen at a distance, and the compact bush fills out nicely with a minimum of pruning and maintenance.",
   size: "Height: 4 feet. Width:4 feet",
   exposure:"Full sun, good air circulation",
   plant_type: "Rose Plant",
   care: "Keep moist until established (usually requires one month to establish). Average water needs during growing season.",
   bloom_time: "Mid spring through Summer",
   price: 12.99
},

{
   plant_name: "Ducher",
   imageurl: "https://1.bp.blogspot.com/-izUWuzWFA-I/Tpc6T_9xl2I/AAAAAAAACNM/wZS8DPuQpxA/s1600/Prosperity+bloom+cluster+10-06-11.jpg",
   description: "Ducheris a white China roses with pure white petals . The double blooms have a fruity fragrance. The compact and rounded, twiggy bush is a nice landscape shrub either as a specimen plant or in a drift of 3 to 5 plants. The soft fullness of the foliage and showy flowers make this an excellent choice to blend with more structured shrubs in a landscape. It works well in a large pot.",
   size: "Height: 6 feet. Width:4 feet",
   exposure:"Full sun, good air circulation",
   plant_type: "Rose Plant",
   care: "Keep moist until established (usually requires one month to establish). Average water needs during growing season.",
   bloom_time: "Mid spring through Summer",
   price: 17.99
},

{
   plant_name: "Knock Out",
   imageurl: "https://images.squarespace-cdn.com/content/v1/59e51767ccc5c5f1c5762e04/1510779383349-5K0PHV7I2E4B1ABHRFQH/ke17ZwdGBToddI8pDm48kEAwEK07li2CqplQOpajpjV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0rQeu_A0VlcGJEiWdfSJ_zWClRb03bxeWcSdIukqz9GKJFOzN6izfXKHWEkYAHQlpA/PinkKnockOut5.jpg",
   description: "This shrub rose has stunning flower power that provides an almost non-stop abundance of cherry red, single blossoms. Black spot resistant, drought tolerant and self-cleaning, this rose suits every garden and every lifestyle. ",
   size: "Height: 6 feet. Width:6 feet",
   exposure:"Full sun, dappled shade in afternoons",
   plant_type: "Rose Plant",
   care: "Keep moist until established (usually requires one month to establish). Average water needs during growing season.",
   bloom_time: "Mid spring through Summer",
   price: 19.99
},


{
   plant_name: "Mutabilis",
   imageurl: "https://xeraplants.com/wp-content/uploads/2017/11/Rosa-x-odorata-Mutabilis.png",
   description: "Amazing medium sized single blossoms that pass through three distinct color phases beginning with yellow, changing to pink, and finally to crimson. Mutabilis is also known as “The Butterfly Rose” because its blossoms look like brightly colored butterflies that have landed on the bush. ",
   size: "Height: 6 feet. Width:6 feet",
   exposure:"Full sun. Good air circulation.",
   plant_type: "Rose Plant",
   care: "Keep moist until established (usually requires one month to establish). Average water needs during growing season. Appears to tolerate highly saline irrigation water when drip irrigated.Be sure to give it plenty of room to grow.",
   bloom_time: "Mid spring through Summer",
   price: 16.99
},

{
   plant_name: "Cecile Brunner",
   imageurl: "https://img.crocdn.co.uk/images/products2/pl/00/00/00/11/pl0000001169.jpg?width=940&height=940",
   description: "Perfectly shaped, little pink buds earned 'Cecile Brunner' its nickname. Blossoms are a soft silvery pink and look like a hybrid tea in miniature. They appear in clusters and have a sweet fragrance.",
   size: "Height: 4 feet. Width:3 feet",
   exposure:"Full sun, dappled shade in afternoons",
   plant_type: "Rose Plant",
   care: "Keep moist until established (usually requires one month to establish). Average water needs during growing season.",
   bloom_time: "Mid spring through Summer",
   price: 14.99
},

{
   plant_name: "Monstera",
   imageurl: "https://nouveauraw.com/wp-content/uploads/2020/01/mature-Monstera-Plant-800.png",
   description: "Monstera is famous for its beautiful broad green leaves with natural leaf-holes, called fenestrations, which have led to the rise of its nickname, ‘swiss cheese plant’.",
   size: "26'-36' tall, Width- 20-26'wide",
   exposure:"Bright indirect to full sun",
   plant_type: "House Plant",
   care: "Avoid strong, direct sunlight because it may burn the leaves.Water your Monstera when the top 50-75% of the soil is dry.For best results, feed your plant once a month throughout the spring and summer.",
   bloom_time: "N/A",
   price: 55
},


{
   plant_name: "Snake Plant",
   imageurl: "https://nouveauraw.com/wp-content/uploads/2020/02/Snake-Plant-Sansevieria-Cylindrica800.png",
   description: "Snake plant have stiff, upright, sword-like leaves that may be banded or edged in gray, silver, or gold. Snake plant's architectural nature makes it a natural choice for modern and contemporary interior designs. It's one of the best houseplants around.If you're looking for an easy-care houseplant, you can't do much better than snake plant",
   size: "Height- 8' to 22' tall",
   exposure:"Bright Sunlight",
   plant_type: "House Plant",
   care: "Water your Snake Plants every 2-8 weeks.Just be sure to keep Snake Plants out of the direct, hot sun (west or south window) because they’ll burn in a heartbeat",
   bloom_time: "N/A",
   price: 10.72
},

{
   plant_name: "Pothos",
   imageurl: "https://i.pinimg.com/originals/b4/40/0c/b4400c2c7309cca921bf33b768103b47.jpg",
   description: "Pothos is arguably the easiest of all houseplants to grow.This trailing vine has pointed, heart-shaped green leaves, sometimes variegated with white, yellow, or pale green.",
   size: "Height: 6 to 10 feet",
   exposure:"Shade to part shade outdoors, bright indirect light indoors",
   plant_type: "House Plant",
   care: "Pothos aren’t heavy feeders, but since there are no nutrients in most potting soils, feed monthly to bi-monthly with any balanced houseplant fertilizer.Indoors, pothos prefers bright but indirect light.Variegated plants sometimes lose their leaf pattern and revert to all-green plants if they don't get enough light; moving them to brighter conditions usually restores the variegation. Suddenly paler-looking leaves mean the plant is getting too much sun.",
   bloom_time: "N/A",
   price: 9.99
},

{
   plant_name: "Tradescantia",
   imageurl: "https://i.pinimg.com/originals/5c/11/9f/5c119f8c6057038d12ffa088b0f164b6.jpg",
   description: "The Tradescantia family is large, with several colorful varieties. They grow best in a hanging basket, or where their long stems have room to drape. Leaf patterns and colors depend on the variety, but many have white and green striped leaves with purple undersides. A few are striped with purple or pink.",
   size: "Height: 6' to 9' with 12-14' spread",
   exposure:"Bright, indirect sun.",
   plant_type: "House Plant",
   care: "Keep your Tradescantia away from overly-bright light, and allow the soil to dry out a bit between waterings.",
   bloom_time: "N/A",
   price: 39.99
},

{
   plant_name: "Geranium",
   imageurl: "https://meansnursery.com/wp-content/uploads/2018/05/geranium-basket.jpg",
   description: "Geranium plant leaves are broadly circular in form. The flowers have five petals and are coloured white, pink, purple or blue, often with distinctive veining.",
   size: "Height: 3 feet Width: 3 feet",
   exposure:"Bright to intense light; 60-75°F",
   plant_type: "House Plant",
   care: "Locate your geraniums in an area with at least six to eight hours of sunlight. Since these plants must be protected from cold, wait until the threat of frost has passed before planting.",
   bloom_time: "N/A",
   price: 9.99
},

{
   plant_name: "Jasmine",
   imageurl: "https://mulchmasters.com/product-images/star-jasmine.jpg",
   description: "The plant produces charming little star-shaped white blooms that often have pink highlights on the petals. In addition to looking beautiful, the Jasmine flower also has a pleasant sweet smell that is calming to your body.",
   size: "Height: 1.6 to 9.8 feet tall",
   exposure:"Bright Sunlight",
   plant_type: "House Plant",
   care: " Make sure that it is getting sunlight for up to four hours a day.Jasmine plants need a lot of water, especially when they are in bloom. It is best to always keep the soil slightly moist. The plants should be watered on a weekly basis, but if the soil becomes dry before that, water the plant early.",
   bloom_time: "Spring until fall",
   price: 16.99
},

{
   plant_name: "African Violet",
   imageurl: "http://www.desktopimages.org/pictures/2013/1028/12/purple-african-violets-wallpaper-44114.jpg",
   description: " African violets instantly add color to any room.They bloom several times a year with little effort from you.  They come in hundreds of varieties, some with variegated foliage or ruffled or white-edged blooms.",
   size: "Height: 8' , Width:16'",
   exposure:"Medium to bright light",
   plant_type: "House Plant",
   care: "African violets prefer the same temperatures most people find comfortable: between 70-80°F during the day, and around 65–70°F at night. Water from below. Fill the saucer using room temperature water. Let sit for about an hour and then pour excess water out. Allow the plant to dry out between waterings.",
   bloom_time: "Year around",
   price: 19.99
},

{
   plant_name: "Vriesia Red Chestnut",
   imageurl: "https://www.mashtalegypt.com/wp-content/uploads/2019/10/vriesea-vermelha.jpg",
   description: "The flaming sword houseplant, Vriesea splendens, is one of the most common bromeliads used for indoor decoration.The flaming sword houseplant is commonly named for its red bracts that appear when the plant is three to five years old",
   size: "Height: 12'. Width:15'",
   exposure:"Shade/Part Shade",
   plant_type: "House Plant",
   care: "Good light but no direct sunlight is what’s needed.Avoid setting it near heat sources such as radiators, because moisture is what this tropical plant needs most.Keep the soil mix barely moist and check that water drains properl",
   bloom_time: "End of Winter or Summer",
   price: 25
},

{
   plant_name: "Crinkle-Leaf Plant",
   imageurl: "https://worldofsucculents.com/wp-content/uploads/2013/08/Adromischus-cristatus3.jpg",
   description: "This small plant has triangle-shaped leaves covered in tiny hairs. The end of the leaf forms a crinkle. It is easy to grow, making it perfect for beginners.It grows a tall, green stalk from which a white flower blooms.",
   size: "Height: 18', Width: 24'",
   exposure:"Full sun to partial shade",
   plant_type: "Succulent",
   care: "Crinkle Leaf Plant” tends to need a bit less water than other succulents. It’s best to use the “soak and dry” method, and allow the soil to dry out completely between waterings. ",
   bloom_time: "N/A.",
   price: 4.49

},


{
   plant_name: "Sunrise",
   imageurl: "https://i.pinimg.com/originals/bb/83/38/bb833823edc3087957ca4d61e0f6436f.jpg",
   description: "This variegated succulent has pink and green leaves. As the rosettes grow, they can creep outwards as a mat in rock gardens, or in container gardens it trails over the edge, making it great “filler or spiller.",
   size: "Height: 6' . Width:6' ",
   exposure:"Partial sun to partial shade",
   plant_type: "Succulent",
   care: "Sunrise’ has typical watering needs for a succulent, but it is sensitive to over-watering. It’s best to use the “soak and dry” method, and allow the soil to dry out completely between waterings.Plant in an area of your garden that gets filtered sunlight or plenty of shade. If planting indoors, place in a room that gets a filtered light.",
   bloom_time: "N/A.",
   price: 8.99
},

{
   plant_name: "Aloe perfoliata",
   imageurl: "https://thetilth.com/wp-content/uploads/2019/11/Aloe-perfoliata-Mitre-Aloe.jpg",
   description: "Aloe perfoliata “Mitre Aloe” gets its name from the mitre-shape the leaves make when they curve upwards towards the center. The clusters spread outward instead of upwards as it grows.Depending on where it is grown, “Mitre Aloe” can have many different appearances. When it is stressed in full sun, the leaves can turn red.",
   size: "Height: 12'. Width:24' ",
   exposure:"Full sun to partial shade",
   plant_type: "Succulent",
   care: "Mitre Aloe” has typical watering needs for a succulent. It’s best to use the “soak and dry” method, and allow the soil to dry out completely between waterings.",
   bloom_time: "N/A.",
   price: 4.49
},

{
   plant_name: "Chocolate Drop",
   imageurl: "https://img.particlenews.com/img/id/3jlRhz_0P1m3XLj00?type=thumbnail_800x600",
   description: "This grey-green succulent has flat oval leaves with purple spots. It is a great succulent for beginners, and does well indoors with bright light. Watch for white, tube-shaped flowers in the Summer, although it rarely blooms indoors.",
   size: "Height: 8'. Width:8' ",
   exposure:"Bright indoor light",
   plant_type: "Succulent",
   care: "Adromischus maculatus ‘Calico Hearts’ is sensitive to over-watering. It’s best to use the “soak and dry” method, and allow the soil to dry out completely between waterings.Plant in an area of your garden that gets 6 hours of sunlight a day. If planting indoors, place in a room that gets a lot of sunlight, such as near a southern-facing window.",
   bloom_time: "N/A.",
   price: 7.49
},

{
   plant_name: "Salad Bowl",
   imageurl: "https://succulentalley.b-cdn.net/wp-content/uploads/2020/07/Aeonium-lancerottense-alloe..jpg",
   description: "This bright green succulent has a large rosette. The tips of its leaves blush red when happily stressed. Each plant grows two to three rosettes. It is monocarpic, meaning it will die after blooming. Watch for off-white flowers in the spring.",
   size: "Height: 12'. Width:36' ",
   exposure:"Bright indoor light",
   plant_type: "Succulent",
   care: "It’s best to use the “soak and dry” method, and allow the soil to dry out completely between waterings.Plant in an area of your garden that gets 6 hours of sunlight a day. If planting indoors, place in a room that gets a lot of sunlight, such as near a southern-facing window.",
   price: 9.49
},

{
   plant_name: "Ice Plant",
   imageurl: "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/CgQAAOSw901dIzf-/$_3.JPG",
   description: "This compact, fast-growing succulent has a deceptive name. Although the green-leaved plant is known as “Ice Plant,” it is not cold hardy. It does well indoors and is great for beginners. The thick blue-green leaves stack opposite each other as they grow up the stem. It has yellow flowers that look similar to daisies that bloom in the Spring.",
   size: "Height: 8'. Width:12' ",
   exposure:"Full to Partial Sun.",
   plant_type: "Succulent",
   care: "Ice Plant is not cold hardy, so if you live in a zone that gets colder than 30° F (-1.1° C), it’s best to plant this succulent in a container that can be brought indoors.",
   bloom_time: "N/A.",
   price: 7.49
}
  ];

  db.Plant.remove({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

 
