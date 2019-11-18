import React from "react";
import "./index.less";
import Pagelayout from "ac-pagelayout";

const Header = Pagelayout.Header;
const SearchArea = Pagelayout.SearchArea;
const TableContent = Pagelayout.TableContent;

const AcSplit = props => {
  return (
    <Pagelayout className="iot-ac-single-layout">
      <Header>{props.header}</Header>
      <SearchArea>{props.search}</SearchArea>
      <TableContent className="grid">{props.grid}</TableContent>
      <div className="footer">{props.footer}</div>
    </Pagelayout>
  );
};
export default AcSplit;
