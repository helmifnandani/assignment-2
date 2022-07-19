import { useState, useEffect } from "react";

// 34b18b1645484bef86134a6341131a1f key currency api

export const useApp = () => {
	const [currencyRate, setCurrencyRate] = useState([]);

	const [isRefresh, setIsRefresh] = useState(true);

	useEffect(() => {
		fetchData();
	}, [isRefresh]);

	const fetchData = async () => {
		try {
			if (isRefresh) {
				const res = await fetch(
					"https://api.currencyfreaks.com/latest?apikey=34b18b1645484bef86134a6341131a1f&symbols=CAD,IDR,JPY,CHF,EUR,GBP"
				);
				const result = await res.json();
				setCurrencyRate(result.rates);
				setIsRefresh(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return {
		currencyRate,
		setCurrencyRate,
		isRefresh,
		setIsRefresh,
	};
};
