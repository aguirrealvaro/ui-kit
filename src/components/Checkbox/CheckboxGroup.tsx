import {
  FunctionComponent,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";

type CheckboxGroupType = {
  children: ReactNode;
  id: string;
  label?: ReactNode;
};

export const CheckboxGroup: FunctionComponent<CheckboxGroupType> = ({
  children,
  id,
  label,
}) => {
  const labelId = `${id}-label`;

  const labelComponent = (() => {
    if (!isValidElement(label)) return null;
    return cloneElement(label as ReactElement, { id: labelId });
  })();

  const isLabelValidElement = isValidElement(label);

  return (
    <>
      {labelComponent}
      <div {...(isLabelValidElement && { "aria-labelledby": labelId })}>{children}</div>
    </>
  );
};
