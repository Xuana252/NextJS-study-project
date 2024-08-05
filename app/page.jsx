import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p>
        My very first NextJS project I learned from this Youtuber whose name I
        can't remember (sorry){" "}
      </p>
      <Feed />
    </section>
  );
};

export default Home;
