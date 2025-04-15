








export const ProductItem = ( { id, nombre, precio, img } ) => {


  return (

    <div className="col animate__animated animate__fadeIn ">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4 w-100">
                        <img 
                            src="https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter" 
                            className="card-img" 
                            alt="superhero" 
                        />
                    </div>
                </div>

                <div className="col-8">
                    <div className="card-body">

                        <h5 className="card-title">{ nombre }</h5>
                        <p className="card-text">{ `${precio}` }</p>

                        {/* {
                            (alter_ego !== characters) && (CharactersByHero)
                            (alter_ego !== characters) && (<p>{ characters }</p>)
                        } */}
                        
                        {/* <CharactersByHero alter_ego={nombre} characters={precio}/> descomentar este y analizar*/} 

                        <p className="card-text">
                            <small className="text-muted">{ precio }</small>
                        </p>

                        {/* <Link to={`/hero/${id}`} > Mas... </Link> */}

                    </div>
                </div>

            </div>
        </div>

  )


}
