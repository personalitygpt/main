import { useMemo } from "react";

const Type = ({ typePosition, typeTop, typeLeft }) => {
  const typeStyle = useMemo(() => {
    return {
      position: typePosition,
      top: typeTop,
      left: typeLeft,
    };
  }, [typePosition, typeTop, typeLeft]);

  return (
    <div
      className="w-[511px] h-[45px] text-left text-6xl text-dimgray font-inter"
      style={typeStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-gainsboro" />
      <div className="absolute h-[75.56%] w-[82.19%] top-[17.78%] left-[1.17%] inline-block">
        {" "}
        Type Here...
      </div>
    </div>
  );
};

export default Type;
