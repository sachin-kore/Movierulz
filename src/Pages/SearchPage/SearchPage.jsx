import React from 'react'
import Layout from '../../components/Layout/Layout'
import MoviesSection from '../../components/MoviesSection/MovieSections'

export const SearchPage = () => {
  const SearchResults = [
    {
      id: 1,
      name: 'Movie 1',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 2,
      name: 'Movie 2',
      title:
        'Pushpa 2: The Rule (2024) DVDScr Telugu Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Pushpa-2-The-Rule-Telugu.jpg',
    },
    {
      id: 3,
      name: 'Movie 3',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image:
        'https://www.5movierulz.to/uploads/Ek-Deewana-Tha-Season-1-Part-1-Telugu.jpg',
    },
    {
      id: 4,
      name: 'Movie 4',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image:
        'https://www.5movierulz.to/uploads/Ek-Haseena-Thi-Season-1-Part-1-Telugu.jpg',
    },
    {
      id: 5,
      name: 'Movie 2',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 6,
      name: 'Movie 3',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 7,
      name: 'Movie 4',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 8,
      name: 'Movie 2',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 9,
      name: 'Movie 3',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 10,
      name: 'Movie 4',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 11,
      name: 'Movie 2',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 12,
      name: 'Movie 3',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 13,
      name: 'Movie 4',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 14,
      name: 'Movie 2',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 15,
      name: 'Movie 3',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 16,
      name: 'Movie 4',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
  ]

  const searchTitle = 'Pushpa ' + 'Search Results....'

  return (
    <Layout>
      <MoviesSection title={searchTitle} movies={SearchResults.slice(0, 8)} />
    </Layout>
  )
}
