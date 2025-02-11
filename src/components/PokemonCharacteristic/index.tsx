import { Progress } from "@/components";

type PokemonCharacteristicProps = {
  statName: string;
  statValue: number;
};

export const PokemonCharacteristic = ({
  statName,
  statValue,
}: PokemonCharacteristicProps) => {
  return (
    <div
      className="flex items-stretch"
      style={{ width: "500px" }}
      key={statName}
    >
      <h3 className="p-3 w-2/4">
        {statName}: {statValue}
      </h3>
      <Progress className="w-2/4 m-auto" value={statValue} />
    </div>
  );
};
