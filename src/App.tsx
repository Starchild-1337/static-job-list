import { useState } from 'react'
import Vacancy from './components/Vacancy'
import data from './data/data.json'
import Filter from './components/Filter'

const modifiedData = data.map(vac => {
  const {role, level, tools, languages} = vac
  const filters = [role, level, ...tools, ...languages]
  return {...vac, filters}
})

const App = () => {
  const [userFilters, setUserFilters] = useState<string[] | never[]>([])

  const filteredData = modifiedData.filter(vac => {
    return userFilters.every(el => vac.filters.includes(el))
  })

  return (
    <>
      <div className="head" />
      <section className="container">
        {userFilters.length > 0 && <Filter userFilters={userFilters} setUserFilters={setUserFilters} />}
        {filteredData.map(vac => {
          return <Vacancy key={vac.id} {...vac} setUserFilters={setUserFilters} userFilters={userFilters} />
        })}
      </section>
    </>
  )
}

export default App