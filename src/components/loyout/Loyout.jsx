import Header from "./Header";


export default function Loyout(props) {
  return (
    <>
      <Header />
      <div className="mainSection">{props?.children}</div>
    </>
  );
}
