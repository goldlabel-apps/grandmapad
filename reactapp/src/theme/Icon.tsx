import * as React from "react";
import { SvgIconProps } from "@mui/material";
import VUIcon from "./SVGIcons/VUIcon";
import GoldlabelIcon from "./SVGIcons/GoldlabelOutlined";
import BlokeyIcon from "./SVGIcons/BlokeyIcon";
import IconChrome from "./SVGIcons/ChromeIcon";
import IconSafari from "./SVGIcons/SafariIcon";
import IconDesktop from "./SVGIcons/DesktopIcon";
import IconEdge from "./SVGIcons/EdgeIcon";
import IconFirefox from "./SVGIcons/FirefoxIcon";
import IconGatsby from "./SVGIcons/GatsbyIcon";
import IconGitlab from "./SVGIcons/GitlabIcon";
import IconGraphql from "./SVGIcons/GraphqlIcon";
import IconMac from "./SVGIcons/MacIcon";
import IconIphone from "./SVGIcons/IphoneIcon";
import IconLinux from "./SVGIcons/LinuxIcon";
import IconMacromedia from "./SVGIcons/MacromediaIcon";
import IconOliver from "./SVGIcons/OliverIcon";
import IconOpenAI from "./SVGIcons/OpenAIIcon";
import IconPingpongball from "./SVGIcons/PingpongballIcon";
import IconMultiPlayer from "./SVGIcons/MultiPlayerIcon";
import HomeIcon from "@mui/icons-material/Home";
import ApiIcon from "@mui/icons-material/Code";
import JpgIcon from "@mui/icons-material/LocalSee";
import PngIcon from "@mui/icons-material/Image";
import WebpIcon from "@mui/icons-material/Sailing";
import SettingsIcon from "@mui/icons-material/Settings";
import ThemeIcon from "@mui/icons-material/Palette";
import CloseIcon from "@mui/icons-material/Close";
import MenuHIcon from "@mui/icons-material/LinearScale";
import MenuVIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShareIcon from "@mui/icons-material/Share";
import JSONIcon from "@mui/icons-material/DataObject";
import SvgImgIcon from "@mui/icons-material/Polyline";
import FirebaseIcon from "@mui/icons-material/Google";
import FooterIcon from "@mui/icons-material/MilitaryTech";
import UpIcon from "@mui/icons-material/ArrowUpward";
import DownIcon from "@mui/icons-material/ArrowDownward";
import LeftIcon from "@mui/icons-material/ArrowBack";
import RightIcon from "@mui/icons-material/ArrowForward";
import BuildingIcon from "@mui/icons-material/Apartment";
import CsvIcon from "@mui/icons-material/Grading";
import TxtIcon from "@mui/icons-material/TextFields";
import FolderIcon from "@mui/icons-material/FolderOutlined";
import Editcon from "@mui/icons-material/Edit";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import OthersIcon from "@mui/icons-material/People";
import OtherIcon from "@mui/icons-material/Person";
import UnknownIcon from "@mui/icons-material/HelpOutlineOutlined";
import AndroidIcon from "@mui/icons-material/Android";
import GoogleIcon from "@mui/icons-material/Google";
import UploadIcon from "@mui/icons-material/UploadFile";
import FilemanagerIcon from "@mui/icons-material/FileCopy";
import LinkIcon from "@mui/icons-material/Link";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminIcon from "@mui/icons-material/Security";
import CreateaccountIcon from "@mui/icons-material/AddModerator";
import SigninIcon from "@mui/icons-material/Security";
import UsersIcon from "@mui/icons-material/People";
import UserIcon from "@mui/icons-material/Person";
import LogsIcon from "@mui/icons-material/DynamicForm";
import HelpIcon from "@mui/icons-material/HelpCenterOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import AddUserIcon from "@mui/icons-material/PersonAdd";
import SaveIcon from "@mui/icons-material/Save";
import HideIcon from "@mui/icons-material/VisibilityOff";
import DarkmodeIcon from "@mui/icons-material/DarkMode";
import LightmodeIcon from "@mui/icons-material/LightMode";
import SuccessIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import WarningIcon from "@mui/icons-material/ReportGmailerrorred";
import ErrorIcon from "@mui/icons-material/ReportProblem";
import NewuserIcon from "@mui/icons-material/PersonAdd";
import ViewIcon from "@mui/icons-material/RemoveRedEye";
import ActivityIcon from "@mui/icons-material/Checklist";
import SignoutIcon from "@mui/icons-material/ExitToApp";

