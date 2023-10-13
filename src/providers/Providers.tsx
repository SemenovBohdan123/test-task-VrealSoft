import { Container } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Header from "../components/Header/Header";
import store from "../store/store";

const Providers = () => {
  return (
    <div>
      <Provider store={store}>
        <Container padding="40px">
          <Header />
        </Container>
      </Provider>
    </div>
  );
};

export default Providers;
