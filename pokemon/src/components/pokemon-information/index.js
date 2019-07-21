import React, { Component } from 'react';
import './pokemon-information.css';

class PokemonInformation extends Component {
    render() {
        const fillTypes = type => {
            if (type) {
                return (
                    <span className={type.className} key={type.name}>{type.name}</span>
                )
            }
        };

        const weight = weight => {
            if (weight) {
                return (
                    <>
                        <h3>Peso</h3>
                        <p>{weight} kg</p>
                    </>
                );
            }
        }

        const height = height => {
            if (height) {
                return (
                    <>
                        <h3>Altura</h3>
                        <p>{height} m</p>
                    </>
                );
            }
        }

        const typeTitle = informations => {
            if (informations.types.length) {
                return (
                    <h3>Tipo</h3>
                );
            }
        }

        const fillStats = stat => {
            return (
                <li key={stat.name}>{stat.name} - {stat.value}</li>
            );

        }

        const orderBySlot = (a, b) => {
            if (a.slot > b.slot)
                return 1;
            if (a.slot < b.slot)
                return -1;
            return 0;
        }

        const informations = this.props.informations;

        return (
            <div className='Type-style Pokemon-information'>
                <div className='Margin-data'>
                    {weight(informations.weight)}
                    {height(informations.height)}
                    {typeTitle(informations)}
                    <ul>
                        {informations.stats.map(fillStats)}
                    </ul>
                    {informations.types.sort(orderBySlot).map(fillTypes)}
                </div>
            </div>
        );
    }
}

export default PokemonInformation;