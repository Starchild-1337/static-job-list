import { Dispatch, SetStateAction } from 'react';
import iconRemove from '../assets/icon-remove.svg'

interface Props {
  userFilters: string[] | never[]
  setUserFilters: Dispatch<SetStateAction<string[]>>
}

const Filter = ({userFilters, setUserFilters}: Props) => {

  const handleRemove = (name: string) => {
    setUserFilters(userFilters.filter(u => u !== name))
  }

  const clearFilters = () => {
    setUserFilters([])
  }

  return (
    <div className="filter">
      <div className="filter-btns">
        {userFilters.map((item) => {
          return (
            <div key={item} className='filter-btn' onClick={() => handleRemove(item)}>
              <button className="btn">{item}</button>
              <div className='removeIcon'>
                <img src={iconRemove} alt="remove" />
              </div>
            </div>
          )
        })}
      </div>
      <span className="clear" onClick={clearFilters}>Clear</span>
    </div>
  );
};

export default Filter;