import { useState } from 'react'
const SearchBar = () => {
    const [search, setSearch] = useState('')
    const fetchData = async (value) => {
        const response = await fetch(`https://api.github.com/users/${value}`)
        const data = await response.json()
        console.log(data)
    }
    const handleSearch = (value,e) => {
        e.preventDefault()
        setSearch(value)
        fetchData(value)
    }
  return (
    <div>
      <input type="text" value={search} placeholder="Search..." onChange={(e) => handleSearch(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
