import React, {Component} from "react";
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


const recipes = []
class App extends Component{
  state = {
    recipes :  recipes,
    url:"https://api.spoonacular.com/recipes/search?apiKey=9981b63541684d98bbacfc9610e901ab",
    details_id : 592479,
    pageIndex:1
  };
  async getRecipes(){
    try{
    const data = await fetch(this.state.url);
    const jsonData = await data.json()
    this.setState({
     recipes:jsonData.results
    });
  }catch(error){
    console.log(error);
  }
  }
  
  componentDidMount(){
    this.getRecipes()
  }

  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />)
      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />)
    }
  }

  handleIndex = (index) => {
    this.setState({
      pageIndex: index
    })
  }
  render(){
   // console.log(this.state.recipes);
    return (
       <React.Fragment>   
      {this.displayPage(this.state.pageIndex)}
    </React.Fragment>
    );
  }
}

export default App;
