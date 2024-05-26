import * as React from "react";
import { useParams } from "react-router-dom";
import AuthApi from "../helper/AuthApi";
import Navbar from "../components/Navbar/Navbar";
import ExampleImg from "../assets/img/examplePostImg.jpg";
import FormatDate from "../helper/formatDate";

const Post = () => {
  const { id } = useParams();
  const splitId = id.split("-");
  const [headings, setHeadings] = React.useState([]);
  const [Data, setData] = React.useState([]);
  // const contentRef = React.useRef(null); // Referensi untuk konten posting

  React.useEffect(() => {
    fetchPostData();
    setTimeout(() => {
      const elements = Array.from(document.querySelectorAll("h1")).map(
        (elem) => ({
          id: elem.id,
          text: elem.innerText,
          level: Number(elem.nodeName.charAt(1)),
        })
      );
      setHeadings(elements);
    }, 500);
  }, []);

    // const scrollToHeading = (index) => {
    //   const headingElement = contentRef.current.querySelectorAll("h1")[index];
    //   if (headingElement) {
    //     headingElement.scrollIntoView({ behavior: "smooth", block: "start" });
    //   }
    // };
  const fetchPostData = async () => {
    try {
      await AuthApi.get(`/post/${splitId[0]}`).then((response) => {
        setData(response.data.data);
      });
    } catch (error) {}
  };
  return (
    <>
      <Navbar />
      <div className="bg-[#161513] text-white">
        <div className="container mx-auto px-7 py-32">
          <div className="flex flex-row gap-20 ">
            <div className="  flex flex-col basis-9/12 ">
              <div className="flex flex-col  gap-2 md:gap-2">
                <p className="text-xl font-semibold md:text-4xl md:font-semibold font-ubuntu leading-tight  md:w-11/12 tracking-wide">
                  {Data.title}
                </p>
                <div className="space-y-1 mb-4">
                  <p className="text-orange-200 md:text-2xl  font-medium">
                    {Data.categories?.map((item, index) => (
                      <span key={index}>{item.category} | </span>
                    ))}
                    {""}
                    By Alfian Ramadani
                  </p>
                  <p className="text-orange-200 md:text-xs font-normal">
                    Published: {<FormatDate date={Data.created_at} />}
                  </p>
                </div>
              </div>
              <div className="w-full h-[35rem]  ">
                <img
                  src={Data.featured_image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <section
                // ref={contentRef} // Set referensi untuk konten posting
                className="py-10"
                dangerouslySetInnerHTML={{ __html: Data.content }}
              ></section>
            </div>
            <aside className="basis-3/12">
              <div className="fixed ">
                <p className="uppercase font-semibold mb-4">
                  Table Of Contents
                </p>
                <div className="flex flex-col gap-2">
                  {headings?.map((heading, index) => (
                    <a
                      key={index}
                      href="#"
                      // onClick={() => scrollToHeading(index)}
                    >
                      {heading.text}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
