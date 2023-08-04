"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("386ac0e3-b542-41ca-a942-71c5a62b5b10");
  }, []);

  return null;
};