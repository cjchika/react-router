import { useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const SUB_QUOTES = [
	{ id: 'q1', author: "Mandela", text: 'It always seems impossible until its done.' },
	{ id: 'q2', author: "Azikiwe", text: 'No matter how old an individual may be, no matter if he is young or old, if he thinks in accordance with the times he is immortal' }
];

const AllQuotes = () => {
	const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true)

	useEffect(() => {
		sendRequest()
	}, [sendRequest]);

	if(status === 'pending') {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		)
	}

  return <QuoteList quotes={SUB_QUOTES}/>
};

export default AllQuotes;