import type { AxiosResponse } from 'axios'

import React from 'react'
import axios from 'axios'

export const getBooksByQuery = () => {
  const [books, setBooks] = React.useState<any>()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const getBooks = React.useCallback(async (query?: string) => {
    try {
      if (typeof query !== 'string' || !query.length) {
        setBooks(null)
        return
      }

      const { data }: AxiosResponse = await axios.post(
        'http://localhost:8000/v1/books',
        { query }
      )
      setBooks(data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { getBooks, books, isLoading, setIsLoading }
}
