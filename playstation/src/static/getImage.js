const getImage = (image) => {
  switch (image) {
    case 'PLAY1':
      return require('../assets/play.png');
      break;
    case 'PLAY2':
      return require('../assets/playstation-white.png');
      break;
    case 'PLAY3':
      return require('../assets/pink.png');
      break;

    default:
      break;
  }
};

export default getImage;
