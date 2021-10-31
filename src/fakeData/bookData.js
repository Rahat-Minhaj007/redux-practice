
const bookData = [
  {
    id: 1,
    name: 'Eloquent Javascript',
    img: ' https://i.ibb.co/8MSHzCf/image-19.png',
    price: 149,
    author: 'Marzin Haverbeke ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam elementum pulvinar. Vulputate ut pharetra sit amet aliquam id. Ultrices dui sapien eget mi proin sed libero. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Faucibus turpis in eu mi bibendum neque egestas. Massa ultricies mi quis hendrerit dolor magna. Diam maecenas sed enim ut sem viverra aliquet eget. Sed augue lacus viverra vitae congue eu consequat ac. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Suspendisse interdum consectetur libero id. Condimentum mattis pellentesque id nibh tortor id aliquet. Quam quisque id diam vel quam elementum pulvinar. Fringilla est ullamcorper eget nulla facilisi etiam. Ultricies integer quis auctor elit sed.'
  },
  {
    id: 2,
    name: ' Learning React',
    img: 'https://i.ibb.co/ygd8PJW/image-20.png',
    price: 178,
    author: 'Alex Banks & Eve Porcello ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam elementum pulvinar. Vulputate ut pharetra sit amet aliquam id. Ultrices dui sapien eget mi proin sed libero. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Faucibus turpis in eu mi bibendum neque egestas. Massa ultricies mi quis hendrerit dolor magna. Diam maecenas sed enim ut sem viverra aliquet eget. Sed augue lacus viverra vitae congue eu consequat ac. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Suspendisse interdum consectetur libero id. Condimentum mattis pellentesque id nibh tortor id aliquet. Quam quisque id diam vel quam elementum pulvinar. Fringilla est ullamcorper eget nulla facilisi etiam. Ultricies integer quis auctor elit sed.'
  },
  {
    id: 3,
    name: 'The Road to React',
    img: 'https://i.ibb.co/zNtF686/image-21.png',
    price: 205,
    author: ' Robin Wieruch ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam elementum pulvinar. Vulputate ut pharetra sit amet aliquam id. Ultrices dui sapien eget mi proin sed libero. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Faucibus turpis in eu mi bibendum neque egestas. Massa ultricies mi quis hendrerit dolor magna. Diam maecenas sed enim ut sem viverra aliquet eget. Sed augue lacus viverra vitae congue eu consequat ac. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Suspendisse interdum consectetur libero id. Condimentum mattis pellentesque id nibh tortor id aliquet. Quam quisque id diam vel quam elementum pulvinar. Fringilla est ullamcorper eget nulla facilisi etiam. Ultricies integer quis auctor elit sed.'
  },
  {
    id: 4,
    name: 'Python Crash Course ',
    img: ' https://i.ibb.co/DgnJvQt/image-29.png',
    price: 277,
    author: '  Eric Matthes ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam elementum pulvinar. Vulputate ut pharetra sit amet aliquam id. Ultrices dui sapien eget mi proin sed libero. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Faucibus turpis in eu mi bibendum neque egestas. Massa ultricies mi quis hendrerit dolor magna. Diam maecenas sed enim ut sem viverra aliquet eget. Sed augue lacus viverra vitae congue eu consequat ac. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Suspendisse interdum consectetur libero id. Condimentum mattis pellentesque id nibh tortor id aliquet. Quam quisque id diam vel quam elementum pulvinar. Fringilla est ullamcorper eget nulla facilisi etiam. Ultricies integer quis auctor elit sed.'
  },
  {
    id: 5,
    name: ' Effective Typescript ',
    img: ' https://i.ibb.co/s5BGNLY/image-23.png ',
    price: 169,
    author: 'Dan Vanderkam ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam elementum pulvinar. Vulputate ut pharetra sit amet aliquam id. Ultrices dui sapien eget mi proin sed libero. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Faucibus turpis in eu mi bibendum neque egestas. Massa ultricies mi quis hendrerit dolor magna. Diam maecenas sed enim ut sem viverra aliquet eget. Sed augue lacus viverra vitae congue eu consequat ac. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Suspendisse interdum consectetur libero id. Condimentum mattis pellentesque id nibh tortor id aliquet. Quam quisque id diam vel quam elementum pulvinar. Fringilla est ullamcorper eget nulla facilisi etiam. Ultricies integer quis auctor elit sed.'
  },
  {
    id: 6,
    name: 'Javascript Everywhere ',
    img: 'https://i.ibb.co/GQSNTQk/image-25.png ',
    price: 231,
    author: 'Adam D.Scottark Lutz ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam elementum pulvinar. Vulputate ut pharetra sit amet aliquam id. Ultrices dui sapien eget mi proin sed libero. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Faucibus turpis in eu mi bibendum neque egestas. Massa ultricies mi quis hendrerit dolor magna. Diam maecenas sed enim ut sem viverra aliquet eget. Sed augue lacus viverra vitae congue eu consequat ac. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Suspendisse interdum consectetur libero id. Condimentum mattis pellentesque id nibh tortor id aliquet. Quam quisque id diam vel quam elementum pulvinar. Fringilla est ullamcorper eget nulla facilisi etiam. Ultricies integer quis auctor elit sed.'
  }
];

export default bookData;