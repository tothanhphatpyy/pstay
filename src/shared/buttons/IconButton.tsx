import React from "react";
import classNames from "classnames";
import { Button, ButtonProps } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps extends ButtonProps {
  icon: string | string[];
  iconAlign?: "left" | "right" | "middle";
  iconClassName?: string;
  transform?: string;
  children?: any;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconAlign = "left",
  iconClassName,
  transform,
  children,
  ...rest
}) => {
  return (
    <Button {...rest}>
      {iconAlign === "right" && children}
      <FontAwesomeIcon
        icon={icon as any}
        className={classNames(iconClassName, {
          "me-1": children && iconAlign === "left",
          "ms-1": children && iconAlign === "right",
        })}
        size="xs"
        transform={transform}
      />
      {iconAlign === "left" || iconAlign === "middle" ? children : false}
    </Button>
  );
};

export default IconButton;
