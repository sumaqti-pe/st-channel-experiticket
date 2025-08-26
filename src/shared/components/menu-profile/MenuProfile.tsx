import { User } from "@/shared/icons/User";

export const MenuProfile = () => {
  return (
    <div className="flex items-center">
      <User color="#000" />
      <span className="max-lg:hidden">
        Wilmer Delgado
      </span>
    </div>
  );
};
