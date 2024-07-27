/* eslint-disable react/prop-types */
import { SectionWrapper } from "../hoc";
import { useNavigate, useParams } from "react-router-dom";

const VolumeIssues = ({ journalDetails }) => {
  const navigate = useNavigate();

  const { journalName, vol } = useParams();

  const volume = journalDetails
    ?.map((item) => item)
    .find((value) => value.id === "archives")
    .data.find((values) => values.id === vol);

  return (
    <section className="min-h-[auto] flex items-center">
      <div className="items-center w-full flex">
        <div
          className="grid md:grid-cols-2 ss:grid-cols-2 grid-cols-3 
            md:gap-10 ss:gap-8 gap-6 w-full"
        >
          {volume?.volumeData?.map((item) => (
            <div
              key={item.id}
              className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-primaryalt md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
              onClick={() => {
                navigate(`/journals/${journalName}/${vol}/${item.id}`);
              }}
            >
              <p className="md:text-[20px] ss:text-[14px] font-medium">
                {item.name}
              </p>
            </div>
          ))}
          {/* 
          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-primaryalt md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            onClick={() => {
              navigate("/journals/EJH/Vol2/Vol2Iss2");
            }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">Issue 2</p>
          </div>

          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-primaryalt md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            onClick={() => {
              navigate("/journals/EJH/Vol2/Vol2Iss3");
            }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">Issue 3</p>
          </div>

          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-primaryalt md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            onClick={() => {
              navigate("/journals/EJH/Vol2/Vol2Iss4");
            }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">Issue 4</p>
          </div>

          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-primaryalt md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            onClick={() => {
              navigate("/journals/EJH/Vol2/Vol2Iss5");
            }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">Issue 5</p>
          </div>

          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-primaryalt md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            onClick={() => {
              navigate("/journals/EJH/Vol2/Vol2Iss6");
            }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">Issue 6</p>
          </div>

          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            // onClick={() => {
            //     navigate('/journals/EJM/Vol2Iss1');
            // }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">Issue 7</p>
          </div>

          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            // onClick={() => {
            //     navigate('/journals/EJM/Vol2Iss1');
            // }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">Issue 8</p>
          </div>

          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            // onClick={() => {
            //     navigate('/journals/EJM/Vol2Iss1');
            // }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">Issue 9</p>
          </div>

          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            // onClick={() => {
            //     navigate('/journals/EJM/Vol2Iss1');
            // }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">
              Issue 10
            </p>
          </div>

          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            // onClick={() => {
            //     navigate('/journals/EJM/Vol2Iss1');
            // }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">
              Issue 11
            </p>
          </div>

          <div
            className="w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3"
            // onClick={() => {
            //     navigate('/journals/EJM/Vol2Iss1');
            // }}
          >
            <p className="md:text-[20px] ss:text-[14px] font-medium">
              Issue 12
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(VolumeIssues, "");
