import { AvatarContainer, AvatarPlaceholderContainer } from "./styles";

export interface AvatarProps {
  data: { email: string; firstName: string; lastName: string };
  onClick?: () => any;
}
function Avatar({ data, onClick }: AvatarProps) {
  const name = `${data.firstName} ${data.lastName}`;

  const _onClick = () => {
    if (onClick) onClick();
  };

  return (
    <AvatarContainer
      as={!!onClick ? "button" : "div"}
      isClickable={!!_onClick}
      onClick={_onClick}
    >
      <div className="user">
        <p className="name">{name}</p>
        <p className="email">{data.email}</p>
      </div>
    </AvatarContainer>
  );
}

export default Avatar;

export function AvatarPlaceholder() {
  return (
    <AvatarPlaceholderContainer>
      <div className="user">
        <div className="name" />
        <div className="email" />
      </div>
    </AvatarPlaceholderContainer>
  );
}
