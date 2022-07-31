import { ButtonContainter, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainter variant={variant}>Enviar</ButtonContainter>;
}
