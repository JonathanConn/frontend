import { FC } from "react";

export const HeroSection: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex-1 min-w-fit sm:min-w-min mt-12 mx-8">
      <h3 className="text-2xl text-neutral-800 md:text-3xl">{title}</h3>
      <h5 className="text-lg text-zinc-500 md:text-xl">{subtitle}</h5>
    </div>
  );
};
