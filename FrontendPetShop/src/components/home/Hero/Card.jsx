import React from 'react';
import { hero } from '../../assets/data/data';
import { AiFillPlusCircle } from 'react-icons/ai';
export const Card = () => {
  return (
    <>
      <section className="cards">
        {hero.map((item) => (
          <div className="card" key={item.id}>
            <div className="left">
              <img src={item.cover} alt="" />
            </div>
            <div className="right">
              <h4>{item.name}</h4>
              <p>{item.items} items</p>
              <br />
              <div className="right_card">
                <button className="button">
                  <a href="https://demo.leebrosus.com/petpuzzy/">
                    {item.learn}
                  </a>
                  <AiFillPlusCircle className="shop heIcon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
