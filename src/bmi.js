import React,{Component} from 'react';

class BMI extends Component {
    
render() {
  return (
    <section id="bmi">
        <div className="container">
            <div className="form-row">
                <div className="form-group col-md-6">
            </div>
            <div className="form-group col-md-6">
                <div class="card text-center">
                    <div class="card-header text-left">
                        <label><b>Know Your BMI</b></label>
                    </div>
                    <div class="card-body">
                        <div className="form">
                            <form action="" name="calform"  method="post" role="form" className="contactForm">
                                <div className="form-group">
                                    <input type="text" 
                                        onChange={this.actionWtInputChange}  
                                        className="form-control" 
                                         name="wt" 
                                        id="weight" 
                                        placeholder="Weight in lbs"  
                                        data-msg="Please enter Weight in lbs" />
                                <div className="validation"></div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" 
                                            name="feet" 
                                            onChange={this.actionFeetInputChange} 
                                            className="form-control" id="feet" 
                                            placeholder="Height in feets"   
                                            data-msg="Please enter Height" />
                                        <div className="validation"></div>
                                    </div>
                                <div className="form-group col-md-6">
                                    <input type="text" 
                                        className="form-control" 
                                        name="inch" 
                                        onChange={this.actionInchInputChange} 
                                        id="inch" 
                                        placeholder="inches"   
                                        data-msg="Please enter a inch " />
                                    <div className="validation"></div>
                                </div>
                            </div>
        
                                <div className="text-center">
           
                                    <button type="button"  
                                        onClick={this.actionResult} >Submit</button></div>
                                <br />
                            <div className="form-group">
                            <h4  ><b>{this.state.answer}</b></h4>
                            <h5  >{this.state.meaning}</h5> 
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
   </div>
    </section>
  );
}
}
export default BMI;