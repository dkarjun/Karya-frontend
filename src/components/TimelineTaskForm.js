import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Form,Button} from 'react-bootstrap'


class TimelineTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.setState({ "timelineTask":{}})
    }

    handleChange = e => {
        let timelineTask = this.state.timelineTask;
        timelineTask[e.target.name] = e.target.value;
        this.setState(timelineTask)
    }
    updateSelectedTimelineTask = () => {
        this.props.updateSelectedTimelineTask(this.state.timelineTask)
    }
 
    componentWillReceiveProps(nextProps) {
        this.setState({ "timelineTask": nextProps.selectedTimelineTask });
    }

    render() {
        if (this.state.timelineTask === undefined) {
            return null;
        }
        console.log("in form..",this.state.timelineTask)
        return(
            <div id="taskForm">
                <Form>
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="text" name="name" value={this.state.timelineTask.name} onChange={event => this.handleChange(event)}/>
                    
                    <Form.Label>Notes </Form.Label>
                    <Form.Control type="text" name="notes" value={this.state.timelineTask.notes} onChange={event => this.handleChange(event)}/>
                    
                    <Form.Label>Date </Form.Label>
                    <Form.Control type="text" name="eventDate" value={this.state.timelineTask.eventDate} onChange={event => this.handleChange(event)}/>

                    <Form.Label>Hours </Form.Label>
                    <Form.Control type="text" name="hours" value={this.state.timelineTask.hours} onChange={event => this.handleChange(event)}/>

                    <Form.Label>task id </Form.Label>
                    <Form.Control type="text" name="taskId" value={this.state.timelineTask.taskId} onChange={event => this.handleChange(event)}/>

                    <Form.Label>status </Form.Label>
                    <Form.Control type="text" name="timelineStatus" value={this.state.timelineTask.timelineStatus} onChange={event => this.handleChange(event)}/>
                   
                    <Form.Label>Created On </Form.Label>
                    <Form.Control type="text" name="createdOn" value={this.state.timelineTask.createdOn} />
                   
                   
                    <br></br>
                    <Button variant="outline-primary" onClick={this.updateSelectedTask}>Save</Button>
                </Form>
            </div>
        );
    }

    state = {
        "timelineTask": this.props.selectedTimelineTask
    };
}
    
export default TimelineTaskForm;