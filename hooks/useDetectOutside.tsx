import React, { useEffect } from "react";

interface DetectOutsideProps {
  ref: React.RefObject<HTMLFormElement | null>;
  callback: () => void;
}

function useDetectOutside({ ref, callback }: DetectOutsideProps) {
  useEffect(() => {
    // обработчик для обнаружения кликов за пределами ссылки
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
}

export default useDetectOutside;