export interface IconProps {
  icon: IconNames;
  color?: SvgIconProps["color"];
}

export type IconNames =
  | "view"
  | "success"
  | "activity"
  | "info"
  | "warning"
  | "error"
  | "createaccount"
  | "signin"
  | "admin"
  | "dashboard"
  | "vu"
  | "vu-light"
  | "vu-dark"
  | "logout"
  | "unknown"
  | "android"
  | "multiplayer"
  | "player"
  | "users"
  | "chrome"
  | "safari"
  | "desktop"
  | "edge"
  | "firefox"
  | "gatsby"
  | "gitlab"
  | "graphql"
  | "iphone"
  | "linux"
  | "footer"
  | "files"
  | "filemanager"
  | "mac"
  | "flash"
  | "oliver"
  | "openai"
  | "pingpong"
  | "home"
  | "others"
  | "edit"
  | "jpg"
  | "news"
  | "newuser"
  | "png"
  | "webp"
  | "settings"
  | "theme"
  | "menu-h"
  | "menu-v"
  | "refresh"
  | "share"
  | "close"
  | "json"
  | "svg"
  | "sketch"
  | "menu"
  | "firebase"
  | "left"
  | "right"
  | "up"
  | "down"
  | "folder"
  | "glb"
  | "logs"
  | "csv"
  | "txt"
  | "fingerprint"
  | "you"
  | "other"
  | "iphone"
  | "linux"
  | "flash"
  | "oliver"
  | "openai"
  | "google"
  | "pingpong"
  | "upload"
  | "link"
  | "goldlabel"
  | "delete"
  | "user"
  | "add"
  | "signout"
  | "adduser"
  | "darkmode"
  | "lightmode"
  | "save"
  | "hide"
  | "api"
  | "help";

