import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Route, Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const SUB_QUOTES = [
  {
    id: "q1",
    author: "Mandela",
    text: "It always seems impossible until its done.",
  },
  {
    id: "q2",
    author: "Azikiwe",
    text: "No matter how old an individual may be, no matter if he is young or old, if he thinks in accordance with the times he is immortal",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = SUB_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            See Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
