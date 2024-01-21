// src/App.js
import React from 'react';
import './App.css';

function App() {
  const avatars = [
    {
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'http://hildegard.org',
      image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
    },
    {
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x09125',
      website: 'http://anastasia.net',
      image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
    },
    {
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
      website: 'http://ramiro.info',
      image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
    },
    {
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      phone: '493-170-9623 x156',
      website: 'http://kale.biz',
      image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
    },
    {
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      phone: '(254)954-1289',
      website: 'http://demarco.info',
      image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
    },
    {
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      phone: '1-477-935-8478 x6430',
      website: 'http://ola.org',
      image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
    },
    {
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      phone: '210.067.6132',
      website: 'http://elvis.io',
      image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
    },
    {
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      phone: '586.493.6943 x140',
      website: 'http://jacynthe.com',
      image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
    },
    {
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      phone: '(775)976-6794 x41206',
      website: 'http://conrad.com',
      image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
    },
    {
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      phone: '024-648-3804',
      website: 'http://ambrose.net',
      image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>AVATARS</h1>
        <div className="avatar-container">
          {avatars.map((avatar, index) => (
            <div key={index} className="avatar-card">
              <img src={avatar.image} alt={avatar.name} />
              <div className="avatar-details">
                <h2>{avatar.name}</h2>
                <p>Email: {avatar.email}</p>
                <p>Phone: {avatar.phone}</p>
                <p>Website: <a href={avatar.website} target="_blank" rel="noopener noreferrer">{avatar.website}</a></p>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
