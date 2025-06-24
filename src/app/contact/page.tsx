import ConnectionForm from "../components/ConnectionForm";
import MyServices from "../components/MyServices";
import { works } from "@/utils/works";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row pt-20">
        <div className="w-full flex justify-end md:justify-start">
          <h1 className="text-2xl pb-10 md:pb-0">Свяжитесь</h1>
        </div>
        <div className="lg:w-full">
          <ConnectionForm />
        </div>
      </div>
      <div className="mb-20">
        <MyServices
          works={works}
          name="Я объединяю стратегическое понимание с уникальными технологиями"
        />
      </div>
    </div>
  );
};

export default page;
