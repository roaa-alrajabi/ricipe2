import React, { Component } from 'react'
// import Inte from './Inte'
// import axios from 'axios'
export class Show extends Component {
    state = {
        recipeState: "",
        appear: false

    }



    view = (recipe) => {

        this.setState({
            appear: !this.state.appear
        })
    }

    render() {

        return (

            <div   >
                <img className="recipe__box-img" src={this.props.item.recipe.image} alt={this.props.item.recipe.label} />
                <h5 style={{
                    height: '150px',
                    display: 'flex',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    {this.props.item.recipe.label}<i className="fas fa-chevron-circle-down" alt="more info" style={{fontSize:"32px",color:"#284d00"}} onClick={this.view}></i>
                </h5>
                {this.state.appear ? <div>

                    <p>
                        {this.props.item.recipe.ingredients.map((item, index) => {
                            return <li key={index}>{item.text}</li>
                        })}
                    </p>

                </div> : null}
            </div>






        )
    }
}

export default Show
