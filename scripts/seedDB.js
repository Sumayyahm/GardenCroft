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
   imageurl: "https://i.pinimg.com/originals/50/63/0c/50630cbb5d004a055656f69dd6abd914.jpg",
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
   imageurl: "https://www.trees.com/sites/default/files/inline-images/types-of-roses/blaze-climbing-rose.jpg",
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
   imageurl: "https://www.ces.ncsu.edu/wp-content/uploads/2014/11/Camellia-Harvard.jpg",
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
   imageurl: "https://cdn.shopify.com/s/files/1/0373/4703/3221/products/rose-knockout-double-red-3g-147908_800x.jpg?v=1588419822",
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
   imageurl: "https://i.pinimg.com/originals/d0/0b/a4/d00ba46040705c4025d12bade8fdc746.jpg",
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
   imageurl: "https://1.bp.blogspot.com/_KS8tI-ybaTc/TCS4wnvQIRI/AAAAAAAACz4/toOTo05nQ80/s800/IMG_0001_18.jpg",
   description: "Perfectly shaped, little pink buds earned 'Cecile Brunner' its nickname. Blossoms are a soft silvery pink and look like a hybrid tea in miniature. They appear in clusters and have a sweet fragrance.",
   size: "Height: 4 feet. Width:3 feet",
   exposure:"Full sun, dappled shade in afternoons",
   plant_type: "Rose Plant",
   care: "Keep moist until established (usually requires one month to establish). Average water needs during growing season.",
   bloom_time: "Mid spring through Summer",
   price: 14.99
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

 
