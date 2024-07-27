import type { NextPage } from "next";

const RewardsProgram: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-400 h-[1200px] overflow-y-auto text-left text-sm text-purple font-satoshi-variable">
      <footer className="absolute bottom-[-125px] left-[calc(50%_-_1000px)] [filter:blur(80px)] rounded-[50%] [background:linear-gradient(90deg,_rgba(20,_241,_149,_0.8),_rgba(133,_236,_254,_0.8))] w-[2000px] h-[250px]" />
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
      <div className="absolute top-[139px] left-[calc(50%_-_350px)] rounded-11xl overflow-y-auto flex flex-col items-start justify-start p-[30px] gap-[30px]">
        <div className="flex flex-col items-center justify-start gap-[8px] text-silver-200">
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/list@2x.png"
              />
              <div className="flex-1 relative">Rewards</div>
            </div>
            <div className="w-[85px] relative font-medium text-black hidden shrink-0">
              200/2000
            </div>
          </div>
          <nav className="m-0 self-stretch flex flex-row items-start justify-center gap-[28px] text-center text-xs text-white font-satoshi-variable">
            <div className="rounded-8xs bg-gray-400 overflow-hidden flex flex-row items-start justify-start py-2.5 px-[18px] border-[1px] border-solid border-border">
              <div className="relative leading-[14px]">All</div>
            </div>
            <button className="cursor-pointer [border:none] py-2.5 px-[18px] bg-gray-400 rounded-8xs overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-xs leading-[14px] font-medium font-satoshi-variable text-gray-900 text-center">
                Loyalty
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2.5 px-[18px] bg-gray-400 rounded-8xs overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-xs leading-[14px] font-medium font-satoshi-variable text-gray-900 text-center">
                Discounts
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2.5 px-[18px] bg-gray-400 rounded-8xs overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-xs leading-[14px] font-medium font-satoshi-variable text-gray-900 text-center">
                Limited time offers
              </div>
            </button>
            <div className="w-[62px] relative h-12 hidden">
              <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-mini bg-gray-400 box-border h-12 border-[1px] border-solid border-gray-400" />
            </div>
          </nav>
        </div>
        <div className="w-[1100px] shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-xl bg-gray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[275px]">
          <img
            className="w-[268.1px] relative h-[195px] object-cover opacity-[0.5]"
            alt=""
            src="/image@2x.png"
          />
          <div className="flex flex-col items-start justify-start py-5 px-12 gap-[20px]">
            <img
              className="w-[75px] relative h-[23.8px] overflow-hidden shrink-0 hidden"
              alt=""
              src="/adidas-logo.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[27.3px]">Adidas Airbender</div>
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/fiexternallink@2x.png"
              />
            </div>
            <div className="w-[439px] relative text-xs leading-[27.3px] text-white inline-block h-[55px] shrink-0">
              Enter a raffle to get the chance to win Adidas Airbenders.
            </div>
            <div className="w-[439px] flex flex-row items-start justify-between">
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  Buy Raffle
                </div>
              </button>
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  Edit
                </div>
              </button>
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="self-stretch w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  View
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[1100px] shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-xl bg-gray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[275px]">
          <img
            className="w-[268.1px] relative h-[195px] object-cover opacity-[0.5]"
            alt=""
            src="/image1@2x.png"
          />
          <div className="flex flex-col items-start justify-start py-5 px-12 gap-[20px]">
            <img
              className="w-[75px] relative h-[23.8px] overflow-hidden shrink-0 hidden"
              alt=""
              src="/adidas-logo.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[27.3px]">
                WIF Tokens: Breakpoint Attendees
              </div>
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/fiexternallink@2x.png"
              />
            </div>
            <div className="w-[439px] relative text-xs leading-[27.3px] text-white inline-block h-[55px] shrink-0">
              For all breakpoint attendees, WIF is offering attendees 100,000
              $WIF upon purchasing a BP ticket
            </div>
            <div className="w-[439px] flex flex-row items-start justify-between">
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  Mint Token
                </div>
              </button>
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  Edit
                </div>
              </button>
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="self-stretch w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  View
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[1100px] shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-xl bg-gray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[275px]">
          <img
            className="w-[268.1px] relative h-[195px] object-cover opacity-[0.5]"
            alt=""
            src="/image2@2x.png"
          />
          <div className="flex flex-col items-start justify-start py-5 px-12 gap-[20px]">
            <img
              className="w-[75px] relative h-[23.8px] overflow-hidden shrink-0 hidden"
              alt=""
              src="/adidas-logo.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[27.3px]">{`SMB Gen3 `}</div>
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/fiexternallink@2x.png"
              />
            </div>
            <div className="w-[439px] relative text-xs leading-[27.3px] text-white inline-block h-[55px] shrink-0">
              Enter a raffle to get the chance to win an SMB Gen3 if you are
              already a holder of of the SMB collection.
            </div>
            <div className="w-[439px] flex flex-row items-start justify-between">
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  Buy Raffle
                </div>
              </button>
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  Edit
                </div>
              </button>
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="self-stretch w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  View
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[1100px] shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-xl bg-gray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[275px]">
          <img
            className="w-[268.1px] relative h-[195px] object-cover opacity-[0.5]"
            alt=""
            src="/image3@2x.png"
          />
          <div className="flex flex-col items-start justify-start py-5 px-12 gap-[20px]">
            <img
              className="w-[75px] relative h-[23.8px] overflow-hidden shrink-0 hidden"
              alt=""
              src="/adidas-logo.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[27.3px]">
                Jupiter Tokens: 10 SOL monthly swaps
              </div>
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/fiexternallink@2x.png"
              />
            </div>
            <div className="w-[439px] relative text-xs leading-[27.3px] text-white inline-block h-[55px] shrink-0">{`For all solana wallet holders, Jupiter is offering 10,000 $JUP upon swapping over 10 SOL monthly on Jupiter `}</div>
            <div className="w-[439px] flex flex-row items-start justify-between">
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  Mint Token
                </div>
              </button>
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  Edit
                </div>
              </button>
              <button className="cursor-pointer py-2 px-0 bg-gray-200 rounded-8xs box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-border">
                <div className="self-stretch w-[120px] relative text-sm leading-[32px] font-satoshi-variable text-white text-center flex items-center justify-center shrink-0">
                  View
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[139px] left-[20px] h-[203.4px] flex flex-col items-start justify-start gap-[23px]">
        <button className="cursor-pointer p-0 bg-black-grid w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg box-border h-[200px] overflow-hidden shrink-0 opacity-[0.4] border-[1px] border-solid border-border-grey">
          <div className="absolute top-[0px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <img
            className="absolute top-[22px] left-[24px] w-[51px] h-[51px] overflow-hidden object-cover"
            alt=""
            src="/gift-1@2x.png"
          />
          <div className="absolute top-[85px] left-[24px] text-2xl leading-[140%] font-medium font-satoshi-variable text-whitesmoke-100 text-left inline-block w-[306px] h-[29px]">
            Raffle Lottery
          </div>
          <div className="absolute top-[126px] left-[24px] text-base leading-[140%] font-light font-satoshi-variable text-whitesmoke-100 text-left inline-block w-[376px] h-[50px]">
            Buy Tickets to get the chance to win large prizes weekly
          </div>
        </button>
        <button className="cursor-pointer p-0 bg-black-grid w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg box-border h-[200px] overflow-hidden shrink-0 border-[1px] border-solid border-border-grey">
          <div className="absolute top-[1px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <div className="absolute h-[23.5%] w-[11.6%] top-[11%] right-[82.97%] bottom-[65.5%] left-[5.42%]">
            <img
              className="absolute h-full w-[95.53%] top-[0%] right-[4.47%] bottom-[0%] left-[0%] rounded-[36.68px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector@2x.png"
            />
            <div className="absolute top-[10.6px] left-[6.7px] text-lgi-8 leading-[140%] font-light font-satoshi-variable text-white text-left inline-block w-[42.5px] h-[27.4px]">
              +10
            </div>
          </div>
          <div className="absolute top-[81px] left-[24px] text-2xl leading-[140%] font-medium font-satoshi-variable text-whitesmoke-100 text-left inline-block w-[306px] h-[29px]">
            Rewards program
          </div>
          <div className="absolute top-[113.4px] left-[24px] text-base leading-[140%] font-light font-satoshi-variable text-whitesmoke-100 text-left inline-block w-[376px]">
            Reward loyal customers with points for engagement or exclusive
            Items. You can get more prizes over time, based on the level of
            loyalty
          </div>
        </button>
        <button className="cursor-pointer p-0 bg-black-grid w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg box-border h-[200px] overflow-hidden shrink-0 opacity-[0.4] border-[1px] border-solid border-border-grey">
          <div className="absolute top-[1px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <img
            className="absolute top-[22.4px] left-[23.5px] w-[50px] h-[50px] overflow-hidden object-cover"
            alt=""
            src="/ustar@2x.png"
          />
          <div className="absolute top-[81px] left-[24px] text-2xl leading-[140%] font-medium font-satoshi-variable text-whitesmoke-100 text-left inline-block w-[306px] h-[29px]">
            Stake Dash
          </div>
          <div className="absolute top-[113.4px] left-[24px] text-base leading-[140%] font-light font-satoshi-variable text-whitesmoke-100 text-left inline-block w-[376px]">
            All of the revenue the protocol makes is diverted to DASH stakers.
            By staking DASH you are entitled to a pro-rate share of it
          </div>
        </button>
        <button className="cursor-pointer p-0 bg-black-grid w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg box-border h-[200px] overflow-hidden shrink-0 opacity-[0.4] border-[1px] border-solid border-border-grey">
          <div className="absolute top-[1px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <img
            className="absolute top-[22.4px] left-[23.5px] w-[50px] h-[50px] overflow-hidden object-cover"
            alt=""
            src="/ustar@2x.png"
          />
          <div className="absolute top-[81px] left-[24px] text-2xl leading-[140%] font-medium font-satoshi-variable text-whitesmoke-100 text-left inline-block w-[306px] h-[29px]">
            Memecoin Slot Machine
          </div>
          <div className="absolute top-[113.4px] left-[24px] text-base leading-[140%] font-light font-satoshi-variable text-whitesmoke-100 text-left inline-block w-[376px]">
            Get the chance to win memecoins when playing the slot machine
          </div>
        </button>
      </div>
    </div>
  );
};

export default RewardsProgram;
