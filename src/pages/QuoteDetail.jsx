import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";


const QuoteDetail = () => {
	const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if(status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if(error) {
    return <p className="centered">{error}</p>
  }

  if (!loadedQuotes.text) {
    return <p className="centered">No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            See Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
