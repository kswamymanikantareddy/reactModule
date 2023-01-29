import React from "react";
import { T1, T2, T3, T4, T5, T6 } from "../topography/Topography";
import { Box, Box3, Box4, Line } from "../Wrapper/Box";
import { Card } from "../Atoms/Card";
import { Image } from "../Atoms/Image";
import { Button } from "../Atoms/Button";
import { Container, Wrapper } from "../Molecules/Molecule";
import { Avatar } from "@mui/material";
import { Text1, Text2 } from "../Molecules/Molecule";

const Organism = () => {
  return (
    <>
      <Card>
        <Box>
          <T1>You are buying</T1>
          <T2>0.0234510 BTC</T2>
          <T3>1BTC = $3,297,866.84</T3>
        </Box>
        <Image>
          <img
            src="C:\Users\HP\Desktop\react\modifiedy-app\public\Assests\Vector 59.svg"
            alt=""
          />
        </Image>

        <Box4>
          <Box4>
            <Container>
              <Box4>
                <Avatar
                  alt=" "
                  src="./Assests/Vector.png"
                  sx={{ width: 24, height: 24 }}
                />
              </Box4>
              <Wrapper>
                <Text1>Payment method</Text1>
                <Text2> Visa credit ...8845</Text2>
              </Wrapper>
            </Container>
          </Box4>

          <Line>
            |<br />
            |<br />
            |<br />
            |<br />
            |<br />
            |<br />
          </Line>

          <Box4>
            <Container>
              <Box4>
                <Avatar
                  alt=" "
                  src="./Assests/one.png"
                  sx={{ width: 24, height: 24 }}
                />
              </Box4>
              <Wrapper>
                <Text1>Delivery fees </Text1>
                <Text2> 0.001 BTC</Text2>
              </Wrapper>
            </Container>
          </Box4>

          <Line>
            |<br />
            |<br />
            |<br />
            |<br />
            |<br />
            |<br />
          </Line>

          <Box4>
            <Container>
              <Box4>
                <Avatar
                  alt=" "
                  src="./Assests/three.png"
                  sx={{ width: 24, height: 24 }}
                />
              </Box4>
              <Wrapper>
                <Text1>Deposit to </Text1>
                <Text2> Bitcoin wallet</Text2>
              </Wrapper>
            </Container>
          </Box4>
        </Box4>
        <Image>
          <img
            src="C:\Users\HP\Desktop\react\modifiedy-app\public\Assests\Vector 59.svg"
            alt=""
          />
        </Image>

        <Box3>
          <Box4>
            <T4>
              0.0234510
              BTC----------------------------------------------------------$34,000.00
            </T4>
          </Box4>
          <Box4>
            <T5>
              Minet
              Fee------------------------------------------------------------------$1,000.00
            </T5>
          </Box4>
          <Box4>
            <T6>
              Total----------------------------------------------$35,000.00
            </T6>
          </Box4>
          <Box4>
            <Button>BUY NOW</Button>
          </Box4>
        </Box3>
      </Card>
    </>
  );
};

export default Organism;
