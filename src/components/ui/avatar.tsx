interface AvatarProps {
  name: string;
}

export function Avatar({ name }: AvatarProps) {
  return (
    <div className="inline-flex size-8 items-center justify-center rounded-full bg-purple-600 text-center text-xs text-white lg:size-12">
      {name.toUpperCase().slice(0, 2)}
    </div>
  );
}
