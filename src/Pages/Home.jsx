import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import MoviesCard from '../components/MoviesCard'
import { SearchMovies, getPopularMovies } from '../Services/api'

const Home = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMOvies = await getPopularMovies()
                setMovies(popularMOvies)
            } catch (err) {
                setError('Faild to load movies... ')
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return


        setLoading(true)
        try {
            const serchResults = await SearchMovies(searchQuery)
            setMovies(serchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError('Failed to search Movie...')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text"
                    placeholder=' Search for Movies...'
                    className='search-input '
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button type='submit' className='search-button'>Search</button>
            </form>

            {error && <div className='error-mesage'>{error}</div>}

            {loading ? (<div className='loading'>Loading...</div>) :
                (<div className='movies-grid'>
                    {movies.map((movie) =>
                    (
                        <MoviesCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>)}

        </div>
    );
}

export default Home


