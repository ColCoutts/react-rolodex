import image from '../../../assets/portfolio-images/therunscard.jpg';
import pushPinCard from '../../../assets/portfolio-images/pushpincardrevise.jpg';
import campcard from '../../../assets/portfolio-images/campdremcardrevise.jpg';

const PROJECT_DATA = [
  {
    name: 'PushPin',
    tech: ['thing1', 'thing2'],
    image: pushPinCard,
    description: 'FullStack Dev. | UX/UI Design',
    userName: 'username: student@student.com',
    passWord: 'password: password!23',
    links: ['https://github.com/push-pin/push-pin', 'https://pushpin.netlify.com/']
  },
  {
    name: 'Camp Drem',
    tech: ['thing1', 'thing2'],
    image: campcard,
    description: 'FullStack Dev. | UX/UI Design',
    links: ['https://github.com/drem-big/camp-drems', 'https://optimistic-meitner-4b66fe.netlify.com/auth.html']
  },
  {
    name: 'The Runs',
    tech: ['thing1', 'thing2'],
    image: image,
    description: 'Front End Dev. | UX/UI Design',
    links: ['https://github.com/commitmentissuesacl/commitmentissuesacl.github.io', 'http://the-runs.com/']
  }
];

export default PROJECT_DATA;