import type { NextPage } from "next";

const StakeDash: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-400 box-border h-[1200px] overflow-y-auto text-left text-2xl text-whitesmoke-100 font-satoshi-variable border-[1px] border-solid border-fills-quaternary">
      <section className="absolute bottom-[-125px] left-[calc(50%_-_1000px)] [filter:blur(80px)] rounded-[50%] [background:linear-gradient(90deg,_rgba(20,_241,_149,_0.8),_rgba(133,_236,_254,_0.8))] w-[2000px] h-[250px]" />
      <main className="absolute w-full top-[0px] right-[0px] left-[0px] h-[1200px] text-left text-mini text-gray-100 font-satoshi-variable">
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
      <div className="absolute top-[139px] left-[20px] h-[203.4px] flex flex-col items-start justify-start gap-[23px]">
        <div className="w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg bg-black-grid box-border h-[200px] overflow-hidden shrink-0 opacity-[0.4] border-[1px] border-solid border-border-grey">
          <div className="absolute top-[0px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <img
            className="absolute top-[22px] left-[24px] w-[51px] h-[51px] overflow-hidden object-cover"
            alt=""
            src="/gift-1@2x.png"
          />
          <div className="absolute top-[85px] left-[24px] leading-[140%] font-medium inline-block w-[306px] h-[29px]">
            Raffle Lottery
          </div>
          <div className="absolute top-[126px] left-[24px] text-base leading-[140%] font-light inline-block w-[376px] h-[50px]">
            Buy Tickets to get the chance to win large prizes weekly
          </div>
        </div>
        <div className="w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg bg-black-grid box-border h-[200px] overflow-hidden shrink-0 opacity-[0.4] text-lgi-8 border-[1px] border-solid border-border-grey">
          <div className="absolute top-[1px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <div className="absolute h-[23.5%] w-[11.6%] top-[11%] right-[82.97%] bottom-[65.5%] left-[5.42%] text-white">
            <img
              className="absolute h-full w-[95.53%] top-[0%] right-[4.47%] bottom-[0%] left-[0%] rounded-[36.68px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector@2x.png"
            />
            <div className="absolute top-[10.6px] left-[6.7px] leading-[140%] font-light inline-block w-[42.5px] h-[27.4px]">
              +10
            </div>
          </div>
          <div className="absolute top-[81px] left-[24px] text-2xl leading-[140%] font-medium inline-block w-[306px] h-[29px]">
            Rewards program
          </div>
          <div className="absolute top-[113.4px] left-[24px] text-base leading-[140%] font-light inline-block w-[376px]">
            Reward loyal customers with points for engagement or exclusive
            Items. You can get more prizes over time, based on the level of
            loyalty
          </div>
        </div>
        <div className="w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg bg-black-grid box-border h-[200px] overflow-hidden shrink-0 border-[1px] border-solid border-border-grey">
          <div className="absolute top-[1px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <img
            className="absolute top-[22.4px] left-[23.5px] w-[50px] h-[50px] overflow-hidden object-cover"
            alt=""
            src="/ustar1@2x.png"
          />
          <div className="absolute top-[81px] left-[24px] leading-[140%] font-medium inline-block w-[306px] h-[29px]">
            Stake Dash
          </div>
          <div className="absolute top-[113.4px] left-[24px] text-base leading-[140%] font-light inline-block w-[376px]">
            All of the revenue the protocol makes is diverted to DASH stakers.
            By staking DASH you are entitled to a pro-rate share of it
          </div>
        </div>
        <div className="w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg bg-black-grid box-border h-[200px] overflow-hidden shrink-0 opacity-[0.4] border-[1px] border-solid border-border-grey">
          <div className="absolute top-[1px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <img
            className="absolute top-[22.4px] left-[23.5px] w-[50px] h-[50px] overflow-hidden object-cover"
            alt=""
            src="/ustar1@2x.png"
          />
          <div className="absolute top-[81px] left-[24px] leading-[140%] font-medium inline-block w-[306px] h-[29px]">
            Memecoin Slot Machine
          </div>
          <div className="absolute top-[113.4px] left-[24px] text-base leading-[140%] font-light inline-block w-[376px]">
            Get the chance to win memecoins when playing the slot machine
          </div>
        </div>
      </div>
      <div className="absolute top-[139px] left-[640px] rounded-xl bg-gray-1100 w-[1060px] h-[1021.9px] overflow-hidden" />
      <div className="absolute h-[79.34%] w-[46.46%] top-[13.42%] right-[14.17%] bottom-[7.24%] left-[39.38%] text-xs text-white">
        <img
          className="absolute h-[2.49%] w-[3.36%] top-[0%] right-[0%] bottom-[97.51%] left-[96.64%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-1@2x.png"
        />
        <div className="absolute top-[calc(50%_-_451.95px)] left-[calc(50%_-_446px)] bg-gray-800 w-[828.2px] h-[928.1px] flex flex-col items-center justify-center gap-[80px]">
          <div className="flex flex-col items-center justify-center gap-[20px] text-lg">
            <div className="w-[173px] relative h-[67px]">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-center gap-[11px]">
                <h3 className="m-0 relative text-inherit font-bold font-inherit">
                  Get DASH
                </h3>
                <h1 className="m-0 relative text-5xl font-normal font-inherit">
                  Staking Rewards
                </h1>
              </div>
            </div>
            <div className="w-[343px] relative h-[22px] text-center text-base">
              <div className="absolute top-[0px] left-[0px] leading-[140%] font-light inline-block w-[343px]">
                Boost your yield when you stake
              </div>
            </div>
          </div>
          <div className="rounded flex flex-row items-start justify-center p-[5px] gap-[28px] text-center">
            <div className="w-[150px] rounded-8xs bg-gray-1100 box-border overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-[18px] border-[1px] border-solid border-border">
              <div className="relative leading-[14px]">Stake</div>
            </div>
            <button className="cursor-pointer py-2.5 px-[18px] bg-gray-1100 w-[150px] rounded-8xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-center border-[1px] border-solid border-state-layers-on-primary-opacity-16">
              <div className="relative text-xs leading-[14px] font-medium font-satoshi-variable text-gray-900 text-center">
                Unstake
              </div>
            </button>
            <div className="w-[62px] relative h-12 hidden">
              <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-mini bg-gray-400 box-border h-12 border-[1px] border-solid border-gray-400" />
            </div>
          </div>
          <div className="w-[343px] flex flex-col items-start justify-start text-darkgray">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                <div className="self-stretch h-[17px] flex flex-row items-start justify-between">
                  <div className="relative leading-[140%]">You’re staking</div>
                  <div className="relative leading-[140%]">
                    <span>{`70.4373268 Sol | `}</span>
                    <span className="text-border">Max</span>
                    <span>{` `}</span>
                  </div>
                </div>
                <div className="w-[343px] rounded bg-gray-1100 box-border h-12 flex flex-col items-center justify-center p-[5px] text-sm text-gray-900 border-[0.5px] border-solid border-white">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <button className="cursor-pointer py-2.5 px-[18px] bg-gray-1100 w-[100px] rounded-8xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-center border-[1px] border-solid border-border">
                      <div className="relative text-xs leading-[14px] font-satoshi-variable text-white text-center">
                        SOL
                      </div>
                    </button>
                    <div className="relative">0.0</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                <div className="self-stretch h-[17px] flex flex-row items-start justify-between">
                  <div className="relative leading-[140%]">
                    <span className="whitespace-pre-wrap">{`To receive  `}</span>
                    <span className="text-border">ⓘ</span>
                    <span>{` `}</span>
                  </div>
                  <div className="relative leading-[140%]">0% Slippage</div>
                </div>
                <div className="w-[343px] rounded bg-gray-1100 box-border h-12 flex flex-col items-center justify-center p-[5px] text-sm text-gray-900 border-[0.5px] border-solid border-white">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <button className="cursor-pointer py-2.5 px-[18px] bg-gray-1100 w-[100px] rounded-8xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-center border-[1px] border-solid border-border">
                      <div className="relative text-xs leading-[14px] font-satoshi-variable text-white text-center">
                        DASH
                      </div>
                    </button>
                    <div className="relative">0.0</div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[343px] relative shadow-[-3px_1px_10px_rgba(20,_241,_149,_0.8),_3px_1px_10px_rgba(153,_69,_255,_0.8)] h-12">
                <div className="absolute top-[0px] left-[0px] rounded bg-white w-[343px] h-12" />
                <div className="absolute top-[15px] left-[calc(50%_-_91.5px)] text-sm font-satoshi-variable text-gray-300 text-center flex items-center justify-center w-[183px] h-[19px]">
                  Convert to DASH
                </div>
              </button>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch h-[17px] flex flex-row items-start justify-between">
                  <div className="relative leading-[140%]">
                    <p className="m-0">1 DASH</p>
                  </div>
                  <b className="relative leading-[140%] text-white">
                    ≈1.123 SOL
                  </b>
                </div>
                <div className="self-stretch h-[17px] flex flex-row items-start justify-between">
                  <div className="relative leading-[140%]">
                    <span className="whitespace-pre-wrap">{`Priority fee active  `}</span>
                    <span className="text-border">ⓘ</span>
                    <span>{` `}</span>
                  </div>
                  <button className="cursor-pointer py-0.5 px-[5px] bg-gray-400 rounded flex flex-row items-start justify-start border-[0.5px] border-solid border-purple">
                    <div className="relative text-xs leading-[16px] font-satoshi-variable text-left mix-blend-normal">
                      <span className="text-gray-700">{`Off | `}</span>
                      <span className="text-purple">On</span>
                    </div>
                  </button>
                </div>
                <div className="self-stretch h-[17px] flex flex-row items-center justify-between">
                  <div className="relative leading-[140%]">
                    <span className="whitespace-pre-wrap">{`Tips active  `}</span>
                    <span className="text-border">ⓘ</span>
                    <span>{` `}</span>
                  </div>
                  <button className="cursor-pointer py-0.5 px-[5px] bg-gray-400 rounded flex flex-row items-start justify-start border-[0.5px] border-solid border-purple">
                    <div className="relative text-xs leading-[16px] font-satoshi-variable text-left mix-blend-normal">
                      <span className="text-purple">Off</span>
                      <span className="text-gray-900">{` `}</span>
                      <span className="text-gray-700">| Low | High</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeDash;
