import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <article key={article.id}>
      <h2>
        <Link to={routes.article({ id: article.id })}>{article.title}</Link>
      </h2>
      <p>{article.body}</p>
      <div>
        Posted at: <time>{article.createdAt}</time>
      </div>
    </article>
  )
}

export default Article
