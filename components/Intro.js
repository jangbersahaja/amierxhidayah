import Image from "next/image";
import styled from "styled-components";

import { Info } from "../details/info";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80%;
  width: 95%;
  max-width: 450px;

  border-radius: 10px;
  overflow: hidden;

  position: relative;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const BG = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-size: 18px;
  text-align: center;

  padding: 1px 5px;
  color: #8A6E69;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: justify;
  align-items: justify;

  padding: 20px 0px;
`;

const Anis = styled.h2`
  font-weight: 100;
  line-height: 0.8;
  font-family: "Playfair Display", serif;
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;
  color: #8A6E69;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
`;

const Hasrul = styled.h2`
  font-weight: 100;
  line-height: 0.8;
  font-family: "Playfair Display", serif;
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;
  color: #8A6E69;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);

  position: relative;

`;

const And = styled.p`
  margin: -10px 0px 0px 0px;
  font-size: 100px;
  text-align: justify;
  position: relative;
  color: #F0D097;

  opacity: 0.6;

  position: absolute;
`;

const DayTime = styled.p`
  font-size: 18px;
  padding: 2px 10px;
  letter-spacing: 1px;
  color: #8A6E69;
`;

const Location = styled.p`
  font-size: 18px;
  padding: 2px 10px;
  letter-spacing: 1px;
  color: #8A6E69;
  font-weight: 500;
`;

const Intro = () => {
  return (
    <Wrapper>
      <BG>
        <Image
          src={require("/src/img/background.jpg")}
          layout="fill"
          objectFit="cover"
          alt="Gambar Profil Reezal Merican"
        />
      </BG>
      <TextWrapper>
        <Title>
          Jemputan <br />
          {Info.Title}
        </Title>
        <Center>
          <Anis>{Info.SN.Main}</Anis>
          <And>&</And>
          <Hasrul>{Info.SN.Partner}</Hasrul>
        </Center>
        <DayTime>
          {Info.Date.Date} {Info.Date.Month} {Info.Date.Year}
        </DayTime>
        <Location>
          {Info.Location.Address1}
        </Location>
        <Location>
          Pelabuhan Klang
        </Location>
      </TextWrapper>
    </Wrapper>
  );
};

export default Intro;
