import PostCell from 'src/components/Post/PostCell'

type PostPageProps = {
  id: Int
}

const PostPage = ({ id }: PostPageProps) => {
  return <PostCell id={id} />
}

export default PostPage
