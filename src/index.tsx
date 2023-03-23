import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import literals from "./lang/en.json";

interface Props {
  children?: React.ReactNode;
}

const Bold = (props: Props) => {
  return (
    <div>
      <strong>{props.children}</strong>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <IntlProvider
    locale="en"
    defaultLocale="en"
    messages={literals}
    defaultRichTextElements={{
      bold: (chunks) => <Bold>{chunks}</Bold>,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
