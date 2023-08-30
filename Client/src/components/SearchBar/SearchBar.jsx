import style from './SearchBar.module.css'
import {useState} from 'react'

const SearchBar = ({onSearch}) => {
  
  const [id, setId] = useState('')

  const handleChange = (event) => {
     setId(event.target.value)
  }

  return (
   <main>
     <div className={style["srch_wrpr"]}>
       <input type="checkbox" name="" className={style.checkbox} />
       <div className={style["srch_sb_cnt"]}>
         <input type="text" name="text_bar" id="" className={style["sech_txt_inpt"]} placeholder="Search ID..." onChange={handleChange} value={id} />
         <button className={style["srch_btn"]} onClick={() => {onSearch(id)}}>
           <i className="fa fa-search" aria-hidden="true"></i>
         </button>
       </div>
     </div>
   </main>
 );
};

export default SearchBar;