import { GiSwordBrandish } from "react-icons/gi";
import { BsTicketDetailed } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

const obj = [
  {
    className:"h-[15rem]",
    icons: (
      <>
        <GiSwordBrandish size={40} className="text-white" />
      </>
    ),
    title: "Brand Recognition",
    content: `Boost your brand recognition with each click. Generic links don’t
        mean a thing. Branded links help instill confidence in your content.`,
  },
  {
    className:"mt-[2rem] h-[15rem]",
    icons: (
      <>
        <BsTicketDetailed size={40} className="text-white" />
      </>
    ),
    title: "Detailed Records",
    content: `Gain insights into who is clicking your links. Knowing when and
        where people engage with your content helps inform better decisions.`,
  },
  {
    className:"mt-[4rem] max-lg:mt-[2rem] h-[15rem]",
    icons: (
      <>
        <TfiWrite size={40} className="text-white" />
      </>
    ),
    title: "Fully Customizable",
    content: `Improve brand awareness and content discoverability through
        customizable links, supercharging audience engagement.`,
  },
];

export default obj;
