import React from "react";
import styled from "styled-components";

const MovieListWrapper = styled.div`
  background-color: #1e1e1e;
  color: white;
  padding: 1em 1em;
  flex: 1;
`;

const MovileList = styled.div`
  display:flex;
  flex-wrap: wrap;
`;

const MovileListItem = styled.div`
  height: 220px;
  width: 150px;
  margin: 25px;
  color: #a6a7a9;
  text-align: center;
  font-size: 12px;
`;

const MovieImageDiv = styled.div`
  height: 200px;
  width: 150px;
`;

const MovilePoster = styled.img`
  height: 100%;
  width: 100%;
`;

const MovieTitleDiv = styled.div`
  padding: 5px;
  height: 20px;
  width: 150px;
  cursor: default;
`;

export interface Movie {
  genres: string[];
  id: number;
  posterUrl: string;
  title: string;
}
export const Movies = (props: { movies: Movie[] }) => {
  return (
    <MovieListWrapper>
      {/* <h2>MOVIES</h2> */}
      <MovileList>
        {props.movies.map(movie =>
        <MovileListItem key={movie.id}>
          <MovieImageDiv>
          <MovilePoster src={movie.posterUrl} alt={movie.title} />
          </MovieImageDiv>
          <MovieTitleDiv>{movie.title}</MovieTitleDiv>
        </MovileListItem>)}
      </MovileList>
    </MovieListWrapper>
  )
};
