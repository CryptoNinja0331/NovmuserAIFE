import React, { FC } from "react";
import { SparklesIcon, LightBulbIcon } from "@heroicons/react/24/solid";

export type TSectionBubbleProps = {
  variant: "about" | "features";
  className?: string | undefined;
};

const SectionBubble: FC<TSectionBubbleProps> = ({ variant, className }) => {
  const metaData = React.useMemo<
    | {
        label: string;
        icon?: React.ReactNode;
      }
    | undefined
  >(() => {
    const iconClassName =
      "text-indigo-600 lg:md:h-[32px] lg:md:w-[28px] w-[24px] h-[24px]";
    if (variant === "about") {
      return {
        label: "About",
        icon: <SparklesIcon className={iconClassName} />,
      };
    }
    if (variant === "features") {
      return {
        label: "Features",
        icon: <LightBulbIcon className={iconClassName} />,
      };
    }
  }, [variant]);

  return (
    <div
      className={`flex flex-row justify-between items-center gap-[10px] lg:px-[28px] md:px-[24px] px-[20px]
      rounded-[32px] border border-indigo-500 bg-indigo-950 
      bg-opacity-80 w-max ${className ?? className}`}
    >
      {metaData?.icon ?? metaData!.icon}
      <p className="lg:text-[36px] md:text-[28px] text-[20px] font-medium text-white">
        {metaData?.label}
      </p>
    </div>
  );
};

export default React.memo(SectionBubble);
