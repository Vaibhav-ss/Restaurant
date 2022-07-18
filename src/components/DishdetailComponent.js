import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


    function RenderDish({dish}){
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

    function RenderComments({dish}){


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




    const DishDetail = (props) =>{

        return(
            <div className="container">
            <div className="row">
                <div className='col-12 col-md-5 m-1'>
                    <RenderDish dish = {props.dish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <RenderComments dish = {props.dish} />
                </div>
            </div>  
            </div>   
      );
    }



export default DishDetail;
