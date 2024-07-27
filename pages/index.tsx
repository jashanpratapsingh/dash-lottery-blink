import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const RaffleLottery: NextPage = () => {
  const router = useRouter();

  const onInputClick = useCallback(() => {
    router.push("/rewards-program");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-400 h-[1200px] overflow-y-auto text-left text-lg text-white font-satoshi-variable">
      <section className="absolute bottom-[-125px] left-[calc(50%_-_1000px)] [filter:blur(80px)] rounded-[50%] [background:linear-gradient(90deg,_rgba(20,_241,_149,_0.8),_rgba(133,_236,_254,_0.8))] w-[2000px] h-[250px]" />
      <main
        className="absolute w-full top-[0px] right-[0px] left-[0px] h-[1200px] text-left text-mini text-gray-100 font-satoshi-variable"
        id="raffleLottery"
      >
        <header
          className="absolute w-[calc(100%_-_64px)] top-[16px] right-[32px] left-[32px] h-[42px] text-left text-17xl text-white font-satoshi-variable"
          id="header"
        >
          <b className="absolute top-[calc(50%_-_25px)] left-[-0.5px]">DASH</b>
          <button
            className="[border:none] p-0 bg-whitesmoke-200 absolute top-[calc(50%_-_21px)] left-[1549px] rounded-lg w-[111.2px] h-[42px]"
            autoFocus={true}
            disabled={true}
            id="getStarted"
          >
            <div className="absolute top-[11.5px] left-[16px] text-mini leading-[18px] font-medium font-satoshi-variable text-gray-100 text-left flex items-center w-[82.6px] h-[18px]">
              Get started
            </div>
          </button>
          <div className="absolute top-[1px] left-[1676.2px] rounded-lg [background:linear-gradient(91.12deg,_#232324_4.07%,_#323335_50%,_#232324_95.93%)] w-[179.8px] h-10 overflow-hidden text-center text-mini">
            <img
              className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_65.9px)] w-3 h-3.5 object-cover"
              id="walletImage"
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
      <div className="absolute top-[139px] left-[640px] rounded-xl bg-gray-1100 w-[1060px] h-[1021.9px] overflow-hidden" />
      <div className="absolute h-[79.34%] w-[46.46%] top-[13.42%] right-[14.17%] bottom-[7.24%] left-[39.38%]">
        <img
          className="absolute h-[2.49%] w-[3.36%] top-[0%] right-[0%] bottom-[97.51%] left-[96.64%] max-w-full overflow-hidden max-h-full object-cover"
          id="solanaImage"
          alt=""
          src="/group-1@2x.png"
        />
        <div className="absolute top-[calc(50%_-_451.95px)] left-[calc(50%_-_446px)] w-[828.2px] h-[928.1px] flex flex-col items-center justify-center gap-[80px]">
          <div className="flex flex-col items-center justify-center gap-[20px]">
            <div className="w-[196px] relative h-[67px]">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-center gap-[11px]">
                <b className="relative">DASH Lottery</b>
                <div className="relative text-5xl">103,000,000 SOL</div>
              </div>
            </div>
            <div className="w-[206px] relative h-[79px] text-center text-base text-gray-1000">
              <div className="absolute top-[0px] left-[7px] font-medium">
                Hour
              </div>
              <div className="absolute top-[0px] left-[90px] font-medium">
                Min
              </div>
              <div className="absolute top-[0px] left-[168px] font-medium">
                Sec
              </div>
              <div className="absolute top-[29px] left-[0px] w-[50px] h-[50px] text-lg text-white">
                <div className="absolute top-[0px] left-[0px] rounded-sm box-border w-[50px] h-[50px] border-[1px] border-solid border-white" />
                <div className="absolute top-[16px] left-[15px] leading-[100%]">
                  24
                </div>
              </div>
              <div className="absolute top-[29px] left-[78px] w-[50px] h-[50px] text-lg text-white">
                <div className="absolute top-[0px] left-[0px] rounded-sm box-border w-[50px] h-[50px] border-[1px] border-solid border-white" />
                <div className="absolute top-[16px] left-[13px] leading-[100%]">
                  04
                </div>
              </div>
              <div className="absolute top-[29px] left-[156px] w-[50px] h-[50px] text-lg text-white">
                <div className="absolute top-[0px] left-[0px] rounded-sm box-border w-[50px] h-[50px] border-[1px] border-solid border-white" />
                <div className="absolute top-[16px] left-[14px] leading-[100%]">
                  54
                </div>
              </div>
              <img
                className="absolute top-[41px] left-[60px] w-2 h-[26px] object-cover"
                id="colons"
                alt=""
                src="/group-4@2x.png"
              />
              <img
                className="absolute top-[41px] left-[138px] w-2 h-[26px] object-cover"
                id="colons"
                alt=""
                src="/group-4@2x.png"
              />
            </div>
          </div>
          <div className="w-[343px] relative h-[214px] text-xs text-darkgray">
            <div className="absolute top-[0px] left-[0px] w-[343px] h-[61px]">
              <div className="absolute top-[27px] left-[0px] leading-[140%] inline-block w-[343px]">
                <p className="m-0">Enter numbers between 0 and 20.</p>
                <p className="m-0">
                  For example, you could select and input: 2, 14, 7
                </p>
              </div>
              <div className="absolute top-[0px] left-[0px] text-base leading-[140%] font-light text-white inline-block w-[343px]">
                Select the 3 numbers for the Lottery
              </div>
            </div>
            <div className="absolute top-[98px] left-[0px] flex flex-col items-start justify-start gap-[20px]">
              <input
                className="[outline:none] font-satoshi-variable text-sm bg-gray-1100 w-[343px] relative rounded box-border h-12 pt-[15px] px-[21px] pb-3.5 text-white border-[0.5px] border-solid border-white"
                id="raffleInput"
                placeholder="Enter Raffle Number"
                type="text"
              />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[343px] relative shadow-[-3px_1px_10px_rgba(20,_241,_149,_0.8),_3px_1px_10px_rgba(153,_69,_255,_0.8)] h-12 hover:animate-[1s_ease_0s_0_normal_none_shadow-inset-center] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_scale-up] active:opacity-[1]"
                id="bettingButton"
              >
                <div className="absolute top-[0px] left-[0px] rounded bg-white w-[343px] h-12 hover:animate-[1s_ease_0s_0_normal_none_shadow-inset-center] hover:opacity-[1]" />
                <div className="absolute top-[15px] left-[calc(50%_-_91.5px)] text-sm font-satoshi-variable text-gray-300 text-center flex items-center justify-center w-[183px] h-[19px]">
                  Bet 1 SOL
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[139px] left-[20px] h-[203.4px] flex flex-col items-start justify-start gap-[23px] text-2xl text-whitesmoke-100">
        <div className="w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg bg-black-grid box-border h-[200px] overflow-hidden shrink-0 border-[1px] border-solid border-border-grey hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
          <div className="absolute top-[0px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <img
            className="absolute top-[22px] left-[24px] w-[51px] h-[51px] overflow-hidden object-cover"
            id="gift"
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
        <button
          className="cursor-pointer p-0 bg-black-grid w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg box-border h-[200px] overflow-hidden shrink-0 opacity-[0.4] border-[1px] border-solid border-border-grey hover:animate-[1s_ease-in-out_0s_0_alternate-reverse_none_shadow-pop-tr] hover:opacity-[1] active:animate-[0.1s_ease_0s_1_normal_none_scale-up] active:opacity-[1]"
          onClick={onInputClick}
        >
          <div className="absolute top-[1px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <div className="absolute h-[23.5%] w-[11.6%] top-[11%] right-[82.97%] bottom-[65.5%] left-[5.42%]">
            <img
              className="absolute h-full w-[95.53%] top-[0%] right-[4.47%] bottom-[0%] left-[0%] rounded-[36.68px] max-w-full overflow-hidden max-h-full object-cover"
              id="points"
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
        <button className="cursor-pointer p-0 bg-black-grid w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg box-border h-[200px] overflow-hidden shrink-0 opacity-[0.4] border-[1px] border-solid border-border-grey hover:animate-[1s_ease_0s_0_normal_none_shadow-pop-tr] hover:opacity-[1] active:animate-[0.5s_ease_0s_1_normal_none_scale-up] active:opacity-[1]">
          <div className="absolute top-[1px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <img
            className="absolute top-[22.4px] left-[23.5px] w-[50px] h-[50px] overflow-hidden object-cover"
            id="starImage"
            alt=""
            src="/ustar@2x.png"
          />
          <div className="absolute top-[81px] left-[24px] text-2xl leading-[140%] font-medium font-satoshi-variable text-whitesmoke-100 text-left inline-block w-[306px] h-[29px]">
            Stake Dash
          </div>
          <div className="absolute top-[113.4px] left-[24px] text-base leading-[140%] font-light font-satoshi-variable text-whitesmoke-100 text-left inline-block w-[376px]">
            Reward loyal customers with points for engagement. You can add more
            prizes over time, and based on the level of loyalty
          </div>
        </button>
        <button className="cursor-pointer p-0 bg-black-grid w-[424px] relative shadow-[3px_0px_10px_rgba(153,_69,_255,_0.4),_-3px_0px_10px_rgba(20,_241,_149,_0.4)] rounded-lg box-border h-[200px] overflow-hidden shrink-0 opacity-[0.4] border-[1px] border-solid border-border-grey hover:animate-[1s_ease_0s_0_normal_none_shadow-inset-center] hover:opacity-[1] active:animate-[0.5s_ease_0s_infinite_normal_none_scale-up] active:opacity-[1]">
          <div className="absolute top-[1px] left-[0.5px] rounded-lg bg-gray-1200 box-border w-[424px] h-[200px] overflow-hidden border-[1px] border-solid border-border-grey" />
          <img
            className="absolute top-[22.4px] left-[23.5px] w-[50px] h-[50px] overflow-hidden object-cover"
            id="starImage"
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

export default RaffleLottery;
