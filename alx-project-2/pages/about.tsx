import Header from "../components/layout/Header";
import Button from "../components/common/Button";

const AboutPage = () => {
  return (
    <div>
      <Header />

      <div className="p-6 space-y-8 text-center">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="text-gray-700">Reusable Button Component Demo</p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
