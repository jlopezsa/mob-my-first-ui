import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-web';
import Card from './components/Card';

const mokData = [
  {
    "id": "620151c6fc387576b9b079b4",
    "picture": "http://placehold.it/32x32",
    "author": "Lavonne Marsh",
    "email": "[email protected]",
    "about": "Commodo reprehenderit ullamco minim proident sit laboris magna est laboris reprehenderit dolore et veniam velit. Magna sint occaecat et eiusmod. Elit ad est irure pariatur dolor quis mollit. Est pariatur incididunt non non est velit voluptate cupidatat tempor voluptate deserunt nulla laborum qui. Laboris qui velit in proident.\r\n",
    "tags": [
      "occaecat",
      "laborum",
      "laborum",
      "exercitation",
      "magna",
      "eu",
      "eiusmod"
    ],
    "comments": [
      {
        "id": 0,
        "comment": "Ad ad et anim consectetur. Proident sint quis labore nisi proident excepteur aute mollit est laborum. Adipisicing dolor est minim amet minim id nostrud dolore ad excepteur duis. Mollit ad culpa fugiat excepteur adipisicing irure velit nostrud laborum. Et exercitation qui esse anim in tempor excepteur.\r\n"
      },
      {
        "id": 1,
        "comment": "Quis proident est velit laboris velit enim sit minim pariatur. Ex labore mollit qui et. Nostrud aliqua est eiusmod laborum nostrud cupidatat sit reprehenderit ut deserunt. Incididunt velit dolor minim reprehenderit consequat duis pariatur veniam amet est nulla qui. Minim id sunt amet proident do incididunt ullamco officia. Ullamco et labore Lorem aute irure aliqua pariatur quis id sit.\r\n"
      },
      {
        "id": 2,
        "comment": "Velit est aliqua adipisicing deserunt irure eiusmod incididunt labore adipisicing do aute qui fugiat ex. Fugiat ad dolore proident culpa pariatur. Commodo ullamco ullamco ea laborum. Sit officia fugiat nulla duis aliquip Lorem dolore in.\r\n"
      },
      {
        "id": 3,
        "comment": "Irure laboris cupidatat do non ad esse non laboris nisi aliqua aliqua nisi. Sit commodo laboris in adipisicing esse ad minim amet ad. Aliqua esse consequat pariatur ipsum do est ad duis Lorem ad qui enim. Adipisicing enim Lorem minim ut qui ut incididunt ex non nulla incididunt cillum aute. Tempor in aliquip laboris sunt ea qui non ullamco amet aliquip elit dolore ullamco labore.\r\n"
      },
      {
        "id": 4,
        "comment": "In minim anim ipsum proident quis laborum aliquip consectetur aute. Magna sint ad elit veniam quis minim reprehenderit aute sunt qui anim et enim. Ut commodo ut aliqua laboris amet laboris. Officia minim enim quis reprehenderit in cillum sint tempor excepteur ipsum enim sint minim est. Incididunt nisi dolor exercitation dolor. Laborum et aliquip minim dolor laboris.\r\n"
      },
      {
        "id": 5,
        "comment": "Excepteur voluptate ex nulla ut laboris elit magna non id commodo labore culpa ad mollit. Ea ut ullamco reprehenderit dolor aliqua culpa deserunt cupidatat proident nostrud sint proident adipisicing officia. Quis cupidatat ut cillum aute non aliqua eiusmod reprehenderit sint voluptate sint irure sunt sunt. Aliquip cupidatat ut incididunt excepteur fugiat exercitation Lorem sunt commodo incididunt ipsum incididunt dolore. Et irure proident commodo cillum commodo. Voluptate mollit ad deserunt aliquip Lorem incididunt eu proident aliqua irure. Minim cupidatat non cillum do est mollit.\r\n"
      }
    ]
  },
  {
    "id": "620151c6b84fea96ea9f0e89",
    "picture": "http://placehold.it/32x32",
    "author": "Francis May",
    "email": "[email protected]",
    "about": "Culpa minim incididunt reprehenderit sint magna. Et laboris ullamco non aute dolore culpa magna amet aliquip aliqua ut est. Laboris ex eiusmod minim mollit pariatur ea sit sint dolore commodo excepteur ipsum veniam ex. Nulla occaecat minim excepteur mollit esse excepteur quis et culpa occaecat proident sunt.\r\n",
    "tags": [
      "adipisicing",
      "ut",
      "culpa",
      "adipisicing",
      "irure",
      "commodo",
      "enim"
    ],
    "comments": [
      {
        "id": 0,
        "comment": "Nisi excepteur dolore culpa nulla aute cillum cillum sint consectetur aliquip labore magna nulla. Consectetur ipsum aute amet eiusmod irure ea ipsum officia quis pariatur eu adipisicing qui. Aute adipisicing sunt cupidatat ut veniam velit aliquip dolore eu laborum anim esse. Sit irure ex amet eiusmod incididunt incididunt. Cillum veniam aliqua veniam aliqua exercitation. Sint laborum enim aliqua ea dolor laborum eu. Mollit nulla irure duis nostrud ipsum nisi consectetur sit minim cupidatat labore pariatur dolore do.\r\n"
      },
      {
        "id": 1,
        "comment": "Tempor amet ad culpa irure fugiat labore aliquip aute laborum. Magna esse deserunt veniam reprehenderit dolore voluptate cupidatat incididunt non commodo officia. Nostrud est proident qui in aliquip cillum duis anim amet id consequat. Adipisicing non laborum elit sit ad. Cillum adipisicing cillum velit deserunt ut. Voluptate ullamco laboris qui magna anim ad Lorem aliquip occaecat laborum exercitation ad esse sint. Tempor anim deserunt occaecat et mollit voluptate proident.\r\n"
      },
      {
        "id": 2,
        "comment": "Nulla deserunt sint laborum eu minim labore culpa. Consectetur laborum sint amet laborum qui proident do do est. Mollit ad duis irure ullamco minim occaecat consectetur do aute laboris culpa id commodo.\r\n"
      },
      {
        "id": 3,
        "comment": "Officia anim laboris anim Lorem reprehenderit est consectetur ut in aliqua ex. In adipisicing dolore incididunt fugiat eu occaecat reprehenderit. Deserunt non consectetur irure et fugiat cillum ullamco id. Est mollit occaecat dolore enim laboris aliquip.\r\n"
      }
    ]
  },
  {
    "id": "620151c62287c64a37ffb992",
    "picture": "http://placehold.it/32x32",
    "author": "Autumn Lee",
    "email": "[email protected]",
    "about": "Culpa aute pariatur culpa quis reprehenderit laboris culpa mollit adipisicing tempor eiusmod enim. Voluptate duis nisi ipsum est non sint. Eu cupidatat qui exercitation enim sunt enim. Quis sint enim velit occaecat labore. Non ut incididunt amet ullamco. Ad sint ad culpa magna non. Nulla labore eiusmod veniam sint officia qui proident Lorem.\r\n",
    "tags": [
      "consectetur",
      "reprehenderit",
      "do",
      "adipisicing",
      "occaecat",
      "id",
      "ex"
    ],
    "comments": [
      {
        "id": 0,
        "comment": "Esse irure ad in dolore tempor cillum duis cillum ex labore. Anim dolor eu duis eiusmod mollit velit dolore officia mollit magna elit ea do. Occaecat veniam excepteur dolore quis laboris voluptate in.\r\n"
      }
    ]
  },
  {
    "id": "620151c67035fe08824b66aa",
    "picture": "http://placehold.it/32x32",
    "author": "Campos Dawson",
    "email": "[email protected]",
    "about": "Reprehenderit id ad veniam sint aliquip fugiat enim do id quis occaecat ipsum amet. Proident enim consequat cupidatat laboris culpa voluptate aliqua consectetur consectetur quis consectetur sint non. Ut sint tempor aliqua laborum ipsum est et proident tempor dolor laborum sunt in. Ullamco ipsum ex aute officia. Velit consequat sint dolore voluptate. Excepteur excepteur velit proident deserunt eu anim sint do aute mollit. Duis dolor sint nulla veniam tempor nulla officia.\r\n",
    "tags": [
      "ex",
      "mollit",
      "sunt",
      "tempor",
      "fugiat",
      "id",
      "nulla"
    ],
    "comments": [
      {
        "id": 0,
        "comment": "Ex incididunt qui est exercitation irure nisi consectetur ut pariatur sint exercitation et dolore. Reprehenderit enim quis minim ea nulla. Laboris pariatur ipsum qui ut magna anim in ad. Excepteur pariatur cupidatat est sit duis nisi aute occaecat.\r\n"
      },
      {
        "id": 1,
        "comment": "Ipsum duis voluptate et enim incididunt ea. Quis Lorem enim non Lorem deserunt enim culpa pariatur. Laborum deserunt labore voluptate elit dolore deserunt do. Ullamco adipisicing ut proident duis pariatur Lorem incididunt irure occaecat sunt. Exercitation Lorem aliqua irure duis excepteur dolore. Elit veniam cupidatat voluptate elit mollit esse excepteur quis. Deserunt aute tempor eiusmod aliqua consectetur exercitation consectetur est fugiat.\r\n"
      },
      {
        "id": 2,
        "comment": "Officia excepteur laboris minim cupidatat. Aute eu est ipsum ullamco nisi ad et veniam sunt laboris nisi eiusmod laboris esse. Consequat veniam magna occaecat adipisicing id labore pariatur eu aute. Nulla nulla ea quis proident. Sunt ex proident pariatur sit cupidatat veniam laboris sunt excepteur do ex velit elit.\r\n"
      }
    ]
  },
  {
    "id": "620151c691da3838fe91ffce",
    "picture": "http://placehold.it/32x32",
    "author": "Eugenia Lancaster",
    "email": "[email protected]",
    "about": "Nulla nostrud cupidatat consequat qui tempor adipisicing ipsum labore sit quis consequat nisi qui. Nisi adipisicing elit culpa eiusmod sit sint ullamco proident officia veniam officia. Aliquip culpa exercitation dolore dolore nisi.\r\n",
    "tags": [
      "nisi",
      "enim",
      "magna",
      "mollit",
      "exercitation",
      "magna",
      "Lorem"
    ],
    "comments": [
      {
        "id": 0,
        "comment": "Sunt commodo irure tempor ad pariatur. Veniam et occaecat aliquip elit nisi culpa officia fugiat deserunt do ut ad ex consectetur. Commodo nisi fugiat tempor do cupidatat exercitation veniam. Labore aute do non aliquip aute qui nostrud exercitation dolor voluptate. Pariatur occaecat consectetur cillum excepteur id excepteur ea duis laborum amet non. Do nostrud mollit mollit cupidatat enim commodo ea veniam anim exercitation Lorem eiusmod eu anim.\r\n"
      },
      {
        "id": 1,
        "comment": "Sint veniam minim cillum nostrud ex dolor irure incididunt enim dolor amet. Commodo irure excepteur commodo pariatur et et irure est. Est proident elit aliquip ea irure ex fugiat anim tempor nostrud ipsum minim.\r\n"
      },
      {
        "id": 2,
        "comment": "Reprehenderit deserunt velit consequat nulla dolor excepteur nisi ad tempor. Sunt veniam reprehenderit quis aliquip id tempor. Sunt occaecat pariatur anim dolore elit tempor fugiat ea irure. Sint eu sit officia sit cupidatat.\r\n"
      }
    ]
  }
];

const picture = 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png';

function App() {
  return (
    <ScrollView>
      <Text style={styles.title}>Construyendo mi primer UI con React Native</Text>
      <Text style={styles.title}>Julián Jair López Salamanca</Text>
      <FlatList
        data={mokData}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={item => item.id}
        numColumns={1}
        ListFooterComponent={() => (
          <Text style={styles.text}>End of file</Text>
        )}
        onEndReachedThreshold={0.5}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: "red",
    textAlign: 'center',
  }
});
