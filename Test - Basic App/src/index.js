import React from 'react'
import {render} from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount.jsx'

window.React = React

render(
	<SkiDayCount 	total={50}
					powder={20}
					backcountry={10}
					goal={100}>
	</SkiDayCount>,
	document.getElementById('react-container')
)