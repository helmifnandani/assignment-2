import React from "react";
import { useApp } from "./App.hook";
import "./App.css";
import FooterContainer from "./components/molecules/footerContainer";
import HeaderContainer from "./components/molecules/headerContainer";
import TableContainer from "./components/molecules/tableContainer";

const App = () => {
	const { currencyRate, isRefresh, setCurrencyRate, setIsRefresh } = useApp();

	return (
		<div className="App">
			<TableContainer>
				<HeaderContainer></HeaderContainer>
				{Object.keys(currencyRate).map((el, index) => {
					let curr_rate = Number(currencyRate[el]).toFixed(4);
					let rate = curr_rate * 0.05;
					let buy_rate = (Number(curr_rate) + Number(rate)).toFixed(4);
					let sell_rate = Number(curr_rate - rate).toFixed(4);
					return (
						<tr key={index}>
							<td>{el}</td>
							<td>{buy_rate}</td>
							<td>{curr_rate}</td>
							<td>{sell_rate}</td>
						</tr>
					);
				})}
			</TableContainer>
			<button onClick={() => setIsRefresh(true)}>Refresh</button>
			<FooterContainer>
				Rates are based from 1 USD. This Application uses API from
				https://currencyfreaks.com
			</FooterContainer>
		</div>
	);
};

export default App;
