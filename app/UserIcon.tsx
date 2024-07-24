"use client";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

export default function UserIcon() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/blog");
  };

  return (
    <div>
      <FaUser
        onClick={handleNavigate}
        className="w-5 h-5 mr-2 transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
      />
    </div>
  );
}
