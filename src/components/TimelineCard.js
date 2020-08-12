import React from 'react';
import '../style/TimelineCard.css';

class TimelineCard extends React.Component {

    triggerCallbacks = () => {
		const { setTimelineTaskId } = this.props;
		const selectedTask = this.props.timelineTask.id;		
		setTimelineTaskId(selectedTask);
    };

    render() {
        return (
            <div className="card"onClick={this.triggerCallbacks} >
                <div id="content">
                    Id : {this.props.timelineTask.id}<br/>
                    Name : {this.props.timelineTask.name}<br/>
                    Hours : {this.props.timelineTask.hours}
                </div>
            </div>
        );
    }
}

export default TimelineCard;