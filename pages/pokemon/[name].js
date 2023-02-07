import React from 'react';
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from 'next/link';
import logo from "../../public/Logo.png";
import { FaHome } from 'react-icons/fa';

const Pokemon = ({pokemon,index}) => {
    const pokeIndex = ('000' + (pokemon.id)).slice(-3)
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    console.log(pokemon)
    

    const renderTypes = () => (
        pokemon.types.map(type => (
        <li key={type.slot} className="px-2 ml-0 py-1 bg-red-700 text-white rounded">
                {type.type.name}
            </li>
        ))
    )

    const renderStats = () => (
        pokemon.stats.map((stat, index) => (
            <div key={index} className="bg-slate-700 my-2 text-white rounded p-1">
                <div className="bg-sky-500 rounded px-2" style={{width: `${stat.base_stat}%`}}>
                    {stat.stat.name}: {stat.base_stat}
                </div>
            </div>
        ))
    )

    return (
  <>
        
    <div>
        <Image
            alt={pokemon.name}
            className='ml-auto mr-auto'
            width={400}
            height={400}
            src={logo}
        />
    </div>
        <br/>
        
    <div className='details-two'>

        <div className='myparagraphk'>
                
            <span className='myFlex'>
            <h1 className='text-lg '>{pokemon.name}</h1> #{pokeIndex}     
            </span>
            <br></br>
            <br></br>
            <p>
            There is a plant seed on its back right from the day this Pokemon is born.The seed slowly grows larger.
            </p>
            <div className='card-box'>
                <div> 
                    <h2>Height</h2>
                    <span>{pokemon.height}</span>
                    <h2>Weight</h2>
                    <span>{pokemon.weight}</span>
                </div>
            <div>
                <h2>Category</h2>
                <span>Seed</span>
                <h2>Abilities</h2>
                
                <span>{pokemon.abilities[0].ability.name}</span>
                <br/>
                <span>{pokemon.abilities[1].ability.name}</span>
            </div>

            </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image
                    alt={pokemon.name}
                    width={400}
                    height={400}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                />
            </div>

            <div className="bg-slate-900  mr-4 rounded p-5">
                <h1 className='text-white '>Types</h1>
                <ul className="flex gap-5 pl-60 mr-8">
                    {renderTypes()}
                </ul>

                <div>
                    <h1 className='text-white '>Stats</h1>
                    {renderStats()}
                </div>
            </div>
                
            </div>
            <div>

            <Link href="/">
                <span>
                <button className='my-btn'><FaHome/>Back to Homepage  </button>
                </span>
            </Link>
            </div>
</>
    );
};

export default Pokemon;

export async function getServerSideProps(context) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
    const pokemon = await response.json()

    return {
        props: {
            pokemon
        }
    }
}