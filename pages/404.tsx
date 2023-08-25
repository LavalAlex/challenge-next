import Layout from "@/components/Layouts";
import colors from "@/styles/colors";
import { styled } from "styled-components";

function _404() {
  return (
    <Layout>
      <Container>
        <div className="text">
          <p>404</p>
          <h1>Page not found.</h1>
        </div>

        <div className="overlay">404</div>
      </Container>
    </Layout>
  );
}

export default _404;

const Container = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;

  .text {
    display: flex;
    flex-flow: column;
    align-items: center;
    z-index: 10;

    h1 {
      font-size: 0.95rem;
      font-weight: 500;
      color: #4e4e5e;
    }
    p {
      font-size: 6rem;
      font-weight: 700;
      color: #2e2e3e;
    }
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    display: grid;
    user-select: none;

    font-size: 25rem;
    font-weight: 800;
    text-align: center;
    color: #${colors.hex.primary._900};
  }
`;
