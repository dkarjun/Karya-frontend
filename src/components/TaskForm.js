import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Form,Button} from 'react-bootstrap'


class TaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.setState({ "task":{}})
    }

    handleChange = e => {
        let task = this.state.task;
        task[e.target.name] = e.target.value;
        this.setState(task)
    }

    updateSelectedTask = () => {
        this.props.updateSelectedTask(this.state.task)
    }
 
    componentWillReceiveProps(nextProps) {
        this.setState({ "task": nextProps.selectedTask });
    }

    render() {
        if (this.state.task === undefined) {
            return null;
        }
       
        return(
            <div id="taskForm">
                <Form>
                    <Form.Label>TicketNumber </Form.Label>
                    <Form.Control type="text" name="ticketNumber" value={this.state.task.ticketNumber} onChange={event => this.handleChange(event)}/>
                    
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="text" name="name" value={this.state.task.name} onChange={event => this.handleChange(event)}/>
                    
                    <Form.Label>description </Form.Label>
                    <Form.Control type="textArea" name="description" value={this.state.task.description} onChange={event => this.handleChange(event)}/>

                    <Form.Label>startDate </Form.Label>
                    <Form.Control type="text" name="startDate" value={this.state.task.startDate} onChange={event => this.handleChange(event)}/>

                    <Form.Label>end_date </Form.Label>
                    <Form.Control type="text" name="end_date" value={this.state.task.end_date} onChange={event => this.handleChange(event)}/>

                    <Form.Label>status </Form.Label>
                    <Form.Control type="text" name="status" value={this.state.task.status} onChange={event => this.handleChange(event)}/>
                   
                    <Form.Label>Created On </Form.Label>
                    <Form.Control type="text" name="createdOn" value={this.state.task.createdOn} />
                   
                   
                    <br></br>
                    <Button variant="outline-primary" onClick={this.updateSelectedTask}>Save</Button>
                </Form>
            </div>
        );
    }

    state = {
        "task": this.props.selectedTask
    };
}
    
export default TaskForm;