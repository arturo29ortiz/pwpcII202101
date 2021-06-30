const index = (req, res) => {
  res.render('home/index', {
    title: 'ProjNotes',
  });
};
const greeting = (req, res) => {
  res.status(200).json({ message: 'Hola campeon de la fullstack web' });
};

const about = (req, res) => {
  res.render('home/about', { appVersion: '0.0.1' });
};

export default {
  index,
  greeting,
  about,
};
