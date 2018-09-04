const { db } = require('./server/db');
const { green, red } = require('chalk');
const { Campus, Student } = require('./server/db');

const campuses = [
  {
    name: 'Northern Air Temple',
    imageUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/3/3c/Northern_Air_Temple_in_171_AG.png/revision/latest/scale-to-width-down/200?cb=20151115113702',
    address: 'Northern mountains of Earth Kingdom',
    description:
      'The Northern Air Temple was located in the mountains along the northern coast of the Earth Kingdom and was one of the two temples that exclusively housed male Air Nomads. Prior to the Air Nomad Genocide, it also served as the location of the bison polo championship. Years after the devastating blow the Fire Nation had dealt to the Air Nomads, the deserted temple was colonized by a group of Earth Kingdom refugees, led by a renowned inventor, after their town was destroyed in a flood. The mechanist modified the temple to make life easier for the new inhabitants. The temple once held statues and paintings; however, these and other parts of the temple were destroyed by the mechanist to make room for his new technology. The temple returned to its more traditional appearance after it was restored by the Air Acolytes after the end of the Hundred Year War, though it was destroyed in 171 AG when Ghazan used his lavabending to melt the foundations.',
  },
  {
    name: 'Southern Air Temple',
    imageUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/3/33/Southern_Air_Temple_outlook.png/revision/latest?cb=20140103181304',
    address: 'Patola Mountain Range',
    description:
      'The Southern Air Temple is located in the Patola Mountain Range and was one of two temples that exclusively housed male Air Nomads before the beginning of the Hundred Year War. It was notable for being the home of Avatar Aang. It features an airball arena and an inner sanctuary that houses numerous statues of past Avatars. The temple also contains a statue of Monk Gyatso and was the last known residence of the winged lemur species. It was restored to its former glory by the Air Acolytes after the end of the Hundred Year War.',
  },
  {
    name: 'Eastern Air Temple',
    imageUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/1/13/Restored_Eastern_Air_Temple.png/revision/latest?cb=20131102115726',
    address: 'Southeastern mountain range of Earth Kingdom',
    description:
      'The Eastern Air Temple is located in a mountain range in the southeastern Earth Kingdom and was one of the two temples that exclusively housed female Air Nomads. The site includes many statues of Avatar Yangchen. After the Air Nomads were killed, the temple became the home of Guru Pathik, who taught Avatar Aang how to unlock his chakras and gain mastery of the Avatar State. It is notable for being situated on three separate mountains, connected by bridges and was the place where all young airbenders would choose the flying bison that would become their life companions. According to Tenzin, it is the most spiritual of all air temples.',
  },
  {
    name: 'Western Air Temple',
    imageUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/3/37/Western_Air_Temple.png/revision/latest?cb=20140821204332',
    address: 'North of the Fire Nation',
    description:
      'The Western Air Temple is located in the mountains north of the Fire Nation and was one of the two temples that exclusively housed female Air Nomads. Like the Eastern Air Temple, it boasts statues of Yangchen. The temple is notable in that, unlike the other three temples, it is situated underneath the edge of a cliff instead of atop a mountain. The spires seem as though they were built upside-down, and because of that, the temple is hidden from passersby. The site is also decorated with many flying bison paintings that have remained in relatively good condition, unlike those in the Northern Temple. Renowned as the birthplace of past Avatar Yangchen, Avatar Aang and his friends later made it their temporary home in the later stages of the War.',
  },
  {
    name: 'Air Temple Island',
    imageUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/8/8d/Air_Temple_Island_overview.png/revision/latest?cb=20121107105550',
    address: 'Off coast of Republic City',
    description:
      'Air Temple Island is the most recent air temple, built by Avatar Aang himself, and is home to Tenzin and his family. Located off the coast of Republic City near the entrance of Yue Bay, the tides and its coastal geography keep it secluded from casual access. The island sports several structures, including a large tower and a smaller building nearby, and it is inhabited by some sky bison and a different species of flying lemur, the ring-tailed winged lemur.',
  },
  {
    name: 'Northern Water Tribe',
    imageUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/0/01/Modern_Northern_Water_Tribe_capital.png/revision/latest/scale-to-width-down/350?cb=20150129092956',
    address: 'North Pole',
    description: `The Northern Water Tribe is an independent state located within the realms of the North Pole, ruled by a hereditary monarchic chiefdom. As the oldest division of the three Water Tribes, the Northern Water Tribe dominated both the North Pole as well as the South Pole for centuries. Its capital city, notable for being made almost entirely out of ice, is referred to by the same name. Even though much of its territory encompasses largely inhospitable tundra terrain, the Northern Water Tribe always thrived in its isolation, and grew into a major political and economical power after the Hundred Year War. Unlike its counterpart, the Southern Water Tribe, the North never succumbed to foreign invasions like the massive Siege of the North by the Fire Nation.

    The people of the Northern Water Tribe are traditionally conservative and very spiritual, but still open to change and reform. The Northern waterbending style is the most widespread form, practiced by waterbenders at both poles and in the United Republic of Nations, as raids on the Southern Water Tribe led to the southern style becoming nearly extinct during the Hundred Year War.`,
  },
  {
    name: 'Southern Water Tribe',
    imageUrl:
      'https://static.planetminecraft.com/files/resource_media/screenshot/1436/wpnickus014jz8100207.jpg',
    address: 'South Pole',
    description:
      'The South Pole is the southernmost point on Earth and serves as the spiritual center of the Southern Water Tribe. Located at the center of the pole is an ancient forest containing a portal to the Spirit World, which was reopened by Avatar Korra during the winter solstice in 171 AG.',
  },
];

const students = [
  {
    firstName: 'Aang',
    lastName: 'The Last Airbender',
    email: 'aang@email.com',
    imageUrl: 'https://i.imgur.com/V2NmxaP.jpg',
    bending: 'Avatar',
    gpa: 40,
    campusId: 2,
  },
  {
    firstName: 'Katara',
    lastName: 'Southern Water Tribe',
    email: 'katara@email.com',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4gZSJu7iYTWl5RE1tfseBtmCU2TR3DYUlfFaXlYWLoFWptkJ1Q',
    bending: 'Water',
    gpa: 35,
    campusId: 7,
  },
  {
    firstName: 'Sokka',
    lastName: 'Southern Water Tribe',
    email: 'sokka@email.com',
    imageUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/7/76/Grinning_Sokka.png/revision/latest?cb=20140122221732',
    gpa: 30,
    campusId: 7,
  },
  {
    firstName: 'Toph',
    lastName: 'Beifong',
    email: 'toph@email.com',
    imageUrl:
      'https://jowritesstuff.files.wordpress.com/2016/04/toph2.jpg?w=720&h=536&crop=1',
    bending: 'Earth',
    gpa: 40,
  },
  {
    firstName: 'Prince',
    lastName: 'Zuko',
    email: 'zuko@email.com',
    imageUrl:
      'http://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/thumb/9/94/Prince_zuko_img.jpg/228px-Prince_zuko_img.jpg',
    bending: 'Fire',
    gpa: 38,
  },
];

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  await Promise.all(campuses.map(campus => Campus.create(campus)));

  await Promise.all(
    students.map(async student => await Student.create(student))
  );

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
