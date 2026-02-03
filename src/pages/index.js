import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import IntroScreen from "../components/IntroScreen";

export default function IntroPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const entered = localStorage.getItem("enteredLab");
    if (entered) {
      router.push("/home");
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) return null;

  return <IntroScreen />;
}
