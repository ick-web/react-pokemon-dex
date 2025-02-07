import React, { Children } from 'react'

export const PokemonContext = () => {
  return (
    <PokemonContext.provider>
      {Children}
    </PokemonContext.provider>
  )
}
export default PokemonContext;
