import type { NextPage } from "@types";

const Home: NextPage = () => {
  return <div>Start here</div>;
};

Home.getLayout = (page) => {
  return <div>{page}</div>;
};

export default Home;