const Icon: React.FC<IconProps> = ({ icon, color }) => {
  let c: SvgIconProps["color"] = "inherit";
  if (color) c = color;
  let iconFragment: JSX.Element = <React.Fragment />;
  
  switch (icon) {
    case "signout":
      iconFragment = <SignoutIcon color={c} />;
      break;    
    case "view":
      iconFragment = <ViewIcon color={c} />;
      break;    
    case "activity":
      iconFragment = <ActivityIcon color={c} />;
      break;
    case "api":
      iconFragment = <ApiIcon color={c} />;
      break;
    case "newuser":
      iconFragment = <NewuserIcon color={c} />;
      break;
    case "success":
      iconFragment = <SuccessIcon color={c} />;
      break;
    case "info":
      iconFragment = <InfoIcon color={c} />;
      break;
    case "warning":
      iconFragment = <WarningIcon color={c} />;
      break;
    case "error":
      iconFragment = <ErrorIcon color={c} />;
      break;
    case "darkmode":
      iconFragment = <DarkmodeIcon color={c} />;
      break;
    case "lightmode":
      iconFragment = <LightmodeIcon color={c} />;
      break;
    case "hide":
      iconFragment = <HideIcon color={c} />;
      break;
    case "save":
      iconFragment = <SaveIcon color={c} />;
      break;
    case "adduser":
      iconFragment = <AddUserIcon color={c} />;
      break;
    case "add":
      iconFragment = <AddIcon color={c} />;
      break;
    case "user":
      iconFragment = <UserIcon color={c} />;
      break;
    case "delete":
      iconFragment = <DeleteIcon color={c} />;
      break;
    case "help":
      iconFragment = <HelpIcon color={c} />;
      break;
    case "files":
      iconFragment = <FilemanagerIcon color={c} />;
      break;
    case "filemanager":
      iconFragment = <FilemanagerIcon color={c} />;
      break;
    case "createaccount":
      iconFragment = <CreateaccountIcon color={c} />;
      break;
    case "signin":
      iconFragment = <SigninIcon color={c} />;
      break;
    case "admin":
      iconFragment = <AdminIcon color={c} />;
      break;
    case "dashboard":
      iconFragment = <DashboardIcon color={c} />;
      break;
    case "vu":
      iconFragment = <VUIcon color={c} />;
      break;
    case "vu-light":
      iconFragment = <VUIcon color={c} />;
      break;
    case "vu-dark":
      iconFragment = <VUIcon color={c} />;
      break;
    case "logout":
      iconFragment = <LogoutIcon color={c} />;
      break;
    case "menu":
      iconFragment = <MenuIcon color={c} />;
      break;
    case "footer":
      iconFragment = <FooterIcon color={c} />;
      break;
    case "upload":
      iconFragment = <UploadIcon color={c} />;
      break;
    case "link":
      iconFragment = <LinkIcon color={c} />;
      break;
    case "google":
      iconFragment = <GoogleIcon color={c} />;
      break;
    case "goldlabel":
      iconFragment = <GoldlabelIcon color={c} />;
      break;
    case "android":
      iconFragment = <AndroidIcon color={c} />;
      break;
    case "iphone":
      iconFragment = <IconIphone color={c} />;
      break;
    case "unknown":
      iconFragment = <UnknownIcon color={c} />;
      break;
    case "linux":
      iconFragment = <IconLinux color={c} />;
      break;
    case "flash":
      iconFragment = <IconMacromedia color={c} />;
      break;
    case "oliver":
      iconFragment = <IconOliver color={c} />;
      break;
    case "openai":
      iconFragment = <IconOpenAI color={c} />;
      break;
    case "pingpong":
      iconFragment = <IconPingpongball color={c} />;
      break;
    case "safari":
      iconFragment = <IconSafari color={c} />;
      break;
    case "multiplayer":
      iconFragment = <IconMultiPlayer color={c} />;
      break;
    case "mac":
      iconFragment = <IconMac color={c} />;
      break;
    case "graphql":
      iconFragment = <IconGraphql color={c} />;
      break;
    case "gitlab":
      iconFragment = <IconGitlab color={c} />;
      break;
    case "gatsby":
      iconFragment = <IconGatsby color={c} />;
      break;
    case "firefox":
      iconFragment = <IconFirefox color={c} />;
      break;
    case "player":
      iconFragment = <BlokeyIcon color={c} />;
      break;
    case "logs":
      iconFragment = <LogsIcon color={c} />;
      break;
    case "users":
      iconFragment = <UsersIcon color={c} />;
      break;
    case "chrome":
      iconFragment = <IconChrome color={c} />;
      break;
    case "desktop":
      iconFragment = <IconDesktop color={c} />;
      break;
    case "edge":
      iconFragment = <IconEdge color={c} />;
      break;
    case "home":
      iconFragment = <HomeIcon color={c} />;
      break;
    case "edit":
      iconFragment = <Editcon color={c} />;
      break;
    case "others":
      iconFragment = <OthersIcon color={c} />;
      break;
    case "csv":
      iconFragment = <CsvIcon color={c} />;
      break;
    case "you":
      iconFragment = <FingerprintIcon color={c} />;
      break;
    case "other":
      iconFragment = <OtherIcon color={c} />;
      break;
    case "fingerprint":
      iconFragment = <FingerprintIcon color={c} />;
      break;
    case "txt":
      iconFragment = <TxtIcon color={c} />;
      break;
    case "up":
      iconFragment = <UpIcon color={c} />;
      break;
    case "down":
      iconFragment = <DownIcon color={c} />;
      break;
    case "left":
      iconFragment = <LeftIcon color={c} />;
      break;
    case "right":
      iconFragment = <RightIcon color={c} />;
      break;
    case "folder":
      iconFragment = <FolderIcon color={c} />;
      break;
    case "glb":
      iconFragment = <BuildingIcon color={c} />;
      break;
    case "json":
      iconFragment = <JSONIcon color={c} />;
      break;
    case "svg":
      iconFragment = <SvgImgIcon color={c} />;
      break;
    case "firebase":
      iconFragment = <FirebaseIcon color={c} />;
      break;
    case "jpg":
      iconFragment = <JpgIcon color={c} />;
      break;
    case "png":
      iconFragment = <PngIcon color={c} />;
      break;
    case "webp":
      iconFragment = <WebpIcon color={c} />;
      break;
    case "settings":
      iconFragment = <SettingsIcon color={c} />;
      break;
    case "theme":
      iconFragment = <ThemeIcon color={c} />;
      break;
    case "menu-v":
      iconFragment = <MenuVIcon color={c} />;
      break;
    case "menu-h":
      iconFragment = <MenuHIcon color={c} />;
      break;
    case "close":
      iconFragment = <CloseIcon color={c} />;
      break;
    case "share":
      iconFragment = <ShareIcon color={c} />;
      break;
    case "refresh":
      iconFragment = <RefreshIcon color={c} />;
      break;
    default:
      iconFragment = <ErrorIcon color={"error"} />;
  }
  return iconFragment;
};

export default Icon;
