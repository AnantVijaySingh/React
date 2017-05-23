import React from 'react'; {/*Is not required for stateless components*/}
import '../stylesheets/ui.scss';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

{/*Stateless fucntionl components*/}

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const SkiDayCount = (props) => (
	<div className="ski-day-count">
		<div className="total-days">
			<span>{props.total}</span>
				<Calendar></Calendar>
			<span>days</span>
		</div>
		<div className="powder-days">
			<span>{props.powder}</span>
				<SnowFlake></SnowFlake>
			<span>days</span>
		</div>
		<div className="backcountry-days">
			<span>{props.backcountry}</span>
				<Terrain></Terrain>
			<span>days</span>
		</div>
		<div>
			<span>
				{calcGoalProgress(
					props.total, 
					props.goal)}
			</span>
		</div>
	</div>
)


{/*--- ECMA6 Script, using class feature of Javascript. 
	Extending React.Component. 
	Works as if using React.createClass---


export class SkiDayCount extends React.Component {
	percentToDecimal(decimal) {
		return ((decimal *100) + '%')
	}

	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	}

	render() {
		return (
				<div className="ski-day-count">
					<div className="total-days">
						<span>{this.props.total}</span>
						<span>days</span>
					</div>
					<div className="powder-days">
						<span>{this.props.powder}</span>
						<span>days</span>
					</div>
					<div className="backcountry-days">
						<span>{this.props.backcountry}</span>
						<span>days</span>
					</div>
					<div>
						<span>
							{this.calcGoalProgress(
								this.props.total, 
								this.props.goal)}
						</span>
					</div>
				</div>
			)
	}
}

*/}

{/* --Basic React Component with Custom Functions and Render Function,
		using this.props.keyValue to get data in real time---

export const SkiDayCount = React.createClass({
	percentToDecimal(decimal) {
		return ((decimal *100) + '%')
	},
	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	},
	render() {
		return (
				<div className="ski-day-count">
					<div className="total-days">
						<span>{this.props.total}</span>
						<span>days</span>
					</div>
					<div className="powder-days">
						<span>{this.props.powder}</span>
						<span>days</span>
					</div>
					<div className="backcountry-days">
						<span>{this.props.backcountry}</span>
						<span>days</span>
					</div>
					<div>
						<span>
							{this.calcGoalProgress(
								this.props.total, 
								this.props.goal)}
						</span>
					</div>
				</div>
			)
	}
})
*/}