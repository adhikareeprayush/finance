import { COMPANIES } from "../../assets/Assets";

const Card = () => {
  return (
    <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 py-2 px-4 flex items-center gap-2">
      <img src={COMPANIES.nvda} alt="" className="size-12" />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <h5 className="font-semibold text-neutral-600 dark:text-neutral-200 uppercase">
            NVDA
          </h5>
          <p className="text-sm text-neutral-400">NVIDIA Corporation</p>
        </div>
        <p className="text-sm text-neutral-400">Market Cap: $1.00t</p>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold dark:text-neutral-200 text-neutral-600">
          +$1,234.56
        </p>
        <p className="text-sm text-white bg-primary/50 text-center w-fit mx-auto px-2 py-1 rounded-lg">
          +12.34%
        </p>
      </div>
    </div>
  );
};

export default Card;
