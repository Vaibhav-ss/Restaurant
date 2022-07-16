import React, { Component } from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);

        this.state={

        }

    }

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle><h4>{dish.name}</h4></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){


        if(dish!=null){
            const comments= dish.comments.map((c) => {
                return(
                    <div key={c.id}>
                        <div>
                        <ul class = "list-unstyled">
                            <li>{c.comment}</li>
                            <li>--{c.author}, {c.date}</li>
                            
                        </ul>
                        </div>
                    </div >
                );
            });

            return(
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>                
            );

        }
        else{
            return(
                <div></div>
            );
        }
    }




    render(){

        return(
            <div className="container">
            <div className="row">
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(this.props.dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderComments(this.props.dish)}
                </div>
            </div>  
            </div>   
      );
    }

}

export default DishDetail;
