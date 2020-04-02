import React from "react";
import "./index.less";
import Pagelayout from "ac-pagelayout";

const Header = Pagelayout.Header;
const SearchArea = Pagelayout.SearchArea;
const TableContent = Pagelayout.TableContent;

const AcSplit = props => {
  return (
    <Pagelayout className="iot-ac-split-layout">
      {props.header && (
        <Header className={props.headerClassName}>{props.header}</Header>
      )}
      {props.search && (
        <SearchArea className={props.searchClassName}>
          {props.search}
        </SearchArea>
      )}
      {props.mainGrid && (
        <TableContent className={"main-grid " + props.mainGridClassName}>
          {props.mainGrid}
        </TableContent>
      )}
      {props.kidGrid && (
        <TableContent className={props.kidGridClassName}>
          {props.kidGrid}
        </TableContent>
      )}
    </Pagelayout>
  );
};
export default AcSplit;
