import React from "react";
import { FormattedMessage } from "react-intl";
import exampleMessages from "./messages/example";
import otherMessages from "./messages/other";

function App() {
  return (
    <div className="App">
      <FormattedMessage {...exampleMessages.hello} />{" "}
      <FormattedMessage {...exampleMessages.world} />
      <FormattedMessage
        id={otherMessages.other.id}
        defaultMessage={otherMessages.other.defaultMessage}
        values={{ num: 99, test: (chunks: any) => <strong>{chunks}!!</strong> }}
      />
    </div>
  );
}

export default App;
