import React, { useState, useEffect } from "react";
import "../styles/Quote.css";

const Quotes = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);

	

	useEffect(() => {
		setLoading(true);

		fetch("http://127.0.0.1:3000/quotes")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data);
				setLoading(false);
			});
	}, []);

	const Loading = () => {
		return <>Loading....</>;
	};

	const filterQuote = (cat) => {
		const updatedList = data.filter((x) => x.category === cat);
		setFilter(updatedList);
	};

	const ShowQuotes = () => {
		return (
			<>
				<div className="buttons d-flex justify-content-center mn-5 pb-5">
					
					<buttons
						className="btn btn-outline-dark me-3"
						onClick={() => setFilter(data)}
					>
						All
					</buttons>

					<buttons
					
						className="btn btn-outline-dark me-3"
						onClick={() => filterQuote("Love")}
					>
						
						Love
					</buttons>

					<buttons
						className="btn btn-outline-dark me-3"
						onClick={() => filterQuote("Life")}
					>
						
						Life
					</buttons>

					<buttons
						className="btn btn-outline-dark me-3"
						onClick={() => filterQuote("Hope")}
					> 
						Hope
					</buttons>

					<buttons
						className="btn btn-outline-dark me-3"
						onClick={() => filterQuote("Depression")}
					>
						Depression
					</buttons>
				</div>
				{filter.map((quote) => {
					return (
						<>
							<div className="col-md-3 mb-4">
								<div className="card h-100 text-center p-4" key={quote.id}>
									
									<div className="card-body">
										<h5 className="card-title mb-0">
											{/* {quote.category.substring(0, 12)} */}
										</h5>
										<p className="card-text lead fw-bold">{quote.description}</p>
										<button >
											View Quote
										</button>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</>
		);
	};
	return (
		<div>
			<div className="container my-5 py-5">
				<div className="row">
					<div className="col-12 mb-5">
						<h1 className="display-6 fw-bolder text-center">Latest Quotes</h1>
					</div>
				</div>
				<div className="row justify-content-center">
					{loading ? <Loading /> : <ShowQuotes />}
				</div>
			</div>
		</div>
	);
};
export default Quotes;

