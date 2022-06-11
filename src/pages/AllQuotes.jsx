import QuoteList from "../components/quotes/QuoteList";

const SUB_QUOTES = [
	{ id: 'q1', author: "Mandela", text: 'It always seems impossible until its done.' },
	{ id: 'q2', author: "Azikiwe", text: 'No matter how old an individual may be, no matter if he is young or old, if he thinks in accordance with the times he is immortal' }
];

const AllQuotes = () => {
  return <QuoteList quotes={SUB_QUOTES}/>
};

export default AllQuotes;