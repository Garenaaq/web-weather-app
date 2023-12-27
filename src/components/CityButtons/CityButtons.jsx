import React from 'react'


const CityButton = ({setQuery}) => {
    const cities = [
        {
            id: 1,
            title: 'Москва'
        },
        {
            id: 2,
            title: 'Санкт-Петербург'
        },
        {
            id: 3,
            title: 'Ростов-на-Дону'
        },
        {
            id: 4,
            title: 'Краснодар'
        },
        {
            id: 5,
            title: 'Екатеринбург'
        }
    ];

    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => {
                return <button onClick={() => {setQuery({q: city.title})}} key={city.id} className="text-white text-lg font-medium">{city.title}</button>
            })}
        </div>
    );
}


export default CityButton