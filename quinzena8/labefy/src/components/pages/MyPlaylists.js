import React, { Component } from "react";
import play from "../../images/play.png";
import styled from "styled-components";

const PageInner = styled.div`
  padding: 0.5rem 2rem;
`;

const CardsWrap = styled.div`
  padding-bottom: 1.8rem;
`;

const CardsWrapInner = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
`;

const CardsWrapCard = styled.div`
  background: #282828;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  padding: 1.2rem 1.2rem 0.8rem;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

const CardImage = styled.div`
  height: 160px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 0.4rem 0;
`;

const CardContentTitle = styled.h3`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0;
  letter-spacing: 0.6px;
`;

const CardplayIcon = styled.span`
  width: 40px;
  height: 40px;
  overflow: hidden;
  display: flex;
  margin-left: auto;
  opacity: 0.2;
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const PlayIconImage = styled.img`
  width: 100%;
  margin: auto;
`;

export class MyPlaylists extends Component {

  componentDidMount() {
    this.props.getAllPlaylists();
  }

  numberSort (){
    return Math.floor(Math.random() * 100)
  }

  render() {
    return (
      <PageInner>
        <CardsWrap>
          <h2>Playlist Personalizadas</h2>
          <CardsWrapInner>
            {this.props.userPlaylist.map((playlist) => (
              <CardsWrapCard key={playlist.id}>
                <CardImage>
                  <ImageCard src={`https://picsum.photos/${this.numberSort()}/151`} alt="Pic 1"></ImageCard>
                </CardImage>
                <CardContent>
                  <CardContentTitle>{playlist.name}</CardContentTitle>
                </CardContent>
                <CardplayIcon
                  onClick={() => this.props.changePage("playlistDetailsUser")}
                >
                  <PlayIconImage src={play} alt="play"></PlayIconImage>
                </CardplayIcon>
              </CardsWrapCard>
            ))}
          </CardsWrapInner>
        </CardsWrap>
      </PageInner>
    );
  }
}

export default MyPlaylists;
