import React from 'react'
import { Wrapper , Button , ButtonBox , Screens } from './components'
import CalcProvider from "./context/CalcContext";

const btnValues = [
	["C", "+-", "%", "/"],
	[7, 8, 9, "x"],
	[4, 5, 6, "-"],
	[1, 2, 3, "+"],
	[0, ".", "="],
];

const App = () => {
	return (
		<div>
			<CalcProvider>
				<Wrapper>
					<Screens />
					<ButtonBox>
						{btnValues.flat().map((btn, i) => (
							<Button value={btn} key={i} />
						))}
					</ButtonBox>
				</Wrapper>
			</CalcProvider>
		</div>
	);
}

export default App