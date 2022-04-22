import type { NextPage as NextPageOriginal } from "next";
import type { AppProps as AppPropsOriginal } from "next/app";
import type { ReactElement, ReactNode } from "react";

export type NextPage = NextPageOriginal & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppProps = AppPropsOriginal & {
  Component: NextPage;
};
