import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
export const GithubGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
    overflow: hidden;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  &:hover{
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  }

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }
    &:last-child.firebaseLink{
      margin-left:auto;
    }

    img {
      margin: 0;
    }
    img.livelink{
      max-width:90px;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;
export const AttenuatedContainer = styled.div`
  
  max-width:60vw;
  margin: 20px auto;
  border-radius: 3px;
  border: 1px solid #97c1da;
    background-color: #d8ebf8;
  .alert{
      color: #264c72;
    }
  .d-flex {
    display: flex !important;
}
.px-2 {
    padding-right: 8px !important;
}
.pl-2, .px-2 {
    padding-left: 8px !important;
}
.flex-items-center {
    align-items: center !important;
}
.flex-justify-between {
    justify-content: space-between !important;
}
.Box-header {
    padding: 16px;
    margin: -1px -1px 0;
    background-color: 
#f6f8fa;
border: 1px solid
    #97c1da;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.Box--condensed {
    line-height: 1.25;
}
.Box {
    background-color: 
#fff;

}
.Box--condensed .Box-body, .Box--condensed .Box-footer, .Box--condensed .Box-header {
    padding: 8px 16px;
        padding-right: 16px;
        padding-left: 16px;
}
.Box-header {
    padding: 16px;
    margin: -1px -1px 0;
    background-color: 
#f6f8fa;
}
h3.pr-3{
  margin-bottom:0px;
}
.pr-3 {
    padding-right: 16px !important;
}
.Box-title {
    font-size: 14px;
    font-weight: 600;
}
.Box-title.pr-3{
  display: inline-block;
vertical-align: middle;
}
.octicon {
    vertical-align: text-bottom;
}
.octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
}

  }`;
