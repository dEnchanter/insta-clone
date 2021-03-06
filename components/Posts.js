import Post from './Post'

const posts = [
  {
    id: '123',
    username: '@johndoe',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: "Subscribe and Like" 
  },
  {
    id: '124',
    username: '@nerfetiti',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: "Subscribe and Like" 
  },
  {
    id: '125',
    username: '@harleydean',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: "Subscribe and Like" 
  }
]

function Posts() {
  return (
    <div>
      {
        posts.map(post => (
          <Post 
            key={post.id} 
            id={post.id} 
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
      ))}
    </div>
  )
}

export default Posts