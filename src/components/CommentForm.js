import React, { Component } from 'react';
import {Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';


class CommentForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
          isModalOpen: false,
          name:'',
          rating:'',
          comments:'',
          touched: {
            name: false
        }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal= this.toggleModal.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }

      handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit() {
        alert("Current State is: " + "Author = " + JSON.stringify(this.state.name) + ", Rating = " + JSON.stringify(this.state.rating) + ", Comments = " + JSON.stringify(this.state.comments)) ;
        this.props.addComment(this.props.dishId, this.state.rating, this.state.name, this.state.comments)
    }

      toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
      }

      handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]:true}
        });
    }

      Validate(name){
        const errors = {
            name:''
        };

        if (this.state.touched.name && name.length < 3)
        errors.name = 'Must be greater than 2 characters';
        else if (this.state.touched.name && name.length > 16)
        errors.name = 'Must be 15 characters or less';

        return errors;

      }

      render(){
        const errors = this.Validate(this.state.name);
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className='fa fa-pencil fa-lg'> Submit Comment</span></Button>
                <Modal size='fullscreen' isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                <ModalHeader >Submit Comment 
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit= {(values) => this.handleSubmit(values)} >
                        <FormGroup>
                        <label className='mr-5' htmlfor="rating">Rating  </label>
                        <select className='col-12' name="rating" id="rating" value={this.state.rating} onChange={this.handleInputChange}>
                            <option selected disabled value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Your Name</Label>
                            <Input type="text" id="name" name="name" placeholder='Your Name' value={this.state.name} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')} onChange={this.handleInputChange}
                             />
                             <FormFeedback>{errors.name}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="comments">Comment</Label>
                            <Input type="textarea" id="comments" name="comments" rows="7" value={this.state.comments} onChange={this.handleInputChange}
                             />
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        );
      }
}

export default CommentForm;