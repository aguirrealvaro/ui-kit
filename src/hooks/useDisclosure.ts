import { useCallback, useEffect, useRef, useState } from "react";

type PhasesType = "unmounted" | "mounting" | "mounted" | "unmounting";

type UseDisclosureParams = {
  timeout?: number;
  closeOnResize?: boolean;
};

type UseDisclosureReturn = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isUnmounting: boolean;
  phase: PhasesType;
};

export const useDisclosure = (objParams: UseDisclosureParams = {}): UseDisclosureReturn => {
  const defaultParams: UseDisclosureParams = { timeout: 200, closeOnResize: false };
  const params: UseDisclosureParams = { ...defaultParams, ...objParams };
  const { timeout, closeOnResize } = params;

  const [phase, setPhase] = useState<PhasesType>("unmounted");
  const timeoutId = useRef<number>(0);

  const onOpen = useCallback(() => {
    if (phase !== "unmounted") return;
    setPhase("mounting");
  }, [phase]);

  const onClose = useCallback(() => {
    if (phase !== "mounted") return;
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

  const isOpen = phase !== "unmounted";
  const isUnmounting = phase === "unmounting";

  useEffect(() => {
    if (!isOpen || !closeOnResize) return;
    window.addEventListener("resize", onClose);
    return () => window.removeEventListener("resize", onClose);
  }, [closeOnResize, isOpen, onClose]);

  return { isOpen, onOpen, onClose, onToggle, isUnmounting, phase };
};
