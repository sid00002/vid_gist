import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserAvatar({
  image,
  name,
}: {
  image?: string;
  name: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
}
