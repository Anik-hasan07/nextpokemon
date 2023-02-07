import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Layout from '../components/Layout'
import Pokemon from '../components/Pokemon'
import styles from '../styles/pokemon.module.css';


export default function Home({ninja}) {
  const [pokemon, setPokemon] = useState(ninja)
  console.log("---------initial",ninja);
  return (
    <div className='background'>
       <Layout title={"PokeDev"}>
       <div className="mypokemonsingle" >
                {pokemon.map((monster,index) => (
                    <Pokemon key={index} pokemon={monster} index={index}/>
                ))}
    </div>

    <div className='myparagraph'>
        <div className="imagehead">
        <h1 className="headingbody">Ash & Pikachu Arrive in <br/> Pokemon Universe</h1>
        <img src="Brush.png" alt=""></img>
        </div>
    </div>    


    <div className="anik">
            <div className="top">
            <img src="Left.png" alt=""/>
            </div>
            {/* -------- */}
    <div className="lefthand">
    <section className="maindev">
        
            <div className="firstDiv">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elitwr. Dolores deserunt consequuntur nihil dolorum autem quae,eee iusto consectetur quasi. Nam sint nisi doloremque amet modi 
                
                </p> 
                <div className="firstDiv">
                    <img src="Image01.png" alt=""/>

                </div> 
            </div>     
    </section>
    <br></br>
    <br></br>
    <section className="maindev">
        
        <div className="secondDiv">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt consequuntur nihil dolorum autem quae, 
                Lorem ipsum dolor sit
            </p> 
        <div className="secondDiv">

            <img src="Image01.png" alt=""/>

        </div> 
    </div>     
    </section>
    <br></br>
    <section className="maindev">
        
            <div className="thirdDiv">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt consequuntur nihil dolorum autem quae, iusto consectetur quasi. Nam sint nisi doloremque amet modi itaque incidunt libero, quaerat vel sed pariatur consequuntur 
                </p> 
                <div className="thirdDiv">
                <img src="Image01.png" alt=""/>

                </div> 
            </div>     
    </section>
    <br></br>
    <section className="maindev">
        
            <div className="fourDiv">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt consequuntur nihil dolorum autem quae, iusto consectetur quasi. Nam sint nisi doloremque amet modi itaque incidunt libero, quaerat vel sed pariatur consequuntur voluptatum voluptate tenetur quo quidem quisquam cumque dignissimos impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt consequuntur nihil dolorum autem quae, iusto consectetur quasi. Nam sint nisi doloremque amet modi itaque 
                </p> 
            </div>     
    </section> 
    </div> 
    <div className="righthand">
    <section>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt consequuntur nihil dolorum autem quae, iusto consectetur quasi. Nam sint nisi doloremque amet modi itaque incidunt libero, quaerat vel sed pariatur consequuntur voluptatum voluptate tenetur quo quidem quisquam cumque dignissimos impedit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt consequuntur nihil dolorum autem quae, iusto consectetur quasi. Nam sint nisi doloremque amet modi.
            </p>     

    </section> 

    <section className="rightone">
            <div className="rightone">
            <img src="Image01.png" alt=""/>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt consequuntur nihil dolorum autem quae, iusto consectetur quasi. Nam sint nisi doloremque amet modi.
                    Lorem ipsum dolor 
                    L
                </p>
            </div>
    </section> 
        
    <section className="rightone">
            <div className="rightone">
            <img src="Image01.png"  alt=""/>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt consequuntur nihil dolorum autem quae, iusto consectetur quasi. Nam sint nisi doloremque amet modi.
                    Lorem ipsum dolor sit amet 
                </p>
            </div>
    </section>  
    <section>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi quia reprehenderit ducimus animi est ipsam, eveniet repellendus magnam aperiam dolor aliquid totam rem explicabo praesentium dicta enim facilis, mollitia porro? Optio quam id odit repellendus nostrum officiis ut commodi cum expedita doloremque quia inventore, unde iusto reprehenderit, cupiditate temporib
            </p>
    </section>
    </div>
    <div className="bottom">
        <img src="Left.png" alt=""/>
        </div>  
    </div>

    </Layout>

    </div>
  )
}


export async function getStaticProps(context) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const initialPokemon = await response.json()
  

  return {
      props: {
          ninja:initialPokemon.results.slice(0,10)
      }
  }
}
