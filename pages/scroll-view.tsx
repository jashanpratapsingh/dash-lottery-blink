import type { NextPage } from "next";

const ScrollView: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-400 h-[1800px] overflow-y-auto text-left text-[101px] text-silver-100 font-helvetica">
      <footer className="absolute bottom-[-125px] left-[calc(50%_-_1000px)] [filter:blur(80px)] rounded-[50%] [background:linear-gradient(90deg,_rgba(20,_241,_149,_0.8),_rgba(133,_236,_254,_0.8))] w-[2000px] h-[250px]" />
      <main className="absolute w-full top-[0px] right-[0px] left-[0px] h-[1800px] text-left text-mini text-gray-100 font-satoshi-variable">
        <header className="absolute w-[calc(100%_-_64px)] top-[16px] right-[32px] left-[32px] h-[42px] text-left text-17xl text-white font-satoshi-variable">
          <b className="absolute top-[calc(50%_-_25px)] left-[-0.5px]">DASH</b>
          <button className="cursor-pointer [border:none] p-0 bg-whitesmoke-200 absolute top-[calc(50%_-_21px)] left-[1549px] rounded-lg w-[111.2px] h-[42px]">
            <div className="absolute top-[11.5px] left-[16px] text-mini leading-[18px] font-medium font-satoshi-variable text-gray-100 text-left flex items-center w-[82.6px] h-[18px]">
              Get started
            </div>
          </button>
          <div className="absolute top-[1px] left-[1676.2px] rounded-lg [background:linear-gradient(91.12deg,_#232324_4.07%,_#323335_50%,_#232324_95.93%)] w-[179.8px] h-10 overflow-hidden text-center text-mini">
            <img
              className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_65.9px)] w-3 h-3.5 object-cover"
              alt=""
              src="/svg@2x.png"
            />
            <div className="absolute top-[11px] left-[calc(50%_-_41.9px)] leading-[18px] font-medium flex items-center justify-center w-[110.8px] h-[18px]">
              Connect Wallet
            </div>
          </div>
        </header>
        <div className="absolute w-[calc(100%_-_64px)] top-[1150px] right-[32px] left-[32px] h-[34px] overflow-hidden hidden">
          <div className="absolute top-[9px] left-[0px] text-smi leading-[16px] font-medium text-dimgray flex items-center w-[210.9px] h-4">
            Made with ♥︎ by Dialect Labs, Inc.
          </div>
          <div className="absolute top-[calc(50%_-_9px)] left-[1275.8px] w-[219.3px] h-[18px]">
            <img
              className="absolute top-[0px] left-[0px] w-[18px] h-[18px]"
              alt=""
              src="/img.svg"
            />
            <div className="absolute top-[-0.5px] left-[24px] leading-[18px] font-medium flex items-center w-[195.7px] h-[18px]">{`What are Actions & Blinks?`}</div>
          </div>
          <div className="absolute top-[calc(50%_-_9px)] left-[1535.1px] w-[174.9px] h-[18px]">
            <img
              className="absolute top-[0px] left-[0px] w-[18px] h-[18px]"
              alt=""
              src="/img1.svg"
            />
            <div className="absolute top-[-0.5px] left-[24px] leading-[18px] font-medium flex items-center w-[154.2px] h-[18px]">
              Try out the extension
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_9px)] left-[1750px] w-[106px] h-[18px]">
            <img
              className="absolute top-[0px] left-[0px] w-[22.5px] h-[18px]"
              alt=""
              src="/img2.svg"
            />
            <div className="absolute top-[-0.5px] left-[28.5px] leading-[18px] font-medium flex items-center w-[79.3px] h-[18px]">
              Contact us
            </div>
          </div>
        </div>
      </main>
      <div className="absolute top-[calc(50%_-_720px)] left-[calc(50%_-_570px)] w-[1140px] h-[1440px]">
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[653px]">
          <div className="absolute w-6/12 top-[0px] right-[0%] left-[50%] h-[573px]">
            <div className="absolute w-[92.98%] top-[0px] right-[3.51%] left-[3.51%] h-[159px]">
              <div className="absolute w-full top-[0.4px] right-[0%] left-[0%] h-[132px]">
                <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[132px]" />
                <div className="absolute w-[117.17%] top-[-3.4px] left-[0%] leading-[132px] text-transparent !bg-clip-text [background:linear-gradient(261.81deg,_#19fb9b,_#8c01fa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                  $500K-$1.2M
                </div>
              </div>
              <div className="absolute w-[33.96%] top-[131.4px] left-[0%] text-base leading-[27.3px] uppercase font-roboto inline-block">
                WeeKly Pool prizes
              </div>
            </div>
            <div className="absolute w-[92.98%] top-[207px] right-[3.51%] left-[3.51%] h-[159px] text-[106px]">
              <div className="absolute w-full top-[0.4px] right-[0%] left-[0%] h-[132px]">
                <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[132px]" />
                <div className="absolute w-[80.75%] top-[-3.4px] left-[0%] leading-[132px] text-transparent !bg-clip-text [background:linear-gradient(260.33deg,_#0047ff,_#00bcd4)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                  150M+
                </div>
              </div>
              <div className="absolute w-[55.85%] top-[131px] left-[0%] text-base leading-[27.3px] uppercase font-roboto inline-block">
                Weekly transaction volume
              </div>
            </div>
            <div className="absolute w-[92.98%] top-[414px] right-[3.51%] left-[3.51%] h-[159px] text-[110px]">
              <div className="absolute w-full top-[0.4px] right-[0%] left-[0%] h-[132px]">
                <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[132px]" />
                <div className="absolute w-[89.81%] top-[-3px] left-[0%] leading-[132px] text-transparent !bg-clip-text [background:linear-gradient(265.11deg,_#00ffbd,_#025b8c)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                  250+
                </div>
              </div>
              <div className="absolute w-[51.89%] top-[131.4px] left-[0%] text-base leading-[27.3px] uppercase font-roboto inline-block">
                Number of winners
              </div>
            </div>
          </div>
          <div className="absolute w-6/12 top-[0px] right-[50%] left-[0%] h-[573px] text-19xl text-white">
            <div className="absolute w-[55.44%] top-[77.4px] left-[3.51%] tracking-[1px] leading-[46.2px] inline-block">
              Join a community
            </div>
            <div className="absolute w-[55.44%] top-[123.4px] left-[3.51%] tracking-[1px] leading-[46.2px] inline-block">
              and get the chance to win every friday
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[717px] right-[0%] left-[0%] h-[723px] text-base">
          <div className="absolute w-[66.67%] top-[64px] right-[0%] left-[33.33%] h-[659px]">
            <div className="absolute w-[44.74%] top-[0.4px] right-[52.63%] left-[2.63%] h-[308px]">
              <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-3xl bg-gray-500 box-border h-[308px] border-[0.5px] border-solid border-blue-linear" />
              <div className="absolute w-[0.59%] top-[31.6px] right-[90.59%] left-[8.82%] bg-skyblue h-[33px]" />
              <div className="absolute w-[81.18%] top-[212.6px] right-[9.41%] left-[9.41%] h-[63px] font-roboto">
                <div className="absolute w-[82.97%] top-[35.4px] left-[0%] leading-[27.3px] uppercase inline-block">
                  Weekly players
                </div>
                <div className="absolute top-[-3.6px] left-[0px] flex flex-row items-center justify-start gap-[6px] text-9xl text-white font-helvetica">
                  <img
                    className="w-[4.3px] relative rounded-31xl h-[4.5px] object-cover"
                    alt=""
                    src="/@2x.png"
                  />
                  <div className="w-[223px] relative leading-[28px] inline-block shrink-0">
                    3,969,092
                  </div>
                </div>
              </div>
              <div className="absolute w-[81.18%] top-[32px] right-[9.41%] left-[9.41%] h-[33px] text-9xl text-white">
                <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[33px]" />
                <div className="absolute w-full top-[-1.4px] left-[6.16%] leading-[33.04px] inline-block">{`Social & easy to play`}</div>
              </div>
              <div className="absolute w-[73.53%] top-[75px] left-[9.41%] text-[17px] leading-[27.3px] inline-block">
                We make it fun and by integrating with Blinks, we leverage the
                power of social media to get more players
              </div>
            </div>
            <div className="absolute w-[44.74%] top-[-79.6px] right-[2.63%] left-[52.63%] h-[335px]">
              <div className="absolute w-full top-[0px] right-[0%] left-[0%] [backdrop-filter:blur(20px)] rounded-3xl bg-gray-500 box-border h-[335px] border-[0.5px] border-solid border-pink-linear" />
              <div className="absolute w-[0.59%] top-[31.6px] right-[90.59%] left-[8.82%] bg-pink h-[33px]" />
              <div className="absolute w-[81.18%] top-[239.6px] right-[9.41%] left-[9.41%] h-[63px] font-roboto">
                <div className="absolute w-[53.26%] top-[35.4px] left-[0%] leading-[27.3px] uppercase inline-block">
                  Validator nodes
                </div>
                <div className="absolute top-[-3.6px] left-[0px] flex flex-row items-center justify-start gap-[6px] text-[25px] text-white font-helvetica">
                  <img
                    className="w-[4.3px] relative rounded-31xl h-[4.5px] object-cover"
                    alt=""
                    src="/@2x.png"
                  />
                  <div className="w-[63px] relative leading-[28px] inline-block shrink-0">
                    1,675
                  </div>
                </div>
              </div>
              <div className="absolute w-[81.18%] top-[32px] right-[9.41%] left-[9.41%] h-[33px] text-9xl text-white">
                <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[33px]" />
                <div className="absolute w-[80.43%] top-[-1px] left-[6.16%] leading-[33.04px] inline-block">
                  Larger Payouts
                </div>
              </div>
              <div className="absolute w-[79.41%] top-[75px] left-[9.41%] text-lg leading-[27.3px] inline-block">
                Win larger sums than traditional lottery. Additionally, as a
                result of the composable nature of blockchain, it is great to
                integrate with other solana project
              </div>
            </div>
            <div className="absolute w-[44.74%] top-[316.4px] right-[52.63%] left-[2.63%] h-[335px]">
              <div className="absolute w-full top-[0px] right-[0%] left-[0%] [backdrop-filter:blur(20px)] rounded-3xl bg-gray-500 box-border h-[335px] border-[0.5px] border-solid border-purple-linear" />
              <div className="absolute w-[0.59%] top-[31.6px] right-[90.59%] left-[8.82%] bg-border h-[33px]" />
              <div className="absolute w-[81.18%] top-[239.6px] right-[9.41%] left-[9.41%] h-[63px] font-roboto">
                <div className="absolute w-[64.13%] top-[35.4px] left-[0%] leading-[27.3px] uppercase inline-block">
                  Total transactions
                </div>
                <div className="absolute top-[-3.6px] left-[0px] flex flex-row items-center justify-start gap-[6px] text-7xl text-white font-helvetica">
                  <img
                    className="w-[4.3px] relative rounded-31xl h-[4.5px] object-cover"
                    alt=""
                    src="/@2x.png"
                  />
                  <div className="w-[199px] relative leading-[28px] inline-block shrink-0">
                    477,581,394
                  </div>
                </div>
              </div>
              <div className="absolute w-[81.18%] top-[32px] right-[9.41%] left-[9.41%] h-[33px] text-9xl text-white">
                <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[33px]" />
                <div className="absolute w-[39.13%] top-[-1px] left-[6.16%] leading-[33.04px] inline-block">
                  Scalable
                </div>
              </div>
              <div className="absolute w-[77.35%] top-[75px] left-[9.41%] text-lg leading-[27.3px] inline-block">
                Centaurus is made to acquire companies that will continue to
                grow and thrive on the long term.
              </div>
            </div>
            <div className="absolute w-[44.74%] top-[268.4px] right-[2.63%] left-[52.63%] h-[362px] text-7xl text-white">
              <div className="absolute w-full top-[0px] right-[0%] left-[0%] [backdrop-filter:blur(20px)] rounded-3xl bg-gray-500 box-border h-[362px] border-[0.5px] border-solid border-green-linear" />
              <div className="absolute w-[0.59%] top-[31.6px] right-[90.59%] left-[8.82%] bg-mediumspringgreen-100 h-[33px]" />
              <div className="absolute w-[81.18%] top-[266.6px] right-[9.41%] left-[9.41%] h-[63px]">
                <div className="absolute w-[27.9%] top-[-4px] left-[0%] leading-[28px] inline-block">
                  100%
                </div>
                <div className="absolute w-[60.87%] top-[35.4px] left-[0%] text-base leading-[27.3px] uppercase font-roboto text-silver-100 inline-block">
                  Decentralized
                </div>
              </div>
              <div className="absolute w-[81.18%] top-[32px] right-[9.41%] left-[9.41%] h-[33px] text-9xl">
                <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[33px]" />
                <div className="absolute w-[72.83%] top-[-1px] left-[6.16%] leading-[33.04px] inline-block">
                  Transparent
                </div>
              </div>
              <div className="absolute w-[78.53%] top-[75px] left-[9.41%] text-lg leading-[27.3px] inline-block text-silver-100">
                <span className="whitespace-pre-wrap">{`Our network and other innovations minimize its impact to the  `}</span>
                <span className="[text-decoration:underline] text-mediumspringgreen-200">
                  players
                </span>
                <span className="text-mediumspringgreen-100">.</span>
                <span className="text-silver-100">
                  {" "}
                  Each transaction is transparent. Anyone can also purchase our
                  governance token to have a stake in our protocol
                </span>
              </div>
            </div>
          </div>
          <div className="absolute w-[29.82%] top-[64px] right-[68.42%] left-[1.75%] h-[116px] text-[40px] text-white">
            <div className="absolute w-[48.53%] top-[-2.6px] left-[0%] tracking-[1px] leading-[46.2px] inline-block">
              Built for
            </div>
            <div className="absolute w-[77.94%] top-[43.4px] left-[0%] text-19xl tracking-[1px] leading-[46.2px] inline-block">
              players.
            </div>
            <div className="absolute top-[98.4px] left-[1.6px] flex flex-row items-center justify-start gap-[4px] text-base text-silver-100 font-roboto">
              <img
                className="w-[4.3px] relative rounded-31xl h-[4.5px] object-cover"
                alt=""
                src="/1@2x.png"
              />
              <div className="w-[205px] relative leading-[16px] uppercase inline-block shrink-0">
                READ our whitepaper
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollView;
