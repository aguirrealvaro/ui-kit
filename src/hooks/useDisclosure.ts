import { useCallback, useEffect, useRef, useState } from "react";

type PhasesType = "unmounted" | "mounting" | "mounted" | "unmounting";

type UseDisclosureParams = {
  timeout?: number;
};

type UseDisclosureReturn = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isUnmounting: boolean;
};

export const useDisclosure = (
  { timeout }: UseDisclosureParams = { timeout: 200 }
): UseDisclosureReturn => {
  const [phase, setPhase] = useState<PhasesType>("unmounted");
  const timeoutId = useRef<number>(0);

  const onOpen = useCallback(() => {
    if (phase === "mounting" || phase === "mounted" || phase === "unmounting") return;
    setPhase("mounting");
  }, [phase]);

  const onClose = useCallback(() => {
    if (phase === "unmounting" || phase === "unmounted" || phase === "mounting") return;
    setPhase("unmounting");
  }, [phase]);

  const onToggle = useCallback(() => {
    if (phase === "mounting" || phase === "mounted") onClose();
    if (phase === "unmounting" || phase === "unmounted") onOpen();
  }, [onClose, onOpen, phase]);

  useEffect(() => {
    if (phase === "unmounting") {
      timeoutId.current = window.setTimeout(() => setPhase("unmounted"), timeout);
    } else if (phase === "mounting") {
      timeoutId.current = window.setTimeout(() => setPhase("mounted"), timeout);
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [phase, timeout]);

  useEffect(() => {
    window.addEventListener("resize", onClose);
    return () => window.removeEventListener("resize", onClose);
  }, [onClose]);

  const isOpen = phase !== "unmounted";
  const isUnmounting = phase === "unmounting";

  return { isOpen, onOpen, onClose, onToggle, isUnmounting };
};
