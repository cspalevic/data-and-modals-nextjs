"use client";

import { client } from "@/lib/graphql/client";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

export type ProvidersProps = {
    children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
    <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
)