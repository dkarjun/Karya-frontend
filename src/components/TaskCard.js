import React from 'react';

class TaskCard extends React.Component {

    triggerCallbacks = () => {
		const { setTaskId } = this.props;
		const selectedTask = this.props.taskDetails.ticketNumber;		
		setTaskId(selectedTask);
    };

    render() {
            return (
                <div className="card" onClick={this.triggerCallbacks}>
                    <div id="content">                
                        Ticket: {this.props.taskDetails.ticketNumber}<br/>
                        Name: {this.props.taskDetails.name}<br/>
                        Status: {this.props.taskDetails.status}
                    </div>
                </div>
            );
        }
    }

export default TaskCard;