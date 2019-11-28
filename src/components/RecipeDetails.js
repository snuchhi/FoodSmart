import React, {Component} from 'react';

export default class RecipeDetails extends Component{
    //constructor(props){
        //super(props)
        //this.state = {
         //   recipe: {},
        //    url:`https://api.spoonacular.com/recipes/${this.props.id}/ingredientWidget.json/apiKey=9981b63541684d98bbacfc9610e901ab`

      //  }
    //} 
    //async componentDidMount(){
       // try{
         //   const data = await fetch(this.state.url);
        //    const jsonData = await data.json()
       //     this.setState({
      //       recipe:jsonData.results
     //       });
    //      }catch(error){
   //         console.log(error);
  //        }
 //     }
    state = {
        recipe :{}
    }
     async componentDidMount(){
        const id = this.props.id;
        const url = `https://api.spoonacular.com/recipes/${this.props.id}/ingredientWidget.json/apiKey=9981b63541684d98bbacfc9610e901ab`
        try{
            const data = await fetch(url);
            const jsonData = await data.json()
            this.setState((state,props) => { return {recipe:jsonData.resultys}  
            },() => {});
          }catch(error){
            console.log(error);
          }  
     }
    render(){
        const{image_url,publisher_url,source_url,
            title,ingredients} = this.state.recipe; 
        console.log(this.state.recipe)
        return (
        <React.Fragment>
          <div className = "container">
              <div className = "row">
                  <div classname = "col-10 mx-auto col-md-6 my-3">
                      <button type = "button" className = "btn btn-warning mb-5 text-capitalize">
                          Back to recipe List
                      </button>
                    <img src = {image_url} className = "d-block w-100" alt = "recipe" />
                    {/*details*/}
                    <div classname = "col-10 mx-auto col-md-6 my-3">
                        <h6 className = "text-uppercase">{title}</h6>
                        <h6 className = "text-warniung">{publisher_url}</h6>
                        <a
                                href={publisher_url}
                                target='_blank' rel='noopener noreferrer' className='btn btn-primary mt-2 text-capitalize'>Publisher Webpage</a>
                            <a
                                href={source_url}
                                target='_blank' rel='noopener noreferrer' className='btn btn-success mt-2 mx-3 text-capitalize'>Recipe URL</a> 
                    
                    </div>

                  </div>
              </div>
          </div>
        </React.Fragment>
        )
    }
}