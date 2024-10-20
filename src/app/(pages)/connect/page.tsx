import { Metadata } from "next";
import ConnectContent from "@/components/ConnectContent";
export const metadata: Metadata = {
  title: "Connect",
};

export default function Connect() {
  return (
    <ConnectContent/>
  );
}
