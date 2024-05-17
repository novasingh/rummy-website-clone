import { BsArrowRight } from "react-icons/bs";

const DownloadBtn = ({
  btnClass,
  text = "Download App",
  iconEnable = true,
}) => {
  return (
    <button className={`btn download-app  ${btnClass}`}>
      {text} {iconEnable && <BsArrowRight className="ms-2" />}
    </button>
  );
};
export default DownloadBtn;
