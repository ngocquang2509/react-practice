import styled from "styled-components";

const ListProductWrap = styled.div`
  position: absolute;
  left: 300px;
  top: 100px;
  width: calc(100% - 300px);
  height: calc(100% - 100px);
  overflow: auto;
`;

const ListProductTitle = styled.h2`
  margin: 30px 0 30px 100px;
  font-size: 32px;
  color: #767278;
`;

const ListProductItem = styled.div`
  margin: 20px 0 20px 100px;
  display: flex;
  flex-wrap: wrap;
`;

export { ListProductWrap, ListProductTitle, ListProductItem };
