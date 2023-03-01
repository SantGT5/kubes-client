import './Home.style.css'
import React from 'react'
import { BooksCardType } from '../components/type'

import { BooksCard } from '../components/BooksCard'

import { getBooksByQuery } from '../api/GetBooksByQuery'

export const Home = () => {
  const { books, getBooks, isLoading, setIsLoading } = getBooksByQuery()

  const [query, setQuery] = React.useState<string>('')

  React.useEffect(() => {
    setIsLoading(true)
    const getData = setTimeout(() => getBooks(query), 500)

    return () => clearTimeout(getData)
  }, [query])

  const booksHandler = () => {
    if (isLoading && query.length) return <div>Loading...</div>

    if (books && query.length) {
      return books.map((book: BooksCardType, i: number) => {
        return (
          <div key={i}>
            <BooksCard
              authors={book.authors}
              buyLink={book.buyLink}
              language={book.language}
              thumbnail={book.thumbnail}
              title={book.title}
            />
          </div>
        )
      })
    }

    return <div>Google Book Search!!</div>
  }

  return (
    <div className="home-wrapper">
      <input type="text" onChange={(e) => setQuery(e.currentTarget.value)} />
      {<div className="home-cards">{booksHandler()}</div>}
    </div>
  )
}
