import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Button, 
    IconButton,
  } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom';
  
  const Quiz1Page = () => {
    const navigate = useNavigate();
    const onNextPageClick = () => {
      navigate('/quiz2');
    };

    return (
      <div className="w-full relative bg-white h-[761px] overflow-hidden text-left text-6xl text-gainsboro font-inter">
        <div className="absolute top-[25px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
          <div className="absolute top-[0px] left-[0px] w-[311px] h-[736px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
          </div>
          <div className="absolute top-[281px] left-[6px] w-[299px] h-[174px] text-center text-31xl text-black font-magra">
            <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
              <p className="m-0">{`Personality `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Quiz</p>
            </div>
          </div>
          <div className="absolute top-[34px] left-[341px] text-[27px] text-black inline-block w-[917px]">{`For each statement, rate how much you think the statement applies to you on a scale of 1 (strongly applies) to 5 (does not apply). `}</div>
          <div className="absolute top-[222px] left-[385px] text-3xl text-black inline-block w-[454px] h-[30px]">
            <p className="m-0">{`2. I often feel anxious or tense. `}</p>
          </div>
          <div className="absolute top-[280px] left-[385px] text-3xl text-black inline-block w-[445px]">
            <p className="m-0">{`3. I tend to worry excessively, especially in certain situations. `}</p>
          </div>
          <div className="absolute top-[360px] left-[370px] text-3xl text-black inline-block w-[429px]">
            <p className="m-0">4. I frequently dwell on negative thoughts or past mistakes.</p>
          </div>
          <div className="absolute top-[440px] left-[378px] text-3xl text-black inline-block w-[425px]">{`5. Small inconveniences easily upset or rattle me.`}</div>
          <div className="absolute top-[531px] left-[335px] text-3xl text-black inline-block w-[430px]">
            <p className="m-0">{`6. I generally feel emotionally stable, even in challenging situations.`}</p>
          </div>
          <div className="absolute top-[608px] left-[337px] text-3xl text-black inline-block w-[411px]">
            <p className="m-0">{`7. I enjoy social gatherings and meeting new people.`}</p>
          </div>
          
          <Slider className="absolute top-[685px] left-[789px] w-[425px] rounded-[50%] h-[17px]" defaultValue={1} min={1} max={5} step={1}> </Slider>
          
          <div className="absolute top-[608px] left-[760px] inline-block w-[21px]"> {/* I am not a very methoddical person */}
            1
          </div>
          <div className="absolute top-[608px] left-[1230px] inline-block w-[21px]">
            5
          </div>
          <Slider className="absolute top-[608px] left-[361px] w-[425px] rounded-[50%] h-[17px]" defaultValue={1} min={1} max={5} step={1}>
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg='lightsteelblue' />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <div className="absolute top-[614px] left-[780px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[614px] left-[887px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[614px] left-[991px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[614px] left-[1098px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[614px] left-[1208px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
  
          <div className="absolute top-[531px] left-[760px] inline-block w-[21px]"> {/* I really enjoy talkimg to people */}
            1
          </div>
          <div className="absolute top-[531px] left-[1230px] inline-block w-[21px]">
            5
          </div>
          <Slider className="absolute top-[495px] left-[787px] w-[425px] rounded-[50%] h-[17px]" defaultValue={1} min={1} max={5} step={1}>
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg='lightsteelblue' />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <div className="absolute top-[537px] left-[780px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[538px] left-[887px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[537px] left-[991px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[537px] left-[1098px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[537px] left-[1208px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
  
          <div className="absolute top-[454px] left-[760px] inline-block w-[21px]"> {/* I laugh easily */}
            1
          </div>
          <div className="absolute top-[454px] left-[1230px] inline-block w-[21px]">
            5
          </div>
          <Slider className="absolute top-[414px] left-[361px] w-[425px] rounded-[50%] h-[17px]" defaultValue={1} min={1} max={5} step={1}>
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg='lightsteelblue' />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <div className="absolute top-[460px] left-[780px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[460px] left-[887px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[460px] left-[991px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[460px] left-[1098px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[460px] left-[1208px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
  
          <div className="absolute top-[377px] left-[760px] inline-block w-[21px]">
            1
          </div>
          <div className="absolute top-[377px] left-[1230px] inline-block w-[21px]">
            5
          </div>
          <Slider className="absolute top-[227px] left-[786px] w-[425px] rounded-[50%] h-[17px]" defaultValue={1} min={1} max={5} step={1}>
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg='lightsteelblue' />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <div className="absolute top-[381px] left-[780px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[381px] left-[887px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[381px] left-[991px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[381px] left-[1098px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[381px] left-[1208px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
  
          <div className="absolute top-[300px] left-[760px] inline-block w-[21px]"> {/* I laugh easily */}
            1
          </div>
          <div className="absolute top-[300px] left-[1230px] inline-block w-[21px]">
            5
          </div>
          <Slider className="absolute top-[300px] left-[362px] w-[425px] rounded-[50%] h-[17px]" defaultValue={1} min={1} max={5} step={1}>
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg='lightsteelblue' />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <div className="absolute top-[310px] left-[780px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[310px] left-[887px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[310px] left-[991px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[310px] left-[1098px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[310px] left-[1208px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
  
          <div className="absolute top-[223px] left-[760px] inline-block w-[21px]">
            1
          </div>
          <div className="absolute top-[223px] left-[1230px] inline-block w-[21px]">
            5
          </div>
          <Slider className="absolute top-[112px] left-[788px] w-[425px] rounded-[50%] h-[17px]" defaultValue={1} min={1} max={5} step={1}>
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg='lightsteelblue' />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <div className="absolute top-[232px] left-[780px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[232px] left-[887px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[232px] left-[991px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[232px] left-[1098px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[232px] left-[1208px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
  
          <div className="absolute top-[146px] left-[760px] inline-block w-[21px]">
            1
          </div>
          <div className="absolute top-[146px] left-[1230px] inline-block w-[21px]">
            5
          </div>
          <Slider className="absolute top-[35px] left-[363px] w-[425px] rounded-[50%] h-[17px]" defaultValue={1} min={1} max={5} step={1}>
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg='lightsteelblue' />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <div className="absolute top-[155px] left-[780px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[155px] left-[887px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[155px] left-[991px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[155px] left-[1098px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
          <div className="absolute top-[155px] left-[1208px] rounded-[50%] bg-gainsboro w-[17px] h-[17px]" />
  
          <div className="absolute top-[125px] left-[365px] text-3xl text-black inline-block w-[400px]">
            1. I prefer spending my free time alone rather than with others.
          </div>
          {/* <div className="absolute top-[148px] left-[890px] rounded-[50%] bg-lightsteelblue w-[25px] h-[25px]" />
          <div className="absolute top-[225px] left-[792px] rounded-[50%] bg-lightsteelblue w-[25px] h-[25px]" />
          <div className="absolute top-[302px] left-[890px] rounded-[50%] bg-lightsteelblue w-[25px] h-[25px]" />
          <div className="absolute top-[379px] left-[989px] rounded-[50%] bg-lightsteelblue w-[25px] h-[25px]" />
          <div className="absolute top-[456px] left-[788px] rounded-[50%] bg-lightsteelblue w-[25px] h-[25px]" />
          <div className="absolute top-[533px] left-[890px] rounded-[50%] bg-lightsteelblue w-[25px] h-[25px]" />
          <div className="absolute top-[687px] left-[1191px] rounded-[50%] bg-lightsteelblue w-[25px] h-[25px]" />
          <div className="absolute top-[610px] left-[1089px] rounded-[50%] bg-lightsteelblue w-[25px] h-[25px]" /> */}
          <div className="absolute h-[54.21%] w-[1.56%] top-[8.97%] right-[0.16%] bottom-[36.82%] left-[98.28%] bg-gainsboro" />
          <Button
            className="absolute h-[7.88%] w-[13.13%] top-[89.95%] right-[1.72%] bottom-[2.17%] left-[85.16%]"
            variant="solid"
            w="168px"
            colorScheme="twitter"
            onClick={onNextPageClick}
        />
        <div className="absolute h-[5.03%] w-[7.73%] top-[91.3%] left-[88.2%] text-base tracking-[-0.32px] leading-[40px] text-black text-center inline-block">
            Next Page
        </div>
        </div>
      </div>
    );
  };
  
  export default Quiz1Page;