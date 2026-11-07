import Image from "next/image";
import logoImage from "../app/icon.png";

export default function NormalLogo() {
  return <Image src={logoImage} alt="Logo" width={30} height={30} className="normal-logo" />;
}

export function WhiteLogo({ width = 160 }) {
  return <Image src={logoImage} alt="White Logo" width={width} height={width} className="brightness-0 invert" />;
}
