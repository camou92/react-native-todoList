import { Image, Text } from "react-native";
import { s } from "./Header.style";
import headerLogo from "../../assets/logo.png"

export function Header() {
  return (
    <>
      <Image style={s.img} source={headerLogo} resizeMode="contain"/>
      <Text style={s.subtitle}>Tu as probablement des choses à faire</Text>
    </>
  );
}
