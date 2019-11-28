import React, {Component} from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";


export default class RecipeList extends Component{
    render(){
    const {recipes} = this.props;
    return(
        <React.Fragment>
         <RecipeSearch />
         <div className = "container my-5">
         {/* title*/}
        <div className  ="row">
            <div className = "col-10.mx-auto.col-md-6.text-center text-upeercase mb-3">
                <h2 className ="text-slanted">Recipe List</h2>
             </div>
        </div>
        {/*end of titel*/}
        <div className = "row">
            {
              recipes.map(recipe =>{
                  return <Recipe
                      key ={recipe.id}
                      recipe={recipe} />;

                  
              })
            }
        </div>

         </div>     
        </React.Fragment>
        )
    }
}