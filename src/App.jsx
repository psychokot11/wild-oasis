// import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Heading from "./ui/Heading";

function App() {
  return (
    <>
      <GlobalStyles />
      <Heading as="h2" >Hello, World!</Heading>
    </>
  );
}

export default App;
