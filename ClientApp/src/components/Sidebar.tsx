import * as React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
background-color: #2a2a2c;
color: #919193;
padding: 1em;
width: 20%;
`;

const GenreItemWrapper = styled.div`
cursor: default;
padding: 5px;
font-size: 15px;
&:hover {
  background-color: darkgrey;
  color: black;
  cursor: pointer;
}
`;

export const Sidebar = (props: { genres: string[], filterByGenre: any}) => {

  return (
    <SideBarWrapper>
      <h1>Movie App</h1>
      <h6>FILTER BY GENRES</h6>
      {props.genres.map((genre, idx) => <GenreItemWrapper key={idx} onClick={() => props.filterByGenre(genre)}>{genre}</GenreItemWrapper>)}
    </SideBarWrapper>
  )
};
