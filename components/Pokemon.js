import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/pokemon.module.css';


const Pokemon = ({pokemon, index}) => {
    const pokeIndex = ('000' + (index + 1)).slice(-3)
  
    return (
        <Link href={`/pokemon/${pokemon.name}`}>
 
                <div className={styles.mypokemon}>
                    <Image
                        alt={pokemon.name}
                        width={150}
                        height={150}
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                    />
                    <span className="uppercase black font-semibold tracking-wider text-black-400">
                       {pokemon.name}
                    </span>
                    <div className="flex gap-5 ">
                        <span className='bg-red-600 rounded p-1' >Grass</span>
                        <span className='bg-green-600 rounded p-1'>Poison</span>

                       
                    </div>
                </div>
     
        </Link>
    );
};

export default Pokemon;