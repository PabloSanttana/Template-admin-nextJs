import Link from "next/link";
import useAuth from "../../data/hook/useAuth";
interface AvatarUserProps {}

export default function AvatarUser(props: AvatarUserProps) {
  const { user } = useAuth();

  return (
    <Link href="/perfil">
      <img
        src={user?.imageUrl ?? " /images/user.png"}
        alt="Avatar usuário"
        className="w-8 h-8 rounded-full cursor-pointer ml-4"
      />
    </Link>
  );
}
