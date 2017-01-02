import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default function({weatherProp, color, units}) {
	function average(data) {
		return _.round(_.sum(data)/data.length); 
	}

	return (
			<div>
				<Sparklines data={weatherProp} svgWidth={180} svgHeight={120}>
					<SparklinesLine color={color}/>
					<SparklinesReferenceLine type="avg"/>
				</Sparklines>
			<div>{average(weatherProp)} {units}</div>
			</div>
		);
}
