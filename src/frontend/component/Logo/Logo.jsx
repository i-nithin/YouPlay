import { useTheme } from "../../context";

function Logo() {
  const { theme } = useTheme();
  return (
    <>
      <h1>YOUPLAY</h1>
    </>
  );
}

export { Logo };
