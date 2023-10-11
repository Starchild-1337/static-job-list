import {Dispatch, SetStateAction} from 'react'
import { vacancyData } from '../types/Vacancy';

interface Props extends vacancyData {
  userFilters: string[] | never[]
  setUserFilters: Dispatch<SetStateAction<string[]>>
}

const Vacancy = (props: Props) => {
  const {company, logo, featured, position, postedAt, contract, location, filters, setUserFilters} = props

  const avatar = require('../assets/' + logo + '.svg')

  const handleUserFilters = (name: string)=> {
    setUserFilters((prev) => {
      if(prev.includes(name)) {
        return prev
      }
      return [...prev, name]
    })
  }

  return (
        <div className={`vacancy ${featured ? 'featured' : ''}`}>
          <div className="company-avatar">
            <img src={avatar} alt={logo} />
          </div>
          <div className='company'>
            <header>
              <h4 className='company-name'>{company}</h4>
              <div className='tags'>
                {props.new && <span className='tag tag-new'>new!</span>}
                {featured && <span className='tag tag-featured'>featured</span>}
              </div>
            </header>
            <h2 className='company-position'>{position}</h2>
            <div className='info'>
              <span>{postedAt}</span>
              <span>{contract}</span>
              <span>{location}</span>
            </div>
          </div>
          <div className='underline'/>

          <div className='btns'>
            {filters.map((btn, i) => {
              return <button onClick={() => handleUserFilters(btn)} className='btn vacancy-btn' key={i}>{btn}</button>
            })}
          </div>
        </div>
  );
};

export default Vacancy;