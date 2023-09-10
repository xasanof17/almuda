import { SelectController, TextFieldController } from "@/components/inputs";
import { dialogData } from "@/constants/dialogData";
import { Dispatch, FC, SetStateAction } from "react";
import { Control } from "react-hook-form";
import { Button } from "../Button";

interface ITabOne {
  control: Control<any>;
  setTab: Dispatch<SetStateAction<boolean>>;
}

export const TabOne: FC<ITabOne> = ({ control, setTab }) => {
  return (
    <div className="flex flex-col space-y-5">
      <SelectController
        control={control}
        name="business_activity"
        label="Choose your business activity"
        options={dialogData.businness_activity}
      />
      <SelectController
        control={control}
        name="premises"
        label="What type of premises would you require?"
        options={dialogData.premises}
      />

      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <TextFieldController
          control={control}
          name="owners"
          label="Number of owners"
        />
        <TextFieldController
          control={control}
          name="vizas"
          label="Number of vizas"
        />
      </div>
      <Button
        type="button"
        title="Next"
        onClick={() => setTab((prev) => !prev)}
        className="btn-secondary mt-5 w-full !p-2"
        text="Next"
      />
    </div>
  );
};
