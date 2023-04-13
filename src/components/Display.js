export default function Display(props) {
    return (
      <>
        {props.response === "card is Valid!" ? (
          <div className="valid">
            <p>{props.response}</p>
          </div>
        ) : (
          <div className="invalid">
            <p>{props.response}</p>
          </div>
        )}
      </>
    );
  }
  