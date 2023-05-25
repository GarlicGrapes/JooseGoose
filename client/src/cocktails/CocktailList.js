import { composeWithDevToolsLogOnlyInProduction } from "@redux-devtools/extension";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loadCocktails } from "../actions/cocktails";
import CocktailCard from "./CocktailCard"

const CocktailList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCocktails())
    }, [dispatch])

    const cocktails = useSelector((store) => store.cocktailsReducer.cocktails)
    const cocktailCards = cocktails.map((cocktail, idx) => <CocktailCard key={idx} cocktail={cocktail}/>)
    
    return (
        <div>
            COCKTAIL LIST
            {cocktailCards}
        </div>
    )
}

export default CocktailList;