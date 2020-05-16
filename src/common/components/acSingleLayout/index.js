import React from "react";
import "./index.less";
import Pagelayout from "ac-pagelayout";

const Header = Pagelayout.Header;
const SearchArea = Pagelayout.SearchArea;
const TableContent = Pagelayout.TableContent;

const AcSplit = (props) => {
  return (
    <Pagelayout className="iot-ac-single-layout">
      {props.header && (
        <Header className={props.headerClassName}>{props.header}</Header>
      )}
      {props.search && (
        <SearchArea className={props.searchClassName}>
          {props.search}
        </SearchArea>
      )}
      {props.grid && (
        <TableContent className={"grid " + props.gridClassName}>
          {props.grid}
        </TableContent>
      )}
      {props.footer && (
        <div className={"footer " + props.footerClassName}>{props.footer}</div>
      )}
    </Pagelayout>
  );
};
export default AcSplit;
