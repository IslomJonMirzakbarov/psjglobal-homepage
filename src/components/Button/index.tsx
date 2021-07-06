import classNames from "classnames";

import SmallSpinner from "../Spinner/SmallSpinner";

import styles from "./Button.module.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  round?: boolean;
  noStyle?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "grey";
}

function Button({
  children,
  noStyle,
  className,
  loading,
  variant = "primary",
  round,
  ...props
}: ButtonProps) {
  if (noStyle) {
    return (
      <button
        className={classNames(styles.NoStyleButton, className)}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={classNames(styles.Button, className, styles[variant], {
        [styles.round]: round,
      })}
      {...props}
    >
      {loading ? <SmallSpinner className={styles.Spinner} /> : children}
    </button>
  );
}

export default Button;
