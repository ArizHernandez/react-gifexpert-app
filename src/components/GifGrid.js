import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  
  const { data: images , loading } = useFetchGifs( category );

  return (
    <div>
      <h3 className="category-title">Resultados de: "{ category }"</h3>

      { loading && 
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      }

      <div className="cards-container animate__animated animate__fadeIn animate__slow">
        {
          images.map( img => 
            <GifGridItem 
              key={ img.id }
              {... img}
            />
          )
        }
      </div>
    </div>
  )
}
