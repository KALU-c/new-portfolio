import { useNavigate } from "react-router-dom";

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToProjects = () => navigate("/projects");
  const goToAbout = () => navigate("/about");
  const goToContact = () => navigate("/contact");
  const goToGithub = () => { window.open("https://github.com/Endekalu-Zemenu", "_blank") };
  const goToTelegram = () => { window.open("https://t.me/Real_Kal", "_blank") }

  return { goToHome, goToProjects, goToAbout, goToContact, goToGithub, goToTelegram };
};
export default useCustomNavigate;
