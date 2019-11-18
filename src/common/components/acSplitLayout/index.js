import React from "react";
import "./index.less";
import Pagelayout from "ac-pagelayout";

const Header = Pagelayout.Header;
const SearchArea = Pagelayout.SearchArea;
const TableContent = Pagelayout.TableContent;

const AcSplit = props => {
  return (
    <div className="demo3">
      <Pagelayout>
        <Header>{props.header}</Header>
        <SearchArea>{props.search}</SearchArea>
        <TableContent className="main-grid">{props.mainGrid}</TableContent>
        <TableContent>{props.kidGrid}</TableContent>
      </Pagelayout>
    </div>
  );
};
export default AcSplit;
