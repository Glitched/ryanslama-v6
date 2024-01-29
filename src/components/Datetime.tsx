import { LOCALE } from "@config";

interface DatetimesProps {
  pubDatetime: string | Date;
  modDatetime: string | Date | undefined | null;
}

interface Props extends DatetimesProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({
  pubDatetime,
  modDatetime,
  className,
}: Props) {
  return (
    <div className={`flex items-center text-skin-muted ${className}`}>
      <span className="sr-only">Posted on:</span>
      <span className={`font-sans text-xs font-bold uppercase tracking-wide`}>
        <FormattedDatetime
          pubDatetime={pubDatetime}
          modDatetime={modDatetime}
        />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ pubDatetime, modDatetime }: DatetimesProps) => {
  const myDatetime = new Date(modDatetime ? modDatetime : pubDatetime);

  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return <>{date}</>;
};
