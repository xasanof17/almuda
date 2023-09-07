import Select, { GroupBase, OptionsOrGroups } from "react-select";

type SelectProps = {
  options: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
};

export const SelectComponent = ({ options }: SelectProps) => {
  return <Select options={options} closeMenuOnSelect isSearchable className="mt-3"/>;
};
