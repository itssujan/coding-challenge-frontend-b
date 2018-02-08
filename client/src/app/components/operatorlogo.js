import React from "react";
import { render } from "react-dom";

import { Image } from "react-bootstrap";

class OperatorLogo extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Image
          src="https://busbud.imgix.net/operator-logos/greyhound.png?h=176&w=176&auto=format&fit=fill&bg=0FFF"
          rounded
        />
      </div>
    );
  }
}

export default OperatorLogo;
