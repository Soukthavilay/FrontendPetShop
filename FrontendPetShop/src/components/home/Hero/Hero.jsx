import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { products } from '../../assets/data/data';
import { SearchItems } from './SearchItems';

export const Hero = () => {
  // search
  const [value, setValue] = useState('');
  const onChanage = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (key) => {
    setValue(key);
    console.log('search', key);
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          {/* <img
            src="https://demo.leebrosus.com/petpuzzy/wp-content/uploads/2022/05/h1_dog-1.jpg"
            alt=""
          /> */}
          {/* <div className="HeroKoh2"> */}
          <h1>
            <label>
              Pet <span>Care</span> For Today's
            </label>
            <br />
            <label>
              Pet <span>Parent & The Pet</span> Lover's Store
            </label>
          </h1>
          <p>
            Grooming &#38; Supply provides grooming services for all dog and cat
            breeds. We are fully committed to the health.
          </p>
          {/* </div> */}
          <div className="search">
            <span>All Categories</span>
            <hr />

            <input
              type="text"
              placeholder="Search Products..."
              onChange={onChanage}
              value={value}
            />
            <button onClick={() => onSearch(value)}>
              <BiSearch className="serachIcon heIcon" />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
          <h1>
            <br />
            <br />
            <br />
            <label>Our Service</label>
          </h1>
          <p>Grooming & Supply provides grooming services for all dog and cat breeds. We are fully committed to the health.</p>
        </div>
      </section>
    </>
  );
};
