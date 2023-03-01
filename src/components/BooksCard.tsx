import { BooksCardType } from './type'
import './BooksCard.style.css'

export const BooksCard = ({
  thumbnail,
  title,
  language,
  authors,
  buyLink,
}: BooksCardType) => {
  return (
    <div className="wrapper">
      <img src={thumbnail} alt="thumbnail" />
      <span>
        <strong>Title: </strong>
        {title}
      </span>
      <span>
        <strong>Language: </strong>
        {language}
      </span>

      <span>
        <strong>Authors: </strong>
        {authors.map((author: string) => author).join(', ')}
      </span>
      {buyLink ? (
        <a target="_blank" rel="noopener" href={buyLink}>
          Buy Link
        </a>
      ) : null}
    </div>
  )
}
