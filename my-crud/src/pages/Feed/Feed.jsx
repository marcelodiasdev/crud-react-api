import React from 'react';

import { Link } from 'react-router-dom';

import HeaderMain from '../../components/HeaderMain/HeaderMain'
import './feed.css'

import More from '../../images/more.svg'

function Feed() {
    return (
        <div>

            <HeaderMain />

            <main>
                <div className="cards">
                    <div className="card">



                        <header>
                            <h2> Consumindo API </h2>
                            <img src={More} alt="" />
                        </header>

                        <div className="line"> </div>

                        <p> Consumindo uma API com react.js </p>
                        <div className="btns">
                            <div className="btn-edit">
                                <Link to="/edit">
                                  <button> Edit </button>
                                </Link>
                              
                            </div>
                            <div className="btn-readmore">
                                <Link to="/lermais">
                                    <button> Ler mais </button>
                                </Link>
                                
                            </div>
                            <div className="btn-delete">
                               
                                    <button> Delete </button>
                            
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Feed;